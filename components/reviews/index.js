import React from "react";
import ReviewBox from "./reviewBox";
import reviewData from "./reviewsData.json";

export default function Reviews() {
  return (
    <div id="avaliações" className="w-full bg-blue-900 scroll-smooth">
      <div className="max-w-5xl m-2.5 lg:m-auto py-12 items-center flex-col flex">
        <h1 className="text-3xl text-white lg:mb-6 mb-2 text-center">
          O que nossos clientes dizem
        </h1>
        <div className="w-full my-6">
          {reviewData.map((client, index) => {
            return (
              <ReviewBox
                key={index}
                float={index%2 == 0}
                img={client["imgUrl"]}
                altImg={"Cliente da Tractian"}
                reviewText={client["reviewText"]}
                nameClient={client["name"]}
                occupation={client["occupation"]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
