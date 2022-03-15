import React, { useState ,useRef} from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import emailjs from "emailjs-com";
import "./Footer.scss";

const Footer = () => {
	const [formData, setFormData] = useState({name: "", email: "", message: ""});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const {name, email, message} = formData;
	const handleChangeInput = (e) => {
		const {name, value} = e.target;

		setFormData({...formData, [name]: value});
	};

	const form = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs.sendForm(process.env.YOUR_SERVICE_ID_EMAIL_JS, process.env.YOUR_TEMPLATE_ID_EMAIL_JS, form.current, process.env.YOUR_USER_ID_EMAIL_JS)
		.then((result) => {
			setLoading(false);
			setIsFormSubmitted(true);
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	};

	return (
		 <>
			 <h2 className={"head-text"}>Take a Coffee and Chat with me</h2>
			 <div className={"app__footer-cards"}>
				 <div className={"app__footer-card"}>
					 <img src={images.email} alt="email"/>
					 <a href="mailto:lashatatu@gmail.com" className={"p-text"}>lashatatu@gmail.com</a>
				 </div>
				 <div className={"app__footer-card"}>
					 <img src={images.mobile} alt="mobile"/>
					 <a href="tel:+995 557 78-77-78" className={"p-text"}>+995 557 78-77-78</a>
				 </div>
			 </div>

			 {!isFormSubmitted ?
				<form ref={form} className={"app__footer-form app__flex"}>
					<div className={"app__flex"}>
						<input
							 type="text" className={"p-text"} placeholder={"Your Name"} name={"name"} value={name}
							 onChange={handleChangeInput}/>
					</div>
					<div className={"app__flex"}>
						<input
							 type="email" className={"p-text"} placeholder={"Your Email"} name={"email"} value={email}
							 onChange={handleChangeInput}/>
					</div>
					<div>
					 <textarea
							className={"p-text"} placeholder={"Your message"} name={'message'} value={message}
							onChange={handleChangeInput} id="" cols="30" rows="10"/>
					</div>
					<button type={"button"} className={"p-text"} onClick={handleSubmit}>
						{
							loading
							? "Sending"
							: "Send Message"
						}
					</button>
				</form>
												 :
				<div>
					<h3 className={"head-text"}>Thank you for getting in touch!</h3>
				</div>
			 }

		 </>
	);
};

export default AppWrap(
	 MotionWrap(Footer, "app__footer"),
	 "contact",
	 "app__whitebg",
);