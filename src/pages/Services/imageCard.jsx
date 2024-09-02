// CorporateIdentityCardImage.js
const CardImage = ({ image }) => {
  return (
    <div className="flex-shrink-0 w-[15rem] h-32 bg-gray-300 flex items-center justify-center">
      <img src={image} alt="Corporate Identity" className="object-cover h-full w-full" />
    </div>
  );
};

export default CardImage;
