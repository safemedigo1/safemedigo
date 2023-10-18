import React, { useContext, useState } from 'react'
import styles from './index.module.scss'
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Container, FormControlLabel, FormGroup, Rating, Slider, Switch, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switcher from '../Switcher';
import Link from 'next/link';
import { FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';
import imgs from "../../assets/constants/imgs";
import { MdLocationOn } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { AppContext } from '@/components/AppContext';
import Slick from '@/components/Slick';
import { FaArrowLeft } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'


const Compare = (props) => {
  const context = useContext(AppContext);
  const { isDoctorPageActive, setIsDoctorPageActive, compareStep
    , setCompareStep } = context;


  const [priceValue, setPriceValue] = useState([0, 100]);
  const [compareArr, setCompareArr] = useState();

  const [minNum, setMinNum] = useState(0);
  const [maxNum, setMaxNum] = useState(1000);
  const minmin = 0;
  const maxmax = 1000;
  const [priceRangeValue, setPriceRangeValue] = useState([0, 1000]);

  const handlePriceRangeChange = (event, newValue) => {
    setMinNum(newValue[0]);
    setMaxNum(newValue[1]);
    setPriceRangeValue(newValue);
  };


  const marks = [
    {
      value: 25,
      label: '$25',
    },

    {
      value: 500,
      label: '$500',
    },
    {
      value: 1000,
      label: '$1k',
    },
    {
      value: 4000,
      label: '$4k',
    },
    {
      value: 6000,
      label: '$6k',
    },
    {
      value: 10000,
      label: '$10k+',
    },
    {
      value: 16000,
      label: '$10k+',
    },
  ];

  function valuetext(value) {
    return `${value} EGP`;
  }
  const { post3, } = imgs;

  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  const { t } = useTranslation()

  // Carousel
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false, itemsToShow: 1 },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 1.4, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2.4, itemsToScroll: 1, showArrows: false },
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


  // SX styles & Accrodion styles
  const [expanded, setExpanded] = useState(false);

  const accordionSummaryDefualt = { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' };
  const accordionSummaryHover = { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', };
  const expandMoreIconDefault = { color: '#FFFFFF', width: '30px', height: "30px" }
  const expandMoreIconHover = { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', };

  const accordionDetails = { background: '#F4F9F8', overflowX: 'auto', maxHeight: '50vh', }
  const style = {
    marginTop: '10px',
    '&:before': {
      display: 'none',
    }
  };

  const handleChangeAccordion = (panel, id) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const doctorsData = [
    { name: 'Dr Ahmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '10000' },
    { name: 'Dr John doe', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '5000' },
    { name: 'Dr Ibrahim Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '3000' },

  ]

  console.log(props, "PROPS")
  return (
    < >

      <section id='compare' className={styles.compare}>
        {compareStep === 1 &&
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.sec_container}>

              <div className={styles.filter_container}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>FIND THE RIGHT DOCTOR FOR YOU</Typography>
                </div>
                <div className={styles.filter_box}>
                  <div className={styles.title}>
                    <Typography variant='h6'>Show me</Typography>
                  </div>

                  <div className={styles.check_box}>
                    {/* <FormControlLabel
                    control={
                    } label="Accept Virtual Consultations" /> */}

                    <FormControlLabel control={<Checkbox sx={{
                      color: '#004747 !important',
                      marginTop: '8px',
                      marginBottom: '8px',
                      '.Mui-checked': {
                        color: '#004747 !important',
                      },

                      '.MuiIconButton-root': {
                        color: '#004747 !important',
                      },
                    }} />} label={t("most_popular:verified")} />


                    <FormControlLabel
                      control={<Checkbox sx={{
                        color: '#004747 !important',
                        marginTop: '8px',
                        marginBottom: '8px',
                        '.Mui-checked': {
                          color: '#004747 !important',
                        },

                        '.MuiIconButton-root': {
                          color: '#004747 !important',
                        },
                      }} />} label={t("most_popular:verified")} />



                    <FormControlLabel

                      control={<Checkbox sx={{
                        color: '#004747 !important',
                        marginTop: '8px',
                        marginBottom: '8px',
                        '.Mui-checked': {
                          color: '#004747 !important',
                        },

                        '.MuiIconButton-root': {
                          color: '#004747 !important',
                        },
                      }} />} label="Flexible Price" />

                  </div>


                  <div className={styles.price}>
                    <div className={styles.title}>
                      <Typography variant='h6'>Prices</Typography>
                    </div>
                    <div className={styles.price_num}>
                      <Typography>3000 $</Typography>
                    </div>

                    <div className={styles.price_range}>
                      <Slider
                        // aria-label="Always visible"
                        // onChange={handlePriceChange}
                        // defaultValue={80}
                        // getAriaLabel={() => 'Temperature range'}
                        // value={priceValue}
                        // onChange={handlePriceChange}
                        // valueLabelDisplay={"auto"}
                        // getAriaValueText={valuetext}
                        marks={marks}
                        // min={0}
                        // max={30000}


                        value={priceRangeValue}
                        onChange={handlePriceRangeChange}
                        valueLabelDisplay="auto"
                        min={minmin}
                        max={maxmax}

                      />

                    </div>
                  </div>


                  <div className={styles.treatment_fee}>
                    <div className={styles.check_box}>

                      <FormControlLabel

                        control={<Checkbox sx={{
                          color: '#004747 !important',
                          marginTop: '8px',
                          marginBottom: '8px',
                          '.Mui-checked': {
                            color: '#004747 !important',
                          },

                          '.MuiIconButton-root': {
                            color: '#004747 !important',
                          },
                        }} />} label="Treatment Price" />


                    </div>
                    <div className="switcher">
                      <Switcher />
                    </div>
                  </div>

                  <div className={styles.accordion_container}>
                    <Accordion disableGutters={false} elevation={0}
                      square={false} sx={style}
                      expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')}>
                      <AccordionSummary
                        sx={expanded !== 'panel1' ? accordionSummaryDefualt
                          : accordionSummaryHover
                        }
                        expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ? expandMoreIconDefault : expandMoreIconHover} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography >
                          Languages
                        </Typography>

                      </AccordionSummary>
                      <AccordionDetails sx={accordionDetails}>
                        languages
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
                          Languages
                        </Typography>

                      </AccordionSummary>
                      <AccordionDetails sx={accordionDetails}>
                        languages
                      </AccordionDetails>
                    </Accordion>



                  </div>


                  <div className={styles.reset_btn}>
                    <button>Reset All</button>
                  </div>

                </div>

              </div>



              <div className={styles.results_container}>
                <div className={styles.sec_title}>
                  <Typography variant='h3'>16 DOCTORS FOUND</Typography>
                </div>
                <div className={styles.btns_container}>
                  <div className={styles.btn}>
                    <button>highest Rating</button>
                  </div>
                  <div className={styles.btn}>
                    <button>lowest Rating</button>
                  </div>
                  <div className={styles.btn}>
                    <button>more exper</button>
                  </div>
                  <div className={styles.btn}>
                    <button>less exper</button>
                  </div>
                </div>

                <div className={styles.results_boxes_container}>

                  {doctorsData.map((doc, index) => (
                    <div className={styles.box} key={index}>
                      <div className={styles.img_container}>
                        <Image width={344} height={191} src={doc.img} alt={doc.name} />
                        <div className={styles.verified}>
                          <FaShieldAlt />
                          <Typography >
                            {t("most_popular:verified")}
                          </Typography>
                        </div>

                        <div className={styles.check_box}>
                          <FormControlLabel

                            control={<Checkbox sx={{
                              color: '#004747 !important',
                              marginTop: '8px',
                              marginBottom: '8px',
                              '.Mui-checked': {
                                color: '#004747 !important',
                              },

                              '.MuiIconButton-root': {
                                color: '#004747 !important',
                              },
                            }} />} label="Compare" />
                        </div>
                      </div>

                      <div className={styles.box_text_container}>

                        <div className={styles.name}>
                          <Typography variant='h5'>
                            {doc.name}
                          </Typography>
                        </div>

                        <div className={styles.job_title}>
                          <Typography variant='h6'>
                            {doc.job_title}
                          </Typography>
                        </div>

                        {/* <div className={styles.rating}>
                              <Rating name="read-only" defaultValue={4} size="small" />
                              <span className={styles.reviews_num}>90 Reviews</span>
                            </div> */}

                        <div className={styles.location}>
                          <MdLocationOn />
                          <Typography >
                            Istanbul, Turkey
                          </Typography>
                        </div>

                        <div className={styles.patient_num}>
                          <span>{doc.patients_num}</span>
                          <Typography>Patients Treated Last Year</Typography>
                        </div>

                        <div className={styles.experience}>
                          <span>{doc.experience}</span>
                          <Typography> Years Of Experience</Typography>
                        </div>

                        <Box sx={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignSelf: 'flex-end' }}>
                          <div id={styles.price}>
                            <Typography>Knee Replacement Starting From </Typography>
                            <span>{doc.price}$</span>
                          </div>

                          <div className={styles.btn_container}>
                            <Link href='/'>{t("proceduresSymptoms:doc_profile")}</Link>
                          </div>
                        </Box>


                      </div>
                    </div>

                  ))}

                </div>
              </div>
            </div>
          </Container>
        }
        {compareStep === 2 &&
          <section id='results' className={styles.results}>
            <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
              <div className={styles.result_container}>
                <div className={styles.boxes_container}>
                  <div className={styles.box}>
                    <div className={styles.treatment_name}>
                      <Typography>Comparison Criteria</Typography>
                    </div>

                    <div className={styles.specialties}>
                      <Typography>Specialties</Typography>
                    </div>
                    <div className={styles.exp}>
                      <Typography>Years Of Experience</Typography>
                    </div>
                    <div className={styles.last_year}>
                      <Typography>Patients Treated Last Year</Typography>
                    </div>
                    <div className={styles.performed}>
                      <Typography>Treatments Performed</Typography>
                    </div>
                    <div className={styles.langs}>
                      <Typography>Languages</Typography>
                    </div>
                    <div className={styles.memberships}>
                      <Typography>Memberships</Typography>
                    </div>
                    <div className={styles.rank}>
                      <Typography>Rank</Typography>
                    </div>
                    <div className={styles.verifi}>
                      <Typography>Verification</Typography>
                    </div>
                    <div className={styles.fee}>
                      <Typography>Appointment Fee</Typography>
                    </div>
                    <div className={styles.back_btn}>
                      <button onClick={() => setCompareStep(1)}>
                        <FaArrowLeft />
                        Back
                      </button>
                    </div>
                  </div>

                  <div className={styles.box}>
                    <div className={styles.box_container}>
                      <div className={styles.icon_container}>
                        <CloseIcon />
                        <Typography>Remove</Typography>

                      </div>
                      <div className={styles.doc_info}>
                        <div className={styles.img_container}>
                          <Image width={113} height={107} src={post3.src} alt={"doc.name"} />
                        </div>

                        <div className={styles.text_container}>
                          <div className={styles.doc_name}><Typography>Dr Mehmet Nu.</Typography></div>
                          <div className={styles.rating}>
                            <Rating name="read-only" defaultValue={4} size="small" readOnly />
                            <span className={styles.reviews_num}>{4} Reviews</span>
                          </div>
                          <div className={styles.location}>
                            <MdLocationOn />
                            <Typography>Istanbul, Turkey  </Typography>
                          </div>
                        </div>



                      </div>


                      <div className={styles.specialties}>
                        <Typography>Foot And Ankle Surgery, Hip And Knee Surgery, Trauma Surgery, Spine Surgery</Typography>
                      </div>
                      <div className={styles.exp}>
                        <Typography>15</Typography>
                      </div>
                      <div className={styles.last_year}>
                        <Typography>750</Typography>
                      </div>
                      <div className={styles.performed}>
                        <Typography>7502</Typography>
                      </div>
                      <div className={styles.langs}>
                        <Typography>English, Turkish</Typography>
                      </div>
                      <div className={styles.memberships}>
                        <Typography>Turkish Medical Association, Turkish Orthopedics And Traumatology Association And Turkish Spine Association</Typography>
                      </div>
                      <div className={styles.rank}>
                        <Typography>Professor</Typography>
                      </div>
                      <div className={styles.verifi}>
                        <Typography>Verified</Typography>
                      </div>
                      <div className={styles.fee}>
                        <Typography>120$</Typography>
                      </div>
                      <div className={styles.consult_btn}>
                        <button>
                          GET A CONSULT

                        </button>

                        <Link href={'#'}>
                          See Doctor Profile
                        </Link>
                      </div>

                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.box_container}>
                      <div className={styles.icon_container}>
                        <CloseIcon />
                        <Typography>Remove</Typography>

                      </div>
                      <div className={styles.doc_info}>
                        <div className={styles.img_container}>
                          <Image width={113} height={107} src={post3.src} alt={"doc.name"} />
                        </div>

                        <div className={styles.text_container}>
                          <div className={styles.doc_name}><Typography>Dr Mehmet Nu.</Typography></div>

                          <div className={styles.rating}>
                            <Rating name="read-only" defaultValue={4} size="small" readOnly />
                            <span className={styles.reviews_num}>{4} Reviews</span>
                          </div>
                          <div className={styles.location}>
                            <MdLocationOn />
                            <Typography>Istanbul, Turkey  </Typography>
                          </div>
                        </div>



                      </div>


                      <div className={styles.specialties}>
                        <Typography>Foot And Ankle Surgery, Hip And Knee Surgery, Trauma Surgery, Spine Surgery</Typography>
                      </div>
                      <div className={styles.exp}>
                        <Typography>15</Typography>
                      </div>
                      <div className={styles.last_year}>
                        <Typography>750</Typography>
                      </div>
                      <div className={styles.performed}>
                        <Typography>7502</Typography>
                      </div>
                      <div className={styles.langs}>
                        <Typography>English, Turkish</Typography>
                      </div>
                      <div className={styles.memberships}>
                        <Typography>Turkish Medical Association, Turkish Orthopedics And Traumatology Association And Turkish Spine Association</Typography>
                      </div>
                      <div className={styles.rank}>
                        <Typography>Professor</Typography>
                      </div>
                      <div className={styles.verifi}>
                        <Typography>Verified</Typography>
                      </div>
                      <div className={styles.fee}>
                        <Typography>120$</Typography>
                      </div>
                      <div className={styles.consult_btn}>
                        <button>
                          GET A CONSULT

                        </button>

                        <Link href={'#'}>
                          See Doctor Profile
                        </Link>
                      </div>

                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.box_container}>
                      <div className={styles.icon_container}>
                        <CloseIcon />
                        <Typography>Remove</Typography>

                      </div>
                      <div className={styles.doc_info}>
                        <div className={styles.img_container}>
                          <Image width={113} height={107} src={post3.src} alt={"doc.name"} />
                        </div>

                        <div className={styles.text_container}>
                          <div className={styles.doc_name}><Typography>Dr Mehmet Nu.</Typography></div>

                          <div className={styles.rating}>
                            <Rating name="read-only" defaultValue={4} size="small" readOnly />
                            <span className={styles.reviews_num}>{4} Reviews</span>
                          </div>
                          <div className={styles.location}>
                            <MdLocationOn />
                            <Typography>Istanbul, Turkey  </Typography>
                          </div>
                        </div>



                      </div>


                      <div className={styles.specialties}>
                        <Typography>Foot And Ankle Surgery, Hip And Knee Surgery, Trauma Surgery, Spine Surgery</Typography>
                      </div>
                      <div className={styles.exp}>
                        <Typography>15</Typography>
                      </div>
                      <div className={styles.last_year}>
                        <Typography>750</Typography>
                      </div>
                      <div className={styles.performed}>
                        <Typography>7502</Typography>
                      </div>
                      <div className={styles.langs}>
                        <Typography>English, Turkish</Typography>
                      </div>
                      <div className={styles.memberships}>
                        <Typography>Turkish Medical Association, Turkish Orthopedics And Traumatology Association And Turkish Spine Association</Typography>
                      </div>
                      <div className={styles.rank}>
                        <Typography>Professor</Typography>
                      </div>
                      <div className={styles.verifi}>
                        <Typography>Verified</Typography>
                      </div>
                      <div className={styles.fee}>
                        <Typography>120$</Typography>
                      </div>
                      <div className={styles.consult_btn}>
                        <button>
                          GET A CONSULT

                        </button>

                        <Link href={'#'}>
                          See Doctor Profile
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.result_container_slider}>
                <div className={styles.box}>
                  <div className={styles.treatment_name}>
                    <Typography>Comparison Criteria</Typography>
                  </div>

                  <div className={styles.specialties}>
                    <Typography>Specialties</Typography>
                  </div>
                  <div className={styles.exp}>
                    <Typography>Years Of Experience</Typography>
                  </div>
                  <div className={styles.last_year}>
                    <Typography>Patients Treated Last Year</Typography>
                  </div>
                  <div className={styles.performed}>
                    <Typography>Treatments Performed</Typography>
                  </div>
                  <div className={styles.langs}>
                    <Typography>Languages</Typography>
                  </div>
                  <div className={styles.memberships}>
                    <Typography>Memberships</Typography>
                  </div>
                  <div className={styles.rank}>
                    <Typography>Rank</Typography>
                  </div>
                  <div className={styles.verifi}>
                    <Typography>Verification</Typography>
                  </div>
                  <div className={styles.fee}>
                    <Typography>Appointment Fee</Typography>
                  </div>
                  <div className={styles.back_btn}>
                    <button onClick={() => setCompareStep(1)}>
                      <FaArrowLeft />
                      Back
                    </button>
                  </div>
                </div>
                <div className={styles.boxes_container}>
                  <Carousel
                    breakPoints={breakPoints}
                    itemsToScroll={1}
                    renderArrow={myArrow}
                  >


                    <div className={styles.box}>
                      <div className={styles.box_container}>
                        <div className={styles.icon_container}>
                          <CloseIcon />
                          <Typography>Remove</Typography>

                        </div>
                        <div className={styles.doc_info}>
                          <div className={styles.img_container}>
                            <Image width={113} height={107} src={post3.src} alt={"doc.name"} />
                          </div>

                          <div className={styles.text_container}>
                            <div className={styles.doc_name}><Typography>Dr Mehmet Nu.</Typography></div>
                            <div className={styles.rating}>
                              <Rating name="read-only" defaultValue={4} size="small" readOnly />
                              <span className={styles.reviews_num}>{4} Reviews</span>
                            </div>
                            <div className={styles.location}>
                              <MdLocationOn />
                              <Typography>Istanbul, Turkey  </Typography>
                            </div>
                          </div>



                        </div>


                        <div className={styles.specialties}>
                          <Typography>Foot And Ankle Surgery, Hip And Knee Surgery, Trauma Surgery, Spine Surgery</Typography>
                        </div>
                        <div className={styles.exp}>
                          <Typography>15</Typography>
                        </div>
                        <div className={styles.last_year}>
                          <Typography>750</Typography>
                        </div>
                        <div className={styles.performed}>
                          <Typography>7502</Typography>
                        </div>
                        <div className={styles.langs}>
                          <Typography>English, Turkish</Typography>
                        </div>
                        <div className={styles.memberships}>
                          <Typography>Turkish Medical Association, Turkish Orthopedics And Traumatology Association And Turkish Spine Association</Typography>
                        </div>
                        <div className={styles.rank}>
                          <Typography>Professor</Typography>
                        </div>
                        <div className={styles.verifi}>
                          <Typography>Verified</Typography>
                        </div>
                        <div className={styles.fee}>
                          <Typography>120$</Typography>
                        </div>
                        <div className={styles.consult_btn}>
                          <button>
                            GET A CONSULT

                          </button>

                          <Link href={'#'}>
                            See Doctor Profile
                          </Link>
                        </div>

                      </div>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.box_container}>
                        <div className={styles.icon_container}>
                          <CloseIcon />
                          <Typography>Remove</Typography>

                        </div>
                        <div className={styles.doc_info}>
                          <div className={styles.img_container}>
                            <Image width={113} height={107} src={post3.src} alt={"doc.name"} />
                          </div>

                          <div className={styles.text_container}>
                            <div className={styles.doc_name}><Typography>Dr Mehmet Nu.</Typography></div>

                            <div className={styles.rating}>
                              <Rating name="read-only" defaultValue={4} size="small" readOnly />
                              <span className={styles.reviews_num}>{4} Reviews</span>
                            </div>
                            <div className={styles.location}>
                              <MdLocationOn />
                              <Typography>Istanbul, Turkey  </Typography>
                            </div>
                          </div>



                        </div>


                        <div className={styles.specialties}>
                          <Typography>Foot And Ankle Surgery, Hip And Knee Surgery, Trauma Surgery, Spine Surgery</Typography>
                        </div>
                        <div className={styles.exp}>
                          <Typography>15</Typography>
                        </div>
                        <div className={styles.last_year}>
                          <Typography>750</Typography>
                        </div>
                        <div className={styles.performed}>
                          <Typography>7502</Typography>
                        </div>
                        <div className={styles.langs}>
                          <Typography>English, Turkish</Typography>
                        </div>
                        <div className={styles.memberships}>
                          <Typography>Turkish Medical Association, Turkish Orthopedics And Traumatology Association And Turkish Spine Association</Typography>
                        </div>
                        <div className={styles.rank}>
                          <Typography>Professor</Typography>
                        </div>
                        <div className={styles.verifi}>
                          <Typography>Verified</Typography>
                        </div>
                        <div className={styles.fee}>
                          <Typography>120$</Typography>
                        </div>
                        <div className={styles.consult_btn}>
                          <button>
                            GET A CONSULT

                          </button>

                          <Link href={'#'}>
                            See Doctor Profile
                          </Link>
                        </div>

                      </div>
                    </div>
                    <div className={styles.box}>
                      <div className={styles.box_container}>
                        <div className={styles.icon_container}>
                          <CloseIcon />
                          <Typography>Remove</Typography>

                        </div>
                        <div className={styles.doc_info}>
                          <div className={styles.img_container}>
                            <Image width={113} height={107} src={post3.src} alt={"doc.name"} />
                          </div>

                          <div className={styles.text_container}>
                            <div className={styles.doc_name}><Typography>Dr Mehmet Nu.</Typography></div>

                            <div className={styles.rating}>
                              <Rating name="read-only" defaultValue={4} size="small" readOnly />
                              <span className={styles.reviews_num}>{4} Reviews</span>
                            </div>
                            <div className={styles.location}>
                              <MdLocationOn />
                              <Typography>Istanbul, Turkey  </Typography>
                            </div>
                          </div>



                        </div>


                        <div className={styles.specialties}>
                          <Typography>Foot And Ankle Surgery, Hip And Knee Surgery, Trauma Surgery, Spine Surgery</Typography>
                        </div>
                        <div className={styles.exp}>
                          <Typography>15</Typography>
                        </div>
                        <div className={styles.last_year}>
                          <Typography>750</Typography>
                        </div>
                        <div className={styles.performed}>
                          <Typography>7502</Typography>
                        </div>
                        <div className={styles.langs}>
                          <Typography>English, Turkish</Typography>
                        </div>
                        <div className={styles.memberships}>
                          <Typography>Turkish Medical Association, Turkish Orthopedics And Traumatology Association And Turkish Spine Association</Typography>
                        </div>
                        <div className={styles.rank}>
                          <Typography>Professor</Typography>
                        </div>
                        <div className={styles.verifi}>
                          <Typography>Verified</Typography>
                        </div>
                        <div className={styles.fee}>
                          <Typography>120$</Typography>
                        </div>
                        <div className={styles.consult_btn}>
                          <button>
                            GET A CONSULT

                          </button>

                          <Link href={'#'}>
                            See Doctor Profile
                          </Link>
                        </div>

                      </div>
                    </div>
                  </Carousel>
                </div>

              </div>

              <div className="result_container_slider_mobile">
                <Slick />
              </div>
            </Container>
          </section>
        }

      </section >
    </>


  )
}

export default Compare