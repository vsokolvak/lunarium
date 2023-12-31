import MainLeft from './MainLeft/MainLeft'
import MainRight from './MainRight/MainRight'
import classes from './Main.module.scss'
import React from 'react';

const Main = () => {
	return <div className={classes.main}>
		<div className={classes.left}>
			{/* колонка зліва */}
			<MainLeft />
		</div>

		<div className={classes.right}>
			{/* колонка справа */}
			<MainRight />
		</div>
	</div>
}

export default Main