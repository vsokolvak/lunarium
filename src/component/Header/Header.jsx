import classes from './Header.module.scss'
import { contact } from '../../constant/constant'
import Contact from './Contact/Contact'
import Logo from './Logo/Logo'

const Header = props => {
	return <div >
		{/* блок контактів */}
		<Contact />

		{/* нижній блок, лого + пошук */}
		<Logo />
	</div>
}

export default Header