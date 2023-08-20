import Company from './Company/Company'
import Goods from './Goods/Goods'
import classes from './MainRight.module.scss'
import Menu from './Menu/Menu'
import Slide from './Slide/Slide'

const MainRight = props => {
	return <div className={classes.wrapper}>
		
		<Menu />

		<Slide />

		<Company />

		<Goods />

	</div>
}

export default MainRight