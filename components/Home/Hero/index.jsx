import React, { useState } from 'react';
import styles from './index.module.scss';
import { Container, Typography, Dialog, DialogContent, Box, DialogTitle, Rating } from '@mui/material';
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
import { Puff } from 'react-loader-spinner';

const Hero = () => {
  const { t } = useTranslation();
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false },
    { width: 400, pagination: false },

  ])
  const [showCard, setShowCard] = useState(true)

  const router = useRouter();
  const { bypassRashid,
    hairTransplantAbdulkareem,
    checkUp,
    ivf46,
    kneeReplacment,
    teeth1Meshaal,
    teeth2Ali, } = imgs;

  const cards = [
    { treatment: t("hero_section:treatment1"), title: t("hero_section:Ttitle1"), img: kneeReplacment.src, id: 1, desc: t("hero_section:Tdesc1") },
    {
      treatment: t("hero_section:treatment2"), title: t("hero_section:Ttitle2"), img: hairTransplantAbdulkareem.src, id: 2, desc: t("hero_section:Tdesc2")
    },
    {
      treatment: t("hero_section:treatment3"), title: t("hero_section:Ttitle3"), img: ivf46.src, id: 3, desc: t("hero_section:Tdesc3")
    },
    {
      treatment: t("hero_section:treatment4"), title: t("hero_section:Ttitle4"), img: checkUp.src, id: 4, desc: t("hero_section:Tdesc4")
    },
    {
      treatment: t("hero_section:treatment5"), title: t("hero_section:Ttitle5"), img: bypassRashid.src, id: 5, desc: t("hero_section:Tdesc5")
    },
    {
      treatment: t("hero_section:treatment6"), title: t("hero_section:Ttitle6"), img: teeth1Meshaal.src, id: 6, desc: t("hero_section:Tdesc6")
    },
    {
      treatment: t("hero_section:treatment7"), title: t("hero_section:Ttitle7"), img: teeth2Ali.src, id: 7, desc: t("hero_section:Tdesc7")
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

    return (
      <button className='main_btn' onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }



  // Dialog MUI
  const [openVid, setOpenVid] = useState(false);



  const handleClickOpenVid = () => {
    setOpenVid(true);
  };
  const handleCloseVid = () => {
    setOpenVid(false);
  };



  const BootstrapDialogVid = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },

    backgroundColor: '#00000073',
    '.MuiModal-backdrop': {
      position: 'static',

    },
    '.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
      boxShadow: '0 0 0 0',
      width: '100% !important',
      minWidth: '100% !important',
      maxWidth: '100% !important',
      background: 'transparent !important',
      backgroundColor: 'transparent !important',
    },
    '.css-uhb5lp': {
      width: '100% !important',
      minWidth: '100% !important',
      maxWidth: '100% !important',
      background: 'transparent !important',
      backgroundColor: 'transparent !important',

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
        <div className={styles.hero_container} id={router.locale === 'tr' && styles.hero_container_tr}>
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


            <Box sx={{ display: 'flex', alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'center' }, justifyContent: { xs: 'flex-start', sm: 'flex-start', md: '', lg: '' }, flexDirection: { xs: 'row', sm: 'row', md: 'row', lg: 'row' } }}>

              <div className={styles.start}>
                <div className={styles.get_started_btn}>
                  <Link href='/quote'>
                    <button>{t("most_popular:get_started")}</button>
                  </Link>
                </div>
              </div>

              <div className={styles.more}>
                <a onClick={handleClickOpenVid}>
                  <div className={styles.fade}>
                    <Puff
                      height="35"
                      width="35"
                      radius={'6'}
                      color="#ffffff"
                      ariaLabel="puff-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />

                  </div>
                  <HiPlay />
                  <button>{t("hero_section:watch_video")}</button>
                </a>


                <BootstrapDialogVid
                  onClose={handleCloseVid}
                  aria-labelledby="customized-dialog-title"
                  open={openVid}
                >
                  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseVid} />

                  <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{
                      width: '100%', height: '500px',
                      marginTop: '10px',
                      marginBottom: '10px',
                      'iframe': {
                        height: { xs: '300px', sm: '300px', md: '450px', lg: '500px', xlg: '500px' }
                      }

                    }}>
                      <iframe width="100%" src="https://www.youtube.com/embed/daQ9rUzX8wY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </Box>


                  </DialogContent>
                </BootstrapDialogVid>
              </div>



            </Box>

          </div>

          <Box sx={showCard ? { bottom: { xs: '-170px', sm: '-170px', md: 0, lg: 0, xlg: 0 } } : { bottom: { xs: '-80px', sm: '-80px', md: 0, lg: 0, xlg: 0 } }} className={styles.slider_container}>
            <Carousel
              breakPoints={breakPoints}
              itemsToScroll={1}
              renderArrow={myArrow}
            >
              {cards.map((card, index) => (
                <>
                  <div className={styles.box} key={index} onClick={() => setShowCard((prev) => !prev)}>
                    <div className={styles.box_header}>
                      <div className={styles.img_container}>
                        <Image width={80} height={80} src={card.img} alt={card.treatment} />
                      </div>
                      <div className={styles.title}>
                        <Typography variant="h6">{card.title}</Typography>

                        <div className={styles.link}>
                          <Link href='/'>{card.treatment}</Link>
                        </div>

                        <div className={styles.rating}>
                          <Rating name="read-only" readOnly defaultValue={5} size="small" />
                          {/* <span className={styles.reviews_num}>90 Reviews</span> */}
                        </div>


                      </div>
                    </div>

                    <Box dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`} className={styles.desc} sx={showCard === false && {
                      overflow: 'hidden',
                      display: '-webkit-box',
                      '-webkit-box-orient': 'vertical',
                      '-webkit-line-clamp': { xs: 2, sm: 2, md: 5, lg: 5, xlg: 5 },
                      'white-space': 'pre-wrap',
                      '-webkit-line-clamp': { xs: '2', sm: '2', md: '5', lg: '5', xlg: '5' }

                    }} >
                      <Typography>
                        {card.desc}
                      </Typography>
                    </Box>

                  </div>
                </>
              ))}
            </Carousel>

          </Box>

        </div>
      </Container>

      <Search />

    </section >
  )
}

export default Hero