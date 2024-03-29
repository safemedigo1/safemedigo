import React, { useContext } from "react";
import styles from "./index.module.scss";
import imgs from "../../assets/constants/imgs";
import { Container, Typography, Box, Rating } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import { MdLocationOn } from 'react-icons/md'
import { FaShieldAlt } from 'react-icons/fa'
import Link from "next/link";
import { AppContext } from '@/components/AppContext';


const PageHeader = ({ blog, treatment, dataHospitalSlug, dataDoctorSlug, dataDoctorMainSpecializations, dataDoctorTreatments }) => {
  const context = useContext(AppContext);
  const { compareStep } = context;
  const router = useRouter();

  const { pathname } = router;
  const { design, designMobile, post1, userimg } = imgs;
  const { t } = useTranslation();

  return (
    <>
      {pathname !== '/' &&
        <>
          {
            pathname === ('/hospitals/[slug]') &&
            <Box sx={{
              display: {
                xs: "none",
                sm: "none",
                lg: "block"
              }

            }} id={styles.hospital} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
              <Container className={styles.sec_container}
                sx={{ maxWidth: "1239px" }}
                maxWidth={false}>
                <div className={styles.boxes_container}>
                  <div className={styles.hospital_box}>
                    <div className={styles.main_img}>
                      <Image width={400} height={260} src={dataHospitalSlug.logo} alt={dataHospitalSlug.name} />
                    </div>

                    <div className={styles.text_container}>

                      {dataHospitalSlug.isVerified &&

                        <div className={styles.header}>

                          <div className={styles.icon_container}>
                            <FaShieldAlt />
                          </div>
                          <div className={styles.text}>
                            <Typography>
                              {t("most_popular:verified")}
                            </Typography>
                          </div>

                        </div>
                      }

                      <div className={styles.name}>
                        <Typography variant="h3">
                          {dataHospitalSlug.name}
                        </Typography>
                      </div>
                      <div className={styles.location}>
                        <MdLocationOn />
                        <Typography >
                          {dataHospitalSlug.address}
                        </Typography>
                      </div>
                      {/* <div className={styles.rating}>
                        <Rating name="read-only" defaultValue={dataHospitalSlug.totalReviews} size="small" readOnly />
                        <span className={styles.reviews_num}>{dataHospitalSlug.totalReviews} {t("hospital:Reviews")}
                        </span>
                      </div> */}

                      <div className={styles.category}>
                        <Typography>
                          {dataHospitalSlug.hospitalKindName}
                        </Typography>
                      </div>

                    </div>
                  </div>



                  <div className={styles.info}>
                    <div className={styles.header}>

                      <Typography variant="h4">
                        {dataHospitalSlug.isActive === true ? t("hospital:online_appointment_available") : t("hospital:offline_appointment_available")}
                      </Typography>
                    </div>
                    <div className={styles.boxes_container}>
                      <div className={styles.box}>
                        <div className={styles.num}>
                          <Typography>{dataHospitalSlug?.yearlyPatient}</Typography>
                        </div>
                        <div className={styles.yearly}>
                          <Typography>{t("hospital:patient")}</Typography>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.num}>
                          <Typography>{dataHospitalSlug.foundedYear}</Typography>
                        </div>
                        <div className={styles.yearly}>
                          <Typography>{t("hospital:year")}</Typography>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.num}>
                          <Typography>{dataHospitalSlug.employeesCount}</Typography>
                        </div>
                        <div className={styles.yearly}>
                          <Typography>{t("hospital:Doctors_and_employees")}</Typography>
                        </div>
                      </div>

                    </div>

                    <div className={styles.button_container}>
                      <Link href={'/quote'}>
                        <button>{t("hospital:Book")}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </Box>
          }
          {
            pathname === ('/doctor/[slug]') &&
            <Box sx={{
              display: {
                xs: "none",
                sm: "none",
                lg: "block"
              }

            }} id={styles.hospital} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
              <Container className={styles.sec_container}
                sx={{ maxWidth: "1239px" }}
                maxWidth={false}>
                <div className={styles.boxes_container}>
                  <div className={styles.hospital_box}>
                    <div className={styles.main_img}>
                      <Image width={400} height={240} src={dataDoctorSlug?.image} alt={""} />
                    </div>

                    <div className={styles.text_container}>
                      <div className={styles.header}>
                        {dataDoctorSlug.isVerifid &&
                          <>
                            <div className={styles.icon_container}>
                              <FaShieldAlt />
                            </div>
                            <div className={styles.text}>
                              <Typography>
                                {t("most_popular:verified")}
                              </Typography>
                            </div>
                          </>
                        }
                      </div>

                      <div className={styles.name}>
                        <Typography variant="h3">
                          {`${dataDoctorSlug.firstName} ${dataDoctorSlug.fatherName} ${dataDoctorSlug.lastName}`}

                        </Typography>
                      </div>
                      <div className={styles.location}>
                        <MdLocationOn />
                        <Typography >
                          {dataDoctorSlug?.location}
                        </Typography>
                      </div>
                      {/* <div className={styles.rating}>
                        <Rating name="read-only" defaultValue={dataDoctorSlug?.rating} size="small" readOnly />
                        <span className={styles.reviews_num}>{dataDoctorSlug?.totalReviews} Reviews</span>
                      </div> */}

                      <div className={styles.category}>
                        <Typography>
                          {dataDoctorMainSpecializations[0]?.name}
                        </Typography>
                      </div>

                    </div>
                  </div>

                  <div className={styles.info}>
                    <div className={styles.header}>
                      {dataDoctorSlug.isOnline === true ? t("hospital:online_appointment_available") : t("hospital:offline_appointment_available")}
                    </div>
                    <div className={styles.boxes_container}>
                      <div className={styles.box}>
                        <div className={styles.num}>
                          <Typography>{dataDoctorSlug.lastYearPatients}</Typography>
                        </div>
                        <div className={styles.yearly}>
                          <Typography>{t("most_popular:PatientsTreatedLastYear")}</Typography>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.num}>
                          <Typography>{dataDoctorSlug.experienceYears}</Typography>
                        </div>
                        <div className={styles.yearly}>
                          <Typography>{t("most_popular:yearsOfExp")}</Typography>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.num}>
                          <Typography>{dataDoctorTreatments?.length}</Typography>
                        </div>
                        <div className={styles.yearly}>
                          <Typography>{t("most_popular:treatmentsCount")}</Typography>
                        </div>
                      </div>

                    </div>

                    {dataDoctorSlug?.isOnline === true &&
                      <div className={styles.button_container}>
                        <Link href={'/quote'}>
                          <button>{t("hospital:Book")}</button>
                        </Link>
                      </div>
                    }

                  </div>
                </div>
              </Container>
            </Box>
          }


          {pathname !== ('/hospitals/[slug]') && pathname !== ('/doctor/[slug]') &&
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
                          <Typography variant='h4'>{treatment?.treatmentName}</Typography>
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
                              <Image width={100} height={100} src={blog.reviewerImage} alt="" />
                            </div>
                            <div className={styles.info}>
                              <Link href={'/about-us#team'} style={{ cursor: 'pointer' }}>

                                <p>{blog?.reviewer}, {blog.reviewerJobTitle}</p>
                                <p className={styles.date}>{t('page_header_comp:posted')} {blog.date}</p>
                              </Link>
                            </div>
                          </Box>

                          <Box sx={{ display: 'flex', alignItmes: 'center' }} className={styles.review_by}>
                            <div className={styles.author_img}>
                              <Image width={100} height={100} src={blog.publisherImage} alt="" />
                            </div>
                            <div className={styles.info}>

                              <Link href={'/about-us#team'} style={{ cursor: 'pointer' }}>

                                <p>{blog?.publisher}, {blog.jobTitle}</p>
                              </Link>
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
                              {treatment?.reviewerImage === null ? <Image width={100} height={100} src={userimg.src} alt="" /> : <img width={100} height={100} src={treatment?.reviewerImage} alt="" />}
                            </div>
                            <div className={styles.info}>
                              <Link href={'/about-us'} style={{ cursor: 'pointer' }}>

                                <p>{treatment?.reviewer}, {treatment?.reviewerJobTitle}</p>
                                <p className={styles.date}>{t('page_header_comp:posted')}  {treatment?.reviewerDateStr}
                                </p>
                              </Link>
                            </div>
                          </Box>

                          <Box sx={{ display: 'flex', alignItmes: 'center' }} className={styles.review_by}>
                            <div className={styles.author_img}>
                              {treatment?.publisherImage === null ? <Image width={100} height={100} src={userimg.src} alt={treatment?.publisherName} /> : <img s width={100} height={100} src={treatment?.publisherImage} alt="" />}
                            </div>
                            <div className={styles.info}>
                              <Link href={'/about-us'} style={{ cursor: 'pointer' }}>
                                <p>{treatment?.publisherName} , {treatment?.publisherJobTitle}</p>
                              </Link>
                            </div>
                          </Box>


                        </Box>

                      </>
                    }

                  </div>




                  {pathname !== ('/hospitals/[slug]') && pathname !== ('/doctor/[slug]') &&
                    < div className={styles.img_container}>
                      <div className={styles.desk_top}>
                        <Image width={100} height={100} src={design.src} alt="" />
                      </div>

                      <div className={styles.mobile}>
                        <Image width={100} height={100} src={designMobile.src} alt="" />
                      </div>
                    </div>
                  }



                </Container>
              </div >
            </Box >
          }

        </>


      }



    </>

  );
};

export default PageHeader;
