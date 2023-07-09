
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

export default function Layout({ children }, props) {
  const router = useRouter();
  const { pathname } = router;

  console.log(children.filter(str => str != ';'))
  return (
    <>
      {pathname !== '/search' & pathname !== '/quote' & pathname !== '/login' & pathname !== '/signup' & pathname != '/editor' ?
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </> : <>
          <Box sx={pathname === '/search' | pathname === '/quote' && { background: { lg: '#004747', xlg: '#004747' }, minHeight: '100vh' }}>
            {children.filter(str => str != ';')}
          </Box>
        </>

      }
    </>
  )
}

