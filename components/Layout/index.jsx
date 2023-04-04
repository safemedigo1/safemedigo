
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useRouter } from "next/router";

export default function Layout({ children }, props) {
  // Get routes to make dynamic data
  const router = useRouter();
  const { pathname } = router;

  console.log(props, 'my PROPS  ')

  return (
    <>
      {pathname !== '/search' ?
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </> : <>
          <main>
            {children}
          </main>
        </>

      }
    </>
  )
}

