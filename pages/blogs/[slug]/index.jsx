import React, { useEffect, useState } from "react";
import imgs from "../../../assets/constants/imgs";
import { PageHeader, SecNavbar, Tags } from "../../../components";
import styles from "./index.module.scss";
import { Container, Typography, Rating, Box } from "@mui/material";
import { BsLink45Deg, BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go'
import Image from 'next/image'
import { useRouter } from "next/router";
import axios from "axios";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";


export default function BolgDetailsID({ blog, allBlogsTagsData }) {
  const [commentsDetails, setCommentsDetails] = useState()
  function createMarkup() {
    return { __html: blog.content };
  }

  const { t } = useTranslation()
  const { author, } = imgs;
  const router = useRouter();

  function shareToFacebook() {
    const url = router.asPath;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=www.safemedigo.com/${url}`;
    window.open(shareUrl, '_blank');
  }

  function shareToTwitter() {
    const url = router.asPath;
    const shareUrl = `https://twitter.com/intent/tweet?url=www.safemedigo.com/${url}`;

    window.open(shareUrl, '_blank');
  }


  function shareToEmail() {
    const url = router.asPath;
    const shareUrl = `mailto:?body=www.safemedigo.com/${url}`;

    window.location.href = shareUrl;
  }


  function shareToLink() {
    const url = router.asPath;
    navigator.clipboard.writeText(`www.safemedigo.com/${url}`)
      .then(() => alert('Link copied to clipboard!'))
      .catch(error => console.error(error));
  }



  // Blog Comments API's
  const getAllCommentByPage = async () => {
    const getBlogComments = await axios.post("http://safemedigoapi2-001-site1.atempurl.com/api/v1/BlogComment/GetAllBlogCommentByPage", {
      "currentPage": 1,
      "blogId": 37
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    setCommentsDetails(getBlogComments.data)

  }

  return (
    <>
      <SecNavbar blog={blog} />
      <PageHeader blog={blog} />
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            lg: "none"
          }
        }}
        id={styles.signle_blog_header}>
        <div className={styles.img_container}>
          <img
            layout="responsive"
            width={4}
            height={218}
            objectFit="cover"
            objectPosition="center"
            src={blog.image} alt={blog.title} />
        </div>

        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.title}>
            <Typography variant="h1">
              {blog.title}
            </Typography>
          </div>

          <div className={styles.writer_info}>
            <div className={styles.writer_img}>
              <img width={50} height={4} src={blog.publisherImage} alt={blog.publisher} />
            </div>

            <div className={styles.name}>
              <a href="#">
                {blog.publisher}
              </a>
              - {blog.jobTitle}
            </div>


          </div>

          <Box sx={{ marginTop: '20px' }} className={styles.writer_info}>
            <div className={styles.writer_img}>
              <img width={50} height={4} src={blog.reviewerImage} alt={blog.reviewer} />
            </div>

            <div className={styles.name}>
              <a href="#">
                {blog.reviewer}
              </a>
              - {blog.reviewerJobTitle}
            </div>
          </Box>

          <div className={styles.date}>
            {blog.date}
          </div>
        </Container>
      </Box>

      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <div id={styles.blog_details} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
          <div className={styles.headline}>
            <article className={styles.headline_inner}>
              <div dangerouslySetInnerHTML={createMarkup()} />
            </article>

            {blog.treatment !== null &&
              <div className={styles.blog_treatment_box}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <img width={50} height={4} src={blog?.treatment?.image} alt={blog?.treatment?.image} />
                  </div>

                  <div className={styles.text_container}>

                    <div className={styles.treatment_title}>
                      <Typography variant="h5">{blog.treatment.name}</Typography>
                    </div>
                    <div className={styles.price}>
                      <p>Cost Start From <span>{blog.treatment.cost} &euro;</span></p>
                    </div>
                    <div className={styles.starts}>
                      <Rating name="size-medium" defaultValue={blog.treatment.rate} />
                      <span className={styles.reviews_num}>{blog.treatment.reviewCount} Reviews</span>
                    </div>
                    <div className={styles.desc}>
                      <Typography >
                        {blog.treatment.description}
                      </Typography>
                    </div>

                    <div className={styles.more_btn}>
                      <a href='/'>
                        <button>More</button>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            }

            {console.log(blog.treatment)}
          </div>

          <div className={styles.share}>
            <Typography>
              <span>{t("single_blog:helpful")} </span>

              {t("single_blog:share")}
            </Typography>
            <div className={styles.icons_container}>
              <BsTwitter onClick={shareToTwitter} />
              <FaFacebookSquare onClick={shareToFacebook} />
              <HiOutlineMail onClick={shareToEmail} />
              <BsLink45Deg onClick={shareToLink} />
            </div>
            <hr />
          </div>
        </div>

        <div id={styles.related_tags} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
          <Tags allBlogsTagsData={allBlogsTagsData} />
        </div>

        <div id={styles.cards_container} >
          <div className={styles.comments_card}>
            <div className={styles.card}>
              <div className={styles.header}>
                <Typography dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
                  {t("single_blog:comments")} <span>(12)</span>
                </Typography>
                <hr />
              </div>
              <div className={styles.card_body}>
                {/* <div className={styles.user_comment}>
                  <div className={styles.user_data}>
                    <div className={styles.img_container}>
                      <Image width={50} height={4} src={author.src} alt="" />
                    </div>
                    <div className={styles.name}>
                      <span>Sammer Mt,</span>
                    </div>
                  </div>
                  <div className={styles.comment}>
                    <Typography>
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nam Viverra Euismod Odio,
                    </Typography>
                    <div className={styles.date}>
                      Dec 6, 2017 - 18:55
                    </div>
                  </div>
                </div> */}
                {
                  commentsDetails?.map((comment, idx) => (
                    <>
                      <div className={styles.user_comment} key={idx}>
                        <div className={styles.user_data}>
                          <div className={styles.img_container}>
                            <img width={50} height={4} src={author.src} alt="" />
                          </div>
                          <div className={styles.name}>
                            <span>user,</span>
                          </div>
                        </div>
                        <div className={styles.comment}>
                          <Typography>
                            {comment.comment}
                          </Typography>
                          <div className={styles.date}>
                            {comment.createdDate}
                          </div>
                        </div>
                      </div>

                      <div className={styles.admin_comment}>
                        <div className={styles.admin_data}>
                          <div className={styles.img_container}>
                            <img width={50} height={4} src={author.src} alt="" />
                          </div>
                          <div className={styles.name}>
                            <span>reply user comment</span>
                          </div>
                        </div>

                        <div className={styles.comment}>
                          <Typography>
                            {comment.reply}
                          </Typography>

                          <div className={styles.date}>
                            {comment.replyDate}
                          </div>
                        </div>
                      </div>
                    </>
                  ))

                }
                {/* <div className={styles.admin_comment}>
                  <div className={styles.admin_data}>
                    <div className={styles.img_container}>
                      <Image width={50} height={4} src={author.src} alt="" />
                    </div>
                    <div className={styles.name}>
                      <span>Admin</span>
                    </div>
                  </div>

                  <div className={styles.comment}>
                    <Typography>

                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nam Viverra Euismod

                    </Typography>

                    <div className={styles.date}>
                      Dec 6, 2017 - 18:55
                    </div>
                  </div>
                </div> */}

                <div className={styles.load_more_btn}>
                  <button>{t("single_blog:load_more")}</button>
                </div>

              </div>
            </div>


          </div>

          <div className={styles.leave_comment}>
            <div className={styles.card}>
              <div className={styles.header}>
                <Typography dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
                  {t("single_blog:leave_comment")}
                </Typography>
                <hr />
              </div>

              <form action="">
                <div className={styles.name}>
                  <label dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`} htmlFor="">{t("single_blog:name")} <span>*</span></label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>

                <div className={styles.email} >
                  <label htmlFor="" dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>{t("single_blog:email")} <span>*</span></label>
                  <input type="emal" placeholder="Enter Your Email" />
                </div>

                <div className={styles.comment}>
                  <label dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`} htmlFor="">{t("single_blog:comment")} <span>*</span></label>
                  <textarea placeholder="Enter Your Comment" name="" rows="4" cols="50">

                  </textarea>
                </div>


                <div className={styles.add_comment_btn}>
                  <button type="submit">
                    <GoPlus />
                    {t("single_blog:add_comment")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getServerSideProps({ query, locale }) {
  const res = await fetch("https://api.safemedigo.com/api/v1/Blog/GetBlogUiDataBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "slug": query.slug,
      "lang": locale
    })
  })
  const data = await res.json()

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
      ...(await serverSideTranslations(locale, ['single_blog', 'navbar', 'sec_navbar', 'page_header_comp', 'blogs_page'])),
      blog: data,
      allBlogsTagsData
    }
  }
}