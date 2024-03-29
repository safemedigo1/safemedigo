import React from 'react'
import { Container, Typography } from "@mui/material";
import { PageHeader, SecNavbar } from '@/components';
import { ContactDetails, Help, WhySafemedigo } from '@/components/Home';
import imgs from "../../assets/constants/imgs";
import styles from "./index.module.scss";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

const AboutUs = (props) => {
  const { t } = useTranslation();
  const router = useRouter();

  const { author, youComeFirst,
    safeHealthcare,
    allInclusiveCare,
    stressFreeTreatment,

    dash_aboutus_1,
    dash_aboutus_2,
    dash_aboutus_3,
  } = imgs;

  const aboutUs = [
    { id: 1, title: t('about_us_page:healthcare'), desc: 'Health Care Is Not Cheap. Quality Health Care Is Even More Expensive, But With Us As Your Entrusted Healthcare Guider, We Will Find You The Most Affordable And Flexible Rate To Your Fondness. We Are Aware With The Many Exploitation Schemes Going On In The Healthcare Provision Field And Would Want Our Patients To Avoid Getting Duped Into Either Paying False Figures Or Getting Below Par Treatment', img: safeHealthcare.src, icon: dash_aboutus_1.src },

    { id: 2, title: 'You Come First', desc: 'We have identified the following safety elements to ensure the patient gets the kind of treatment they deserve: Highly reviewed experts, Modern healthcare facilities, First-class medical services, Satisfactory patient feedback, Affordable treatment charges and Clarity concerning all matters.', img: youComeFirst.src, icon: dash_aboutus_2.src },

    { id: 3, title: 'Stress Free Treatment', desc: 'When it comes to treatment, Safemedigo representatives strive to get you a specified fit establishment that allows you to be in your comfort zone. Safemedigo works round the clock to get timely treatment appointments for the patient; they`ll be given full decision-making authority. All in all, we will pave way for you to access the highest quality healthcare available that suits all your specifications from resources, comfort, appointment schedules, location, just to mention a few.', img: stressFreeTreatment.src, icon: dash_aboutus_3.src },

    { id: 4, title: 'All Inclusive Care', desc: 'Our service will leave the patient with a personal feel as we will not abandon them halfway. Get all your medical information without the hustle and at no cost. Count on us for full board support that will cover all your medical needs under one umbrella, the Safemedigo umbrella.', img: allInclusiveCare.src },


  ]

  // const SafeHealthcare = aboutUs.filter((item) => item.title === 'Safe Healthcare')
  const YouComeFirst = aboutUs.filter((item) => item.title === 'You Come First')
  const StressFreeTreatment = aboutUs.filter((item) => item.title === 'Stress Free Treatment')
  const AllInclusiveCare = aboutUs.filter((item) => item.title === 'All Inclusive Care')

  const doctors = [
    { name: 'Dr Majd Khaled', desc: 'Head Physician & Managing Director, Special Clinic For Plastic Surgery', img: author.src },
    { name: 'Dr Majd Khaled', desc: 'Head Physician & Managing Director, Special Clinic For Plastic Surgery', img: author.src },
    { name: 'Dr Majd Khaled', desc: 'Head Physician & Managing Director, Special Clinic For Plastic Surgery', img: author.src },
    { name: 'Dr Majd Khaled', desc: 'Head Physician & Managing Director, Special Clinic For Plastic Surgery', img: author.src },
  ]

  const team = [
    { name: 'Majd Khaled', desc: 'Medical Content Writer', img: author.src },
    { name: 'Name', desc: 'Medical Content Writer And Reviewer', img: author.src },
    { name: 'Majd Khaled', desc: 'Medical Content Writer', img: author.src },
    { name: 'name', desc: 'Medical Content Writer And Reviewer', img: author.src },
    { name: 'Majd Khaled', desc: 'Medical Content Writer', img: author.src },

  ]

  const patientMangers = [
    { name: 'Majd Khaled', desc: 'Name@Safemedigo.Com', img: author.src },
    { name: 'Name', desc: 'Name@Safemedigo.Com', img: author.src },
    { name: 'Majd Khaled', desc: 'Name@Safemedigo.Com', img: author.src },
    { name: 'name', desc: 'Name@Safemedigo.Com', img: author.src },
    { name: 'Majd Khaled', desc: 'Name@Safemedigo.Com', img: author.src },
  ]




  return (
    <>
      <SecNavbar />
      <PageHeader />

      <section id={styles.about_us} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.boxes_container}>

            <div className={styles.SafeHealthcare} >
              <div className={styles.text_container} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {t('about_us_page:healthcare_title')}
                  </Typography>
                </div>

                <div className={styles.desc} >
                  <Typography>
                    {t('about_us_page:healthcare_desc')}
                  </Typography>
                </div>
              </div>

              <div className={styles.img_container}>
                <Image width={200} height={200} src={aboutUs[0].img} alt="" />
                <div className={styles.icon_container}>
                  <Image height={100} src={aboutUs[0].icon} alt="" width={100} />

                </div>
              </div>
            </div>

            <div className={styles.YouComeFirst}>
              <div className={styles.text_container} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {t('about_us_page:come_first_title')}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {t('about_us_page:come_first_desc')}

                  </Typography>
                </div>
              </div>
              <div className={styles.img_container}>
                <Image height={100} src={YouComeFirst[0].img} alt="" width={100} />
                <div className={styles.icon_container}>
                  <Image height={100} src={YouComeFirst[0].icon} alt="" width={100} />

                </div>
              </div>
            </div>

            <div className={styles.StressFreeTreatment}>
              <div className={styles.text_container} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {t('about_us_page:treatment_title')}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {t('about_us_page:treatment_desc')}
                  </Typography>
                </div>
              </div>
              <div className={styles.img_container}>
                <Image height={100} src={StressFreeTreatment[0].img} alt="" width={100} />
                <div className={styles.icon_container}>
                  <Image height={100} src={StressFreeTreatment[0].icon} alt="" width={100} />

                </div>
              </div>
            </div>

            <div className={styles.AllInclusiveCare}>
              <div className={styles.text_container} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
                <div className={styles.title}>

                  <Typography variant='h3'>
                    {t('about_us_page:inclusive_care_title')}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {t('about_us_page:inclusive_care_desc')}
                  </Typography>
                </div>
              </div>
              <div className={styles.img_container}>
                <Image height={100} src={AllInclusiveCare[0].img} alt="" width={100} />
              </div>
            </div>


          </div>
        </Container>
      </section>

      <section id={styles.who_is_safemedigo} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.title}>
              <Typography variant='h2'>{t('about_us_page:who_is_safemedigo_title')}</Typography>
            </div>

            <div className={styles.desc}>
              <Typography>{t('about_us_page:who_is_safemedigo_desc')}</Typography>

            </div>



          </div>
        </Container>
      </section>

      <Help />

      <WhySafemedigo />

      <section id={styles.founders} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.title}>
              <Typography variant='h2'>
                {t('about_us_page:FOUNDERS_title')}
              </Typography>
              <Typography>
                {t('about_us_page:FOUNDERS_desc')}
              </Typography>
            </div>
            <div className={styles.boxes_container}>
              <div className={styles.founder}>
                <div className={styles.img_container}>
                  <Image height={100} src={author.src} alt="" width={100} />
                </div>

                <div className={styles.name}>
                  <Typography>Founder Name</Typography>
                </div>

                <div className={styles.job}>
                  <Typography>CEO & Founder</Typography>
                </div>
              </div>
            </div>
          </div>

        </Container>

      </section>

      <section id={styles.medical_councilors} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.title}>
              <Typography variant='h2'>                {t('about_us_page:medical_councilors_title')}
              </Typography>
            </div>

            <div className={styles.desc}>
              <Typography>{t('about_us_page:medical_councilors_desc')} </Typography>
            </div>

            <div className={styles.boxes_container}>
              {doctors.map((doctor, idx) => (
                <div className={styles.box} key={idx}>
                  <div className={styles.img_container}>
                    <Image height={100} src={doctor.img} alt="" width={100} />
                  </div>
                  <div className={styles.name}>
                    <Typography>{doctor.name}</Typography>
                  </div>
                  <div className={styles.desc}>
                    <Typography>{doctor.desc}</Typography>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      <section id={"team"} className={styles.team} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.title}>
              <Typography variant='h2'>{t('about_us_page:safemdigo_team_title')}
              </Typography>
            </div>
            <div className={styles.boxes_container}>
              {team.map((team, idx) => (
                <div className={styles.box} key={idx}>
                  <div className={styles.img_container}>
                    <Image height={100} src={team.img} alt="" width={100} />
                  </div>
                  <div className={styles.name}>
                    <Typography>{team.name}</Typography>
                  </div>
                  <div className={styles.desc}>
                    <Typography>{team.desc}</Typography>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id={styles.patient_mangers} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.title}>
              <Typography variant='h2'>{t('about_us_page:PATIENT_MANAGERS_title')}</Typography>
            </div>
            <div className={styles.boxes_container}>
              {patientMangers.map((team, idx) => (
                <div className={styles.box} key={idx}>
                  <div className={styles.img_container}>
                    <Image height={100} src={team.img} alt="" width={100} />
                  </div>
                  <div className={styles.name}>
                    <Typography>{team.name}</Typography>
                  </div>
                  <div className={styles.desc}>
                    <Typography>{team.desc}</Typography>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactDetails />

    </>
  )
}

export default AboutUs



export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['most_popular', 'home', 'navbar', 'hero_section', 'search_section', 'help_section', 'why_safemedigo', 'treatments_section', 'most_popular', 'patient_stories', 'safety_standards_section', 'why_turky_section', 'contact_details', 'sec_navbar', 'page_header_comp', 'about_us_page', 'Footer'])),
    }
  }
}