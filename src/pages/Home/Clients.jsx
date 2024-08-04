import ClientsImage from "../../assets/images/Group 31.svg";
import ClientFilter from "../../components/Tabs.jsx"

function Clients() {
  return (
    <>
      <div className="my-16">
        <h1 className="mb-8 text-primary text-4xl font-bold text-center">
        OUR CLIENTS
        </h1>

  <ClientFilter/>
      <div className=''>
        <img src={ClientsImage} alt="clients" />
      </div>
    
    </div>
</>
  )
}
export default Clients