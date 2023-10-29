import classes from './Goods.module.scss'
import {goods} from '../../../../constant/goods/goods'
import {NavLink} from 'react-router-dom'
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {Helmet} from "react-helmet";

// жсх розмітка
const Goods = props => {
	
	
	
	//функція, скролить вікно до top-300px
	const scrollTo = () => { scroll.scrollTo(300) }

	// карточки груп товарів
	const grupGoods = goods.map((el, count) => {
		return <NavLink to={'/goods&service/' + el.path} 
		className={classes.goods} key={count}
		onClick={scrollTo}>
			<img src={el.img} alt={el.name} />
			<div className={classes.description}>
				<span>{el.name}</span>
				<span className={classes.hidden}>{el.description}</span>
			</div>
		</NavLink>
	})

	return <div className={classes.wrapper}>
	
		<Helmet>

			<title>Сувенірна продукція, товари, на які наносимо принт</title>
			<meta name="description" content="
				Нанесення унікального надпису, або вашого фото, 
				на різноманітні товари, чашки, подушки, пазли, термокружки,
				посуд, термос.
			"/>
		</Helmet>
	
		<h1>Товари, які ми виготовляємо</h1>
		<div className={classes.item}>
			{grupGoods}
		</div>
	</div>
}

export default Goods
