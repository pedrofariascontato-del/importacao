/**
 * Facebook Pixel (Meta Pixel) tracking service
 * Tracks events for Facebook Ads conversion tracking and analytics
 */

// Meta Pixel Credentials - Zaveno Trading Imersão China
const PIXEL_ID = "2671738819859416";
const ACCESS_TOKEN = "EAAUTMl9TE88BQEZBdK336WubrQ9Rk1HyhgPUHCZCoNkGdcNX49OZAXZB94tI4ABCRcmwccxBsLsm2buCuU6QKeyJZBR0gtVkXZAmXRKV6kWeZBqIXR6V5OVtZCEoGFYwMn1hcJeJdomXRLBWF3yuZBEjLjvIc9Tt9s21sPDObU7PjS8NzJkc3TZB21q1M47nYZCN6IElAZDZD";

interface PixelEventParams {
  [key: string]: string | number | boolean | string[] | number[];
}

interface UserData {
  em?: string; // email (hashed)
  ph?: string; // phone (hashed)
  fn?: string; // first name (hashed)
  ln?: string; // last name (hashed)
  ct?: string; // city (hashed)
  st?: string; // state (hashed)
  zp?: string; // zip code (hashed)
  country?: string; // country code
  external_id?: string; // unique user id
}

/**
 * Track a Facebook Pixel event
 * @param eventName - Standard event name (e.g., "ViewContent", "Purchase", "AddToCart")
 * @param customData - Optional custom parameters for the event
 * @param userData - Optional user data for better matching
 */
export async function trackPixelEvent(
  eventName: string,
  customData?: PixelEventParams,
  userData?: UserData
): Promise<boolean> {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn("Facebook Pixel credentials not configured");
    return false;
  }

  try {
    const eventData = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "app",
          user_data: userData || {},
          custom_data: customData || {},
        },
      ],
      access_token: ACCESS_TOKEN,
    };

    const response = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      }
    );

    const result = await response.json();

    if (response.ok) {
      return true;
    } else {
      console.error("Facebook Pixel tracking error:", result);
      return false;
    }
  } catch (error) {
    console.error("Error tracking Facebook Pixel event:", error);
    return false;
  }
}

/**
 * Standard Facebook Pixel events
 */
export const PixelEvents = {
  // E-commerce events
  ViewContent: "ViewContent",
  AddToCart: "AddToCart",
  AddToWishlist: "AddToWishlist",
  InitiateCheckout: "InitiateCheckout",
  AddPaymentInfo: "AddPaymentInfo",
  Purchase: "Purchase",

  // Lead generation events
  Lead: "Lead",
  CompleteRegistration: "CompleteRegistration",
  Contact: "Contact",
  Schedule: "Schedule",
  SubmitApplication: "SubmitApplication",

  // Engagement events
  Search: "Search",
  StartTrial: "StartTrial",
  Subscribe: "Subscribe",

  // Custom events can be added as needed
};

/**
 * Helper functions for common events
 */

export async function trackPageView(pageName: string): Promise<boolean> {
  return trackPixelEvent(PixelEvents.ViewContent, {
    content_name: pageName,
  });
}

export async function trackPurchase(
  value: number,
  currency: string = "BRL",
  contentIds?: string[]
): Promise<boolean> {
  return trackPixelEvent(PixelEvents.Purchase, {
    value,
    currency,
    content_ids: contentIds || [],
  });
}

export async function trackAddToCart(
  contentId: string,
  contentName: string,
  value: number,
  currency: string = "BRL"
): Promise<boolean> {
  return trackPixelEvent(PixelEvents.AddToCart, {
    content_id: contentId,
    content_name: contentName,
    value,
    currency,
  });
}

export async function trackLead(leadName?: string): Promise<boolean> {
  return trackPixelEvent(PixelEvents.Lead, leadName ? { content_name: leadName } : {});
}

export async function trackCompleteRegistration(
  status: string = "completed"
): Promise<boolean> {
  return trackPixelEvent(PixelEvents.CompleteRegistration, {
    status,
  });
}

export async function trackSearch(searchString: string): Promise<boolean> {
  return trackPixelEvent(PixelEvents.Search, {
    search_string: searchString,
  });
}
