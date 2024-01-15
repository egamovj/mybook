import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import star from "../../assets/icons/stars.svg";
import noImage from "../../assets/images/defImage.jpg";

const ShopPageBooks = ({ book }) => {
  const data = useSelector((state) => state.data.data);
  return (
    <div className="flex gap-[50px] max-w-[416.21px] w-full h-[338px] bg-white p-[33px] relative">
      <img
        className="h-[225px] w-[148px] absolute top-0 left-[-66px] pt-[33px] bg-transparent"
        src={book?.volumeInfo?.imageLinks?.thumbnail || noImage}
        alt={book?.volumeInfo?.title}
      />
      <div className="flex flex-col gap-0 justify-between ml-[70px]">
        <span className="text-black font-mainFont font-bold text-[25px] leading-[35px] capitalize">
          {book?.volumeInfo?.title.slice(0, 25)}...
        </span>
        <span className="text-[rgba(0, 0, 0, 0.60)] font-mainFont text-base">
          {book?.volumeInfo?.authors[0]}
        </span>
        <div className="flex items-center gap-[10px] mt-[10px]">
          <img src={star} alt="Stars icon" />
          <span className="text-[rgba(0, 0, 0, 0.30)] font-mainFont font-light text-base leading-4 tracking-[0.032px]">
            1,988,288 votes
          </span>
        </div>
        <p className="text-[rgba(0, 0, 0, 0.30)] font-secondaryFont text-base tracking-[0.048px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <Link to={data?.saleInfo?.buyLink} target="_blank">
          <button className="px-7 py-3 bg-[#FF971D1A#FF971D1A] text-[#FF971D] rounded-[10px] text-[18px] font-mainFont font-medium capitalize border-[1px] border-[#FF971D]">
            Buy now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShopPageBooks;
