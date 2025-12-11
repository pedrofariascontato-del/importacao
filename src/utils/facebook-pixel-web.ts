/**
 * Facebook Pixel for Web
 * This module provides browser-specific Facebook Pixel tracking
 */

// Declare fbq function for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

/**
 * Track a Facebook Pixel event on web
 * @param eventName - Standard event name (e.g., "ViewContent", "Purchase", "AddToCart")
 * @param customData - Optional custom parameters for the event
 */
export function trackWebPixelEvent(
  eventName: string,
  customData?: Record<string, any>
): void {
  if (typeof window !== "undefined" && window.fbq) {
    if (customData) {
      window.fbq("track", eventName, customData);
    } else {
      window.fbq("track", eventName);
    }
  }
}

/**
 * Track a custom Facebook Pixel event on web
 * @param eventName - Custom event name
 * @param customData - Optional custom parameters for the event
 */
export function trackWebCustomEvent(
  eventName: string,
  customData?: Record<string, any>
): void {
  if (typeof window !== "undefined" && window.fbq) {
    if (customData) {
      window.fbq("trackCustom", eventName, customData);
    } else {
      window.fbq("trackCustom", eventName);
    }
  }
}

/**
 * Helper functions for common web events
 */

export function trackWebPageView(pageName?: string): void {
  trackWebPixelEvent("PageView", pageName ? { content_name: pageName } : undefined);
}

export function trackWebPurchase(
  value: number,
  currency: string = "BRL",
  contentIds?: string[]
): void {
  trackWebPixelEvent("Purchase", {
    value,
    currency,
    content_ids: contentIds || [],
  });
}

export function trackWebAddToCart(
  contentId: string,
  contentName: string,
  value: number,
  currency: string = "BRL"
): void {
  trackWebPixelEvent("AddToCart", {
    content_id: contentId,
    content_name: contentName,
    value,
    currency,
  });
}

export function trackWebLead(leadName?: string): void {
  trackWebPixelEvent("Lead", leadName ? { content_name: leadName } : undefined);
}

export function trackWebCompleteRegistration(status: string = "completed"): void {
  trackWebPixelEvent("CompleteRegistration", { status });
}

export function trackWebSearch(searchString: string): void {
  trackWebPixelEvent("Search", { search_string: searchString });
}

export function trackWebViewContent(contentName: string, contentId?: string): void {
  trackWebPixelEvent("ViewContent", {
    content_name: contentName,
    content_id: contentId,
  });
}

export function trackWebInitiateCheckout(
  value?: number,
  currency: string = "BRL",
  numItems?: number
): void {
  const data: Record<string, any> = {};
  if (value !== undefined) data.value = value;
  if (currency) data.currency = currency;
  if (numItems !== undefined) data.num_items = numItems;

  trackWebPixelEvent("InitiateCheckout", Object.keys(data).length > 0 ? data : undefined);
}

export function trackWebAddToWishlist(
  contentId?: string,
  contentName?: string,
  value?: number,
  currency: string = "BRL"
): void {
  const data: Record<string, any> = {};
  if (contentId) data.content_id = contentId;
  if (contentName) data.content_name = contentName;
  if (value !== undefined) data.value = value;
  if (currency) data.currency = currency;

  trackWebPixelEvent("AddToWishlist", Object.keys(data).length > 0 ? data : undefined);
}
