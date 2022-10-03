import React from "react";

const ImageCard = ({ img }) => {
  return (
    <div className="relative w-fit group cursor-pointer">
      <picture>
        <source
          media="(min-width:768px)"
          srcSet={`/images/desktop/${img.src}`}
        />
        <img src={`/images/mobile/${img.src}`} className="max-h-full" alt="" />
      </picture>
      <h2 className="pl-4 z-10 transition max-w-[10ch]   text-white group-hover:text-black absolute bottom-0 left-0 uppercase font-Josefin text-3xl">
        {img.title}
      </h2>
      <span className="absolute transition inset-0 group-hover:bg-white/50 "></span>
    </div>
  );
};

export default ImageCard;
