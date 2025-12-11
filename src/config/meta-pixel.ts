/**
 * Meta Pixel Configuration
 *
 * This file contains the Meta Pixel configuration for tracking events.
 * DO NOT share or expose these credentials in the UI.
 */

export const META_PIXEL_CONFIG = {
  pixelId: "2671738819859416",
  accessToken: "EAAUTMl9TE88BQEZBdK336WubrQ9Rk1HyhgPUHCZCoNkGdcNX49OZAXZB94tI4ABCRcmwccxBsLsm2buCuU6QKeyJZBR0gtVkXZAmXRKV6kWeZBqIXR6V5OVtZCEoGFYwMn1hcJeJdomXRLBWF3yuZBEjLjvIc9Tt9s21sPDObU7PjS8NzJkc3TZB21q1M47nYZCN6IElAZDZD",
  apiVersion: "v21.0"
} as const;

// Standard Meta Pixel Events
export const PIXEL_EVENTS = {
  PAGE_VIEW: "PageView",
  VIEW_CONTENT: "ViewContent",
  ADD_TO_CART: "AddToCart",
  INITIATE_CHECKOUT: "InitiateCheckout",
  PURCHASE: "Purchase",
  LEAD: "Lead",
  COMPLETE_REGISTRATION: "CompleteRegistration",
  SEARCH: "Search",
  ADD_PAYMENT_INFO: "AddPaymentInfo",
  ADD_TO_WISHLIST: "AddToWishlist",
  CONTACT: "Contact",
  CUSTOMIZE_PRODUCT: "CustomizeProduct",
  DONATE: "Donate",
  FIND_LOCATION: "FindLocation",
  SCHEDULE: "Schedule",
  START_TRIAL: "StartTrial",
  SUBMIT_APPLICATION: "SubmitApplication",
  SUBSCRIBE: "Subscribe"
} as const;

export type PixelEvent = typeof PIXEL_EVENTS[keyof typeof PIXEL_EVENTS];
