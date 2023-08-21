import React from 'react'
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import { useRouter } from 'next/router';


const WhyTurkey = ({ blogSlugData }) => {
  const { t } = useTranslation();
  const router = useRouter()


  return (
    <section id={styles.why_turky} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <Container sx={{ maxWidth: '1239px', }} maxWidth={false}>

        <div className={styles.section_container}>

          <div className={styles.text_container}>
            <div className={styles.title}>
              <Link href='/blogs/The-Comprehensive-Guide-to-Medical-Tourism-in-Turkey:-Why-Travel-for-Treatment'>{t('why_turky_section:title')}</Link>
            </div>

            <div className={styles.img_sec_container}>
              <Image width={722} height={100} src={blogSlugData?.image} alt={blogSlugData?.title} />
            </div>

            <div className={styles.desc}>
              <Typography>{blogSlugData?.briefContent}</Typography>
            </div>

            <div className={styles.writer}>
              <div className={styles.img_container}>
                <Image width={86} height={86} src={blogSlugData?.publisherImage} alt={blogSlugData?.publisher} />
              </div>

              <div className={styles.text_container}>
                <div className={styles.name}>
                  <Typography>
                    {blogSlugData?.publisher}
                  </Typography>
                </div>

                <div className={styles.date}>
                  <Typography>{blogSlugData?.date}</Typography>
                </div>

              </div>
            </div>
            <div className={styles.tags}>
              {blogSlugData?.tags?.map((tag, index) => (
                <div className={styles.tag} key={index}>
                  <Link href={`/tags/${tag?.slug}`}>
                    <button>{tag?.tagName}</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>


        </div>

      </Container>

    </section>
  )
}

export default WhyTurkey