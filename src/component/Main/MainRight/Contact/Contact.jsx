import classes from './Contact.module.scss'
import {contact} from '../../../../constant/constant'
import React from 'react';

// жсх розмітка
const Contact = props => {

	return <div className={classes.wrapper}>

		<section className={classes.section}>
			<h2>Наші контакти</h2>
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
