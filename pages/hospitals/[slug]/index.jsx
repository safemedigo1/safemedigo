import { PageHeader, SecNavbar } from "@/components";
import InnerPageNavbar from "@/components/Navbar/InnerPageNavbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container, Typography, Dialog, DialogContent, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, DialogTitle, Rating } from '@mui/material';
import Link from 'next/link';
import styles from './index.module.scss';
import Carousel from 'react-elastic-carousel';
import { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaUserAlt } from 'react-icons/fa'
import imgs from "../../../assets/constants/imgs";
import { consts } from 'react-elastic-carousel';
import Image from "next/image";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MedicalDepartments } from "@/components/Home";
import { useRouter } from "next/router";
import Hotles from "@/components/hospital/hotels";
import Visits from "@/components/hospital/hotels/Visits";
import { MdLocationOn } from 'react-icons/md'
import { FaShieldAlt } from 'react-icons/fa'


const Hospital = () => {
  const { certeficate, post1, why_turcky_img } = imgs;
  const router = useRouter();
  const cards = [
    { title: 'Patient name', img: certeficate.src, id: '1', desc: ' Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Consetetur Sadipscing Elitr, Sed Diam Nonumy  ' },
    { title: 'Patient name', img: certeficate.src, id: '2', desc: ' Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Consetetur Sadipscing Elitr, Sed Diam Nonumy  ' },

  ]

  // BreakPoints
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1, showPagination: true },
  ])
  const [expanded, setExpanded] = useState(false);

  const [hospitalBreakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 2.5, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000 },

  ])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // Change Arrow in react-elastic-carousel Lirbrary
  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ?
      <div className='left_arrow'>
        <  FaChevronLeft />
      </div>

      :
      <div className='right_arrow'>
        <FaChevronRight />

      </div>

      ;

    return (
      <button className='main_btn' onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }

  const clinicData = [
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '1000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '2000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '3000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
    { title: 'Acibadem Hospital In Taksim', type: 'General Hospital', founded: '2020', doctors: '1000', yearly_patient: '1620', img: post1.src, employess: '8000' },
  ]
  // Dialog MUI
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  const hospiTalMedicalDepartment = [
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
    {
      departmentName
        :
        "Obstetrics and gynecology",
      description
        :
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns.\r\n\r\n\r\n\r\n\r\n"
      , id
        :
        1
      , image
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &.svg"
      , secondImage
        :
        "https://cp1.safemedigo.com//Images/DepartmentImages/Gynecology &-1.svg"
      , slug
        :
        "Obstetrics-and-gynecology"
    },
  ]

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SecNavbar />
      <PageHeader />
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            lg: "none"
          }
        }}
        id={styles.hospital_header} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className={styles.img_container}>
          <Image
            width={300}
            height={218}
            src={post1.src} alt={""} />
        </div>

        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.header}>
            <div className={styles.icon_container}>
              <FaShieldAlt />
            </div>
            <div className={styles.text}>
              <Typography>
                Safemedigo verified
              </Typography>
            </div>
          </div>

          <div className={styles.title}>
            <Typography variant="h3">
              Acibadem Hospital Taksim
            </Typography>
          </div>

          <div className={styles.text_container}>


            <div className={styles.name}>
              <Typography >
                Specializations Dermatologist
              </Typography>
            </div>

            <div className={styles.rating}>
              <Rating name="read-only" defaultValue={4} size="small" />
              <span className={styles.reviews_num}>90 Reviews</span>
            </div>


            <div className={styles.location}>
              <MdLocationOn />
              <Typography >
                Acıbadem Mah. Çeçen Sok. Istanbul, Turkey
              </Typography>
            </div>

            <div className={styles.boxes_container}>
              <div className={styles.box}>
                <div className={styles.num}>
                  <Typography>163</Typography>
                </div>
                <div className={styles.yearly}>
                  <Typography>Yearly patient</Typography>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.num}>
                  <Typography>2001</Typography>
                </div>
                <div className={styles.yearly}>
                  <Typography>Founded year</Typography>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.num}>
                  <Typography>1500</Typography>
                </div>
                <div className={styles.yearly}>
                  <Typography>Doctors & Employees</Typography>
                </div>
              </div>

            </div>

            <div className={styles.button_container}>
              <button>Book Appointment</button>
            </div>

          </div>

        </Container>
      </Box>

      {selectedImage !== null &&
        <div className={styles.layer} />
      }
      <InnerPageNavbar />

      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <section id='overview' className={styles.overview}>
          <div className={styles.text_inner}>
            <Typography>
              There Are Many Diseases And Disorders Of The Musculoskeletal System Under The Title Of Orthopedics And Traumatology. Treatment Of These Diseases Includes Medical And Surgical Methods. Medical Treatments Can Be Summarized As Drug Applications, Injections And Physiotherapy While Surgical Treatments Consist Of Many Methods Depending On The Severity And Urgency Of The Disease. Today, Specialization In Certain Subjects By Dividing Into Branches Among Orthopedic Surgeons Is Increasingly Common. The Aim Here Is That Patients Can Receive Service From A Specialist And Experienced Physician. Assoc. Dr. Mehmet Nuri Erdem Started His Orthopedic Career In Istanbul Florence Nightingale Hospital In 2003 And Has So Far Covered More Than 2000 Successful Surgeries And Many International And National Scientific Articles. For The Last 3 Years, He Has Been A Faculty Member At The University And Running His Own Clinic With His Team. This Team Consists Of Operating Room Nurses, Physiotherapists, Neuromonitorization Technicians And Polyclinic Assistants, All Of Whom Are Competent And Experienced Healthcare Professionals In Their Field. Our Clinic Provides Services In The Field Of Orthopedics, Especially Spine Surgery, Prosthetic Surgery And Sports Surgery. Spine Surgery Group Includes Deformities Such As Scoliosis, Kyphosis, Lumbar And Neck Hernias, Conditions Related To Spinal Calcification, Spine Fractures, Tumors And Infections. In Prosthetic Surgery, Especially The Knee And Hip Joint Prostheses And Their Revision, That Is Correction Operations, Can Be Considered. In Addition, We Provide Services In The Process Of Returning To Sports After Injuries And Physiotherapy Following, Especially Closed Surgeries Of The Knee Joint. In The Field Of Traumatology, We Treat All Bone Fractures In The Body Except Skull Bones. We, Accompanied By Our Expert Staff, Provide Services In All Stages Of Fracture Healing, Such As Conservative Or Surgical Treatment Of Fractures, Post-Treatment Bone Union And Physical Therapy To Restore The Joint Range Of Motion. Our Aim Is To Bring You Back To Your Health, By Taking All Innovative Approaches Into Consideration, To The Extent Of Our Experience And Skill, From The Moment You Apply To Us Until Your Treatment Ends.
            </Typography>
          </div>

          <div className={styles.info}>
            <div className={styles.boxes_container}>
              <div className={styles.certificates_boxes}>
                <div className={styles.title}>
                  <Typography variant={'h3'}>
                    Certificates & Awards
                  </Typography>
                </div>


                <div className={styles.slider_container}>
                  <Carousel
                    breakPoints={breakPoints}
                    itemsToScroll={1}
                    renderArrow={myArrow}
                    pagination={false}
                  >
                    {cards.map((card, index) => (
                      <>
                        <div className={styles.box} key={index} onClick={handleClickOpen}>
                          <div className={styles.title}>
                            <Typography variant="h6">Best Doctor Award - 2020</Typography>
                          </div>
                          <div className={styles.boxes_container}>
                            <div className={styles.box_header}>
                              <div className={styles.img_container}>
                                <Image width={66.87} height={99.78} src={card.img} alt="" />
                              </div>

                            </div>

                            <div className={styles.desc}>
                              <Typography>
                                Joint Commission International Accreditation And Certification Is Recognized As A Global Leader For Health Care Quality Of Care And Patient Safety. Joint Commission... READ ALL International Accreditation And Certification Is Recognized As A Global Leader For Health Care Quality Of Care And Patient Safety.
                              </Typography>

                              <button>READ ALL</button>
                            </div>
                          </div>

                        </div>
                        <BootstrapDialog
                          onClose={handleClose}
                          aria-labelledby="customized-dialog-title"
                          open={open}
                        >
                          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Best Doctor Award - 2020
                          </BootstrapDialogTitle>
                          <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{
                              width: '100%', height: '200px', margin: 'auto',
                              marginTop: '10px',
                              marginBottom: '20px',

                              '& img': {
                                objectFit: 'contain', width: '100%', height: '100%',
                              }
                            }}>
                              <Image width={66.87} height={99.78} src={card.img} alt="" />
                            </Box>

                            <Typography gutterBottom>
                              Joint Commission International Accreditation And Certification Is Recognized As A Global Leader For Health Care Quality Of Care And Patient Safety. Joint Commission... READ ALL International Accreditation And Certification Is Recognized As A Global Leader For Health Care Quality Of Care And Patient Safety.
                            </Typography>

                          </DialogContent>
                        </BootstrapDialog>
                      </>
                    ))}

                  </Carousel>
                </div>

              </div>
              <div className={styles.desc_boxes}>

                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography variant={'h3'}>
                      Languages
                    </Typography>
                  </div>

                  <ul>
                    <li>English,</li>
                    <li>Turkish,</li>
                    <li>English,</li>
                    <li>English,</li>
                    <li>Turkish,</li>
                    <li>English,</li>
                  </ul>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography variant={'h3'}>
                      Branches
                    </Typography>
                  </div>
                  <ul>
                    <li>3</li>
                  </ul>
                </div>


                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography variant={'h3'}>
                      Beds
                    </Typography>
                  </div>
                  <ul>
                    <li>20</li>

                  </ul>
                </div>



              </div>
            </div>

            <div className={styles.links}>
              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  sx={expanded !== 'panel1' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC', color: '#000000' }
                    : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel1d-content" id="panel1d-header">
                  <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                    Benefits

                  </Typography>
                </AccordionSummary>

                <AccordionDetails >

                  <List sx={{
                    listStyleType: 'disc',
                    padding: '0px',
                    '& .MuiListItem-root': {

                      listStylePosition: 'inside',
                      padding: '0px',
                    },
                  }}
                  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      text text text text text text text text text text text text text text text text text text text text text text
                    </ListItem  >



                  </List>
                </AccordionDetails>

              </Accordion>
            </div>

          </div>

        </section>
      </Container>

      <section id='reviews' className={styles.reviews}>
        <Container className={`${router.locale === 'ar' ? 'mycontainer_ar' : 'mycontainer'}`} sx={{ maxWidth: '1239px', paddingLeft: { sm: "0px", md: "0px" }, }} maxWidth={false} >
          <div className={styles.title_mob}>
            <Typography variant={'h4'}>
              Acibadem Hospital Taksim
            </Typography>
          </div>

          <div className={styles.boxes_container}>
            <div className={styles.text_container}>
              <div className={styles.title}>
                <Typography variant={'h4'}>
                  Acibadem Hospital Taksim
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography>
                  Acıbadem Taksim Is Designed As General-Purpose Hospital On An Indoor Area Of Approximately 24 Thousand Square Meters.
                </Typography>
              </div>
            </div>
            <div className={styles.slider_container}>
              <Carousel
                breakPoints={hospitalBreakPoints}
                itemsToScroll={1}
                renderArrow={myArrow}
                isRTL={router.locale === 'ar' ? true : false}
              >
                {clinicData.map((clinic, index) => (
                  <div onClick={() => handleImageClick(clinic.img)} className={styles.box} key={index}>
                    <div className={styles.img_container}>
                      <Image width={392} height={305} src={clinic.img} alt={clinic.title} />
                    </div>
                  </div>
                ))}
              </Carousel>

              {selectedImage && (
                <div className={styles.fullscreen_container} onClick={handleCloseImage}>
                  <img src={selectedImage} className={styles.fullscreen_img} />
                  <CloseIcon />
                </div>
              )}


            </div>
          </div>
        </Container>
      </section>

      <section id='doctors'>
        <MedicalDepartments hospiTalMedicalDepartment={hospiTalMedicalDepartment} />
      </section>



      <section id='testimonials' className={styles.testimonials}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>

          <div className={styles.section_container}>

            <div className={styles.header}>
              <div className={styles.icon_container}>
                <FaUserAlt />
              </div>
              <div className={styles.title}>
                <Typography variant="h3">Testimonials</Typography>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.video_container}>
                <img src={why_turcky_img.src} alt="" />
              </div>
            </div>
          </div>

        </Container>
      </section>


      <Hotles />
      <Visits />


    </>
  )
}

export default Hospital

export async function getServerSideProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "proceduresSymptoms_single"])),
    },
  };
}
