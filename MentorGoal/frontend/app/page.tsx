import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.homepage}>
      {/* lastestPosts */}
      <div className={styles.header}>
        <div className={styles.topContent}>
          <h1>Le Bog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi. Lorem ipsum
            dolor sit amet conse. Libero laoreet at sed cursus ut mi.{' '}
          </p>
        </div>
        <div className={styles.botContent}></div>
      </div>
      <div className={styles.lastestPosts}>
        <div className={styles.cardsPostContainer}>cardsPostContainer</div>
        <div className={styles.slider}>Slider</div>
      </div>
      {/* debut allPosts */}
      {/* debut allPostsHeader */}
      <div className={styles.allPostsHeader}>
        <h2>Tous nos articles</h2>
        <div className={styles.trierPar}>
          <p>Trier par</p>
        </div>
      </div>
      {/* fin allPostsHeader */}
      {/* debut cardsContainer */}
      <div className={styles.cardsContainer}>
        cardsContainer
        <div className={styles.cards}>Cards</div>
      </div>
      {/* fin cardsContainer */}

      {/* fin allPosts */}
      {/* debut categories */}
      <div className={styles.catégories}>
        <h2>Les catégories</h2>
        <div className={styles.frame999}></div>
      </div>
      {/* fin categories */}
      {/* debut archivesSection */}
      <section className={styles.archivesSection}>
        {/* debut archives */}
        <div className={styles.archives}>
          <h2>Les archives</h2>
          <div className={styles.frame999}>Frame 999</div>
          <div className={styles.frame1000}>Frame 1000</div>
          <div className={styles.frame1001}>Frame 1001</div>
        </div>
        <button className={styles.Button}>
          <p>Voir plus</p>
        </button>
      </section>
      {/* fin archivesSection */}
      <div className={styles.rectangle__600} />
      <div className={styles.rectangle__372} />
      <div className={styles.particuels__ML} />
      <div className={styles.particules__svp} />
      <p className={styles.particules__333} />
    </main>
  );
}
