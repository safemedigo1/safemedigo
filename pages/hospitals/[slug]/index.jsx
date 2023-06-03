import { PageHeader, SecNavbar } from "@/components";
import InnerPageNavbar from "@/components/Navbar/InnerPageNavbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Hospital = () => {
  return (
    <>
      <SecNavbar />
      <PageHeader />
      <InnerPageNavbar />
      <section id='overview'>

      </section>
    </>
  )
}

export default Hospital

export async function getServerSideProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "proceduresSymptoms_single"])),
    },
  };
}
