import { Container } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import imgs from '../../assets/constants/imgs'
import styles from './index.module.scss'
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router'



const Footer = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { logoFooter,
    facebook,
    instagram,
    youtube,
    twitter,
    author
  } = imgs

  const socialLinks = [
    { link: 'https://twitter.com/safemedigo', img: twitter },
    { link: 'https://www.facebook.com/Safemedigo', img: facebook },
    { link: 'https://www.instagram.com/safemedigo/', img: instagram },
    { link: 'https://www.youtube.com/@safemedigo', img: youtube },
  ]

  const contactLinks = [
    {
      title: t('Footer:WHO_WE_ARE'),
      links: [
        {
          link: t('Footer:Safety_Standards'),
          ref: "/safety-standards"
        },
        {
          link: t('Footer:How_It_Works'),
          ref: "/how-it-works"
        },
        {
          link: t('Footer:About_Us'),
          ref: "/about-us"
        },
        {
          link: t('Footer:Contact_Us'),
          ref: "#contact-us"
        },

      ]
    },


    {
      title: t('Footer:WHY_SAFEMEDIGO'),
      links: [
        {
          link: t('navbar:patients_reviews'),
          ref: "/reviews  "
        },
        {
          link: t('navbar:beforeafter'),
          ref: "/beforeafter"
        },
        {
          link: t('navbar:patients_stories'),
          ref: "/patients_stories"
        },
        {
          link: t('navbar:doctor_Q_A'),
          ref: "/doctor_Q_A"
        },
        {
          link: t('navbar:ask_a_doctor'),
          ref: "/ask_a_doctor"
        },
        {
          link: t('navbar:start_your_review'),
          ref: "/start_your_review"
        },
        {
          link: t('Footer:E_Medical_history_record'),
          ref: "/E_Medical_history_record"
        },

      ]
    },


    {
      title: t('Footer:Our_Tailored_Medical_services'),
      links: [
        {
          link: t('Footer:Get_a_Quote'),
          ref: "/Quote"
        },
        {
          link: t('Footer:Get_Budget_Friendly_Operation'),
          ref: "/Quote"
        },
        {
          link: t('Footer:Personalized_Medical_Planning'),
          ref: "/Quote"
        },
        {
          link: t('Footer:Patient_Assistance_Program'),
          ref: "/Quote"
        },
        {
          link: t('Footer:Specialized_Treatment_Coordination'),
          ref: "/Quote"
        },
        {
          link: t('Footer:Get_a_Second_Opinion'),
          ref: "/Quote"
        },
        {
          link: t('Footer:Language_Interpretation_Services'),
          ref: "/Quote"
        },
        {
          link: t('Footer:Get_a_Post_Treatment_Care'),
          ref: "/Quote"
        },
        {
          link: t('Footer:Telemedicine_Consultations'),
          ref: "/Quote"
        },
        {
          link: t('Footer:Medical_Records_Management'),
          ref: "/Quote"
        },
        {
          link: t('Footer:Wellness_and_Preventive_Care'),
          ref: "/Quote"
        },
      ]
    },

    {
      title: t('Footer:POPULAR_TREATMENTS'),
      links: [
        {
          link: t('Footer:Hair_transplant'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:hollywood_smile'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:dental_implants'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:Liposuction'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:gastric_sleeve'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:IVF'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:Vision_correction'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:coronary_artery'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:Joints_replacement'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:Spine_surgeries'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:Prostate_surgeries'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
        {
          link: t('Footer:Penile_prosthesis'),
          ref: "/procedures&symptoms/FUE-Hair-Transplant-"
        },
      ]
    },

  ]

  return (
    <>
      <footer id={styles.footer} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
          <div className={styles.logo_footer}>
            <Link href='/'>
              <Image
                src={logoFooter.src}
                alt="Safemedigo"
                width={100}
                height={100}
              />
              <Typography variant='h4' >Safemedigo</Typography>
            </Link>
          </div>

          <section className={styles.info_section}>
            <div className={styles.links_container}>
              <div className={styles.boxes}>

                {contactLinks.map((contactLink, idx) => (
                  <>
                    <div className={styles.box} key={idx}>
                      <div className={styles.box_title}>
                        <Typography variant='h6'>{contactLink.title}</Typography>
                      </div>
                      <div className={styles.box_link}>
                        <ul>
                          {contactLink.links.map((link, index) => (
                            <li>
                              <Link href={link.ref}>
                                {link.link}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

          </section>

          <hr />

          <section className={styles.about_section}>
            <div className={styles.about_us}>
              <Typography variant="h6">
                Medical Travel Specialist <br />
                Certified Online Security
              </Typography>
            </div>

            <div className={styles.social_links}>
              {socialLinks.map((link, idx) => (
                <>
                  <div className={styles.link} key={idx}>
                    <Link href={link.link} target='_blanck'>
                      <Image
                        src={link.img.src}
                        alt={link.link}
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </section>
        </Container>
      </footer>


      <Grid id={styles.footer_nav}>
        <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
          <Box display='flex' alignItems='center' justifyContent='space-between'>
            <Box display='flex' className={styles.patient}>
              <div className={styles.img_container}>
                <Image src={author.src} alt="" width={100}
                  height={100} />
              </div>

              <div className={styles.doc_data}>
                <div className={styles.doc_job}>
                  <Link href='/'>
                    <Typography variant='h6'>{t("Footer:patient_manager")}</Typography>
                  </Link>

                </div>
                <div className={styles.doc_name}>
                  <Link href='/'>
                    <Typography variant='h6'>name</Typography>
                  </Link>

                </div>
              </div>
            </Box>


            <Box display='flex'
              className={styles.btns_container}>

              <div className={styles.contact}>
                <Link href='/'>
                  <button>Contact us</button>
                </Link>
              </div>

              <div className={styles.quote}>
                <Link href='/'>
                  <button>Get A Quote</button>
                </Link>
              </div>

            </Box>
          </Box>
        </Container>
      </Grid>
    </>

  )
}

export default Footer
