import classes from './Contact.module.scss'
import {contact} from '../../../../constant/constant'
import React from 'react';
import {Helmet} from "react-helmet";

// жсх розмітка
const Contact = props => {

	return <div className={classes.wrapper}>
	
		<Helmet>

			<title>Лунаріум, контакти, інтернет магазин сувенірів,</title>
			<meta name="description" content="
				контактна інформація, як з нами звязатись
			"/>
		</Helmet>

		<section className={classes.section}>
			<h1>Наші контакти</h1>
			<div className={classes.about}>
				<span>Назва</span>
				<span>Лунаріум</span>
				<span>Контактна особа</span>
				<span>Сергій</span>
				<span>Адреса</span>
				<span>Вінниця, Україна</span>
				<span>Телефон</span>
				<span>{contact.phone.number}</span>
				<span>Email</span>
				<span>{contact.email.number}</span>
				<span>Telegram</span>
				<span>{contact.telegram.number}</span>
				<span>Viber</span>
				<span>{contact.viber.number}</span>
			</div>
		</section>
	</div>
}

export default Contact
