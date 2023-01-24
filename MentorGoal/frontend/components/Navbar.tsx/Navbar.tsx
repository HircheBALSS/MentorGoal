'use client';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={` text-white ${styles.Navbar}`}>
      <div className={styles.liste}>
        <div className={` flex flex-row ${styles.Logo}`}>
          <img src="/images/m.png" alt="" />
          <img src="/images/g.png" alt="" />
        </div>

        <ul className={styles.menu}>
          <li>
            {' '}
            <Link href="/emploi">Plateforme emploi</Link>
          </li>
          <li>
            {' '}
            <Link href="/Accompagnements">Accompagnement</Link>
          </li>
          <li>
            {' '}
            <Link href="/ADN">Notre ADN</Link>
          </li>
          <li>
            {' '}
            <Link href="/Offres">Nos offres</Link>
          </li>
        </ul>
      </div>

      <div className={styles.connect}>
        <div className={` flex flex-row ${styles.icon}`}>
          {' '}
          <img src="/images/Vector.png" alt="icone telephone" />
          01 84 80 09 40
        </div>
        <div className={styles.button}>
          {' '}
          <Link href="/connect"> Se connecter</Link>
        </div>
      </div>
    </nav>
  );
}
