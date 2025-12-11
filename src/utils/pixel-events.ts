/**
 * Meta Pixel Event Tracking Utilities
 *
 * Helpers para rastrear eventos importantes na landing page
 */

import { trackPixelEvent } from "./facebook-pixel";

/**
 * Track when user views the video section
 */
export const trackVideoView = async () => {
  return trackPixelEvent("ViewContent", {
    content_name: "VSL Video - Imersao China",
    content_type: "video",
    content_category: "engagement"
  });
};

/**
 * Track when user views schedule/cronograma
 */
export const trackScheduleView = async () => {
  return trackPixelEvent("ViewContent", {
    content_name: "Cronograma Completo",
    content_type: "schedule",
    content_category: "engagement"
  });
};

/**
 * Track when user views benefits section
 */
export const trackBenefitsView = async () => {
  return trackPixelEvent("ViewContent", {
    content_name: "Beneficios da Imersao",
    content_type: "benefits",
    content_category: "engagement"
  });
};

/**
 * Track when user expands an accordion item
 */
export const trackAccordionExpand = async (itemName: string) => {
  return trackPixelEvent("ViewContent", {
    content_name: `Cronograma - ${itemName}`,
    content_type: "accordion",
    content_category: "engagement"
  });
};

/**
 * Track when user clicks WhatsApp button
 */
export const trackWhatsAppClick = async () => {
  return trackPixelEvent("Contact", {
    content_name: "WhatsApp Click",
    contact_method: "whatsapp"
  });
};
