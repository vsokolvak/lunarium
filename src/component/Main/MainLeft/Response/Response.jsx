import classes from './Response.module.scss'
import peopul from '../../../../img/icon/peoplWhite.png'
import star from '../../../../img/icon/star.png'

const Response = props => {
	return <div className={classes.wrapper}>
		{/* покупець */}
		<div className={classes.buyer}>
			<img src={peopul} alt="buyer" />
			<span>Покупець</span>
		</div>

		{/* дата */}
		<div className={classes.date}>
			<span>17.08.2023</span>
		</div>

		{/* оцінка */}
		<div className={classes.rate}>
			<div className={classes.star}>
				<img src={star} alt="rate" />
				<img src={star} alt="rate" />
				<img src={star} alt="rate" />
				<img src={star} alt="rate" />
				<img src={star} alt="rate" />
			</div>
			<span>відмінно</span>
		</div>

		{/* покупка */}
		<div className={classes.purshase}>
			<span>
				Угода на маркетплейсі Prom.ua
			</span>
		</div>

		{/* товар */}
		<div className={classes.goods}>
			<span>
				Пивний келих з принтом "Пивозавр - пінний період"
				<br />
				<br />
				Тарілка "Жратву сюди" з принтом
			</span>
		</div>

		{/* емоції */}
		<div className={classes.emotions}>
			<span>Гарне обслуговування</span>
			<span>Актуальний опис</span>
			<span>Швидко зв'язалися</span>
			<span>Швидко відправили товар</span>
			<span>Ввічливий продавець</span>
			<span>Актуальна ціна</span>
		</div>

	</div>
}

export default Response