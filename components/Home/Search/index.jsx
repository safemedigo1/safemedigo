import React, { useState } from 'react'
import styles from './index.module.scss'
import { Container, Typography, } from '@mui/material';
import Link from 'next/link';
import Carousel from 'react-elastic-carousel';
import imgs from "../../../assets/constants/imgs";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Image from 'next/image';


const Search = () => {
  const { t } = useTranslation();
  const { search } = imgs;

  const router = useRouter();

  const [breakPoints] = useState([
    { width: 1, itemsToShow: 2 },
    { width: 300, itemsToShow: 2 },
    { width: 400, itemsToShow: 3 },
    { width: 500, itemsToShow: 4 },
    { width: 800, itemsToShow: 4 },
    { width: 900, itemsToShow: 5.4 },
  ])

  const tags = [
    { tag: t("Footer:Hair_transplant"), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:hollywood_smile'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:dental_implants'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:Liposuction'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:gastric_sleeve'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:IVF'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:Vision_correction'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:coronary_artery'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:Joints_replacement'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:Spine_surgeries'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:Prostate_surgeries'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },
    { tag: t('Footer:Penile_prosthesis'), link: '/procedures&symptoms/FUE-Hair-Transplant-' },



  ];





  return (
    <div id={styles.search} className={router.locale === 'tr' && styles.tr_styles} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.searc_card}>
          <div className={styles.searc_input}>
            <Link href='/search'>
              <label htmlFor="">{t('search_section:title')}</label>
              <div className={styles.input_container}>
                <input type="text" disabled placeholder={t('search_section:place_holder')} />
                <Image width={100} height={100} src={search.src} alt="" />
              </div>
            </Link>
          </div>

          <div className={styles.tags}>
            <div className={styles.tags_container}>
              <div className={styles.title}>
                <Typography>{t('search_section:slider_title')}:</Typography>
              </div>
              {tags.map((tag, index) => (
                <Link href={tag.link} key={index}>
                  <button>
                    {tag.tag}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </Container>

      <div className={styles.tags_slider}>
        <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        </Container>

        <Container className={`${router.locale === 'ar' ? 'mycontainer_ar' : 'mycontainer'} `} sx={{ maxWidth: '1239px', display: 'flex', alignItems: 'center' }} maxWidth={false} >
          <div className={styles.title}>
            <Typography variant='h3'>{t('search_section:slider_title')}:</Typography>
          </div>
          <Carousel breakPoints={breakPoints}
            pagination={false}
            showArrows={false}
            itemsToScroll={1}
            transitionMs={500}
            isRTL={router.locale === 'ar' ? true : false}
          >
            {tags.map((tag, index) => (
              <Link href={tag.link} key={index}>
                <button>
                  {tag.tag}
                </button>
              </Link>
            ))}
          </Carousel>
        </Container>

      </div>
    </div>
  )
}

export default Search

