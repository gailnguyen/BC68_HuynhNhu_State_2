import React, { useState } from "react";
import model from "../../public/glassesImage/model.jpg";

const arrGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

const TryOnModel = () => {
  const [glasses, setGlasses] = useState({});
  return (
    <div>
      {/* khu vực model và mô tả */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 mb-10 gap-5">
        <div className="flex items-center justify-center relative">
          <img src={model} width="35%" alt="" />
          <img
            src={glasses.url}
            width="20%"
            alt=""
            className="glasses_position absolute"
          />
        </div>
        <div className="description bg-white text-base p-5 mx-32">
          <h2 className="font-semibold underline italic">Mô tả sản phẩm:</h2>
          <h3 className="text-violet-700 font-bold text-lg">{glasses.name}</h3>
          <p className="font-bold text-red-600">
            {glasses.price ? `Price: ${glasses.price}$` : null}
          </p>
          <p className="italic">
            {glasses.desc ? `Description: ${glasses.desc}` : null}
          </p>
        </div>
      </div>
      {/* khu vực chọn kính */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 bg-white p-5 gap-10 rounded-xl mx-10">
        {arrGlasses.map((item, index) => {
          return (
            <button
              onClick={() => {
                console.log(item.url);
                setGlasses(item);
              }}
              className="flex items-center justify-center"
            >
              <img src={item.url} width="50%" alt="" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TryOnModel;
