import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Section from './component/Section/Section'
import Boost from './component/Boost/Boost'
import Footer from './component/Footer/Footer'

// css
import './App.css'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<Section />
			<Boost />
			<Footer />
		</div>
	)
}

export default App
