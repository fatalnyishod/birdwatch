import {useState, useEffect} from 'react';
import Link from "next/link";

const Header = () => {
	const [navState, setState] = useState(true);

	useEffect(() => {
		document.body.style.overflow = navState ? "" : "hidden"
	});

	return (
		<div className="header">
			<div className="grid header__grid">
				<Link href="/">
					<a className="header__logo"></a>
				</Link>

				<div className={navState ? "header__nav" : "header__nav header__nav_shown"}>
					{/* <input type="text" className="header__search" placeholder="Найти вид"/> */}

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

				<div className="header__trigger" onClick={() => setState(!navState)}>☰</div>
			</div>
		</div>
	);
};

export default Header;
