import styles from '../../../../blogs/index.module.scss';
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import { Box, Container, Typography } from "@mui/material";
import { PageHeader, Tags } from "@/components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import SecNavbar from '@/components/Navbar/SecNavbar';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "react-i18next";


const PageNumber = ({ blogCategory, blogs, myCategoryId, currentPage, totalPages, allBlogsTagsData }) => {
  const [category, setCategory] = useState(blogCategory[0].categeryName);
  const { t } = useTranslation();

  const router = useRouter();


  const handleMyChangePage = (event, value) => {
    event.preventDefault();
    if (value === 1) {
      router.push(`/blogs/`);
    }

    router.push(`/blogs/page/${value}`, undefined, { scroll: false })
  }

  const handleFilterChanges = (event, value) => {
    router.push(`/category/${value.props.value}/page/${currentPage}`, undefined, { scroll: false });
    // setTimeout(() => window.location.reload(), 2000);
    setCategory(value.props.children)
  }
  console.log("HERE")



  return (
    <>
      <SecNavbar slug={myCategoryId[0].categeryName} currentPage={currentPage} />
      <PageHeader />

      <div id={styles.tags_filter} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.filter}>
            <FormControl fullWidth>
              <Select
                displayEmpty
                inputProps={{
                  'aria-label': 'Without label', MenuProps: {
                    MenuListProps: {
                      sx: {
                        backgroundColor: 'transparent',
                      }
                    }
                  }
                }}
                IconComponent={ExpandMoreOutlinedIcon}
                // label={category}
                onChange={handleFilterChanges}

                style={{
                  backgroundColor: "#E7EDEC",
                  color: "#000000",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}



              >
                <MenuItem disabled sx={{ display: 'none' }}>
                  {myCategoryId[0].categeryName}
                </MenuItem>
                {blogCategory.map((item) => (
                  <MenuItem dir={`${router.locale === "ar" ? 'rtl' : 'ltr'}`} value={item.slug} >
                    {item.categeryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Container >
      </div >

      {
        blogs.count !== 0 ?
          <>
            <div className={styles.sections_container} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
              <section id={styles.blogs_sec}>
                <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>


                  <div className={styles.boxes_container}>
                    {blogs.data.map((post, idx) => (
                      <>
                        <motion.div
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}

                          transition={{ duration: 1, }}
                          className={styles.box} key={idx}>
                          <Link href={`/blogs/${post.slug}`} >

                            <div className={styles.img_container}>
                              <Image
                                src={post.image}
                                alt={post.title}
                                width={344}
                                height={500}
                              />

                            </div>
                            <div className={styles.box_title}>
                              <Typography variant="h5">{post.title}</Typography>
                            </div>

                            <div className={styles.desc}>
                              <p>{post.briefContent}</p>
                            </div>

                            <div className={styles.author_container}>
                              <div className={styles.img_container}>
                                <Image
                                  width={344}
                                  height={500}
                                  src={post?.publisherImage} alt={post.publisherName} />



                              </div>
                              <div className={styles.author_data}>
                                <div className={styles.user_name}>
                                  {post.publisherName}
                                </div>
                                <div className={styles.user_job}>{post.jobTitle}</div>
                              </div>
                            </div>

                            <div className={styles.btns_container}>
                              <div className={styles.trans_btn}>
                                {post.tags.map((tag) => (
                                  <>
                                    <Link href={`/tags/${tag.slug}`}>
                                      <button>{tag.tagName}</button>
                                    </Link>
                                  </>
                                ))}
                              </div>

                            </div>
                          </Link>

                        </motion.div>
                      </>
                    ))}
                  </div>
                  <Box sx={{
                    display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: "center", marginTop: '50px',
                    '& ul > li> button:not(.Mui-selected)': { color: '#004747', fontWeight: 'bold', fontSize: '14px' },
                    '& ul > li> .Mui-selected': { backgroundColor: '#004747', color: '#ffffff', fontWeight: 'bold', fontSize: '18px' }
                  }} className="pagination">
                    <Pagination dir='ltr' count={totalPages} page={currentPage} onChange={handleMyChangePage} />

                  </Box>
                </Container>
              </section>
              {/* Tags Component */}
              <Tags allBlogsTagsData={allBlogsTagsData} />
            </div>
          </>
          :

          <Container sx={{ maxWidth: "1239px", marginBottom: '40px' }} maxWidth={false}>
            <h2>No Blogs In {category} </h2>
          </Container>
      }

    </>
  )
}

export default PageNumber

export async function getServerSideProps({ query, locale }) {
  const categorySlug = query.slug
  const page = query.id; // If no page is specified, default to page 1
  const limit = 6; // Number of products to display per page
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const res1 = await fetch("https://api.safemedigo.com/api/v1/BlogCategory/GetAllBlogCategoriesByLang", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
    })
  })
  const data2 = await res1.json()

  const myCategoryId = data2.filter((c) => c.slug === query.slug)

  const res = await fetch("https://api.safemedigo.com/api/v1/Blog/GetAllBlogWithPage", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "blogCategoryId": myCategoryId[0]?.id || '0',
      "currentPage": page,
    })
  })
  const data = await res.json()


  const products = data.data;
  const totalProducts = data.count;
  const totalPages = Math.ceil(totalProducts / limit);


  const allBlogTagsRes = await fetch("https://api.safemedigo.com/api/v1/Blog/GetAllBlogsTags", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
    })
  })

  const allBlogsTagsData = await allBlogTagsRes.json()
  return {
    props: {
      blogs: data,
      blogCategory: data2,
      products: products.slice(startIndex, endIndex),
      currentPage: parseInt(page),
      totalPages,
      categorySlug,
      allBlogsTagsData,
      myCategoryId,
      ...(await serverSideTranslations(locale, ['most_popular', 'home', 'navbar', 'hero_section', 'search_section', 'help_section', 'why_safemedigo', 'treatments_section', 'most_popular', 'patient_stories', 'safety_standards_section', 'why_turky_section', 'contact_details', 'sec_navbar', 'page_header_comp', 'blogs_page'])),
    }
  }
}








