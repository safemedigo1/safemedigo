import styles from '../../../procedures&symptoms/index.module.scss';
import { ContactDetails, MedicalDepartments, MostPopular } from '@/components/Home'
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { PageHeader, SecNavbar } from '@/components';

import { useTranslation } from "react-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';


const HealthCase = ({ dataPopularTreatments, dataMedicalDepartments, dataHealthCase, params }) => {

  const [expanded, setExpanded] = useState(false);

  const [dataTreatmentsHealthCase, setDataTreatmentsHealthCase] = useState(null);
  const [TreatmentCountPage, setTreatmentCountPage] = useState(1)
  const [TreatmentCount, setTreatmentCount] = useState(0)
  const [treatmentLoading, setTreatmentLoading] = useState(false)



  const { t } = useTranslation();



  const router = useRouter();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prev) => !prev);
  };


  const getAllTreatments = async () => {
    setTreatmentLoading(true)

    const resTreatmentsHealthCase = await
      axios.post("https://api2.safemedigo.com/api/v1/Treatments/GetTreatmentsHealthCaseSlug", {
        "lang": router.locale,
        "healthCaseSlug": params.healthcase,
        "currentPage": TreatmentCountPage,
        "departmentSlug": params.slug
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    setDataTreatmentsHealthCase(resTreatmentsHealthCase?.data)
    setTreatmentLoading(false)

    console.log(dataTreatmentsHealthCase, "HEEEE")


    if (TreatmentCountPage > 1) {
      setDataTreatmentsHealthCase(prev => [...prev, ...resTreatmentsHealthCase?.data?.treatments])

    }

    setTreatmentCount(resTreatmentsHealthCase?.data?.count)

  }



  const handleLoadMoreTreatments = () => {
    setTreatmentLoading(true)
    setTreatmentCountPage((prev) => prev + 1)
  }

  useEffect(() => {
    getAllTreatments()
  }, [TreatmentCountPage])



  const description = dataMedicalDepartments.find((e) => params.slug === e.slug)
  return (
    <>
      <SecNavbar />
      <PageHeader />

      <MostPopular dataPopularTreatments={dataPopularTreatments} />


      <MedicalDepartments dataMedicalDepartments={dataMedicalDepartments} params={params} />

      <section id={'proceduresSymptoms'} className={styles.proceduresSymptoms} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} className={styles.card_title}>
            <Typography variant='h3'>
              {t("page_header_comp:procedures&symptoms_title")}
            </Typography>
          </Box>

          <div className={styles.section_container}>

            <div className={styles.filter_section}>
              <div className={styles.card_title}>
                <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }} variant='h3'>
                  Procedures & Symptoms
                </Typography>
              </div>
              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  backgroundColor: 'var(--main-white-color)',
                  borderRadius: '5px',
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded} onChange={handleChange()}>
                <AccordionSummary
                  sx={expanded === false ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded === false ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel1d-content" id="panel1d-header"                >
                  <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                    {t("proceduresSymptoms:select")}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails >
                  <List sx={{
                    padding: '0px',
                    '& .MuiListItem-root': {
                      width: '100%',
                      listStylePosition: 'inside',
                      padding: '0px',
                      cursor: 'pointer',
                      padding: '2px',
                      marginTop: '10px',
                      transition: 'all 0.3s ease'
                    },
                    '& .MuiListItem-root:hover': {
                      background: 'rgba(0, 243, 187, 0.1)',
                      borderRadius: '5px',
                      paddingLeft: '20px',
                    }
                  }
                  }
                  >

                    <Link href={`/medicaldepartments/All-medical-procedures`} scroll={false}>
                      <ListItem variant='li' sx={{
                        cursor: 'pointer', color: 'var(--main-dark-color)', fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)'
                      }}>
                        All Health Cases
                      </ListItem>
                    </Link>

                    {dataHealthCase?.map((healthCase) => (
                      <Link href={`/medicaldepartments/${router.query.slug}/${healthCase.slug}`} scroll={false} key={healthCase.id}>
                        <ListItem variant='li' sx={{
                          cursor: 'pointer', color: 'var(--main-dark-color)', fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)'
                        }}>
                          {healthCase?.name}
                        </ListItem>
                      </Link>
                    ))}


                  </List>
                </AccordionDetails>
              </Accordion>

              <Box sx={{ paddingLeft: '5px', paddingRight: '5px', marginTop: '10px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                  {t("proceduresSymptoms:all_procedures")}
                </Typography>
                <Typography sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                  {dataTreatmentsHealthCase?.count}  {t("proceduresSymptoms:procedures")}
                </Typography>
                <Typography sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                  {t("proceduresSymptoms:medical_department_sort")}
                </Typography>
              </Box>

              {
                dataTreatmentsHealthCase?.count !== 0 &&
                dataTreatmentsHealthCase?.treatments?.map((treatmentCase, index) => (
                  <Accordion
                    key={index}
                    elevation={0}
                    expanded={true}
                    square={false} sx={{
                      backgroundColor: 'var(--main-white-color)',
                      '&:before': {
                        display: 'none',
                      },
                      marginTop: "20px"
                    }}
                  >

                    <AccordionSummary
                      sx={
                        {
                          backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                            backgroundColor: '#c5dfdc',
                            transform: 'scale: 1.2',
                            'svg': { marginLeft: '-10px' }
                          }
                          ,
                          'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                        }
                      }
                      expandIcon={<ExpandMoreIcon sx={{
                        color: '#000000', width: '30px', height: "30px", transform: `${router.locale === 'ar' ? "rotate(-90deg)" : "rotate(90deg)"}`, transition: 'all 0.3s ease-in-out',
                      }} />}
                    >
                      <Link href={`/procedures&symptoms/${treatmentCase.slug}`} style={{ width: '100%' }}>
                        {treatmentCase.treatmentName}
                        <Typography sx={{ fontSize: '14px' }}>{treatmentCase.successRate}% {t("proceduresSymptoms:success_rate")} • {t("proceduresSymptoms:cost")}: ${treatmentCase.cost}</Typography>
                      </Link>
                    </AccordionSummary>
                  </Accordion>
                ))}

              {dataTreatmentsHealthCase?.count > 6 &&
                <div className={styles.btn_container}>
                  <button onClick={handleLoadMoreTreatments}>
                    {treatmentLoading !== true ?
                      "Load More"
                      :
                      <>
                        Loading {` `}
                        <ThreeDots
                          height="25"
                          width="25"
                          radius="9"
                          color="#00ccb5"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClassName="load_more_btn"
                          visible={true}
                        />

                      </>

                    }


                  </button>
                </div>
              }
            </div >
            <div className={styles.info}>
              <div className={styles.info_inner}>
                <div className={styles.info_header}>
                  <div className={styles.img_container}>

                    <Image width={100} height={100} src={description.image} alt="" />
                  </div>

                  <div className={styles.title}>
                    <Typography variant='h3'>
                      {description.departmentName}
                    </Typography>

                  </div>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    {description.description}
                  </Typography>
                </div>

              </div>
            </div>
          </div >
        </Container >
      </section >


      <ContactDetails />

    </>)
}


export default HealthCase




export async function getStaticPaths() {
  const res = await fetch("https://api2.safemedigo.com/api/v1/HealthCases/GetAllHealthCasesSlugs")
  const data = await res.json()

  const customLocale = ['en', 'ar', 'tr'];

  const resDepartmentsSlug = await fetch("https://api2.safemedigo.com/api/v1/MedicalDepartment/GetAllMedicalDepartmentsByLang", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": 'en',
    })
  })
  const dataDepartmentSlig = await resDepartmentsSlug.json()


  const paths = data.flatMap((health, idx) => customLocale.flatMap((locale) => dataDepartmentSlig.map((department) => ({
    params: { slug: department.slug.toString(), healthcase: health, },
    locale: locale,
  }))))




  return {
    paths, fallback: 'blocking',
  };
}

export async function getStaticProps({ locale, params }) {
  const resPopularTreatments = await fetch("https://api2.safemedigo.com/api/v1/Treatments/GetPopularTreatmentsByLang", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale
    })
  })
  const dataMedicalDepartments = await resMedicalDepartments.json()

  const resHealthCase = await fetch("https://api2.safemedigo.com/api/v1/HealthCases/GetAllHealthCaseByDepartmentSlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "departmentSlug": params.slug

    })
  })
  const dataHealthCase = await resHealthCase.json()

  console.log(params.slug, 'ZZZZZ')
  const resTreatmentsHealthCase = await fetch("https://api2.safemedigo.com/api/v1/Treatments/GetTreatmentsHealthCaseSlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "healthCaseSlug": params.healthcase,
      "currentPage": 1,
      "departmentSlug": params.slug
    })
  })
  const dataTreatmentsHealthCase = await resTreatmentsHealthCase.json()

  return {
    props: {
      dataPopularTreatments,
      dataHealthCase,
      dataMedicalDepartments,
      dataTreatmentsHealthCase,
      params,
      ...(await serverSideTranslations(locale, ['navbar', "contact_details", 'sec_navbar', 'blogs_page', 'page_header_comp', "most_popular", "proceduresSymptoms", 'Footer'])),
      revalidate: 10,
    }
  }
}