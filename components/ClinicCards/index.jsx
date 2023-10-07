import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Carousel from 'react-elastic-carousel';
import imgs from "../../assets/constants/imgs";
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


const ClinicCard = ({ similarDocs }) => {
  const { certeficate, post1 } = imgs;
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false, itemsToShow: 1.1 },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 2.1, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2.1, itemsToScroll: 1, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 2.5, itemsToScroll: 1, },

  ])
  const router = useRouter();
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
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, }}
      className={styles.clinic}
      dir={router.locale === 'ar' ? 'rtl' : 'ltr'}
      id='clinic'
    >

      <Box sx={{ boxShadow: "inset -20px 0px 12px #eef5f5" }} />

      <Carousel
        breakPoints={breakPoints}
        itemsToScroll={1}
        renderArrow={myArrow}
        isRTL={router.locale === 'ar' ? true : false}
      >
        {console.log(similarDocs.data)}
        {similarDocs?.data?.map((similarDoc, index) => (
          <Link href={`/doctor/${similarDoc.slug}`} className={styles.box} key={index}>
            <div className={styles.img_container}>
              <Image width={344} height={191} src={similarDoc.image} alt={similarDoc.firstName} />
              {similarDoc.isVerifid &&
                <div className={styles.verified}>
                  <FaShieldAlt color='#004747' />
                  <Typography >
                    Safemedigo verified
                  </Typography>
                </div>
              }
            </div>

            <div className={styles.box_text_container}>

              <div className={styles.name}>
                <Typography variant='h5'>
                  Dr. {similarDoc.firstName} {` `} {similarDoc.lastName}
                </Typography>
              </div>

              <div className={styles.type}>
                <Typography variant='h6'>
                  {similarDoc.mainSpecialization}
                </Typography>
              </div>

              <div className={styles.rating}>
                <Rating name="read-only" defaultValue={similarDoc.rate} size="small" readOnly />
                <span className={styles.reviews_num}>{similarDoc.totalReview} Reviews</span>
              </div>

              <div className={styles.location}>
                <MdLocationOn />
                <Typography >
                  {similarDoc.location}
                </Typography>
              </div>

              <div className={styles.founded}>
                <span>{similarDoc.lastYearPatients}</span>
                <Typography>Patients Treated Last Year</Typography>
              </div>

              <div className={styles.employess}>
                <span>{similarDoc.experienceYears}</span>
                <Typography>  Years Of Experience</Typography>
              </div>






              <Box sx={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignSelf: 'flex-end' }}>
                <div id={styles.price}>
                  <Typography>{similarDoc.treatmentName}</Typography>
                  <span>{similarDoc.treatmentPrice}$</span>
                </div>

                <div className={styles.btn_container}>
                  <Link href='/'>See Doctor Profile</Link>
                </div>
              </Box>

            </div>

          </Link>
        ))}


      </Carousel>
    </motion.div>
  )
}

export default ClinicCard