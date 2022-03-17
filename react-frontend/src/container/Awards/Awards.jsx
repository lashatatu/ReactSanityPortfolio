import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Awards.scss";

const Awards = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [awards, setAwards] = useState([]);
	const [brands, setBrands] = useState([]);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const query = "*[_type == \"awards\"]";
		const brandsQuery = "*[_type == \"brands\"]";

		client.fetch(query).then((data) => {
			setAwards(data);
		});

		client.fetch(brandsQuery).then((data) => {
			setBrands(data);
		});
	}, []);

	const awar = awards[currentIndex];
	return (
		 <>
			 {awards.length && (
					<>
						<div className={"app__award-btns app__flex"}>
							<div
								 className={"app__flex"}
								 onClick={() => handleClick(currentIndex === 0 ? awards.length - 1 : currentIndex - 1)}>
								<HiChevronLeft/>
							</div>

							<div
								 className={"app__flex"}
								 onClick={() => handleClick(currentIndex === awards.length - 1 ? 0 : currentIndex + 1)}>
								<HiChevronRight/>
							</div>
						</div>
						<div className={"app__award-item app__flex"}>
							<div className={"app__award-content"}>
								<div>
									<h4 className={"bold-text"}>{awar.name}</h4>
									<h5 className={"p-text"}>{awar.company}</h5>
								</div>
							</div>
							<img src={urlFor(awar.imageurl).width(800)} alt={awar.name}/>
						</div>
					</>
			 )}

			 <div className={"app__award-brands app__flex"}>
				 {brands.map((brand) => (
						<motion.div
							 whileInView={{opacity: [0, 1]}}
							 transition={{duration: 0.5, type: "tween"}}
							 key={brand._id}
						>
							<img src={urlFor(brand.imgUrl).width(150)} alt={brand.name}/>
						</motion.div>
				 ))}
			 </div>
		 </>
	);
};

export default AppWrap(
	 MotionWrap(Awards, "app__award"),
	 "awards",
	 "app__primarybg",
);