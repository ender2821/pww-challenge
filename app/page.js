import Image from 'next/image'

import Header from './Header';
import Footer from './Footer';
import Hero from '../components/Hero';
import CardCTA from '../components/CardCTA';
import Services from '../components/Services';
import LinkList from '../components/LinkList';

import styles from './page.module.scss'

import { navData, ctaData } from '../fakeData';

export default function Home() {
  // Here I move each section of the website into it's own component. From my experience these components have a good chance of being reused in some form or fashion on other pages, Thus writing reusable components is key here.

  return (
  <>
    <Header data={navData}/>
    <main className={styles.main}>
      <Hero />
      <CardCTA data={ctaData}/>
      <div className={styles.content}>
        <Services />
        <div className={styles.twoColumn}>
          <LinkList type={'updates'}/>
          <LinkList type={'calendar'}/>
        </div>
      </div>
    </main>
    <Footer />
  </>
  )
}
