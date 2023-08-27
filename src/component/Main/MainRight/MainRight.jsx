import Company from './Company/Company'
import Goods from './Goods/Goods'
import classes from './MainRight.module.scss'
import Menu from './Menu/Menu'
import Slide from './Slide/Slide'
import View from './View/View'
import { Route, Routes } from 'react-router-dom'
import { goods } from '../../../constant/goods/goods'
import GoodsGroup from '../../../reusedComponent/GoodsGroup/GoodsGroup'

const MainRight = props => {

	const MainContent = <div>
		< Slide />

		<Company />

		<Goods />

		<View />
	</div>

	const goodsElement = goods.map(el => {
		return <Route path={`/${el.path}`} element={<GoodsGroup goodsGroup={el.goods} />} />
	})


	return <div className={classes.wrapper}>
		
		<Menu />

		<Routes>
			<Route path='/*' element={MainContent} />
			{goodsElement}
			<Route path='/goods&service' element={<Goods />} />
			<Route path='/about' element={<Company />} />
			<Route path='/contact' element={<div> CONTACT </div>} />
			<Route path='/dev&pay' element={<div> dev&pay </div>} />
		</Routes>

	</div>
}

export default MainRight