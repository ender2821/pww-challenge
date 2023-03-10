'use client';

import Image from 'next/image'

import Header from './Header';
import Footer from './Footer';
import Hero from '../components/Hero';
import CardCTA from '../components/CardCTA';
import Services from '../components/Services';
import LinkList from '../components/LinkList';

import styles from './page.module.scss'

import UpArrowIcon from '../public/up-arrow-icon.svg'

import { navData, ctaData, servicesData, updatesData, eventsData, footerData } from '../fakeData';

export default function Home() {
  // Here I move each section of the website into it's own component. From my experience these components have a good chance of being reused in some form or fashion on other pages, Thus writing reusable components is key here.
  // I am adding fake data to the components from the page level as props where most likely API calls would be made. 
  return (
  <>
    <Header data={navData}/>
    <main className={styles.main}>
      <Hero />
      <CardCTA data={ctaData}/>
      <div className={styles.content}>
        <Services data={servicesData}/>
        <div className={styles.twoColumn}>
          <LinkList type={'updates'} title={'Recent Updates'} data={updatesData}/>
          <LinkList type={'events'} title={'Calendar of Events'} data={eventsData}/>
        </div>
        <div className={styles.topButtonContain}>
          <button className={styles.topButton}onClick={() => window.scrollTo(0,0)}>Back to top<span><UpArrowIcon/></span></button>
        </div>
      </div>
    </main>
    <Footer data={footerData} />
  </>
  )
}
