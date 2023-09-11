import classes from './Logo.module.scss'
import logo from '../../../img/Logo/logo.webp'
import serchIcon from '../../../img/search/search.svg'
import Basket from './Basket/Index'

const Logo = props => {
	return <div className={classes.LogoWrapper}>
		{/* логотип */}
		<div className={classes.logo}>
			<img src={logo} alt="Lunarium" />
			<h2>Lunarium</h2>
		</div>

		{/* поле пошуку + корзина */}
		<div className={classes.search}>
			<div className={classes.searchInput}>
				<input type="text"></input>
				<button> <img src={serchIcon} alt="serchIcon" /> </button>
			</div>
			<Basket />
		</div>
	</div>
}

export default Logo