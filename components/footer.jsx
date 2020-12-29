import Link from "next/link";

const Footer = () => {
	return (
		<div className="footer">
			<div className="grid footer__grid">
				<div className="footer__info">
					<p className="text">Bird-Watching</p>
				</div>

				<div className="footer__nav">
					<Link href="/">
						<a className="footer__nav-item">Журнал</a>
					</Link>
					<Link href="/footer">
						<a className="footer__nav-item">О нас</a>
					</Link>
					<Link href="/">
						<a className="footer__nav-item">Для чего все это?</a>
					</Link>
					<Link href="/">
						<a className="footer__nav-item">Контакты</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
