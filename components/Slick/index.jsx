import React, { useState } from 'react'
import Slider from 'react-slick';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { Rating, Typography } from '@mui/material';
import styles from './index.module.scss'
import imgs from "../../assets/constants/imgs";
import Image from 'next/image';
import { motion } from "framer-motion";

const Slick = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const { post3, } = imgs;

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <HiChevronRight
        className={className}
        style={{ ...style, display: "block", background: "#004747", color: 'white', borderRadius: '26px', width: '48px', height: '48px', fontSize: '10px' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <HiChevronLeft
        className={className}
        style={{ ...style, display: "block", background: "#004747", color: 'white', borderRadius: '26px', width: '48px', height: '48px' }}
        onClick={onClick}
      />
    );
  }


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    ,
    afterChange: (currentSlide) => {
      setActiveSlide(currentSlide);
    }
  };


  return (
    <div className={styles.result_container_slider_mobile}>
      <div className={styles.filter_section}>
        <Slider {...settings}>
          <div className={styles.box}>
            <div className={styles.title}>
              years experience
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.title}>
              years experience
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.title}>
              years experience
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.title}>
              years experience
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.title}>
              years experience
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.title}>
              years experience
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.title}>
              years experience
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.title}>
              years experience
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.title}>
              years experience
            </div>
          </div>
        </Slider>
        <Typography>{activeSlide + 1}/9</Typography>
      </div>

      <div className={styles.results}>
        <div className={styles.boxes_container}>
          <div className={styles.box} onClick={() => setIsDeleteActive((prev) => !prev)}>
            {!isDeleteActive &&
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, }}
                className={styles.img_container}>
                <Image width={72} height={106} src={post3.src} alt={"doc.name"} />

              </motion.div>
            }
            <motion.div
              animate={{ x: isDeleteActive ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}

              className={styles.doc_info}>

              <div className={styles.doc_name}><Typography>Dr Mehmet Nu.</Typography></div>
              <div className={styles.rating}>
                <Rating name="read-only" defaultValue={4} size="small" readOnly />
                <span className={styles.reviews_num}>{4} Reviews</span>
              </div>

            </motion.div>
            <motion.div
              animate={{ x: isDeleteActive ? 10 : 20 }}
              // transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}


              className={`${styles.filterby}`}>
              <Typography>5 Years</Typography>
            </motion.div>

            {isDeleteActive &&
              <motion.div
                className={styles.delete_btn}>
                <button>Delete</button>
              </motion.div>
            }

          </div>
          <div className={styles.box} onClick={() => setIsDeleteActive((prev) => !prev)}>
            {!isDeleteActive &&
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, }}
                className={styles.img_container}>
                <Image width={72} height={106} src={post3.src} alt={"doc.name"} />

              </motion.div>
            }
            <motion.div
              animate={{ x: isDeleteActive ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}

              className={styles.doc_info}>

              <div className={styles.doc_name}><Typography>Dr Mehmet Nu.</Typography></div>
              <div className={styles.rating}>
                <Rating name="read-only" defaultValue={4} size="small" readOnly />
                <span className={styles.reviews_num}>{4} Reviews</span>
              </div>

            </motion.div>
            <motion.div
              animate={{ x: isDeleteActive ? 10 : 20 }}
              // transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}


              className={`${styles.filterby}`}>
              <Typography>5 Years</Typography>
            </motion.div>

            {isDeleteActive &&
              <motion.div
                className={styles.delete_btn}>
                <button>Delete</button>
              </motion.div>
            }

          </div>
          <div className={styles.box} onClick={() => setIsDeleteActive((prev) => !prev)}>
            {!isDeleteActive &&
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, }}
                className={styles.img_container}>
                <Image width={72} height={106} src={post3.src} alt={"doc.name"} />

              </motion.div>
            }
            <motion.div
              animate={{ x: isDeleteActive ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}

              className={styles.doc_info}>

              <div className={styles.doc_name}><Typography>Dr Mehmet Nu.</Typography></div>
              <div className={styles.rating}>
                <Rating name="read-only" defaultValue={4} size="small" readOnly />
                <span className={styles.reviews_num}>{4} Reviews</span>
              </div>

            </motion.div>
            <motion.div
              animate={{ x: isDeleteActive ? 10 : 20 }}
              // transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}


              className={`${styles.filterby}`}>
              <Typography>5 Years</Typography>
            </motion.div>

            {isDeleteActive &&
              <motion.div
                className={styles.delete_btn}>
                <button>Delete</button>
              </motion.div>
            }

          </div>

        </div>
      </div>

    </div>
  )
}

export default Slick