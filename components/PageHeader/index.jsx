import React from "react";
import styles from "./index.module.scss";
import imgs from "../../assets/constants/imgs";
import { Container, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";


const PageHeader = ({ blog }) => {
  const router = useRouter();
  const { pathname } = router;
  const { design, designMobile, author } = imgs;
  const { t } = useTranslation();

  return (

    <>
      {pathname !== '/' &&
        <Box sx={
          pathname.includes('/blogs/') && {
            display: {
              xs: "none",
              sm: "none",
              lg: "block"
            }
          }} id={styles.blogs} dir={router.locale === 'ar' ? 'rtl' : 'ltr'} >
          <div className={styles.header_container}>

            <Container
              className={styles.sec_container}
              sx={{ maxWidth: "1239px" }}
              maxWidth={false}
            >
              <div className={styles.text_container}>
                <div className={styles.guide}>
                  {pathname === ('/') &&
                    <Typography variant='h4'>Home</Typography>
                  }

                  {pathname === ('/blogs/[slug]') &&
                    <Typography variant='h4' >
                      {blog.categoryName}
                    </Typography>
                  }

                </div>

                <div className={styles.title}>
                  {pathname === ('/blogs') | pathname === ('/blogs/page/[slug]') | pathname === ('/category/[slug]/page/[id]') | pathname === ('/tags/[slug]') ?
                    <>
                      <Typography variant='h4' >
                        {t('page_header_comp:blogs_title')}
                      </Typography>
                      <Typography variant='h2'>
                        {t('page_header_comp:blogs_desc')}
                      </Typography>
                    </>
                    : <></>}

                  {pathname === '/how-it-works' &&
                    <>
                      <Typography variant='h4'>How It Works</Typography>
                      <Typography variant='h2'>Get a breakdown of how we go through the complex process of matching the patient with the best suited healthcare facility for them.</Typography>
                    </>
                  }

                  {pathname === '/about-us' &&
                    <>
                      <Typography variant='h4'>{t('page_header_comp:title')}</Typography>
                      <Typography variant='h2'>{t('page_header_comp:desc')}</Typography>
                    </>
                  }

                  {pathname === '/safety-standards' &&
                    <>
                      <Typography variant='h4'>Safety Standards</Typography>
                      <Typography variant='h2'>We strictly work with healthcare facilities which are fully compliant with the international health providers standards. A step by step vetting process is conducted every year by our experienced team.</Typography>
                    </>
                  }

                  {pathname === '/procedures&symptoms' &&
                    <>
                      <Typography variant='h2'>All Medical Department</Typography>
                      <Typography variant='h4'>Procedures & Symptoms</Typography>
                    </>
                  }


                  {pathname.includes('/procedures&symptoms/') &&
                    <>
                      <Typography variant='h2'>TREATMENT GUIDE</Typography>
                      <Typography variant='h4'>Hair Transplantation</Typography>
                    </>
                  }

                  {pathname === ('/blogs/[slug]') &&
                    <Typography variant='h4' >
                      {blog?.title}
                    </Typography>
                  }
                </div>




                {pathname === ('/blogs/[slug]') &&
                  <>
                    <Box sx={{ display: 'flex', alignItmes: 'flex-start', width: '100%' }} >

                      <Box sx={{ display: 'flex', alignItmes: 'center', marginRight: '80px' }} className={styles.review_by}>
                        <div className={styles.author_img}>
                          <img src={blog.reviewerImage} alt="" />
                        </div>
                        <div className={styles.info}>
                          <p>{blog?.reviewer}, {blog.reviewerJobTitle}</p>
                          <p className={styles.date}> Posted {blog.date}</p>
                        </div>
                      </Box>

                      <Box sx={{ display: 'flex', alignItmes: 'center' }} className={styles.review_by}>
                        <div className={styles.author_img}>
                          <img src={blog.publisherImage} alt="" />
                        </div>
                        <div className={styles.info}>
                          <p>{blog?.publisher}, {blog.jobTitle}</p>
                        </div>
                      </Box>


                    </Box>

                  </>
                }

              </div>

              <div className={styles.img_container}>
                <div className={styles.desk_top}>
                  <img src={design.src} alt="" />
                </div>

                <div className={styles.mobile}>
                  <img src={designMobile.src} alt="" />
                </div>
              </div>
            </Container>
          </div >
        </Box >
      }

    </>

  );
};

export default PageHeader;
