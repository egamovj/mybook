import { Link } from "react-router-dom";
import "../../index.scss";

const Footer = () => {
  return (
    <footer className="py-[30px] bg-[#ff971d]">
      <div className="container">
        <div className="flex justify-end gap-[329px] items-center">
          <h2 className="text-white font-mainFont text-base font-medium">
            2020 MYBOOK
          </h2>
          <ul className="flex gap-[47px]">
            <li>
              <Link
                className="font-mainFont text-white text-base font-medium"
                to="/"
              >
                Explorer
              </Link>
            </li>
            <li>
              <Link
                className="font-mainFont text-white text-base font-medium"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="font-mainFont text-white text-base font-medium"
                to="/blog"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
