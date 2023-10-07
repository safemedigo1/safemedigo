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

export async function getStaticProps({ locale }) {
  const resPopularTreatments = await fetch("https://api2.safemedigo.com/api/v1/Treatments/GetPopularTreatmentsByLang", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',

    },
    body: JSON.stringify({
      "lang": locale
    })
  })
  const dataPopularTreatments = await resPopularTreatments.json()

  const resMedicalDepartments = await fetch("https://api2.safemedigo.com/api/v1/MedicalDepartment/GetAllMedicalDepartmentsByLang", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
    body: JSON.stringify({
      "lang": locale
    })
  })
  const dataMedicalDepartments = await resMedicalDepartments.json()

  // Blog Slug (WhyTurkey)
  const blogSlugRes = await fetch("https://api2.safemedigo.com/api/v1/Blog/GetBlogUiDataBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "slug": 'The-Comprehensive-Guide-to-Medical-Tourism-in-Turkey:-Why-Travel-for-Treatment',
      "lang": locale
    })
  })
  const blogSlugData = await blogSlugRes.json()

  const resMostPopularClinc = await fetch("https://api2.safemedigo.com/api/v1/Hospital/ListPopularHospitals", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
    body: JSON.stringify({
      "lang": locale
    })
  })
  const dataMostPopularClinc = await resMostPopularClinc.json();

  const resMostPopularDocs = await fetch("https://api2.safemedigo.com/api/v1/Doctor/ListPopularDoctors", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      "lang": locale
    })
  })
  const dataMostPopularDocs = await resMostPopularDocs.json()


  return {
    props: {
      dataPopularTreatments,
      dataMedicalDepartments,
      locale,
      blogSlugData,
      dataMostPopularClinc,
      dataMostPopularDocs,

      ...(await serverSideTranslations(locale, ['home', 'navbar', 'hero_section', 'search_section', 'help_section', 'why_safemedigo', 'treatments_section', 'most_popular', 'patient_stories', 'safety_standards_section', 'why_turky_section', 'contact_details', 'sec_navbar', 'page_header_comp', 'safety_standards_page', 'blogs_page', 'proceduresSymptoms', 'Footer'])),
    },
    revalidate: 10,
  }
}


export default function Home({ dataPopularTreatments,
  dataMedicalDepartments, blogSlugData, dataMostPopularClinc, dataMostPopularDocs }) {

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
      <TreatmentCategory dataMedicalDepartmentsHome={dataMedicalDepartments} />
      <MostPopular dataMostPopularDocsHome={dataMostPopularDocs} dataPopularTreatmentsHome={dataPopularTreatments} dataMostPopularClincHome={dataMostPopularClinc} />
      <PatientStories />
      <Safty />
      <WhyTurkey blogSlugData={blogSlugData} />
      <ContactDetails />

    </>
  );
}

