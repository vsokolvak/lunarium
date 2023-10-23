import {useDispatch} from 'react-redux'
import classes from './GoodsGroup.module.scss'
import {addGoods} from '../../redux/reducers/basket'
import React, { useState } from 'react';

const GoodsGroup = ({ goodsGroup, goodsInfo }) => {

	const dispatch = useDispatch()
	
	//змінна, встановлює для поля ефект, коли товар додано в корзину
	let [ numELAdd, setnumELAdd ] = useState(null)
	
	//змінна з елементом, який покажу коли користувач добавляє товар
	const sucses = <div className={classes.sucses} > товар додано в корзину </div>

	//це масив елементів з товарами групи
	const tovarList = goodsGroup.map((el, count) => {
		
		//змінна, від якої залежить повідомлення про замовлення
		let showSucses = false
		if (numELAdd === count) showSucses = true
		
		//функція додавання товару в корзину
		const addGoodsBasket = (e) => {
			setnumELAdd(count)
			dispatch(addGoods({...el, count: 1}))
			setTimeout(() =>{
				setnumELAdd(null)
			}, 1000)
		}
		
		return <div className={classes.goods} key={el.name}>
			{ !showSucses || sucses }
			{el.video?<video src={el.video} controls={true} preload={'metadata'}/>
			:<img src={el.img} alt={el.name} />}
			<button type='button' onClick={addGoodsBasket}>
				Додати в корзину
			</button>
			<p>
				{el.description}
			</p>
			<span>
				{el.price}
			</span>
		</div>
	})

	return <div className={classes.wrapper} >
		<div className={classes.descriptionGroup} >
			<h2> {goodsInfo.name} </h2>
			<p> {goodsInfo.description} </p>
		</div>
		{tovarList}
	</div>
}

export default GoodsGroup