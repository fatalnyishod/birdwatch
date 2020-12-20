import Footer from "./footer";

const Subscription = () => {
	return (
		<div className="subscription">
			<div className="grid subscription__grid">
				<h2 className="title title_h2">Хотите быть в курсе сообщества?</h2>

				<form className="subscription__form">
					<input type="text" className="subscription__input" placeholder="Оставьте ваш E-mail"/>
					<span className="btn subscription__btn">Подписаться</span>
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
