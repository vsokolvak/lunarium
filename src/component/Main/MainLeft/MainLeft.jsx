import classes from './MainLeft.module.scss'
import arrow from '../../../img/icon/arrow.svg'
import Response from './Response/Response'
import GodsCard from '../../../reusedComponent/GodsCard/GodsCard'
import Working from './Working/Working'
import React from 'react';

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
				<GodsCard />
			</div>

		</div>

		{/* відгуки */}
		<div className={classes.response}>
			<h4>Останні відгуки</h4>

			<div className={classes.responseList}>
				<Response />
				<Response />
				<Response />
			</div>
			
		</div>

		<Working />
		
	</div>
}

export default MainLeft