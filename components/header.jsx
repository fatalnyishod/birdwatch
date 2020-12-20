import Link from "next/link";

const Header = () => {
	return (
		<div className="header">
			<div className="grid header__grid">
				<div className="header__logo-wrap">
					<Link href="/">
						<a className="header__logo"></a>
					</Link>
				</div>

				<div className="header__wrap">
					<input type="text" className="header__search" placeholder="Найти вид"/>

					<Link href="/">
						<a className="header__nav-item">Журнал</a>
						</Link>
					<Link href="/">
						<a className="header__nav-item">О нас</a>
						</Link>
					<Link href="/">
						<a className="header__nav-item">Для чего все это?</a>
						</Link>
					<Link href="/">
						<a className="header__nav-item">Контакты</a>
						</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
