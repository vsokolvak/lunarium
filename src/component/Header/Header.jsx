import classes from './Header.module.scss'
import { contact } from '../../constant/constant'

const Header = props => {
	return <div>
		<div className={classes.contact}>
			<div>
				<img src="#" alt="phone" />
				<span> {contact.phone} </span>
			</div>
			<div>
				<img src="#" alt="viber" />
				<span> {contact.viber} </span>
			</div>
			<div>
				<img src="#" alt="telegram" />
				<span> {contact.telegram} </span>
			</div>	
			<div>
				<img src="#" alt="email" />
				<span> {contact.email} </span>
			</div>	
		</div>
	</div>
}

export default Header