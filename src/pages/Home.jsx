import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldAlert, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/hero-campaign.png';
import styles from './Home.module.css';

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let isMounted = true;

    // Lazy load anime.js only on homepage mount
    import('animejs').then(({ createTimeline, stagger, utils }) => {
      if (!isMounted || !heroRef.current) return;

      const tl = createTimeline({
        defaults: {
          ease: 'outQuad',
        },
        onComplete: (self) => {
          if (utils?.cleanInlineStyles) {
            utils.cleanInlineStyles(self);
          }
        },
      });

      // 1. Campaign photo entrance: fade in
      tl.add(`.${styles.campaignImg}`, {
        opacity: [0, 1],
        duration: 900,
      });

      // 2. Headline words stagger in from below
      tl.add(
        `.${styles.word}`,
        {
          opacity: [0, 1],
          translateY: [28, 0],
          duration: 550,
          delay: stagger(90),
        },
        '-=550'
      );

      // 3. CTA button slides up
      tl.add(
        `.${styles.cta}`,
        {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 450,
        },
        '-=200'
      );

      // 4. Brand marks and editorial labels fade in
      tl.add(
        `.${styles.editorialLabel}, .${styles.limitedDrop}, .${styles.brandMark}, .${styles.subtext}`,
        {
          opacity: [0, 1],
          duration: 500,
          delay: stagger(60),
        },
        '-=250'
      );
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div ref={heroRef} className={styles.homeContainer}>
      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* Left Column: Headline & CTA */}
          <div className={styles.headlineBox}>
            <h1 className={styles.headline}>
              <span className={styles.word}>NOT</span>{' '}
              <span className={styles.word}>MADE</span>
              <br />
              <span className={styles.word}>TO</span>
              <br />
              <span className={styles.word}>FIT</span>{' '}
              <span className={styles.word}>IN.</span>
            </h1>
            <Link to="/shop" className={styles.cta}>
              Shop the Drop <ArrowRight size={18} strokeWidth={2} />
            </Link>
            <span className={styles.limitedDrop}>LIMITED DROP</span>
          </div>

          {/* Center: Campaign Image */}
          <div className={styles.heroImage}>
            <div className={styles.campaignImgWrapper}>
              <img
                src={heroImage}
                alt="NEMESIS Y2K Streetwear Campaign"
                className={styles.campaignImg}
              />
            </div>
          </div>

          {/* Column 5: NEMESIS + Subtext */}
          <div className={styles.brandBox}>
            <span className={styles.brandMark}>NEMESIS</span>
          </div>

          <div className={styles.subtextBox}>
            <p className={styles.subtext}>
              streetwear
              <br />
              for a new
              <br />
              generation
            </p>
          </div>

          {/* Column 6: RAW (top) & ICON (bottom) */}
          <div className={styles.rawBox}>
            <span className={styles.editorialLabel}>RAW</span>
          </div>

          <div className={styles.iconBox}>
            <span className={styles.editorialLabel}>Y2K</span>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL GRID SECTION ── */}
      <section className={styles.editorialSection}>
        {/* Y2K Ticker / Banner */}
        <div className={styles.tickerBanner}>
          <div className={styles.tickerTrack}>
            <span>DROP 001 LIVE // WORLDWIDE SHIPPING // Y2K CYBER AESTHETIC // HEAVYWEIGHT HARDWARE // NOT MADE TO FIT IN //</span>
            <span>DROP 001 LIVE // WORLDWIDE SHIPPING // Y2K CYBER AESTHETIC // HEAVYWEIGHT HARDWARE // NOT MADE TO FIT IN //</span>
          </div>
        </div>

        {/* Editorial Content Grid */}
        <div className={styles.editorialGrid}>
          {/* Block 1: Lead Editorial Banner */}
          <div className={`${styles.editorialCard} ${styles.cardLarge}`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>COLLECTION 001</span>
              <span className={styles.cardStatus}><Sparkles size={14} /> LIVE NOW</span>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>ARCHITECTS OF ANARCHY</h2>
              <p className={styles.cardDescription}>
                Heavyweight 450GSM french terry, raw-edge distressing, and custom distressed hardware. Engineered for an uncompromising generation.
              </p>
              <Link to="/shop" className={styles.editorialLink}>
                EXPLORE COLLECTION <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* Block 2: Limited Drop Radar */}
          <div className={styles.editorialCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>RELEASE RADAR</span>
              <span className={styles.badgeAlert}><ShieldAlert size={14} /> 87% CLAIMED</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.statsNumber}>01/05</div>
              <h3 className={styles.cardSubheading}>REBELLION HOODIE</h3>
              <p className={styles.cardDescription}>
                Strictly limited run of 300 numbered pieces worldwide. No restocks once sold out.
              </p>
              <Link to="/shop" className={styles.textLink}>
                Check Availability →
              </Link>
            </div>
          </div>

          {/* Block 3: Philosophy / Manifesto */}
          <div className={styles.editorialCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>MANIFESTO</span>
              <span className={styles.cardIndex}>003</span>
            </div>
            <div className={styles.cardBody}>
              <blockquote className={styles.quoteText}>
                "WE DON'T DESIGN FOR MASS CULTURE. WE CRAFT ARMOR FOR THE DIGITALLY DISILLUSIONED."
              </blockquote>
              <span className={styles.quoteAuthor}>— NEMESIS DESIGN LAB</span>
            </div>
          </div>

          {/* Block 4: Category Quick-Pills */}
          <div className={`${styles.editorialCard} ${styles.cardWide}`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>SHOP BY SILHOUETTE</span>
              <span className={styles.cardIndex}>004</span>
            </div>
            <div className={styles.silhouetteGrid}>
              <Link to="/shop?category=mens-shirts" className={styles.silhouettePill}>
                <span className={styles.pillLabel}>OUTERWEAR & SHIRTS</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/shop?category=womens-dresses" className={styles.silhouettePill}>
                <span className={styles.pillLabel}>OVERSIZED & DRESSES</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/shop?category=sunglasses" className={styles.silhouettePill}>
                <span className={styles.pillLabel}>CYBER EYEWEAR & ACCS</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
