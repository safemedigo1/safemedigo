import React, { Children, useContext, useState } from 'react';
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
import { appContext } from "@/context/store";
import { useRouter } from 'next/router';


const Hero = () => {
  const { t } = useTranslation();
  const { lang } = useContext(appContext)
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false },
    { width: 400, pagination: false },

  ])
  const router = useRouter();
  const { author, } = imgs;

  const cards = [
    { title: 'Patient name', img: author.src, id: '1', desc: ' Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Consetetur Sadipscing Elitr, Sed Diam Nonumy  ' },
    { title: 'Patient name', img: author.src, id: '2', desc: ' Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Consetetur Sadipscing Elitr, Sed Diam Nonumy  ' },

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
    <section id={styles.hero} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.hero_container}>
          <div className={styles.text_container}>

            <div className={styles.title}>
              <Typography variant='h1'>{t("hero_section:title1")}  <br /> {t("hero_section:title2")}</Typography>
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


            <Box sx={{ display: 'flex', alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'flex-start' }, justifyContent: { xs: 'flex-start', sm: 'flex-start', md: 'space-between', lg: 'space-between' }, flexDirection: { xs: 'row', sm: 'column', md: 'row', lg: 'column' } }}>

              <div className={styles.more}>
                <Link href='/'>
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
              isRTL={router.locale === 'ar' ? true : false}
            >
              {cards.map((card, index) => (
                <>
                  <div className={styles.box} key={index}>
                    <div className={styles.box_header}>
                      <div className={styles.img_container}>
                        <img src={card.img} alt="" />
                      </div>

                      <div className={styles.title}>
                        <Typography variant="h6">{card.title}</Typography>

                        <div className={styles.link}>
                          <Link href='/'>Knee Replacement</Link>
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