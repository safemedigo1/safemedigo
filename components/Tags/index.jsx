import { Container, Typography } from "@mui/material";
import Link from 'next/link';
import React from 'react'
import styles from './index.module.scss'

import { useTranslation } from "react-i18next";




const Tags = ({ blog, allBlogsTagsData }) => {
  const { t } = useTranslation();

  const tags = [
    { tag: "All" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
  ];
  return (
    <section id={styles.tags}>
      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <div className={styles.title}>
          <Typography variant="h6">{t('blogs_page:tags_title')}</Typography>
        </div>

        <div className={styles.tags_container}>


          {allBlogsTagsData?.map((tag, idx) => (
            <>
              <div className={styles.tag} key={idx}>
                <Link href={`/tags/${tag.slug}`}>
                  <button>{tag.tagName}</button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </Container >

    </section>
  )
}

export default Tags