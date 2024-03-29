import styles from './index.module.scss';
import { Container, Typography, Box, } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { consts } from 'react-elastic-carousel';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router';
import Image from 'next/image';
import MostPopular from '../MostPopular';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const MedicalDepartments = ({ dataMedicalDepartments, hospiTalMedicalDepartment }) => {
  const [departments, setDepartments] = useState([])
  const { t } = useTranslation();
  const router = useRouter();
  const { slug } = router.query;
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false, itemsToShow: 1.7, itemPosition: consts.START, itemsToScroll: 1 },
    { width: 400, pagination: true, showArrows: false, itemsToShow: 1.7, itemPosition: consts.START, itemsToScroll: 1 },
    { width: 600, pagination: true, showArrows: false, itemsToShow: 2.5, itemPosition: consts.START, itemsToScroll: 1 },
    { width: 800, pagination: true, showArrows: false, itemsToShow: 3, itemPosition: consts.START, itemsToScroll: 1 },
    { width: 1150, pagination: false, itemsToShow: 4.1, itemsToScroll: 4, },
    { width: 1450, pagination: false, itemsToShow: 4.1, itemsToScroll: 4, },
    { width: 1750, pagination: false, itemsToShow: 4.1, itemsToScroll: 4, },
  ])



  useEffect(() => {
    if (router.pathname === '/hospitals/[slug]') {
      setDepartments(hospiTalMedicalDepartment);
    } else if (router.pathname.includes('/medicaldepartments/[slug]')) {
      setDepartments(dataMedicalDepartments);

    } else {
      setDepartments([]);
    }
  }, [router.pathname]);




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



  const midpointIndex = Math.floor(departments?.length / 2);

  const isOdd = departments?.length % 2 !== 0;

  // If the length of the array is odd, remove the last element
  const departmentsArray = isOdd ? departments?.slice(0, -1) : departments;


  const [activeDepartmentSlug, setActiveDepartmentSlug] = useState('');
  useEffect(() => {
    // Extract the department slug from the URL
    const slug = router.query.slug;

    // Update the active department slug
    setActiveDepartmentSlug(slug);
  }, [router.query.slug]);
  // Filter the carousel items to include only the active department

  // Split the original array into two dynamic arrays
  const firstHalfArray = departmentsArray?.slice(0, midpointIndex).filter((card) => card.slug !== activeDepartmentSlug);

  const secondHalfArray = departmentsArray?.slice(midpointIndex).filter((card) => card.slug !== activeDepartmentSlug);

  // If the length of the array was odd, add the last element to the second half
  if (isOdd) {
    secondHalfArray.push(departments[departments.length - 1]);
  }


  const selectedItem = departments?.filter((card) => card?.slug === activeDepartmentSlug);
  const medicalDepartments = departments?.filter((card) => card.slug !== activeDepartmentSlug);


  // React-Slick 

  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    setTotalSlides(departments.length);
  }, []);



  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: false,

    // rtl: router.locale === 'ar' && true,


    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
          rows: 3,
          arrows: false
        }
      },

      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
          rows: 3,
          arrows: false,
          dots: true,

        }
      },

      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 3,
          dots: true,

        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 2.7,
          rows: 3,
          arrows: false,
          dots: true,

        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 2.3,
          rows: 3,
          arrows: false,
          dots: true,

        }
      },


      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 3,
          arrows: false,
          dots: true,

        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1.8,
          rows: 3,
          arrows: false,
          dots: true,

        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          rows: 3,
          arrows: false,
          dots: true,

        }
      }
    ]
  };





  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <HiChevronRight />
      </div>

    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (

      <div className={className} onClick={onClick}>
        <HiChevronLeft />

      </div>
    );
  }





  return (
    <>
      <section id={styles.medical_department} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className={styles.section_container}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.sec_header}>
              <div className={styles.title}>
                <div className="header">
                  <Typography variant='h3'>
                    {router.pathname.includes('/medicaldepartments/[slug]') ?
                      t("proceduresSymptoms:medical_department_title")
                      :
                      "All Medical Department In Acibadem Hospital Taksim"
                    }

                  </Typography>
                  <Typography sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'none',
                      lg: 'block'
                    }
                  }} variant='h6'>
                    {router.pathname.includes('/medicaldepartments/[slug]') ?
                      t("proceduresSymptoms:medical_department_sort")
                      :
                      "Sorted A To Z"
                    }



                  </Typography>
                </div>

                <div className={`${router.locale === 'tr' ? styles.procedures_numtr : styles.procedures_num}`}>
                  <Typography sx={{
                    display: {
                      xs: 'block',
                      sm: 'block',
                      md: 'block',
                      lg: 'none'
                    }
                  }} variant='h6'>{t("proceduresSymptoms:medical_department_sort")}</Typography>
                  <Typography>
                    {router.pathname.includes('/medicaldepartments/[slug]') ?
                      <>
                        {departments.length} {t("proceduresSymptoms:medical_department_title2")}
                      </>
                      :
                      "120 Doctors"
                    }
                  </Typography>
                </div>
              </div>
            </div>
          </Container>



          <Container className={`${router.locale === 'ar' ? 'mycontainer_ar' : 'mycontainer'}`} sx={{ maxWidth: "1239px" }} maxWidth={false}>
            {/* <div className={styles.slider_container}>
              <div className={styles.shadow_box} />

              {departments?.length > 2 ? <>
                <Carousel
                  breakPoints={breakPoints}
                  transitionMs={1000}
                  renderArrow={myArrow}
                  isRTL={router.locale === 'ar' ? true : false}
                >

                  <Link dir='ltr' href={`/medicaldepartments/${activeItem[0].slug}`} className={`${styles.box} ${slug === `${activeItem[0].slug}` && styles.active}`} scroll={false}>
                    <div className={styles.img_container}>
                      <Image width={77.12} height={77.12} className={styles.main_img} src={activeItem[0].image} alt="" />
                      <Image width={77.12} height={77.12} className={styles.sec_img} src={activeItem[0].secondImage} alt="" />
                    </div>
                    <div className={styles.box_title}>
                      <Typography variant="h6">{activeItem[0].departmentName}</Typography>
                    </div>
                  </Link>



                  {firstHalfArray.map((card, index) => (
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xlg: '100%' }, justifyContent: 'center' }} key={index}
                    >

                      <Link dir='ltr' href={
                        router.pathname.includes('/medicaldepartments/[slug]') ?
                          `/medicaldepartments/${card.slug}` : `/hospitals/${card.slug}`} className={`${styles.box} ${slug === `${card.slug}` && styles.active}`} scroll={false}>
                        <div className={styles.img_container}>
                          <Image width={77.12} height={77.12} className={styles.main_img} src={card.image} alt="" />
                          <Image width={77.12} height={77.12} className={styles.sec_img} src={card.secondImage} alt="" />
                        </div>
                        <div className={styles.box_title}>
                          <Typography variant="h6">{card.departmentName}</Typography>
                        </div>
                      </Link>
                      {secondHalfArray[index + 1] && (
                        <Link dir='ltr' href={`/medicaldepartments/${secondHalfArray[index + 1]?.slug}`} className={`${styles.box} ${slug === `${secondHalfArray[index + 1]?.slug}` && styles.active}`} scroll={false}>
                          <div className={styles.img_container}>
                            <Image width={77.12} height={77.12} className={styles.main_img} src={secondHalfArray[index + 1]?.image} alt="" />
                            <Image width={77.12} height={77.12} className={styles.sec_img} src={secondHalfArray[index + 1]?.secondImage} alt="" />
                          </div>
                          <div className={styles.box_title}>
                            <Typography variant="h6">{secondHalfArray[index + 1]?.departmentName}</Typography>
                          </div>
                        </Link>
                      )}
                    </Box>
                  ))}


                </Carousel>

              </> : <>

                {departments?.map((card, index) =>
                (
                  <Box sx={{ display: 'flex', flexDirection: 'column', height: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xlg: '100%' }, justifyContent: 'center' }} key={index} >
                    <Link href={
                      router.pathname.includes('/medicaldepartments/[slug]') ?
                        `/medicaldepartments/${card?.slug}` : `/hospitals/${card?.slug}`} className={`${styles.box}  
                    ${slug === `${card.slug}` && styles.active}`} scroll={false}>
                      <div className={styles.img_container}>
                        <Image width={77.12} height={77.12} className={styles.main_img} src={card.image} alt={card?.departmentName} />
                        <Image width={77.12} height={77.12} className={styles.sec_img} src={card.secondImage} alt={card?.departmentName} />
                      </div>

                      <div className={styles.box_title}>
                        <Typography variant="h6">{card?.departmentName}</Typography>
                      </div>
                    </Link>

                  </Box>
                )
                )}


              </>}


            </div> */}

            <div className={styles.slider_container} dir={router.locale === 'ar' && 'rtl'}>
              <div className={styles.shadow_box} />

              <>
                <Slider  {...settings}
                  // swipeToSlide={true}
                  rtl={router.locale === 'ar' && true}
                >

                  {selectedItem.length !== 0 &&
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xlg: '100%' }, justifyContent: 'center' }}>
                      <Link dir='ltr' href={`/medicaldepartments/${selectedItem[0]?.slug}`} className={`${styles.box} ${styles.active}`} scroll={false} >
                        <div className={styles.img_container}>
                          <Image width={77.12} height={77.12} className={styles.main_img} src={selectedItem[0].image} alt="" />
                          <Image width={77.12} height={77.12} className={styles.sec_img} src={selectedItem[0].secondImage} alt="" />
                        </div>
                        <div className={styles.box_title}>
                          <Typography variant="h6">{selectedItem[0].departmentName}</Typography>
                        </div>
                      </Link>
                    </Box>
                  }

                  {medicalDepartments?.map((card, index) =>
                    <>
                      <Box key={index} >
                        <Link href={
                          router.pathname.includes('/medicaldepartments/[slug]') ?
                            `/medicaldepartments/${card.slug}` : `/hospitals/${card.slug}`} className={`${styles.box} ${slug === `${card.slug}` && styles.active}`}
                          scroll={false}
                        >
                          <div className={styles.img_container}>
                            <Image width={77.12} height={77.12} className={styles.main_img} src={card.image} alt={card.departmentName} />
                            <Image width={77.12} height={77.12} className={styles.sec_img} src={card.secondImage} alt={card.departmentName} />
                          </div>
                          <div className={styles.box_title}>
                            <Typography variant="h6">{card.departmentName}</Typography>
                          </div>
                        </Link>
                      </Box>
                    </>

                  )}

                </Slider>
              </>




            </div>






          </Container>

        </div >
      </section >




      {
        router.pathname === '/hospitals/[slug]' &&
        <MostPopular />
      }
    </>
  )
}

export default MedicalDepartments