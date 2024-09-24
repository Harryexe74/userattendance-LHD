import React from "react";

const ReviewCard = ({
  title,
  Count,
  icons,
  bgColor,
  textColor,
  iconColor,
  iconsBg,
}) => {
  return (
    <div
      className={`bg-opacity-80 backdrop-filter md:mx-0 h-32 md:h-36 flex flex-col gap-2 justify-center items-center rounded-md shadow-md hover:shadow-md border border-white hover:shadow-white`}
      style={{ backgroundColor: bgColor }}
    >
      <h1
        className="text-[1.2rem] md:text-[1.5rem] rounded-full p-2 font-bold"
        style={{ color: iconColor, backgroundColor: iconsBg }}
      >
        {icons}
      </h1>
      <h1
        className="text-[1rem] md:text-[1.2rem] font-bold"
        style={{ color: textColor }}
      >
        {Count}
      </h1>
      <p
        className="text-sm md:text-[1rem] opacity-50"
        style={{ color: textColor }}
      >
        {title}
      </p>
    </div>
  );
};

export default ReviewCard;
