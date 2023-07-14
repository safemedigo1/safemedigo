import { Container } from '@mui/material'
import React from 'react'
import styles from '../index.module.scss'
import { useRouter } from "next/router";
import Link from 'next/link';
import { useTranslation } from "react-i18next";


const SecNavbar = ({ categorySlug, slug, category, currentPage, blog, tag, how_it_works, treatmentName }) => {
  const router = useRouter();
  const { pathname } = router;
  const { t } = useTranslation();


  return (
    <>
      <nav id={styles.sec_nav} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>

          {pathname === '/blogs' || pathname === '/blogs/page/[slug]' ?
            <>
              <Link href='/'> {t('sec_navbar:home')} </Link>  <Link href='/blogs' className={styles.active}>/{t('sec_navbar:blogs')}</Link>
            </> : <></>
          }

          {pathname === '/category/[slug]/page/[id]' &&
            <>
              <Link href='/'> {t('sec_navbar:home')} </Link>  <Link href='/blogs' > /{t('sec_navbar:blogs')}</Link>
              <Link href={`/category/${categorySlug}/page/${currentPage}`} className={styles.active} > /{slug}</Link>
            </>
          }

          {pathname === '/safety-standards' &&
            <>
              <Link href='/'> {t('sec_navbar:home')} </Link>  <Link href='/safety-standards' className={styles.active} > /{t('sec_navbar:safety_standards')}</Link>
            </>
          }

          {pathname === '/how-it-works' &&
            <>
              <Link href='/'> {t('sec_navbar:home')} </Link>  <Link href='/how-it-works' className={styles.active} > /{t('sec_navbar:how_it_works')} </Link>
            </>
          }

          {pathname === '/about-us' &&
            <>
              <Link href='/'> {t('sec_navbar:home')} </Link>  <Link href='/about-us' className={styles.active} > /{t('sec_navbar:about_us')}</Link>
            </>
          }

          {pathname === '/procedures&symptoms' | pathname === '/medicaldepartments/[slug]' | pathname === '/medicaldepartments/[slug]/[healthcase]' ?
            <>
              <Link href='/'> {t('sec_navbar:home')} </Link>  <Link href='/medicaldepartments/Obstetrics-and-gynecology' className={styles.active} > /{t('sec_navbar:procedures&symptoms')}</Link>
            </> : ""
          }

          {pathname === ('/procedures&symptoms/[slug]') ?
            <>
              <Link href='/'> {t('sec_navbar:home')} </Link>  <Link href='/medicaldepartments/Obstetrics-and-gynecology' > /{t('sec_navbar:procedures&symptoms')}</Link>
              <Link href={router.asPath} className={styles.active} > /{treatmentName}</Link>
            </> : ""
          }

          {pathname === ('/blogs/[slug]') &&
            <>
              <Link href='/'> {t('sec_navbar:home')} </Link> <Link href='/blogs' > /{t('sec_navbar:blogs')} </Link>  <Link href='#' className={styles.active}> /{blog.title}</Link>
            </>
          }

          {pathname === ('/tags/[slug]') &&
            <>
              <Link href='/'> {t('sec_navbar:home')} </Link> <Link href='/blogs' > /Blogs</Link>  <Link href='#' className={styles.active}> /{tag}</Link>
            </>
          }

          {pathname === ('/hospitals/[slug]') &&
            <>
              <Link href='/'> {t('sec_navbar:home')}  </Link> <Link href='/' >/ Acibadem Hospital In Taksim</Link>
            </>
          }
          {pathname === ('/doctor/[slug]') &&
            <>
              <Link href='/'> {t('sec_navbar:home')}  </Link> <Link href='/' >/ Profile</Link>
            </>
          }
        </Container>
      </nav>
    </>
  )
}

export default SecNavbar