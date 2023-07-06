import React, { useState } from 'react'
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

import { format } from 'date-fns';





const quote = () => {
  const { logo, } = imgs;
  const router = useRouter()
  const { pathname, query } = router
  const [step, setStep] = useState(3);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
    { title: 'Others' },
  ]


  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className={styles.card_wrapper}>

        <div className={styles.quote_card}>
          <div className={styles.header}>
            <button onClick={handleGoBack} className={styles.navbar__logo}>
              <Image
                src={logo.src}
                alt="Picture of the author"
                width={51.34}
                height={45}
              />
              <h1>Safemedigo</h1>
            </button>
            <div className={styles.close} onClick={handleGoBack}>
              <CloseIcon />
            </div>

            {step >= 2 &&
              <div className={styles.back} onClick={prevStep}>
                <Typography>
                  Back
                </Typography>
                <FaArrowLeft />
              </div>
            }

          </div>

          <div className={styles.desc}>
            <Typography>Hi, Thank You For Choosing Safemedigo For Your Healthcare Journey. We Prioritize Your Safety And Strive For A Smooth Experience.</Typography>
          </div>


          <div className={styles.steps}>
            <div className={styles.step}>
              <span>1</span>
            </div>
            <div className={styles.step}>
              <span>2</span>
            </div>
          </div>

          <div className={styles.question}>
            <Typography variant='h4'>
              {step === 1 &&
                "What Would You Like To Do?"
              }

              {step === 2 &&
                "Who Is This Treatment For?"
              }

            </Typography>
          </div>




          <form className={step === 2 && styles.form_2}>

            {step === 1 &&

              treatments.map((treatment) =>
                <>
                  <FormControlLabel required control={<Checkbox sx={{
                    color: '#004747',
                    '.Mui-checked': {
                      color: '#004747 ',
                    },
                    '.MuiCheckbox-colorSecondary.Mui-checked': {
                      color: '#004747 ',
                    },
                    '.MuiIconButton-root': {
                      color: '#004747 ',
                    },


                  }} />} label={treatment.title} />
                </>

              )

            }

            {step === 2 &&
              <div className={styles.step_2}>
                <FormControlLabel required control={<Checkbox sx={{
                  color: '#004747',
                  '.Mui-checked': {
                    color: '#004747 ',
                  },
                  '.MuiCheckbox-colorSecondary.Mui-checked': {
                    color: '#004747 ',
                  },
                  '.MuiIconButton-root': {
                    color: '#004747 ',
                  },


                }} />} label={"I Am Looking For Myself"} />
                <FormControlLabel required control={<Checkbox sx={{
                  color: '#004747',
                  '.Mui-checked': {
                    color: '#004747 ',
                  },
                  '.MuiCheckbox-colorSecondary.Mui-checked': {
                    color: '#004747 ',
                  },
                  '.MuiIconButton-root': {
                    color: '#004747 ',
                  },


                }} />} label={"I Am Looking For Someone Else"} />
              </div>

            }

          </form>


          {step === 3 &&
            selectedDate !== null &&
            <Typography className={styles.selctedDate}>
              Selected Date: {selectedDate?.$d?.toLocaleDateString()}</Typography>}

          <div className={styles.date}>


            {
              step === 3 &&

              <>

                <LocalizationProvider dateAdapter={AdapterDayjs} datePicker={datePicker}>
                  <DateCalendar
                    value={selectedDate?.$d?.toLocaleDateString()}
                    onChange={handleDateChange}
                    format="MM/dd/yyyy"
                    inputVariant="outlined"
                    label="Select a date"
                  />
                </LocalizationProvider>

              </>
            }

          </div>

          <div className={styles.continue_btn} onClick={nextStep}>
            <button>Continue</button>
          </div>
        </div>


      </div>

    </>
  )
}

export default quote

