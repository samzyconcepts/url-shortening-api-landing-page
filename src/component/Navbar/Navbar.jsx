import { useState } from 'react'

import logo from '../../images/logo.svg'

// css
import './Navbar.css'

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav>
			<div className='container'>
				<a href='#index' className='logo-container'>
					<img src={logo} alt='shortly logo' />
				</a>
				<div className={`menu ${isMenuOpen ? 'active' : ''}`}>
					<ul>
						<li>
							<a href='#features'>Features</a>
						</li>
						<li>
							<a href='#pricing'>Pricing</a>
						</li>
						<li>
							<a href='#resource'>Resources</a>
						</li>
					</ul>
					<div className='button'>
						<a href='#login' className='btn'>
							Login
						</a>
						<a href='#signup' className='btn btn-primary'>
							Sign Up
						</a>
					</div>
				</div>

				<div
					onClick={() => {
						toggleMenu()
					}}
					className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
				>
					<i className='bx bx-menu'></i>
					<i className='bx bx-x'></i>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
