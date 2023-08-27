import classes from './Goods.module.scss'
import { goods } from '../../../../constant/goods/goods'
import { NavLink } from 'react-router-dom'

// жсх розмітка
const Goods = props => {

	const grupGoods = goods.map(el => {
		return <NavLink to={'/' + el.path} className={classes.goods}>
				<img src={el.img} alt={el.name} />
				<div className={classes.description}>
					<span>{el.name}</span>
					<span className={classes.hidden}>{el.description}</span>
				</div>
		</NavLink>
	})

	return <div className={classes.wrapper}>
		<h3>Наші товари</h3>
		<div className={classes.item}>
			{grupGoods}
		</div>
	</div>
}

export default Goods
