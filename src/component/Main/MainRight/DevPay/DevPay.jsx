import classes from './DevPay.module.scss'

// жсх розмітка
const DevPay = props => {

	return <div className={classes.wrapper}>
			
		<section className={classes.section}>

			<h2>Способи доставки</h2>
			<div className={classes.about}>

				<span className={classes.bold}>Укрпошта</span>
				<span>До відділення в вашому місті</span>
				<span className={classes.bold}>"Нова Пошта"</span>
				<span>До відділення в вашому місті</span>

			</div>
		</section>

	</div>
}

export default DevPay
