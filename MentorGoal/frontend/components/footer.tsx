import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/** Container top */}
      <div className={styles.containerTop}>
        {/* Block logo */}
        <div className={styles.block__logo}>
          <div className={styles.avis}>
            {/* logo */}
            <div className={styles.avis__logo}>
              {/* initiales */}
              <div className={styles.avis__logo__initiales}>
                <Image
                  src={'/icon/VectorM.svg'}
                  alt={'Initiales M'}
                  width={500}
                  height={500}
                  className={styles.initialeM}
                />
                <Image
                  src={'/icon/VectorG.svg'}
                  alt={'Initiales G'}
                  width={500}
                  height={500}
                  className={styles.initialeG}
                />
              </div>
              <p>Permettre l'accès à l'emploi aux jeunes issus de tous horizons.</p>
            </div>
          </div>
          <ul className={styles.link__follow}>
            {/* Linkedin */}
            <Link href="#" rel="noreferrer" target="_blank" className={styles.linkedin}>
              <Image
                src={'/icon/VectorLinkedin.svg'}
                alt={'icon likedin'}
                width={500}
                height={500}
                className={styles.link__follow__icon}
              />
            </Link>
            {/* Youtube */}
            <Link href="#" rel="noreferrer" target="_blank" className={styles.youtube}>
              <Image
                src={'/icon/VectorYoutube.svg'}
                alt={'icon Youtube'}
                width={500}
                height={500}
                className={styles.link__follow__icon}
              />
            </Link>
            {/* Instagram */}
            <Link href="#" rel="noreferrer" target="_blank" className={styles.instagram}>
              <Image
                src={'/icon/VectorInstagram.svg'}
                alt={'icon Instagram'}
                width={500}
                height={500}
                className={styles.link__follow__icon}
              />
            </Link>
            {/* Twitter */}
            <Link href="#" rel="noreferrer" target="_blank" className={styles.twitter}>
              <Image
                src={'/icon/Vectortwitter.svg'}
                alt={'icon Twitter'}
                width={500}
                height={500}
                className={styles.link__follow__icon}
              />
            </Link>
            {/* TikTok */}
            <Link href="#" rel="noreferrer" target="_blank" className={styles.tiktok}>
              <Image
                src={'/icon/VectorTikTok.svg'}
                alt={'icon TikTok'}
                width={500}
                height={500}
                className={styles.link__follow__icon}
              />
            </Link>
          </ul>
        </div>
        {/* Block 1 footer */}
        <div className={styles.block__1footer}>
          <p>À propos</p>
          <ul className={styles.content}>
            <li className={styles.components9}>
              <a>Pourquoi Mentor Goal ?</a>
            </li>
            <li className={styles.components7}>
              <a>Notre ADN</a>
            </li>
            <p className={styles.équipe}>Notre équipe</p>
            <li className={styles.components8}>
              <a>Notre ADN</a>
            </li>
            <p className={styles.trustpilot}>Nos avis Trustpilot</p>
          </ul>
        </div>
        {/* Block 2 footer */}
        <div className={styles.block__2footer}>
          <p>Solutions</p>
          <ul className={styles.content}>
            <li className={styles.components9}>
              <Link href="#">Pourquoi Mentor Goal ?</Link>
            </li>
            <p className={styles.espace__étudiants}>Espace étudiants</p>
            <p className={styles.coaching}>Coaching</p>
            <div className={styles.textTag1}>
              <p>Espace entreprises</p>
              <div className={styles.frame__996}>
                <p>Soon</p>
              </div>
            </div>
            <div className={styles.textTag2}>
              <p>Extension OneClick</p>
              <div className={styles.frame__996}>
                <p>Soon</p>
              </div>
            </div>
          </ul>
        </div>
        {/* Block 3 footer */}
        <div className={styles.block__3footer}>
          <p>Contact</p>
          <ul className={styles.content}>
            <li className={styles.components9}>
              <a>Nous contacter</a>
            </li>
            <li className={styles.links}>
              <Link href="#">Réserver une démo</Link>
            </li>
            <li className={styles.components7}>
              <a>Nous rejoindre</a>
            </li>
            {/* <li className={styles.components8}>
              <a>Relations presse</a>
            </li> */}
          </ul>
        </div>
      </div>
      {/**  Frame 273 */}
      <div className={styles.frame__273}>
        <div className={styles.line1}></div>
        <div className={styles.container__bottom}>
          <Link className={styles.frame__links} href="/">
            Mentions légales et CGU
          </Link>
          <Link className={styles.frame__links1} href="/">
            RGPD
          </Link>
          <Link className={styles.frame__links2} href="/">
            Politique de confidentialité
          </Link>
          <Link className={styles.frame__links3} href="/">
            Cookies
          </Link>
          <Link className={styles.frame__links4} href="/">
            © Copyright 2022
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
