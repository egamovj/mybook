import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/fetchDataSlice";
import ShopPageBooks from "../ShopPageBooks/ShopPageBooks";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const APIKey = "AIzaSyC4b0zHE214H19CzpZ9f6NsFzYrPECgkGQ";

const ShopPage = () => {
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
    <div className="flex gap-[120px] bg-[#F5F6F8] pb-[69px]">
      <div className="flex pb-[79px] ">
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
      <div className="flex flex-wrap gap-[120px] pt-[88px]">
        {Array.isArray(data?.items) &&
          data.items.map((book, index) => (
            <ShopPageBooks key={index} book={book} />
          ))}
      </div>
    </div>
  );
};

export default ShopPage;
