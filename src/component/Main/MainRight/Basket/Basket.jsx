import classes from './Basket.module.scss'
import { useSelector } from 'react-redux'
import GodsCardBasket from '../../../../reusedComponent/GodsCardBasket/GodsCardBasket'

// жсх розмітка
const Basket = ({}) => {

	const basket = useSelector(state => state.basket)
	let summ = 0

	const basketElement = basket.map(el => {
		summ += el.price||0
		return <GodsCardBasket goodsGroup={el} />
	})

	return <div >
		<span>сума замовлення {summ} грн</span>
		<div className={classes.wrapper}>{basketElement}</div>
		
	</div>

}

export default Basket
