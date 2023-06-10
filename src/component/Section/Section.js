import ShortenedLink from '../ShortenedLink/ShortenedLink'

// import css
import './Section.css'

// import images
import brand from '../../images/icon-brand-recognition.svg'
import detailed from '../../images/icon-detailed-records.svg'
import customizable from '../../images/icon-fully-customizable.svg'

const Section = () => {
	return (
		<section id='features'>
			<div className='container'>
				<ShortenedLink />
				<div className='features-content'>
					<h1 className='l-heading'>Advanced Statistics</h1>
					<p className='l-para'>
						Track how your links are performing across the web with
						our advanced statistics dashboard.
					</p>

					<div className='card-container'>
						<hr />
						<div className='card card-1'>
							<div className='icon'>
								<img src={brand} alt='brand recognition' />
							</div>

							<h3 className='l-heading'>Brand Recognition</h3>
							<p>
								Boost your brand recognition with each click.
								Generic links don’t mean a thing. Branded links
								help instil confidence in your content.
							</p>
						</div>
						<div className='card card-2'>
							<div className='icon'>
								<img src={detailed} alt='Detailed Records' />
							</div>
							<h3 className='l-heading'>Detailed Records</h3>
							<p>
								Gain insights into who is clicking your links.
								Knowing when and where people engage with your
								content helps inform better decisions.
							</p>
						</div>
						<div className='card card-3'>
							<div className='icon'>
								<img
									src={customizable}
									alt='Fully Customizable'
								/>
							</div>
							<h3 className='l-heading'>Fully Customizable</h3>

							<p>
								Improve brand awareness and content
								discoverability through customizable links,
								supercharging audience engagement.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section
