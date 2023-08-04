import React, { useEffect, useRef, useState } from "react";
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
import Joi from "joi";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner'
import Link from "next/link";
import Head from "next/head";


export default function BolgDetailsID({ blog, allBlogsTagsData }) {
  const [commentsDetails, setCommentsDetails] = useState([])
  const [commentsCount, setCommentsCount] = useState(0)
  const [commentError, setCommentError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [errorList, setErrorList] = useState(false);
  const [currentPageCount, setCurrentPageCount] = useState(1)
  const [isCommentSucces, setIsCommentSucces] = useState()


  const [userCommentDetails, setUserCommentDetails] = useState({
    comment: "",
    email: "",
    name: "",
  });


  function createMarkup() {
    return { __html: decodeURI(blog.extraContent) };

  }




  const { t } = useTranslation()
  const { userimg } = imgs;
  const router = useRouter();
  const formRef = useRef();

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
    const getBlogComments = await axios.post("https://api2.safemedigo.com/api/v1/BlogComment/GetAllBlogCommentByPage", {
      "currentPage": currentPageCount,
      "blogId": blog.id
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).catch((error) => console.log(error))


    if (currentPageCount > 1) {
      setCommentsDetails(prev => [...prev, ...getBlogComments.data.returnData])
    } else {
      setCommentsDetails(getBlogComments.data.returnData)
    }

    setCommentsCount(getBlogComments.data.count)

    if (getBlogComments.status === 200) {
      setIsLoadingComments(false)
    } else {
      setIsLoadingComments(false)
    }
  }


  const addComment = async (e) => {
    e.preventDefault();

    setIsLoading(true)

    let validationRes = validationForm();
    if (validationRes.error) {
      // push error to error List Array
      setErrorList(validationRes.error.details);

      setIsLoading(false);

      toast.error(t("single_blog:emailValid"))
    } else {
      const addCommentData = await axios.post("https://api2.safemedigo.com/api/v1/BlogComment/Add", {
        "blogId": blog.id,
        "comment": userCommentDetails.comment,
        "email": userCommentDetails.email,
        "name": userCommentDetails.name
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).catch(error => {
        setIsLoading(false)
        toast.error(t("single_blog:commentFailed"))
        setIsCommentSucces(false)
        if (error.response.status === 500) {
          setCommentError(error.response.data);
        } else {
          setIsCommentSucces(addCommentData.data.isSuccess)
        }
      }
      )
      setIsLoading(false)
      if (addCommentData?.status === 200) {
        toast.success(t("single_blog:commentSuccess"))
        formRef.current?.reset()
      }
    }

  }

  useEffect(() => {
    getAllCommentByPage();
  }, [currentPageCount])




  const handleInputChange = (e) => {
    e.preventDefault();
    let userCommentDetailsDes = { ...userCommentDetails };
    userCommentDetailsDes[e.target.name] = e.target.value;
    setUserCommentDetails(userCommentDetailsDes);
  }

  const handleLoadMoreComments = () => {
    setIsLoadingComments(true)
    setCurrentPageCount((prev) => prev + 1)
  }


  const validationForm = () => {
    let scheme = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net", "org"] } })
        .required(),
      comment: Joi.string(),
      name: Joi.string()
    });

    return scheme.validate(userCommentDetails, { abortEarly: false });
  };

  const handleFocus = () => {
    setErrorList(false)
    setIsCommentSucces()
    setCommentError(null)

  }


  return (
    <>
      <Head>
        <title>
          {blog.title}
        </title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* IG & TW files */}
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <script async defer src="//www.instagram.com/embed.js"></script>
      </Head>


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
        id={styles.signle_blog_header} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className={styles.img_container}>
          <Image
            width={300}
            height={218}
            src={blog.image} alt={""} />
        </div>

        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.title}>
            <Typography variant="h1">
              {blog.title}
            </Typography>
          </div>

          <div className={styles.writer_info}>
            <div className={styles.writer_img}>
              <Image width={100} height={100} src={blog.publisherImage} alt={blog.publisher} />
            </div>

            <div className={styles.name}>
              <Link href="/about-us#team">
                {blog.publisher}
              </Link>
              - {blog.jobTitle}
            </div>


          </div>

          <Box sx={{ marginTop: '20px' }} className={styles.writer_info}>
            <div className={styles.writer_img}>
              <Image width={100} height={100} src={blog.reviewerImage} alt={blog.reviewer} />
            </div>

            <div className={styles.name}>
              <Link href="/about-us#team">
                {blog.reviewer}
              </Link>
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
              <div className={styles.headline_img_container}>
                <Image
                  width={770}
                  height={518}
                  src={blog.image} alt={""} />
              </div>

              <div
                id={"apply"}
                className="ck-content"
                dangerouslySetInnerHTML={createMarkup()}
                dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}
              />

            </article>

            {blog?.treatment !== null &&
              <div className={styles.blog_treatment_box}>
                <div className={styles.box}>
                  <div className={styles.img_container}>
                    <Image width={344} height={518} src={blog?.treatment?.image} alt={blog?.treatment?.image} />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.treatment_title}>
                      <Typography variant="h5">{blog?.treatment?.name}</Typography>
                    </div>
                    <div className={styles.price}>
                      <p>Cost Start From <span>{blog?.treatment?.cost} &euro;</span></p>
                    </div>
                    <div className={styles.starts}>
                      <Rating name="read-only" defaultValue={blog?.treatment?.rate} />
                      <span className={styles.reviews_num}>{blog?.treatment?.reviewCount} Reviews</span>
                    </div>
                    <div className={styles.desc}>
                      <Typography >
                        {blog?.treatment?.description}
                      </Typography>
                    </div>

                    <div className={styles.more_btn}>
                      <Link href='/'>
                        <button>More</button>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            }

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
      </Container >

      <div id={styles.related_tags} dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <Tags allBlogsTagsData={allBlogsTagsData} />
      </div>
      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <div id={styles.cards_container} >
          <div className={styles.comments_card}>
            <div className={styles.card}>
              <div className={styles.header}>
                <Typography dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>
                  {t("single_blog:comments")} <span>{`(${commentsCount})`}</span>
                </Typography>
                <hr />
              </div>
              <div className={styles.card_body}>

                {commentsDetails.length > 0 ?
                  commentsDetails?.map((comment, idx) => (
                    <>
                      <div className={styles.user_comment} key={idx}>
                        <div className={styles.user_data}>
                          <div className={styles.img_container}>
                            <Image width={100} height={100} src={userimg.src} alt="" />
                          </div>
                          <div className={styles.name}>
                            <span>{comment.name},</span>
                          </div>
                        </div>
                        <div className={styles.comment}>
                          <Typography>
                            {comment.comment}
                          </Typography>
                          <div className={styles.date}>
                            {comment.createdDateStr}
                          </div>
                        </div>
                      </div>


                      {comment.reply !== null &&
                        < div className={styles.admin_comment}>
                          <div className={styles.admin_data}>
                            <div className={styles.img_container}>
                              <Image width={100} height={100} src={comment.replyUserImage} alt="" />
                            </div>
                            <div className={styles.replyUserNam}>
                              <span>
                                {comment.name}
                              </span>
                            </div>
                          </div>

                          <div className={styles.comment}>
                            <Typography>
                              {comment.reply}
                            </Typography>

                            <div className={styles.date}>
                              {comment.replyDateStr}
                            </div>
                          </div>
                        </div >
                      }
                    </>
                  ))
                  : <h3>There's no more comments</h3>}

                {commentsCount !== commentsDetails.length &&
                  <button className={styles.load_more_btn} onClick={handleLoadMoreComments}>
                    {isLoadingComments !== true ?
                      t("single_blog:load_more")
                      :
                      <>
                        Loading {` `}
                        <ThreeDots
                          height="25"
                          width="25"
                          radius="9"
                          color="#00ccb5"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClassName="load_more_btn"
                          visible={true}
                        />

                      </>

                    }

                  </button>
                }

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

              <form action="" ref={formRef} onSubmit={addComment}>


                <div className={styles.name}>
                  <label dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`} htmlFor="">{t("single_blog:name")} <span>*</span></label>
                  <input type="text" name="name" placeholder="Enter Your Name" required onFocus={handleFocus} onChange={handleInputChange} />
                </div>

                <div className={styles.email} >
                  <label htmlFor="" dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`}>{t("single_blog:email")} <span>*</span></label>
                  <input type="email" name="email" placeholder="Enter Your Email" required onFocus={handleFocus} onChange={handleInputChange} />
                  {errorList !== false &&
                    <Typography sx={{ color: 'red', marginTop: '10px' }}>{errorList[0].message}</Typography >
                  }
                  {isCommentSucces === false &&
                    <Typography sx={{ color: 'red', marginTop: '10px' }}>{t("single_blog:commentFailed")}</Typography >
                  }
                </div>

                <div className={styles.comment}>
                  <label dir={`${router.locale === 'ar' ? 'rtl' : 'ltr'}`} htmlFor="">{t("single_blog:comment")} <span>*</span></label>
                  <textarea placeholder="Enter Your Comment" rows="4" cols="50" required name="comment" onFocus={handleFocus} onChange={handleInputChange}>

                  </textarea>
                </div>


                <div className={styles.add_comment_btn}>
                  {isCommentSucces === true ?
                    <Typography variant="h6" sx={{ marginBottom: "10px" }}>* {t("single_blog:commentSuccess")}</Typography > : ""
                  }

                  <button type="submit"  >
                    {isLoading === false ?
                      <>
                        <GoPlus />
                        {t("single_blog:add_comment")}
                      </> :
                      <>
                        Sending {` `}
                        <ThreeDots
                          height="25"
                          width="25"
                          radius="9"
                          color="#fff"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClassName="load_more_btn"
                          visible={true}
                        />

                      </>
                    }
                  </button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </Container >

    </>
  );
}


export async function getStaticPaths() {
  const res = await fetch("https://api2.safemedigo.com/api/v1/Blog/GetAllBlogSlugs");
  const data = await res.json()

  const paths = data?.map((data) => {
    return {
      params: { slug: data.toString() }
    }
  })

  return {
    paths,
    fallback: 'blocking',
  };
}



export async function getStaticProps({ params, locale }) {
  const res = await fetch("https://api2.safemedigo.com/api/v1/Blog/GetBlogUiDataBySlug", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "slug": params.slug,
      "lang": locale
    })
  })
  const data = await res.json()

  const allBlogTagsRes = await fetch("https://api2.safemedigo.com/api/v1/Blog/GetAllBlogsTags", {
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
      blog: data,
      allBlogsTagsData,
      ...(await serverSideTranslations(locale, ['single_blog', 'navbar', 'sec_navbar', 'page_header_comp', 'blogs_page', 'Footer'])),
    },
    revalidate: 10,
  }
}

