
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

export default function Layout({ children }, props) {
  const router = useRouter();
  const { pathname } = router;


  return (
    <>
      {pathname !== '/search' & pathname !== '/quote' & pathname !== '/login' & pathname !== '/signup' & pathname != '/editor' ?
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </> : <>
          <main style={pathname === '/search' | pathname === '/quote' && { background: '#004747', minHeight: '100vh' }}>
            {children}
          </main>
        </>

      }
    </>
  )
}

