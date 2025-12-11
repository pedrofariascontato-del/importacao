/**
 * Meta Pixel Tracking Service for React Native
 *
 * This service sends tracking events to Meta Pixel using the Conversions API.
 * The Conversions API is the recommended approach for mobile apps.
 */

import * as Device from "expo-device";
import * as Application from "expo-application";
import { Platform } from "react-native";
import { META_PIXEL_CONFIG, PixelEvent } from "../config/meta-pixel";

interface EventData {
  event_name: PixelEvent;
  event_time: number;
  action_source: string;
  user_data: {
    client_ip_address?: string;
    client_user_agent?: string;
    [key: string]: any;
  };
  custom_data?: {
    [key: string]: any;
  };
}

class MetaPixelService {
  private pixelId: string;
  private accessToken: string;
  private apiVersion: string;
  private baseUrl: string;
  private deviceInfo: any = null;

  constructor() {
    this.pixelId = META_PIXEL_CONFIG.pixelId;
    this.accessToken = META_PIXEL_CONFIG.accessToken;
    this.apiVersion = META_PIXEL_CONFIG.apiVersion;
    this.baseUrl = `https://graph.facebook.com/${this.apiVersion}/${this.pixelId}/events`;
    this.initializeDeviceInfo();
  }

  private async initializeDeviceInfo() {
    try {
      this.deviceInfo = {
        deviceName: Device.deviceName,
        deviceModel: Device.modelName,
        osName: Device.osName,
        osVersion: Device.osVersion,
        platform: Platform.OS,
        appVersion: Application.nativeApplicationVersion,
        buildVersion: Application.nativeBuildVersion
      };
    } catch (error) {
      console.warn("Failed to get device info:", error);
    }
  }

  /**
   * Track a Meta Pixel event
   * @param eventName - The name of the event to track
   * @param customData - Optional custom data to send with the event
   * @param userData - Optional user data (email, phone, etc.)
   */
  async trackEvent(
    eventName: PixelEvent,
    customData?: Record<string, any>,
    userData?: Record<string, any>
  ): Promise<boolean> {
    try {
      const eventData: EventData = {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "app",
        user_data: {
          ...userData,
          client_user_agent: this.getUserAgent()
        }
      };

      if (customData) {
        eventData.custom_data = customData;
      }

      const response = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: [eventData],
          access_token: this.accessToken
        })
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Meta Pixel tracking error:", result);
        return false;
      }

      console.log("Meta Pixel event tracked successfully:", eventName);
      return true;
    } catch (error) {
      console.error("Failed to track Meta Pixel event:", error);
      return false;
    }
  }

  /**
   * Track PageView event
   */
  async trackPageView(pageName?: string) {
    return this.trackEvent("PageView", {
      page_name: pageName
    });
  }

  /**
   * Track Lead event (for lead generation)
   */
  async trackLead(leadData?: Record<string, any>) {
    return this.trackEvent("Lead", leadData);
  }

  /**
   * Track ViewContent event
   */
  async trackViewContent(contentName: string, contentCategory?: string, value?: number) {
    return this.trackEvent("ViewContent", {
      content_name: contentName,
      content_category: contentCategory,
      value: value,
      currency: "BRL"
    });
  }

  /**
   * Track Purchase event
   */
  async trackPurchase(value: number, currency: string = "BRL", contentIds?: string[]) {
    return this.trackEvent("Purchase", {
      value: value,
      currency: currency,
      content_ids: contentIds
    });
  }

  /**
   * Track CompleteRegistration event
   */
  async trackCompleteRegistration(status?: string) {
    return this.trackEvent("CompleteRegistration", {
      status: status,
      registration_method: "app"
    });
  }

  /**
   * Track Contact event
   */
  async trackContact() {
    return this.trackEvent("Contact", {
      contact_method: "app"
    });
  }

  /**
   * Track InitiateCheckout event
   */
  async trackInitiateCheckout(value?: number, currency: string = "BRL") {
    return this.trackEvent("InitiateCheckout", {
      value: value,
      currency: currency
    });
  }

  /**
   * Track Search event
   */
  async trackSearch(searchString: string) {
    return this.trackEvent("Search", {
      search_string: searchString
    });
  }

  /**
   * Track custom event
   */
  async trackCustomEvent(eventName: string, eventData?: Record<string, any>) {
    return this.trackEvent(eventName as PixelEvent, eventData);
  }

  /**
   * Get user agent string
   */
  private getUserAgent(): string {
    if (!this.deviceInfo) {
      return `${Platform.OS} App`;
    }
    return `${this.deviceInfo.deviceModel} ${this.deviceInfo.osName}/${this.deviceInfo.osVersion} App/${this.deviceInfo.appVersion}`;
  }
}

// Export singleton instance
export const metaPixel = new MetaPixelService();
