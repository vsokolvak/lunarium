import classes from './styles.module.scss'
import React, {useState} from 'react';
import {Helmet} from "react-helmet";

// жсх розмітка
const FComponent = ({ gods, addGoodsBasket }) => {
//gods - товар, який тре показати
//addGoodsBasket - функція, яка добавляє товар в корзину

//змінна з елементом, який покажу коли користувач добавляє товар
const sucsesElement = <div className={classes.sucses} > товар додано в корзину </div>

//локальний стейт, зі змінною, яка відповідає за показ повідомлення
let [showSucses, setshowSucses] = useState(false)

//функція, обробки кнопки додавання в корзину
const pressButton = () => {
	setshowSucses(true)
	addGoodsBasket(gods)
	setTimeout(() =>{
		setshowSucses(false)
	}, 1000)
}
	
return <div className={classes.wrapper}>

	<Helmet>

		<title> { gods?.description || 'Лунаріум, товар'} </title>
		<meta name="description" content="
			Нанесення унікального надпису, або вашого фото, 
			на різноманітні товари, чашки, подушки, пазли, термокружки,
			посуд, термос.
		"/>
	</Helmet>
	
	{ !showSucses || sucsesElement }

	<h1> {gods.description} </h1>
	
	{gods.video?<video src={gods.video} controls={true} preload={'metadata'}/>
	:<img src={gods.img} alt={gods.name} />}
	
	<h3> ціна: {gods.price} грн </h3>
	
	<button onClick={pressButton}> Додати в корзину </button>
	
</div>
}

export default FComponent
