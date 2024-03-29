import React, { useContext } from 'react'
import styles from './index.module.scss'
import { Container, Link, Typography, } from '@mui/material';
import imgs from "../../../assets/constants/imgs";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Image from 'next/image';
import { AppContext } from '@/components/AppContext';



const TreatmentCategory = ({ dataMedicalDepartmentsHome }) => {
  const context = useContext(AppContext);
  const { treatmentSlugContexts } = context;
  const router = useRouter();

  const {
    Alternative,
    Bone_Marrow,
    Cardiology,
    Dentistry,
    Dont_See_What,
    Hair_Transplant,
    Ivf_ICSI,
    Laser_Eye_Surgery,
    Lung,
    Medical_Check,
    Neurology,
    OncologySurgeries,
    Orthopedics,
    Pediatrics,
    Plastic_Surgeries,
    Rhinoplasty,
    Tooth_Implants,
    Urology,
    Weight_Loss, Knee,


    Knee_1,
    Alternative_1,
    Bone_Marrow_1,
    Cardiology_1,
    Dentistry_1,
    Dont_See_What_1,
    Hair_Transplant_1,
    Ivf_ICSI_1,
    Laser_Eye_Surgery_1,
    Lung_1,
    Medical_Check_1,
    Neurology_1,
    Oncology_Surgeries_1,
    Orthopedics_1,

    Pediatrics_1,
    Plastic_Surgeries_1,

    Rhinoplasty_1,

    Tooth_Implants_1,
    Urology_1,
    Weight_Loss_1,
    Spine_Surgeries,
    Spine_Surgeries_1

  } = imgs;
  const { t } = useTranslation();

  const cards = [
    { link: '/procedures&symptoms/Hair-Transplant-(FUE-)  ', title: t("treatments_section:category1"), img: Hair_Transplant.src, hover_icon: Hair_Transplant_1.src },

    { link: '/procedures&symptoms/Dental-Implants', title: t("treatments_section:category2"), img: Tooth_Implants.src, hover_icon: Tooth_Implants_1.src },

    { link: '/medicaldepartments/Ophthalmology', title: t("treatments_section:category3"), img: Laser_Eye_Surgery.src, hover_icon: Laser_Eye_Surgery_1.src },

    { link: '/medicaldepartments/Orthopedic-and-trauma', title: t("treatments_section:category4"), img: Orthopedics.src, hover_icon: Orthopedics_1.src },

    { link: '/medicaldepartments/Orthopedic-and-trauma', title: t("treatments_section:category5"), img: Knee.src, hover_icon: Knee_1.src },

    { link: '/medicaldepartments/Orthopedic-and-trauma', title: t("treatments_section:category6"), img: Spine_Surgeries.src, hover_icon: Spine_Surgeries_1.src },

    { link: '/medicaldepartments/Obesity-Center', title: t("treatments_section:category7"), img: Weight_Loss.src, hover_icon: Weight_Loss_1.src },

    { link: '/medicaldepartments/Oncology', title: t("treatments_section:category8"), img: Weight_Loss.src, hover_icon: Weight_Loss_1.src },

    { link: '/procedures&symptoms/IVF', title: t("treatments_section:category9"), img: Ivf_ICSI.src, hover_icon: Ivf_ICSI_1.src },

    { link: '/medicaldepartments/Cardiology-', title: t("treatments_section:category10"), img: Cardiology.src, hover_icon: Cardiology_1.src },

    { link: '/medicaldepartments/Urology', title: t("treatments_section:category11"), img: Urology.src, hover_icon: Urology_1.src },

    { link: '/medicaldepartments/ENT', title: t("treatments_section:category12"), img: Plastic_Surgeries.src, hover_icon: Plastic_Surgeries_1.src },

    { link: '/medicaldepartments/Dentistry', title: t("treatments_section:category13"), img: Dentistry.src, hover_icon: Dentistry_1.src },

    { link: '/medicaldepartments/Dentistry', title: t("treatments_section:category14"), img: Dentistry.src, hover_icon: Dentistry_1.src },

    { link: '/medicaldepartments/-Check-Up-Center-', title: t("treatments_section:category15"), img: Medical_Check.src, hover_icon: Medical_Check_1.src },

    { link: '/quote', title: t("treatments_section:category16"), img: Dont_See_What.src, hover_icon: Dont_See_What_1.src },

  ]


  return (
    <section id={styles.treatment_category} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.section_container}>
          <div className={styles.sec_title}>
            <Typography variant='h2'>{t('treatments_section:title')}</Typography>
          </div>

          <div className={styles.boxes_container}>

            {cards?.map((card, index) => (
              <Link style={{ textDecoration: 'none' }} href={`${router.locale}/${card.link}`} className={styles.box} key={index}>
                <div className={styles.img_container}>
                  <Image width={100} height={100} className={styles.default_icon} src={card.img} alt="" />
                  <Image width={100} height={100} className={styles.hovered_icon} src={card.hover_icon} alt="" />
                </div>
                <div className={styles.title}>
                  <Typography variant='h6'>{card.title}</Typography>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.btn_contianer}>
            <Link href="/medicaldepartments/Obstetrics-and-gynecology">
              <button >{t('treatments_section:more')}</button>
            </Link>
          </div>
        </div>
      </Container>

    </section >)
}

export default TreatmentCategory 