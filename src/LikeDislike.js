import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

export const LikeDislike = () => {
  const [like, setLike] = useState(100);
  const [liked, setLiked] = useState(false);
  const [dislike, setDislike] = useState(25);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    if (disliked) {
      setDisliked(false);
      setDislike(dislike - 1);
    }
    if (liked) {
      setLiked(false);
      setLike(like - 1);
    } else {
      setLiked(true);
      setLike(like + 1);
    }
  };

  const handleDislikeClick = () => {
    if (liked) {
      setLiked(false);
      setLike(like - 1);
    }
    if (disliked) {
      setDisliked(false);
      setDislike(dislike - 1);
    } else {
      setDisliked(true);
      setDislike(dislike + 1);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <span className="relative z-0 inline-flex shadow-sm rounded-md ">
          <button
            type="button"
            className={`${
              liked ? "bg-gray-500 text-white" : "bg-gray-100 text-gray-700"
            } relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
            onClick={handleLikeClick}
          >
            <ThumbUpIcon
              data-testid="thumbsUpIcon"
              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {liked ? "Liked" : "Like"}
          </button>
          <span className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            {like}
          </span>
        </span>
        <span className="relative z-0 inline-flex shadow-sm rounded-md m-1">
          <button
            type="button"
            className={` ${
              disliked ? "bg-gray-500 text-white" : "bg-gray-100 text-gray-700"
            } relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
            onClick={handleDislikeClick}
          >
            <ThumbDownIcon
              data-testid="thumbsDownIcon"
              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {disliked ? "Disliked" : "Dislike"}
          </button>
          <span className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            {dislike}
          </span>
        </span>
      </div>
    </div>
  );
};
