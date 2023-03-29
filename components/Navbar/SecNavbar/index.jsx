import { Container } from '@mui/material'
import React from 'react'
import styles from '../index.module.scss'
import { useRouter } from "next/router";
import Link from 'next/link';

const SecNavbar = ({ categorySlug, currentPage, blog }) => {
  const router = useRouter();
  const { pathname } = router;
  console.log(categorySlug)
  return (
    <>
      <nav id={styles.sec_nav}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          {/* {pathname === ('/blogs/[slug]/[id]') &&
            <h2>Home / Blog / I Was Suffuring From Gas Issues For 3 Years!</h2>
          }

          {pathname === '/how-it-works' &&
            <h2>Home / How It Works</h2>
          }

          {pathname === '/about-us' &&
            <h2>Home / About Us</h2>
          }

          {pathname === '/safety-standards' &&
            <h2>Home / Safety Standards</h2>
          }

          {pathname === '/procedures&symptoms' &&
            <h2>Home / Procedures & Symptoms</h2>
          }
          {pathname.includes('/procedures&symptoms/') &&
            <h2>Home / Hair Transplantation</h2>
          } */}

          {/* //////////////////// */}
          {pathname === '/blogs' || pathname === '/blogs/page/[slug]' ?
            <>
              <Link href='/'> Home </Link>  <Link href='/blogs' className={styles.active}>/ Blogs</Link>
            </> : <></>
          }


          {
            pathname === '/category/[slug]/page/[id]' ?
              <>
                <Link href='/'> Home </Link>  <Link href='/blogs' > /Blogs</Link>
                <Link href={`/category/${categorySlug}/page/${currentPage}`} className={styles.active} > /{categorySlug}</Link>
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

          {pathname === ('/blogs/[slug]/[id]') &&
            <>
              <Link href='/'> Home </Link> <Link href='/blogs' > /Blogs</Link>  <Link href='#' className={styles.active}> /{blog.title}</Link>
            </>
          }
          {console.log(blog)}
        </Container>
      </nav>
    </>
  )
}

export default SecNavbar