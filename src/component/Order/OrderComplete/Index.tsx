// @ts-ignore
import classes from './Style.module.scss'
import React from 'react';

const OrderComplete = ({ setactiveComponent, sendMail, data, gods }) => {

	// функція, повертає 1 сторінку форми
	const goStart = () => setactiveComponent(0)
	
	//функція, щоб повернутися назад
	const goBack = () => setactiveComponent(1)
	
	//функція, відправляє замовлення па пошту
	const sendMails = () => sendMail()
	
	//функція, створює список товарів
	const setGodsList = () => {
		let totalPrice = 0
		let godList = []

		for(let key in gods){
			totalPrice += gods[key].price*gods[key].count
			godList.push(
				<div className={classes.label} key={gods[key].name}>
					<span> 
						товар: {gods[key].description||'помилка'}, 
						{gods[key].count} шт по 
						{gods[key].price||'помилка'} грн
					</span>
					<img src={gods[key].img} />
				</div>
			)
		}
		godList.push(<div className={classes.label} key={0}>
		сума замовлення: {totalPrice} грн
		</div>)
		return godList
	}

	return <div className={classes.contactData}>
		<h4> Оформлення замовлення </h4>
		<div className={classes.form}>

			<div className={classes.formField}>
				<div className={classes.label}>Ім"я: {data.firstName||'не повідомив'}</div>
				<div className={classes.label}>Прізвище: {data.lastName||'не повідомив'}</div>
				<div className={classes.label}>Телефон: {data.tel||'не повідомив'}</div>
				<div className={classes.label}>Служба доставки: {data.namePost||'не повідомив'}</div>
				<div className={classes.label}>адреса: {data.departCurent||'не повідомив'}</div>
				{setGodsList()}
			</div>

			<div className={classes.formField}>
				<button onClick={sendMails}>Оформити замовлення</button>
				<button onClick={goBack}>Назад</button>
				<button onClick={goStart}>На початок</button>
			</div>
		</div>
	</div>
}

export default OrderComplete