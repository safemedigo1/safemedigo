import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Carousel from 'react-elastic-carousel';
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaShieldAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { consts } from 'react-elastic-carousel';
import { Container, Typography, Rating, Box } from '@mui/material';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Image from 'next/image';

const MostPopular = (dataPopularTreatmentsMedical, dataPopularTreatmentsHome) => {
  const router = useRouter();
  const { pathname } = router;
  const { t } = useTranslation();
  const { post1, post2, post3, post4, post5, } = imgs;

  const [popularTreatmetsData, setPopularTreatmetsData] = useState([])
  useEffect(() => {
    router.pathname === '/medicaldepartments/[slug]' ? setPopularTreatmetsData(dataPopularTreatmentsMedical.dataPopularTreatmentsMedical) :
      setPopularTreatmetsData(dataPopularTreatmentsMedical.dataPopularTreatmentsHome)

  }, [])


  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false, itemsToShow: 1.1 },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 1.1, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2.1, itemsToScroll: 1, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 2.5, itemsToScroll: 1, },

  ])

  const [treatment, setTreatment] = useState(true)
  const [doctors, setDoctors] = useState(false)
  const [clinic, setClinic] = useState(false)


  // Handle changes 
  const handleTreatment = () => {
    setTreatment(true)
    setDoctors(false)
    setClinic(false)
  }

  const handleDoctors = () => {
    setDoctors(true)
    setTreatment(false)
    setClinic(false)
  }

  const handleClinic = () => {
    setClinic(true)
    setDoctors(false)
    setTreatment(false)
  }


  const treatmentData = [
    { title: 'Treatment Name', price: '1200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod TemAliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet  Et Ea Rebum. Stet Et Ea Rebum. Stet Et Ea Rebum. Stet Et Ea Rebum. Stet  o Duo Dolores Et Ea Rebum. Stet  Et Ea Rebum. Stet Et Ea Rebum. Stet Et Ea Rebum. Stet Et Ea Rebum. Stet ", img: post3.src },
    { title: 'Treatment Name', price: '1000', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore E Stet Clipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore E Stet Clita Kasd", img: post1.src },
    { title: 'Treatment Name', price: '3700', desc: "Lorebore o Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post2.src },
    { title: 'Treatment Name', price: '6800', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et  Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et  Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et  Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post4.src },
    { title: 'Treatment Name', price: '2200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post5.src },
    { title: 'Treatment Name', price: '2200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post5.src },
    { title: 'Treatment Name', price: '2200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post5.src },
    { title: 'Treatment Name', price: '2200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post5.src },
    { title: 'Treatment Name', price: '2200', desc: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd", img: post5.src },

  ]

  const doctorsData = [
    { name: 'Dr Ahmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '10000' },
    { name: 'Dr John doe', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '5000' },
    { name: 'Dr Ibrahim Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '3000' },
    { name: 'Dr Esmaiel Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '2000' },
    { name: 'Dr Mahmoud Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '1000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Dr Mehmet Nuri Erdem', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
  ]

  const clinicData = [
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '1000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '2000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '3000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
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




  return (
    <Box sx={pathname !== '/procedures&symptoms' & pathname !== '/hospitals/[slug]' ? {
      backgroundColor: '#eef5f5'

    } : { backgroundColor: '#FFFFFF' }} id={styles.most_popular} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>

      <Box className={styles.section_container}>
        <Container sx={{ maxWidth: '1239px', }} maxWidth={false}  >

          {pathname === '/' &&
            <div className={styles.title}>
              <Typography variant='h2'>{t('most_popular:title')}</Typography>
            </div>
          }

          {pathname === '/' &&
            <div className={styles.navigation}>
              <div className={styles.header}>
                <div className={`${styles.treatment} ${treatment && styles.active}`} onClick={handleTreatment}>
                  <Typography variant='h6'>
                    <button>{t('most_popular:treatment')}</button>
                  </Typography>
                </div>
                <div className={`${styles.doctors} ${doctors && styles.active}`} onClick={handleDoctors}>
                  <Typography variant='h6'>
                    <button> {t('most_popular:doctors')}</button>
                  </Typography>
                </div>
                <div className={`${styles.clinic} ${clinic && styles.active}`} onClick={handleClinic}>
                  <Typography variant='h6'>
                    <button> {t('most_popular:clinic')}</button>
                  </Typography>

                </div>
              </div>

              <hr />

            </div>
          }

          {pathname !== '/' &&
            <div className={styles.title_mobile}>
              <Typography variant='h2'>{t('most_popular:title')}</Typography>
            </div>
          }
        </Container>

        <Container className={`${router.locale === 'ar' ? 'mycontainer_ar' : 'mycontainer'}`} sx={{ maxWidth: '1239px', paddingLeft: { sm: "0px", md: "0px" }, }} maxWidth={false}  >
          <div className={styles.content}>
            <div className={styles.text_container}>

              {pathname === '/procedures&symptoms' &&
                <div className={styles.title}>
                  <Typography variant='h2'>{t('most_popular:title')}</Typography>
                </div>
              }

              <div className={styles.desc}>
                {router.pathname !== '/hospitals/[slug]' ?
                  <>
                    {router.pathname !== '/medicaldepartments/[slug]' ?
                      <Typography> {t('most_popular:desc2')}</Typography>
                      :
                      <Typography> {t('most_popular:desc')}</Typography>
                    }
                  </>
                  :
                  <Typography variant={'h3'}> Acibadem Hospital Taksim Doctors</Typography>
                }

              </div>


              {pathname === '/' &&
                <div className={styles.btn_container}>
                  <Link href='/'>
                    <button>
                      {t('most_popular:get_started')}
                    </button>
                  </Link>
                </div>
              }


              {router.pathname === '/hospitals/[slug]' &&
                <>
                  <Link href={`/hospitals/{card.slug}`} id='box' className={`${styles.box}  
                    {'active}`} scroll={false}>
                    < div className={'img_container'}>
                      < Image width={77.12} height={77.12} className={'main_img'} src={treatmentData[0].post3} alt="" />
                      <Image width={77.12} height={77.12} className={'sec_img'} src={treatmentData[0].post3} alt="" />

                    </div>

                    <div className={'box_title'}>
                      <Typography variant="h6">Gastroenterology & Hepatology</Typography>
                    </div>
                  </Link>

                  <div className="desc">
                    <Typography >Dermatology Is The Branch Of Medicine Dealing With The Skin. It Is A Speciality With Both Medical And Surgical Aspects Related To Skin, Hair, Nails, And Some Cosmetic Problems.</Typography>
                  </div>
                </>
              }



            </div>

            <div className={styles.slider_container}>
              {
                router.pathname !== '/hospitals/[slug]' &&
                treatment &&
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}

                  transition={{ duration: 1, }}
                  className={styles.treatment}>

                  <Box sx={
                    pathname !== '/procedures&symptoms' ?
                      {
                        boxShadow: "inset -20px 0px 12px #eef5f5"
                      } :

                      {
                        boxShadow: "inset -20px 0px 12px #ffffff"
                      }
                  } className={styles.shadow_box} />

                  <Carousel
                    breakPoints={breakPoints}
                    itemsToScroll={2}
                    renderArrow={myArrow}
                    isRTL={router.locale === 'ar' ? true : false}
                  >


                    {
                      pathname !== '/hospitals/[slug]' ?
                        popularTreatmetsData?.map((card, index) => (
                          <Link href={`/procedures&symptoms/${card?.slug}`} className={styles.box} key={index}>
                            <div className={styles.img_container}>
                              <Image width={344} height={191} src={card?.imagePath} alt={card.title} />
                            </div>

                            <div className={styles.box_text_container}>

                              <div className={styles.title}>
                                <Typography variant='h5'>
                                  {card.treatmentName}
                                </Typography>
                              </div>

                              <div className={styles.price}>
                                <Typography variant='h6'>
                                  Cost Start From  {card.cost} &euro;
                                </Typography>
                              </div>

                              <div className={styles.rating}>
                                <Rating name="read-only" defaultValue={card.totalReviewed} size="small" readOnly />
                                <span className={styles.reviews_num}>{card.totalReviewed} Reviews</span>
                              </div>

                              <div className={styles.desc}>
                                <Typography>{card.description}</Typography>
                              </div>

                              <div className={styles.btn_container}>
                                <Link href='/'>
                                  More
                                </Link>
                              </div>

                            </div>



                          </Link>
                        )) :
                        treatmentData.map((card, index) => (
                          <div className={styles.box} key={index}>
                            <div className={styles.img_container}>
                              <Image width={344} height={191} src={card.img} alt={card.title} />
                            </div>

                            <div className={styles.box_text_container}>

                              <div className={styles.title}>
                                <Typography variant='h5'>
                                  {card.title}
                                </Typography>
                              </div>

                              <div className={styles.price}>
                                <Typography variant='h6'>
                                  Cost Start From  {card.price} &euro;
                                </Typography>
                              </div>

                              <div className={styles.rating}>
                                <Rating name="read-only" defaultValue={4} size="small" />
                                <span className={styles.reviews_num}>90 Reviews</span>
                              </div>

                              <div className={styles.desc}>


                                <Typography>{card.desc}</Typography>
                              </div>

                              <div className={styles.btn_container}>
                                <Link href='/'>
                                  More
                                </Link>
                              </div>

                            </div>



                          </div>
                        ))
                    }
                  </Carousel>
                </motion.div>
              }


              {pathname !== '/procedures&symptoms' &&
                <>
                  {doctors &&
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 1, }}

                      className={styles.doctors}
                    >
                      <Box sx={{ boxShadow: "inset -20px 0px 12px #eef5f5" }} className={styles.shadow_box} />

                      <Carousel
                        breakPoints={breakPoints}
                        itemsToScroll={1}
                        renderArrow={myArrow}
                        isRTL={router.locale === 'ar' ? true : false}
                      >
                        {doctorsData.map((doc, index) => (
                          <div className={styles.box} key={index}>
                            <div className={styles.img_container}>
                              <Image width={344} height={191} src={doc.img} alt={doc.name} />
                              <div className={styles.verified}>
                                <FaShieldAlt />
                                <Typography >
                                  Safemedigo verified
                                </Typography>
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

                              <div className={styles.rating}>
                                <Rating name="read-only" defaultValue={4} size="small" />
                                <span className={styles.reviews_num}>90 Reviews</span>
                              </div>

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
                                  <Link href='/'>See Doctor Profile</Link>
                                </div>
                              </Box>


                            </div>
                          </div>
                        ))}
                      </Carousel>
                    </motion.div>
                  }

                  {clinic &&
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 1, }}
                      className={styles.clinic}>

                      <Box sx={{ boxShadow: "inset -20px 0px 12px #eef5f5" }} />

                      <Carousel
                        breakPoints={breakPoints}
                        itemsToScroll={1}
                        renderArrow={myArrow}
                        isRTL={router.locale === 'ar' ? true : false}
                      >
                        {clinicData.map((clinic, index) => (
                          <Link href='/hospitals/acibadem-hospital-in-taksim' className={styles.box} key={index}>
                            <div className={styles.img_container}>
                              <Image width={344} height={191} src={clinic.img} alt={clinic.title} />
                              <div className={styles.verified}>
                                <FaShieldAlt />
                                <Typography >
                                  Safemedigo verified
                                </Typography>
                              </div>
                            </div>

                            <div className={styles.box_text_container}>

                              <div className={styles.name}>
                                <Typography variant='h5'>
                                  {clinic.title}
                                </Typography>
                              </div>

                              <div className={styles.type}>
                                <Typography variant='h6'>
                                  {clinic.type}
                                </Typography>
                              </div>

                              <div className={styles.rating}>
                                <Rating name="read-only" defaultValue={4} size="small" />
                                <span className={styles.reviews_num}>90 Reviews</span>
                              </div>

                              <div className={styles.location}>
                                <MdLocationOn />
                                <Typography >
                                  Istanbul, Turkey
                                </Typography>
                              </div>

                              <div className={styles.founded}>
                                <span>{clinic.founded}</span>
                                <Typography>Founded Year</Typography>
                              </div>

                              <div className={styles.employess}>
                                <span>{clinic.employess}</span>
                                <Typography> Doctors & Employees</Typography>
                              </div>

                              <div className={styles.yearly_patient}>
                                <span>{clinic.yearly_patient}</span>
                                <Typography>Yearly Patient</Typography>
                              </div>

                              <div className={styles.btn_container}>
                                <Link href='/'>See Hospital Profile</Link>
                              </div>

                            </div>



                          </Link>
                        ))}


                      </Carousel>
                    </motion.div>
                  }
                </>
              }

              {router.pathname === '/hospitals/[slug]' &&
                <>
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, }}
                    className={styles.doctors}
                  >
                    <Box sx={{ boxShadow: "inset -20px 0px 12px #eef5f5" }} className={styles.shadow_box} />

                    <Carousel
                      breakPoints={breakPoints}
                      itemsToScroll={1}
                      renderArrow={myArrow}
                      isRTL={router.locale === 'ar' ? true : false}
                    >
                      {doctorsData.map((doc, index) => (
                        <div className={styles.box} key={index}>
                          <div className={styles.img_container}>
                            <Image width={344} height={191} src={doc.img} alt={doc.name} />
                            <div className={styles.verified}>
                              <FaShieldAlt />
                              <Typography >
                                Safemedigo verified
                              </Typography>
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

                            <div className={styles.rating}>
                              <Rating name="read-only" defaultValue={4} size="small" />
                              <span className={styles.reviews_num}>90 Reviews</span>
                            </div>

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
                                <Link href='/'>See Doctor Profile</Link>
                              </div>
                            </Box>


                          </div>
                        </div>
                      ))}
                    </Carousel>
                  </motion.div>
                </>
              }


            </div>
          </div>
        </Container>

      </Box >

    </Box >
  )
}

export default MostPopular


export async function getServerSideProps() {



  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'sec_navbar', 'blogs_page', 'page_header_comp', "most_popular", "proceduresSymptoms",])),

    }
  }
}

