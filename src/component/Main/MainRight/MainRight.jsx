import classes from './MainRight.module.scss'
import { menulist, tovarlist } from '../../../constant/constant'
import arrow from '../../../img/icon/arrow.svg'

const tovarItem = tovarlist.map(el =><a href='#' key={el}>{el}</a>)

const active = 0
let itemMenu = 0
console.log(classes)

const menuItem = menulist.map(el => {
	let menuClass = ''
	if (itemMenu === active) menuClass = classes.active
	else menuClass = ''
	itemMenu++
	if (itemMenu === 2) return <a className={classes.openMenu} key={itemMenu} href='#'>
		{el}
		<img src={arrow} alt="ar" />
		<div className={classes.tovarlist}>
			{tovarItem}
		</div>
	</a>
	return <a className={menuClass} key={itemMenu} href='#'>{el}</a>
})

const MainRight = props => {
	return <div className={classes.wrapper}>
		
		<menu>
			{menuItem}
		</menu>

	</div>
}

export default MainRight