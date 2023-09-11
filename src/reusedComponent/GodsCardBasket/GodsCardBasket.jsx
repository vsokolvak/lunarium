import { useDispatch } from 'react-redux'
import classes from './GodsCardBasket.module.scss'

const GodsCardBasket = ({ goodsGroup }) => {

	const dispatch = useDispatch()

	const godsList = goodsGroup.map(el => {
		return <div className={classes.goodsWrapper} key={el.name}>
			<div className={classes.goods}>
				<img src={el.img} alt={el.name} />
				<div className={classes.goodsInfo}>
					<p>
						{el.description}
					</p>
					<p>
						ціна {el.price} / шт
					</p>
				</div>
			</div>
	</div>})

	return <div> {godsList} </div>
	
}

export default GodsCardBasket