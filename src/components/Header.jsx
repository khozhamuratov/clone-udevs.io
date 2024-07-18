import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa6'
import { HiOutlineXMark } from 'react-icons/hi2'
import { IoMenuOutline } from 'react-icons/io5'
import { Events, Link, scrollSpy } from 'react-scroll'
import { directionData, portfolio } from '../constantas/consts'
import Dropdown from './Dropdown'

function Header() {
	const [activeSection, setActiveSection] = useState('')

	const [open, setOpen] = useState(false)

	useEffect(() => {
		AOS.init()
		// Регистрируем события прокрутки
		Events.scrollEvent.register('begin', function (to, element) {
			// Можно обработать начало прокрутки, если нужно
			setOpen(false)
		})

		Events.scrollEvent.register('end', function (to, element) {
			setActiveSection(to)
		})

		scrollSpy.update()

		return () => {
			Events.scrollEvent.remove('begin')
			Events.scrollEvent.remove('end')
		}
	}, [])

	return (
		<>
			<header
				data-aos='fade-down'
				className='px-[15px] sticky top-0 bg-white z-10 h-[72px] flex justify-between items-center border-b'
			>
				<img width={96} height={32} src='./logo.svg' alt='U-DEVS' />
				<button
					onClick={() => {
						setOpen(true)
						console.log(open)
					}}
					className='absolute top-0 right-0 p-[20px] lg:hidden'
				>
					<IoMenuOutline size={27} className='text-primary' />
				</button>
				<div>
					<ul className='lg:flex hidden justify-center items-center gap-[32px]'>
						<li>
							<Link
								to='services'
								smooth={true}
								duration={500}
								className={`text-[14px] text-text_color hover:border-b-[2px] rounded-[2px] transition-all duration-100 hover:border-b-primary py-[10px] font-semibold ${
									activeSection === 'services'
										? 'border-b-[2px] border-b-primary'
										: ''
								}`}
								href='#'
							>
								Услуги
							</Link>
						</li>
						<li>
							<Link
								to='team'
								smooth={true}
								duration={500}
								className={`text-[14px] text-text_color hover:border-b-[2px] rounded-[2px] transition-all duration-100 hover:border-b-primary py-[10px] font-semibold ${
									activeSection === 'team'
										? 'border-b-[2px] border-b-primary'
										: ''
								}`}
								href='#'
							>
								Команда
							</Link>
						</li>
						<li>
							<Dropdown dropdownData={directionData} title={'Направление'} />
						</li>
						<li>
							<Link
								to='tools'
								smooth={true}
								duration={500}
								className={`text-[14px] text-text_color hover:border-b-[2px] rounded-[2px] transition-all duration-100 hover:border-b-primary py-[10px] font-semibold ${
									activeSection === 'tools'
										? 'border-b-[2px] border-b-primary'
										: ''
								}`}
								href='#'
							>
								Инструменты
							</Link>
						</li>
						<li>
							<Link
								to='clients'
								smooth={true}
								duration={500}
								className={`text-[14px] text-text_color hover:border-b-[2px] rounded-[2px] transition-all duration-100 hover:border-b-primary py-[10px] font-semibold ${
									activeSection === 'clients'
										? 'border-b-[2px] border-b-primary'
										: ''
								}`}
								href='#'
							>
								Клиенты
							</Link>
						</li>
						<li>
							<Dropdown dropdownData={portfolio} title={'Портфолио'} />
						</li>
						<li>
							<a
								className='text-[14px] text-text_color font-semibold flex items-center justify-center gap-[2px]'
								href='#'
							>
								Язык
								<FaAngleDown size={12} />
							</a>
						</li>
						<li>
							<Link to='contact' smooth={true} duration={500}>
								<button className='text-[14px] text-white px-[16px] py-[10px] bg-primary rounded-[8px] font-bold hover:scale-105 transition-all duration-100 hover:text-[14px]'>
									Связяться
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</header>
			<div
				className={`${
					open ? 'block translate-x-0' : 'translate-x-full'
				} w-full h-screen flex flex-col items-center justify-between fixed transition-all duration-500 bg-[#F4F7FF] top-0 z-40 left-0`}
			>
				<header className='w-full px-[20px] h-[64px] flex items-center justify-between'>
					<img width={96} height={32} src='./logo.svg' alt='U-DEVS' />{' '}
					<button onClick={() => setOpen(false)} className='text-primary'>
						<HiOutlineXMark size={27} />
					</button>
				</header>
				<ul className='flex flex-col items-center justify-center'>
					<li>
						<Link
							to='services'
							smooth={true}
							duration={500}
							className='text-[32px] text-[#18191F] font-semibold'
							href='#'
						>
							Услуги
						</Link>
					</li>
					<li>
						<Link
							to='clients'
							smooth={true}
							duration={500}
							className='text-[32px] text-[#18191F] font-semibold'
							href='#'
						>
							Клиенты
						</Link>
					</li>
					<li>
						<Link
							to='team'
							smooth={true}
							duration={500}
							className='text-[32px] text-[#18191F] font-semibold'
							href='#'
						>
							Команда
						</Link>
					</li>
				</ul>
				<div className='w-full px-[15px] flex flex-col items-center justify-between'>
					<Link
						className='text-[20px] w-full text-white px-[16px] py-[10px] bg-primary rounded-[8px] font-bold hover:scale-105 transition-all duration-100 text-center'
						to='contact'
						smooth={true}
						duration={500}
					>
						Связяться
					</Link>
					<div className='flex w-full items-center justify-center my-[40px] gap-[24px]'>
						<span className='flex items-center justify-center w-[40px] h-[40px] bg-primary text-white rounded-full'>
							<FaInstagram size={24} />
						</span>
						<span className='flex items-center justify-center w-[40px] h-[40px] bg-primary rounded-full text-white'>
							<FaTwitter size={24} />
						</span>
						<span className='flex items-center justify-center w-[40px] h-[40px] bg-primary rounded-full text-white'>
							<FaYoutube size={24} />
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
