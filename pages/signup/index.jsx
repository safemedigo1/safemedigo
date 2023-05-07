import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'

const SignUp = () => {
  return (
    <>
      <div id={styles.login}>
        <div className={styles.card_inner}>
          <div className={styles.icon_container}>
            <Link href="/">
              <IoMdClose />
            </Link>
          </div>

          <div className={styles.header}>
            <h1>Create An Account</h1>
            <p>Join Safemedigo And Plan Your Treatment Trip, View Real Reviews, Ask Doctors And View Real Before And After</p>
          </div>

          <form action="">

            <div className={styles.email}>
              <label htmlFor="">Username Or Email</label>
              <input type="email" placeholder='Username Or Email' />
            </div>

            <div className={styles.password}>
              <label htmlFor="username">Username<span>*</span> </label>
              <input type="username" placeholder='Username' />
            </div>

            <div className={styles.password}>
              <label htmlFor="username">Username<span>*</span> </label>
              <input type="username" placeholder='Username' />
            </div>

          </form>

          <div className={styles.links_container}>
            <div className={styles.checkbox}>
              <input type="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <Link href={'/forgot'} className={styles.forgot}>Forgot Password?</Link>
          </div>




          <div className={styles.or}>
            Or
          </div>

          <div className={styles.buttons_container}>
            <div className={styles.google}>
              <button >
                <FcGoogle />
                Sign in with Google
              </button>

            </div>

            <div className={styles.facebook}>
              <div className={styles.icon_container}>
                <BsFacebook />
              </div>
            </div>

            <div className={styles.twitter}>
              <div className={styles.icon_container}>
                <AiFillTwitterCircle />
              </div>
            </div>
          </div>

          <div className={styles.continue}>
            <button>Continue</button>
          </div>

          <div className={styles.signup}>
            Already a member?
            {` `}
            <Link href="/login">
              Log in
            </Link>
            {` `}
          </div>

        </div>
      </div>
    </>
  )
}

export default SignUp