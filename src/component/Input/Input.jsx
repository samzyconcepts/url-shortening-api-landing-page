import './Input.css'

const Input = () => {
	return (
		<div className='input-container'>
			<div className='input-field'>
				<input type='text' className='link-input' placeholder='Shorten a link here..' />
                <button className='btn btn-primary'>Shorten It!</button>
			</div>
		</div>
	)
}

export default Input
