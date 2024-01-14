import { Link } from "react-router-dom";
import star from "../../assets/icons/stars.svg";
import noImage from "../../assets/images/defImage.jpg";

const NewStory = ({ book }) => {
  return (
    <Link to={`/book/${book?.id}`}>
      <div className="flex gap-[23px] max-w-[416.21px] w-full h-[225.354px]">
        <img
          className="h-[225px] w-[148px] shadow-2xl hover:shadow-2xl transition duration-300 ease-in-out rounded-md"
          src={book?.volumeInfo?.imageLinks?.thumbnail || noImage}
          alt={book?.volumeInfo?.title}
        />
        <div className="flex flex-col gap-0 justify-between">
          <span className="text-black font-mainFont font-bold text-[25px] leading-[35px] capitalize">
            {book?.volumeInfo?.title.slice(0, 25)}
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
        </div>
      </div>
    </Link>
  );
};

export default NewStory;
