import Carousel, { consts } from 'react-elastic-carousel';
import React, { useState } from 'react'
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import styles from './index.module.scss';
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { PageHeader, SecNavbar } from '@/components';
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { ContactDetails } from '@/components/Home';

const TreatmentName = ({ dataTreatment }) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 2, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2, itemsToScroll: 1, transitionMs: 1000, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 2, itemsToScroll: 1, transitionMs: 1000 },
    { width: 1000, pagination: false, itemsToShow: 3, itemsToScroll: 1, transitionMs: 1000 },

  ])

  const [breakPointsSteps] = useState([
    // { width: 1, pagination: true, showArrows: false },
    // { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    // { width: 400, pagination: true, itemsToShow: 3, itemsToScroll: 1.1, showArrows: false },
    // { width: 800, pagination: false, itemsToShow: 4, itemsToScroll: 4, transitionMs: 1000 },

    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 2, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2, itemsToScroll: 1, transitionMs: 1000, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000 },
    { width: 1000, pagination: false, itemsToShow: 4, itemsToScroll: 1, transitionMs: 1000 },



  ])

  const [surgerySteps] = useState([
    // { width: 1, pagination: true, showArrows: false },
    // { width: 300, pagination: true, showArrows: false, itemsToShow: 1.5, itemsToScroll: 1 },
    // { width: 400, pagination: true, itemsToShow: 1.5, itemsToScroll: 1, showArrows: false },
    // { width: 800, pagination: false, itemsToShow: 5, itemsToScroll: 5 },



    { width: 1, pagination: true, showArrows: false, itemsToShow: 1.4 },
    { width: 400, pagination: true, itemsToShow: 2.4, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2.4, itemsToScroll: 1, transitionMs: 1000, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 3, itemsToScroll: 1, transitionMs: 1000 },
    { width: 1000, pagination: false, itemsToShow: 5, itemsToScroll: 1, transitionMs: 1000 },


  ])

  const [breakPointsOperation] = useState([
    { width: 1, pagination: false, showArrows: false, itemsToShow: 1.1 },
    { width: 300, pagination: false, showArrows: false, itemsToShow: 1.5, itemsToScroll: 1 },
    { width: 400, pagination: false, itemsToShow: 1.5, itemsToScroll: 1, showArrows: false },
    { width: 600, pagination: false, itemsToShow: 3, itemsToScroll: 3 },

  ])


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


  const { treatmentVideo, preparing, Hair_Transplant_after,
    Hair_Transplant_before, aircraft,
    plane,
    ReasonsRetention_Feature, patient_plan, author } = imgs;


  const beforeAfterCards = [
    { id: 1, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 2, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 3, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 4, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 5, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 6, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 7, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 8, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 9, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 10, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
  ]

  const stepsCards = [
    { id: 1, title: 'Preparing', img: preparing.src, },
    { id: 2, title: 'Preparing', img: preparing.src, },
    { id: 3, title: 'Preparing', img: preparing.src, },
    { id: 4, title: 'Preparing', img: preparing.src, },
    { id: 5, title: 'Preparing', img: preparing.src, },
    { id: 6, title: 'Preparing', img: preparing.src, },
    { id: 7, title: 'Preparing', img: preparing.src, },
    { id: 8, title: 'Preparing', img: preparing.src, },
    { id: 9, title: 'Preparing', img: preparing.src, },
    { id: 10, title: 'Preparing', img: preparing.src, },
  ]


  const OperationCards = [
    { id: 1, title: 'Preparing', img: preparing.src, },
    { id: 2, title: 'Preparing', img: preparing.src, },
    { id: 3, title: 'Preparing', img: preparing.src, },
    { id: 4, title: 'Preparing', img: preparing.src, },
    { id: 5, title: 'Preparing', img: preparing.src, },
    { id: 6, title: 'Preparing', img: preparing.src, },
    { id: 7, title: 'Preparing', img: preparing.src, },
    { id: 8, title: 'Preparing', img: preparing.src, },
    { id: 9, title: 'Preparing', img: preparing.src, },
    { id: 10, title: 'Preparing', img: preparing.src, },
  ]


  const treatment_desc = [
    { id: 1, title: 'Day 1 - Arrival', list: ['Pickup from İstanbul Airport (IST) or Sabiha Gökçen Airport (SAW)', 'Transfer to your hotel'], img: aircraft.src, },
    { id: 2, title: 'Day 2 - Treatment', list: ['Pre-op consultation and blood tests', 'Hair transplant surgery'], img: patient_plan.src, },
    { id: 3, title: 'Day 3 - Healing', list: ['Tour trip & Shopping or Rest in your hotel',], img: ReasonsRetention_Feature.src, },
    { id: 4, title: 'Day 4 - Post-Op Check And Departure', list: ['Post-op check-up and PRP treatment', 'Transfer to the airport for departure flight at 2 pm or after'], img: plane.src, },
    { id: 5, title: 'Day 1 - Arrival', list: ['Pickup from İstanbul Airport (IST) or Sabiha Gökçen Airport (SAW)', 'Transfer to your hotel'], img: aircraft.src, },
    { id: 6, title: 'Day 2 - Treatment', list: ['Pre-op consultation and blood tests', 'Hair transplant surgery'], img: patient_plan.src, },
    { id: 7, title: 'Day 3 - Healing', list: ['Tour trip & Shopping or Rest in your hotel',], img: ReasonsRetention_Feature.src, },
    { id: 8, title: 'Day 4 - Post-Op Check And Departure', list: ['Post-op check-up and PRP treatment', 'Transfer to the airport for departure flight at 2 pm or after'], img: plane.src, },
    { id: 9, title: 'Day 1 - Arrival', list: ['Pickup from İstanbul Airport (IST) or Sabiha Gökçen Airport (SAW)', 'Transfer to your hotel'], img: aircraft.src, },
    { id: 10, title: 'Day 2 - Treatment', list: ['Pre-op consultation and blood tests', 'Hair transplant surgery'], img: patient_plan.src, },
    { id: 11, title: 'Day 3 - Healing', list: ['Tour trip & Shopping or Rest in your hotel',], img: ReasonsRetention_Feature.src, },
    { id: 12, title: 'Day 4 - Post-Op Check And Departure', list: ['Post-op check-up and PRP treatment', 'Transfer to the airport for departure flight at 2 pm or after'], img: plane.src, },
  ]



  // Styling 
  const sxParagraph = {
    color: '#000000',
    fontSize: '16px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    marginTop: '16px'
  }
  const sxParagraph2 = {
    color: '#000000',
    fontSize: '16px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    marginTop: '16px'
  }
  const paragrahp3 =
  {
    fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)'
    ,
    display: 'flex',
    alignItems: 'center',
    'span': { backgroundColor: '#ffffff', color: '#004747', marginRight: '16px', width: '31px', borderRadius: '50%', height: '31px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }
  }


  const sxBox = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '27px',
    flexWrap: 'wrap',
    'img': {
      width: '101.84px',
      height: '132.4px'
    },
    '.card': {
      marginBottom: { xs: '10px', sm: '10px', md: '10px', lg: '0' }
    }
  }
  const sxTitle = {
    marginTop: '24px',
    marginBottom: '24px',
    color: '#000000',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Open Sans, sans-serif'
  }

  const sxTitle2 = {
    marginTop: '24px',
    marginBottom: '24px',
    marginLeft: '50px',
    color: '#000000',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Open Sans, sans-serif'
  }


  function createMarkup() {
    return { __html: dataTreatment.benifitsOverview };
  }

  function createMarkupSideEffects() {
    return { __html: dataTreatment.sideEffectsOverview };
  }

  function createMarkupCandidateOverview() {
    return { __html: dataTreatment.candidateOverview };
  }

  function createMarkupHospitalizationOverview() {
    return { __html: dataTreatment.hospitalizationOverview };
  }

  function createMarkupPreOperationOverview() {
    return { __html: dataTreatment.preOperationOverview };
  }

  function createMarkupDuringOperationOverview() {
    return { __html: dataTreatment.duringOperationOverview };
  }

  function createMarkupAfterOperationOverview() {
    return { __html: dataTreatment.afterOperationOverview };
  }

  function createMarkupGetTreatmentStepOne() {
    return { __html: dataTreatment.getTreatmentStepOne };
  }

  function createMarkupGetTreatmentStepTwo() {
    return { __html: dataTreatment.getTreatmentStepTwo };
  }

  function createMarkupGetTreatmentStepThree() {
    return { __html: dataTreatment.getTreatmentStepThree };
  }

  console.log(dataTreatment.afterOperationOverview)
  return (
    <>
      <SecNavbar treatmentName={dataTreatment.treatmentName} />

      <PageHeader treatment={dataTreatment} />

      <header id={styles.treatment} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <nav>
          <div className={styles.links_container}>
            <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
              <List sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', width: { sx: '100%', sm: '100%', md: '100%', lg: '700px' } }}>
                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='#overview'>
                    {t("proceduresSymptoms_single:nav_overview")}
                  </Link>
                </ListItem>

                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='#price'>
                    {t("proceduresSymptoms_single:nav_prices")}
                  </Link>
                </ListItem>

                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='#q&a'>
                    {t("proceduresSymptoms_single:nav_q&a")}
                  </Link>
                </ListItem>

                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='/'>
                    {t("proceduresSymptoms_single:nav_reviews")}
                  </Link>
                </ListItem>

                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='/'>
                    {t("proceduresSymptoms_single:nav_doctors")}
                  </Link>
                </ListItem>


              </List>
            </Container>

          </div>

        </nav >
      </header >

      <article id={'overview'} className={styles.overview} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.details_container}>
            <article className={styles.details}>
              <div className={styles.title}>
                <Typography variant='h3'>
                  {t("proceduresSymptoms_single:what_is")} {dataTreatment.treatmentName}?
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography>
                  {dataTreatment.description}
                </Typography>
              </div>

            </article>

            <article className={styles.quick_details}>
              <div className={styles.title}>
                <Typography variant='h3'>{t("proceduresSymptoms_single:quick_details_title")}</Typography>
              </div>

              <div className={styles.details_container}>
                <div className={styles.boxes_container}>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>{t("proceduresSymptoms_single:operation_duration")}:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {

                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>{dataTreatment.operationDuration} </ListItem>
                    </List>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>{t("proceduresSymptoms_single:type_of_anesthesia")}:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {

                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>{dataTreatment.anesthesia}</ListItem>
                    </List>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>{t("proceduresSymptoms_single:cost")}:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {

                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>${dataTreatment.startCost}</ListItem>
                    </List>
                  </div>
                </div>

                <div className={styles.boxes_container}>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>{t("proceduresSymptoms_single:success_rate")}:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {

                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>{dataTreatment.successRate}%</ListItem>
                    </List>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>{t("proceduresSymptoms_single:procedure_type")}:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {

                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem> {dataTreatment.procedureType}</ListItem>
                    </List>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>{t("proceduresSymptoms_single:duration_results")}:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {

                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>{dataTreatment.resultDuration}</ListItem>
                    </List>
                  </div>
                </div>

              </div>
            </article>
          </div>
          <div className={styles.menu_container}>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                sx={expanded !== 'panel1' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel1d-content" id="panel1d-header">
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  Benefits

                </Typography>
              </AccordionSummary>

              <AccordionDetails >

                <List sx={{
                  listStyleType: 'disc',
                  padding: '0px',

                  '& .MuiListItem-root': {

                    listStylePosition: 'inside',
                    padding: '0px',
                  },
                }}
                >
                  <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                  </ListItem  >



                </List>
              </AccordionDetails>

            </Accordion>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '9px',

                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary

                sx={expanded !== 'panel3' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC ', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel3' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel3d-content" id="panel3d-header"                >
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  Possible Side Effects

                </Typography>
              </AccordionSummary>

              <AccordionDetails >

                <List sx={{
                  listStyleType: 'disc',
                  padding: '0px',

                  '& .MuiListItem-root': {

                    listStylePosition: 'inside',
                    padding: '0px',
                  },
                }}
                >
                  <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                    <div dangerouslySetInnerHTML={createMarkupSideEffects()} />
                  </ListItem  >



                </List>
              </AccordionDetails>

            </Accordion>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '9px',
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary

                sx={expanded !== 'panel2' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC ', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel2d-content" id="panel2d-header"                >
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  What Makes A Good Candidate

                </Typography>
              </AccordionSummary>

              <AccordionDetails >

                <List sx={{
                  listStyleType: 'disc',
                  padding: '0px',

                  '& .MuiListItem-root': {

                    listStylePosition: 'inside',
                    padding: '0px',
                  },
                }}
                >
                  <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                    <div dangerouslySetInnerHTML={createMarkupCandidateOverview()} />
                  </ListItem  >

                </List>
              </AccordionDetails>

            </Accordion>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '9px',

                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary

                sx={expanded !== 'panel4' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC ', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel4' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel4d-content" id="panel4d-header"                >
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  Procedure Duration & Hospitalization

                </Typography>
              </AccordionSummary>

              <AccordionDetails >

                <List sx={{
                  listStyleType: 'disc',
                  padding: '0px',

                  '& .MuiListItem-root': {

                    listStylePosition: 'inside',
                    padding: '0px',
                  },
                }}
                >
                  <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                    <div dangerouslySetInnerHTML={createMarkupHospitalizationOverview()} />
                  </ListItem  >

                </List>
              </AccordionDetails>

            </Accordion>
          </div>
        </Container >
      </article>

      {dataTreatment?.treatmentImage.length !== 0 &&
        <section id={styles.before_after}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.title}>
              <Typography variant='h3'>
                Before & After Photos
              </Typography>
            </div>

            {/* <div className={styles.menu_container}>
            <div className={styles.menu}>
              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary

                  sx={expanded !== 'panel5' ? { height: '55px', borderRadius: '5px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', borderRadius: '5px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel5' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel5d-content" id="panel5d-header"                >
                  <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                    FUE Hair Transplant

                  </Typography>
                </AccordionSummary>

                <AccordionDetails >

                  <List sx={{
                    listStyleType: 'disc',
                    padding: '0px',

                    '& .MuiListItem-root': {

                      listStylePosition: 'inside',
                      padding: '0px',
                      cursor: 'pointer'
                    },
                  }}
                  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >


                  </List>
                </AccordionDetails>

              </Accordion>
            </div>

            <div className={styles.btn_container}>
              <Link href='/'>
                <button>View All Photo</button>
              </Link>
            </div>
          </div> */}

            <div className={styles.slider_container}>
              <Carousel
                breakPoints={breakPoints}
                itemsToScroll={1} renderArrow={myArrow} transitionMs={1000}
                isRTL={router.locale === 'ar' ? true : false}
              >

                {
                  dataTreatment?.treatmentImage.map((card, index) => (
                    <div className={styles.box} key={index}>
                      <div className={styles.imgs_container}>
                        <img src={card.imgBefore} alt={card.description} />
                        <img src={card.imgAfter} alt={card.description} />
                      </div>
                      <div className={styles.box_title}>
                        <Typography variant='h5'>Before</Typography>
                        <Typography variant='h5'>After</Typography>
                      </div>
                      <div className={styles.desc}>
                        <Typography>
                          {card.description}
                        </Typography>
                      </div>
                    </div>
                  ))}

              </Carousel>
            </div>
          </Container >

        </section>
      }


      {dataTreatment.treatmentStep.length !== 0 &&
        <section id={styles.steps}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.sec_title}>
              <Typography variant='h3'>
                Surgery Steps
              </Typography>
            </div>
          </Container >

          <Container className='mycontainer' sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div
              className={styles.slider_container}>
              <Carousel
                breakPoints={surgerySteps}
                renderArrow={myArrow}
                transitionMs={1000}
                isRTL={router.locale === 'ar' ? true : false}
              >

                {dataTreatment.treatmentStep.map((stepCard, index) => (
                  <>
                    <div className={styles.steps_container} key={index}>
                      <div className={styles.step}>
                        <span>{index + 1}</span>
                      </div>
                    </div>

                    <div className={styles.box} key={index}>
                      <div className={styles.box_title}>
                        <Typography variant="h6"> {stepCard.stepDescription}</Typography>
                      </div>
                      <div className={styles.img_container}>
                        <img src={stepCard.stepImage} alt="" />
                      </div>
                    </div>

                  </>
                ))}

              </Carousel>
            </div>
          </Container >

        </section>
      }

      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <section id={styles.what_you_need}>
          <div className={styles.title}>
            <Typography variant='h3'>What You Need To Know</Typography>
          </div>
          <div className={styles.menu_container}>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <AccordionSummary

                sx={expanded !== 'panel6' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                  : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel6' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel6d-content" id="panel6d-header"                >
                <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  1- Pre-Operation

                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ background: '#F4F9F8' }}>
                <div dangerouslySetInnerHTML={createMarkupPreOperationOverview()} />
              </AccordionDetails>
            </Accordion>


            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '8px',
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
              <AccordionSummary

                sx={expanded !== 'panel7' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                  : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel7' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel7d-content" id="panel7d-header"                >
                <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  2- During Operation
                </Typography>
              </AccordionSummary>


              <AccordionDetails sx={{ background: '#F4F9F8' }}>
                <div dangerouslySetInnerHTML={createMarkupDuringOperationOverview()} />
                {/* 

                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>




                <Carousel pagination={false} breakPoints={breakPointsOperation} showArrows={false}
                  transitionMs={1000}
                  isRTL={router.locale === 'ar' ? true : false}

                >
                  {OperationCards.map((operation, index) => (
                    <>
                      <div className={styles.box} key={index}>
                        <div className={styles.box_title}>
                          <Typography variant="h6">{operation.title}</Typography>
                        </div>
                        <div className={styles.img_container}>
                          <img src={operation.img} alt="" />
                        </div>
                      </div>

                    </>
                  ))}

                </Carousel>


                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>





                <Carousel pagination={false} breakPoints={breakPointsOperation} showArrows={false}
                  transitionMs={1000}
                  isRTL={router.locale === 'ar' ? true : false}

                >
                  {OperationCards.map((operation, index) => (
                    <>
                      <div className={styles.box} key={index}>
                        <div className={styles.box_title}>
                          <Typography variant="h6">{operation.title}</Typography>
                        </div>
                        <div className={styles.img_container}>
                          <img src={operation.img} alt="" />
                        </div>
                      </div>
                    </>
                  ))}

                </Carousel>


                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>

                <div className={styles.box}>
                  <div className={styles.box_title}>
                    <Typography variant="h6">Markings</Typography>
                  </div>
                  <div className={styles.img_container}>
                    <img src={preparing.src} alt="" />
                  </div>
                </div>


                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>


                <Carousel pagination={false} breakPoints={breakPointsOperation} showArrows={false}
                  transitionMs={1000}
                  isRTL={router.locale === 'ar' ? true : false}

                >
                  {OperationCards.map((operation, index) => (
                    <>

                      <div className={styles.box} key={index}>
                        <div className={styles.box_title}>
                          <Typography variant="h6">{operation.title}</Typography>
                        </div>
                        <div className={styles.img_container}>
                          <img src={operation.img} alt="" />
                        </div>
                      </div>

                    </>
                  ))}

                </Carousel> */}

              </AccordionDetails>

            </Accordion>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '8px',
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
              <AccordionSummary

                sx={expanded !== 'panel8' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                  : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel8' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel8d-content" id="panel8d-header"                >
                <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  3- After Operation

                </Typography>
              </AccordionSummary>

              <AccordionDetails >

                <div dangerouslySetInnerHTML={createMarkupAfterOperationOverview()} />



                {/* <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>

                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>


                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>
 */}
              </AccordionDetails>
            </Accordion>
          </div>
        </section>
      </Container >


      <article id={styles.video}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.video_container}>

            <div className={styles.title}>
              <Typography variant='h3'>
                All In Video
              </Typography>
            </div>
            <div className={styles.video_container}>
              <iframe width="560" height="315" src={dataTreatment.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>

        </Container >
      </article>

      <section id={styles.howToGetTreatment}>

        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.howToGetTreatment_container}>
            <div className={styles.sec_title}>
              <Typography variant='h3' sx={sxTitle2}>How Can I Get Treatment In Turkey?</Typography>
            </div>

            <div className={styles.menu_container}>
              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>


                <AccordionSummary
                  sx={expanded !== 'panel9' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel9' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel9d-content" id="panel9d-header">
                  <Typography sx={paragrahp3}>

                    <span>
                      1
                    </span>

                    Send Your Pictures

                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ background: '#F4F9F8' }}>
                  <div dangerouslySetInnerHTML={createMarkupGetTreatmentStepOne()} />
                </AccordionDetails>

              </Accordion>


              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  marginTop: '8px',

                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>


                <AccordionSummary
                  sx={expanded !== 'panel10' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel10' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel10d-content" id="panel10d-header">
                  <Typography sx={paragrahp3}>

                    <span>
                      2
                    </span>

                    Send Your Pictures

                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ background: '#F4F9F8' }}>
                  <div dangerouslySetInnerHTML={createMarkupGetTreatmentStepTwo()} />
                </AccordionDetails>

              </Accordion>


              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  marginTop: '8px',
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>


                <AccordionSummary
                  sx={expanded !== 'panel11' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel11' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel11d-content" id="panel11d-header">
                  <Typography sx={paragrahp3}>

                    <span>
                      3
                    </span>

                    Send Your Pictures

                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ background: '#F4F9F8' }}>
                  <div dangerouslySetInnerHTML={createMarkupGetTreatmentStepThree()} />
                </AccordionDetails>

              </Accordion>




            </div>

          </div>
        </Container >

      </section>

      {dataTreatment.treatmentProcedure != 0 &&
        <section id={styles.treatment_desc}>
          <Container className='mycontainer' sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.sec_title}>
              <Typography variant='h3'>
                Steps
              </Typography>
            </div>

            <div className={styles.slider_container}>
              <Carousel
                breakPoints={breakPointsSteps}
                renderArrow={myArrow}
                transitionMs={1000}
                isRTL={router.locale === 'ar' ? true : false}

              >
                {dataTreatment.treatmentProcedure.map((card, index) => (
                  <>
                    <div className={styles.steps_container} key={index}>
                      <div className={styles.step}>
                        <span>{index + 1}</span>
                      </div>
                    </div>

                    <div className={styles.box}>
                      <div className={styles.title}>
                        <Typography variant='h6'>
                          {card.procedureName}
                        </Typography>
                      </div>
                      <div className={styles.img_container}>
                        <img src={card.procedureImage} alt={card.procedureName} />
                      </div>

                      <div className={styles.list}>
                        <p>
                          {card.procedureDescription}
                        </p>
                      </div>
                    </div>

                  </>
                ))}

              </Carousel>
            </div>
          </Container >
        </section>
      }

      <section id={'price'} className={styles.price}>
        <div className={styles.section_container}>
          <div className={styles.title}>
            <Typography variant='h3'>
              Cost Starts From ${dataTreatment.cost}
            </Typography>
          </div>

          <div className={styles.btn_container}>
            <div className={styles.qoute}>
              <Link href='/qoute'>
                <button>
                  Get A Qoute
                </button>
              </Link>
            </div>

            <div className={styles.discover}>
              <Link href='/discover'>
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.QA}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.title}>
            <Typography variant='h3'>Guides And Common Questions</Typography>
          </div>

          <div className={styles.menu_container}>
            <Accordion disableGutters elevation={0}
              square={false} sx={{
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                sx={expanded !== 'panel1' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel1d-content" id="panel1d-header">
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  How To Prepare Myself For Hair Transplant Surgery?

                </Typography>
              </AccordionSummary>

              <AccordionDetails >

                <List sx={{
                  listStyleType: 'disc',
                  padding: '0px',

                  '& .MuiListItem-root': {

                    listStylePosition: 'inside',
                    padding: '0px',
                  },
                }}
                >
                  <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                  </ListItem  >



                </List>
              </AccordionDetails>

            </Accordion>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '9px',

                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary

                sx={expanded !== 'panel3' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC ', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel3' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel3d-content" id="panel3d-header"                >
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  How To Care After Hair Transplant?

                </Typography>
              </AccordionSummary>

              <AccordionDetails >

                <List sx={{
                  listStyleType: 'disc',
                  padding: '0px',

                  '& .MuiListItem-root': {

                    listStylePosition: 'inside',
                    padding: '0px',
                  },
                }}
                >
                  <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                    <div dangerouslySetInnerHTML={createMarkupSideEffects()} />
                  </ListItem  >



                </List>
              </AccordionDetails>

            </Accordion>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '9px',
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary

                sx={expanded !== 'panel2' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC ', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel2d-content" id="panel2d-header"                >
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  How Can I Get Best Results After Hair Transplant?
                </Typography>
              </AccordionSummary>

              <AccordionDetails >

                <List sx={{
                  listStyleType: 'disc',
                  padding: '0px',

                  '& .MuiListItem-root': {

                    listStylePosition: 'inside',
                    padding: '0px',
                  },
                }}
                >
                  <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                    <div dangerouslySetInnerHTML={createMarkupCandidateOverview()} />
                  </ListItem  >

                </List>
              </AccordionDetails>

            </Accordion>


          </div>


          <div className={styles.btn_container}>
            <button>
              Load More
            </button>
          </div>


        </Container >

      </section>

      <ContactDetails />
    </>
  )
}

export default TreatmentName


// export async function getServerSideProps(context) {
//   const res = await fetch("http://safemedigoapi-001-site1.gtempurl.com/api/v1/Blog/GetAllBlogWithPage", {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "lang": 'ar',
//       "blogCategoryId": 0,
//       "currentPage": 2
//     })
//   })
//   const data = await res.json()

//   return {
//     props: {
//       blogs: data
//     }
//   }
// }

export async function getServerSideProps({ locale, query }) {
  const resTreatment = await fetch("https://api.safemedigo.com/api/v1/Treatments/GetTreatmentBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "treatmentSlug": query.slug,

    })
  })
  const dataTreatment = await resTreatment.json()

  return {
    props: {
      dataTreatment,
      ...(await serverSideTranslations(locale, ['navbar', "contact_details", 'sec_navbar', 'blogs_page', 'page_header_comp', "most_popular", "proceduresSymptoms", "proceduresSymptoms_single"])),

    }
  }
}