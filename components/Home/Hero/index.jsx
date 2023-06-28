import React, { useState } from 'react';
import styles from './index.module.scss';
import { Container, Typography, Rating, Box, } from '@mui/material';
import { BsCheckLg } from 'react-icons/bs';
import { HiPlay } from 'react-icons/hi';
import Link from 'next/link';
import Carousel from 'react-elastic-carousel';
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { consts } from 'react-elastic-carousel';
import Search from '../Search/index'
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router';
import Image from 'next/image';

const Hero = () => {
  const { t } = useTranslation();
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false },
    { width: 400, pagination: false },

  ])

  const router = useRouter();
  const { author, } = imgs;

  const cards = [
    { treatment: 'Knee Replacement', title: 'John Smith, 60Y, USA', img: author.src, id: '1', desc: "Safemedigo played a crucial role in my outstanding knee replacement surgery. They facilitated top-notch treatment in Turkey, ensuring exceptional care and expertise. Grateful for Safemedigo's assistance in my pain-free, active lifestyle." },
    {
      treatment: 'Hair Transplant', title: 'Emily Johnson, 40Y, UK', img: author.src, id: '2', desc: " With Safemedigo's assistance, my hair transplant in Turkey was a remarkable experience. They provided access to skilled staff, a comfortable environment, and ensured exceptional results. Grateful for Safemedigo's role in my transformation."
    },
    {
      treatment: 'IVF', title: 'Sarah Thompson, 35Y, Australia', img: author.src, id: '2', desc: "Safemedigo made my IVF journey smoother by guiding me through every step of the process in Turkey. Their compassionate support, along with access to reputable clinics, helped me fulfill my dream of having a baby."
    },
    {
      treatment: 'General Checkup', title: 'Michael Davis, 50Y, Canada', img: author.src, id: '2', desc: "Safemedigo facilitated my outstanding general checkup experience in Turkey. They ensured thorough examinations, friendly staff, and a prompt report. Grateful for Safemedigo's assistance in prioritizing my well-being."
    },
    {
      treatment: 'Bypass Operation', title: 'Anna Schmidt, 65Y, Germany', img: author.src, id: '2', desc: "Safemedigo played a vital role in my bypass surgery in Turkey. Their assistance and expertise were invaluable, ensuring exceptional care and saving my life. Highly recommend Safemedigo for their exceptional support."
    },

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
    <section id={styles.hero} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.hero_container}>
          <div className={styles.text_container}>
            <div className={styles.title}>
              <h1>{t("hero_section:title1")}
                <br />
                {t("hero_section:title2")}
              </h1>
            </div>

            <div className={styles.advantages}>
              <div className={styles.advantage}>
                <BsCheckLg />
                <Typography>
                  {t('hero_section:hero_desc1')}
                </Typography>
              </div>
              <div className={styles.advantage}>
                <BsCheckLg />
                <Typography>
                  {t('hero_section:hero_desc2')}
                </Typography>
              </div>
              <div className={styles.advantage}>
                <BsCheckLg />
                <Typography>
                  {t('hero_section:hero_desc3')}
                </Typography>
              </div>
            </div>


            <Box sx={{ display: 'flex', alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'flex-start' }, justifyContent: { xs: 'flex-start', sm: 'flex-start', md: 'space-between', lg: 'space-between' }, flexDirection: { xs: 'row', sm: 'row', md: 'row', lg: 'column' } }}>

              <div className={styles.more}>
                <Link href='https://youtu.be/daQ9rUzX8wY' target='_blank'>
                  <HiPlay />
                  <button>{t("hero_section:watch_video")}</button>
                </Link>
              </div>

              <div className={styles.start}>
                <div className={styles.get_started_btn}>
                  <Link href='/'>
                    <button>{t("most_popular:get_started")}  </button>
                  </Link>
                </div>

                <div className={styles.explore_btn}>
                  <Link href='/procedures&symptoms'>
                    <button>{t("hero_section:explore_our_procedures")}  </button>
                  </Link>

                </div>
              </div>

            </Box>

          </div>

          <div className={styles.slider_container}>
            <Carousel
              breakPoints={breakPoints}
              itemsToScroll={1}
              renderArrow={myArrow}
            >
              {cards.map((card, index) => (
                <>
                  <div className={styles.box} key={index}>
                    <div className={styles.box_header}>
                      <div className={styles.img_container}>
                        <Image width={80} height={80} src={card.img} alt="" />
                      </div>

                      <div className={styles.title}>
                        <Typography variant="h6">{card.title}</Typography>

                        <div className={styles.link}>
                          <Link href='/'>{card.treatment}</Link>
                        </div>

                        <div className={styles.rating}>
                          <Rating name="size-small" defaultValue={4} size="small" />
                          <span className={styles.reviews_num}>90 Reviews</span>
                        </div>


                      </div>
                    </div>





                    <div className={styles.desc}>
                      <Typography>
                        {card.desc}
                      </Typography>
                    </div>

                  </div>
                </>
              ))}

            </Carousel>



          </div>

        </div>
      </Container>

      <Search />
    </section >
  )
}

export default Hero