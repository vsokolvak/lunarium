import classes from './GoodsGroup.module.scss'

const GoodsGroup = props => {

	const tovarList = props.goodsGroup.map(el => {
		return <div className={classes.goods} key={el.name}>
			<img src={el.img} alt={el.name} />
			<button>Купити</button>
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