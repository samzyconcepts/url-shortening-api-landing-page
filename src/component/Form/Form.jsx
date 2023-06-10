import { useState } from 'react'

import './Form.css'

const Form = ({ setInputValue }) => {
	const [link, setLink] = useState('')
	const [errorMsg, setErrorMsg] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		if (link === '') {
			setErrorMsg('Please add a link')
		} else if (!link.match(/^(ftp|http|https):\/\/[^ "]+$/)) {
			setErrorMsg('Please enter a valid URL')
		}

		setTimeout(() => {
			setErrorMsg('')
		}, 1500)

		setInputValue(link)

		setLink('')
	}

	return (
		<form onSubmit={handleSubmit} className='input-container'>
			<div className='input-field'>
				<div className='input'>
					<input
						type='text'
						className={`link-input ${
							errorMsg !== '' ? 'error' : ''
						}`}
						placeholder='Shorten a link here..'
						value={link}
						onChange={(e) => setLink(e.target.value)}
					/>
					<p className='error-msg'>{errorMsg}</p>
				</div>
				<button className='btn btn-primary'>Shorten It!</button>
			</div>
		</form>
	)
}

export default Form
