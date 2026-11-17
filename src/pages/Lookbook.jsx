import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import styles from './Lookbook.module.css';

const SLIDESHOW_IMAGES = [
  '/lookbook/look-1.jpg',
  '/lookbook/look-2.jpg',
  '/lookbook/look-3.jpg',
  '/lookbook/look-4.jpg',
  '/lookbook/look-5.jpg',
  '/lookbook/look-6.jpg',
  '/lookbook/look-7.jpg',
];

const LOOKBOOK_ITEMS = [
  {
    id: 1,
    lookNumber: 'LOOK 01 // METROPOLIS DROP',
    title: 'OVERSIZED DENIM CARGO SUIT',
    image: '/lookbook/look-1.jpg',
    description: 'Raw denim cutout cropped trucker paired with acid-wash wide leg utility cargos and tactical platform boots.',
    pieces: 'Cutout Denim Jacket • Acid Wide Cargos • Cyber Platform Boots',
    badge: 'FEATURED EDITORIAL',
    filterCategory: 'womens-dresses',
  },
  {
    id: 2,
    lookNumber: 'LOOK 02 // RAW ARCHITECTURE',
    title: 'CYBER WIDE-LEG SILHOUETTE',
    image: '/lookbook/look-2.jpg',
    description: 'Ultra-low angle fisheye capture showcasing dual front bellow utility pockets and rugged urban work boots.',
    pieces: 'Washed Indigo Cargos • Distressed Denim Layer • Sand Combat Lug Sole',
    badge: 'CORE SILHOUETTE',
    filterCategory: 'mens-shirts',
  },
  {
    id: 3,
    lookNumber: 'LOOK 03 // GRAVITY SHIFT',
    title: 'DISTRESSED UTILITY ESSENTIALS',
    image: '/lookbook/look-3.jpg',
    description: 'Aggressive street proportions engineered for motion. Premium hardware with exaggerated bottom hems.',
    pieces: 'Heavyweight Denim Top • Double-Knee Trousers • Nubuck Boots',
    badge: 'DROP EXCLUSIVE',
    filterCategory: 'mens-shirts',
  },
  {
    id: 6,
    lookNumber: 'LOOK 04 // TECTONIC ANGLE',
    title: 'LOW-PROFILE CARGO RUNNER',
    image: '/lookbook/look-6.jpg',
    description: 'Extreme fisheye ground perspective focusing on oversized leg openings and heavy tread workwear footwear.',
    pieces: 'Acid Bleach Denim • Heavyweight Oversized Cargo • Combat Soles',
    badge: 'EDITORIAL EXCLUSIVE',
    filterCategory: 'mens-shirts',
  },
  {
    id: 7,
    lookNumber: 'LOOK 05 // MID-AIR DRIFT',
    title: 'KINETIC STREETWEAR SUIT',
    image: '/lookbook/look-7.jpg',
    description: 'Dynamic frozen motion frame captured against brutalist skyscraper towers. Full heavy denim coordination.',
    pieces: 'Cutout Trucker • Acid Cargo Flairs • Sand Lug Boots',
    badge: 'MOTION EDIT',
    filterCategory: 'womens-dresses',
  },
  {
    id: 4,
    lookNumber: 'LOOK 06 // ROOFTOP SKYLINE',
    title: 'SKATER FLARE & LOGO CROP',
    image: '/lookbook/look-4.jpg',
    description: 'Panoramic cityscape styling with contrast topstitch flared denim and custom graphic bra-top.',
    pieces: 'NEMESIS Arch Crop • Contrast Stitch Baggy Denim • Chunky Low Tops',
    badge: 'LIMITED RUN',
    filterCategory: 'womens-dresses',
  },
  {
    id: 5,
    lookNumber: 'LOOK 07 // RETRO ANALOG',
    title: 'VIBRANT ACID CONTRAST',
    image: '/lookbook/look-5.jpg',
    description: 'Yellow visor cap combined with acid tank top and raw denim pleated mini skirt with vintage analog camera.',
    pieces: 'NMS Sun Visor • Solar Yellow Rib Tank • Raw Pleat Skirt',
    badge: 'Y2K ACCESSORIES',
    filterCategory: 'sunglasses',
  },
];

function Lookbook() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Rapid Instagram-edit slideshow effect (~260ms per frame)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.lookbookPage}>
      {/* ── Banner ── */}
      <section className={styles.heroBanner}>
        <span className={styles.heroTag}>
          <Sparkles size={14} style={{ display: 'inline', marginRight: 6 }} />
          SS26 Editorial Collection
        </span>
        <h1 className={styles.heroTitle}>NEMESIS LOOKBOOK</h1>
        <p className={styles.heroDesc}>
          An unfiltered visual archive of youth culture, extreme low angles, and raw Y2K denim proportions. Shot in metropolitan concrete canyons.
        </p>
      </section>

      {/* ── Visual Catalogue ── */}
      <div className={styles.catalogueContainer}>
        <div className={styles.lookGrid}>
          {LOOKBOOK_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.lookCard} ${
                index === 0
                  ? styles.cardHero
                  : index % 2 === 1
                  ? styles.cardOffset
                  : ''
              }`}
            >
              <div className={styles.imageFrame}>
                <span className={styles.lookBadge}>
                  {index === 0 ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Zap size={11} fill="currentColor" /> FAST CUT EDIT
                    </span>
                  ) : (
                    item.badge
                  )}
                </span>

                {index === 0 ? (
                  // Rapid Instagram slideshow frame
                  <div className={styles.slideshowContainer}>
                    {SLIDESHOW_IMAGES.map((imgSrc, slideIdx) => (
                      <img
                        key={slideIdx}
                        src={imgSrc}
                        alt={`${item.title} cut ${slideIdx + 1}`}
                        className={`${styles.lookImage} ${styles.slideImage} ${activeSlideIndex === slideIdx ? styles.slideActive : ''
                          }`}
                      />
                    ))}
                    {/* Retro frame ticker */}
                    <div className={styles.frameCounter}>
                      FRAME 0{activeSlideIndex + 1} / 0{SLIDESHOW_IMAGES.length}
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.lookImage}
                    loading="lazy"
                  />
                )}
              </div>

              <div className={styles.cardContent}>
                <span className={styles.lookNumber}>{item.lookNumber}</span>
                <h2 className={styles.lookTitle}>{item.title}</h2>
                <p className={styles.lookPieces}>{item.pieces}</p>
                <Link
                  to={`/shop?category=${item.filterCategory}`}
                  className={styles.shopLookBtn}
                >
                  Shop This Aesthetic <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lookbook;
