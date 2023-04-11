import React from 'react'
import styles from './index.module.scss'
import { Container, Typography, } from '@mui/material';
import { OurSafetyStanders, RealReviewsPatientStories, PatientSupport, BestTreatmentPackages } from "../../../assets/svgs/HoverIcons"
import Link from 'next/link';
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const WhySafemedigo = () => {
  const { t } = useTranslation();




  const cards = [
    { title: t('why_safemedigo:reveiws_title'), desc: t('why_safemedigo:reveiws_desc'), img: <RealReviewsPatientStories /> },
    { title: t('why_safemedigo:package_title'), desc: t('why_safemedigo:package_desc'), img: <BestTreatmentPackages /> },
    { title: t('why_safemedigo:support_title'), desc: t('why_safemedigo:support_desc'), img: <PatientSupport /> },
    { title: t('why_safemedigo:standards_title'), desc: t('why_safemedigo:standards_desc'), img: <OurSafetyStanders /> },
  ]


  const router = useRouter();
  const { pathname } = router;

  return (
    <section id={styles.why_safemedigo} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.section_container}>
          <div className={styles.sec_title}>
            <Typography variant='h2'>{t('why_safemedigo:title')}</Typography>
          </div>
          <div className={styles.boxes_container}>
            {cards.map((card, index) => (
              <div className={styles.box} key={index}>
                <div className={styles.img_container}>
                  {card.img}
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

          {pathname !== '/about-us' &&
            <div className={styles.btn_contianer}>
              <Link href='/about-us'>
                <button>{t('why_safemedigo:find_more')}</button>
              </Link>
            </div>

          }
        </div>
      </Container>

    </section >)
}

export default WhySafemedigo