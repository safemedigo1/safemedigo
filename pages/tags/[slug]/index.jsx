import { PageHeader, SecNavbar, Tags } from '@/components'
import { Box, FormControl, InputLabel, Pagination, Select, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import styles from '../../blogs/index.module.scss'
import Image from 'next/image'
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const TagsBlog = ({ blogCategory, blogs, allBlogsTagsData, currentPage, totalPages }) => {
  const handleMyChangePage = (event, value) => {
    event.preventDefault();
    router.push(`/tags/page/${value}`)
  }

  const handleFilterChanges = (event, value) => {
    router.push(`/category/${value.props.value}/page/1`);
    // setTimeout(() => window.location.reload(), 2000);
    setCategory(value.props.children)
  }


  return (
    <div>

      <SecNavbar tag={blogs.data[0].tags[0].tagName} />
      <PageHeader />
      <Head>
        <title>Blogs</title>
        <meta name="blogs" content="blogs for doctors" />
      </Head>

      <div id={styles.tags_filter}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.filter}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">Blogs</InputLabel>
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


                {blogCategory?.map((item) => (
                  <MenuItem value={item.slug} >
                    {item.categeryName}
                  </MenuItem>
                ))}


              </Select>
            </FormControl>
          </div>
        </Container>
      </div>

      <Head>
        <title>Blogs</title>
        <meta name="blogs" content="blogs for doctors" />
      </Head>

      <div className={styles.sections_container}>
        <section id={styles.blogs_sec}>
          <Container sx={{ maxWidth: "1239px", marginTop: '40px' }} maxWidth={false}>
            <div className={styles.title}>
              <Typography variant="h6">{blogs.data[0].tags[0].tagName}</Typography>
            </div>
            <div
              className={styles.boxes_container}>
              {
                blogs?.data.map((post, idx) => (
                  <>
                    <motion.a
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}

                      transition={{ duration: 1, }}
                      href={`/blogs/${post.slug}`} className={styles.box} key={idx}>
                      <div className={styles.img_container}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={344}
                          height={500}
                        />
                        {console.log(post)}


                      </div>
                      <div className={styles.box_title}>
                        <Typography variant="h5">{post.title}</Typography>
                      </div>

                      <div className={styles.desc}>
                        <p>{post.briefContent}</p>
                      </div>

                      <div className={styles.author_container}>
                        <div className={styles.img_container}>
                          <Image width={344}
                            height={500} src={post?.publisherImage} alt={post.publisherName} />

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
                              <button>{tag.tagName}</button>
                            </>
                          ))}
                        </div>

                      </div>
                    </motion.a>
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

    </div>
  )
}

export default TagsBlog


export async function getServerSideProps({ query, locale }) {

  const page = query.page || '1'; // If no page is specified, default to page 1
  const limit = 6; // Number of products to display per page
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;



  const res = await fetch("http://safemedigoapi2-001-site1.atempurl.com/api/v1/Blog/GetAllBlogWithPageByTagName", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": locale,
      "tagSlug": query.slug,
      "currentPage": page,
    })
  })
  const data = await res.json()


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
      "lang": locale,
    })
  })

  const allBlogsTagsData = await allBlogTagsRes.json()


  return {
    props: {
      blogs: data,
      products: products.slice(startIndex, endIndex),
      currentPage: parseInt(page),
      totalPages,
      allBlogsTagsData
    }
  }
}