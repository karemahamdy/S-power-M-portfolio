import IntroImage from "../assets/images/Layer 1.png";
import SocialmediaIcons from "../components/SocialmediaIcon";

const Header = () => {
  return (
    <header className="w-full">

      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">

          <div className="flex items-center">
            <img src={IntroImage} alt="intro" className="w-[70%]" />
          </div>

          <div className="flex space-x-6">
          <SocialmediaIcons>
            <p className="text-gray-300"/>
            <span className="text-blue-900"/>
            </SocialmediaIcons>
          </div>

        </div>
      </div>

    </header>
  );
};

export default Header;