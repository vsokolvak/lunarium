import Company from './Company/Company'
import Goods from './Goods/Goods'
import classes from './MainRight.module.scss'
import Menu from './Menu/Menu.tsx'
import Slide from './Slide/Slide'
import View from './View/View'
import {Route, Routes} from 'react-router-dom'
import {goods} from '../../../constant/goods/goods'
import GoodsGroup from '../../../reusedComponent/GoodsGroup/GoodsGroup'
import About from './About/About'
import Contact from './Contact/Contact'
import DevPay from './DevPay/DevPay'
import React from 'react';
import GodsCard from './GodsCard'

const MainRight = props => {

	// компонента яка відображається за замовчуванням
	const MainContent = <div>
		< Slide />

		<Company />

		<Goods />

		<View />
	</div>
 
	// масив роутів, який відображує карточки товарів вибраної групи
	const goodsElement = goods.map(el => {
		return <Route path={`/goods&service/${el.path}`} 
		element={<GoodsGroup goodsGroup={el.goods} 
		goodsInfo={el} />} />
	})


	return <div className={classes.wrapper}>
		
		<Menu />

		<Routes>
			<Route path='/*' element={MainContent} />
			{goodsElement}
			<Route path='/goods&service' element={<Goods />} />
			<Route path='/goods&service/:grup/:name' element={<GodsCard />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/dev&pay' element={<DevPay />} />
		</Routes>

	</div>
}

export default MainRight