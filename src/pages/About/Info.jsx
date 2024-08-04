import IntroImage from "../../assets/images/Group 28.png";
function Info () {
  return (
    <>
    <div className='flex flex-row my-10 container-box justify-between'>
      <div className=' w-[40%] mt-16'>
        <img src={IntroImage} alt="intro" />
      </div>
      <div className='space-y-6  w-[50%] mt-24'>
      
        <p className="text-primary text-xl">In a world that never stops spinning and keeps pushing businesses towards just one thing is that, how to WOW their customers, we came to add an inspiring value for how our clients not just can wow their customers, but also impress them with how they understand them and can deliver accurate solutions for their pain problems.</p>
        <p className="text-primary text-xl">
        As we have always dreamed of bringing the growth mindset to life. And actually, we consider this as our core mission. So, when everyone is busy creating the WOW of now, our focus goes to telling inspiring stories and building a strong brand presence in the markets to influence customers and inspire people to take desired actions; not only on the short term but beyond.
        </p>
        
      </div>
    </div>
  
  </>
  )
}
export default Info