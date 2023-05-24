import React from 'react'
import imgs from "../../../assets/constants/imgs";
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router';
import Image from 'next/image';




const Safty = () => {
  const { t } = useTranslation();
  const { OurSafetyStandards00, OurSafterStanders01, left01,
    right01,
    right02,
    middle, left02, OurSafetyStandards002 } = imgs;

  const router = useRouter();
  return (
    <section id={styles.safty} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false}>
        <div className={styles.section_container} >
          <div className={styles.title} >
            <Typography variant='h2' >{t('safety_standards_section:title')}</Typography>
          </div>

          <div className={styles.sec_desc}>
            <Typography>{t('safety_standards_section:desc')}</Typography>

          </div>


          <div className={styles.content}>

            <div className={styles.text_container}>
              <div className={styles.right_side}>
                <Typography>
                  {t('safety_standards_section:feedback')}
                  <Image width={100} height={100} src={left01.src} className={styles.left1} alt="" />
                </Typography>
                <Typography>
                  {t('safety_standards_section:charges')}
                  <Image width={100} height={100} src={left02.src} className={styles.left2} alt="" />
                </Typography>
                <Typography>
                  {t('safety_standards_section:clarity')}
                </Typography>
              </div>

              <div className={styles.images_container}>
                <Image width={100} height={100} src={OurSafterStanders01.src} className={styles.logo} alt="" />
                <Image width={100} height={100} src={OurSafetyStandards00.src} className={styles.ground} alt="" />

                <div className={styles.hovered}>
                  <Image width={100} height={100} src={OurSafetyStandards002.src} alt="" />
                </div>
              </div>


              <div className={styles.left_side}>
                <Typography>
                  <Image width={100} height={100} src={right01.src} className={styles.right1} alt="" />

                  {t('safety_standards_section:experts')}
                </Typography>
                <Typography>
                  <Image width={100} height={100} src={right02.src} className={styles.right2} alt="" />
                  {t('safety_standards_section:modern')}
                </Typography>
                <Typography>
                  <Image width={100} height={100} src={middle.src} className={styles.middle} alt="" />
                  {t('safety_standards_section:medical_services')}
                </Typography>
              </div>
            </div>

            <div className={styles.desc}>
              <Typography>{t('safety_standards_section:desc')}</Typography>


              <div className={styles.list}>
                <ul>
                  <li>{t('safety_standards_section:feedback')}</li>
                  <li>{t('safety_standards_section:charges')}</li>
                  <li>{t('safety_standards_section:clarity')} </li>
                  <li>{t('safety_standards_section:modern')} </li>
                  <li>{t('safety_standards_section:medical_services')}</li>
                  <li>{t('safety_standards_section:experts')} </li>
                </ul>
              </div>
            </div>

            <div className={styles.btn_container}>
              <Link href='/safety-standards'>
                <button>{t('safety_standards_section:explore')} </button>
              </Link>
            </div>
          </div>


        </div>
      </Container>


    </section >
  )
}

export default Safty