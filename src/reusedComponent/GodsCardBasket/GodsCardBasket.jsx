import {useDispatch} from 'react-redux'
import classes from './GodsCardBasket.module.scss'
import {goodsChangeCount, goodsDelete, goodsGetFromLocalstorage} from '../../redux/reducers/basket'
import iconDelete from '../../img/icon/delete.png'
import React, {useEffect} from 'react'

const GodsCardBasket = ({ goodsGroup }) => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(goodsGetFromLocalstorage())
	}, []);

	const godsList = []


	for (let keys in goodsGroup) {

		const countUp = () => dispatch(goodsChangeCount({ name: goodsGroup[keys].name , count: 1}))
		const countDown = () => dispatch(goodsChangeCount({ name: goodsGroup[keys].name , count: -1}))
		const deleteItem = () => dispatch(goodsDelete({ name: goodsGroup[keys].name}))


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
						<img src={iconDelete} alt="delete" onClick={ deleteItem } />
					</div>
				</div>
			</div>
		</div>)
	}

	return <div className={classes.godsListWrapper}> {godsList} </div>
	
}

export default GodsCardBasket