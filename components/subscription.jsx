import {useState} from "react";
import Footer from "./footer";

const Subscription = () => {
	const [emailState, updateEmailState] = useState('');

	const handleEmailChange = (event) => {
		updateEmailState(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = JSON.stringify({
			name: emailState
		});

		const json = await fetch('http://localhost:3100/emails', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: formData
		});

		alert("Спасибо! Мы вам обязательно напишем.")
	};

	return (
		<div className="subscription">
			<div className="grid subscription__grid">
				<h2 className="title title_h2">Хотите быть в курсе сообщества?</h2>

				<form className="subscription__form" onSubmit={handleSubmit}>
					<input type="email" className="subscription__input" placeholder="Оставьте ваш E-mail" onChange={handleEmailChange} minLength="6" required/>
					<button type="submit" className="btn subscription__btn">Подписаться</button>
				</form>

				<h3 className="title title_h3">Подпишись на нас</h3>
				<div className="subscription__socials">
					<a href="/" target="_blank" className="subscription__socials-item">
						<img src="/images/icons/main/twitter.svg" className="subscription__socials-item"/>
					</a>

					<a href="/" target="_blank" className="subscription__socials-item">
						<img src="/images/icons/main/ok.svg" className="subscription__socials-item"/>
					</a>

					<a href="/" target="_blank" className="subscription__socials-item">
						<img src="/images/icons/main/vk.svg" className="subscription__socials-item"/>
					</a>
				</div>
			</div>

			<Footer/>
		</div>
	);
};

export default Subscription;
