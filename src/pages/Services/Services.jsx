import BackGround from "../../components/Background"
import CorporateIdentityCard from "./DataService"
import Footer from "../../pages/Home/Footer.jsx"
function Services() {
  return (
    <>
      <BackGround>Our Services</BackGround>

      <h1 className="text-primary font-bold text-[30px] text-center my-12">We provide wide range of business services</h1>
      <div className="container-box grid justify-between space-y-12">

        <CorporateIdentityCard
          image="src/assets/images/Rectangle 44.png"
          text="Presenting your brand/business through offline advertising should serve the big image of your business/ brand as well. So, we utilize the principles of branding and creativity to deliver a perfectly tailored image of how you want."
        />

        <CorporateIdentityCard
          image="src/assets/images/Rectangle 45.png"
          text="Presenting your brand/business through offline advertising should serve the big image of your business/ brand as well. So, we utilize the principles of branding and creativity to deliver a perfectly tailored image of how you want."
        />

        <CorporateIdentityCard
          image="src/assets/images/Rectangle 46.png"
          text="Presenting your brand/business through offline advertising should serve the big image of your business/ brand as well. So, we utilize the principles of branding and creativity to deliver a perfectly tailored image of how you want."
        />

        <CorporateIdentityCard
          image="src/assets/images/Rectangle 64.png"
          text="Presenting your brand/business through offline advertising should serve the big image of your business/ brand as well. So, we utilize the principles of branding and creativity to deliver a perfectly tailored image of how you want."
        />

      </div>
      <Footer/>

    </>
  )
}
export default Services