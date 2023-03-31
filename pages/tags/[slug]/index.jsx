import { PageHeader, SecNavbar, Tags } from '@/components'
import { Box, Pagination, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import styles from '../../blogs/index.module.scss'
const TagsBlog = ({ blogCategory, blogs, products, currentPage, totalPages }) => {
  const handleMyChangePage = (event, value) => {
    event.preventDefault();
    router.push(`/tags/page/${value}`)
  }

  return (
    <div>

      <SecNavbar tag={blogs.data[0].tags[0].tagName} />
      <PageHeader />

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
                        <img
                          src={post.image}
                          alt={post.title}
                          width="width: 344px"
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
                          <img src={post?.publisherImage} alt={post.publisherName} />

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
        <Tags />
      </div>

    </div>
  )
}

export default TagsBlog


export async function getServerSideProps({ query }) {

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
      "lang": 'en',
      "tagSlug": query.slug,
      "currentPage": page,
    })
  })
  const data = await res.json()


  const products = data.data;
  const totalProducts = data.count;
  const totalPages = Math.ceil(totalProducts / limit);





  return {
    props: {
      blogs: data,
      products: products.slice(startIndex, endIndex),
      currentPage: parseInt(page),
      totalPages,
    }
  }
}