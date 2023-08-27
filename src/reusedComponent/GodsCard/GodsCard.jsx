import classes from './GodsCard.module.scss'
import img1 from '../../img/recomendation/img1.webp'

const GodsCard = props => {
	return <div className={classes.wrapper}>

		<div className={classes.itemList}>
			<img src={img1} alt="tovar" />
			<span>Чашка чорна "Найкращому дідусеві у світі" для улюбленого дідуся</span>

			<span className={classes.price}>
				210 грн
			</span>
		</div>
	</div>
}

export default GodsCard