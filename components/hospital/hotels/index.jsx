import React, { useState } from 'react'
import styles from './index.module.scss';
import Carousel from 'react-elastic-carousel';
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { BsCheck } from 'react-icons/bs'

import { MdLocationOn } from 'react-icons/md'
import { consts } from 'react-elastic-carousel';
import { Container, Typography, Rating, Box } from '@mui/material';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from 'next/image';

const Hotles = ({ hotels }) => {
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 2.5, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000 },

  ])
  const router = useRouter();
  const { post3, } = imgs;
  const doctorsData = [
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '10000' },
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '5000' },
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '3000' },
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '2000' },
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '1000' },
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Crowne Plaza Hotel - Floriya', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
  ]

  console.log(hotels, "HOTELS")

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
    <>
      <div id="hotels" className={styles.hotels}>
        <Container className={`${router.locale === 'ar' ? 'mycontainer_ar' : 'mycontainer'}`} sx={{ maxWidth: '1239px', paddingLeft: { sm: "0px", md: "0px" }, }} maxWidth={false}>

          <div className={styles.title_mob}>
            <Typography variant={'h4'}>
              Hotels Near Acibadem
            </Typography>
          </div>


          <div className={styles.section_container}>
            <div className={styles.text_container}>
              <div className={styles.title}>
                <Typography variant='h3'>Hotels Near Acibadem</Typography>
              </div>
              <div className={styles.desc}>
                <Typography >We Tried To Find The Most Near Hotels To The Hospitals Which Is Suitable To All Budgets And Standards</Typography>

              </div>

            </div>

            <div className={styles.slider_container}>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, }}
                className={styles.hotels}
              >
                <Box sx={{ boxShadow: "inset -20px 0px 12px #eef5f5" }} className={styles.shadow_box} />

                <Carousel
                  breakPoints={breakPoints}
                  itemsToScroll={1}
                  renderArrow={myArrow}
                  isRTL={router.locale === 'ar' ? true : false}
                >
                  {hotels?.map((hotel, index) => (
                    <div className={styles.box} key={index}>
                      <div className={styles.img_container}>
                        <Image width={344} height={191} src={hotel.hotelLogo} alt={hotel.hotelName} />

                      </div>

                      <div className={styles.box_text_container}>
                        <div className={styles.name}>
                          <Typography variant='h5'>
                            {hotel.hotelName}
                          </Typography>
                        </div>


                        <div className={styles.rating}>
                          <Rating name="read-only" defaultValue={hotel.hotelRating} size="small" />
                        </div>

                        <div className={styles.location}>
                          <MdLocationOn />
                          <Typography >
                            {hotel.hotelAddress}
                          </Typography>
                        </div>

                        <div className={styles.way}>
                          <Typography>10 Minuets To Clinic</Typography>
                        </div>


                        {hotel.hasFreeWifi &&
                          <div className={styles.way}>
                            <BsCheck />
                            <Typography>
                              Free Wi-Fi
                            </Typography>
                          </div>

                        }

                        {hotel.hasFreeBreakfast &&
                          <div className={styles.way}>
                            <BsCheck />
                            <Typography>
                              Has Resturant
                            </Typography>
                          </div>
                        }

                        {hotel.hasLanduryService &&
                          <div className={styles.way}>
                            <BsCheck />
                            <Typography>
                              Laundry Service
                            </Typography>
                          </div>

                        }


                        <Box sx={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignSelf: 'flex-end' }}>
                          <div id={styles.price}>
                            <Typography>Starting From </Typography>
                            <span>{hotel.startingPrice}$</span>
                          </div>

                          <div className={styles.btn_container}>
                            <Link href='/'>Check The Hotel</Link>
                          </div>
                        </Box>


                      </div>
                    </div>
                  ))}
                </Carousel>
              </motion.div>
            </div>
          </div>


        </Container>
      </div>
    </>

  )
}

export default Hotles