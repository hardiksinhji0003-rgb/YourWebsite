import { Language } from '../types/i18n';

export interface Translations {
  // Top micro announcement bar
  announcementLocation: string;
  announcementTagline: string;
  directWhatsApp: string;

  // Header & Nav
  navHome: string;
  navCollections: string;
  navBestSellers: string;
  navCustomDesign: string;
  navAboutUs: string;
  navContact: string;
  searchPlaceholder: string;
  searchAria: string;
  wishlistAria: string;
  bagAria: string;
  enquireAction: string;
  clear: string;
  silverCategories: string;
  chatOnWhatsApp: string;

  // Hero Section
  heroPurityBadge: string;
  heroHeadingLine1: string;
  heroHeadingLine2: string;
  heroSubheading: string;
  heroExploreBtn: string;
  heroStoryBtn: string;
  pillarPure925: string;
  pillarPure925Sub: string;
  pillarCustomCraft: string;
  pillarCustomCraftSub: string;
  pillarDahegam: string;
  pillarDahegamSub: string;
  heroCampaignBadge: string;
  heroJewelleryName: string;
  heroHallmarkTag: string;
  heroSealText: string;

  // Collections Section
  collectionsEyebrow: string;
  collectionsHeading: string;
  collectionsSubtitle: string;
  collectionsDesigns: string;
  collectionsExploreLink: string;
  collectionsSilverTag: string;

  // Product Catalog
  catalogEyebrow: string;
  catalogHeading: string;
  catalogSubtitle: string;
  catalogDemoNotice: string;
  catalogFilteringFor: string;
  catalogSortFeatured: string;
  catalogSortPriceAsc: string;
  catalogSortPriceDesc: string;
  catalogNoFound: string;
  catalogNoFoundDesc: string;
  catalogResetFilters: string;
  catalog925Stamp: string;
  catalogQuickView: string;
  catalogAddBag: string;
  catalogSampleEstPrice: string;
  catalogEnquireWhatsApp: string;
  catalogCustomQueryPrompt: string;
  catalogExploreCustomLink: string;

  // Categories
  catAll: string;
  catNecklaces: string;
  catPendants: string;
  catRings: string;
  catEarrings: string;
  catChains: string;
  catCustom: string;

  // Brand Story
  storyEyebrow: string;
  storyHeadingLine1: string;
  storyHeadingLine2: string;
  storyP1: string;
  storyP2: string;
  storyVal1Title: string;
  storyVal1Desc: string;
  storyVal2Title: string;
  storyVal2Desc: string;
  storyKnowMoreBtn: string;
  storyArtisanTitle: string;
  storyArtisanDesc: string;

  // Why Choose Us
  whyEyebrow: string;
  whyHeading: string;
  whySubtitle: string;
  whyFeat1Title: string;
  whyFeat1Desc: string;
  whyFeat2Title: string;
  whyFeat2Desc: string;
  whyFeat3Title: string;
  whyFeat3Desc: string;
  whyFeat4Title: string;
  whyFeat4Desc: string;

  // Custom Jewellery Atelier
  customEyebrow: string;
  customHeadingLine1: string;
  customHeadingLine2: string;
  customDescription: string;
  customStep1Title: string;
  customStep1Desc: string;
  customStep2Title: string;
  customStep2Desc: string;
  customStep3Title: string;
  customStep3Desc: string;
  customWhatsAppBtn: string;
  customModalBtn: string;
  customWhatsAppHelper: string;
  customBespokeTag: string;
  customPieceSampleTitle: string;
  custom1to1Tag: string;

  // Instagram Gallery
  instaEyebrow: string;
  instaHeading: string;
  instaSubtitle: string;
  instaFollowBtn: string;
  instaFooterNote: string;

  // Testimonials
  testimonialsEyebrow: string;
  testimonialsHeading: string;
  testimonialsDemoNotice: string;
  testimonialsVerifiedSilver: string;

  // Contact Section
  contactEyebrow: string;
  contactHeading: string;
  contactSubtitle: string;
  contactBoutiqueTitle: string;
  contactInstagramTitle: string;
  contactWhatsAppTitle: string;
  contactWhatsAppDesc: string;
  contactDirectionsBtn: string;
  contactInStoreTitle: string;
  contactInStoreDesc: string;
  contactFormTitle: string;
  contactFormSubtitle: string;
  contactLabelFullName: string;
  contactLabelPhone: string;
  contactLabelEmail: string;
  contactLabelOptional: string;
  contactLabelInterest: string;
  contactLabelMessage: string;
  contactPlaceholderName: string;
  contactPlaceholderPhone: string;
  contactPlaceholderEmail: string;
  contactPlaceholderMessage: string;
  contactSubmitBtn: string;
  contactSubmittingBtn: string;
  contactThankYouTitle: string;
  contactSuccessMessage: string;
  contactContinueWhatsApp: string;
  contactInstantAssistanceNote: string;
  contactSubmitAnother: string;

  // Form Validation Errors
  errFullNameRequired: string;
  errPhoneRequired: string;
  errPhoneMinDigits: string;
  errEmailInvalid: string;
  errMessageRequired: string;

  // Footer
  footerNavTitle: string;
  footerAddressTitle: string;
  footerCertifiedGuarantee: string;
  footerOfficialShowcase: string;
  footerRightsReserved: string;
  footerPrivacyPolicy: string;
  footerTermsConditions: string;
  footerClose: string;
  privacyModalTitle: string;
  privacyModalP1: string;
  privacyModalP2: string;
  termsModalTitle: string;
  termsModalP1: string;
  termsModalP2: string;

  // Cart Drawer
  cartTitle: string;
  cartEmptyTitle: string;
  cartEmptyDesc: string;
  cartExploreBtn: string;
  cartClearBag: string;
  cartEstTotal: string;
  cartOrderNote: string;
  cartOrderWhatsAppBtn: string;
  cartContinueBrowsing: string;

  // Wishlist Drawer
  wishlistTitle: string;
  wishlistEmptyTitle: string;
  wishlistEmptyDesc: string;
  wishlistBrowseBtn: string;
  wishlistAddAllBtn: string;

  // Quick View Modal
  modalSampleRate: string;
  modalPurityLabel: string;
  modalWeightLabel: string;
  modalDimensionsLabel: string;
  modalSelectSpec: string;
  modalQuantity: string;
  modalAddToBag: string;
  modalEnquirePieceWhatsApp: string;

  // Custom Jewellery Modal
  customModalAtelierTag: string;
  customModalHeading: string;
  customModalSubtitle: string;
  customModalPieceTypeLabel: string;
  customModalWeightLabel: string;
  customModalEngravingLabel: string;
  customModalDescLabel: string;
  customModalDescPlaceholder: string;
  customModalGuaranteeText: string;
  customModalSubmitBtn: string;
  customModalCancelBtn: string;

  // Story Modal
  storyModalTag: string;
  storyModalHeading: string;
  storyModalSubheading: string;
  storyModalEssenceHeading: string;
  storyModalEssenceP1: string;
  storyModalEssenceP2: string;
  storyModalHallmarkTitle: string;
  storyModalHallmarkDesc: string;
  storyModalBlueprintsTitle: string;
  storyModalBlueprintsDesc: string;
  storyModalBoutiqueTitle: string;
  storyModalBoutiqueDesc: string;
  storyModalCareHeading: string;
  storyModalCare1: string;
  storyModalCare2: string;
  storyModalCare3: string;
  storyModalVisitUs: string;

  // Notification Toasts
  toastAddedToBag: string;
  toastRemovedFromBag: string;
  toastAddedToWishlist: string;
  toastRemovedFromWishlist: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    announcementLocation: 'Dahegam, Gujarat Boutique',
    announcementTagline: 'Pure 925 Silver Jewellery · Hallmark Certified · Bespoke Craft',
    directWhatsApp: 'Direct WhatsApp',

    navHome: 'Home',
    navCollections: 'Collections',
    navBestSellers: 'Best Sellers',
    navCustomDesign: 'Custom Design',
    navAboutUs: 'About Us',
    navContact: 'Contact',
    searchPlaceholder: 'Search 925 silver necklaces, rings, pendants, chains...',
    searchAria: 'Search Jewellery',
    wishlistAria: 'Your Wishlist',
    bagAria: 'Your Bag',
    enquireAction: 'Enquire',
    clear: 'Clear',
    silverCategories: 'Silver Categories',
    chatOnWhatsApp: 'Chat on WhatsApp',

    heroPurityBadge: 'THE ART OF SILVER',
    heroHeadingLine1: 'Elegance That Tells',
    heroHeadingLine2: 'Your Story',
    heroSubheading: 'Discover the beauty of Pure 925 Silver and timeless custom jewellery, thoughtfully designed for every special moment.',
    heroExploreBtn: 'EXPLORE COLLECTION',
    heroStoryBtn: 'DISCOVER OUR STORY',
    pillarPure925: 'Pure 925',
    pillarPure925Sub: 'Hallmark Certified',
    pillarCustomCraft: 'Custom Craft',
    pillarCustomCraftSub: 'Bespoke Silver Art',
    pillarDahegam: 'Dahegam',
    pillarDahegamSub: 'Gujarat Jewellers',
    heroCampaignBadge: 'Curated Editorial Campaign',
    heroJewelleryName: 'The Heritage Silver Choker & Chandelier Drops',
    heroHallmarkTag: '925 Hallmarked',
    heroSealText: '925 PURE SILVER',

    collectionsEyebrow: 'CURATED CATEGORIES',
    collectionsHeading: 'Discover Our Collections',
    collectionsSubtitle: 'Timeless Silver. Beautifully Crafted.',
    collectionsDesigns: 'Designs',
    collectionsExploreLink: 'Explore Collection',
    collectionsSilverTag: '925 Silver',

    catalogEyebrow: 'SIGNATURE SILVER PIECES',
    catalogHeading: 'Our Finest Selection',
    catalogSubtitle: 'Discover pieces that define timeless elegance.',
    catalogDemoNotice: 'Demonstration Catalog: Representative 925 Silver sample pieces for Gujarat Orna presentation',
    catalogFilteringFor: 'Filtering for',
    catalogSortFeatured: 'Featured First',
    catalogSortPriceAsc: 'Price: Low to High',
    catalogSortPriceDesc: 'Price: High to Low',
    catalogNoFound: 'No Jewellery Found',
    catalogNoFoundDesc: 'We couldn’t find any pieces matching your current selection.',
    catalogResetFilters: 'Reset Filters',
    catalog925Stamp: '925 Silver',
    catalogQuickView: 'Quick View',
    catalogAddBag: 'Add to Bag',
    catalogSampleEstPrice: 'Sample Est. Price',
    catalogEnquireWhatsApp: 'Enquire',
    catalogCustomQueryPrompt: 'Need custom dimensions, chain lengths, or weight specifications?',
    catalogExploreCustomLink: 'Explore our Custom Jewellery Services',

    catAll: 'All',
    catNecklaces: 'Silver Necklaces',
    catPendants: 'Silver Pendants',
    catRings: 'Silver Rings',
    catEarrings: 'Silver Earrings',
    catChains: 'Silver Chains',
    catCustom: 'Custom Jewellery',

    storyEyebrow: 'OUR STORY',
    storyHeadingLine1: 'Where Tradition Meets',
    storyHeadingLine2: 'Timeless Beauty',
    storyP1: 'At Gujarat Orna by Gujarat Jewellers, we celebrate the beauty of Pure 925 Silver and the art of timeless jewellery design.',
    storyP2: 'From elegant everyday essentials to beautiful custom creations, discover jewellery that reflects your unique style and personality.',
    storyVal1Title: 'Authentic 925 Silver',
    storyVal1Desc: 'Hallmarked sterling silver purity with luminous finishing that endures.',
    storyVal2Title: 'Dahegam Atelier',
    storyVal2Desc: 'Located opposite Taluka Seva Sadan, welcoming patrons with warmth.',
    storyKnowMoreBtn: 'KNOW MORE',
    storyArtisanTitle: 'The Hand of the Silversmith',
    storyArtisanDesc: 'Every piece begins with raw silver and artistic devotion.',

    whyEyebrow: 'DISTINCTION & TRUST',
    whyHeading: 'Why Choose Gujarat Orna?',
    whySubtitle: 'Rooted in Dahegam, celebrating pure silver artistry with uncompromised integrity.',
    whyFeat1Title: 'Pure 925 Silver',
    whyFeat1Desc: 'Beautiful silver jewellery collections crafted with certified 925 sterling silver purity.',
    whyFeat2Title: 'Custom Jewellery',
    whyFeat2Desc: 'Personalised jewellery designs brought to life by master artisans according to your vision.',
    whyFeat3Title: 'Timeless Designs',
    whyFeat3Desc: 'Elegant pieces for every occasion, blending heritage Indian motifs with modern sophistication.',
    whyFeat4Title: 'Personal Assistance',
    whyFeat4Desc: 'Easy customer enquiries and assistance with friendly guidance directly over WhatsApp.',

    customEyebrow: 'BESPOKE SILVER ATELIER',
    customHeadingLine1: 'Your Style.',
    customHeadingLine2: 'Your Design.',
    customDescription: 'Have a unique jewellery idea? Connect with us to discuss your custom jewellery preferences. Whether it is a personalized name pendant, family signet ring, or customized silver bridal ornament, our craftsmen bring your vision into reality.',
    customStep1Title: 'Share Your Inspiration',
    customStep1Desc: 'Send reference images, sketches, or ideas via WhatsApp or our design form.',
    customStep2Title: 'Artisanal Blueprinting',
    customStep2Desc: 'Our artisans assess proportions, silver weight, and structural balance.',
    customStep3Title: 'Handcrafted in Pure 925',
    customStep3Desc: 'Cast, chiseled, and hand-finished with authentic hallmarked pure silver.',
    customWhatsAppBtn: 'Custom Jewellery Enquiry',
    customModalBtn: 'Submit Custom Specs',
    customWhatsAppHelper: '* Direct WhatsApp opens with: “Hello Gujarat Orna! I am interested in creating custom 925 Silver Jewellery. Please share more details.”',
    customBespokeTag: 'Bespoke Commission',
    customPieceSampleTitle: 'Pure 925 Filigree Amulet',
    custom1to1Tag: 'Custom 1:1',

    instaEyebrow: '@gujaratorna',
    instaHeading: 'Follow Our Silver Story',
    instaSubtitle: 'Behind the scenes, new arrivals, and craftsmanship moments from our Dahegam boutique.',
    instaFollowBtn: 'Follow @gujaratorna on Instagram',
    instaFooterNote: 'Curated showcase gallery · Connect with us on social media',

    testimonialsEyebrow: 'CLIENT EXPERIENCES',
    testimonialsHeading: 'Words From Our Customers',
    testimonialsDemoNotice: 'Illustrative Demonstration Placeholders: Prepared for official website preview',
    testimonialsVerifiedSilver: 'Verified Silver',

    contactEyebrow: 'DAHEGAM BOUTIQUE & INQUIRIES',
    contactHeading: "Let's Connect",
    contactSubtitle: 'Looking for beautiful 925 Silver Jewellery? We would love to help you discover your perfect piece.',
    contactBoutiqueTitle: 'Boutique Location',
    contactInstagramTitle: 'Official Instagram',
    contactWhatsAppTitle: 'WhatsApp Assistance',
    contactWhatsAppDesc: 'Instant replies regarding availability, custom sizing, and design consultations.',
    contactDirectionsBtn: 'Directions',
    contactInStoreTitle: 'In-Store Consultations',
    contactInStoreDesc: 'Visit our Dahegam store opposite Taluka Seva Sadan to examine 925 Silver hallmarks and discuss custom jewellery blueprints in person.',
    contactFormTitle: 'Send an Enquiry',
    contactFormSubtitle: 'Tell us about your jewellery requirements and we will connect back with design options.',
    contactLabelFullName: 'Full Name',
    contactLabelPhone: 'Phone Number',
    contactLabelEmail: 'Email Address',
    contactLabelOptional: '(optional)',
    contactLabelInterest: 'Jewellery Interest',
    contactLabelMessage: 'Message / Preferences',
    contactPlaceholderName: 'e.g. Radhika Patel',
    contactPlaceholderPhone: 'e.g. 98250 12345',
    contactPlaceholderEmail: 'e.g. contact@example.com',
    contactPlaceholderMessage: 'Please share details such as preferred silver weight, length, design references, or special occasion...',
    contactSubmitBtn: 'Submit Enquiry',
    contactSubmittingBtn: 'Submitting...',
    contactThankYouTitle: 'Thank You',
    contactSuccessMessage: 'Your enquiry regarding {interest} has been received by our demo interface.',
    contactContinueWhatsApp: 'Continue on WhatsApp Now',
    contactInstantAssistanceNote: 'For live instant assistance, click above to open this message directly on WhatsApp.',
    contactSubmitAnother: 'Submit another enquiry',

    errFullNameRequired: 'Please enter your full name.',
    errPhoneRequired: 'Please enter your contact phone number.',
    errPhoneMinDigits: 'Please enter a valid phone number (at least 8 digits).',
    errEmailInvalid: 'Please provide a valid email address or leave blank.',
    errMessageRequired: 'Please share your enquiry or jewellery preferences.',

    footerNavTitle: 'Navigation',
    footerAddressTitle: 'Boutique Address',
    footerCertifiedGuarantee: '100% Certified Pure 925 Sterling Silver',
    footerOfficialShowcase: 'Official presentation showcase website for Gujarat Orna.',
    footerRightsReserved: '© 2026 Gujarat Orna. All Rights Reserved.',
    footerPrivacyPolicy: 'Privacy Policy',
    footerTermsConditions: 'Terms & Conditions',
    footerClose: 'Close',
    privacyModalTitle: 'Privacy Policy',
    privacyModalP1: 'Gujarat Orna respects client confidentiality. Inquiries submitted via WhatsApp or our contact form are used exclusively to assist your jewellery orders and custom sizing discussions.',
    privacyModalP2: 'We never sell, rent, or distribute private customer details to third parties. All client preferences and custom silver sketches are treated with strict discretion.',
    termsModalTitle: 'Terms & Conditions',
    termsModalP1: 'All pure silver items showcase authentic 925 sterling silver hallmarking. Custom jewellery requires mutual design confirmation before metal casting begins.',
    termsModalP2: 'Website catalog rates represent baseline sample estimates. Exact pricing reflects real-time bullion valuations, net silver weight, and craftsmanship complexity.',

    cartTitle: 'Your Shopping Bag',
    cartEmptyTitle: 'Your Bag is Empty',
    cartEmptyDesc: 'Discover our curated 925 sterling silver necklaces, pendants, rings, and chains to begin your collection.',
    cartExploreBtn: 'Explore Jewellery',
    cartClearBag: 'Clear Bag',
    cartEstTotal: 'Estimated Total:',
    cartOrderNote: 'Orders are coordinated directly via WhatsApp with Gujarat Orna to ensure personalized sizing and hallmark verification.',
    cartOrderWhatsAppBtn: 'Enquire & Order on WhatsApp',
    cartContinueBrowsing: 'Continue Browsing',

    wishlistTitle: 'Saved Pieces',
    wishlistEmptyTitle: 'Your Wishlist is Empty',
    wishlistEmptyDesc: 'Save your favourite 925 silver necklaces, rings, and custom creations to revisit or inquire anytime.',
    wishlistBrowseBtn: 'Browse Collection',
    wishlistAddAllBtn: 'Add All to Shopping Bag',

    modalSampleRate: '(Sample Reference Rate)',
    modalPurityLabel: 'Purity',
    modalWeightLabel: 'Approx. Weight',
    modalDimensionsLabel: 'Dimensions',
    modalSelectSpec: 'Select Specification / Size',
    modalQuantity: 'Quantity',
    modalAddToBag: 'Add to Bag',
    modalEnquirePieceWhatsApp: 'Enquire This Piece on WhatsApp',

    customModalAtelierTag: 'Gujarat Orna Bespoke Atelier',
    customModalHeading: 'Commission Custom 925 Silver Jewellery',
    customModalSubtitle: 'Share your design ideas and connect directly with our Dahegam silversmiths.',
    customModalPieceTypeLabel: 'Jewellery Piece Type',
    customModalWeightLabel: 'Estimated Silver Weight',
    customModalEngravingLabel: 'Engraving / Inscription',
    customModalDescLabel: 'Design Description & Inspiration',
    customModalDescPlaceholder: 'Describe your design (antique finish, filigree, stone setting, or attach sketches in WhatsApp)...',
    customModalGuaranteeText: 'Pure 925 Hallmark guarantee: Every custom item is stamped with the official 925 silver certification.',
    customModalSubmitBtn: 'Connect on WhatsApp with Specs',
    customModalCancelBtn: 'Cancel',

    storyModalTag: 'ABOUT GUJARAT ORNA',
    storyModalHeading: 'Where Tradition Meets Timeless Beauty',
    storyModalSubheading: 'By Gujarat Jewellers · Dahegam, Gujarat',
    storyModalEssenceHeading: 'The Essence of Pure 925 Silver',
    storyModalEssenceP1: 'At Gujarat Orna by Gujarat Jewellers, we celebrate the enduring brilliance of Pure 925 Sterling Silver. Silver has held a sacred place in Indian adornment and ceremonial heritage for centuries. Our creations honor this legacy with designs refined for modern living.',
    storyModalEssenceP2: 'From everyday minimalist silver chains and signets to grand bridal filigree chokers, every single jewel reflects deliberate craftsmanship and authentic purity.',
    storyModalHallmarkTitle: '925 Hallmarked',
    storyModalHallmarkDesc: '92.5% certified fine silver alloyed for lifelong durability.',
    storyModalBlueprintsTitle: 'Custom Blueprints',
    storyModalBlueprintsDesc: 'From initial client sketches to final hand-carved silver masterworks.',
    storyModalBoutiqueTitle: 'Dahegam Boutique',
    storyModalBoutiqueDesc: 'Warm in-person consultations opposite Taluka Seva Sadan.',
    storyModalCareHeading: 'Caring for Your 925 Silver',
    storyModalCare1: 'Store in an airtight pouch or soft jewellery box away from humidity when not in use.',
    storyModalCare2: 'Wipe gently with a soft microfiber cloth to restore its natural mirror luster.',
    storyModalCare3: 'Avoid direct contact with perfumes, chlorine pools, and harsh household chemicals.',
    storyModalVisitUs: 'Visit us: Opposite Taluka Seva Sadan, Dahegam, Gujarat.',

    toastAddedToBag: 'Added "{name}" to your shopping bag.',
    toastRemovedFromBag: 'Item removed from shopping bag.',
    toastAddedToWishlist: 'Saved piece to your wishlist.',
    toastRemovedFromWishlist: 'Removed piece from your wishlist.',
  },

  gu: {
    announcementLocation: 'દહેગામ, ગુજરાત બુટિક',
    announcementTagline: 'શુદ્ધ 925 સિલ્વર જ્વેલરી · હોલમાર્ક પ્રમાણિત · કસ્ટમ કારીગરી',
    directWhatsApp: 'સીધો વ્હોટ્સએપ સંપર્ક',

    navHome: 'મુખ્ય પૃષ્ઠ',
    navCollections: 'કલેક્શન્સ',
    navBestSellers: 'બેસ્ટ સેલર્સ',
    navCustomDesign: 'કસ્ટમ ડિઝાઇન',
    navAboutUs: 'અમારા વિશે',
    navContact: 'સંપર્ક',
    searchPlaceholder: 'શુદ્ધ 925 સિલ્વર હાર, વીંટી, પેન્ડન્ટ, ચેઇન શોધો...',
    searchAria: 'જ્વેલરી શોધો',
    wishlistAria: 'તમારી વિશલિસ્ટ',
    bagAria: 'તમારી શોપિંગ બેગ',
    enquireAction: 'પૂછપરછ',
    clear: 'સાફ કરો',
    silverCategories: 'ચાંદીની શ્રેણીઓ',
    chatOnWhatsApp: 'વ્હોટ્સએપ પર વાત કરો',

    heroPurityBadge: 'ચાંદીની ઉત્કૃષ્ટ કળા',
    heroHeadingLine1: 'તમારી કહાણી કહેતી',
    heroHeadingLine2: 'અનોખી સુંદરતા',
    heroSubheading: 'શુદ્ધ 925 સિલ્વર અને કાલાતીત કસ્ટમ જ્વેલરીની સુંદરતા માણો, જે તમારા દરેક વિશેષ પળ માટે પ્રેમપૂર્વક ઘડવામાં આવી છે.',
    heroExploreBtn: 'કલેક્શન નિહાળો',
    heroStoryBtn: 'અમારી કહાણી જાણો',
    pillarPure925: 'શુદ્ધ 925',
    pillarPure925Sub: 'હોલમાર્ક પ્રમાણિત',
    pillarCustomCraft: 'કસ્ટમ કારીગરી',
    pillarCustomCraftSub: 'બેસ્પોક સિલ્વર આર્ટ',
    pillarDahegam: 'દહેગામ',
    pillarDahegamSub: 'ગુજરાત જ્વેલર્સ',
    heroCampaignBadge: 'વિશેષ એડિટોરિયલ કેમ્પેઇન',
    heroJewelleryName: 'હેરિટેજ સિલ્વર ચોકર અને ઝુમ્મર કાનબુટ્ટી',
    heroHallmarkTag: '925 હોલમાર્કવાળું',
    heroSealText: '925 શુદ્ધ ચાંદી',

    collectionsEyebrow: 'વિશેષ શ્રેણીઓ',
    collectionsHeading: 'અમારા સંગ્રહો નિહાળો',
    collectionsSubtitle: 'કાલાતીત ચાંદી. સુંદરતા સાથે ઘડાયેલી.',
    collectionsDesigns: 'ડિઝાઇન્સ',
    collectionsExploreLink: 'સંગ્રહ નિહાળો',
    collectionsSilverTag: '925 સિલ્વર',

    catalogEyebrow: 'સિગ્નેચર સિલ્વર આભૂષણો',
    catalogHeading: 'અમારી શ્રેષ્ઠ પસંદગી',
    catalogSubtitle: 'કાલાતીત લાવણ્ય અને સુંદરતા પ્રગટ કરતા આભૂષણો.',
    catalogDemoNotice: 'ડેમોસ્ટ્રેશન કેટલોગ: ગુજરાત ઓર્ના પ્રદર્શન માટે પ્રતિનિધિ 925 સિલ્વર નમૂનાઓ',
    catalogFilteringFor: 'શોધ પરિણામ:',
    catalogSortFeatured: 'પ્રથમ દર્શાવો',
    catalogSortPriceAsc: 'કિંમત: ઓછી થી વધુ',
    catalogSortPriceDesc: 'કિંમત: વધુ થી ઓછી',
    catalogNoFound: 'કોઈ જ્વેલરી મળી નથી',
    catalogNoFoundDesc: 'તમારી વર્તમાન પસંદગી મુજબ કોઈ આભૂષણ મળ્યા નથી.',
    catalogResetFilters: 'ફિલ્ટર્સ રીસેટ કરો',
    catalog925Stamp: '925 સિલ્વર',
    catalogQuickView: 'ઝડપી ઝલક',
    catalogAddBag: 'બેગમાં ઉમેરો',
    catalogSampleEstPrice: 'નમૂના અંદાજિત કિંમત',
    catalogEnquireWhatsApp: 'પૂછપરછ',
    catalogCustomQueryPrompt: 'કસ્ટમ સાઇઝ, ચેઇનની લંબાઈ કે વજન સંબંધિત માહિતી જોઈએ છે?',
    catalogExploreCustomLink: 'અમારી કસ્ટમ જ્વેલરી સેવાઓ વિશે જાણો',

    catAll: 'બધું',
    catNecklaces: 'સિલ્વર નેકલેસ',
    catPendants: 'સિલ્વર પેન્ડન્ટ્સ',
    catRings: 'સિલ્વર રિંગ્સ',
    catEarrings: 'સિલ્વર એરિંગ્સ',
    catChains: 'સિલ્વર ચેઇન',
    catCustom: 'કસ્ટમ જ્વેલરી',

    storyEyebrow: 'અમારી કહાણી',
    storyHeadingLine1: 'જ્યાં પરંપરા મળે છે',
    storyHeadingLine2: 'કાલાતીત લાવણ્ય સાથે',
    storyP1: 'ગુજરાત ઓર્ના બાય ગુજરાત જ્વેલર્સ ખાતે, અમે શુદ્ધ 925 સિલ્વરની સુંદરતા અને કાલાતીત જ્વેલરી ડિઝાઇનની કળાનું ગૌરવ કરીએ છીએ.',
    storyP2: 'દૈનિક ઉપયોગના સરળ સુંદર ઘરેણાંથી લઈને વિશેષ કસ્ટમ રચનાઓ સુધી, તમારી અનોખી શૈલી અને વ્યક્તિત્વને શોભાવતી જ્વેલરી શોધો.',
    storyVal1Title: 'અસલી 925 સિલ્વર',
    storyVal1Desc: 'હોલમાર્ક પ્રમાણિત શુદ્ધ સ્ટર્લિંગ સિલ્વર જે દીર્ઘકાલીન ચમક જાળવી રાખે છે.',
    storyVal2Title: 'દહેગામ એટલિયર',
    storyVal2Desc: 'તાલુકા સેવા સદનની સામે આવેલું, ગ્રાહકોનું સ્નેહપૂર્વક સ્વાગત કરતું અમારું બુટિક.',
    storyKnowMoreBtn: 'વધુ જાણો',
    storyArtisanTitle: 'કારીગરનો કલાત્મક સ્પર્શ',
    storyArtisanDesc: 'દરેક ઘરેણું કાચી ચાંદી અને કલાત્મક સમર્પણથી આકાર લે છે.',

    whyEyebrow: 'વિશેષતા અને વિશ્વાસ',
    whyHeading: 'ગુજરાત ઓર્ના શા માટે પસંદ કરવું?',
    whySubtitle: 'દહેગામની ભૂમિ સાથે જોડાયેલું, અખંડ શુદ્ધતા સાથે ચાંદીની ઉત્કૃષ્ટ કળાનું સર્જન.',
    whyFeat1Title: 'શુદ્ધ 925 ચાંદી',
    whyFeat1Desc: 'પ્રમાણિત 925 સ્ટર્લિંગ સિલ્વર શુદ્ધતા સાથે ઘડાયેલા સુંદર ચાંદીના આભૂષણો.',
    whyFeat2Title: 'કસ્ટમ જ્વેલરી',
    whyFeat2Desc: 'તમારી કલ્પના મુજબ કુશળ કારીગરો દ્વારા સાકાર થતી વ્યક્તિગત જ્વેલરી ડિઝાઇન્સ.',
    whyFeat3Title: 'કાલાતીત ડિઝાઇન્સ',
    whyFeat3Desc: 'ભારતીય વારસાના નકશીકામ અને આધુનિક ફેશનનું સુંદર સુમેળ ધરાવતા ઘરેણાં.',
    whyFeat4Title: 'વ્યક્તિગત સહાય',
    whyFeat4Desc: 'વ્હોટ્સએપ દ્વારા સીધું અને સરળ માર્ગદર્શન તેમજ ગ્રાહક સેવા.',

    customEyebrow: 'બેસ્પોક સિલ્વર એટલિયર',
    customHeadingLine1: 'તમારી શૈલી.',
    customHeadingLine2: 'તમારી ડિઝાઇન.',
    customDescription: 'તમારી પાસે કોઈ અનોખી જ્વેલરી વિચાર છે? તમારી કસ્ટમ પસંદગીઓ વિશે અમારી સાથે વાત કરો. નામવાળું પેન્ડન્ટ હોય, કુટુંબની સિગ્નેટ રિંગ હોય કે લગ્નપ્રસંગના વિશેષ સિલ્વર ઘરેણાં, અમારા કારીગરો તેને સાકાર કરશે.',
    customStep1Title: 'તમારી પ્રેરણા શેર કરો',
    customStep1Desc: 'વ્હોટ્સએપ અથવા ફોર્મ દ્વારા સંદર્ભ ચિત્રો, સ્કેચ કે વિચારો મોકલો.',
    customStep2Title: 'કલાત્મક બ્લુપ્રિન્ટિંગ',
    customStep2Desc: 'અમારા કારીગરો યોગ્ય માપ, ચાંદીનું વજન અને સંતુલન સુનિશ્ચિત કરે છે.',
    customStep3Title: 'શુદ્ધ 925 માં હસ્તનિર્મિત',
    customStep3Desc: 'અસલી હોલમાર્કવાળી શુદ્ધ ચાંદીમાં ઢાળીને હાથથી ફિનિશિંગ આપવામાં આવે છે.',
    customWhatsAppBtn: 'કસ્ટમ જ્વેલરી પૂછપરછ',
    customModalBtn: 'કસ્ટમ માહિતી સબમિટ કરો',
    customWhatsAppHelper: '* સીધો વ્હોટ્સએપ સંદેશ: “નમસ્તે ગુજરાત ઓર્ના! હું કસ્ટમ 925 સિલ્વર જ્વેલરી બનાવવા માંગુ છું. કૃપા કરીને વધુ વિગત જણાવો.”',
    customBespokeTag: 'બેસ્પોક કમિશન',
    customPieceSampleTitle: 'શુદ્ધ 925 ફિલિગ્રી તાવીજ પેન્ડન્ટ',
    custom1to1Tag: 'કસ્ટમ 1:1',

    instaEyebrow: '@gujaratorna',
    instaHeading: 'અમારી સિલ્વર સ્ટોરી ફોલો કરો',
    instaSubtitle: 'અમારા દહેગામ બુટિકના અવનવા આભૂષણો, કારીગરી અને નવી ડિઝાઇન્સ નિહાળો.',
    instaFollowBtn: 'ઇન્સ્ટાગ્રામ પર @gujaratorna ફોલો કરો',
    instaFooterNote: 'વિશેષ શોકેસ ગેલેરી · સોશિયલ મીડિયા પર અમારી સાથે જોડાવો',

    testimonialsEyebrow: 'ગ્રાહકોના અનુભવો',
    testimonialsHeading: 'અમારા ગ્રાહકોના શબ્દો',
    testimonialsDemoNotice: 'પ્રદર્શન માટે નમૂના પ્રતિભાવો: સત્તાવાર વેબસાઇટ પ્રિવ્યૂ માટે તૈયાર કરાયેલ',
    testimonialsVerifiedSilver: 'ચકાસાયેલ ચાંદી',

    contactEyebrow: 'દહેગામ બુટિક અને પૂછપરછ',
    contactHeading: 'અમારો સંપર્ક કરો',
    contactSubtitle: 'સુંદર 925 સિલ્વર જ્વેલરી શોધી રહ્યા છો? તમારા માટે ઉત્તમ ઘરેણું પસંદ કરવામાં મદદ કરતા અમને આનંદ થશે.',
    contactBoutiqueTitle: 'બુટિકનું સરનામું',
    contactInstagramTitle: 'સત્તાવાર ઇન્સ્ટાગ્રામ',
    contactWhatsAppTitle: 'વ્હોટ્સએપ સહાય',
    contactWhatsAppDesc: 'ઉપલબ્ધતા, કસ્ટમ સાઇઝ અને ડિઝાઇન પરામર્શ અંગે ત્વરિત ઉત્તર મેળવો.',
    contactDirectionsBtn: 'દિશા-નિર્દેશ (મેપ)',
    contactInStoreTitle: 'રૂબરૂ મુલાકાત અને પરામર્શ',
    contactInStoreDesc: 'તાલુકા સેવા સદન સામે અમારા દહેગામ સ્ટોરની મુલાકાત લો અને 925 હોલમાર્ક તથા કસ્ટમ ડિઝાઇનની રૂબરૂ ચર્ચા કરો.',
    contactFormTitle: 'પૂછપરછ મોકલો',
    contactFormSubtitle: 'તમારી પસંદગી અને જરૂરિયાત જણાવો, અમે શ્રેષ્ઠ ડિઝાઇન વિકલ્પો સાથે સંપર્ક કરીશું.',
    contactLabelFullName: 'પૂરું નામ',
    contactLabelPhone: 'ફોન નંબર',
    contactLabelEmail: 'ઇમેઇલ એડ્રેસ',
    contactLabelOptional: '(વૈકલ્પિક)',
    contactLabelInterest: 'જ્વેલરીમાં રસ',
    contactLabelMessage: 'સંદેશ / વિશેષ વિગત',
    contactPlaceholderName: 'દા.ત. રાધિકા પટેલ',
    contactPlaceholderPhone: 'દા.ત. 98250 12345',
    contactPlaceholderEmail: 'દા.ત. contact@example.com',
    contactPlaceholderMessage: 'પસંદગીનું વજન, લંબાઈ, ડિઝાઇન સંદર્ભ કે વિશેષ પ્રસંગ વિશે વિગત લખો...',
    contactSubmitBtn: 'પૂછપરછ સબમિટ કરો',
    contactSubmittingBtn: 'સબમિટ થઈ રહ્યું છે...',
    contactThankYouTitle: 'આભાર',
    contactSuccessMessage: '{interest} માટેની તમારી પૂછપરછ સફળતાપૂર્વક પ્રાપ્ત થઈ છે.',
    contactContinueWhatsApp: 'હવે વ્હોટ્સએપ પર આગળ વધો',
    contactInstantAssistanceNote: 'ત્વરિત સહાય માટે ઉપર ક્લિક કરીને સીધો વ્હોટ્સએપ મેસેજ મોકલો.',
    contactSubmitAnother: 'બીજી પૂછપરછ સબમિટ કરો',

    errFullNameRequired: 'કૃપા કરીને તમારું પૂરું નામ દાખલ કરો.',
    errPhoneRequired: 'કૃપા કરીને તમારો ફોન નંબર દાખલ કરો.',
    errPhoneMinDigits: 'કૃપા કરીને માન્ય ફોન નંબર દાખલ કરો (ઓછામાં ઓછા 8 અંક).',
    errEmailInvalid: 'કૃપા કરીને માન્ય ઇમેઇલ એડ્રેસ દાખલ કરો અથવા ખાલી રાખો.',
    errMessageRequired: 'કૃપા કરીને તમારી પૂછપરછ અથવા જ્વેલરી પસંદગી જણાવો.',

    footerNavTitle: 'નેવિગેશન',
    footerAddressTitle: 'બુટિક સરનામું',
    footerCertifiedGuarantee: '100% પ્રમાણિત શુદ્ધ 925 સ્ટર્લિંગ સિલ્વર',
    footerOfficialShowcase: 'ગુજરાત ઓર્ના માટે સત્તાવાર પ્રદર્શન વેબસાઇટ.',
    footerRightsReserved: '© 2026 ગુજરાત ઓર્ના. સર્વાધિકાર સુરક્ષિત.',
    footerPrivacyPolicy: 'ગોપનીયતા નીતિ',
    footerTermsConditions: 'નિયમો અને શરતો',
    footerClose: 'બંધ કરો',
    privacyModalTitle: 'ગોપનીયતા નીતિ',
    privacyModalP1: 'ગુજરાત ઓર્ના ગ્રાહકની ગોપનીયતાનું સન્માન કરે છે. વ્હોટ્સએપ કે ફોર્મ દ્વારા મોકલેલી માહિતી માત્ર તમારા ઓર્ડર અને કસ્ટમ જ્વેલરી માર્ગદર્શન માટે જ વપરાય છે.',
    privacyModalP2: 'અમે ગ્રાહકની વિગતો ક્યારેય વેચતા કે વહેંચતા નથી. તમારા કસ્ટમ સ્કેચ અને પસંદગીઓને પૂર્ણ સુરક્ષા આપવામાં આવે છે.',
    termsModalTitle: 'નિયમો અને શરતો',
    termsModalP1: 'બધા શુદ્ધ ચાંદીના ઘરેણાં અધિકૃત 925 હોલમાર્કિંગ ધરાવે છે. કસ્ટમ જ્વેલરી કામ બંને પક્ષે ડિઝાઇન મંજૂર થયા પછી શરૂ થાય છે.',
    termsModalP2: 'વેબસાઇટ કેટલોગના ભાવો નમૂના અંદાજ દર્શાવે છે. ચોક્કસ કિંમત વર્તમાન ચાંદીના ભાવ, વજન અને કારીગરી પર આધારિત રહે છે.',

    cartTitle: 'તમારી શોપિંગ બેગ',
    cartEmptyTitle: 'તમારી બેગ ખાલી છે',
    cartEmptyDesc: 'તમારો સંગ્રહ શરૂ કરવા માટે અમારા 925 સ્ટર્લિંગ સિલ્વર નેકલેસ, પેન્ડન્ટ્સ, રિંગ્સ અને ચેઇન જુઓ.',
    cartExploreBtn: 'જ્વેલરી નિહાળો',
    cartClearBag: 'બેગ ખાલી કરો',
    cartEstTotal: 'અંદાજિત કુલ કિંમત:',
    cartOrderNote: 'વ્યક્તિગત સાઇઝ અને હોલમાર્ક ચકાસણી માટે ઓર્ડર સીધા ગુજરાત ઓર્ના સાથે વ્હોટ્સએપ પર નક્કી થાય છે.',
    cartOrderWhatsAppBtn: 'વ્હોટ્સએપ પર ઓર્ડર / પૂછપરછ કરો',
    cartContinueBrowsing: 'બ્રાઉઝિંગ ચાલુ રાખો',

    wishlistTitle: 'સાચવેલા આભૂષણો',
    wishlistEmptyTitle: 'તમારી વિશલિસ્ટ ખાલી છે',
    wishlistEmptyDesc: 'તમારા મનપસંદ 925 સિલ્વર નેકલેસ, વીંટી અને કસ્ટમ ઘરેણાં ફરી જોવા કે પૂછપરછ કરવા માટે સાચવો.',
    wishlistBrowseBtn: 'સંગ્રહ બ્રાઉઝ કરો',
    wishlistAddAllBtn: 'બધા બેગમાં ઉમેરો',

    modalSampleRate: '(નમૂના સંદર્ભ કિંમત)',
    modalPurityLabel: 'શુદ્ધતા',
    modalWeightLabel: 'અંદાજિત વજન',
    modalDimensionsLabel: 'પરિમાણ / માપ',
    modalSelectSpec: 'માપ / સ્પેસિફિકેશન પસંદ કરો',
    modalQuantity: 'જથ્થો (નંગ)',
    modalAddToBag: 'બેગમાં ઉમેરો',
    modalEnquirePieceWhatsApp: 'આ ઘરેણાં વિશે વ્હોટ્સએપ પર પૂછપરછ કરો',

    customModalAtelierTag: 'ગુજરાત ઓર્ના બેસ્પોક એટલિયર',
    customModalHeading: 'કસ્ટમ 925 સિલ્વર જ્વેલરી બનાવો',
    customModalSubtitle: 'તમારા ડિઝાઇન વિચારો શેર કરો અને અમારા દહેગામના કારીગરો સાથે સીધા સંપર્કમાં રહો.',
    customModalPieceTypeLabel: 'આભૂષણનો પ્રકાર',
    customModalWeightLabel: 'અંદાજિત ચાંદીનું વજન',
    customModalEngravingLabel: 'નામ / અક્ષર કોતરણી',
    customModalDescLabel: 'ડિઝાઇન વિગત અને પ્રેરણા',
    customModalDescPlaceholder: 'તમારી ડિઝાઇન વિશે જણાવો (એન્ટિક ફિનિશ, ફિલિગ્રી, રત્ન જડતર કે વ્હોટ્સએપમાં સ્કેચ મોકલો)...',
    customModalGuaranteeText: 'શુદ્ધ 925 હોલમાર્ક ગેરંટી: દરેક કસ્ટમ ઘરેણાં પર સત્તાવાર 925 હોલમાર્ક સ્ટેમ્પ લગાવવામાં આવે છે.',
    customModalSubmitBtn: 'વિગતો સાથે વ્હોટ્સએપ પર કનેક્ટ થાઓ',
    customModalCancelBtn: 'રદ કરો',

    storyModalTag: 'ગુજરાત ઓર્ના વિશે',
    storyModalHeading: 'જ્યાં પરંપરા મળે છે કાલાતીત લાવણ્ય સાથે',
    storyModalSubheading: 'બાય ગુજરાત જ્વેલર્સ · દહેગામ, ગુજરાત',
    storyModalEssenceHeading: 'શુદ્ધ 925 સિલ્વરનું મહત્વ',
    storyModalEssenceP1: 'ગુજરાત ઓર્ના બાય ગુજરાત જ્વેલર્સ ખાતે, અમે શુદ્ધ 925 સ્ટર્લિંગ સિલ્વરના શાશ્વત તેજની ઉજવણી કરીએ છીએ. સદીઓથી ભારતીય શૃંગાર અને માંગલિક પરંપરામાં ચાંદીનું પવિત્ર સ્થાન રહ્યું છે.',
    storyModalEssenceP2: 'રોજિંદા પહેરવેશની મિનિમલિસ્ટ ચેઇન અને વીંટીથી લઈને ભવ્ય લગ્નસરાના ચોકર સુધી, દરેક આભૂષણ ઉચ્ચ કારીગરી અને વાસ્તવિક શુદ્ધતા દર્શાવે છે.',
    storyModalHallmarkTitle: '925 હોલમાર્ક પ્રમાણિત',
    storyModalHallmarkDesc: '92.5% પ્રમાણિત શુદ્ધ ચાંદી જે આજીવન ટકાઉપણું આપે છે.',
    storyModalBlueprintsTitle: 'કસ્ટમ બ્લુપ્રિન્ટ્સ',
    storyModalBlueprintsDesc: 'ગ્રાહકના સ્કેચથી લઈને હાથથી કોતરેલા ચાંદીના શ્રેષ્ઠ માસ્ટરપીસ સુધી.',
    storyModalBoutiqueTitle: 'દહેગામ બુટિક',
    storyModalBoutiqueDesc: 'તાલુકા સેવા સદનની સામે રૂબરૂ સ્નેહપૂર્ણ પરામર્શ.',
    storyModalCareHeading: '925 સિલ્વરની સંભાળ',
    storyModalCare1: 'જ્યારે ઉપયોગમાં ન હોય ત્યારે હવાચુસ્ત પાઉચ અથવા નરમ જ્વેલરી બોક્સમાં રાખો.',
    storyModalCare2: 'તેની કુદરતી દર્પણ જેવી ચમક જાળવવા નરમ માઇક્રોફાઇબર કપડાથી હળવેથી સાફ કરો.',
    storyModalCare3: 'પરફ્યુમ, ક્લોરિનવાળા સ્વિમિંગ પુલ અને કઠોર રસાયણોના સીધા સંપર્કથી બચાવો.',
    storyModalVisitUs: 'મુલાકાત લો: તાલુકા સેવા સદન સામે, દહેગામ, ગુજરાત.',

    toastAddedToBag: '"{name}" તમારી શોપિંગ બેગમાં ઉમેરવામાં આવ્યું.',
    toastRemovedFromBag: 'આભૂષણ શોપિંગ બેગમાંથી દૂર કરવામાં આવ્યું.',
    toastAddedToWishlist: 'આભૂષણ તમારી વિશલિસ્ટમાં સાચવવામાં આવ્યું.',
    toastRemovedFromWishlist: 'આભૂષણ વિશલિસ્ટમાંથી દૂર કરવામાં આવ્યું.',
  },

  hi: {
    announcementLocation: 'दहेगाમ, गुजरात बुटीक',
    announcementTagline: 'शुद्ध 925 सिल्वर आभूषण · हॉलमार्क प्रमाणित · कस्टम कारीगरी',
    directWhatsApp: 'सीधा व्हाट्सएप संपर्क',

    navHome: 'होम',
    navCollections: 'कलेक्शंस',
    navBestSellers: 'बेस्ट सेलर्स',
    navCustomDesign: 'कस्टम डिजाइन',
    navAboutUs: 'हमारे बारे में',
    navContact: 'संपर्क',
    searchPlaceholder: 'शुद्ध 925 सिल्वर हार, अंगूठियां, पेंडेंट, चेन खोजें...',
    searchAria: 'आभूषण खोजें',
    wishlistAria: 'आपकी विशलिस्ट',
    bagAria: 'आपकी शॉपिंग बैग',
    enquireAction: 'पूछताछ',
    clear: 'साफ़ करें',
    silverCategories: 'चांदी की श्रेणियां',
    chatOnWhatsApp: 'व्हाट्सएप पर बात करें',

    heroPurityBadge: 'चांदी की उत्कृष्ट कला',
    heroHeadingLine1: 'आपकी दास्तान बयां करती',
    heroHeadingLine2: 'सदाबहार सुंदरता',
    heroSubheading: 'शुद्ध 925 सिल्वर और कालजयी कस्टम आभूषणों का सौंदर्य अनुभव करें, जो आपके हर ख़ास पल के लिए विचारपूर्वक गढ़े गए हैं।',
    heroExploreBtn: 'कलेक्शन देखें',
    heroStoryBtn: 'हमारी कहानी जानें',
    pillarPure925: 'शुद्ध 925',
    pillarPure925Sub: 'हॉलमार्क प्रमाणित',
    pillarCustomCraft: 'कस्टम कारीगरी',
    pillarCustomCraftSub: 'बेस्पोक सिल्वर आर्ट',
    pillarDahegam: 'दहेगाમ',
    pillarDahegamSub: 'गुजरात ज्वेलर्स',
    heroCampaignBadge: 'विशेष एडिटोरियल कैंपेन',
    heroJewelleryName: 'हेरिटेज सिल्वर चोकर एवं झूमर बालियां',
    heroHallmarkTag: '925 हॉलमार्क युक्त',
    heroSealText: '925 शुद्ध चांदी',

    collectionsEyebrow: 'क्यूरेटेड श्रेणियां',
    collectionsHeading: 'हमारे आभूषण संग्रह देखें',
    collectionsSubtitle: 'सदाबहार चांदी। अत्यंत सुंदरता से निर्मित।',
    collectionsDesigns: 'डिजाइन्स',
    collectionsExploreLink: 'संग्रह देखें',
    collectionsSilverTag: '925 सिल्वर',

    catalogEyebrow: 'सिग्नेचर सिल्वर आभूषण',
    catalogHeading: 'हमारा उत्कृष्ट चयन',
    catalogSubtitle: 'शाश्वत भव्यता और सौंदर्य को परिभाषित करने वाले आभूषण।',
    catalogDemoNotice: 'प्रदर्शन कैटलॉग: गुजरात ओर्ना प्रस्तुति के लिए प्रतिनिधि 925 सिल्वर नमूना आभूषण',
    catalogFilteringFor: 'खोज परिणाम:',
    catalogSortFeatured: 'विशेष पहले',
    catalogSortPriceAsc: 'मूल्य: कम से अधिक',
    catalogSortPriceDesc: 'मूल्य: अधिक से कम',
    catalogNoFound: 'कोई आभूषण नहीं मिला',
    catalogNoFoundDesc: 'आपके वर्तमान चयन से मेल खाता कोई आभूषण नहीं मिला।',
    catalogResetFilters: 'फ़िल्टर रीसेट करें',
    catalog925Stamp: '925 सिल्वर',
    catalogQuickView: 'त्वरित झलक',
    catalogAddBag: 'बैग में जोड़ें',
    catalogSampleEstPrice: 'नमूना अनुमानित मूल्य',
    catalogEnquireWhatsApp: 'पूछताछ',
    catalogCustomQueryPrompt: 'कस्टम आकार, चेन की लंबाई या वजन संबंधी जानकारी चाहिए?',
    catalogExploreCustomLink: 'हमारी कस्टम आभूषण सेवाओं के बारे में जानें',

    catAll: 'सभी',
    catNecklaces: 'सिल्वर नेकलेस',
    catPendants: 'सिल्वर पेंडेंट',
    catRings: 'सिल्वर अंगूठियां',
    catEarrings: 'सिल्वर इयररिंग्स',
    catChains: 'सिल्वर चेन',
    catCustom: 'कस्टम आभूषण',

    storyEyebrow: 'हमारी कहानी',
    storyHeadingLine1: 'जहां परंपरा मिलती है',
    storyHeadingLine2: 'सदाबहार सौंदर्य से',
    storyP1: 'गुजरात ओर्ना बाय गुजरात ज्वेलर्स में, हम शुद्ध 925 सिल्वर के सौंदर्य और कालजयी आभूषण डिजाइन की कला का उत्सव मनाते हैं।',
    storyP2: 'दैनिक उपयोग के आकर्षक आभूषणों से लेकर विशेष कस्टम रचनाओं तक, ऐसे आभूषण खोजें जो आपकी अनूठी शैली और व्यक्तित्व को दर्शाते हैं।',
    storyVal1Title: 'प्रामाणिक 925 सिल्वर',
    storyVal1Desc: 'हॉलमार्क प्रमाणित स्टर्लिंग सिल्वर की शुद्धता, जो लंबे समय तक चमक बनाए रखती है।',
    storyVal2Title: 'दहेगाમ एटेलियर',
    storyVal2Desc: 'तालुका सेवा सदन के सामने स्थित, जहां ग्राहकों का आत्मीयता से स्वागत होता है।',
    storyKnowMoreBtn: 'और जानें',
    storyArtisanTitle: 'शिल्पकार का हुनर',
    storyArtisanDesc: 'हर आभूषण कच्ची चांदी और कलात्मक समर्पण से आकार लेता है।',

    whyEyebrow: 'विशिष्टता एवं विश्वास',
    whyHeading: 'गुजरात ओर्ना क्यों चुनें?',
    whySubtitle: 'दहेगाમ से जुड़ाव, शुद्ध चांदी की शिल्पकला को पूर्ण ईमानदारी के साथ समर्पित।',
    whyFeat1Title: 'शुद्ध 925 चांदी',
    whyFeat1Desc: 'प्रमाणित 925 स्टर्लिंग सिल्वर की शुद्धता से तैयार सुंदर चांदी के आभूषण संग्रह।',
    whyFeat2Title: 'कस्टम आभूषण',
    whyFeat2Desc: 'आपकी कल्पना और पसंद के अनुरूप कुशल कारीगरों द्वारा गढ़ी गई व्यक्तिगत डिजाइन्स।',
    whyFeat3Title: 'सदाबहार डिजाइन्स',
    whyFeat3Desc: 'पारंपरिक भारतीय रूपांकनों और आधुनिक भव्यता का अनूठा संगम।',
    whyFeat4Title: 'व्यक्तिगत सहायता',
    whyFeat4Desc: 'व्हाट्सएप पर सीधी और सहज सहायता एवं मित्रवत मार्गदर्शन।',

    customEyebrow: 'बेस्पोक सिल्वर एटेलियर',
    customHeadingLine1: 'आपकी शैली।',
    customHeadingLine2: 'आपकी डिजाइन।',
    customDescription: 'क्या आपके पास कोई विशेष आभूषण विचार है? अपनी कस्टम पसंद पर चर्चा के लिए हमसे संपर्क करें। नाम का पेंडेंट हो, खानदानी सिग्नेट अंगूठी हो या शादी-ब्याह के चांदी के विशेष गहने, हमारे कारीगर आपकी सोच को साकार करेंगे।',
    customStep1Title: 'अपनी प्रेरणा साझा करें',
    customStep1Desc: 'व्हाट्सएप या फॉर्म के माध्यम से संदर्भ चित्र, स्केच या विचार भेजें।',
    customStep2Title: 'कलात्मक ब्लूप्रिंटिंग',
    customStep2Desc: 'हमारे कारीगर सही अनुपात, चांदी के वजन और बनावट का आकलन करते हैं।',
    customStep3Title: 'शुद्ध 925 में हस्तनिर्मित',
    customStep3Desc: 'असली हॉलमार्क प्रमाणित शुद्ध चांदी में ढलाई कर हस्तशिल्प से तराशा जाता है।',
    customWhatsAppBtn: 'कस्टम आभूषण पूछताछ',
    customModalBtn: 'कस्टम विवरण दर्ज करें',
    customWhatsAppHelper: '* सीधा व्हाट्सएप संदेश: “नमस्ते गुजरात ओर्ना! मैं कस्टम 925 सिल्वर आभूषण बनवाने में रुचि रखता हूँ। कृपया विवरण साझा करें।”',
    customBespokeTag: 'बेस्पोक कमीशन',
    customPieceSampleTitle: 'शुद्ध 925 फिलिग्री ताबीज पेंडेंट',
    custom1to1Tag: 'कस्टम 1:1',

    instaEyebrow: '@gujaratorna',
    instaHeading: 'हमारी सिल्वर स्टोरी से जुड़ें',
    instaSubtitle: 'हमारे दहेगाમ बुटीक से नई डिजाइन्स, कारीगरी और पर्दे के पीछे की झलकियां देखें।',
    instaFollowBtn: 'इंस्टाग्राम पर @gujaratorna फॉलो करें',
    instaFooterNote: 'क्यूरेटेड शोकेस गैलरी · सोशल मीडिया पर हमारे साथ जुड़ें',

    testimonialsEyebrow: 'ग्राहकों के अनुभव',
    testimonialsHeading: 'हमारे ग्राहकों के शब्द',
    testimonialsDemoNotice: 'प्रस्तुति हेतु नमूना समीक्षाएं: आधिकारिक वेबसाइट पूर्वावलोकन के लिए तैयार',
    testimonialsVerifiedSilver: 'सत्यापित चांदी',

    contactEyebrow: 'दहेगाમ बुटीक एवं पूछताछ',
    contactHeading: 'आइए संपर्क करें',
    contactSubtitle: 'सुंदर 925 सिल्वर आभूषण खोज रहे हैं? आपकी पसंद का आभूषण चुनने में मदद करने में हमें प्रसन्नता होगी।',
    contactBoutiqueTitle: 'बुटीक का पता',
    contactInstagramTitle: 'आधिकारिक इंस्टाग्राम',
    contactWhatsAppTitle: 'व्हाट्सएप सहायता',
    contactWhatsAppDesc: 'उपलब्धता, कस्टम साइज और डिजाइन परामर्श हेतु त्वरित उत्तर प्राप्त करें।',
    contactDirectionsBtn: 'दिशा-निर्देश (मैप)',
    contactInStoreTitle: 'बुटीक में व्यक्तिगत परामर्श',
    contactInStoreDesc: 'तालुका सेवा सदन के सामने हमारे दहेगाમ स्टोर पर पधारें और 925 हॉलमार्क तथा कस्टम डिजाइन्स पर व्यक्तिगत चर्चा करें।',
    contactFormTitle: 'पूछताछ भेजें',
    contactFormSubtitle: 'अपनी आभूषण संबंधी आवश्यकताएं बताएं, हम श्रेष्ठ डिजाइन विकल्पों के साथ संपर्क करेंगे।',
    contactLabelFullName: 'पूरा नाम',
    contactLabelPhone: 'फ़ोन नंबर',
    contactLabelEmail: 'ईमेल पता',
    contactLabelOptional: '(वैकल्पिक)',
    contactLabelInterest: 'आभूषण में रुचि',
    contactLabelMessage: 'संदेश / प्राथमिकताएं',
    contactPlaceholderName: 'उदा. राधिका पटेल',
    contactPlaceholderPhone: 'उदा. 98250 12345',
    contactPlaceholderEmail: 'उदा. contact@example.com',
    contactPlaceholderMessage: 'चांदी का पसंदीदा वजन, लंबाई, डिजाइन संदर्भ या अवसर संबंधी जानकारी लिखें...',
    contactSubmitBtn: 'पूछताछ सबमिट करें',
    contactSubmittingBtn: 'सबमिट हो रहा है...',
    contactThankYouTitle: 'धन्यवाद',
    contactSuccessMessage: '{interest} हेतु आपकी पूछताछ सफलतापूर्वक प्राप्त हो गई है।',
    contactContinueWhatsApp: 'अब व्हाट्सएप पर बातचीत जारी रखें',
    contactInstantAssistanceNote: 'तुरंत सहायता के लिए ऊपर क्लिक कर सीधे व्हाट्सएप पर संदेश भेजें।',
    contactSubmitAnother: 'दूसरी पूछताछ भेजें',

    errFullNameRequired: 'कृपया अपना पूरा नाम दर्ज करें।',
    errPhoneRequired: 'कृपया अपना फ़ोन नंबर दर्ज करें।',
    errPhoneMinDigits: 'कृपया मान्य फ़ोन नंबर दर्ज करें (कम से कम 8 अंक)।',
    errEmailInvalid: 'कृपया मान्य ईमेल पता दर्ज करें या इसे खाली छोड़ दें।',
    errMessageRequired: 'कृपया अपनी पूछताछ या आभूषण प्राथमिकताएं साझा करें।',

    footerNavTitle: 'नेविगेशन',
    footerAddressTitle: 'बुटीक का पता',
    footerCertifiedGuarantee: '100% प्रमाणित शुद्ध 925 स्टर्लिंग सिल्वर',
    footerOfficialShowcase: 'गुजरात ओर्ना की आधिकारिक प्रस्तुति वेबसाइट।',
    footerRightsReserved: '© 2026 गुजरात ओर्ना। सर्वाधिकार सुरक्षित।',
    footerPrivacyPolicy: 'गोपनीयता नीति',
    footerTermsConditions: 'नियम एवं शर्तें',
    footerClose: 'बंद करें',
    privacyModalTitle: 'गोपनीयता नीति',
    privacyModalP1: 'गुजरात ओर्ना ग्राहक गोपनीयता का पूर्ण सम्मान करता है। व्हाट्सएप या फॉर्म द्वारा प्राप्त जानकारी केवल आपके आर्डर और कस्टम साइज परामर्श हेतु उपयोग की जाती है।',
    privacyModalP2: 'हम ग्राहकों की जानकारी किसी तीसरे पक्ष को नहीं बेचते। आपके कस्टम स्केच और प्राथमिकताएं पूर्णतः सुरक्षित रखी जाती हैं।',
    termsModalTitle: 'नियम एवं शर्तें',
    termsModalP1: 'सभी शुद्ध चांदी के आभूषण प्रामाणिक 925 स्टर्लिंग सिल्वर हॉलमार्किंग दर्शाते हैं। कस्टम आभूषण का निर्माण दोनों पक्षों द्वारा डिजाइन अनुमोदन के पश्चात ही आरंभ होता है।',
    termsModalP2: 'वेबसाइट कैटलॉग दरें नमूना अनुमान दर्शाती हैं। सटीक मूल्य वास्तविक समय के चांदी भाव, कुल वजन और शिल्पकारिता पर निर्भर करता है।',

    cartTitle: 'आपकी शॉपिंग बैग',
    cartEmptyTitle: 'आपकी बैग खाली है',
    cartEmptyDesc: 'अपना संग्रह आरंभ करने के लिए हमारे 925 स्टर्लिंग सिल्वर नेकलेस, पेंडेंट, अंगूठियां और चेन देखें।',
    cartExploreBtn: 'आभूषण देखें',
    cartClearBag: 'बैग खाली करें',
    cartEstTotal: 'अनुमानित कुल:',
    cartOrderNote: 'व्यक्तिगत साइज और हॉलमार्क सत्यापन हेतु आर्डर सीधे गुजरात ओर्ना के साथ व्हाट्सएप पर समन्वित किए जाते हैं।',
    cartOrderWhatsAppBtn: 'व्हाट्सएप पर आर्डर / पूछताछ करें',
    cartContinueBrowsing: 'ब्राउजिंग जारी रखें',

    wishlistTitle: 'सहेजे गए आभूषण',
    wishlistEmptyTitle: 'आपकी विशलिस्ट खाली है',
    wishlistEmptyDesc: 'अपने पसंदीदा 925 सिल्वर आभूषणों को दोबारा देखने या पूछताछ के लिए सहेजें।',
    wishlistBrowseBtn: 'कलेक्शन ब्राउज करें',
    wishlistAddAllBtn: 'सभी को बैग में जोड़ें',

    modalSampleRate: '(नमूना संदर्भ मूल्य)',
    modalPurityLabel: 'शुद्धता',
    modalWeightLabel: 'अनुमानित वजन',
    modalDimensionsLabel: 'आयाम / माप',
    modalSelectSpec: 'माप / विशिष्टता चुनें',
    modalQuantity: 'मात्रा',
    modalAddToBag: 'बैग में जोड़ें',
    modalEnquirePieceWhatsApp: 'इस आभूषण के बारे में व्हाट्सएप पर पूछताछ करें',

    customModalAtelierTag: 'गुजरात ओर्ना बेस्पोक एटेलियर',
    customModalHeading: 'कस्टम 925 सिल्वर आभूषण बनवाएं',
    customModalSubtitle: 'अपने डिजाइन विचार साझा करें और हमारे दहेगाમ के कारीगरों से सीधे जुड़ें।',
    customModalPieceTypeLabel: 'आभूषण का प्रकार',
    customModalWeightLabel: 'अनुमानित चांदी का वजन',
    customModalEngravingLabel: 'नाम / आद्याक्षर नक्काशी',
    customModalDescLabel: 'डिजाइन विवरण एवं प्रेरणा',
    customModalDescPlaceholder: 'अपनी डिजाइन का विवरण दें (एंटीक फिनिश, फिलिग्री, स्टोन सेटिंग या व्हाट्सएप पर स्केच भेजें)...',
    customModalGuaranteeText: 'शुद्ध 925 हॉलमार्क गारंटी: प्रत्येक कस्टम आभूषण पर आधिकारिक 925 हॉलमार्क प्रमाणित मुहर अंकित होती है।',
    customModalSubmitBtn: 'विवरण के साथ व्हाट्सएप पर जुड़ें',
    customModalCancelBtn: 'रद्द करें',

    storyModalTag: 'गुजरात ओर्ना के बारे में',
    storyModalHeading: 'जहां परंपरा मिलती है सदाबहार सौंदर्य से',
    storyModalSubheading: 'बाय गुजरात ज्वेलर्स · दहेगाમ, गुजरात',
    storyModalEssenceHeading: 'शुद्ध 925 सिल्वर का महत्व',
    storyModalEssenceP1: 'गुजरात ओर्ना बाय गुजरात ज्वेलर्स में, हम शुद्ध 925 स्टर्लिंग सिल्वर की शाश्वत चमक का उत्सव मनाते हैं। सदियों से भारतीय श्रृंगार और उत्सवों में चांदी का अत्यंत पवित्र स्थान रहा है।',
    storyModalEssenceP2: 'दैनिक जीवन की नाजुक चेन और अंगूठियों से लेकर शादी-ब्याह के भव्य चोकर तक, हर आभूषण उत्कृष्ट कारीगरी और प्रामाणिक शुद्धता को प्रदर्शित करता है।',
    storyModalHallmarkTitle: '925 हॉलमार्क युक्त',
    storyModalHallmarkDesc: '92.5% प्रमाणित शुद्ध चांदी जो दीर्घकालिक मजबूती प्रदान करती है।',
    storyModalBlueprintsTitle: 'कस्टम ब्लूप्रिंट्स',
    storyModalBlueprintsDesc: 'शुरुआती स्केच से लेकर हाथ से तराशे गए चांदी के उत्कृष्ट मास्टरपीस तक।',
    storyModalBoutiqueTitle: 'दहेगाમ बुटीક',
    storyModalBoutiqueDesc: 'तालुका सेवा सदन के सामने व्यक्तिगत आत्मीय परामर्श।',
    storyModalCareHeading: '925 सिल्वर की देखभाल',
    storyModalCare1: 'उपयोग में न होने पर एयरटाइट पाउच या मुलायम बॉक्स में नमी से दूर रखें।',
    storyModalCare2: 'प्राकृतिक चमक बनाए रखने हेतु मुलायम माइक्रोफाइबर कपड़े से हल्के हाथ से पोंछें।',
    storyModalCare3: 'इत्र, स्विमिंग पूल के क्लोरीन और कठोर रसायनों के सीधे संपर्क से बचाएं।',
    storyModalVisitUs: 'पधारें: तालुका सेवा सदन के सामने, दहेगाમ, गुजरात।',

    toastAddedToBag: '"{name}" आपकी शॉपिंग बैग में जोड़ा गया।',
    toastRemovedFromBag: 'आभूषण शॉपिंग बैग से हटा दिया गया।',
    toastAddedToWishlist: 'आभूषण आपकी विशलिस्ट में सहेजा गया।',
    toastRemovedFromWishlist: 'आभूषण विशलिस्ट से हटा दिया गया।',
  },
};

/**
 * Localized Collections metadata (preserves English keys while providing natural Gujarati and Hindi titles/subtitles)
 */
export const localizedCollections: Record<Language, Record<string, { title: string; subtitle: string; tagline: string }>> = {
  en: {
    'silver-necklaces': {
      title: 'Silver Necklaces',
      subtitle: 'Graceful collars, layered chokers & statement strands',
      tagline: 'Pure 925 Silver Necklaces crafted to adorn every neckline with effortless radiance.',
    },
    'silver-pendants': {
      title: 'Silver Pendants',
      subtitle: 'Intricate filigree medallions & contemporary amulets',
      tagline: 'Artisanal 925 Silver pendants engraved with timeless motifs.',
    },
    'silver-rings': {
      title: 'Silver Rings',
      subtitle: 'Sculpted bands, signets & floral motifs',
      tagline: 'Comfort-fit 925 Silver rings designed for daily elegance.',
    },
    'silver-earrings': {
      title: 'Silver Earrings',
      subtitle: 'Filigree jhumkis, chandelier drops & stud accents',
      tagline: 'Lightweight hallmarked silver earrings for celebrations and everyday grace.',
    },
    'silver-chains': {
      title: 'Silver Chains',
      subtitle: 'Diamond-cut curb, rope, figaro & box links',
      tagline: 'Heavy gauge, precision-finished 925 sterling silver chains for men and women.',
    },
    'custom-jewellery': {
      title: 'Custom Jewellery',
      subtitle: 'Bespoke commissions handcrafted from your sketches',
      tagline: 'Turn your imagination into heirloom silver with our master silversmiths.',
    },
  },
  gu: {
    'silver-necklaces': {
      title: 'સિલ્વર નેકલેસ',
      subtitle: 'ભવ્ય ચોકર, લેયર્ડ હાર અને મનમોહક સિલ્વર માળાઓ',
      tagline: 'દરેક ગળાની શોભા વધારતા શુદ્ધ 925 સિલ્વર નેકલેસ.',
    },
    'silver-pendants': {
      title: 'સિલ્વર પેન્ડન્ટ્સ',
      subtitle: 'બારીક ફિલિગ્રી મેડાલિયન અને આધુનિક આભૂષણો',
      tagline: 'કાલાતીત નકશીકામ સાથે ઘડાયેલા કલાત્મક 925 સિલ્વર પેન્ડન્ટ્સ.',
    },
    'silver-rings': {
      title: 'સિલ્વર રિંગ્સ',
      subtitle: 'કલાત્મક બેન્ડ્સ, સિગ્નેટ વીંટી અને ફ્લોરલ ડિઝાઇન્સ',
      tagline: 'રોજિંદા ઉપયોગમાં આરામદાયક અને સુંદર 925 સિલ્વર વીંટીઓ.',
    },
    'silver-earrings': {
      title: 'સિલ્વર એરિંગ્સ',
      subtitle: 'ફિલિગ્રી ઝુમકીઓ, ઝુમ્મર કાનબુટ્ટી અને સ્ટડ્સ',
      tagline: 'તહેવારો અને દૈનિક ઉપયોગ માટે હળવા વજનવાળી હોલમાર્ક સિલ્વર બુટ્ટીઓ.',
    },
    'silver-chains': {
      title: 'સિલ્વર ચેઇન',
      subtitle: 'ડાયમંડ-કટ કર્બ, રોપ, ફિગારો અને બોક્સ લિંક્સ',
      tagline: 'મહિલાઓ અને પુરુષો માટે મજબૂત અને તેજસ્વી 925 સિલ્વર ચેઇન.',
    },
    'custom-jewellery': {
      title: 'કસ્ટમ જ્વેલરી',
      subtitle: 'તમારા સ્કેચ અને વિચાર મુજબ ઘડાતા બેસ્પોક આભૂષણો',
      tagline: 'અમારા કુશળ કારીગરો સાથે તમારી કલ્પનાને સાકાર કરો.',
    },
  },
  hi: {
    'silver-necklaces': {
      title: 'सिल्वर नेकलेस',
      subtitle: 'मनमोहक चोकर, लेयर्ड हार और आकर्षक मालाएं',
      tagline: 'हर गले की शोभा बढ़ाने वाले शुद्ध 925 सिल्वर नेकलेस।',
    },
    'silver-pendants': {
      title: 'सिल्वर पेंडेंट',
      subtitle: 'बारीक फिलिग्री पदक एवं समकालीन ताबीज पेंडेंट',
      tagline: 'सदाबहार नक्काशी के साथ तराशे गए कलात्मक 925 सिल्वर पेंडेंट।',
    },
    'silver-rings': {
      title: 'सिल्वर अंगूठियां',
      subtitle: 'तराशे हुए बैंड, सिग्नेट अंगूठियां और फ्लोरल रूपांकन',
      tagline: 'दैनिक उपयोग में आरामदायक और भव्य 925 सिल्वर अंगूठियां।',
    },
    'silver-earrings': {
      title: 'सिल्वर इयररिंग्स',
      subtitle: 'फिलिग्री झुमके, झूमर बालियां और डेली-वेयर स्टड्स',
      tagline: 'उत्सवों और दैनिक उपयोग हेतु हल्के वजन की हॉलमार्क चांदी की बालियां।',
    },
    'silver-chains': {
      title: 'सिल्वर चेन',
      subtitle: 'डायमंड-कट कर्ब, रोप, फिगारो और बॉक्स लिंक्स',
      tagline: 'महिला और पुरुष दोनों के लिए टिकाऊ और चमकीली 925 सिल्वर चेन।',
    },
    'custom-jewellery': {
      title: 'कस्टम आभूषण',
      subtitle: 'आपके स्केच और विचारों से तैयार होने वाले बेस्पोक गहने',
      tagline: 'हमारे अनुभवी कारीगरों के साथ अपनी कल्पना को चांदी में ढालें।',
    },
  },
};

/**
 * Localized Products metadata (names & descriptions)
 */
export const localizedProducts: Record<Language, Record<string, { name: string; description: string }>> = {
  en: {
    'go-925-01': {
      name: 'Aadya Filigree Mandala Pendant',
      description: 'A masterfully engraved Pure 925 Sterling Silver medallion pendant showcasing traditional Gujarat filigree geometry with an oxidized antique finish.',
    },
    'go-925-02': {
      name: 'Samudra Textured Signet Ring',
      description: 'Hand-hammered organic faceted pure 925 silver signet ring with mirror-polished bevels and a solid comfort-band shank.',
    },
    'go-925-03': {
      name: 'Meera Choker Statement Strand',
      description: 'Bold articulated 925 silver sculptural collar crafted with hand-beaten links and a bespoke dual-safety silversmith clasp.',
    },
    'go-925-04': {
      name: 'Bespoke Royal Heritage Amulet',
      description: 'Custom handcrafted talisman carved from individual client sketches, featuring dual-tone rhodium/silver finish and bespoke engraving.',
    },
    'go-925-05': {
      name: 'Vira Diamond-Cut Curb Chain',
      description: 'Precision Italian diamond-cut pure 925 sterling silver curb chain with high light-refraction facets and heavy-duty lobster clasp.',
    },
    'go-925-06': {
      name: 'Nysa Geometric Stacking Band Set',
      description: 'Trio of interlocking minimalist pure 925 silver bands with contrasting satin brushed, hammered, and polished surface textures.',
    },
    'go-925-07': {
      name: 'Chandrika Filigree Moon Jhumkis',
      description: 'Lightweight pure 925 silver drop earrings with crescent filigree wirework, ghungroo bells, and hypo-allergenic silver ear-wires.',
    },
    'go-925-08': {
      name: 'Kashmiri Floral Silver Locket',
      description: 'Vintage keepsake opening locket crafted in 925 silver with hand-chiseled flower vine motifs and dual internal photo recesses.',
    },
  },
  gu: {
    'go-925-01': {
      name: 'આદ્યા ફિલિગ્રી મંડલા પેન્ડન્ટ',
      description: 'પરંપરાગત ગુજરાત ફિલિગ્રી જ્યામિતિ અને એન્ટિક ઓક્સિડાઇઝ્ડ ફિનિશ ધરાવતું શુદ્ધ 925 સ્ટર્લિંગ સિલ્વર મેડાલિયન પેન્ડન્ટ.',
    },
    'go-925-02': {
      name: 'સમુદ્ર ટેક્ષ્ચર સિગ્નેટ રિંગ',
      description: 'હાથથી ટીપીને ઘડેલી ઓર્ગેનિક ફેસેટેડ શુદ્ધ 925 સિલ્વર સિગ્નેટ રિંગ, જે દર્પણ જેવી પોલિશ અને આરામદાયક બેન્ડ ધરાવે છે.',
    },
    'go-925-03': {
      name: 'મીરા ચોકર સ્ટેટમેન્ટ સ્ટ્રેન્ડ',
      description: 'હાથથી ઘડેલી કડીઓ અને ડ્યુઅલ સેફ્ટી લોક સાથે તૈયાર કરાયેલો ભવ્ય 925 સિલ્વર કૉલર ચોકર હાર.',
    },
    'go-925-04': {
      name: 'રોયલ હેરિટેજ બેસ્પોક તાવીજ',
      description: 'ગ્રાહકના વ્યક્તિગત સ્કેચ પરથી ખાસ ઘડાયેલું કસ્ટમ તાવીજ પેન્ડન્ટ, જેમાં વિશેષ કોતરણી અને ડ્યુઅલ ફિનિશ છે.',
    },
    'go-925-05': {
      name: 'વીરા ડાયમંડ-કટ કર્બ ચેઇન',
      description: 'ઉચ્ચ પ્રકાશ પરાવર્તન અને મજબૂત લોબસ્ટર હૂક સાથેની ઇટાલિયન ડાયમંડ-કટ શુદ્ધ 925 સ્ટર્લિંગ સિલ્વર ચેઇન.',
    },
    'go-925-06': {
      name: 'નાયસા જ્યોમેટ્રિક સ્ટેકિંગ બેન્ડ સેટ',
      description: 'સેટિન બ્રશ, હેમર્ડ અને પોલિશ્ડ ટેક્ષ્ચર ધરાવતી ત્રણ મિનિમલિસ્ટ શુદ્ધ 925 સિલ્વર વીંટીઓનો સેટ.',
    },
    'go-925-07': {
      name: 'ચંદ્રિકા ફિલિગ્રી મૂન ઝુમકી',
      description: 'ચંદ્રકોર ફિલિગ્રી વાયરવર્ક, નાની ઘૂઘરીઓ અને સ્કિન-ફ્રેન્ડલી સિલ્વર હૂક સાથેની હળવા વજનની 925 સિલ્વર ઝુમકી.',
    },
    'go-925-08': {
      name: 'કાશ્મીરી ફ્લોરલ સિલ્વર લૉકેટ',
      description: 'હાથથી કોતરેલા પુષ્પ વેલવેલિયા અને બે ફોટો રાખવાની જગ્યા ધરાવતું વિન્ટેજ શૈલીનું 925 સિલ્વર ઓપનિંગ લૉકેટ.',
    },
  },
  hi: {
    'go-925-01': {
      name: 'आद्या फिलिग्री मंडला पेंडेंट',
      description: 'पारंपरिक गुजराती फिलिग्री ज्यामिति एवं विंटेज ऑक्सीडाइज्ड फिनिश युक्त शुद्ध 925 स्टर्लिंग सिल्वर मेडलियन पेंडेंट।',
    },
    'go-925-02': {
      name: 'समुद्र टेक्सचर्ड सिग्नेट रिंग',
      description: 'हाथ से गढ़ी गई शुद्ध 925 सिल्वर सिग्नेट अंगूठी, जिसमें दर्पण जैसी पॉलिश और आरामदायक ठोस बैंड है।',
    },
    'go-925-03': {
      name: 'मीरा चोकर स्टेटमेंट स्ट्रैंड',
      description: 'बारीक दस्तकारी वाली कड़ियों और विशेष सुरक्षा लॉक से सुसज्जित भव्य 925 सिल्वर चोकर हार।',
    },
    'go-925-04': {
      name: 'रॉयल हेरिटेज बेस्पोक ताबीज',
      description: 'ग्राहक के व्यक्तिगत स्केच के अनुसार विशेष रूप से तराशा गया ताबीज पेंडेंट, दोहरी फिनिश एवं नक्काशी के साथ।',
    },
    'go-925-05': {
      name: 'वीरा डायमंड-कट कर्ब चेन',
      description: 'उत्कृष्ट चमक और मजबूत लॉक के साथ तैयार इटालियन डायमंड-कट शुद्ध 925 स्टर्लिंग सिल्वर कर्ब चेन।',
    },
    'go-925-06': {
      name: 'नायसा ज्योमेट्रिक स्टैकिंग बैंड सेट',
      description: 'सैटिन ब्रश्ड, हैमर्ड और पॉलिश्ड सतह की बनावट वाली तीन मिनिमलिस्ट 925 सिल्वर अंगूठियों का सेट।',
    },
    'go-925-07': {
      name: 'चंद्रिका फिलिग्री मून झुमकी',
      description: 'अर्धचंद्र फिलिग्री तारकारी, घुंघरू और त्वचा के अनुकूल हुक वाली हल्की शुद्ध 925 सिल्वर झुमकी।',
    },
    'go-925-08': {
      name: 'कश्मीरी फ्लोरल सिल्वर लॉकेट',
      description: 'हाथ से नक्काशीदार पुष्प लताओं और दो तस्वीरों की जगह वाला विंटेज 925 सिल्वर खुलने वाला लॉकेट।',
    },
  },
};
