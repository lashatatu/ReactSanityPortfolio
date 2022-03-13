import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
	return (
		 <div className={"app__social"}>
			 <div onClick={()=> window.open("https://www.linkedin.com/in/lashatatu/", "_blank")}>
				 <BsLinkedin/>
			 </div>
			 <div onClick={()=> window.open("https://github.com/lashatatu", "_blank")}>
				 <BsGithub />
			 </div>
		 </div>
	);
};

export default SocialMedia;