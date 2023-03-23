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
import { Tags } from './../../components/';

import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import { useContext, useEffect, useState } from "react";
import { appContext } from "@/context/store";





export default function Blogs({ page, blogs }) {
  const [allBlogs, setAllBlogs] = useState(blogs.data)
  const [allCategories, setAllCategories] = useState([])
  const [category, setCategory] = useState('All');
  const [categoryId, setCategoryId] = useState();

  const [pagesCount, setPagesCount] = useState();

  const [filteredData, setFilteredData] = useState(null);



  const handleFilter = (event) => {
    setCategory(event.target.value);
  };


  // Get All Categories
  const getBlogsCatigories = async () => {
    const res = await fetch("http://safemedigoapi-001-site1.gtempurl.com/api/v1/BlogCategory/GetAllBlogCategoriesByLang", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "lang": 'en',
      })
    })
    const data = await res.json()
    setAllCategories(data);

  }

  const getAllBlogsByCategoryId = async () => {
    const res = await fetch("http://safemedigoapi-001-site1.gtempurl.com/api/v1/Blog/GetAllBlogWithPage", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "lang": 'en',
        "blogCategoryId": categoryId,
        "currentPage": 1
      })
    })
    const data = await res.json()
    setAllBlogs(data.data)
    console.log(data.count)

  }

  getBlogsCatigories();

  useEffect(() => {

    if (category !== 'All') {
      const filtered = allCategories.find((item) => item.categeryName === category);
      setCategoryId(filtered.id)
      getAllBlogsByCategoryId();
    } else {
      setAllBlogs(blogs.data)
    }
  }, [category])




  const router = useRouter();
  const handleChangePage = (event, newPage) => {
    router.push(`/blogs/page/${newPage}`);
    if (newPage === 1) {
      router.push(`/blogs/`);
    }

  };

  const count = blogs.count / 6;
  const newCount = Math.floor(count);

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
                onChange={handleFilter}
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

                {allCategories.map((item) => (
                  <MenuItem value={item.categeryName}>
                    {item.categeryName}
                  </MenuItem>
                ))}


              </Select>
            </FormControl>
          </div>
          {allCategories.map((item) => (
            <h1>
              {item.categeryName}
            </h1>
          ))}
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
                allBlogs?.map((post, idx) => (
                  <>
                    <Link href={`/blogs/${post.title.split(' ').join('-')}`} className={styles.box} key={idx}>
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
                          <img src={post.authorImg} alt="" />
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
                          <button>Tag Name</button>
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
              <Pagination
                count={newCount}
                onChange={handleChangePage}
              />

            </Box>
          </Container>
        </section>

        {/* Tag Component */}
        <Tags />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://safemedigoapi-001-site1.gtempurl.com/api/v1/Blog/GetAllBlogWithPage", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": 'en',
      "blogCategoryId": 0,
      "currentPage": 1
    })
  })
  const data = await res.json()

  return {
    props: {
      blogs: data
    }
  }
}
