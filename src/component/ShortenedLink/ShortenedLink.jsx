import Form from '../Form/Form'
import SingleLink from './SingleLink/SingleLink'

import './ShortenedLink.css'
import { useState } from 'react'

const ShortenedLink = () => {
	const [inputValue, setInputValue] = useState('')
	return (
		<div className='shortenedLink'>
			<Form setInputValue={setInputValue} />
			<SingleLink inputValue={inputValue} />
		</div>
	)
}

export default ShortenedLink
