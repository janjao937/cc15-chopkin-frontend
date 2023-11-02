import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import carouselImage1 from "../assets/image/carousel1.jpeg";
import carouselImage2 from "../assets/image/carousel2.jpeg";
import carouselImage3 from "../assets/image/carousel3.jpeg";

import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";

export default function PauseOnHovering() {
	const ImageData = [
		{
			id: 1,
			title: "carouselImage1",
			image: carouselImage1,
		},
		{
			id: 2,
			title: "carouselImage2",
			image: carouselImage2,
		},
		{
			id: 3,
			title: "carouselImage3",
			image: carouselImage3,
		},
	];
	const [current, setCurrent] = useState(0);
	const length = ImageData.length;
	console.log(length);

	const prevSlide = () => {
		if (current === 0) {
			setCurrent(length - 1);
		} else {
			setCurrent(current - 1);
		}
	};

	const nextSlide = () => {
		if (current === length - 1) {
			setCurrent(0);
		} else {
			setCurrent(current + 1);
		}
	};
	return (
		<div className="relative flex justify-center items-center ">
			<div className="h-[300px] w-full">
				{ImageData.map((img, index) => (
					<div
						className={`${
							index === current
								? "opacity-1 scale-90 duration-300 ease-in-out  "
								: "opacity-0 duration-300 "
						}`}
						key={index}
					>
						{index === current && (
							<img
								className="h-[300px] w-full border shadow-lg rounded-xl object-cover"
								src={img.image}
								alt={img.title}
							/>
						)}
					</div>
				))}
			</div>

			<div className="absolute left-0 w-[30px] h-[30px] rounded-full shadow-md">
				<RiArrowLeftSFill
					size={30}
					className=" cursor-pointer text-red-600"
					onClick={prevSlide}
				/>
			</div>
			<div className="absolute right-0 w-[30px] h-[30px] rounded-full shadow-md">
				<RiArrowRightSFill
					size={30}
					className=" cursor-pointer text-red-600"
					onClick={nextSlide}
				/>
			</div>
		</div>
	);
}
