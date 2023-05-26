import React from 'react'
import imgs from "../../../assets/constants/imgs";
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import { useRouter } from 'next/router';


const WhyTurkey = () => {
  const { t } = useTranslation();
  const { author, why_turcky_img } = imgs;
  const router = useRouter()

  return (
    <section id={styles.why_turky} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <Container sx={{ maxWidth: '1239px', }} maxWidth={false}>

        <div className={styles.section_container}>

          <div className={styles.text_container}>
            <div className={styles.title}>
              <Link href='q&a'>{t('why_turky_section:title')}</Link>
            </div>

            <div className={styles.img_sec_container}>
              <Image width={722} height={100} src={why_turcky_img.src} alt="" />
            </div>

            <div className={styles.desc}>
              <Typography>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos </Typography>
            </div>

            <div className={styles.writer}>
              <div className={styles.img_container}>
                <Image width={100} height={100} src={author.src} alt="" />
              </div>

              <div className={styles.text_container}>
                <div className={styles.name}>
                  <Typography>
                    Writer Name
                  </Typography>
                </div>

                <div className={styles.date}>
                  <Typography>November 4, 2020</Typography>
                </div>

              </div>
            </div>
            <div className={styles.tags}>
              <div className={styles.tag}>
                <Link href='/'>
                  <button>treatment</button>
                </Link>
              </div>
              <div className={styles.tag}>
                <Link href='/'>
                  <button>treatment</button>
                </Link>
              </div>
              <div className={styles.tag}>
                <Link href='/'>
                  <button>treatment</button>
                </Link>
              </div>
              <div className={styles.tag}>
                <Link href='/'>
                  <button>treatment</button>
                </Link>
              </div>
            </div>
          </div>


        </div>

      </Container>

    </section>
  )
}

export default WhyTurkey