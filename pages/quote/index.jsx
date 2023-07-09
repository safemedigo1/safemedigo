import React, { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, Typography, } from '@material-ui/core';
import { useRouter } from 'next/router';
import imgs from "../../assets/constants/imgs";
import styles from './index.module.scss'
import Image from 'next/image';
import CloseIcon from "@mui/icons-material/Close";
import { FaArrowLeft } from 'react-icons/fa';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { datePicker } from '@material-ui/pickers';
import dayjs from 'dayjs';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import QuoteContext from '../QuoteContext';
// 
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import AuthCode from 'react-auth-code-input';
import { motion } from "framer-motion";
import { BsCheckLg } from 'react-icons/bs';
import Link from 'next/link';
import ProgressBar from "@ramonak/react-progress-bar";
import { Container } from '@mui/material';


const quote = () => {
  const { logo, } = imgs;
  const router = useRouter()
  const { pathname, query } = router
  const [step, setStep] = useState(1);


  const [selectedDate, setSelectedDate] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [quote, setQuote] = React.useState('HELLOE');
  const [phoneNum, setPhoneNum] = React.useState();

  const [result, setResult] = useState();

  const [asp, setAsp] = useState(false);

  const handleOnChange = (res) => {
    setResult(res);
  };

  const handleAsp = () => {
    setAsp(true)
    setTimeValue(null)
    setStep(step + 2);
  }

  function handleGoBack() {
    router.back()
  }

  const treatments = [
    { title: 'Hair Transplant' },
    { title: 'Dental' },
    { title: 'General Check Ups' },
    { title: 'Fertility Treatments' },
    { title: 'Weight Loss' },
    { title: 'Liposuction' },
    { title: 'Plastic Surgery' },
    { title: 'Joint Replacement' },
    { title: 'Prostate Surgery' },
    { title: 'Spine Surgery' },
    { title: 'Penile Prosthesis' },
    { title: 'Coronary Artery' },
  ]


  const nextStep = (e) => {
    e.preventDefault();
    {
      step !== 6
      setStep(step + 1);
    }


  };

  const prevStep = () => {
    if (step === 5 && asp === true) {
      setStep(step - 2);
    } else {
      setStep(step - 1);
    }

  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (step === 7) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }

  }, [step, router,]);


  const handleBlur = () => {
    document.activeElement.blur();
  };



  // useEffect(() => {
  //   if (asp) {
  //     setStep(step + 1)
  //   }
  // }, [asp])

  useEffect(() => {
    if (selectedDate !== null) {
      setStep(step + 1)
    }
  }, [selectedDate])

  useEffect(() => {
    if (timeValue !== null) {
      const timer = setTimeout(() => {
        setStep(step + 1)
      }, 1000);

      return () => {
        clearTimeout(timer);
      };

    }
  }, [timeValue])

  // Dagte Range







  return (
    <>
      {step <= 5 &&
        <div className={styles.progressBar}>
          <ProgressBar
            completed={step}
            bgColor="#00ccb5"
            height="8px"
            isLabelVisible={false}
            maxCompleted={5}
            borderRadius="5px"
          />
        </div>
      }

    </>

  )
}

export default quote
