
import IntroImage from "../../assets/images/Group 10.svg";
import PrimaryButton from "../../components/PrimaryBtn";

function Intro() {
  return (
<>
    <div className='flex flex-row mt-10 '>
      <div className=' w-[90%]'>
        <img src={IntroImage} alt="intro" />
      </div>
      <div className='space-y-6  w-[50%] mt-24'>
        <h1 className="text-secondary text-4xl font-bold">
        WHO WE ARE
        </h1>
        <p className="text-primary text-xl">In a world that never stops spinning and keeps pushing businesses towards just one thing is that, how to WOW their customers.</p>
        <p className="text-primary text-xl">we came to add an inspiring value for how our clients not just can wow their customers, but also impress them with how they understand them and can deliver accurate solutions for their pain problems.</p>
          <PrimaryButton>More Details</PrimaryButton> 
      </div>
    </div>
</>
  )
}
export default Intro