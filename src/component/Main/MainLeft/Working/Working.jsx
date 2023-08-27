import classes from './Working.module.scss'

const Working = props => {
	return <div className={classes.wrapper}>
		<span className={classes.title}>
			Графік роботи
		</span>

		<span className={classes.working}>
			<span className={classes.day}>
				ПОНЕДІЛОК
			</span> 
			<span className={classes.time}>
				09:00 - 20:00
			</span>
		</span>
		<hr />

		<span className={classes.working}>
			<span className={classes.day}>
				ВІВТОРОК
			</span> 
			<span className={classes.time}>
				09:00 - 20:00
			</span>
		</span >
		<hr />

		<span className={classes.working}>
			<span className={classes.day}>
				СЕРЕДА
			</span> 
			<span className={classes.time}>
				09:00 - 20:00
			</span>
		</span >
		<hr />

		<span className={classes.working}>
			<span className={classes.day}>
				ЧЕТВЕР
			</span> 
			<span className={classes.time}>
				09:00 - 20:00
			</span>
		</span >
		<hr />

		<span className={classes.working}>
			<span className={classes.day}>
				ПʼЯТНИЦЯ
			</span> 
			<span className={classes.time}>
				09:00 - 20:00
			</span>
		</span >
		<hr />

		<span className={classes.working}>
			<span className={classes.day}>
				СУБОТА
			</span> 
			<span className={classes.time}>
				11:00 - 17:00
			</span>
		</span >
		<hr />

		<span className={classes.working}>
			<span className={classes.day}>
				НЕДІЛЯ 
			</span>
			<span className={classes.time}>
				Вихідний
			</span>
		</span>
		<hr />
		
	</div>
}

export default Working