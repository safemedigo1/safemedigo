import React, { useState } from 'react'
import styles from '../index.module.scss';
import Carousel from 'react-elastic-carousel';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
import { consts } from 'react-elastic-carousel';
import { Container, Typography, Dialog, DialogContent, Box, DialogTitle, Backdrop } from '@mui/material';
import { styled } from '@mui/material/styles';

import Link from 'next/link';
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from 'next/image';
import imgs from "../../../../assets/constants/imgs";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Visits = () => {
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 2.5, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000 },

  ])

  const [hotelImageBreakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },

  ])


  const router = useRouter();
  const { post3, } = imgs;
  const doctorsData = [
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '10000' },
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '5000' },
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '3000' },
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '2000' },
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '1000' },
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
    { name: 'Istanbul Museum', job_title: 'Orthopedics And Traumatology', patients_num: '750', experience: '20', img: post3.src, price: '8000' },
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


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },

    background: '#1b1b1b12',
    '.MuiModal-backdrop': {
      position: 'static',

    },
    '.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
      boxShadow: '0 0 0 0'
    },
    '.css-uhb5lp': {
      boxShadow: '0 0 0 0'

    }


  }));




  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }


  return (
    <>
      <Box sx={{ background: '#FAFAFA', marginTop: '40px', paddingTop: '40px', marginBottom: '40px', paddingBottom: '40px' }} id="visits" className={styles.hotels}>
        <Container className={`${router.locale === 'ar' ? 'mycontainer_ar' : 'mycontainer'}`} sx={{ maxWidth: '1239px', paddingLeft: { sm: "0px", md: "0px" }, }} maxWidth={false}>


          <div className={styles.title_mob}>
            <Typography variant={'h4'}>
              Places To Visit Near Acibadem
            </Typography>
          </div>


          <div className={styles.section_container}>
            <div className={styles.text_container}>
              <div className={styles.title}>
                <Typography variant='h3'>Places To Visit Near Acibadem</Typography>
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
                  {doctorsData.map((card, index) => (

                    <>
                      <Box sx={{ cursor: 'pointer' }} className={styles.box} key={index} onClick={handleClickOpen} >
                        <div className={styles.img_container}>
                          <Image width={344} height={191} src={card.img} alt={card.name} />

                        </div>

                        <div className={styles.box_text_container}>
                          <div className={styles.name}>
                            <Typography variant='h5'>
                              {card.name}
                            </Typography>
                            <Typography sx={{ fontSize: '16px', color: '#000000', fontWeight: 'Regular', fontFamily: 'Quicksand' }}>
                              Museum
                            </Typography>
                          </div>

                          <div className={styles.location}>
                            <MdLocationOn />
                            <Typography >
                              Istanbul, Turkey
                            </Typography>
                          </div>

                          <div className={styles.desc}>
                            <Typography>
                              We Were Accommodated 1 Month Ago At This Hotel And I Can Say That I Had The Worst Experience So Far. Nowhere Have I Seen Breakfast As Poor As At This Hotel, Poor Coffee, Some Bread, 2 Cherry Tomatoes And 2 Slices Of Cheese. We Are Talking About A 5 Star Hotel With An Indoor Pool But Closed And At Other Hotels The Pools Were Open.
                            </Typography>
                          </div>


                          <Box sx={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignSelf: 'flex-end' }}>

                            <div className={styles.btn_container}>
                              <Link href='/'>Check The Hotel</Link>
                            </div>
                          </Box>


                        </div>
                      </Box>

                      <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title2"
                        open={open}
                      >

                        <BootstrapDialogTitle id="customized-dialog-title2" onClose={handleClose}>
                          <Typography>
                            {card.name}
                          </Typography>

                        </BootstrapDialogTitle>


                        <DialogContent id='visits' dividers sx={{ display: 'flex', flexDirection: 'column' }}>


                          <Carousel
                            breakPoints={hotelImageBreakPoints}
                            itemsToScroll={1}
                            renderArrow={myArrow}
                            isRTL={router.locale === 'ar' ? true : false}
                          >
                            <Box sx={{
                              width: '100%', height: '200px', margin: 'auto',
                              marginTop: '10px',

                              '& img': {
                                objectFit: 'contain', width: '100%', height: '100%',
                              }
                            }}>
                              <Image width={66.87} height={99.78} style={{ objectFit: 'contain' }} src={card.img} alt="" />

                            </Box>
                            <Box sx={{
                              width: '100%', height: '200px', margin: 'auto',
                              marginTop: '10px',

                              '& img': {
                                objectFit: 'contain', width: '100%', height: '100%',
                              }
                            }}>
                              <Image width={66.87} height={99.78} style={{ objectFit: 'contain' }} src={card.img} alt="" />

                            </Box>

                          </Carousel >
                          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px' }} >
                            <MdLocationOn />
                            <Typography >
                              Levazım, Çayır Sk. 4-1, 34340 Beşiktaş/İstanbul, Türkiye
                            </Typography>
                          </Box>
                          <Typography gutterBottom>
                            We Were Accommodated 1 Month Ago At This Hotel And I Can Say That I Had The Worst Experience So Far. Nowhere Have I Seen Breakfast As Poor As At This Hotel, Poor Coffee, Some Bread, 2 Cherry Tomatoes And 2 Slices Of Cheese. We Are Talking About A 5 Star Hotel With An Indoor Pool But Closed And At Other Hotels The Pools Were Open.
                          </Typography>

                        </DialogContent>
                      </BootstrapDialog>

                    </>
                  ))}
                </Carousel>
              </motion.div>
            </div>
          </div>


        </Container>
      </Box>
    </>

  )
}

export default Visits