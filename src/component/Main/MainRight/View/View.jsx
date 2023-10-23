import GodsCard from '../../../../reusedComponent/GodsCard/GodsCard'
import classes from './View.module.scss'
import React from 'react';

// жсх розмітка
const View = props => {

	return <div className={classes.wrapper}>
		<span className={classes.title}>Ви переглядали</span>

		<div className={classes.itemlist}>
			<GodsCard />
			<GodsCard />
			<GodsCard />
		</div>
	</div>
}

export default View
