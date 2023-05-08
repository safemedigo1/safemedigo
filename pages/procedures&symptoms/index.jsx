import { MostPopular } from '@/components/Home'
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';
import imgs from "../../assets/constants/imgs";
import styles from './index.module.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageHeader, SecNavbar } from '@/components';

import { useTranslation } from "react-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const ProceduresSymptoms = ({ dataPopularTreatments, dataMedicalDepartments }) => {
  const [result, setResult] = useState(null)
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const router = useRouter();

  // console.log(dataMedicalDepartments)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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

  // Change Arrow in react-elastic-carousel Lirbrary
  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ?
      <div className='left_arrow'>
        <HiChevronLeft />
      </div>

      :
      <div className='right_arrow'>
        <  HiChevronRight />
      </div>

      ;
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


  return (
    <>
      <SecNavbar />
      <PageHeader />

      <MostPopular dataPopularTreatments={dataPopularTreatments} />

      <section id={styles.medical_department} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
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
                {dataMedicalDepartments.map((card, index) => (
                  <Box sx={{ display: 'flex', flexDirection: 'column', height: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xlg: '100%' }, justifyContent: 'center' }} key={index}>

                    <Link href={`medicaldepartments/${card.slug}`} onClick={() => handleResult(card)} className={styles.box} scroll={false}>

                      <div className={styles.img_container}>
                        <img className={styles.main_img} src={card.image} alt="" />
                        <img className={styles.sec_img} src={card.secondImage} alt="" />
                      </div>

                      <div className={styles.box_title}>
                        <Typography variant="h6">{card.departmentName}</Typography>
                      </div>

                    </Link>

                    {/* <Link href='#proceduresSymptoms' onClick={() => handleResult(card)} className={styles.box} key={index}>q

                      <div className={styles.img_container}>
                        <img className={styles.main_img} src={card.img} alt="" />
                        <img className={styles.sec_img} src={card.sec_img} alt="" />
                      </div>

                      <div className={styles.box_title}>
                        <Typography variant="h6">{card.title}</Typography>
                      </div>

                    </Link> */}

                    {/* <div className={styles.mobile_slider}>
                      <Link href='#proceduresSymptoms' onClick={() => handleResult(card)} className={styles.box} key={index}>

                        <div className={styles.img_container}>

                          {
                            result !== null &&
                              result.id === card.id ? <img className={styles.sec_img} src={card.sec_img} alt="" /> : <img className={styles.main_img} src={card.img} alt="" />
                          }

                        </div>

                        <div className={styles.box_title}>
                          <Typography variant="h6">{card.title}</Typography>
                        </div>

                      </Link >
                    </div>

                    <div className={styles.mobile_slider}>
                      <Link href='#proceduresSymptoms' onClick={() => handleResult(card)} className={styles.box} key={index}>

                        <div className={styles.img_container}>

                          {
                            result !== null &&
                              result.id === card.id ? <img className={styles.sec_img} src={card.sec_img} alt="" /> : <img className={styles.main_img} src={card.img} alt="" />

                          }

                        </div>

                        <div className={styles.box_title}>
                          <Typography variant="h6">{card.title}</Typography>
                        </div>

                      </Link>
                    </div> */}

                  </Box>
                ))}






              </Carousel>

            </div>
          </Container>
        </div >
      </section >

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

            <div className={styles.filter_section}>

              <div className={styles.card_title}>
                <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }} variant='h3'>
                  Procedures & Symptoms
                </Typography>
              </div>

              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary

                  sx={expanded !== 'panel1' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel1d-content" id="panel1d-header"                >
                  <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                    {t("proceduresSymptoms:select")}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails >


                  <Typography>Please Select Medical Department</Typography>
                </AccordionDetails>

              </Accordion>
            </div >
          </motion.div >
        </Container >


      </section >
    </>
  )
}

export default ProceduresSymptoms


export async function getServerSideProps({ locale }) {
  const resPopularTreatments = await fetch("https://api.safemedigo.com/api/v1/Treatments/GetPopularTreatmentsByLang", {
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


  const resMedicalDepartments = await fetch("https://api.safemedigo.com/api/v1/MedicalDepartment/GetAllMedicalDepartmentsByLang", {
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





  return {
    props: {
      dataPopularTreatments,
      dataMedicalDepartments,
      ...(await serverSideTranslations(locale, ['navbar', 'sec_navbar', 'blogs_page', 'page_header_comp', "most_popular", "proceduresSymptoms"])),
    }
  }
}

