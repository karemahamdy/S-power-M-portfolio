// CorporateIdentityCardText.js
const CardText = ({ text }) => {
  return (
    <div className="flex-grow p-[2.5rem]">
      <p className="text-[#979797] text-md font-bold">
        {text}
      </p>
    </div>
  );
};

export default CardText;
