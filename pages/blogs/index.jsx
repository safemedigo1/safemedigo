import imgs from "../../assets/constants/imgs";
import Link from "next/link";
import Head from "next/head";
import styles from "./index.module.scss";
import { Box, Container, Grid, Typography } from "@mui/material";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Tags } from './../../components/';

import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import Image from "next/image";





export default function Blogs({ blogCategory, blogs, products, currentPage, totalPages }) {
  const [allBlogs, setAllBlogs] = useState(blogs.data)
  const [allCategories, setAllCategories] = useState(blogCategory)
  const [category, setCategory] = useState('All');
  const [categoryId, setCategoryId] = useState();



  const router = useRouter();

  const handleFilter = (event) => {
    setCategory(event.target.value);
  };


  // Get All Categories


  // const getAllBlogsByCategoryId = async () => {
  //   const res = await fetch("http://safemedigoapi-001-site1.gtempurl.com/api/v1/Blog/GetAllBlogWithPage", {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "lang": 'en',
  //       "blogCategoryId": categoryId,
  //       "currentPage": 1
  //     })
  //   })
  //   const data = await res.json()
  //   setAllBlogs(data.data)

  // }



  // useEffect(() => {

  //   if (category !== 'All') {
  //     const filtered = allCategories.find((item) => item.categeryName === category);
  //     setCategoryId(filtered.id)
  //     getAllBlogsByCategoryId();
  //   } else {
  //     setAllBlogs(blogs.data)
  //   }
  // }, [category])





  const handleFilterChanges = (event, value) => {
    router.push(`/blogs?category=${value.props.value}`)
    setTimeout(() => window.location.reload(), 2000);
    console.log(value)
  }


  const handleMyChangePage = (event, value) => {
    router.push(`/blogs?page=${value}`)

    setTimeout(() => window.location.reload(), 1000);

  }

  const itemId = (item) => {
    console.log(item)
  }
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="blogs" content="blogs for doctors" />
      </Head>

      <div id={styles.tags_filter}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.filter}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">
                Articles
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                IconComponent={ExpandMoreOutlinedIcon}
                label="Articles"
                onChange={handleFilterChanges}
                style={{
                  backgroundColor: "#E7EDEC",
                  color: "#000000",
                  fontSize: "18px",
                  fontWeight: "bold",

                }}
              >
                <MenuItem value="All" >
                  All
                </MenuItem>

                {blogCategory.map((item) => (
                  <MenuItem value={item.slug} onClick={itemId(item)}>
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
            <div className={styles.title}>
              <Typography variant="h6">{category}</Typography>
            </div>
            <div className={styles.boxes_container}>
              {
                // category === 'All' ?
                blogs?.data.map((post, idx) => (
                  <>
                    <Link href={`/blogs/${post.slug}`} className={styles.box} key={idx}>
                      <div className={styles.img_container}>
                        <img
                          src={post.image}
                          alt="Picture of the author"
                          width="width: 344px"
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
                          <img src={post.image} alt="" />
                          {/* {console.log()} */}
                        </div>

                        <div className={styles.author_data}>
                          <div className={styles.user_name}>
                            {post.authorName}
                          </div>
                          <div className={styles.user_job}>{post.authorJob}</div>
                        </div>
                      </div>

                      <div className={styles.btns_container}>
                        <div className={styles.trans_btn}>
                          {post.tags.map((tag) => (
                            <button>{tag.tagName}</button>
                          ))}
                        </div>

                      </div>
                    </Link>
                  </>
                ))


                // : filteredData !== null &&
                // filteredData?.data?.map((post, idx) => (
                //   <>
                //     <Link href={`/blogs/${post.title.split(' ').join('-')}`} className={styles.box} key={idx}>
                //       <div className={styles.img_container}>
                //         <img
                //           src={post.image}
                //           alt="Picture of the author"
                //           width="width: 344px"
                //         />
                //       </div>
                //       <div className={styles.box_title}>
                //         <Typography variant="h5">{post.title}</Typography>
                //       </div>

                //       <div className={styles.desc}>
                //         <p>{post.briefContent}</p>
                //       </div>

                //       <div className={styles.author_container}>
                //         <div className={styles.img_container}>
                //           <img src={post.authorImg} alt="" />
                //         </div>

                //         <div className={styles.author_data}>
                //           <div className={styles.user_name}>
                //             {post.authorName}
                //           </div>
                //           <div className={styles.user_job}>{post.authorJob}</div>
                //         </div>
                //       </div>

                //       <div className={styles.btns_container}>
                //         <div className={styles.trans_btn}>
                //           <button>Tag Name</button>
                //         </div>

                //       </div>
                //     </Link>
                //   </>
                // ))


              }
            </div>

            <Box sx={{
              display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: "center", marginTop: '50px',
              '& ul > li> button:not(.Mui-selected)': { color: '#004747', fontWeight: 'bold', fontSize: '14px' },
              '& ul > li> .Mui-selected': { backgroundColor: '#004747', color: '#ffffff', fontWeight: 'bold', fontSize: '18px' }
            }} className="pagination">
              <Pagination count={totalPages} page={currentPage} key={router.query.page} onChange={handleMyChangePage
              } />

            </Box>
          </Container>
        </section>


        {/* Tag Component */}
        <Tags />
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

  console.log(query.category)
  console.log(myCategoryId[0].id, 'ss')

  const res = await fetch("http://safemedigoapi2-001-site1.atempurl.com/api/v1/Blog/GetAllBlogWithPage", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": 'en',
      "blogCategoryId": myCategoryId[0].id || '1',
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
      blogCategory: data2,
      products: products.slice(startIndex, endIndex),
      currentPage: parseInt(page),
      totalPages,

    }
  }
}

