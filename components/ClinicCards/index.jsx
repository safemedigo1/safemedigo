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


const ClinicCard = () => {
  const { certeficate, post1 } = imgs;

  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false, itemsToShow: 1.1 },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 1.1, itemsToScroll: 1, showArrows: false },
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
  )
}

export default ClinicCard