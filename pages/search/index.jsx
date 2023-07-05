import React, { useEffect, useState } from 'react'
import styles from "./index.module.scss";
import imgs from "../../assets/constants/imgs";
import Link from 'next/link';
import { Typography, AppBar, Container } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { HiArrowSmRight } from 'react-icons/hi'
import { FiChevronLeft } from 'react-icons/fi'
import Image from 'next/image';
import Fuse from 'fuse.js'
const Search = ({ blogs, treatments }) => {
  const { logo, } = imgs;
  const [mergedData, setMergedData] = useState(null)

  const mostSearches = [
    {
      title: 'Treatment', menuNames: [
        { name: "Treatment Name", link: "/" },
        { name: "Treatment Name", link: "/" },
        { name: "Treatment Name", link: "/" },
        { name: "Treatment Name", link: "/" },
      ],
    },
    {
      title: 'Doctors', menuNames: [
        { name: "Doctor Name", link: "/" },
        { name: "Doctor Name", link: "/" },
        { name: "Doctor Name", link: "/" },
        { name: "Doctor Name", link: "/" },
      ],
    },
    {
      title: 'Clinics & Hospitals', menuNames: [
        { name: "Hospitals Name", link: "/" },
        { name: "Hospitals Name", link: "/" },
        { name: "Hospitals Name", link: "/" },
        { name: "Hospitals Name", link: "/" },
      ],
    },
    {
      title: 'Blogs', menuNames: [
        { name: "Blog title", link: "/" },
        { name: "Blog title", link: "/" },
        { name: "Blog title", link: "/" },
        { name: "Blog title", link: "/" },
      ],
    },
  ]




  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')




  const mergeData = () => {
    const newData = blogs.concat(treatments)
    setMergedData(newData)
  }




  useEffect(() => {
    mergeData()
    if (mergedData) {
      const fuse = new Fuse(mergedData, { keys: ['title', 'treatmentNameEn'] })
      const searchResults = fuse.search(query).map(result => result.item)
      setResults(searchResults)
    }

  }, [query])


  console.log(results)







  return (
    <>
      <AppBar position={'static'}
        sx={{
          background: {
            xs: "transparent",
            sm: "transparent",
            md: "transparent",
            lg: "#00f3bb"
          }
        }}>

        <Container sx={{
          maxWidth: "1239px",

        }} maxWidth={false}>
          <nav id={styles.navbar_search}>
            <div className={styles.logo}>
              <Link href='/'>
                <Image width={100} height={100} src={logo.src} alt="" />
                <Typography variant='h1'>Safemedigo</Typography>
              </Link>
            </div>

            <div className={styles.back_btn}>
              <a href="/" >
                <FiChevronLeft />
              </a>
            </div>

            <div className={styles.input_container}>
              <input placeholder='Treatment, Doctor, Clinic, Diseases' type="text" value={query} onChange={e => setQuery(e.target.value)} />

              <Link href={'/'} className={styles.close_icon}>
                <CloseIcon />
              </Link>
            </div>

          </nav>
        </Container>
      </AppBar>

      <div className={styles.search_bg}>
        <Container sx={{
          maxWidth: "1239px",
          padding: {
            xs: '0',
            sm: '0',

          }
        }} maxWidth={false}>
          <div id={styles.search_wrapper}>




            <div className={styles.results_card}>
              <div className={styles.card_header}>
                <Typography>Most Treatment Searched Right Now</Typography>
              </div>
              <div className={styles.card_inner}>
                {mostSearches.map((search, index) =>
                  <>
                    <div className={styles.box} key={index}>
                      <div className={styles.title}>
                        <Typography variant='h4'>{search.title}</Typography>
                      </div>

                      {results.map((links, idx) => (
                        <Link href={'/'} key={idx}>

                          <div className={styles.name} key={idx}>
                            <Typography>
                              {links.title}
                            </Typography>
                            <div className={styles.page}>
                              <Typography>
                                Condition
                              </Typography>
                              <div className={styles.icon_container}>
                                <HiArrowSmRight />
                              </div>
                            </div>
                          </div>

                        </Link>

                      ))}
                    </div>


                  </>
                )}
              </div>


            </div>

          </div>
        </Container>
      </div>
    </>

  )
}

export default Search



export async function getStaticProps({ locale }) {
  const getAllBlogs = await fetch("https://api.safemedigo.com/api/v1/Blog/GetAllBlogByLang", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',

    },
    body: JSON.stringify({
      "lang": locale
    })
  })
  const data = await getAllBlogs.json()

  const getAllTreatments = await fetch("https://api.safemedigo.com/api/v1/Treatments/GetAllTreatments", {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',

    },

  })
  const treatmentsData = await getAllTreatments.json()



  return {
    props: {
      blogs: data,
      treatments: treatmentsData
    },
    revalidate: 10,
  }
}