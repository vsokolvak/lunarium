import classes from './style.module.scss'
import basketIcon from '../../../../img/search/goods.svg'
import { useState } from 'react'
import close from '../../../../img/icon/iconClose.png'
import GodsCardBasket from '../../../../reusedComponent/GodsCardBasket/GodsCardBasket'
import { useSelector } from 'react-redux'

const Basket = props => {

	// локальний стейт змінна, яка відповідає за відображення корзини
	const [displayBasket, setDisplayBasket] = useState(false)

	// функція яка перемикає відображення корзини
	const showBasket = () => { setDisplayBasket(!displayBasket) }

	const goodsGroup = useSelector(state => state.basket)

	return <div className={classes.wrapper}>
		{/* іконка корзини */}
		<div className={classes.logo} onClick={showBasket}> 
			<img src={basketIcon} alt="basketIcon" /> 
		</div>

		{/* блок з товарами, позиція фіксет */}
		{displayBasket ? <BasketGoods showBasket={showBasket} goodsGroup={goodsGroup} /> : ''}
	</div>
}

// компонента корзини з товарами
const BasketGoods = ({ showBasket, goodsGroup }) => {

	{/* змінна прайс, сума замовлення */ }
	let price = 0
	for (let key in goodsGroup) { price += (goodsGroup[key].price * goodsGroup[key].count)}

	return <div className={classes.basketGoodsWrapper}>

		{/* блок бекграунда, прозорий */}
		<div className={classes.basketGoodsBackground} onClick={showBasket}></div>

		{/* блок з товарами, по центру */}
		<div className={classes.basketGoods}>

			{/* заголовок, з кнопкою закриття */}
			<h3> Кошик <img className={classes.close} onClick={showBasket} src={close} alt="close" /> </h3>

			{/* блок товарів */}

			<div className={classes.goodsList}>
				<GodsCardBasket goodsGroup={goodsGroup} />
			</div>

			{/* блок оформлення заказу */}

			<div className={classes.goodsPurchase}>
				<div className={classes.goodsPurchasePrice}>
					<p>до оплати без доставки</p>
					<p> {price} грн</p>
				</div>
				<button type='button'>Оформити замовлення</button>

			</div>

		</div>
	</div>
}

export default Basket