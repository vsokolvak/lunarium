import Contact from './Contact/Contact'
import Logo from './Logo/Logo'
import React from 'react';

const Header = () => {
	return <div >
		{/* блок контактів */}
		<Contact />

		{/* нижній блок, лого + пошук */}
		<Logo />
	</div>
}

export default Header