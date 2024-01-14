import { Link } from "react-router-dom";

import star from "../../assets/icons/stars.svg";
import noImage from "../../assets/images/defImage.jpg";

const Popular = ({ book }) => {
  return (
    <Link to={`/book/${book?.id}`}>
      <div className="flex flex-col box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) max-w-[188px]">
        <img
          className="w-full h-[288px] "
          src={book?.volumeInfo?.imageLinks?.thumbnail || noImage}
          alt={book?.volumeInfo?.title}
        />
        <div className="flex flex-col gap-[12px]">
          <span className="capitalize font-mainFont text-[20px] text-black">
            {book?.volumeInfo?.title.slice(0, 20)}
          </span>
          <span className="capitalize font-mainFont text-[16px] font-normal text-[rgba(0, 0, 0, 0.60)]">
            {book?.volumeInfo?.authors[0]}
          </span>
          <img src={star} alt="Stars icon" />
        </div>
      </div>
    </Link>
  );
};

export default Popular;
