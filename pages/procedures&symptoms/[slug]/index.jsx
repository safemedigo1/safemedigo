import Carousel, { consts } from 'react-elastic-carousel';
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import styles from './index.module.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { PageHeader, SecNavbar } from '@/components';
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { ContactDetails } from '@/components/Home';
import { ThreeDots } from 'react-loader-spinner'
import Image from 'next/image';
import InnerPageNavbar from '@/components/Navbar/InnerPageNavbar';
import Head from 'next/head';
import BeforeAfterProcedures from '@/components/BeforeAfterProcedures'
import { AppContext } from '@/components/AppContext';
import Compare from '@/components/Compare';

const TreatmentName = ({ dataTreatment, dataBeforeAfter, dataSteps, dataTreatmentProcedures, dataTreatmentsQA, dataAboutProcedures, dataProcedures, dataDoctorCompare }) => {
  const [expanded, setExpanded] = useState(false);
  const [isLoadingQA, setIsLoadingQA] = useState(false);

  const [QACount, setQACount] = useState()
  const { t } = useTranslation();
  const router = useRouter();

  const context = useContext(AppContext);
  const { isDoctorPageActive, compareStep } = context;


  const handleChange = (panel, id) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  const [breakPointsSteps] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 1, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2, itemsToScroll: 1, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 2, itemsToScroll: 1, },
    { width: 1000, pagination: false, itemsToShow: 4, itemsToScroll: 1, },

  ])

  const [breakPointsOperation] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.5, },
    { width: 400, pagination: true, itemsToShow: 3, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 4, itemsToScroll: 1, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 4, itemsToScroll: 1 },
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






  const [visibleQA, setVisibleQA] = useState();

  useEffect(() => {
    setVisibleQA(dataTreatmentsQA?.slice(0, 6))
    setQACount(dataTreatmentsQA?.length)
  }, [])

  const handleLoadMoreQA = () => {
    setIsLoadingQA(true);
    // Calculate the index range for the next batch of treatments
    const startIndex = visibleQA.length;
    const endIndex = startIndex + 6;

    // Get the next batch of treatments from the full treatments array
    const nextTreatments = dataTreatmentsHealthCase?.treatments?.slice(startIndex, endIndex);

    // Add the next treatments to the visible treatments array
    setVisibleQA(prevTreatments => [...prevTreatments, ...nextTreatments]);

    setIsLoadingQA(false);
  };






  // Styling

  const paragrahp3 =
  {
    fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)'
    ,
    display: 'flex',
    alignItems: 'center',
    'span': { backgroundColor: '#ffffff', color: '#004747', marginRight: '16px', width: '31px', borderRadius: '50%', height: '31px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }
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



  function createMarkupPreOperationOverview() {
    return { __html: decodeURI(dataAboutProcedures?.preOperationOverview) };
  }

  function createMarkupDuringOperationOverview() {
    return { __html: decodeURI(dataAboutProcedures?.duringOperationOverview) };
  }

  function createMarkupAfterOperationOverview() {
    return { __html: decodeURI(dataAboutProcedures?.afterOperationOverview) };
  }

  function createMarkupGetTreatmentStepOne() {
    return { __html: decodeURI(dataProcedures?.getTreatmentStepOne) };
  }

  function createMarkupGetTreatmentStepTwo() {
    return { __html: decodeURI(dataProcedures?.getTreatmentStepTwo) };
  }

  function createMarkupGetTreatmentStepThree() {
    return { __html: decodeURI(dataProcedures?.getTreatmentStepThree) };
  }
  function createMarkupGetQA(q) {
    return { __html: decodeURI(q) };
  }

  function createMarkupDescreption() {
    return { __html: decodeURI(dataTreatment?.description) };
  }





  const style = {
    marginTop: '10px',
    '&:before': {
      display: 'none',
    }
  };
  const accordionDetailsStyle = {
    maxHeight: '50vh', overflowX: 'auto',

    "&::-webkit-scrollbar ": {
      height: "7px !important"
    },

    "&::-webkit-scrollbar-thumb": {

      display: "block !important",
      width: '5px !important'
    }
  };

  const accordionSummaryMainStyle = {
    '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC', color: '#000000'
  }

  const accordionSummarySecStyle = {
    backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px'
  }

  const expandMoreIconMainStyle = {
    color: ' #000000', width: '30px', height: "30px"
  }

  const expandMoreIconSecStyle = {
    color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px',
  }

  const typographyStyle = {
    fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)'
  }

  const benifitsOverview = dataTreatment?.benifitsOverview?.split('@')
  const sideEffectsOverview = dataTreatment?.sideEffectsOverview?.split('@')
  const candidateOverview = dataTreatment?.candidateOverview?.split('@')

  const hospitalizationOverview = dataTreatment?.hospitalizationOverview?.split('@')
  const hospitalizationPeriodOverview = dataTreatment?.hospitalizationPeriodOverview?.split('@')
  return (
    <>
      <Head>
        <title>{dataTreatment?.treatmentName}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <script async defer src="//www.instagram.com/embed.js"></script>
      </Head>
      <SecNavbar treatmentName={dataTreatment?.treatmentName} />

      {compareStep !== 2 &&
        <PageHeader treatment={dataTreatment} />
      }
      {
        compareStep !== 2 &&
        <InnerPageNavbar dataTreatment={dataTreatment} QACount={QACount} />

      }

      {isDoctorPageActive === true ?
        <>
          <article id={'overview'} className={styles.overview} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
            <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
              <div className={styles.details_container}>
                <article className={styles.details}>
                  <div className={styles.title}>
                    <Typography variant='h3'>
                      {dataTreatment?.title}
                    </Typography>
                  </div>

                  <div
                    id={"apply"}
                    className="ck-content"
                    dangerouslySetInnerHTML={createMarkupDescreption()}
                  />

                  <div className={styles.menu_container}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                      sx={style}
                      disableGutters elevation={0}
                      square={false}
                    >
                      <AccordionSummary
                        sx={expanded !== 'panel1' ? accordionSummaryMainStyle
                          : accordionSummarySecStyle
                        }
                        expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ?
                          expandMoreIconMainStyle
                          : expandMoreIconSecStyle} />}
                        aria-controls="panel1d-content" id="panel1d-header">
                        <Typography sx={typographyStyle}>
                          {t('proceduresSymptoms_single:benefits')}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails
                        sx={accordionDetailsStyle}
                      >

                        <ul>

                          {benifitsOverview.map((item, index) => (
                            <li key={index}>
                              {item.includes(':') ? (
                                <>
                                  <strong>{item.substring(0, item.indexOf(':'))}</strong>:{' '}
                                  {item.substring(item.indexOf(':') + 1).trim()}
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          ))}

                        </ul>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                      sx={style}
                      disableGutters elevation={0}
                      square={false}
                    >
                      <AccordionSummary

                        sx={expanded !== 'panel2' ? accordionSummaryMainStyle
                          : accordionSummarySecStyle
                        }
                        expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ?
                          expandMoreIconMainStyle
                          : expandMoreIconSecStyle} />}
                        aria-controls="panel2d-content" id="panel2d-header">
                        <Typography sx={typographyStyle}>
                          {t('proceduresSymptoms_single:Side_Effects')}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails
                        sx={accordionDetailsStyle}
                      >
                        <ul>

                          {sideEffectsOverview.map((item, index) => (
                            <li key={index}>
                              {item.includes(':') ? (
                                <>
                                  <strong>{item.substring(0, item.indexOf(':'))}</strong>:{' '}
                                  {item.substring(item.indexOf(':') + 1).trim()}
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          ))}
                        </ul>
                      </AccordionDetails>
                    </Accordion>





                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                      sx={style}
                      disableGutters elevation={0}
                      square={false}
                    >
                      <AccordionSummary

                        sx={expanded !== 'panel3' ? accordionSummaryMainStyle
                          : accordionSummarySecStyle
                        }
                        expandIcon={<ExpandMoreIcon sx={expanded !== 'panel3' ?
                          expandMoreIconMainStyle
                          : expandMoreIconSecStyle} />}
                        aria-controls="panel3d-content" id="panel3d-header">
                        <Typography sx={typographyStyle}>
                          {t('proceduresSymptoms_single:Candidate')}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails
                        sx={accordionDetailsStyle}
                      >
                        <ul>

                          {candidateOverview.map((item, index) => (
                            <li key={index}>
                              {item.includes(':') ? (
                                <>
                                  <strong>{item.substring(0, item.indexOf(':'))}</strong>:{' '}
                                  {item.substring(item.indexOf(':') + 1).trim()}
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          ))}
                        </ul>



                      </AccordionDetails>
                    </Accordion>


                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                      sx={style}
                      disableGutters elevation={0}
                      square={false}
                    >
                      <AccordionSummary

                        sx={expanded !== 'panel4' ? accordionSummaryMainStyle
                          : accordionSummarySecStyle
                        }
                        expandIcon={<ExpandMoreIcon sx={expanded !== 'panel4' ?
                          expandMoreIconMainStyle
                          : expandMoreIconSecStyle} />}
                        aria-controls="panel4d-content" id="panel4d-header">
                        <Typography sx={typographyStyle}>
                          {t('proceduresSymptoms_single:Hospitalization')}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails
                        sx={accordionDetailsStyle}
                      >
                        <ul>


                          {hospitalizationOverview.map((item, index) => (
                            <li key={index}>
                              {item.includes(':') ? (
                                <>
                                  <strong>{item.substring(0, item.indexOf(':'))}</strong>:{' '}
                                  {item.substring(item.indexOf(':') + 1).trim()}
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          ))}
                        </ul>

                      </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel455'} onChange={handleChange('panel455')}
                      sx={style}
                      disableGutters elevation={0}
                      square={false}
                    >
                      <AccordionSummary

                        sx={expanded !== 'panel455' ? accordionSummaryMainStyle
                          : accordionSummarySecStyle
                        }
                        expandIcon={<ExpandMoreIcon sx={expanded !== 'panel455' ?
                          expandMoreIconMainStyle
                          : expandMoreIconSecStyle} />}
                        aria-controls="panel455d-content" id="panel455d-header">
                        <Typography sx={typographyStyle}>
                          {t('proceduresSymptoms_single:Hospitalization_Duration')}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails
                        sx={accordionDetailsStyle}
                      >
                        <ul>


                          {hospitalizationPeriodOverview.map((item, index) => (
                            <li key={index}>
                              {item.includes(':') ? (
                                <>
                                  <strong>{item.substring(0, item.indexOf(':'))}</strong>:{' '}
                                  {item.substring(item.indexOf(':') + 1).trim()}
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          ))}
                        </ul>

                      </AccordionDetails>
                    </Accordion>



                  </div>
                </article>

                <article className={styles.quick_details}>
                  <div className={styles.title}>
                    <Typography variant='h3'>{t("proceduresSymptoms_single:quick_details_title")}</Typography>
                  </div>

                  <div className={styles.details_container}>
                    <div className={styles.boxes_container} style={{
                      flexWrap: 'wrap',
                      display: 'flex',
                      flexDirection: 'column-reverse',
                      marginRight: '16px',
                    }}>
                      {dataTreatment?.operationDuration !== "" &&
                        <div className={styles.box}>
                          <div className={styles.title}>
                            <Typography variant='h6'>{t("proceduresSymptoms_single:operation_duration")}:</Typography>
                          </div>

                          <>
                            <List sx={{
                              listStyleType: 'disc',
                              padding: '0px',
                              '& .MuiListItem-root': {
                                listStylePosition: 'inside',
                                padding: '0px',
                                cursor: 'pointer'
                              },
                            }}>


                              <ListItem>
                                <Typography
                                >

                                  {
                                    dataTreatment?.operationDuration?.split(' ').filter(word => /^[a-zA-Z]+$/.test(word)).length >= 4 ? dataTreatment?.operationDuration
                                      :
                                      <>
                                        {dataTreatment?.operationDuration}
                                      </>
                                  }
                                </Typography>


                              </ListItem>
                            </List>
                          </>
                        </div>
                      }

                      {dataTreatment?.anesthesia !== "" &&
                        <div className={styles.box} >
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
                            <ListItem>
                              <Typography
                              >
                                {


                                  dataTreatment?.anesthesia?.split(' ').filter(word => /^[a-zA-Z]+$/.test(word)).length >= 4 ?

                                    dataTreatment?.anesthesia
                                    :
                                    <>
                                      {dataTreatment?.anesthesia}
                                    </>
                                }
                              </Typography>
                            </ListItem>

                          </List>

                        </div>
                      }

                      {dataTreatment?.startCost !== "" &&
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
                            <ListItem>
                              <Typography

                              >
                                {
                                  dataTreatment?.startCost?.split(' ').filter(word => /^[a-zA-Z]+$/.test(word)).length >= 3 ?


                                    `$${dataTreatment?.startCost}`
                                    :
                                    <>
                                      ${dataTreatment?.startCost}
                                    </>
                                }
                              </Typography>

                            </ListItem>
                          </List>
                        </div>
                      }
                    </div>


                    <div className={styles.boxes_container} >
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
                          <ListItem>
                            <Typography >
                              {
                                dataTreatment?.successRate?.split(' ').filter(word => /^[a-zA-Z]+$/.test(word)).length >= 4 ?





                                  `%${dataTreatment?.successRate}`

                                  :
                                  <>
                                    %{dataTreatment?.successRate}
                                  </>
                              }
                            </Typography>

                          </ListItem>
                        </List>

                      </div>

                      {dataTreatment?.resultDuration !== "" &&
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
                            <ListItem>
                              <Typography>
                                {
                                  dataTreatment?.resultDuration?.split(' ').filter(word => /^[a-zA-Z]+$/.test(word)).length >= 4 ?


                                    dataTreatment?.resultDuration
                                    :
                                    <>
                                      {dataTreatment?.resultDuration}
                                    </>
                                }
                              </Typography>
                            </ListItem>
                          </List>

                        </div>
                      }
                      {dataTreatment?.procedureType !== "" &&
                        <div className={styles.box} style={{ order: '-1' }}>
                          <div className={styles.title}>
                            <Typography variant='h6'>{t("proceduresSymptoms_single:procedure_type")}:</Typography>
                          </div>


                          <List sx={{
                            listStyleType: 'disc',
                            padding: '0px',
                            width: '70%',

                            '& .MuiListItem-root': {

                              listStylePosition: 'inside',
                              padding: '0px',
                              cursor: 'pointer'
                            },
                          }}>
                            <ListItem>
                              <Typography
                              >
                                {
                                  dataTreatment?.procedureType?.split(' ').filter(word => /^[a-zA-Z]+$/.test(word)).length >= 1 ?

                                    dataTreatment?.procedureType
                                    :
                                    <>
                                      {dataTreatment?.procedureType}
                                    </>
                                }
                              </Typography>

                            </ListItem>
                          </List>


                        </div>
                      }
                    </div>

                  </div>
                </article>
              </div>


              <div className={styles.menu_container_mobile}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                  sx={style}
                  disableGutters elevation={0}
                  square={false}
                >
                  <AccordionSummary
                    sx={expanded !== 'panel1' ? accordionSummaryMainStyle
                      : accordionSummarySecStyle
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ?
                      expandMoreIconMainStyle
                      : expandMoreIconSecStyle} />}
                    aria-controls="panel1d-content" id="panel1d-header">
                    <Typography sx={typographyStyle}>
                      {t('proceduresSymptoms_single:benefits')}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={accordionDetailsStyle}
                  >
                    <ul>
                      {benifitsOverview.map((item, index) => (
                        <li key={index}>
                          {item.includes(':') ? (
                            <>
                              <strong>{item.substring(0, item.indexOf(':'))}</strong>:{' '}
                              {item.substring(item.indexOf(':') + 1).trim()}
                            </>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>

                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                  sx={style}
                  disableGutters elevation={0}
                  square={false}
                >
                  <AccordionSummary

                    sx={expanded !== 'panel2' ? accordionSummaryMainStyle
                      : accordionSummarySecStyle
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ?
                      expandMoreIconMainStyle
                      : expandMoreIconSecStyle} />}
                    aria-controls="panel2d-content" id="panel2d-header">
                    <Typography sx={typographyStyle}>
                      {t('proceduresSymptoms_single:Side_Effects')}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={accordionDetailsStyle}
                  >

                    <ul>
                      {sideEffectsOverview.map((item, index) => (
                        <li key={index}>
                          {item.includes(':') ? (
                            <>
                              <strong>{item.substring(0, item.indexOf(':'))}</strong>:{' '}
                              {item.substring(item.indexOf(':') + 1).trim()}
                            </>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                  sx={style}
                  disableGutters elevation={0}
                  square={false}
                >
                  <AccordionSummary

                    sx={expanded !== 'panel3' ? accordionSummaryMainStyle
                      : accordionSummarySecStyle
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded !== 'panel3' ?
                      expandMoreIconMainStyle
                      : expandMoreIconSecStyle} />}
                    aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={typographyStyle}>
                      {t('proceduresSymptoms_single:Candidate')}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={accordionDetailsStyle}
                  >
                    <ul>

                      {candidateOverview.map((item, index) => (
                        <li key={index}>
                          {item.includes(':') ? (
                            <>
                              <strong>{item.substring(0, item.indexOf(':'))}</strong>:{' '}
                              {item.substring(item.indexOf(':') + 1).trim()}
                            </>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>

                  </AccordionDetails>
                </Accordion>


                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                  sx={style}
                  disableGutters elevation={0}
                  square={false}
                >
                  <AccordionSummary

                    sx={expanded !== 'panel4' ? accordionSummaryMainStyle
                      : accordionSummarySecStyle
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded !== 'panel4' ?
                      expandMoreIconMainStyle
                      : expandMoreIconSecStyle} />}
                    aria-controls="panel4d-content" id="panel4d-header">
                    <Typography sx={typographyStyle}>
                      {t('proceduresSymptoms_single:Hospitalization')}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={accordionDetailsStyle}
                  >
                    <ul>

                      {hospitalizationOverview.map((item, index) => (
                        <li key={index}>
                          {item.includes(':') ? (
                            <>
                              <strong>{item.substring(0, item.indexOf(':'))}</strong>:{' '}
                              {item.substring(item.indexOf(':') + 1).trim()}
                            </>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>

                  </AccordionDetails>
                </Accordion>


                <Accordion expanded={expanded === 'panel455'} onChange={handleChange('panel455')}
                  sx={style}
                  disableGutters elevation={0}
                  square={false}
                >
                  <AccordionSummary

                    sx={expanded !== 'panel455' ? accordionSummaryMainStyle
                      : accordionSummarySecStyle
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded !== 'panel455' ?
                      expandMoreIconMainStyle
                      : expandMoreIconSecStyle} />}
                    aria-controls="panel455d-content" id="panel455d-header">
                    <Typography sx={typographyStyle}>
                      {t('proceduresSymptoms_single:Hospitalization_Duration')}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={accordionDetailsStyle}
                  >
                    <ul>



                      {hospitalizationPeriodOverview.map((item, index) => (
                        <li key={index}>
                          {item.includes(':') ? (
                            <>
                              <strong>{item.substring(0, item.indexOf(':'))}</strong>:{' '}
                              {item.substring(item.indexOf(':') + 1).trim()}
                            </>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>

                  </AccordionDetails>
                </Accordion>
              </div>

            </Container >
          </article>

          {
            dataBeforeAfter?.length !== 0 &&
            <BeforeAfterProcedures dataBeforeAfter={dataBeforeAfter} />

          }

          {
            dataSteps?.length !== 0 &&
            <section id={styles.steps} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
              <Container className={`${router.locale === 'ar' ? 'mycontainer_ar' : 'mycontainer'} `} sx={{ maxWidth: "1239px" }} maxWidth={false}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>
                    {t('proceduresSymptoms_single:surgery_steps')}

                  </Typography>
                </div>

                <div
                  className={styles.slider_container}>
                  <Carousel
                    breakPoints={breakPointsOperation}
                    renderArrow={myArrow}

                    isRTL={router.locale === 'ar' ? true : false}
                  >

                    {dataSteps?.map((stepCard, index) => (
                      <>
                        <div className={styles.counter_container} key={index + 1}>
                          <div className={styles.steps_container} >
                            <div className={styles.step}>
                              <span>{index + 1}</span>
                            </div>
                          </div>
                        </div>

                        <div className={styles.box} key={index}>
                          <div className={styles.box_title}>
                            <Typography variant="h6"> {stepCard.stepDescription}</Typography>
                          </div>
                          <div className={styles.img_container}>
                            <Image width={230} height={281} src={stepCard.stepImage} alt="" />
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
            <section id={styles.what_you_need} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
              <div className={styles.title}>
                {router.locale === 'ar' ?
                  <Typography variant='h3'>
                    التحضير لإجراء {dataTreatment.treatmentName}: ماذا تتوقع قبل الإجراء وأثنائها وبعدها
                  </Typography>
                  :
                  <Typography variant='h3'>
                    {dataTreatment.treatmentName}: {t('proceduresSymptoms_single:before_after')}
                  </Typography>
                }
              </div>
              <div className={styles.menu_container}>


                <Accordion disableGutters={false} elevation={0}
                  square={false} sx={style}
                  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                  <AccordionSummary

                    sx={expanded !== 'panel5' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                      : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', minHeight: '55px !important' }
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded !== 'panel5' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                      1 - {t('proceduresSymptoms_single:preoperation')}

                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ background: '#F4F9F8', overflowX: 'auto', maxHeight: '50vh', }}>
                    <div
                      id={"apply"}
                      className={` ck-content ${styles.content}`}
                      dangerouslySetInnerHTML={createMarkupPreOperationOverview()}
                    />
                  </AccordionDetails>
                </Accordion>

                <Accordion disableGutters={false} elevation={0}
                  square={false} sx={style}

                  expanded={expanded === 'panel77'} onChange={handleChange('panel77')}

                >
                  <AccordionSummary

                    sx={expanded !== 'panel77' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                      : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', minHeight: '55px !important' }
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded !== 'panel77' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', minHeight: '55px !important' }} />}

                  >
                    <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                      2 - {t('proceduresSymptoms_single:during_operation')}
                    </Typography>
                  </AccordionSummary>


                  <AccordionDetails sx={{
                    background: '#F4F9F8', maxHeight: '50vh', overflowX: 'auto',
                  }}>

                    <div
                      id={"apply"}
                      className="ck-content"

                      dangerouslySetInnerHTML={createMarkupDuringOperationOverview()} />
                  </AccordionDetails>

                </Accordion>

                <Accordion disableGutters={false} elevation={0}
                  square={false} sx={style}

                  onChange={handleChange('panel6')}
                  expanded={expanded === 'panel6'}
                >
                  <AccordionSummary

                    sx={expanded !== 'panel6' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                      : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', minHeight: '55px !important' }
                    }
                    expandIcon={<ExpandMoreIcon sx={expanded !== 'panel6' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                  >
                    <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                      3 - {t('proceduresSymptoms_single:after_operation')}

                    </Typography>
                  </AccordionSummary>


                  <AccordionDetails sx={{
                    background: '#F4F9F8', maxHeight: '50vh', overflowX: 'auto',
                  }}>
                    <div
                      id={"apply"}
                      className="ck-content"
                      dangerouslySetInnerHTML={createMarkupAfterOperationOverview()} />
                  </AccordionDetails>

                </Accordion>

              </div>
            </section>
          </Container >


          {(dataTreatment?.videoLink == null || (typeof dataTreatment?.videoLink === "string" && dataTreatment?.videoLink.trim().length === 0) === false &&

            <article id={styles.video} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
              <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
                <div className={styles.video_container}>

                  <div className={styles.title}>
                    <Typography variant='h3'>
                      {router.locale === 'ar' ?
                        <>
                          إجراء {dataTreatment.treatmentName} بالفيديو: دليل شامل يشرح كل ما يجب على المرضى معرفته
                        </>
                        :
                        <>
                          {dataTreatment.treatmentName} {t('proceduresSymptoms_single:all_in_video')}
                        </>
                      }

                    </Typography>
                  </div>
                  <div className={styles.video_container}>
                    <iframe width="560" height="315" src={dataTreatment?.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </div>
              </Container >
            </article>
          )}



          {/* dataTreatment?.getTreatmentStepOne?.length !== 0 && dataTreatment?.getTreatmentStepTwo?.length !== 0 && dataTreatment?.getTreatmentStepThree?.length && */}

          {
            <section id={styles.howToGetTreatment} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
              <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
                <div className={styles.howToGetTreatment_container}>
                  <div className={styles.sec_title}>

                    {router.locale === 'ar' &&
                      <Typography variant='h3' sx={sxTitle2}>كيف يمكنني الحصول على إجراء {dataTreatment.treatmentName}  في تركيا بعيادات SafeMediGo؟
                      </Typography>
                    }
                    {router.locale === 'en' &&
                      <Typography variant='h3' sx={sxTitle2}>How Can I Get a {dataTreatment.treatmentName} Procedure in Turkey with SafeMediGo?</Typography>
                    }
                    {router.locale === 'tr' &&

                      <Typography variant='h3' sx={sxTitle2}>SafeMediGo ile Türkiye'de {dataTreatment.treatmentName} Prosedürüne nasıl ulaşabilirim?</Typography>
                    }


                  </div>

                  <div className={styles.menu_container}>
                    <Accordion disableGutters elevation={0}
                      square={false} sx={style}
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
                          {t("proceduresSymptoms_single:Send_Your_Pictures")}
                        </Typography>
                      </AccordionSummary>


                      <AccordionDetails sx={{
                        background: '#F4F9F8', maxHeight: '50vh', overflowX: 'auto',
                      }} >
                        <div className={styles.title}>
                          <Typography variant='h6'>
                            {router.locale === 'ar' &&
                              <Typography variant='h6' >
                                ما هي البيانات والمعلومات المطلوبة لإجراء {dataTreatment.treatmentName} في تركيا؟

                              </Typography>

                            }
                            {router.locale === 'en' &&
                              <Typography variant='h6'>
                                What Documents and Information are Required for a {dataTreatment.treatmentName}  Procedure in Turkey?

                              </Typography>

                            }
                            {router.locale === 'tr' &&
                              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                Türkiye'de Bir {dataTreatment.treatmentName}  İşlemi İçin Hangi Belge ve Bilgiler Gereklidir?

                              </Typography>}
                          </Typography>
                        </div>
                        <div
                          id={"apply"}
                          className="ck-content"
                          dangerouslySetInnerHTML={createMarkupGetTreatmentStepOne()} />
                      </AccordionDetails>

                    </Accordion>


                    <Accordion disableGutters elevation={0}
                      square={false} sx={style}

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

                          {t("proceduresSymptoms_single:Get_Your_Quote")}
                        </Typography>
                      </AccordionSummary>



                      <AccordionDetails sx={{ backgroundColor: '#F4F9F8', maxHeight: '50vh', overflowX: 'auto', }} >
                        <div className={styles.title}>
                          <Typography variant='h6'>
                            {router.locale === 'ar' &&
                              <Typography variant='h6'>
                                كيف يتم تحديد تكلفة إجراء {dataTreatment.treatmentName}  في عياداتSafeMediGo؟
                              </Typography>
                            }
                            {router.locale === 'en' &&
                              <Typography variant='h6'>
                                How is the Cost of a {dataTreatment.treatmentName}  Procedure Determined at SafeMediGo Clinics?
                              </Typography>
                            }
                            {router.locale === 'tr' &&
                              <Typography variant='h6'>
                                SafeMediGo Kliniklerinde {dataTreatment.treatmentName} Prosedürünün Maliyeti Nasıl Belirlenir?
                              </Typography>
                            }
                          </Typography>
                        </div>
                        <div
                          id={"apply"}
                          className="ck-content"
                          dangerouslySetInnerHTML={createMarkupGetTreatmentStepTwo()} />
                      </AccordionDetails>

                    </Accordion>


                    <Accordion disableGutters elevation={0}
                      square={false} sx={style}

                      expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>


                      <AccordionSummary
                        sx={expanded !== 'panel11' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF', }
                          : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                        }
                        expandIcon={<ExpandMoreIcon sx={expanded !== 'panel11' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                        aria-controls="panel11d-content" id="panel11d-header">
                        <Typography sx={paragrahp3}>

                          <span>
                            3
                          </span>

                          {t("proceduresSymptoms_single:Secure_Your_Appointment")}
                        </Typography>
                      </AccordionSummary>



                      <AccordionDetails sx={{ backgroundColor: '#F4F9F8', maxHeight: '50vh', overflowX: 'auto', }} >
                        <div className={styles.title}>
                          {router.locale === 'ar' &&
                            <>
                              <Typography variant='h6'>
                                كيف يمكنني تأكيد موعد إجراء {dataTreatment.treatmentName} الخاص بي مع Safemedigo؟

                              </Typography>
                              <Typography variant='h5'>
                                لضمان تأكيد حجزك لإجراء {dataTreatment.treatmentName} مع Safemedigo، من الضروري دفع رسوم حجز قدرها 145 دولارًا بدايةً. حيث توفر هذه الرسوم المزايا التالية:
                              </Typography>
                            </>

                          }


                          {router.locale === 'en' &&
                            <>
                              <Typography variant='h6'>
                                How Do I Confirm My {dataTreatment.treatmentName}  Procedure Appointment With Safemedigo?

                              </Typography>
                              <Typography variant='h5'>
                                To Secure Your Spot For The {dataTreatment.treatmentName}  Procedure With Safemedigo, A Booking Fee Of $145 Is Essential. This Fee Provides Multiple Benefits:

                              </Typography>

                            </>
                          }

                          {router.locale === 'tr' &&
                            <>
                              <Typography variant='h6'>
                                {dataTreatment.treatmentName} Prosedür Randevumu Safemedigo'dan Nasıl Onaylarım?
                              </Typography>
                              <Typography variant='h5'>
                                Safemedigo ile {dataTreatment.treatmentName}  Prosedüründe Yerinizi Güvenceye Almak İçin 145 Dolarlık Rezervasyon Ücreti Esastır. Bu Ücret Birçok Avantaj Sağlar:

                              </Typography>
                            </>
                          }



                        </div>

                        <div className={styles.desc}>
                          <Typography>
                            <span>{t('proceduresSymptoms_single:step3_Reservation')}:</span> {` `}
                            {t('proceduresSymptoms_single:step3_ReservationDesc')}
                          </Typography>
                        </div>

                        <div className={styles.desc}>
                          <Typography>
                            <span>{t('proceduresSymptoms_single:step3_Commitment')}:</span>{` `}
                            {t('proceduresSymptoms_single:step3_CommitmentDesc')}
                          </Typography>
                        </div>

                        <div className={styles.desc}>
                          <Typography>
                            <span>{t('proceduresSymptoms_single:step3_Cost_Stability')}:</span>{` `}
                            {t('proceduresSymptoms_single:step3_Cost_StabilityDesc')}
                          </Typography>
                        </div>
                        <div className={styles.desc}>
                          <Typography>
                            <span>{t('proceduresSymptoms_single:step3_Cost_Deduction')}:</span>{` `}
                            {t('proceduresSymptoms_single:step3_Cost_DeductionDesc')}
                          </Typography>
                        </div>
                        <div className={styles.desc}>
                          <Typography>
                            {t('proceduresSymptoms_single:note')}
                          </Typography>
                        </div>
                        <div
                          id={"apply"}
                          className="ck-content"
                          dangerouslySetInnerHTML={createMarkupGetTreatmentStepThree()} />
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </Container >
            </section >
          }

          {
            dataTreatmentProcedures?.length != 0 &&
            <section id={styles.treatment_desc} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
              <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>
                    {router.locale === 'en' && `What Is The Itinerary For ${dataTreatment?.treatmentName} Procedure`}
                    {router.locale === 'ar' && `ما هي مراحل رحلة إجراء ${dataTreatment?.treatmentName} `}
                    {router.locale === 'tr' && `${dataTreatment?.treatmentName} Prosedürünün Yolculuğu Nedir?`}

                  </Typography>
                </div>

                <div className={styles.slider_container}>
                  <Carousel
                    breakPoints={breakPointsSteps}
                    renderArrow={myArrow}
                    isRTL={router.locale === 'ar' ? true : false}

                  >
                    {dataTreatmentProcedures?.map((card, index) => (
                      <>
                        <div className={styles.steps_container} key={card?.treatmentID}>
                          <div className={styles.step}>
                            <span dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
                              {card.procedureCode}
                            </span>
                          </div>
                        </div>

                        <div className={styles.box} key={index + 2}>
                          <div className={styles.title}>
                            <Typography variant='h6'>
                              {card.procedureName}
                            </Typography>
                          </div>
                          <div className={styles.img_container}>
                            <Image width={257} height={169.25} src={card.procedureImage} alt={card.procedureName} />
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

          {dataTreatment.cost !== "" &&
            < section id={'price'} className={`${styles.price} ${dataTreatmentProcedures?.length === 0 ? styles.custom : ''}`} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
              <div className={styles.price_wrap}>
                <div className={styles.section_container}>
                  <div className={styles.title}>
                    <Typography variant='h3'>
                      {t('proceduresSymptoms_single:cost')} ${dataTreatment?.cost}
                    </Typography>
                  </div>

                  <div className={styles.btn_container}>
                    <div className={styles.qoute}>
                      <Link href='/quote'>
                        <button>
                          {t('proceduresSymptoms_single:Get_Your_Quote')}
                        </button>
                      </Link>
                    </div>

                    <div className={styles.discover}>
                      <Link href='/quote'>
                        {t("single_blog:load_more")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </section >
          }
          {
            QACount != 0 &&
            <section id="q&a" className={styles.QA} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
              <Container sx={{ maxWidth: "1239px", overflow: 'hidden' }} maxWidth={false}>
                <div className={styles.title}>
                  <Typography variant='h3'>{t('proceduresSymptoms_single:Guides_And_Common_Questions')}</Typography>
                </div>

                <div className={styles.menu_container}>
                  {visibleQA?.map((q, index) => (
                    <div className={styles.QA_menu} key={index}>
                      <Accordion disableGutters elevation={0}
                        square={false} sx={{
                          borderRadius: '0px !important',
                          marginBottom: '16px',
                          borderBottom: '1px solid #E4E4E4',
                          padding: '0px !important'
                          ,
                          '&:before': {
                            display: 'none',
                          }
                        }}
                        expanded={expanded === `panel1${index}2`} onChange={handleChange(`panel1${index}2`)}>


                        <AccordionSummary
                          sx={
                            {
                              height: '55px', backgroundColor: 'transparent', color: '#000000', marginTop: '10px', paddingLeft: '0 !important'
                              ,
                              marginBottom: '16px',
                              padding: '0px !important'

                            }
                          }
                          expandIcon={<ExpandMoreIcon sx={expanded !== `panel1${index}2` ? { color: '#000000', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                          aria-controls={`panel1${index}2-content `} id={`panel1${index}2-header`}>
                          <Typography sx={paragrahp3}>
                            {q.question}
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ padding: '0', paddingBottom: '16px' }}>
                          <div
                            id={"apply"}
                            className="ck-content"
                            dangerouslySetInnerHTML={createMarkupGetQA(q.answer)} />
                        </AccordionDetails>

                      </Accordion>

                    </div>
                  ))}
                </div>
                {
                  QACount !== visibleQA?.length &&
                  <div className={styles.btn_container}>
                    <button className={styles.load_more_btn} onClick={handleLoadMoreQA}>
                      {isLoadingQA !== true ?
                        t("single_blog:load_more")
                        :
                        <>

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

              </Container >

            </section >
          }


          <ContactDetails />


        </> : <>
          <Compare dataDoctorCompare={dataDoctorCompare} />
        </>
      }

    </>
  )
}

export default TreatmentName

export async function getStaticPaths() {
  const res = await fetch("https://api2.safemedigo.com/api/v1/Treatments/GetAllTreatmentSlugs")
  const data = await res.json()

  const customLocale = ['en', 'ar', 'tr'];
  const paths = data.flatMap((treatment, idx) => customLocale.map((locale) => ({
    params: { slug: treatment },
    locale: locale,
  })))

  return {
    paths, fallback: 'blocking',
  };
}

export async function getStaticProps({ locale, params }) {
  // Treatment Basic Info
  const resTreatment = await fetch("https://api2.safemedigo.com/api/v1/Treatments/GetBasicInfoBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "slug": params.slug,
    })
  })
  const dataTreatment = await resTreatment.json()

  //Treatment Procedures
  const resTreatmentProcedures = await fetch("https://api2.safemedigo.com/api/v1/Treatments/GetTreatmentProceduresBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "slug": params.slug,
    })
  })
  const dataTreatmentProcedures = await resTreatmentProcedures.json()




  // Before & After 
  const resBeforeAfter = await fetch("https://api2.safemedigo.com/api/v1/Treatments/GetImageAfterBeforeBySlug  ", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "slug": params.slug,
    })
  })
  const dataBeforeAfter = await resBeforeAfter.json()




  // Steps
  const resSteps = await fetch("https://api2.safemedigo.com/api/v1/Treatments/TreatmentStepsBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "slug": params.slug,
    })
  })
  const dataSteps = await resSteps.json()

  // AboutProcedures
  const resAboutProcedures = await fetch("https://api2.safemedigo.com/api/v1/Treatments/GetAllAboutProceduresBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "slug": params.slug,
    })
  })
  const dataAboutProcedures = await resAboutProcedures.json()



  // Procedures
  const resProcedures = await fetch("https://api2.safemedigo.com/api/v1/Treatments/GetProcedureBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "slug": params.slug,
    })
  })
  const dataProcedures = await resProcedures.json()



  // QA
  const resTreatmentsQA = await fetch("https://api2.safemedigo.com/api/v1/Treatments/TreatmentQuetionsSlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "slug": params.slug,
    })
  })
  const dataTreatmentsQA = await resTreatmentsQA.json()

  // Compare

  const resDoctorCompare = await fetch("https://api2.safemedigo.com/api/v1/Doctor/GetDoctorCompareByTreatmentSlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "treatmentSlug": params.slug,
      "lang": locale,
    })
  })
  const dataDoctorCompare = await resDoctorCompare.json()

  return {
    props: {
      locale,
      params,
      dataTreatment,
      dataTreatmentProcedures,
      dataBeforeAfter,
      dataSteps,
      dataAboutProcedures,
      dataTreatmentsQA,
      dataProcedures,
      dataDoctorCompare,
      ...(await serverSideTranslations(locale, ['navbar', 'single_blog', "contact_details", 'sec_navbar', 'blogs_page', 'page_header_comp', "most_popular", "proceduresSymptoms", "proceduresSymptoms_single", 'Footer'])),

    },
    revalidate: 10,
  }
}



