import React, { useState } from 'react';
import styles from './index.module.scss';
import { Container, Typography, Dialog, DialogContent, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, DialogTitle, Rating } from '@mui/material';
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
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

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
    { treatment: 'Knee Replacement', title: 'John, 60Y, USA', img: author.src, id: '1', desc: "Safemedigo played a crucial role in my outstanding knee replacement surgery. They facilitated top-notch treatment in Turkey, ensuring exceptional care and expertise. Grateful for Safemedigo's assistance in my pain-free, active lifestyle." },
    {
      treatment: 'Hair Transplant', title: 'Emily, 40Y, UK', img: author.src, id: '2', desc: " With Safemedigo's assistance, my hair transplant in Turkey was a remarkable experience. They provided access to skilled staff, a comfortable environment, and ensured exceptional results. Grateful for Safemedigo's role in my transformation."
    },
    {
      treatment: 'IVF', title: 'Sarah, 35Y, Australia', img: author.src, id: '2', desc: "Safemedigo made my IVF journey smoother by guiding me through every step of the process in Turkey. Their compassionate support, along with access to reputable clinics, helped me fulfill my dream of having a baby."
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



  // Dialog MUI
  const [open, setOpen] = useState(false);
  const [openVid, setOpenVid] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClickOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenVid = () => {
    setOpenVid(true);
  };
  const handleCloseVid = () => {
    setOpenVid(false);
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
    <section id={styles.hero} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.hero_container}>
          <div className={styles.text_container}>
            <div className={styles.title}>
              <h1>{t("hero_section:title1")}
                <br />
                {t("hero_section:title2")}
              </h1>

              <h4>
                {t("hero_section:title3")}
              </h4>
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
                <a onClick={handleClickOpenVid}>
                  <HiPlay />
                  <button>{t("hero_section:watch_video")}</button>
                </a>


                <BootstrapDialog
                  onClose={handleCloseVid}
                  aria-labelledby="customized-dialog-title"
                  open={openVid}
                >
                  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseVid} />

                  <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{
                      width: { xs: "125px", sm: '125px', md: "500px", lg: '500px', xlg: '500px' }, height: '300px',
                      marginTop: '10px',
                      marginBottom: '10px',


                    }}>
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/daQ9rUzX8wY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </Box>


                  </DialogContent>
                </BootstrapDialog>
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
                  <div className={styles.box} key={index} onClick={() => handleClickOpen(card)}>
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

                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                      {selectedCard && selectedCard.title}
                    </BootstrapDialogTitle>
                    <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{
                        width: '100%', height: '200px', margin: 'auto',
                        marginTop: '10px',
                        marginBottom: '20px',

                        '& img': {
                          objectFit: 'contain', width: '100%', height: '100%',
                        }
                      }}>
                        {selectedCard && <Image width={66.87} height={99.78} src={selectedCard.img} alt="" />}
                      </Box>

                      <Typography gutterBottom>
                        {selectedCard && selectedCard.desc}
                      </Typography>

                    </DialogContent>
                  </BootstrapDialog>
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