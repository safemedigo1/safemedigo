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
  const { logo, NavSearch } = imgs;
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




  const [results, setResults] = useState(null)
  const [query, setQuery] = useState([])




  const mergeData = () => {
    const newData = blogs.concat(treatments)
    setMergedData(newData)
  }




  useEffect(() => {
    mergeData()
    if (mergedData) {
      const fuse = new Fuse(mergedData, { keys: ['title', 'treatmentNameEn'] })
      const searchResults = fuse.search(query).map(result => (result.item))
      searchResults.length === 0 ? setResults(null) : setResults(searchResults)
    }

  }, [query])


  const handleSearch = () => {
    mergeData()
  }



  return (
    <>
      <AppBar position={'sticky'}
        sx={{
          background: "#00f3bb"

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
                <CloseIcon />

              </a>
            </div>

            <div className={styles.input_container} >
              <input placeholder='Treatment, Doctor, Clinic, Diseases' type="text" value={query} onChange={e => setQuery(e.target.value)} />

              <button className={styles.close_icon} onClick={() => handleSearch()}>
                <img src={NavSearch.src} alt="" />
              </button>
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
                {results === null && query.length === 0 && <Typography>Most searched results</Typography>}
                {results !== null && results.length > 0 && <Typography>Results for: {query}</Typography>}
                {results === null && query.length !== 0 && < Typography > No results found for: {query}</Typography>}



                {console.log(results, "Results")}
                {console.log(query, "QUERY")}
              </div>

              <div className={styles.card_inner}>
                {results === null && query.length === 0 && mostSearches.map((search, index) =>
                  <>
                    <div className={styles.box} key={index}>
                      <div className={styles.title}>
                        <Typography variant='h4'>{search.title}</Typography>
                      </div>

                      {search.menuNames.map((links, idx) => (
                        <Link href={'/'} key={idx}>
                          <div className={styles.name} key={idx}>
                            <Typography>
                              {links.name}
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
                      ))
                      }


                    </div >


                  </>
                )}

                {results !== null && results.length > 0 && results.map((search, index) =>
                  <>
                    <div className={styles.box} key={index}>
                      <div className={styles.title}>
                        <Typography variant='h4'>{search.titleEn}</Typography>
                      </div>

                      {results.map((links, idx) => (
                        <Link href={'/'} key={idx}>
                          <div className={styles.name} key={idx}>
                            <Typography>
                              {links.titleEn}
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
                      ))
                      }


                    </div >


                  </>
                )}

              </div>


            </div>

          </div>
        </Container >
      </div >
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