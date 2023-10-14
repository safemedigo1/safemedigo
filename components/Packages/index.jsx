import React, { useState } from 'react'
import styles from './index.module.scss';
import { Accordion, AccordionDetails, AccordionSummary, Container, FormControl, MenuItem, Rating, Select, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useRouter } from 'next/router';
import { FaBed, FaCarSide } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';
import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const Packages = () => {
  const router = useRouter();
  // SX styles & Accrodion styles
  const [expanded, setExpanded] = useState('panel2');

  // Carousel
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false, itemsToShow: 1.1 },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 1.1, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2.1, itemsToScroll: 1, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 2.8, itemsToScroll: 1, },

  ])
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
  const accordionSummaryDefualt = { backgroundColor: '#004747', color: '#FFFFFF', margin: '0' };
  const accordionSummaryHover = {
    backgroundColor: '#C5DFDC', minHeight: "48px !important", color: '#004747', marginTop: '10px', marginBottom: '0px', '.Mui-expanded': { margin: '0' }
  };
  const expandMoreIconDefault = { color: '#FFFFFF', width: '30px', height: "30px" }
  const expandMoreIconHover = { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', };

  const accordionDetails = {
    background: '#FFFFFF', boxShadow: "0px 3px 10px #00000029", borderRadius: "0px 0px 5px 5px",

  }
  const style = {
    marginTop: '8px !important',
    marginBottom: '0 !important',
    '&:before': {
      display: 'none',
    }
  };

  const handleChangeAccordion = (panel, id) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  return (
    <>
      <section id='packages' className={styles.packages}>
        <div className={styles.sec_container}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>

            <div className={styles.sec_title}>
              <Typography variant='h3'>Packages</Typography>
            </div>

            <div className={styles.filter_sec}>
              <FormControl fullWidth  >
                {/* <InputLabel id="demo-simple-select-autowidth-label">{t('blogs_page:filter_title')}</InputLabel> */}
                <Select
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  IconComponent={ExpandMoreOutlinedIcon}
                  // onChange={handleFilterChanges}

                  MenuProps={{
                    anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
                    transformOrigin: { horizontal: 'right', vertical: 'top' },
                  }}
                  style={{
                    backgroundColor: "#004747",
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: 'Quicksand',
                    borderRadius: '0',
                  }}
                  sx={{
                    '.MuiSelect-icon': {
                      color: '#FFFFFF !important',
                      width: '25px',
                      height: '25px'
                    },
                  }}
                >

                  <MenuItem dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}  >
                    Medical Departments
                  </MenuItem>
                  <MenuItem dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}  >
                    Medical Departments
                  </MenuItem>
                  <MenuItem dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}  >
                    Medical Departments
                  </MenuItem>


                </Select>
              </FormControl>

            </div>
          </Container >

          <Container className="custom_container2" >
            <div className={styles.packages_sec}>
              <div className={styles.boxes_container}>
                <Carousel
                  breakPoints={breakPoints}
                  itemsToScroll={1}
                  renderArrow={myArrow}
                >
                  <div className={styles.box}>
                    <div className={styles.inner_box}>
                      <div className={styles.value_type}>
                        <Typography>Best Value Package</Typography>
                        <span>200 $</span>
                      </div>

                      <div className={styles.treatment_name}>
                        <Typography variant='h5'>Coronary artery bypass graft (Traditional/Open CABG)</Typography>
                      </div>

                      <div className={styles.info_boxes}>

                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>6</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.icon_container}>
                            <FaBed />
                          </div>

                        </div>
                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>10</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.rating}>
                            <Rating name="read-only" defaultValue={4} size="small" readOnly />
                          </div>

                        </div>
                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>6</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.icon_container}>
                            <FaCarSide />
                          </div>

                        </div>

                      </div>



                      <div className={styles.includeed}>
                        <Accordion disableGutters={false} elevation={0}
                          square={false} sx={style}
                          defaultExpanded
                          expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                          <AccordionSummary
                            sx={expanded !== 'panel2' ? accordionSummaryDefualt
                              : accordionSummaryHover
                            }
                            expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? expandMoreIconDefault : expandMoreIconHover} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography >
                              What Is Included?
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails sx={accordionDetails}>
                            <ul>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Initial Examination
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Anesthesia Examination
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Medical History Review
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Tests Related To The Surgery (Routine Bloodwork & Lab Studies, X-Ray, Etc.)
                              </li>
                            </ul>

                            <div className={styles.technique}>
                              <p>Additional Approach/Technique:</p>
                              <ul>
                                <li className={styles.active}>
                                  <div className={styles.icon_container}>
                                    <BsCheckLg />
                                  </div>

                                  Endoscopic Vein Harvesting
                                  <span>18000$</span>
                                </li>
                                <li>
                                  <div className={styles.icon_container}>
                                    <BsCheckLg />
                                  </div>
                                  Coronary Angiography
                                </li>
                              </ul>
                            </div>
                          </AccordionDetails>
                        </Accordion>

                        <Accordion disableGutters={false} elevation={0}
                          square={false} sx={style}
                          expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                          <AccordionSummary
                            sx={expanded !== 'panel2' ? accordionSummaryDefualt
                              : accordionSummaryHover
                            }
                            expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? expandMoreIconDefault : expandMoreIconHover} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography >
                              For Safemedigo Patients
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails sx={accordionDetails}>
                            <ul>
                              <li>

                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Priority Scheduling
                              </li>


                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Airport Transfers
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Hotel-Clinic Transfers
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                24/7 Support & Translation
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Flexible Refundable Cancellation
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Phone line with Internet
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Post-Procedure Medications, Recovery
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Plan and Report Translations
                              </li>
                            </ul>


                          </AccordionDetails>
                        </Accordion>
                      </div>


                    </div>
                    <div className={styles.btns_container}>
                      <div className={styles.book}>
                        <button>Book Package</button>
                      </div>

                      <div className={styles.details}>
                        <button>Package Details & Customization</button>
                      </div>
                    </div>

                  </div>
                  <div className={styles.box}>
                    <div className={styles.inner_box}>
                      <div className={styles.value_type}>
                        <Typography>Best Value Package</Typography>
                        <span>200 $</span>
                      </div>

                      <div className={styles.treatment_name}>
                        <Typography variant='h5'>Coronary artery bypass graft (Traditional/Open CABG)</Typography>
                      </div>

                      <div className={styles.info_boxes}>

                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>6</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.icon_container}>
                            <FaBed />
                          </div>

                        </div>
                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>10</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.rating}>
                            <Rating name="read-only" defaultValue={4} size="small" readOnly />
                          </div>

                        </div>
                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>6</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.icon_container}>
                            <FaCarSide />
                          </div>

                        </div>

                      </div>



                      <div className={styles.includeed}>
                        <Accordion disableGutters={false} elevation={0}
                          square={false} sx={style}
                          expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                          <AccordionSummary
                            sx={expanded !== 'panel2' ? accordionSummaryDefualt
                              : accordionSummaryHover
                            }
                            expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? expandMoreIconDefault : expandMoreIconHover} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography >
                              What Is Included?
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails sx={accordionDetails}>
                            <ul>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Initial Examination
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Anesthesia Examination
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Medical History Review
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Tests Related To The Surgery (Routine Bloodwork & Lab Studies, X-Ray, Etc.)
                              </li>
                            </ul>

                            <div className={styles.technique}>
                              <p>Additional Approach/Technique:</p>
                              <ul>
                                <li className={styles.active}>
                                  <div className={styles.icon_container}>
                                    <BsCheckLg />
                                  </div>

                                  Endoscopic Vein Harvesting
                                  <span>18000$</span>
                                </li>
                                <li>
                                  <div className={styles.icon_container}>
                                    <BsCheckLg />
                                  </div>
                                  Coronary Angiography
                                </li>
                              </ul>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion disableGutters={false} elevation={0}
                          square={false} sx={style}
                          expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                          <AccordionSummary
                            sx={expanded !== 'panel2' ? accordionSummaryDefualt
                              : accordionSummaryHover
                            }
                            expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? expandMoreIconDefault : expandMoreIconHover} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography >
                              For Safemedigo Patients
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails sx={accordionDetails}>
                            <ul>
                              <li>

                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Priority Scheduling
                              </li>


                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Airport Transfers
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Hotel-Clinic Transfers
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                24/7 Support & Translation
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Flexible Refundable Cancellation
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Phone line with Internet
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Post-Procedure Medications, Recovery
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Plan and Report Translations
                              </li>
                            </ul>


                          </AccordionDetails>
                        </Accordion>
                      </div>


                    </div>
                    <div className={styles.btns_container}>
                      <div className={styles.book}>
                        <button>Book Package</button>
                      </div>

                      <div className={styles.details}>
                        <button>Package Details & Customization</button>
                      </div>
                    </div>

                  </div>
                  <div className={styles.box}>
                    <div className={styles.inner_box}>
                      <div className={styles.value_type}>
                        <Typography>Best Value Package</Typography>
                        <span>200 $</span>
                      </div>

                      <div className={styles.treatment_name}>
                        <Typography variant='h5'>Coronary artery bypass graft (Traditional/Open CABG)</Typography>
                      </div>

                      <div className={styles.info_boxes}>

                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>6</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.icon_container}>
                            <FaBed />
                          </div>

                        </div>
                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>10</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.rating}>
                            <Rating name="read-only" defaultValue={4} size="small" readOnly />
                          </div>

                        </div>
                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>6</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.icon_container}>
                            <FaCarSide />
                          </div>

                        </div>

                      </div>



                      <div className={styles.includeed}>
                        <Accordion disableGutters={false} elevation={0}
                          square={false} sx={style}
                          expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                          <AccordionSummary
                            sx={expanded !== 'panel2' ? accordionSummaryDefualt
                              : accordionSummaryHover
                            }
                            expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? expandMoreIconDefault : expandMoreIconHover} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography >
                              What Is Included?
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails sx={accordionDetails}>
                            <ul>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Initial Examination
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Anesthesia Examination
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Medical History Review
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Tests Related To The Surgery (Routine Bloodwork & Lab Studies, X-Ray, Etc.)
                              </li>
                            </ul>

                            <div className={styles.technique}>
                              <p>Additional Approach/Technique:</p>
                              <ul>
                                <li className={styles.active}>
                                  <div className={styles.icon_container}>
                                    <BsCheckLg />
                                  </div>

                                  Endoscopic Vein Harvesting
                                  <span>18000$</span>
                                </li>
                                <li>
                                  <div className={styles.icon_container}>
                                    <BsCheckLg />
                                  </div>
                                  Coronary Angiography
                                </li>
                              </ul>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion disableGutters={false} elevation={0}
                          square={false} sx={style}
                          expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                          <AccordionSummary
                            sx={expanded !== 'panel2' ? accordionSummaryDefualt
                              : accordionSummaryHover
                            }
                            expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? expandMoreIconDefault : expandMoreIconHover} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography >
                              For Safemedigo Patients
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails sx={accordionDetails}>
                            <ul>
                              <li>

                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Priority Scheduling
                              </li>


                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Airport Transfers
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Hotel-Clinic Transfers
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                24/7 Support & Translation
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Flexible Refundable Cancellation
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Phone line with Internet
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Post-Procedure Medications, Recovery
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Plan and Report Translations
                              </li>
                            </ul>


                          </AccordionDetails>
                        </Accordion>
                      </div>


                    </div>
                    <div className={styles.btns_container}>
                      <div className={styles.book}>
                        <button>Book Package</button>
                      </div>

                      <div className={styles.details}>
                        <button>Package Details & Customization</button>
                      </div>
                    </div>

                  </div>
                  <div className={styles.box}>
                    <div className={styles.inner_box}>
                      <div className={styles.value_type}>
                        <Typography>Best Value Package</Typography>
                        <span>200 $</span>
                      </div>

                      <div className={styles.treatment_name}>
                        <Typography variant='h5'>Coronary artery bypass graft (Traditional/Open CABG)</Typography>
                      </div>

                      <div className={styles.info_boxes}>

                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>6</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.icon_container}>
                            <FaBed />
                          </div>

                        </div>
                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>10</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.rating}>
                            <Rating name="read-only" defaultValue={4} size="small" readOnly />
                          </div>

                        </div>
                        <div className={styles.info_box}>
                          <div className={styles.num}>
                            <span>6</span>
                          </div>

                          <div className={styles.title}>
                            <Typography variant='h6'>Hospital stay</Typography>
                          </div>

                          <div className={styles.icon_container}>
                            <FaCarSide />
                          </div>

                        </div>

                      </div>



                      <div className={styles.includeed}>
                        <Accordion disableGutters={false} elevation={0}
                          square={false} sx={style}
                          expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                          <AccordionSummary
                            sx={expanded !== 'panel2' ? accordionSummaryDefualt
                              : accordionSummaryHover
                            }
                            expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? expandMoreIconDefault : expandMoreIconHover} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography >
                              What Is Included?
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails sx={accordionDetails}>
                            <ul>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Initial Examination
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Anesthesia Examination
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Medical History Review
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Tests Related To The Surgery (Routine Bloodwork & Lab Studies, X-Ray, Etc.)
                              </li>
                            </ul>

                            <div className={styles.technique}>
                              <p>Additional Approach/Technique:</p>
                              <ul>
                                <li className={styles.active}>
                                  <div className={styles.icon_container}>
                                    <BsCheckLg />
                                  </div>

                                  Endoscopic Vein Harvesting
                                  <span>18000$</span>
                                </li>
                                <li>
                                  <div className={styles.icon_container}>
                                    <BsCheckLg />
                                  </div>
                                  Coronary Angiography
                                </li>
                              </ul>
                            </div>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion disableGutters={false} elevation={0}
                          square={false} sx={style}
                          expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                          <AccordionSummary
                            sx={expanded !== 'panel2' ? accordionSummaryDefualt
                              : accordionSummaryHover
                            }
                            expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? expandMoreIconDefault : expandMoreIconHover} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography >
                              For Safemedigo Patients
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails sx={accordionDetails}>
                            <ul>
                              <li>

                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Priority Scheduling
                              </li>


                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Airport Transfers
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Hotel-Clinic Transfers
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                24/7 Support & Translation
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Flexible Refundable Cancellation
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Phone line with Internet
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Post-Procedure Medications, Recovery
                              </li>
                              <li>
                                <div className={styles.icon_container}>
                                  <BsCheckLg />
                                </div>
                                Plan and Report Translations
                              </li>
                            </ul>


                          </AccordionDetails>
                        </Accordion>
                      </div>


                    </div>
                    <div className={styles.btns_container}>
                      <div className={styles.book}>
                        <button>Book Package</button>
                      </div>

                      <div className={styles.details}>
                        <button>Package Details & Customization</button>
                      </div>
                    </div>

                  </div>
                </Carousel>

              </div>
            </div>
          </Container >

        </div>
      </section>
    </>


  )
}

export default Packages