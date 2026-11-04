import { CollectionItem } from '../types';

import colNecklacesImg from '../assets/images/col_silver_necklaces_1793634710451.jpg';
import colPendantsImg from '../assets/images/silver_necklaces_pendant_1793629454825.jpg';
import colRingsImg from '../assets/images/col_silver_rings_1793634710666.jpg';
import colEarringsImg from '../assets/images/col_silver_earrings_1793634667497.jpg';
import colChainsImg from '../assets/images/col_silver_chains_1793634667723.jpg';
import colCustomImg from '../assets/images/craftsmanship_silver_atelier_1793629453470.jpg';

export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'silver-necklaces',
    title: 'Silver Necklaces',
    subtitle: 'Graceful collars, layered chokers & statement strands',
    categoryKey: 'Silver Necklaces',
    image: colNecklacesImg,
    itemCount: 18,
    tagline: 'Pure 925 Silver Necklaces crafted to adorn every neckline with effortless radiance.',
  },
  {
    id: 'silver-pendants',
    title: 'Silver Pendants',
    subtitle: 'Intricate filigree medallions & contemporary amulets',
    categoryKey: 'Silver Pendants',
    image: colPendantsImg,
    itemCount: 24,
    tagline: 'Artisanal 925 Silver pendants engraved with timeless motifs.',
  },
  {
    id: 'silver-rings',
    title: 'Silver Rings',
    subtitle: 'Sculpted bands, signets & floral motifs',
    categoryKey: 'Silver Rings',
    image: colRingsImg,
    itemCount: 32,
    tagline: 'Comfort-fit 925 Silver rings designed for daily elegance.',
  },
  {
    id: 'silver-earrings',
    title: 'Silver Earrings',
    subtitle: 'Filigree jhumkis, chandelier drops & stud accents',
    categoryKey: 'Silver Earrings',
    image: colEarringsImg,
    itemCount: 28,
    tagline: 'Lightweight hallmarked silver earrings for celebrations and everyday grace.',
  },
  {
    id: 'silver-chains',
    title: 'Silver Chains',
    subtitle: 'Diamond-cut curb, rope, figaro & box links',
    categoryKey: 'Silver Chains',
    image: colChainsImg,
    itemCount: 16,
    tagline: 'Heavy gauge, precision-finished 925 sterling silver chains for men and women.',
  },
  {
    id: 'custom-jewellery',
    title: 'Custom Jewellery',
    subtitle: 'Bespoke commissions handcrafted from your sketches',
    categoryKey: 'Custom Jewellery',
    image: colCustomImg,
    itemCount: 12,
    tagline: 'Turn your imagination into heirloom silver with our master silversmiths.',
  },
];
