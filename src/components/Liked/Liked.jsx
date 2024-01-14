import { Link } from "react-router-dom";

import star from "../../assets/icons/stars.svg";
import noImage from "../../assets/images/defImage.jpg";

const Liked = ({ book }) => {
  return (
    <Link to={`/book/${book?.id}`}>
      <div className="flex flex-col max-w-[188px] h-[395px] justify-between ">
        <img
          className="w-full h-[288px] shadow-2xl hover:shadow-2xl transition duration-300 ease-in-out rounded-md"
          src={book?.volumeInfo?.imageLinks?.thumbnail || noImage}
          alt={book?.volumeInfo?.title}
        />
        <span className="capitalize font-mainFont text-[16px] font-bold text-black">
          {book?.volumeInfo?.title.slice(0, 20)}
        </span>
        <span className="capitalize font-mainFont text-[16px] font-normal text-[rgba(0, 0, 0, 0.60)]">
          {book?.volumeInfo?.authors[0]}
        </span>
        <img src={star} alt="Stars icon" className="w-[87px]" />
      </div>
    </Link>
  );
};

export default Liked;
