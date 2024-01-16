/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/fetchDataSlice";
import Recommended from "../Recommended/Recommended";
import Popular from "../Popular/Popular";
import Loading from "../Loading/Loading";
import "./books.scss";
import NewStory from "../NewStory/NewStory";
import Liked from "../Liked/Liked";
import Error from "../Error/Error";

const APIKey = "AIzaSyC4b0zHE214H19CzpZ9f6NsFzYrPECgkGQ";

const Books = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);
  const [selectGenre, setSelectGenre] = useState("all");

  const allGenres = [
    "All Genres",
    "Business",
    "Science",
    "Fiction",
    "Philosophy",
    "Biography",
  ];

  const genresBottom = [
    "Artist of the Month",
    "Book of the Year",
    "Top Genre",
    "Trending",
  ];

  useEffect(() => {
    dispatch(
      fetchData(
        `https://www.googleapis.com/books/v1/volumes?q=${
          selectGenre !== "all" ? selectGenre : ""
        }+inauthor:keyes&key=${APIKey}`
      )
    );
  }, [dispatch, selectGenre]);

  const handleGenre = (genre) => {
    setSelectGenre(genre);
  };

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
    <div className="flex pb-[79px] bg-[#f5f6f8]">
      <div className="flex flex-col items-center pt-[90px]">
        <div className="flex flex-col gap-[25px] w-full">
          <span className="text-black text-[25px] font-thirdFont font-bold pl-12">
            Book by Genre
          </span>
          <ul className="flex flex-col gap-[25px] w-full">
            {allGenres.map((genre, index) => (
              <li key={index}>
                <button
                  onClick={() => handleGenre(genre)}
                  className={selectGenre === genre ? "active" : ""}
                >
                  {genre}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[300px] h-[1px] mt-[61px] bg-[#DEDEDE]"></div>
        <span className="mt-[61px] text-black text-[25px] font-thirdFont font-bold mb-[25px]">
          Recomendations
        </span>
        <ul className="flex flex-col gap-[25px] w-full">
          {genresBottom.map((genre, index) => (
            <li key={index}>
              <button
                onClick={() => handleGenre(genre)}
                className={selectGenre === genre ? "active" : ""}
              >
                {genre}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-[60px]">
        <div className="m-8 bg-[#fff] box-shadow: 0px 15px 80px 0px rgba(0, 0, 0, 0.1) pl-8 pt-[42px] pb-8">
          <h2 className="text-black font-mainFont text-[40px] font-medium tracking-[0.08px] mb-[60px]">
            Recommended
          </h2>
          <div className="flex flex-wrap gap-[103px]">
            {Array.isArray(data?.items) &&
              data.items
                .slice(0, 4)
                .map((book, index) => <Recommended key={index} book={book} />)}
          </div>
          <h2 className="text-black font-mainFont text-[40px] font-medium tracking-[0.08px] mb-[60px] mt-[120px]">
            Populer
          </h2>
          <div className="flex gap-[63px]">
            {Array.isArray(data?.items) &&
              data.items
                .slice(3, 7)
                .map((book, index) => <Popular key={index} book={book} />)}
          </div>
        </div>
        <div className="m-8 bg-[#fff] box-shadow: 0px 15px 80px 0px rgba(0, 0, 0, 0.1) pl-8  pb-8">
          <h2 className="text-black font-mainFont text-[40px] font-medium tracking-[0.08px] mb-[60px] text-center pt-[42px]">
            This new story
          </h2>
          <div className="flex flex-wrap gap-[103px]">
            {Array.isArray(data?.items) &&
              data.items
                .slice(6, 10)
                .map((book, index) => <NewStory key={index} book={book} />)}
          </div>
          <h2 className="text-black font-mainFont text-[40px] font-medium tracking-[0.08px] mb-[60px] mt-[120px]">
            Which they like
          </h2>
          <div className="flex gap-[63px]">
            {Array.isArray(data?.items) &&
              data.items
                .slice(6, 10)
                .map((book, index) => <Liked key={index} book={book} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
