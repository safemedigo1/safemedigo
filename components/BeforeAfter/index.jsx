import React, { useState } from 'react'
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { Container, Typography, } from '@mui/material';
import { useTranslation } from "react-i18next";
import Carousel, { consts } from 'react-elastic-carousel';
import { useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Image from 'next/image';

const BeforeAfter = ({ treatments, beforeCards }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [treatmentsBeforeAFter, setTreatmentsBeforeAFter] = useState()
  console.log(treatments, "OVER")
  useEffect(() => {
    setTreatmentsBeforeAFter(treatments)
    router.pathname === '/doctor/[slug]' && setTreatmentsBeforeAFter(beforeCards)
  }, [])

  const [BeforeAfterbreakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 1, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 4, itemsToScroll: 1, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 3, itemsToScroll: 1 },

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

      ;
    return (
      <button className='main_btn' onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }
  return (
    <section id={styles.before_after} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <Container className={`${router.locale === 'ar' ? 'mycontainer_ar' : 'mycontainer'} `} sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <div className={styles.title}>
          <Typography variant='h3'>
            {t('proceduresSymptoms_single:before_after2')}
          </Typography>
        </div>
      </Container >

      <Container className="custom_container">
        <div className={styles.slider_container}>
          <Carousel
            breakPoints={BeforeAfterbreakPoints}
            itemsToScroll={1} renderArrow={myArrow}
            isRTL={router.locale === 'ar' ? true : false}
          >

            {
              treatmentsBeforeAFter?.treatmentImage?.map((card, index) => (
                <div className={styles.box} key={index}>
                  <div className={styles.imgs_container}>
                    <Image width={388} height={200} src={card.imgBefore} alt="" />
                    <Image width={388} height={200} src={card.imgAfter} alt="" />
                  </div>
                  <div className={styles.box_title}>
                    <Typography variant='h5'>{t('proceduresSymptoms_single:before')}</Typography>
                    <Typography variant='h5'>{t('proceduresSymptoms_single:after')}</Typography>
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
      </Container>
    </section>
  )
}

export default BeforeAfter