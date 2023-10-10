import React from 'react'
import styles from './index.module.scss'
import imgs from "../../../assets/constants/imgs";
import { Container, Typography, } from '@mui/material';
import Link from 'next/link';
import { Phone } from '../../../assets/svgs/HoverIcons'
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router';


const ContactDetails = () => {
  const { t } = useTranslation();
  const { majd } = imgs;
  const router = useRouter()

  return (
    <div id='contact-us'>
      <section id={styles.contact_details} dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
        <Container sx={{ maxWidth: '1239px' }} maxWidth={false}>
          <div className={styles.section_container}>
            <div className={styles.talk}>
              <div className={styles.title}>
                <Typography variant='h3'>
                  {t('contact_details:title1')}</Typography >
              </div>
              <div className={styles.sec_title}>
                <Link href='/contact-us'>{t('contact_details:title2')}</Link>
              </div>

              <div className={styles.desc}>
                <Typography>{t('contact_details:desc')}</Typography>
              </div>

              <div className={styles.buttons_container}>
                <div className={styles.btn}>
                  <Link href="tel:00905350770477">
                    <button>
                      <Phone />
                      00905350770477
                    </button>
                  </Link>
                </div>
                <div className={styles.btn}>
                  <Link href="https://wa.me/message/JLFXRTHJEOH2H1" target="_blank">
                    <button>
                      {t('Footer:Whatsapp')}
                    </button>
                  </Link>
                </div>
                <div className={styles.btn}>
                  <Link href="https://www.facebook.com/Safemedigo" target="_blank"><button>{t("Footer:facebook")}</button></Link>
                </div>
                <div className={styles.btn}>
                  <Link href="mailto:info@safemedigo.com" >
                    <button>{t('Footer:email')}</button>
                  </Link>
                </div>
              </div>
            </div>


            <div className={styles.personal_manger}>
              <div className={styles.box}>
                <div className={styles.img_container}>
                  <img src={majd.src} alt="" width={100} height={100} quality={100} />
                </div>


                <div className={styles.text_container}>

                  <div className={styles.job}>
                    <Typography>
                      {t('contact_details:manager')}
                    </Typography>
                  </div>

                  <div className={styles.name}>
                    <Typography>
                      {t('contact_details:majd')}
                    </Typography>
                  </div>

                  <div className={styles.desc}>
                    <Typography>
                      {t('contact_details:card_desc')}
                    </Typography>
                  </div>

                  <div className={styles.btn}>
                    <Link href='/q&a'>
                      <button> {t('contact_details:ask')}</button>
                    </Link>
                  </div>

                </div>

              </div>
            </div>


            <div className={styles.contacts}>
              <div className={styles.contact}>
                <Typography>
                  {t('Footer:Whatsapp')}
                </Typography>
                <Typography>00905350770477</Typography>
              </div>
              <div className={styles.contact}>
                <Typography>{t('Footer:call')}</Typography>
                <Typography>00905350770477</Typography>
              </div>
              <div className={styles.contact}>
                <Typography>{t('Footer:email')}</Typography>
                <Typography >info@safemedigo.com</Typography>
              </div>




              <div className={styles.address}>
                <Typography>Address</Typography>


                <Typography>

                  {t('Footer:safemedigoAddress')}
                </Typography>
                {/* <Typography>Fulya, Öztürk Sk.
                  Sima Apartmanı, No 4B, 3Rd Floor, Office N10
                  34394 <br /> Şişli/İstanbul</Typography> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>

  )
}

export default ContactDetails