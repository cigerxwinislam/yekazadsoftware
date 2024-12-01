// Bismillahirahmanirahim

"use client"

import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>Yek</span>
          <span className={styles.mongodb}>Azad</span>
          <span>Software</span>

          <span>Center</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="/malper"
              type="secondary"
              className={styles.button}
            >
              Discover
            </ButtonLink>
          </Container>
        </Container>
        <p className={styles.subtitle}>
        </p>

      Slav li Şex Ehmed ê Xanî :

"Nînin li me fikrû zikrek

 Nakin bi zebanî hemd û şukrek"
      </div>
    </Wrapper>   
  );
};

export default Hero;
