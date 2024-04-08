
import React from "react";

interface SingleImageProps {
  href: string;
  imgSrc: string;
  Alt: string;
}

const SingleImage: React.FC<SingleImageProps> = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="w-full h-10" />
      </a>
    </>
  );
};

const Brand: React.FC = () => {
  return (
    <>
      {/* ====== Brands Section Start */}

      <section className=" dark:bg-dark ">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className=" flex flex-wrap items-center justify-center ">
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/240px-Expressjs.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                />
                <SingleImage
                  href="#"
                  
                  Alt="Brand Image"
                  imgSrc="https://hub.docker.com/api/media/repos_logo/v1/library%2Fnode"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;
