import React from 'react'
import styles from './index.module.scss'
import { Container, Typography, Box } from '@mui/material';
import imgs from "../../../assets/constants/imgs";
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router';
import Image from 'next/image';


const Help = () => {
  const { t } = useTranslation();
  const { QualityGuarantee, OnGuide, GetQuote, TravelAssist } = imgs;
  const router = useRouter()

  const cards = [
    { title: t('help_section:qoute_title'), desc: t('help_section:qoute_desc'), img: GetQuote.src },
    { title: t('help_section:travel_title'), desc: t('help_section:travel_desc'), img: TravelAssist.src },
    { title: t('help_section:guide_title'), desc: t('help_section:guide_desc'), img: OnGuide.src },
    { title: t('help_section:quality_title'), desc: t('help_section:quality_desc'), img: QualityGuarantee.src },
  ]

  return (
    <Box id={styles.help} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}
      sx={router.pathname === '/' | router.pathname === '/ar' | router.pathname === '/en' | router.pathname === '/tr' ? { marginTop: { xs: "125px", sm: '125px', md: "20px", lg: '200px', xlg: '200px' }, paddingTop: { xs: "22px", sm: "22px", md: "22px", }, } : { paddingTop: "0px", marginTop: "0px" }}

    >
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.section_container}>
          <div className={styles.sec_title}>
            <Typography variant='h2'>{t('help_section:title')}</Typography>
          </div>
          <div className={styles.boxes_container}>
            {cards.map((card, index) => (
              <div className={styles.box} key={index}>
                <div className={styles.img_container}>
                  <Image width={100} height={100} src={card.img} alt="" />
                </div>
                <div className={styles.title}>
                  <Typography variant='h6'>{card.title}</Typography>
                </div>
                <div className={styles.desc}>
                  <Typography >{card.desc}</Typography>

                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>

    </Box >
  )
}

export default Help


