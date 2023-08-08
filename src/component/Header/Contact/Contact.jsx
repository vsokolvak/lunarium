import classes from './Contact.module.scss'
import { contact } from '../../../constant/constant'

const Contact = props => {
	return <div>
		<div className={classes.contact}>
			<div className={classes.contactItem}>
				<img src={contact.phone.logo} alt="phone" className={classes.filterWhite} />
				<a href="tel:+380686226171"> <span> {contact.phone.number} </span> </a>
			</div>
			<div className={classes.contactItem}>
				<img src={contact.viber.logo} alt="viber" />
				<a href="viber://add?number=+380686226171"> <span> {contact.viber.number} </span> </a>
			</div>
			<div className={classes.contactItem}>
				<img src={contact.telegram.logo} alt="telegram" />
				<a href="https://t.me/+380686226171"> <span> {contact.telegram.number} </span> </a>
			</div>	
			<div className={classes.contactItem}>
				<img src={contact.email.logo} alt="email" className={classes.filterWhite} />
				<a href="mailto:sergijlunev@ukr.net"> <span> {contact.email.number} </span> </a>
			</div>	
		</div>
	</div>
}

export default Contact