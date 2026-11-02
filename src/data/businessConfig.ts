export const BUSINESS_CONFIG = {
  brandName: 'GUJARAT ORNA',
  parentBrand: 'Gujarat Jewellers',
  fullName: 'Gujarat Orna by Gujarat Jewellers',
  tagline: 'Timeless Silver. Elegant Stories.',
  location: {
    landmark: 'Opposite Taluka Seva Sadan',
    city: 'Dahegam',
    state: 'Gujarat',
    country: 'India',
    fullAddress: 'Opposite Taluka Seva Sadan, Dahegam, Gujarat, India',
    googleMapsUrl: 'https://maps.google.com/?q=Taluka+Seva+Sadan+Dahegam+Gujarat',
  },
  social: {
    instagramHandle: '@gujaratorna',
    instagramUrl: 'https://www.instagram.com/gujaratorna/',
  },
  whatsapp: {
    // Configurable number; placeholder until real verified business number is set
    phoneNumber: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WHATSAPP_NUMBER) || '919825000000',
    displayNumber: '+91 98250 00000 (Demo Support)',
  },
  specialities: [
    'Pure 925 Silver Jewellery',
    'Custom Jewellery & Bespoke Design',
    'Handcrafted Silver Pendants',
    'Diamond-Cut Silver Chains',
    'Artisanal Silver Rings',
    'Authentic 925 Hallmarked Silver',
  ],
};

/**
 * Builds a standardized wa.me link with encoded inquiry message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = BUSINESS_CONFIG.whatsapp.phoneNumber.replace(/[^0-9]/g, '');
  const message = customMessage || 'Hello Gujarat Orna! I would like to inquire about your 925 Silver Jewellery collections.';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(productName: string, productCategory?: string, price?: number): string {
  const priceInfo = price ? ` (Sample Reference: ₹${price.toLocaleString('en-IN')})` : '';
  const message = `Hello Gujarat Orna! I am interested in [${productName}]${priceInfo}. Please share more details and availability.`;
  return getWhatsAppUrl(message);
}

export function getCustomJewelleryWhatsAppUrl(notes?: string): string {
  const baseMessage = 'Hello Gujarat Orna! I am interested in creating custom 925 Silver Jewellery. Please share more details.';
  const finalMessage = notes ? `${baseMessage}\n\nMy Requirements: ${notes}` : baseMessage;
  return getWhatsAppUrl(finalMessage);
}

export function getCartOrderWhatsAppUrl(items: Array<{ name: string; quantity: number; price: number; size?: string }>, total: number): string {
  let message = `Hello Gujarat Orna! I would like to enquire about placing an order for the following 925 Silver pieces:\n\n`;
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (Qty: ${item.quantity}${item.size ? `, Size: ${item.size}` : ''}) - ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
  });
  message += `\nEstimated Total: ₹${total.toLocaleString('en-IN')}`;
  message += `\n\nPlease let me know the availability, customization options, and next steps for my order. Thank you!`;
  return getWhatsAppUrl(message);
}
