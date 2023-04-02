import imgs from "../../assets/constants/imgs";
import Link from "next/link";
import Head from "next/head";
import styles from "./index.module.scss";
import { Box, Container, Typography } from "@mui/material";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PageHeader, Tags } from './../../components/';

import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { motion } from "framer-motion";
import SecNavbar from "@/components/Navbar/SecNavbar";
import axios from 'axios';
import Image from 'next/image'




export default function Blogs({ blogCategory, blogs, allBlogsTagsData, currentPage, totalPages }) {
  const [category, setCategory] = useState('All Blogs');

  const router = useRouter();


  const handleFilterChanges = (event, value) => {
    router.push(`/category/${value.props.value}/page/1`, undefined, { scroll: false });
    setCategory(value.props.children)
  }


  const handleMyChangePage = (event, value) => {
    event.preventDefault();
    router.push(`/blogs/page/${value}`, undefined, { scroll: false })
  }


  return (
    <>
      <SecNavbar />
      <PageHeader />

      <Head>
        <title>Blogs</title>
        <meta name="blogs" content="blogs for doctors" />
      </Head>

      <div id={styles.tags_filter}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.filter}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">All Blogs</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                IconComponent={ExpandMoreOutlinedIcon}
                label="Blogs"
                onChange={handleFilterChanges}
                style={{
                  backgroundColor: "#E7EDEC",
                  color: "#000000",
                  fontSize: "18px",
                  fontWeight: "bold",

                }}
              >


                {blogCategory.map((item) => (
                  <MenuItem value={item.slug} >
                    {item.categeryName}
                  </MenuItem>
                ))}


              </Select>
            </FormControl>
          </div>
        </Container>
      </div>

      <div className={styles.sections_container}>
        <section id={styles.blogs_sec}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>

            <div
              className={styles.boxes_container}>
              {
                blogs?.data.map((post, idx) => (
                  <>
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}

                      transition={{ duration: 1, }}
                      className={styles.box} key={idx}>
                      <Link href={`/blogs/${post.slug}`}>

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
                ))
              }
            </div>

            <Box sx={{
              display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: "center", marginTop: '50px',
              '& ul > li> button:not(.Mui-selected)': { color: '#004747', fontWeight: 'bold', fontSize: '14px' },
              '& ul > li> .Mui-selected': { backgroundColor: '#004747', color: '#ffffff', fontWeight: 'bold', fontSize: '18px' }
            }} className="pagination">
              <Pagination count={totalPages} page={currentPage} onChange={handleMyChangePage} />

            </Box>
          </Container>
        </section>

        {/* Tag Component */}
        <Tags allBlogsTagsData={allBlogsTagsData} />
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {

  const page = query.page || '1'; // If no page is specified, default to page 1
  const limit = 6; // Number of products to display per page
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;


  const res1 = await fetch("http://safemedigoapi2-001-site1.atempurl.com/api/v1/BlogCategory/GetAllBlogCategoriesByLang", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": 'en',
    })
  })
  const data2 = await res1.json()

  const myCategoryId = data2.filter((c) => c.slug === query.category)

  const getBlogWithPageRes = await axios.post("http://safemedigoapi2-001-site1.atempurl.com/api/v1/Blog/GetAllBlogWithPage", {
    "lang": 'en',
    "blogCategoryId": myCategoryId?.[0]?.id || '0',
    "currentPage": page || 1
  }, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const data = await getBlogWithPageRes.data;


  const products = data.data;
  const totalProducts = data.count;
  const totalPages = Math.ceil(totalProducts / limit);




  const allBlogTagsRes = await fetch("http://safemedigoapi2-001-site1.atempurl.com/api/v1/Blog/GetAllBlogsTags", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": 'en',
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
      allBlogsTagsData
    }
  }
}

