import Work from '../../images/illustration-working.svg'

// css
import './Hero.css'

const Hero = () => {
	return (
		<header>
			<div className='container'>
				<div className='content'>
					<h1 className='l-heading'>More than just shorter links</h1>
					<p>
						Build your brand’s recognition and get detailed insights
						on how your links are performing.
					</p>
                    <button className='btn btn-primary'>Get Started</button>
				</div>
				<div className='image'>
					<img src={Work} alt='working illustration' />
				</div>
			</div>
		</header>
	)
}

export default Hero
