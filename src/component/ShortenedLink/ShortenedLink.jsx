import Form from '../Form/Form'
import SingleLink from './SingleLink/SingleLink'

import './ShortenedLink.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ShortenedLink = () => {
	const [links, setLinks] = useState([])
	const [inputValue, setInputValue] = useState('')

	const url = `https://api.shrtco.de/v2/shorten?url=${inputValue}`

	const fetchData = async () => {
		const response = await axios(url)
		const shortLink = response.data

		const { result } = shortLink
		const linkExists = links.find(
			(link) => link.original_link === result.original_link
		)

		if (linkExists) {
			alert('This link has already been shortened')
			return true
		}

		setLinks([result, ...links])
		localStorage.setItem('links', JSON.stringify([result, ...links]))
		return true
	}

	const fetchLinks = () => {
		const links = JSON.parse(localStorage.getItem('links'))
		if (links) setLinks(links)
	}

	useEffect(() => {
		fetchLinks()
	}, [])

	useEffect(() => {
		if (inputValue.length) {
			fetchData()
		}
	}, [inputValue])

	return (
		<div className='shortenedLink'>
			<Form setInputValue={setInputValue} />
			{links.map((link) => (
				<SingleLink key={link.code} link={link} />
			))}
		</div>
	)
}

export default ShortenedLink
