import { PageHeader, SecNavbar } from '@/components'
import React from 'react'
import imgs from "../../assets/constants/imgs";
import styles from "./index.module.scss";
import { Container, Typography } from "@mui/material";
import { ContactDetails } from '@/components/Home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from 'next/image';

const SafetyStandards = () => {
  const { patientFeedback_img,
    clarityConcerning_img,
    firstClassMedical_img,
    modernHealthcare_img,
    reviewedExperts_img,
    treatmentCharges_img,

    dash_safety_1,
    dash_safety_2,
    dash_safety_3,
    dash_safety_4,
    dash_safety_5,

  } = imgs;

  const router = useRouter()
  const { t } = useTranslation()
  const safetyStandards = [
    { id: 1, title: 'Highly Reviewed Experts', img: reviewedExperts_img.src, icon: dash_safety_1.src },

    { id: 2, title: 'Modern Healthcare Facilities', img: modernHealthcare_img.src, icon: dash_safety_2.src },

    { id: 3, title: 'First-Class Medical Services', img: firstClassMedical_img.src, icon: dash_safety_3.src },

    {
      id: 4, title: 'Satisfactory Patient Feedback', img: patientFeedback_img.src, icon: dash_safety_4.src
    },
    { id: 5, title: 'Affordable Treatment Charges', img: treatmentCharges_img.src, icon: dash_safety_5.src },
    {
      id: 6, title: 'Clarity Concerning All Matters', img: clarityConcerning_img.src
    },


  ]

  const treatmentCharges = safetyStandards.filter((item) => item.title === 'Affordable Treatment Charges')
  const reviewedExperts = safetyStandards.filter((item) => item.title === 'Highly Reviewed Experts')
  const modernHealthcare = safetyStandards.filter((item) => item.title === 'Modern Healthcare Facilities')
  const firstClassMedicalServices = safetyStandards.filter((item) => item.title === 'First-Class Medical Services')
  const patientFeedback = safetyStandards.filter((item) => item.title === 'Satisfactory Patient Feedback')
  const clarityConcerning = safetyStandards.filter((item) => item.title === 'Clarity Concerning All Matters')

  return (
    <>
      <SecNavbar />
      <PageHeader />

      <section id={styles.safetyStandards}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.boxes_container}>

            <div className={styles.reviewedExperts}>
              <div className={styles.text_container} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {t('safety_standards_page:experts_title')}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {t('safety_standards_page:experts_descp1')}

                  </Typography>
                </div>

                <div className={styles.list}>
                  <ul>
                    <li>
                      {t('safety_standards_page:expertes_li_1')}
                    </li>

                    <li>
                      {t('safety_standards_page:expertes_li_2')}
                    </li>

                    <li>
                      {t('safety_standards_page:expertes_li_3')}
                    </li>

                    <li>
                      {t('safety_standards_page:expertes_li_4')}
                    </li>
                  </ul>

                  <div className={styles.list_title}>
                    <Typography>
                      {t('safety_standards_page:experts_descp2')}
                    </Typography>
                  </div>
                  <ul>
                    <li>
                      {t('safety_standards_page:expertes_li_5')}
                    </li>

                    <li>
                      {t('safety_standards_page:expertes_li_6')}
                    </li>

                    <li>
                      {t('safety_standards_page:expertes_li_7')}
                    </li>

                    <li>
                      {t('safety_standards_page:expertes_li_8')}
                    </li>
                  </ul>

                </div>
              </div>

              <div className={styles.img_container}>
                <Image width={315.91} height={100} src={reviewedExperts[0].img} alt="" />

                <div className={styles.icon_container}>
                  <Image width={100} height={100} src={reviewedExperts[0].icon} alt="" />
                </div>
              </div>
            </div>


            <div className={styles.modernHealthcare}>
              <div className={styles.text_container} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {t('safety_standards_page:healthcare_title')}
                  </Typography>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    {t('safety_standards_page:healthcare_desc1')}
                  </Typography>
                </div>

                <div className={styles.list}>
                  <div className={styles.list_title}>
                    <Typography>
                      {t('safety_standards_page:healthcare_desc2')}
                    </Typography>
                  </div>
                  <ul>
                    <li>
                      {t('safety_standards_page:healthcare_li_1')}
                    </li>

                    <li>
                      {t('safety_standards_page:healthcare_li_2')}
                    </li>
                    <li>
                      {t('safety_standards_page:healthcare_li_3')}
                    </li>


                  </ul>
                </div>

              </div>
              <div className={styles.img_container}>
                <Image width={100} height={100} src={modernHealthcare[0].img} alt="" />
                <div className={styles.icon_container}>
                  <Image width={100} height={100} src={modernHealthcare[0].icon} alt="" />
                </div>
              </div>
            </div>




            <div className={styles.firstClassMedicalServices}>
              <div className={styles.text_container} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {t("safety_standards_page:medical_services_title")}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {t("safety_standards_page:medical_services_desc1")}
                  </Typography>
                </div>
                <div className={styles.list}>
                  <div className={styles.list_title}>
                    <Typography>
                      {t("safety_standards_page:medical_services_desc2")}

                    </Typography>
                  </div>
                  <ul>
                    <li>
                      {t("safety_standards_page:medical_services_li_1")}

                    </li>
                    <li>
                      {t("safety_standards_page:medical_services_li_2")}

                    </li>
                    <li>
                      {t("safety_standards_page:medical_services_li_3")}

                    </li>
                    <li>
                      {t("safety_standards_page:medical_services_li_4")}

                    </li>
                    <li>
                      {t("safety_standards_page:medical_services_li_5")}

                    </li>
                    <li>
                      {t("safety_standards_page:medical_services_li_6")}

                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.img_container}>
                <Image width={100} height={100} src={firstClassMedicalServices[0].img} alt="" />
                <div className={styles.icon_container}>
                  <Image width={100} height={100} src={firstClassMedicalServices[0].icon} alt="" />
                </div>
              </div>
            </div>


            <div className={styles.patientFeedback}>
              <div className={styles.text_container} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
                <div className={styles.title}>

                  <Typography variant='h3'>
                    {t("safety_standards_page:patient_feedback_title")}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {t("safety_standards_page:patient_feedback_desc1")}

                  </Typography>
                </div>
                <div className={styles.list}>
                  <div className={styles.list_title}>
                    <Typography>
                      {t("safety_standards_page:patient_feedback_desc2")}

                    </Typography>
                  </div>
                  <ul>
                    <li>
                      {t("safety_standards_page:patient_feedback_li_1")}
                    </li>
                    <li>
                      {t("safety_standards_page:patient_feedback_li_2")}
                    </li>
                    <li>
                      {t("safety_standards_page:patient_feedback_li_3")}
                    </li>
                    <li>
                      {t("safety_standards_page:patient_feedback_li_4")}
                    </li>
                    <li>
                      {t("safety_standards_page:patient_feedback_li_5")}
                    </li>
                    <li>
                      {t("safety_standards_page:patient_feedback_li_6")}
                    </li>
                    <li>
                      {t("safety_standards_page:patient_feedback_li_7")}
                    </li>


                  </ul>
                </div>
              </div>
              <div className={styles.img_container}>
                <Image width={100} height={100} src={patientFeedback[0].img} alt="" />
                <div className={styles.icon_container}>
                  <Image width={100} height={100} src={patientFeedback[0].icon} alt="" />
                </div>
              </div>
            </div>

            <div className={styles.treatmentCharges}>
              <div className={styles.text_container} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {t("safety_standards_page:treatment_title")}
                  </Typography>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    {t("safety_standards_page:treatment_desc1")}
                  </Typography>
                </div>

                <div className={styles.list}>
                  <div className={styles.list_title}>
                    <Typography>
                      {t("safety_standards_page:treatment_desc2")}
                    </Typography>
                  </div>
                  <ul>
                    <li>
                      {t("safety_standards_page:treatment_li_1")}
                    </li>

                    <li>
                      {t("safety_standards_page:treatment_li_2")}
                    </li>
                    <li>
                      {t("safety_standards_page:treatment_li_3")}
                    </li>
                    <li>
                      {t("safety_standards_page:treatment_li_4")}
                    </li>
                    <li>
                      {t("safety_standards_page:treatment_li_5")}
                    </li>
                    <li>
                      {t("safety_standards_page:treatment_li_6")}
                    </li>

                  </ul>
                </div>
              </div>

              <div className={styles.img_container}>
                <Image width={100} height={100} src={treatmentCharges[0].img} alt="" />

                <div className={styles.icon_container}>
                  <Image width={100} height={100} src={treatmentCharges[0].icon} alt="" />
                </div>
              </div>
            </div>


            <div className={styles.clarityConcerning}>
              <div className={styles.text_container} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {t("safety_standards_page:clarity_title")}
                  </Typography>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    {t("safety_standards_page:clarity_desc1")}
                  </Typography>
                </div>

                <div className={styles.list}>
                  <div className={styles.list_title}>
                    <Typography>
                      {t("safety_standards_page:clarity_desc2")}
                    </Typography>
                  </div>

                  <ul>
                    <li>
                      {t("safety_standards_page:clarity_li_1")}
                    </li>

                    <li>
                      {t("safety_standards_page:clarity_li_2")}
                    </li>
                    <li>
                      {t("safety_standards_page:clarity_li_3")}
                    </li>

                  </ul>
                </div>

              </div>

              <div className={styles.img_container}>
                <Image width={100} height={100} src={clarityConcerning[0].img} alt="" />
              </div>
            </div>








          </div>
        </Container>
      </section>

      <ContactDetails />
    </>
  )
}

export default SafetyStandards

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['most_popular', 'navbar', 'sec_navbar', 'page_header_comp', 'safety_standards_page', 'contact_details'])),
    }
  }
}