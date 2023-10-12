import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { Container, List, ListItem } from '@mui/material'
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import { AppContext } from '@/components/AppContext';


const InnerPageNavbar = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const context = useContext(AppContext);
  const { isDoctorPageActive,
    setIsDoctorPageActive } = context;


  return (
    <header id={styles.InnerPageNavbar} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <nav>
        <div className={styles.links_container}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <List sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', width: { sx: '100%', sm: '100%', md: '100%', lg: '700px' } }}>
              <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                <Link href='#overview'>
                  {t("proceduresSymptoms_single:nav_overview")}
                </Link>
              </ListItem>

              <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                <Link href='#price'>
                  {t("proceduresSymptoms_single:nav_prices")}
                </Link>
              </ListItem>
              {router.pathname !== '/hospitals/[slug]' &&
                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='#q&a'>
                    {t("proceduresSymptoms_single:nav_q&a")}
                  </Link>
                </ListItem>
              }

              <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                <Link href='/'>
                  {t("proceduresSymptoms_single:nav_reviews")}
                </Link>
              </ListItem>

              <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                <a onClick={() => setIsDoctorPageActive((prev) => !prev)}>
                  {t("proceduresSymptoms_single:nav_doctors")}
                </a>
              </ListItem>


            </List>


          </Container>

        </div>
      </nav >
    </header >)
}

export default InnerPageNavbar

