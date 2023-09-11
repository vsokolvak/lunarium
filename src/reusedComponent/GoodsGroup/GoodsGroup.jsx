import { useDispatch } from 'react-redux'
import classes from './GoodsGroup.module.scss'
import { addGoods } from '../../redux/reducers/basket'

const GoodsGroup = ({ goodsGroup }) => {

	const dispatch = useDispatch()

	const tovarList = goodsGroup.map(el => {
		const addGoodsBasket = () => dispatch(addGoods({...el, count: 1}))

		return <div className={classes.goods} key={el.name}>
			<img src={el.img} alt={el.name} />
			<button type='button' onClick={addGoodsBasket} >Додати в корзину</button>
			<p>
				{el.description}
			</p>
			<span>
				{el.price}
			</span>
		</div>
	})

	return <div className={classes.wrapper}>
		{tovarList}
	</div>
}

export default GoodsGroup