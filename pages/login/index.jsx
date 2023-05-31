import Link from 'next/link'
import React from 'react'
import styles from './index.module.scss'
import { IoMdClose } from 'react-icons/io'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
const login = () => {
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
            <h1>Log in</h1>
            <p>Welcome Back</p>
          </div>

          <form action="">
            <div className={styles.email}>
              <label htmlFor="">Username Or Email</label>
              <input type="email" placeholder='Username Or Email' />
            </div>
            <div className={styles.password}>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Username Or Password' />
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
                <p>
                  Sign in with Google
                </p>
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
            Not a member yet?
            {` `}
            <Link href="/signup">
              Sign Up
            </Link>
            {` `}
            Now It Is Free And Quick.
          </div>

        </div>
      </div>
    </>
  )
}

export default login