import { useDispatch } from 'react-redux'
import classes from './GodsCardBasket.module.scss'
import { goodsChangeCount } from '../../redux/reducers/basket'

const GodsCardBasket = ({ goodsGroup }) => {

	const dispatch = useDispatch()

	const godsList = []


	for (let keys in goodsGroup) {

		const countUp = () => dispatch(goodsChangeCount({ name: goodsGroup[keys].name , count: 1}))
		const countDown = () => dispatch(goodsChangeCount({ name: goodsGroup[keys].name , count: -1}))

		godsList.push(<div className={classes.goodsWrapper} key={goodsGroup[keys].name}>
			<div className={classes.goods}>
				<img src={goodsGroup[keys].img} alt={goodsGroup[keys].name} />
				<div className={classes.goodsInfo}>
					<p>
						{goodsGroup[keys].description}
					</p>
					<p>
						ціна {goodsGroup[keys].price * goodsGroup[keys].count} грн / {goodsGroup[keys].count} шт
					</p>
					<div className={classes.goodsCount}>
						<button type='button' onClick={countDown}>-</button>
						<p>{goodsGroup[keys].count}</p>
						<button type='button' onClick={countUp}>+</button>
					</div>
				</div>
			</div>
		</div>)
	}

	return <div className={classes.godsListWrapper}> {godsList} </div>
	
}

export default GodsCardBasket