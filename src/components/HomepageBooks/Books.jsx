/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/fetchDataSlice";
import Recommended from "../Recommended/Recommended";
import Loading from "../Loading/Loading";
import "./books.scss";

const APIKey = "AIzaSyDXl-1Huppe0igfHH1Y8UyE0FaMYmkDvRE";

const Books = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  const [selectGenre, setSelectGenre] = useState("all");
  const allGenres = [
    "All Genres",
    "Business",
    "Science",
    "Fiction",
    "Philosophy",
    "Biography",
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
    return <h2>Error</h2>;
  }

  return (
    <div className="flex pb-[79px] bg-[#f5f6f8]">
      <div className="flex flex-col items-center pt-12">
        <span className="text-black text-[25px] font-thirdFont font-bold mb-[25px]">
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
        <span className="mt-[122px] text-black text-[25px] font-thirdFont font-bold mb-[25px]">
          Recomendations
        </span>
        <ul className="flex flex-col gap-[25px] w-full">
          <li>
            <button>Artist of the Month</button>
          </li>
          <li>
            <button>Book of the Year</button>
          </li>
          <li>
            <button>Top Genre</button>
          </li>
          <li>
            <button>Trending</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Books;
