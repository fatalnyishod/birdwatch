import Link from "next/link"

const Team = () => {
	return (
		<div className="team">
			<div className="grid team__grid">
				<h2 className="title title_h2">
					Нас уже больше 100 :)
					<br/>
					И с каждым днем наше сообщество растет
				</h2>

				<div className="team__wrap">
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
					<img src="https://i.pinimg.com/originals/09/98/16/0998160a0aab2c5896f5eeb712effe51.jpg" className="team__member"/>
				</div>

				<Link href="/">
					<a className="btn">Присоединиться к нам</a>
				</Link>
			</div>
		</div>
	);
};

export default Team;
