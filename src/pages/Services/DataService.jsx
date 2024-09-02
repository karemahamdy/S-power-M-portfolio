import CardImage from "./imageCard"
import CardText from "./textCard"

const CorporateIdentityCard = ({ image, text }) => {
  return (
    <>
      <div className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden w-full">
        <CardImage image={image} />
        <CardText text={text} />
      </div>

      <div className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden w-full">
        <CardText text={text} />
        <CardImage image={image} />
      </div>
    </>
  );
};

export default CorporateIdentityCard;
