import React from 'react'
import { useRouter } from "next/router";

const category = () => {
  const router = useRouter();



  router.push(`/blogs`)
}

export default category