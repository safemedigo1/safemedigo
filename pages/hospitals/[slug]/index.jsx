import { PageHeader, SecNavbar } from "@/components";
import InnerPageNavbar from "@/components/Navbar/InnerPageNavbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container, Typography, Dialog, DialogContent, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, DialogTitle, Rating, } from '@mui/material';
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
import Packages from "@/components/Packages";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Hospital = ({ dataHospitalSlug, dataHospitalLang, dataHospitalCertificatest, dataHospitalMedia, dataHospitalVisits, dataHospitalHotels, dataHospitalService }) => {
  const { certeficate, post1 } = imgs;
  const { t } = useTranslation();
  const router = useRouter();
  const cards = [
    { title: 'Patient name', img: certeficate.src, id: '1', desc: ' Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Consetetur Sadipscing Elitr, Sed Diam Nonumy  ' },
    { title: 'Patient name', img: certeficate.src, id: '2', desc: ' Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Consetetur Sadipscing Elitr, Sed Diam Nonumy  ' },

  ]
  const [selectedCard, setSelectedCard] = useState(null)

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

  console.log(dataHospitalService, "dataHospitalService")

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


  // Dialog MUI
  const [open, setOpen] = useState(false);

  const handleClickOpen = (card) => {
    setOpen(true);
    setSelectedCard(card)
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
      <SecNavbar dataHospitalSlug={dataHospitalSlug} />
      <PageHeader dataHospitalSlug={dataHospitalSlug} />
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
            src={dataHospitalSlug.logo} alt={""} />
        </div>

        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
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

          <div className={styles.title}>
            <Typography variant="h3">
              {dataHospitalSlug.name}
            </Typography>
          </div>
          <div className={styles.text_container}>


            <div className={styles.name}>
              <Typography >
                {dataHospitalSlug.hospitalKindName}
              </Typography>
            </div>

            <div className={styles.rating}>
              <Rating name="read-only" defaultValue={dataHospitalSlug.rate} size="small" />
              <span className={styles.reviews_num}>{dataHospitalSlug.totalReviews}  {t("hospital:Reviews")}</span>
            </div>


            <div className={styles.location}>
              <MdLocationOn />
              <Typography >
                {dataHospitalSlug.address}
              </Typography>
            </div>

            <div className={styles.boxes_container}>
              <div className={styles.box}>
                <div className={styles.num}>
                  <Typography>{dataHospitalSlug.yearlyPatient}</Typography>
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

        </Container>
      </Box>

      {selectedImage !== null &&
        <div className={styles.layer} />
      }
      <InnerPageNavbar />

      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <section id='overview' className={styles.overview} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
          <div className={styles.text_inner}>
            <Typography>
              {dataHospitalSlug.breif}
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
                    {dataHospitalCertificatest?.map((card, index) => (
                      <>
                        <div className={styles.box} key={index} onClick={() => handleClickOpen(card)}>
                          <div className={styles.title}>
                            <Typography variant="h6">{card.name}</Typography>
                          </div>
                          <div className={styles.boxes_container}>
                            <div className={styles.box_header}>
                              <div className={styles.img_container}>
                                <Image width={66.87} height={99.78} src={card.image} alt={card.name} />
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
                      </>
                    ))}

                    {selectedCard != null &&
                      <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                      >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                          {selectedCard.name}
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
                            <Image width={66.87} height={99.78} src={selectedCard.image} alt={selectedCard.name} />
                          </Box>

                          <Typography gutterBottom>
                            {selectedCard.description}
                          </Typography>

                        </DialogContent>
                      </BootstrapDialog>
                    }

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
                    {dataHospitalLang?.map((lang, idx) =>
                      <>
                        <li key={idx}>{lang.languageName}</li>,
                      </>
                    )}

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
                    <li>{dataHospitalSlug.bedsCount}</li>

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
                    Services

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
                    {dataHospitalService.map((service, idx) =>
                      <ListItem variant='li' key={idx} sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                        {service.name}

                      </ListItem  >
                    )}



                  </List>
                </AccordionDetails>

              </Accordion>
            </div>

          </div>

        </section>
      </Container>

      <section id='reviews' className={styles.reviews} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <Container className={`${router.locale === 'ar' ? 'mycontainer_ar' : 'mycontainer'}`} sx={{ maxWidth: '1239px', paddingLeft: { sm: "0px", md: "0px" }, }} maxWidth={false} >
          <div className={styles.title_mob}>
            <Typography variant={'h4'}>
              {dataHospitalSlug.name}
            </Typography>
          </div>

          <div className={styles.boxes_container}>
            <div className={styles.text_container}>
              <div className={styles.title}>
                <Typography variant={'h4'}>
                  {dataHospitalSlug.name}
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography>
                  Acıbadem Taksim Is Designed As General-Purpose Hospital On An Indoor Area Of Approximately 24 Thousand Square Meters.
                </Typography>
              </div>
            </div>
            <div className={styles.slider_container}>
              <Box sx={


                {
                  boxShadow: "inset -20px 0px 12px #eef5f5"
                }
              } className={styles.shadow_box} />
              <Carousel
                breakPoints={hospitalBreakPoints}
                itemsToScroll={1}
                renderArrow={myArrow}
                isRTL={router.locale === 'ar' ? true : false}
              >
                {dataHospitalMedia?.map((clinic, index) => (
                  <div onClick={() => handleImageClick(clinic.path)} className={styles.box} key={index}>
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

      {/* <section id='doctors'>
        <MedicalDepartments hospiTalMedicalDepartment={hospiTalMedicalDepartment} />
      </section> */}

      <section id='testimonials' className={styles.testimonials} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
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
                <iframe width="560" height="315" src={dataHospitalSlug?.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </div>

        </Container>
      </section>

      <Hotles hotels={dataHospitalHotels} />
      <Visits vistis={dataHospitalVisits} />

      <Packages />

    </>
  )
}

export default Hospital


export async function getStaticPaths() {
  const resHospitalsSlugs = await fetch("https://api2.safemedigo.com/api/v1/Hospital/ListAllHospitalSlugs");
  const dataHospitalsSlugs = await resHospitalsSlugs.json()

  const paths = dataHospitalsSlugs?.map((data) => {
    return {
      params: { slug: data }
    }
  })


  return {
    paths,
    fallback: 'blocking',
  };
}


export async function getStaticProps({ locale, params }) {
  const resHospitalSlug = await fetch("https://api2.safemedigo.com/api/v1/Hospital/GetHospitalBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "hospitalSlug": params.slug,
      "lang": locale
    })
  })
  const dataHospitalSlug = await resHospitalSlug.json()

  const resHospitalLang = await fetch("https://api2.safemedigo.com/api/v1/Hospital/GetHospitalLanguagesBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "hospitalSlug": params.slug,
      "lang": locale
    })
  })
  const dataHospitalLang = await resHospitalLang.json()

  const resHospitalCertificatest = await fetch("https://api2.safemedigo.com/api/v1/Hospital/GetHospitalCertificatestBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "hospitalSlug": params.slug,
      "lang": locale
    })
  })
  const dataHospitalCertificatest = await resHospitalCertificatest.json()

  const resHospitalMedia = await fetch("https://api2.safemedigo.com/api/v1/Hospital/GetHospitalMediaBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "hospitalSlug": params.slug,
      "lang": locale
    })
  })
  const dataHospitalMedia = await resHospitalMedia.json()

  const resHospitalVisits = await fetch("https://api2.safemedigo.com/api/v1/Hospital/GetHospitalHotspotsBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "hospitalSlug": params.slug,
      "lang": locale
    })
  })
  const dataHospitalVisits = await resHospitalVisits.json()

  const resHospitalHotels = await fetch("https://api2.safemedigo.com/api/v1/Hospital/GetHospitalHotelsBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "hospitalSlug": params.slug,
      "lang": locale
    })
  })
  const dataHospitalHotels = await resHospitalHotels.json()

  const resHospitalService = await fetch("https://api2.safemedigo.com/api/v1/Hospital/GetHospitalServiceBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "hospitalSlug": params.slug,
      "lang": locale
    })
  })
  const dataHospitalService = await resHospitalService.json()



  return {
    props: {
      dataHospitalSlug,
      dataHospitalLang,
      dataHospitalService,
      dataHospitalCertificatest,
      dataHospitalMedia,
      dataHospitalVisits,
      dataHospitalHotels,
      ...(await serverSideTranslations(locale, ["navbar", "hospital", "proceduresSymptoms", "sec_navbar", "proceduresSymptoms_single", 'Footer', 'most_popular'])),
    },
  };
}
