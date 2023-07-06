
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

export default function Layout({ children }, props) {
  const router = useRouter();
  const { pathname } = router;


  return (
    <>
      {pathname !== '/search' & pathname !== '/login' & pathname !== '/signup' & pathname != '/editor' ?
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </> : <>
          <main style={pathname === '/search' && { background: '#004747' }}>
            {children}
          </main>
        </>

      }
    </>
  )
}

