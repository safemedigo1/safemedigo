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
                      <Typography variant='h4'>{t('page_header_comp:how_it_works_title')} </Typography>
                      <Typography variant='h2'>{t('page_header_comp:how_it_works_desc')} </Typography>
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
                      <Typography variant='h4'> {t('page_header_comp:safety_standards_title')}</Typography>
                      <Typography variant='h2'>{t('page_header_comp:safety_standards_desc')}</Typography>
                    </>
                  }

                  {pathname === '/procedures&symptoms' | pathname === '/medicaldepartments/[slug]' | pathname === '/medicaldepartments/[slug]/[healthcase]' ?
                    <>
                      <Typography variant='h2'> {t('page_header_comp:procedures&symptoms_title')}</Typography>
                      <Typography variant='h4'>{t('page_header_comp:procedures&symptoms_desc')}</Typography>
                    </> : ""
                  }


                  {pathname.includes('/procedures&symptoms/') &&

                    <>
                      <Typography variant='h2'>{t("page_header_comp:procedures&symptoms_single_title")}</Typography>
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
                    <Box sx={{ display: 'flex', alignItmes: 'flex-start', width: '100%' }} className={styles.author_info} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`} >

                      <Box sx={{ display: 'flex', alignItmes: 'center' }} className={styles.review_by}>
                        <div className={styles.author_img}>
                          <img src={blog.reviewerImage} alt="" />
                        </div>
                        <div className={styles.info}>
                          <p>{blog?.reviewer}, {blog.reviewerJobTitle}</p>
                          <p className={styles.date}>{t('page_header_comp:posted')} {blog.date}</p>
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

                {pathname === ('/procedures&symptoms/[slug]') &&
                  <>
                    <Box sx={{ display: 'flex', alignItmes: 'flex-start', width: '100%' }} className={styles.author_info} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`} >

                      <Box sx={{ display: 'flex', alignItmes: 'center' }} className={styles.review_by}>
                        <div className={styles.author_img}>
                          <img src={author.src} alt="" />
                        </div>
                        <div className={styles.info}>
                          <p>Reviewer, Job Title</p>
                          <p className={styles.date}>{t('page_header_comp:posted')}  2023-04-10 08:05 PM

                          </p>
                        </div>
                      </Box>

                      <Box sx={{ display: 'flex', alignItmes: 'center' }} className={styles.review_by}>
                        <div className={styles.author_img}>
                          <img src={author.src} alt="" />
                        </div>
                        <div className={styles.info}>
                          <p>publisher, Job Title</p>
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
