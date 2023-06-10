import { CopyToClipboard } from 'react-copy-to-clipboard'
import './SingleLink.css'

// const copyToClipboard = (str, e) => {
// 	e.preventDefault()
// 	setTimeout(() => {
// 		e.target.classList.remove('singleLink__buttonCopied')
// 		e.target.textContent = 'Copy'
// 	}, 5000)

// 	e.target.classList.add('singleLink__buttonCopied')
// 	e.target.textContent = 'Copied!'

// 	const el = document.createElement('textarea')
// 	el.value = str
// 	document.body.appendChild(el)
// 	el.select()
// 	document.execCommand('copy')
// 	document.body.removeChild(el)
// }

const SingleLink = ({inputValue}) => {
	return (
		<div className='singleLink'>
			<div className='singleLink__link'>
				<a
					href={inputValue}
					className='singleLink__original'
					target='_blank'
					rel='noreferrer noopener'
				>
					{inputValue}
				</a>
			</div>
			<div className='singleLink__container'>
				<a
					href='{link.full_short_link}'
					className='singleLink__shortened'
					target='_blank'
					rel='noreferrer noopener'
				>
					jfdkafj
				</a>

				<CopyToClipboard text={inputValue}>
					<button className='singleLink__button btn btn-primary'>
						Copy
					</button>
				</CopyToClipboard>
			</div>
		</div>
	)
}

export default SingleLink
