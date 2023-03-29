import styles from '../../index.module.scss';
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
import { useState } from "react";
import SecNavbar from '@/components/Navbar/SecNavbar';

export default function BlogPage({ blogCategory, blogs, products, currentPage, totalPages }) {
  const router = useRouter();
  const [category, setCategory] = useState('All');


  const handleMyChangePage = (event, value) => {
    event.preventDefault();
    console.log(value, "VALUEEEE")
    if (value === 1) {
      router.push(`/blogs/`);
    }

    router.push(`/blogs/page/${value}`)
  }

  const handleFilterChanges = (event, value) => {
    router.push(`/category/${value.props.value}/page/1`);

    // setTimeout(() => window.location.reload(), 2000);
    setCategory(value.props.value
    )



  }


  const count = blogs.count / 6;
  const newCount = Math.floor(count);
  return (
    <>
      <SecNavbar />
      <PageHeader />
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
            <div className={styles.title}>
              <Typography variant="h6">Most Recent Posts</Typography>
            </div>

            <div className={styles.boxes_container}>
              {blogs.data.map((post, idx) => (
                <>
                  <Link href={`/blogs/${post.slug}/${post.id}`} className={styles.box} key={idx}>
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
              ))}
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
        {/* Tags Component */}
        <Tags />
      </div>






    </>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query, "MYQYERY")
  const page = query.slug || '1'; // If no page is specified, default to page 1
  const limit = 6; // Number of products to display per page
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  console.log(query, "MYQYERY")




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

  const res = await fetch("http://safemedigoapi2-001-site1.atempurl.com/api/v1/Blog/GetAllBlogWithPage", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": 'en',
      "blogCategoryId": myCategoryId[0]?.id || '0',
      "currentPage": page,
    })
  })
  const data = await res.json()


  const products = data.data;
  const totalProducts = data.count;
  const totalPages = Math.ceil(totalProducts / limit);


  console.log(page, 'CURRENT PAGEEE')
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

