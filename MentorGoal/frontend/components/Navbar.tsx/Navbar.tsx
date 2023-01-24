'use client';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.liste}>
        <div className={styles.Logo}>
          <img src="m.png" alt="" />
          <img src="g.png" alt="" />
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
        <div className={styles.icon}>
          {' '}
          <img src="Vector.png" alt="icone telephone" />
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
