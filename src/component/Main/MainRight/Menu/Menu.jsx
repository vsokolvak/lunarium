import classes from './Menu.module.scss'
import { menulist } from '../../../../constant/constant'
import arrow from '../../../../img/icon/arrow.svg'
import { NavLink } from 'react-router-dom'
import { goods } from '../../../../constant/goods/goods'

// список категорій товарів

const tovarItem = goods.map(el => {
	return < NavLink to={'/' + el.path} > {el.name}</NavLink>
})

// змінні, активної сторінки
const active = 0
let itemMenu = 0

// генерація списку меню
const menuItem = menulist.map(el => {
	// змінна для запису активного класу,
	// якщо даний пункт активний, додати клас активний
	let menuClass = ''
	if (itemMenu === active) menuClass = classes.active
	else menuClass = ''
	// лічильник пунктів меню
	itemMenu++

	// для 2 пункту, додати випадаючий список, з категорій товарів
	if (itemMenu === 2) return <NavLink className={classes.openMenu} key={itemMenu} to={'/' + el.href}>
		{el.name}
		<img src={arrow} alt="ar" />
		<div className={classes.tovarlist}>
			{tovarItem}
		</div>
	</NavLink>
	// список головного меню
	return <NavLink className={menuClass} key={itemMenu} to={'/' + el.href}>{el.name}</NavLink>
})

const Menu = props => {
	return <div className={classes.wrapper}>
		
		<menu>
			{menuItem}
		</menu>

	</div>
}

export default Menu