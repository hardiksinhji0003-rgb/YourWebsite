import { CollectionItem } from '../types';

import colRingsImg from '../assets/images/col_silver_rings_1793634710666.jpg';
import colEarringsImg from '../assets/images/col_silver_earrings_1793634667497.jpg';

export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'silver-necklaces',
    title: 'Silver Necklaces',
    subtitle: 'Graceful collars, layered chokers & statement strands',
    categoryKey: 'Silver Necklaces',
    image: '/assets/aistudio/image_14d4b50c.png',
    imageFit: 'contain',
    imageBg: 'bg-black',
    itemCount: 18,
    tagline: 'Pure 925 Silver Necklaces crafted to adorn every neckline with effortless radiance.',
  },
  {
    id: 'silver-rings',
    title: 'Silver Rings',
    subtitle: 'Sculpted bands, signets & floral motifs',
    categoryKey: 'Silver Rings',
    image: colRingsImg,
    imageFit: 'cover',
    itemCount: 32,
    tagline: 'Comfort-fit 925 Silver rings designed for daily elegance.',
  },
  {
    id: 'silver-earrings',
    title: 'Silver Earrings',
    subtitle: 'Filigree jhumkis, chandelier drops & stud accents',
    categoryKey: 'Silver Earrings',
    image: colEarringsImg,
    imageFit: 'cover',
    itemCount: 28,
    tagline: 'Lightweight hallmarked silver earrings for celebrations and everyday grace.',
  },
  {
    id: 'silver-chains',
    title: 'Silver Chains',
    subtitle: 'Diamond-cut curb, rope, figaro & box links',
    categoryKey: 'Silver Chains',
    image: '/assets/aistudio/image_754cab63.png',
    imageFit: 'contain',
    imageBg: 'bg-[#F4EFEA]',
    itemCount: 16,
    tagline: 'Heavy gauge, precision-finished 925 sterling silver chains for men and women.',
  },
  {
    id: 'custom-jewellery',
    title: 'Custom Jewellery',
    subtitle: 'Bespoke commissions handcrafted from your sketches',
    categoryKey: 'Custom Jewellery',
    image: '/assets/aistudio/image_9353efe6.png',
    imageFit: 'cover',
    imagePosition: 'object-[50%_46%]',
    itemCount: 12,
    tagline: 'Turn your imagination into heirloom silver with our master silversmiths.',
  },
];
