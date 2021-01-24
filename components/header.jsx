import {useState, useEffect} from "react";
import Link from "next/link";

const Header = ({isBanner = false}) => {
	const [navState, setState] = useState(true);

	useEffect(() => {
		document.body.style.overflow = navState ? "" : "hidden"
	});

	return (
		<div className={!isBanner ? "header" : "header header_transparent"}>
			<div className="grid header__grid">
				<Link href="/">
					<a className="header__logo"></a>
				</Link>

				<div className={navState ? "header__nav" : "header__nav header__nav_shown"}>
					{/* <input type="text" className="header__search" placeholder="Найти вид"/> */}

					{/* <Link href="/">
						<a className="header__nav-item">Журнал</a>
						</Link>
					<Link href="/about">
						<a className="header__nav-item">О нас</a>
					</Link>
					<Link href="/">
						<a className="header__nav-item">Для чего все это?</a>
					</Link> */}
					<Link href="/">
						<a className="header__nav-item">Команда</a>
					</Link>
				</div>

				<div className={navState ? "header__trigger" : "header__trigger active"} onClick={() => setState(!navState)}>
					<div className="header__trigger-middle"></div>
				</div>
			</div>
		</div>
	);
};

export default Header;
