import bg_img from "../assets/images/more/15.jpg";
import logo1 from "../assets/images/more/logo1.png";

const Header = () => {
  return (
    <div
      className="w-full bg-cover bg-center font-rancho"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <div
        className="flex justify-between md:px-10 px-2 items-center py-3 container mx-auto"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <a href="/">
          <div className="flex items-center gap-2">
            <img className="w-15" src={logo1} alt="" />
            <h1 className="text-2xl">Espresso Emporium</h1>
          </div>
        </a>
        <div>
          <h1>Espresso Emporium</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
