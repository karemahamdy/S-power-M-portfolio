
const CorporateIdentityCard = ({image, text}) => {

  return (
    <div className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden w-full">
      <div className="flex-grow p-[2.5rem]">
        <p className="text-[#979797] text-md font-bold">
        {text}
        </p>
      </div>
      <div className="flex-shrink-0 w-[15rem] h-32 bg-gray-300 flex items-center justify-center">
        <div className="">
        
        <img src={image}  className="object-cover h-full w-full" />
    
            </div>
      </div>
    </div>
  );
};

export default CorporateIdentityCard;