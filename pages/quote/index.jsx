import React from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import imgs from "../../assets/constants/imgs";
import styles from './index.module.scss'
import Image from 'next/image';
import CloseIcon from "@mui/icons-material/Close";



const quote = () => {
  const { logo, } = imgs;
  const router = useRouter()
  const { pathname, query } = router

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

          <div className={styles.treatment}>
            <Typography variant='h4'>What Would You Like To Do?</Typography>
          </div>


          <form >

            {treatments.map((treatment) =>
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

            )}


          </form>

          <div className={styles.continue_btn}>
            <button>Continue</button>
          </div>
        </div>


      </div>

    </>
  )
}

export default quote

