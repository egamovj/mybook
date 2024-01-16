import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../redux/fetchDataSlice";

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import { IoMdArrowBack } from "react-icons/io";
import star from "../../assets/icons/start.svg";
import "./Book.scss";

const APIKey = "AIzaSyC4b0zHE214H19CzpZ9f6NsFzYrPECgkGQ";

const Book = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(
      fetchData(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=${APIKey}`
      )
    );
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div className="shop flex flex-col py-[85px] px-[70px] ">
      <Link to="/" style={{}}>
        <button>
          <IoMdArrowBack className="w-16 h-16 text-white mb-[57px]" />
        </button>
      </Link>
      <div className=" bg-white border-[1px] pb-[33px]  w-[729px]">
        <div className="flex gap-9">
          <img
            className="w-[287px] h-[435px] shadow-2xl hover:shadow-2xl transition duration-300 ease-in-out rounded-md"
            src={data?.volumeInfo?.imageLinks?.thumbnail}
            alt={data?.volumeInfo?.title}
          />
          <div className="pt-[159px] flex flex-col justify-between">
            <h1 className="text-[45px] font-mainFont font-medium capitalize">
              {data?.volumeInfo?.title}
            </h1>
            <div className="flex gap-[25px] items-center text-base font-secondaryFont text-[#00000099] capitalize">
              <span>{data?.volumeInfo?.authors?.[0]}</span>
              <span>{data?.volumeInfo?.publishedDate}</span>
            </div>
            <img className="w-[95px]" src={star} alt="Stars icon" />
            <div className="flex gap-5">
              <Link to={data?.saleInfo?.buyLink} target="_blank">
                <button className="px-7 py-3 bg-[#FF971D] text-white rounded-[10px] text-[18px] font-mainFont font-medium capitalize">
                  Buy now
                </button>
              </Link>
              <Link to={data?.accessInfo?.webReaderLink} target="_blank">
                <button className="px-7 py-3 text-[#FF971D] text-[18px] font-mainFont font-medium capitalize rounded-[10px] border-[1px] border-[#FF971D]">
                  Read book
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-[57px] px-9">
          <span className="text-black text-[25px] font-mainFont tracking-[0.075px] font-normal">
            Description
          </span>
          <p className="font-secondaryFont text-base text-[#00000099] tracking-[0.064px] font-normal mt-[25px] mb-[54px]">
            {data?.volumeInfo?.description}
          </p>
          <span className="px-[25px] py-2 bg-[#DEDEDE] rounded-[10px]">
            {data?.volumeInfo?.categories[0]}
          </span>
          <h2 className="mt-[54px] text-[25px] font-mainFont leading-[23px] tracking-[0.075px] text-black mb-5">
            Additional information
          </h2>
          <div className="flex gap-[6px] font-secondaryFont text-base text-black capitalize">
            <p className="font-semibold">Publisher:</p>
            <span className="text-[#0000004D] font-semibold">
              {data?.volumeInfo?.publisher}
            </span>
          </div>
          <div className="flex gap-[6px]">
            <p className="font-semibold">Pages:</p>
            <span className="text-[#0000004D] font-semibold">
              {data?.volumeInfo?.pageCount} pages
            </span>
          </div>
          <div className="flex gap-[6px]">
            <p className="font-semibold">Language:</p>
            <span className="uppercase text-[#0000004D] font-semibold">
              {data?.volumeInfo?.language}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
