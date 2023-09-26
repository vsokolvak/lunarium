import classes from './Menu.module.scss'
import { menulist } from '../../../../constant/constant'
import arrow from '../../../../img/icon/arrow.svg'
import { NavLink } from 'react-router-dom'
import { goods } from '../../../../constant/goods/goods'
import React, { useState } from 'react';


const Menu = props => {
	
	// список категорій товарів

	const tovarItem = goods.map(el => {
		return < NavLink to={'/' + el.path} > {el.name}</NavLink>
	})

	// змінні, активної сторінки
	let [active, setActive] = useState(0)

	// генерація списку меню
	const menuItem = menulist.map((el, index) => {
		// змінна для запису активного класу,
		// якщо даний пункт активний, додати клас активний
		const menuClass = index === active ? classes.active : '';
		// лічильник пунктів меню
		const setActiveMenu = () => { setActive(index) }

		// список головного меню
		return <NavLink onClick={setActiveMenu} className={menuClass} key={index} to={'/' + el.href}>{el.name}</NavLink>
	})

	
	return <div className={classes.wrapper}>
		
		<menu>
			{menuItem}
		</menu>

	</div>
}

export default Menu