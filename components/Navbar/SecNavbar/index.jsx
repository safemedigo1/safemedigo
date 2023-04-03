import { Container } from '@mui/material'
import React from 'react'
import styles from '../index.module.scss'
import { useRouter } from "next/router";
import Link from 'next/link';

const SecNavbar = ({ categorySlug, category, currentPage, blog, tag }) => {
  const router = useRouter();
  const { pathname } = router;
  console.log(blog)
  return (
    <>
      <nav id={styles.sec_nav}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          {pathname === '/blogs' || pathname === '/blogs/page/[slug]' ?
            <>
              <Link href='/'> Home </Link>  <Link href='/blogs' className={styles.active}>/ Blogs</Link>
            </> : <></>
          }


          {
            pathname === '/category/[slug]/page/[id]' ?
              <>
                <Link href='/'> Home </Link>  <Link href='/blogs' > /Blogs</Link>
                <Link href={`/category/${categorySlug}/page/${currentPage}`} className={styles.active} > /{category}</Link>
              </> : <></>
          }

          {pathname === '/safety-standards' &&
            <>
              <Link href='/'> Home </Link>  <Link href='/safety-standards' className={styles.active} > /Safety Standards</Link>
            </>
          }
          {pathname === '/how-it-works' &&
            <>
              <Link href='/'> Home </Link>  <Link href='/how-it-works' className={styles.active} > /How it works</Link>
            </>
          }

          {pathname === '/about-us' &&
            <>
              <Link href='/'> Home </Link>  <Link href='/about-us' className={styles.active} > /About us</Link>
            </>
          }
          {pathname === '/procedures&symptoms' &&
            <>
              <Link href='/'> Home </Link>  <Link href='/procedures&symptoms' className={styles.active} > /procedures&symptoms</Link>
            </>
          }
          {pathname === '/procedures&symptoms/[slug]' &&
            <>
              <Link href='/'> Home </Link>  <Link href='/procedures&symptoms/[slug]' > /procedures&symptoms</Link>
              <Link href='/procedures&symptoms/[slug]' className={styles.active} > /Hair-Transplantation</Link>
            </>
          }

          {pathname === ('/blogs/[slug]') &&
            <>
              <Link href='/'> Home </Link> <Link href='/blogs' > /Blogs</Link>  <Link href='#' className={styles.active}> /{blog.title}</Link>
            </>
          }
          {pathname === ('/tags/[slug]') &&
            <>
              <Link href='/'> Home </Link> <Link href='/blogs' > /Blogs</Link>  <Link href='#' className={styles.active}> /{tag}</Link>
            </>
          }
        </Container>
      </nav>
    </>
  )
}

export default SecNavbar