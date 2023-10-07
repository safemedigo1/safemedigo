import { PageHeader, SecNavbar } from "@/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container, Typography, Dialog, DialogContent, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, DialogTitle, Rating } from '@mui/material';
import Link from 'next/link';
import styles from '../../hospitals/[slug]/index.module.scss';
import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft, FaUserAlt } from 'react-icons/fa'
import imgs from "../../../assets/constants/imgs";
import { consts } from 'react-elastic-carousel';
import Image from "next/image";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MedicalDepartments, MostPopular } from "@/components/Home";
import { useRouter } from "next/router";
import Hotles from "@/components/hospital/hotels";
import Visits from "@/components/hospital/hotels/Visits";
import { MdLocationOn } from 'react-icons/md'
import { FaShieldAlt } from 'react-icons/fa'
import BeforeAfter from '@/components/BeforeAfter'
import ClinicCards from '@/components/ClinicCards/index'
import axios from "axios";


const DoctorName = ({ dataDoctorSlug }) => {
  const { certeficate, post1 } = imgs;
  const cards = [
    { title: 'Patient name', img: certeficate.src, id: '1', desc: ' Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Consetetur Sadipscing Elitr, Sed Diam Nonumy  ' },
    { title: 'Patient name', img: certeficate.src, id: '2', desc: ' Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Consetetur Sadipscing Elitr, Sed Diam Nonumy  ' },
  ]

  const beforeCards = [
    {
      description: "Title", imgBefore: certeficate.src, imgAfter: certeficate.src

    },
    {
      description: "Title", imgBefore: certeficate.src, imgAfter: certeficate.src

    },
    {
      description: "Title", imgBefore: certeficate.src, imgAfter: certeficate.src

    },
    {
      description: "Title", imgBefore: certeficate.src, imgAfter: certeficate.src

    },
    {
      description: "Title", imgBefore: certeficate.src, imgAfter: certeficate.src

    },
  ]
  const router = useRouter();

  // BreakPoints
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1, showPagination: false },
  ])
  const [expanded, setExpanded] = useState(false);
  const [hospitalBreakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 2.5, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: true, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000, showArrows: false },
    { width: 900, pagination: false, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000 },

  ])
  const [similarDocs, setSimilarDocs] = useState([]);

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
        "OB/GYN specializes in women's health, encompassing reproductive organs, pregnancy, childbirth, and fertility treatments. They provide comprehensive care, including exams, diagnoses, treatments, deliveries, and fertility interventions. The goal is to support reproductive health, ensure safe pregnancies, promote wellness, and assist with fertility concerns."
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

  function createMarkup() {
    return { __html: decodeURI(dataDoctorSlug.about) };
  }

  useEffect(() => {
    getSimilarDocs();
  }, [])

  const getSimilarDocs = async () => {
    const similarDocs = await axios.post("https://api2.safemedigo.com/api/v1/Doctor/ListSimilarDoctors", {
      "lang": router.locale,
      "mainSpecializationIds": [1]
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).catch((error) => console.log(error))

    setSimilarDocs(similarDocs)
  }
  return (
    <>
      <SecNavbar />
      <PageHeader dataDoctorSlug={dataDoctorSlug} />

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
            src={dataDoctorSlug.image} alt={""} />
        </div>

        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>

          {dataDoctorSlug.isVerifid &&

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
          }



          <div className={styles.title}>
            <Typography variant="h3">
              {dataDoctorSlug.doctorLevel}.
              {dataDoctorSlug.firstName}
              {dataDoctorSlug.fatherName}
              {dataDoctorSlug.lastName}
            </Typography>
          </div>

          <div className={styles.text_container}>


            <div className={styles.name}>
              <Typography >
                {dataDoctorSlug?.doctorMainSpecializations[0]?.name}
              </Typography>
            </div>

            <div className={styles.rating}>
              <Rating defaultValue={dataDoctorSlug?.rating} size="small" readOnly />
              <span className={styles.reviews_num}>{dataDoctorSlug?.totalReviews}Reviews</span>
            </div>


            <div className={styles.location}>
              <MdLocationOn />
              <Typography >
                {dataDoctorSlug?.location}
              </Typography>
            </div>

            <div className={styles.boxes_container}>
              <div className={styles.box}>
                <div className={styles.num}>
                  <Typography>{dataDoctorSlug.lastYearPatients}</Typography>
                </div>
                <div className={styles.yearly}>
                  <Typography>Yearly patient</Typography>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.num}>
                  <Typography>{dataDoctorSlug.experienceYears}</Typography>
                </div>
                <div className={styles.yearly}>
                  <Typography>Exp. Years</Typography>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.num}>
                  <Typography>{dataDoctorSlug.doctorTreatments.length}</Typography>
                </div>
                <div className={styles.yearly}>
                  <Typography>Treatments Performed</Typography>
                </div>
              </div>

            </div>

            {dataDoctorSlug?.isOnline === true &&
              <div className={styles.button_container}>
                <button>Book Appointment</button>
              </div>
            }

          </div>

        </Container>
      </Box>



      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <section id='overview' className={styles.overview}>
          <div className={styles.text_inner}>
            <div
              id={"apply"}
              className="ck-content"
              dangerouslySetInnerHTML={createMarkup()}
              dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}
            />
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
                    {dataDoctorSlug?.doctorCertificates.map((card, index) => (
                      <>
                        <div className={styles.box} key={index} onClick={handleClickOpen}>
                          <div className={styles.title}>
                            <Typography variant="h6">{card.name} - {card.certificateDate}</Typography>
                          </div>
                          <div className={styles.boxes_container}>
                            <div className={styles.box_header}>
                              <div className={styles.img_container}>
                                <Image width={66.87} height={99.78} src={card?.image} alt="" />
                              </div>

                            </div>

                            <div className={styles.desc}>
                              <Typography>
                                {card.description}
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
                    {dataDoctorSlug.doctorLanguages.map((lang, idx) =>
                      <li key={idx}>{lang?.languageName}</li>
                    )}
                  </ul>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography variant={'h3'}>
                      Specialties
                    </Typography>
                  </div>
                  <ul>
                    {dataDoctorSlug?.doctorMainSpecializations.map((special, idx) =>
                      <li key={idx}>{special?.name}</li>
                    )}
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
                    Procedures & Clinical Interest

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


                    {dataDoctorSlug?.doctorProcedure?.map((procedure) => (
                      <>
                        <Typography variant="h5">{procedure.title}</Typography>
                        <ListItem variant='li' sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                          {procedure.name}
                        </ListItem  >
                      </>
                    ))}



                  </List>
                </AccordionDetails>

              </Accordion>
              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  marginTop: '8px',
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  sx={expanded !== 'panel2' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC', color: '#000000' }
                    : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel2d-content" id="panel2d-header">
                  <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                    Memberships

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

                    {dataDoctorSlug?.doctorMemberShip?.map((memberShip) => (
                      <>
                        <ListItem variant='li' sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                          <Typography variant="h5">{memberShip.memberShipName} ({memberShip.startdate} - {memberShip.endDate})</Typography>
                        </ListItem  >
                      </>
                    ))}



                  </List>
                </AccordionDetails>

              </Accordion>
              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  marginTop: '8px',
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  sx={expanded !== 'panel3' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC', color: '#000000' }
                    : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel3' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel3d-content" id="panel3d-header">
                  <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                    Education

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

                    {dataDoctorSlug?.doctorEducation?.map((education) => (
                      <>
                        <Typography variant="h5">{education.title} ({education.yearFrom} - {education.yearTo})</Typography>
                        <ListItem variant='li' sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                          {education.description}
                        </ListItem  >
                      </>
                    ))}


                  </List>
                </AccordionDetails>

              </Accordion>
              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  marginTop: '8px',
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                  sx={expanded !== 'panel5' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC', color: '#000000' }
                    : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel5' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel5d-content" id="panel5d-header">
                  <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                    Career

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

                    {dataDoctorSlug?.doctorCareer?.map((career) => (
                      <>
                        <Typography variant="h5">{career.title} ({career.yearFrom} - {career.yearTo})</Typography>
                        <ListItem variant='li' sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                          {career.description}
                        </ListItem  >
                      </>
                    ))}



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
              Media
            </Typography>
          </div>

          <div className={styles.boxes_container}>
            <div className={styles.text_container}>
              <div className={styles.title}>
                <Typography variant={'h4'}>
                  Media
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography sx={{
                  color: "var(--main-dark-color)",
                  fontSize: '18px',
                  fontWeight: "var(--font-sem-bold)",
                  fontFamily: "var(--open-sans-font)",
                  letterSpacing: '0',
                  marginRight: '20px'
                }}>
                  Here Some Of Media Materials Might Give You An Imagination Helps You To Get Closer By Your Feelings To What Is Doctor Offering And What He Is Into...
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


                {dataDoctorSlug?.doctorMedias.map((clinic, index) => (
                  <div onClick={() => handleImageClick(clinic.img)} className={styles.box} key={index}>
                    <div className={styles.img_container}>
                      <Image width={392} height={305} src={clinic.path} alt={clinic.title} />
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

      {/* Still under destructuin !!! */}
      <BeforeAfter beforeCards={beforeCards} />

      <Box sx={{ paddingTop: '38px' }}>
        <MostPopular similarDocs={similarDocs} doctorClinics={dataDoctorSlug} />
      </Box>

      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>


        <Box sx={{ marginTop: '38px', paddingBottom: '38px', display: 'flex', flexDirection: 'row' }}>
          <Box sx={{
            width: '29.6%', display: {
              xlg: 'block', lg: 'block', md: 'block',
              sm: 'none', xs: 'none'
            }
          }}>
            <div className="title">
              <h1>Similar Doctor</h1>
            </div>

            <div className={styles.desc}>
              <Typography sx={{
                color: "var(--main-dark-color)",
                fontSize: '18px',
                fontWeight: "var(--font-sem-bold)",
                fontFamily: "var(--open-sans-font)",
                letterSpacing: '0'

              }}>We Are An Independent Organisation And Only Ever Provide Fully Honest And Unbiased Information About Doctors That Have Been Thoroughly And Professionally Vetted.</Typography>
            </div>

          </Box>
          <ClinicCards similarDocs={similarDocs} />
        </Box>
      </Container >

    </>
  )
}

export default DoctorName


// export async function getStaticPaths() {
//   const resDoctorsSlugs = await fetch("https://api2.safemedigo.com/api/v1/Doctor/ListAllDoctorSlugs");
//   const dataDoctorsSlugs = await resDoctorsSlugs.json()

//   const paths = dataDoctorsSlugs?.map((data) => {
//     return {
//       params: { slug: data }
//     }
//   })


//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }


export async function getStaticPaths() {
  const resDoctorsSlugs = await fetch("https://api2.safemedigo.com/api/v1/Doctor/ListAllDoctorSlugs");
  const dataDoctorsSlugs = await resDoctorsSlugs.json();

  const paths = dataDoctorsSlugs.map((slug) => {
    return {
      params: { slug: slug }
    };
  });

  const validPaths = paths.map((path) => {
    return {
      ...path,
    };
  });

  return {
    paths: validPaths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ locale, params }) {
  const resDoctorSlug = await fetch("https://api2.safemedigo.com/api/v1/Doctor/GetDoctorBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "doctorSlug": params.slug,
      "lang": locale
    })
  })
  const dataDoctorSlug = await resDoctorSlug.json()

  return {
    props: {
      dataDoctorSlug,
      ...(await serverSideTranslations(locale, ["navbar", "proceduresSymptoms_single", 'Footer', 'most_popular'])),
    },
  };
}
