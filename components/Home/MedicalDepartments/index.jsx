import styles from './index.module.scss';
import { Container, Typography, Box, } from '@mui/material'
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
import { useRouter } from 'next/router';
import Image from 'next/image';
import MostPopular from '../MostPopular';

const MedicalDepartments = ({ dataMedicalDepartments, hospiTalMedicalDepartment, params }) => {
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



  // // Calculate the midpoint index
  const midpointIndex = Math.floor(departments?.length / 2);

  // Split the original array into two dynamic arrays
  const firstHalfArray = departments?.slice(0, midpointIndex);
  const secondHalfArray = departments?.slice(midpointIndex);



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

                <div className={styles.procedures_num}>
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
                        10.500 {t("proceduresSymptoms:procedures")}
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
                    <Link href={
                      router.pathname.includes('/medicaldepartments/[slug]') ?

                        `/medicaldepartments/${card.slug}` : `/hospitals/${card.slug}`} className={`${styles.box}  
                    ${slug === `${card.slug}` && styles.active}`} scroll={false}>
                      <div className={styles.img_container}>
                        <Image width={77.12} height={77.12} className={styles.main_img} src={card.image} alt="" />
                        <Image width={77.12} height={77.12} className={styles.sec_img} src={card.secondImage} alt="" />

                      </div>

                      <div className={styles.box_title}>
                        <Typography variant="h6">{card.departmentName}</Typography>
                      </div>
                    </Link>


                    < Link href={`/medicaldepartments/${secondHalfArray[index].slug}`} className={`${styles.box}  
                    ${slug === `${secondHalfArray[index].slug}` && styles.active}`} scroll={false} >
                      <div className={styles.img_container}>
                        <Image width={77.12} height={77.12} className={styles.main_img} src={secondHalfArray[index].image} alt="" />
                        <Image width={77.12} height={77.12} className={styles.sec_img} src={secondHalfArray[index].image} alt="" />
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
      </section >


      {router.pathname === '/hospitals/[slug]' &&
        <MostPopular />
      }
    </>
  )
}

export default MedicalDepartments