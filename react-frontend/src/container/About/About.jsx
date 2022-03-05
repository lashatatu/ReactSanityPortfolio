import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";

const abouts = [
	{title: "Front-End", description: "I am a good web developer.", imgUrl: ""},
	{title: "Back-End", description: "I am a good web developer.", imgUrl: ""},
	{title: "UI/UX", description: "I am a good web developer.", imgUrl: ""},
];

const About = () => {
	return (
		 <>
			 <h2 className={"head-text"}>
				 I Know That
				 <span>Good Design</span>
				 means
				 <span>Good Business</span>
			 </h2>
			 <div className={"app__profiles"}>
				 {abouts.map((about, index) => (
						<motion.div
							 whitelInView={{opacity: 1}}
							 whileHover={{scale: 1.1}}
							 transition={{duration: 0.5, type: "tween"}}
							 className={"app_profile-item"}
							 key={about.title + index}>
							<img src={about.imgUrl} alt={about.title}/>
							<h2 className={'bold-text'}>

							</h2>
						</motion.div>

				 ))}
			 </div>
		 </>);
};

export default About;