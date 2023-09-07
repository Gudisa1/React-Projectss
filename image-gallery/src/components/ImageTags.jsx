import React from "react";

const ImageTags = ({ tags }) => {
  var tagss = tags.split(",");

  return (
    <>
      <div className="px-6 py-4">
        {tagss.map((tag) => {
          return (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{tag}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default ImageTags;
