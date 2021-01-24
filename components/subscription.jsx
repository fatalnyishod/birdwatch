import {useState} from "react";
import Footer from "./footer";

const Subscription = () => {
	const [emailState, updateEmailState] = useState("");

	const handleEmailChange = (event) => {
		updateEmailState(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = JSON.stringify({
			name: emailState
		});

		const json = await fetch("http://localhost:3100/emails", {
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
				<h2 className="title title_h2">Подпишитесь на рассылку</h2>

				<p className="text text_light">
					Присылаем письма о новых статьях и проектах не чаще двух раз в месяц.
					<br />
					Без спама.
				</p>

				<form className="subscription__form" onSubmit={handleSubmit}>
					<input type="email" className="subscription__input" placeholder="Электронная почта" onChange={handleEmailChange} minLength="6" required />
					<button type="submit" className="btn subscription__btn">Подписаться</button>
				</form>

				<div className="subscription__socials">
					<a href="/" target="_blank" className="subscription__socials-item">
						<img src="/images/icons/main/twitter.svg" className="subscription__socials-item" />
					</a>

					<a href="/" target="_blank" className="subscription__socials-item">
						<img src="/images/icons/main/ok.svg" className="subscription__socials-item" />
					</a>

					<a href="/" target="_blank" className="subscription__socials-item">
						<img src="/images/icons/main/vk.svg" className="subscription__socials-item" />
					</a>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Subscription;
