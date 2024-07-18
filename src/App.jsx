import { useState } from 'react'
import './App.css'
import Clients from './components/Clients'
import Contact from './components/Contact'
import ERPSystems from './components/ERPsystems'
import Footer from './components/Footer'
import Header from './components/Header'
import ITconsalting from './components/ITconsalting'
import MainContent from './components/MainContent'
import MobileDev from './components/MobileDev'
import Optimization from './components/Optimization'
import Delever from './components/Portfolio/Delever'
import Goodzone from './components/Portfolio/Goodzone'
import ImanApp from './components/Portfolio/Iman'
import Smsuz from './components/Portfolio/Smsuz'
import Services from './components/Services'
import Team from './components/Team'
import Tools from './components/Tools'
import UIUXdesign from './components/UIUXdesign'
import Work from './components/Work'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<MainContent />
			<Services />
			<Team />
			<MobileDev />
			<ERPSystems />
			<UIUXdesign />
			<Optimization />
			<ITconsalting />
			<Tools />
			<Clients />
			<Delever />
			<Smsuz />
			<Goodzone />
			<ImanApp />
			<Work />
			<Contact />
			<Footer />
		</>
	)
}

export default App
