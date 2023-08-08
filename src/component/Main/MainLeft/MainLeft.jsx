import classes from './MainLeft.module.scss'
import arrow from '../../../img/icon/arrow.svg'
import img1 from '../../../img/recomendation/img1.webp'

const MainLeft = props => {
	return <div className={classes.wrapper}>

		{/* рекомендації */}
		<div className={classes.rec}>
			<div className={classes.navigation}>
				<span>Ми рекомендуємо</span>
				<button className={classes.navRevrs}>
					<img src={arrow} alt="left" />
				</button>
				<button className={classes.navFrwrd}>
					<img src={arrow} alt="right" />
				</button>
			</div>
			<div className={classes.itemList}> 
				<img src={img1} alt="tovar" />
				<span>Чашка чорна "Найкращому дідусеві у світі" для улюбленого дідуся</span>

				<span className={classes.price}>
					210 грн
				</span>
			</div>
		</div>
		
	</div>
}

export default MainLeft