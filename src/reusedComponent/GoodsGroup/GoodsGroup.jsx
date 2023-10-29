import { NavLink } from 'react-router-dom'
import classes from './GoodsGroup.module.scss'
import React, { useState } from 'react';
import {Helmet} from "react-helmet";

const GoodsGroup = ({ goodsGroup, goodsInfo }) => {
	//це масив елементів з товарами групи
	const tovarList = goodsGroup.map((el, count) => {
		
		return <div className={classes.goods} key={el.name}>
			{el.video?<video src={el.video} controls={true} preload={'metadata'}/>
			:<img src={el.img} alt={el.name} />}
			< NavLink to={el.name} >	
				<button>Детально</button>
				<p>
					{el.description}
				</p>
				<span>
					ціна {el.price} грн
				</span>
			</NavLink>
		</div>
	})

	return <div className={classes.wrapper} >
	
		<Helmet>

			<title> {goodsInfo.name}, з унікальним друком </title>
			<meta name="description" content="
				Розробка дизайну для нанесення вашого надпису, або фото, 
				, або вибір готового макету				
				на {goodsInfo.name}, {goodsInfo.description}"/>
		</Helmet>
	
		<div className={classes.descriptionGroup} >
			<h1> {goodsInfo.name}, унікальний подарунок </h1>
			<p> {goodsInfo.description} </p>
		</div>
		{tovarList}
	</div>
}

export default GoodsGroup