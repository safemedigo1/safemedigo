import styles from '../../procedures&symptoms/index.module.scss';
import { ThreeDots } from 'react-loader-spinner'
import { ContactDetails, MedicalDepartments, MostPopular } from '@/components/Home'
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageHeader, SecNavbar } from '@/components';

import { useTranslation } from "react-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';

const medicaldepartments = ({ dataPopularTreatments, dataMedicalDepartments, dataHealthCase, params, locale }) => {
  const [result, setResult] = useState(null)
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

  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false, itemsToShow: 1.7, itemPosition: consts.START, itemsToScroll: 1 },
    { width: 400, pagination: true, showArrows: false, itemsToShow: 1.7, itemPosition: consts.START, itemsToScroll: 1 },
    { width: 600, pagination: true, showArrows: false, itemsToShow: 2.5, itemPosition: consts.START, itemsToScroll: 1 },
    { width: 800, pagination: true, showArrows: false, itemsToShow: 3, itemPosition: consts.START, itemsToScroll: 1 },
    { width: 1150, pagination: false, itemsToShow: 4.1, itemsToScroll: 4, },
    { width: 1450, pagination: false, itemsToShow: 4.1, itemsToScroll: 4, },
    { width: 1750, pagination: false, itemsToShow: 4.1, itemsToScroll: 4, },
  ])

  const { Dermatology, Dermatology_1, Knee, } = imgs;

  const cards = [
    { title: 'Gastroenterology & Hepatology', img: Knee.src, sec_img: Dermatology_1.src, id: 1 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 2 },
    { title: 'Hair Transplant', img: Dermatology.src, sec_img: Dermatology_1.src, id: 3 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 4 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 5 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 6 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 7 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 8 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 9 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 10 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 11 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 12 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 13 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 14 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 15 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 16 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 17 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 18 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 19 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 20 },
  ]

  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ?
      <div className='left_arrow'>
        <HiChevronLeft />
      </div>
      :
      <div className='right_arrow'>
        <  HiChevronRight />
      </div>

    return (
      <button className='main_btn' onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }

  const handleResult = (card) => {
    const filterResult = cards.find((item) => item.id === card.id)
    if (filterResult) {
      setResult(filterResult)
    }
  }

  const description = dataMedicalDepartments.find((e) => params.slug === e.slug)

  const getAllTreatments = async () => {
    setTreatmentLoading(true)

    const resTreatmentsHealthCase = await
      axios.post("https://api.safemedigo.com/api/v1/Treatments/GetTreatmentsHealthCaseSlug", {
        "lang": locale,
        "healthCaseSlug": "",
        "currentPage": TreatmentCountPage,
        "departmentSlug": ""
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    // setDataTreatmentsHealthCase(resTreatmentsHealthCase?.data?.treatments)
    setTreatmentLoading(false)

    if (TreatmentCountPage > 1) {
      setDataTreatmentsHealthCase(prev => [...prev, ...resTreatmentsHealthCase?.data?.treatments])

    } else {
      setDataTreatmentsHealthCase(resTreatmentsHealthCase?.data?.treatments)
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


  // // Calculate the midpoint index
  const midpointIndex = Math.floor(dataMedicalDepartments?.length / 2);

  // Split the original array into two dynamic arrays
  const firstHalfArray = dataMedicalDepartments?.slice(0, midpointIndex);
  const secondHalfArray = dataMedicalDepartments?.slice(midpointIndex);




  return (
    <>
      <SecNavbar />
      <PageHeader />
      <MostPopular dataPopularTreatments={dataPopularTreatments} />
      {/* <section id={styles.medical_department} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className={styles.section_container}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.sec_header}>
              <div className={styles.title}>
                <div className="header">
                  <Typography variant='h3'>{t("proceduresSymptoms:medical_department_title")}</Typography>
                  <Typography sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'none',
                      lg: 'block'
                    }
                  }} variant='h6'>{t("proceduresSymptoms:medical_department_sort")}</Typography>
                </div>

                <div className={styles.procedures_num}>
                  <Typography sx={{
                    display: {
                      xs: 'block',
                      sm: 'block',
                      md: 'block',
                      lg: 'none'
                    }
                  }} variant='h6'>{t("proceduresSymptoms:medical_department_sort")}</Typography>
                  <Typography>10.500 {t("proceduresSymptoms:procedures")}</Typography>
                </div>
              </div>
            </div>
          </Container>

          <Container className={`${router.locale === 'ar' ? 'mycontainer_ar' : 'mycontainer'}`} sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.slider_container}>
              <Carousel
                enableSwipe={true}
                breakPoints={breakPoints}
                transitionMs={1000}
                renderArrow={myArrow}
                isRTL={router.locale === 'ar' ? true : false}
              >
                {firstHalfArray.map((card, index) =>

                (
                  <Box sx={{ display: 'flex', flexDirection: 'column', height: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xlg: '100%' }, justifyContent: 'center' }} key={index} >
                    <Link href={`/medicaldepartments/${card.slug}`} onClick={() => handleResult(card)} className={`${styles.box}  
                    ${params.slug === `${card.slug}` && styles.active}`} scroll={false}>
                      <div className={styles.img_container}>
                        <Image width={77.12} height={77.12} className={styles.main_img} src={card.image} alt="" />
                        <Image width={77.12} height={77.12} className={styles.sec_img} src={card.secondImage} alt="" />

                      </div>

                      <div className={styles.box_title}>
                        <Typography variant="h6">{card.departmentName}</Typography>
                      </div>
                    </Link>


                    < Link href={`/medicaldepartments/${secondHalfArray[index].slug}`} onClick={() => handleResult(secondHalfArray[index])} className={`${styles.box}  
                    ${params.slug === `${secondHalfArray[index].slug}` && styles.active}`} scroll={false} >
                      <div className={styles.img_container}>
                        <Image width={77.12} height={77.12} className={styles.main_img} src={secondHalfArray[index].image} alt="" />
                        <Image width={77.12} height={77.12} className={styles.sec_img} src={secondHalfArray[index].secondImage} alt="" />
                      </div>
                      <div className={styles.box_title}>
                        <Typography variant="h6">{secondHalfArray[index].departmentName}</Typography>
                      </div>

                    </Link>
                  </Box>
                )
                )}


              </Carousel>

            </div>
          </Container>

        </div >
      </section > */}
      <MedicalDepartments dataMedicalDepartments={dataMedicalDepartments} params={params} />

      {console.log(params, "PARAMSZZ")}
      <section id={'proceduresSymptoms'} className={styles.proceduresSymptoms} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} className={styles.card_title}>
            <Typography variant='h3'>
              {t("page_header_comp:procedures&symptoms_title")}
            </Typography>
          </Box>

          <motion.div
            animate={{
              y: [-40, 0],
              opacity: 1
            }}
            transition={{ duration: 0.80, ease: "easeOut" }}

            className={styles.section_container}>

            {dataHealthCase.length !== 0 &&
              <div className={styles.filter_section}>
                <div className={styles.card_title}>
                  <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }} variant='h3'>
                    Procedures & Symptoms
                  </Typography>
                </div>

                <Accordion disableGutters elevation={0}
                  square={false} sx={{
                    backgroundColor: 'var(--main-white-color)',
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

                      <Link href={`/medicaldepartments/Obstetrics-and-gynecology`} scroll={false}>
                        <ListItem variant='li' sx={{
                          cursor: 'pointer', color: 'var(--main-dark-color)', fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)'
                        }}>
                          All Health Cases
                        </ListItem>
                      </Link>

                      {dataHealthCase.map((healthCase) => (
                        <Link href={`${router.asPath}/${healthCase.slug}`} scroll={false} key={healthCase.id} >
                          <ListItem variant='li' sx={{ cursor: 'pointer', color: 'var(--main-dark-color)', fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                            {healthCase.name}
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
                    {TreatmentCount}  {t("proceduresSymptoms:procedures")}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                    {t("proceduresSymptoms:medical_department_sort")}
                  </Typography>
                </Box>

                {
                  TreatmentCount !== 0 &&
                  dataTreatmentsHealthCase?.map((treatmentCase, index) => (
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

                {TreatmentCount !== dataTreatmentsHealthCase?.length &&
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
            }

            <div className={styles.info}>
              <div className={styles.info_inner}>

                <div className={styles.info_header}>
                  <div className={styles.img_container}>
                    <img src={description.image} alt="" />
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
          </motion.div >

        </Container >
      </section >

      <ContactDetails />

    </>
  )
}

export default medicaldepartments

export async function getStaticPaths() {
  const res = await fetch("https://api.safemedigo.com/api/v1/MedicalDepartment/GetAllMedicalDepartmentsByLang", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": 'en',
      "healthCaseSlug": "",
      "currentPage": 1,
      "departmentSlug": ""
    })
  })
  const data = await res.json()


  const customLocale = ['en', 'ar', 'tr'];
  const paths = data.flatMap((treatment, idx) => customLocale.map((locale) => ({
    params: { slug: treatment.slug.toString() },
    locale: locale,
  })))


  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const resPopularTreatments = await fetch("https://api.safemedigo.com/api/v1/Treatments/GetPopularTreatmentsByLang", {
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

  const resMedicalDepartments = await fetch("https://api.safemedigo.com/api/v1/MedicalDepartment/GetAllMedicalDepartmentsByLang", {
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

  const resHealthCase = await fetch("https://api.safemedigo.com/api/v1/HealthCases/GetAllHealthCaseByDepartmentSlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',

    },
    body: JSON.stringify({
      "lang": locale,
      "departmentSlug": params.slug

    })
  })
  const dataHealthCase = await resHealthCase.json()

  return {
    props: {
      dataPopularTreatments,
      dataHealthCase,
      dataMedicalDepartments,
      params,
      locale,
      ...(await serverSideTranslations(locale, ['navbar', 'sec_navbar', "contact_details", 'blogs_page', 'page_header_comp', "most_popular", "proceduresSymptoms"])),

    },
    revalidate: 10,
  }
}

