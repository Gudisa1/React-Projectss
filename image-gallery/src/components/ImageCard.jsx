import React from "react";
import ImageTags from "./ImageTags";

const ImageCard = ({ image }) => {
  const { webformatURL, views, likes, downloads, tags, user } = image;

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={webformatURL} />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {user}
          </div>
          <ul>
            <li>
              <strong>Views:</strong>
              {views}
            </li>
            <li>
              <strong>Downloads:</strong>
              {downloads}
            </li>
            <li>
              <strong>Likes:</strong>
              {likes}
            </li>
          </ul>
        </div>
        <ImageTags tags={tags} />
      </div>
    </>
  );
};

export default ImageCard;
