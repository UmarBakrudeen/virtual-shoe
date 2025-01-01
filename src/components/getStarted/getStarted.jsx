/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import "./getStart.css";
import Navbar from "../navbar/Navbar";

const GetStarted = () => {
    const [gender, setGender] = useState("male");
    const [selectedShoe, setSelectedShoe] = useState(null);
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState("US");
    const [footLength, setFootLength] = useState("");

    const shoes = {
        male: [
            { id: 1, name: "Running Shoes", images: ["https://pngimg.com/d/running_shoes_PNG5817.png"] },
            { id: 2, name: "Casual Sneakers", images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvrj5mCTCr8xQIvVRaOfaU06oanBA99poAw&s"] },
            { id: 3, name: "High-top Sneakers", images: ["https://img.freepik.com/premium-psd/sports-hightop-sneakers-3d-render_946288-2781.jpg"] },
        ],
        female: [
            { id: 1, name: "Heels", images: ["https://pngimg.com/uploads/high_heels/high_heels_PNG24.png"] },
            { id: 2, name: "Flats", images: ["https://pngimg.com/uploads/shoes/shoes_PNG7512.png"] },
        ],
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
                                className={`py-2 px-4 rounded-md ${gender === "male" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                                onClick={() => handleGenderChange("male")}
                            >
                                Male
                            </button>
                            <button
                                className={`py-2 px-4 rounded-md ${gender === "female" ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"}`}
                                onClick={() => handleGenderChange("female")}
                            >
                                Female
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {shoes[gender].map((shoe) => (
                                <div
                                    key={shoe.id}
                                    className={`p-4 border rounded-lg hover:scale-105 transform transition duration-300 cursor-pointer ${selectedShoe?.id === shoe.id ? "border-blue-500" : "border-gray-300"
                                        }`}
                                    onClick={() => setSelectedShoe(shoe)}
                                >
                                    <img src={shoe.images[0]} alt={shoe.name} className="h-32 w-full object-cover" />
                                    <p className="text-center mt-2 text-white">{shoe.name}</p>
                                </div>
                            ))}
                        </div>
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
                            <label htmlFor="footLength" className="text-[#CF9C5D] font-medium">
                                Enter foot length (cm):
                            </label>
                            <input
                                type="number"
                                id="footLength"
                                value={footLength}
                                onChange={(e) => setFootLength(e.target.value)}
                                className="p-2 border border-gray-300 rounded-md"
                                placeholder="e.g., 25.5"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="size" className="text-[#CF9C5D] font-medium">
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

                        <div className="flex flex-col items-center">
                            <img
                                src="https://static.thenounproject.com/png/2045495-200.png"
                                alt="Foot Outline"
                                className="h-32 w-auto"
                            />
                            <p className="text-gray-500 text-sm mt-2">Match your foot length with this outline.</p>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <p className="text-[#CF9C5D]">
                                <strong>Selected Color:</strong> <span style={{ color }}>{color}</span>
                            </p>
                            <p className="text-[#CF9C5D]">
                                <strong>Selected Size:</strong> {size}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default GetStarted;
