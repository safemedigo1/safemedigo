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
import Link from 'next/link'
const quote = () => {
  const { logo, } = imgs;
  const router = useRouter()
  const { pathname, query } = router
  const [step, setStep] = useState(6);


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
    setStep(step + 1);
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
    { title: 'Others' },
  ]


  const nextStep = (e) => {
    e.preventDefault();
    {
      step !== 6
      setStep(step + 1);
    }


  };

  const prevStep = () => {
    {
      step !== 1
      setStep(step - 1);
    }

  };

  useEffect(() => {
    if (step === 7) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [step, router]);





  return (
    <QuoteContext.Provider value={quote}>

      <div className={styles.card_wrapper}>

        <div className={styles.quote_card}>
          {step !== 7 &&
            <div className={styles.header}>
              {step !== 6 &&
                <button onClick={handleGoBack} className={styles.navbar__logo}>
                  <Image
                    src={logo.src}
                    alt="Picture of the author"
                    width={51.34}
                    height={45}
                  />
                  <h1>Safemedigo</h1>
                </button>
              }

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
          }

          {step === 1 &&
            <div className={styles.desc}>
              <Typography>Hi, Thank You For Choosing Safemedigo For Your Healthcare Journey. We Prioritize Your Safety And Strive For A Smooth Experience.</Typography>
            </div>
          }


          {step < 6 &&
            <div className={styles.steps}>
              <div className={styles.step}>
                <span>{step}</span>
              </div>
              {
                step !== 6 &&
                <div className={styles.step}>
                  <span>{step + 1}</span>
                </div>
              }
            </div>
          }
          {step === 5 &&
            <motion.h4
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              style={{ fontWeight: 'bold' }}
              className={styles.question}>
              Please Provide Your Contact Details.
              <span style={{ color: 'red' }}>*</span>
            </motion.h4>
          }
          <div className={styles.question}>
            {step === 1 &&
              <motion.h4
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                What Would You Like To Do?
              </motion.h4 >
            }
            {step === 2 &&
              <motion.h4
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                Who Is This Treatment For?

              </motion.h4 >

            }
            {step === 3 &&
              <motion.h4
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                Select Date
              </motion.h4 >

            }
            {step === 4 &&
              <motion.h4
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                Select Time
              </motion.h4 >
            }

          </div>




          <motion.form
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className={step === 1 && styles.form_1 || step === 2 && styles.form_2 || step === 3 && styles.form_3 || step === 4 && styles.form_4 || step === 5 && styles.form_5}>

            {step === 1 &&

              treatments.map((treatment) =>
                <FormControlLabel
                  sx={{
                    marginLeft: 0

                  }}
                  required control={<Checkbox sx={{
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
                    marginLeft: 0


                  }} />} label={treatment.title} />

              )

            }

            {step === 2 &&
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className={styles.step_2}>
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
              </motion.div>

            }

            {step === 3 &&
              selectedDate !== null &&
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                <Typography
                  className={styles.selctedDate}>
                  Selected Date: {selectedDate?.$d?.toLocaleDateString()}
                </Typography>
              </motion.div >
            }

            {step === 4 &&
              timeValue !== null &&
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                <Typography className={styles.selctedDate}>
                  Selected Time: {timeValue}
                </Typography>
              </motion.div >
            }

            {step === 4 &&
              asp && timeValue === null &&
              <motion.p
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                style={{ marginTop: 0, fontWeight: 'bold' }}
                className={styles.selctedDate}>
                Selected Time: As Soon As Possible
              </motion.p>

            }

            <div className={styles.date}>
              {
                step === 3 &&
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                >

                  <LocalizationProvider dateAdapter={AdapterDayjs} datePicker={datePicker}>
                    <DateCalendar
                      value={selectedDate}
                      onChange={(newDateVal) => setSelectedDate(dayjs(newDateVal))}
                      format="MM/dd/yyyy"
                      inputVariant="outlined"
                      label="Select a date"
                      minDate={dayjs()}

                      sx={{
                        '.css-wngcaj-MuiButtonBase-root-MuiPickersDay-root.Mui-selected ':
                        {
                          backgroundColor: '#004747 !important',
                          color: 'white !important'
                        },
                        '.css-15a9mqf-MuiPickersYear-yearButton.Mui-selected': {
                          backgroundColor: '#004747 !important',
                          color: 'white !important'
                        }
                      }}
                    />
                  </LocalizationProvider>

                </motion.div>
              }


            </div>


            {step === 4 &&
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className={styles.time}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DigitalClock
                    value={timeValue?.$d?.toLocaleDateString("en-US", { hour: "numeric", minute: "numeric", hour12: true }).split(", ")[1]}
                    onChange={(newValue) => setTimeValue(newValue?.$d?.toLocaleDateString("en-US", { hour: "numeric", minute: "numeric", hour12: true }).split(", ")[1])}


                    sx={{
                      '.css-1g2aoka-MuiButtonBase-root-MuiMenuItem-root-MuiDigitalClock-item.Mui-selected':
                      {
                        backgroundColor: '#004747 !important',
                        color: 'white !important'
                      }
                    }}
                  />

                </LocalizationProvider>
              </motion.div>

            }

            {step === 5 &&
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className={styles.form_container}>
                <div className={styles.username}>
                  <div className={styles.f_name}>
                    <label htmlFor="f_name">First Name <span>*</span></label>
                    <input required type="text" name='f_name' placeholder='John' />
                  </div>
                  <div className={styles.l_name}>
                    <label htmlFor="l_name">Last Name <span>*</span></label>
                    <input required type="text" name='l_name' placeholder='Doe' />
                  </div>
                </div>

                <div className={styles.phone}>
                  <label htmlFor="phone">Phone Number <span>*</span></label>

                  <PhoneInput
                    country={'tr'}
                    value={phoneNum}
                    onChange={newPhoneVal => setPhoneNum(newPhoneVal)}

                    inputProps={{
                      name: 'phone',
                      required: true,
                    }}
                  />

                </div>

                <div className={styles.email}>
                  <label htmlFor="email">Email <span>*</span></label>
                  <input required type="email" name='email' placeholder='example@gmail.com' />
                </div>


                <div className={styles.terms_label}>
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



                  }} />} label={"I agree to my given details including health data may be processed by Safemedigo for the purpose of obtaining quotes. This includes the transfer of my data to healthcare providers. The consent can be revoked at any time with effect for the future.*"} />
                </div>

              </motion.div>
            }

          </motion.form>


          {step === 6 &&
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}

              className={styles.conf_code}>
              <div className={styles.title}>
                <Typography variant={'h3'}>
                  Confirmation Message
                </Typography>
              </div>
              <div className={styles.desc}>
                <Typography>We Want To Make Sure It Is You. In Order To Further Verify Your Identity, Enter The Verification Code That Was Sent To:</Typography>
              </div>

              <div className={styles.mobile_num}>
                <Typography>
                  (+20)013 313 1302
                </Typography>
              </div>
              <div className="input">

                <AuthCode containerClassName={styles.input_container} length={4} allowedCharacters='numeric' onChange={handleOnChange} />
              </div>
              <div className={styles.resend}>
                <Typography>
                  Didn't receive an email? <button>Resend?</button>
                </Typography>
              </div>
            </motion.div>
          }


          {step === 7 &&
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}

            >
              <div className={styles.step_8_container}>
                <div className={styles.icon_container}>
                  <BsCheckLg />
                </div>
                <div className={styles.title}>
                  <Typography variant='h3'>We Got Your Request</Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>Thank You For Your Submission. Our Team Will Evaluate Your Request And Respond To You In A Timely Manner</Typography>
                </div>
              </div>
            </motion.div>

          }



          {step === 4 &&
            <div className={styles.asp_btn} onClick={handleAsp}>
              <button>I Want As Soon As Possible</button>
            </div>
          }

          {step < 5 &&
            <div className={styles.continue_btn} onClick={nextStep}>
              <button>Continue</button>
            </div>
          }

          {step === 7 &&
            <div className={styles.continue_btn} >
              <Link href='/'>
                <button>
                  Done
                </button>
              </Link>
            </div>
          }

          {step === 6 &&
            <div className={styles.continue_btn} onClick={nextStep}>
              <button>Continue</button>
            </div>
          }

          {step === 5 &&
            <div className={styles.continue_btn} onClick={nextStep}>
              <button>Send Inquiry</button>
            </div>
          }
        </div>


      </div>

    </QuoteContext.Provider>
  )
}

export default quote

