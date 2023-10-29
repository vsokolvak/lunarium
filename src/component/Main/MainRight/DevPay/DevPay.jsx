import classes from './DevPay.module.scss'
import React from 'react';
import {Helmet} from "react-helmet";

// жсх розмітка
const DevPay = props => {

	return <div className={classes.wrapper}>
	
		<Helmet>

			<title>Лунаріум, оплата і доставка, інтернет магазин сувенірів</title>
			<meta name="description" content="
				доставка в поштове відділення за адресою,
				оплата за тарифами перевізника,
				оплата на карту, або наложним платежем
			"/>
		</Helmet>
			
		<section className={classes.section}>

			<h1>Способи доставки</h1>
			<div className={classes.about}>

				<span className={classes.bold}>Укрпошта</span>
				<span>До відділення в вашому місті</span>
				<span className={classes.bold}>"Нова Пошта"</span>
				<span>До відділення в вашому місті</span>
				<span className={classes.bold}>"Оплата"</span>
				<span>оплата за тарифами перевізника,
				оплата на карту, або наложним платежем</span>
				

			</div>
		</section>

	</div>
}

export default DevPay
