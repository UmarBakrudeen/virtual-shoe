/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";

const Home = () => {
  const [gender, setGender] = useState("male");
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState("US");

  const shoes = {
    male: {
      "Running Shoes": [
        { id: 1, name: "Alphafly 3 Premium", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b98e67b8-45cf-4bfa-81f8-c1f3ea6461de/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png"] },
        { id: 2, name: "Juniper Trail 3", images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f14e8f51-b56a-4e57-8019-95415b627784/AIR+ZOOM+PEGASUS+41.png"] },
        { id: 3, name: "Revolution 7", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2105c6b-bdc8-4322-98f1-479f87251f56/NIKE+JOURNEY+RUN.png"] },
      ],
      "Formal Shoes": [
        { id: 4, name: "Formal Shoes A", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b830f76-6417-42b8-82c5-5545d6032281/KILLSHOT+2.png"] },
        { id: 5, name: "Formal Shoes B", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ab2c9c9-f01c-4dee-997e-7ddde50c5f46/NIKE+AIR+MAX+90+PRM.png"] },
        { id: 6, name: "Formal Shoes C", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9434385e-4e5d-4af0-abfc-4f481933b32f/KILLSHOT+2+LTR+PRM.png"] },
      ],
    },
    female: {
      "Running Shoes": [
        { id: 7, name: "Sustainable Materials", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/224023ec-160e-447d-a88c-a96718ce69e5/W+PEGASUS+PLUS.png"] },
        { id: 8, name: "Women's Supernal v3 Running Shoe", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7702884-c99e-49c3-b7bc-2cbe74396f76/AIR+ZOOM+SPIRIDON+SP.png"] },
        { id: 9, name: "Women's Mesh Walking Shoe", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bf5af5bb-ae08-48af-a022-b765d1e1bb33/W+NIKE+REVOLUTION+7.png"] },
      ],
      "Formal Shoes": [
        { id: 10, name: "Formal Shoes A", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b830f76-6417-42b8-82c5-5545d6032281/KILLSHOT+2.png"] },
        { id: 11, name: "Formal Shoes B", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ab2c9c9-f01c-4dee-997e-7ddde50c5f46/NIKE+AIR+MAX+90+PRM.png"] },
        { id: 12, name: "Formal Shoes C", images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9434385e-4e5d-4af0-abfc-4f481933b32f/KILLSHOT+2+LTR+PRM.png"] },
      ],
    },
  };

  const sizeChart = {
    US: { sizes: [6, 7, 8, 9, 10, 11, 12], footLength: [23, 24, 25, 26, 27, 28, 29] },
    UK: { sizes: [5, 6, 7, 8, 9, 10, 11], footLength: [22.5, 23.5, 24.5, 25.5, 26.5, 27.5, 28.5] },
    EU: { sizes: [38, 39, 40, 41, 42, 43, 44], footLength: [24, 24.5, 25, 25.5, 26, 26.5, 27] },
  };

  const handleGenderChange = (gender) => setGender(gender);
  const handleColorChange = (event) => setColor(event.target.value);
  const handleSizeChange = (size) => setSize(size);

  return (
    <Fragment>
      <div className="getstart-container">
        <Navbar />
        <div className="flex flex-col md:flex-row gap-6 p-6 mt-9">
          {/* Column 1: Gender Tabs and Shoe Cards */}
          <div className="flex flex-col w-full md:w-1/3 space-y-4">
            <div className="flex space-x-4">
              <button
                className={`py-3 px-5 rounded-md ${gender === "male" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => handleGenderChange("male")}
              >
                MALE
              </button>
              <button
                className={`py-3 px-5 rounded-md ${gender === "female" ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => handleGenderChange("female")}
              >
                FEMALE
              </button>
            </div>
            {Object.entries(shoes[gender]).map(([category, shoeList]) => (
              <div key={category} className="space-y-4">
                <h2 className="text-lg font-bold text-[#b93f3f]">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {shoeList.map((shoe) => (
                    <div
                      key={shoe.id}
                      className={`p-4 border rounded-lg hover:scale-105 transform transition duration-300 cursor-pointer ${selectedShoe?.id === shoe.id ? "border-blue-500" : "border-gray-300"}`}
                      onClick={() => setSelectedShoe(shoe)}
                    >
                      <img src={shoe.images[0]} alt={shoe.name} className="h-32 w-full object-cover" />
                      <p className="text-center mt-2">{shoe.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Selected Shoe Images and Title/Description */}
          <div className="flex flex-col w-full md:w-1/3 items-center">
            {selectedShoe ? (
              <>
                <h2 className="text-xl font-bold mb-4">{selectedShoe.name}</h2>
                <div className="w-full flex justify-center">
                  <img
                    src={selectedShoe.images[0]}
                    alt={selectedShoe.name}
                    className="h-48 w-auto rounded-lg shadow-md hover:rotate-6 transform transition duration-300"
                  />
                </div>
              </>
            ) : (
              <p className="text-gray-500">Select a shoe to see details</p>
            )}
          </div>

          {/* Column 3: Size Selector and Foot Outline Guide */}
          <div className="flex flex-col w-full md:w-1/3 space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="size" className="text-[#b93f3f] font-medium">
                Select size:
              </label>
              <select
                id="size"
                value={size}
                onChange={(e) => handleSizeChange(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              >
                {Object.keys(sizeChart).map((region) => (
                  <optgroup key={region} label={region}>
                    {sizeChart[region].sizes.map((size, index) => (
                      <option
                        key={`${region}-${size}`}
                        value={size}
                        title={`Foot Length: ${sizeChart[region].footLength[index]} cm`}
                      >
                        {region} - {size} ({sizeChart[region].footLength[index]} cm)
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="colorPicker" className="text-[#b93f3f] font-medium">
                Pick a color:
              </label>
              <input
                type="color"
                id="colorPicker"
                value={color}
                onChange={handleColorChange}
                className="h-10 w-10 p-0 border-none cursor-pointer"
              />
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://static.thenounproject.com/png/2045495-200.png"
                alt="Foot Outline"
                className="h-32 w-auto"
              />
              <p className="text-gray-500 text-sm mt-2">Match your foot length with this outline.</p>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-[#b93f3f]">
                <strong>Selected Color:</strong> <span style={{ color }}>{color}</span>
              </p>
              <p className="text-[#b93f3f]">
                <strong>Selected Size:</strong> {size}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
