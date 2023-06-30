import Head from "next/head";
import {
  ContactDetails,
  Help,
  Hero,
  MostPopular,
  PatientStories,
  Safty,
  TreatmentCategory,
  WhySafemedigo,
  WhyTurkey
} from '../components/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import axios from "axios";



export async function getStaticProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'navbar', 'hero_section', 'search_section', 'help_section', 'why_safemedigo', 'treatments_section', 'most_popular', 'patient_stories', 'safety_standards_section', 'why_turky_section', 'contact_details', 'sec_navbar', 'page_header_comp', 'safety_standards_page', 'blogs_page', 'proceduresSymptoms', 'Footer'])),
    }
  }
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Safemedigo</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          src="../../public/ckeditor-content-styles.css"
          type="text/css"
        />

      </Head>

      {/* Home Page Sections  */}



      <Hero />
      <Help />
      <WhySafemedigo />
      <TreatmentCategory />
      <MostPopular />
      <PatientStories />
      <Safty />
      <WhyTurkey />
      <ContactDetails />

    </>
  );
}

