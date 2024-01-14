import { Link } from "react-router-dom";

import Logo from "../../assets/icons/mybook.svg";
import Cart from "../../assets/icons/magazine.svg";
import Search from "../../assets/icons/search.svg";
import Girl from "../../assets/images/girl.png";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header flex pl-[140px] justify-between">
        <div className="pt-[33px] flex flex-col gap-[89px]">
          <div className="flex gap-5 cursor-pointer">
            <img src={Logo} alt="Mybook logo" />
            <div className="h-8 w-[1px] bg-[#DEDEDE]"></div>
            <img src={Cart} alt="Shopping cart" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[75px] uppercase font-bold mb-4 font-mainFont">
              read and add <br /> your insight
            </h1>
            <p className="capitalize text-2xl font-normal mb-[25px] font-secondaryFont">
              find your favorite book and read it here for free
            </p>
            <div className="flex gap-[3px] bg-[#F5F6F8] w-[406px] py-[18px] pl-[15px]">
              <img src={Search} alt="Search logo" />
              <input
                className="font-extraFont bg-transparent w-full outline-none"
                type="text"
                placeholder="Search Book"
              />
            </div>
          </div>
        </div>
        <div className="header-right bg-[url(../../assets/images/hero-bg.png)] pr-36 bg-cover bg-center bg-no-repeat pt-[33px] pl-[67px]">
          <ul className="flex gap-[45px] items-center text-white">
            <Link to="/" className="font-mainFont">
              Explorer
            </Link>
            <Link to="/shop" className="font-mainFont">
              Shop
            </Link>
            <Link to="/blog" className="font-mainFont">
              Blog
            </Link>
            <button className="py-[14px] px-[58px] bg-white text-black rounded-[30px] text-[25px] font-medium font-mainFont">
              Log in
            </button>
          </ul>
          <img className="ml-[200px] pt-[25px]" src={Girl} alt="Girl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
