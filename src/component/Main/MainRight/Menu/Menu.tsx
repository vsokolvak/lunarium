import classes from './Menu.module.scss'
import { menulist } from '../../../../constant/constant'
import arrow from '../../../../img/icon/arrow.svg'
import { NavLink } from 'react-router-dom'
import { goods } from '../../../../constant/goods/goods'
import React, { useState } from 'react';


const Menu = props => {
	
	// список категорій товарів
	//const tovarItem = goods.map(el => {
		//return < NavLink to={'/' + el.path} > {el.name}</NavLink>
	//})

	// змінна, для відкритя списку меню(для маленьких екранів)
	let [vievMenu, setvievMenu] = useState(false)
	
	//функція, яка переключає змінну показу меню
	const switchVievMenu = (e) => {setvievMenu(!vievMenu)}

	// генерація списку меню
	const menuItem: any = menulist.map((el, index) => {

		// функція установить клас актив якщо елемент активний
		const setActiveMenu = (data) => { if (data.isActive) return classes.active }

		// список головного меню
		return <NavLink 
		onClick={switchVievMenu}
		className={setActiveMenu} 
		key={index} to={'/' + el.href}>{el.name}</NavLink>
	})

	return <div className={classes.wrapper}>
		
		<menu className={classes.menu}>
			{menuItem}
		</menu>
		
		<menu className={classes.menuSmallDisplay}>
			<button onClick={switchVievMenu}> МЕНЮ </button>
			{vievMenu?menuItem:''}
		</menu>

	</div>
}

export default Menu