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

import { useContext, useEffect } from "react";
import { appContext } from "@/context/store";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'hero_section', 'search_section', 'help_section', 'why_safemedigo', 'treatments_section', 'most_popular', 'patient_stories', 'safety_standards_section', 'why_turky_section', 'contact_details', 'sec_navbar'])),
    }
  }
}

export default function Home(props) {
  const { lang, setLang } = useContext(appContext)
  useEffect(() => {
    setLang(props._nextI18Next.initialLocale)
  }, [])

  const { t } = useTranslation();



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
      </Head>

      {/* Home Page Sections  */}

      <Hero />
      <Help />
      <h1>
        {t('common:get_started')}
      </h1>
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
