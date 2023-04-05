import React, { useContext, useState } from 'react'
import styles from './index.module.scss'
import { Container, Typography, } from '@mui/material';
import Link from 'next/link';
import Carousel from 'react-elastic-carousel';
import imgs from "../../../assets/constants/imgs";
import { useTranslation } from "react-i18next";
import { appContext } from "@/context/store";



const Search = () => {
  const { t } = useTranslation();
  const { search } = imgs;
  const { lang } = useContext(appContext)

  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 300, itemsToShow: 2.4 },
    { width: 400, itemsToShow: 3 },
    { width: 500, itemsToShow: 4 },
    { width: 800, itemsToShow: 4 },
    { width: 900, itemsToShow: 5.4 },
  ])

  const tags = [
    { tag: "Hair Treatment" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
  ];


  return (
    <div id={styles.search} dir={`${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.searc_card}>
          <div className={styles.searc_input}>
            <Link href='/search'>
              <label htmlFor="">{t('search_section:title')}</label>
              <div className={styles.input_container}>
                <input type="text" disabled placeholder={t('search_section:place_holder')} />
                <img src={search.src} alt="" />
              </div>
            </Link>
          </div>

          <div className={styles.tags}>
            <div className={styles.title}>
              <Typography>{t('search_section:tags_title')}</Typography>
            </div>
            <div className={styles.tags_container}>
              {tags.map((tag, index) => (
                <Link href='/' key={index}>
                  <button>
                    {tag.tag}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </Container>
      <div className={styles.tags_slider}>
        <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
          <div className={styles.title}>
            <Typography variant='h3'>Popular</Typography>
          </div>
        </Container>

        <Container className='mycontainer' sx={{ maxWidth: '1239px', }} maxWidth={false}  >


          <Carousel breakPoints={breakPoints}
            pagination={false}
            showArrows={false}
            itemsToScroll={1}
          >
            {tags.map((tag, index) => (
              <Link href='/' key={index}>
                <button>
                  {tag.tag}
                </button>
              </Link>
            ))}


          </Carousel>
        </Container>

      </div>
    </div>
  )
}

export default Search

