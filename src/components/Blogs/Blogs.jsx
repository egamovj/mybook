import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/fetchDataSlice";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

import noImage from "../../assets/images/defImage.jpg";

// const APIKEY = "5b2e28bcdf3f4ba096edc2ee1b507d31";
// f89aedffe4004565bf9d90debb7ec6d7

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);
  const [visibleArticles, setVisibleArticles] = useState(6);

  useEffect(() => {
    const url = `https://newsdata.io/api/1/news?apikey=pub_364446d618145059965e418dec4a3b8596f86&q=books`;
    dispatch(fetchData(url));
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 6);
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div className="px-[85px] pt-[73px] pb-[117px] bg-[#F5F6F8]">
      <div className="">
        {data && (
          <>
            <div className="flex flex-wrap gap-4 justify-between">
              {data?.results
                ?.slice(0, visibleArticles)
                .map((article, index) => (
                  <div key={index} className="max-w-[406px] bg-white">
                    <img
                      src={article?.image_url || noImage}
                      alt={article?.title}
                      className="w-[406px] h-[364px]"
                    />
                    <div className="py-[47px] px-[44px] text-center flex flex-col justify-between gap-5">
                      <h3 className="text-[25px] font-mainFont font-medium leading-[30px] capitalize">
                        {article?.title}
                      </h3>
                      <p className="text-[16px] font-secondaryFont font-normal leading-[30px] capitalize">
                        {article?.description?.slice(0, 80)}...
                      </p>
                      <Link
                        href={article?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="px-7 py-3 bg-[#FF971D1A#FF971D1A] text-[#FF971D] rounded-[10px] text-[18px] font-mainFont font-medium capitalize border-[1px] border-[#FF971D]">
                          Read more
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
            <div className="text-center">
              {visibleArticles < data?.results?.length && (
                <button
                  onClick={handleLoadMore}
                  className="mt-5 px-7 py-3 bg-[#FF971D1A#FF971D1A] text-[#FF971D] rounded-[10px] text-[18px] font-mainFont font-medium capitalize border-[1px] border-[#FF971D]"
                >
                  Load More...
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
