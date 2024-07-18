import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { aboutUs, portfolio, services } from '../constantas/consts'

function Footer() {
	return (
		<footer className='pt-[48px] flex flex-col w-full items-center justify-center bg-[#F4F7FF]'>
			<img className='w-[106px]' src='./logo.svg' />
			<div className='flex lg:flex-row px-[30px] lg:px-0 flex-col items-start pt-[44px] pb-[32px] justify-around w-full'>
				<div>
					<p className='text-[18px] text-[#000000CC] mb-[18px] font-semibold'>
						Про нас
					</p>
					<ul className='flex flex-col items-start justify-center gap-[10px]'>
						{aboutUs.map((item, index) => (
							<li key={index}>
								<Link
									spy={true}
									smooth={true}
									offset={50}
									duration={500}
									to={item.to}
									className='text-[18px] text-primary font-normal relative hover:after:absolute after:h-[1.5px] after:bg-primary after:left-0 after:bottom-0 after:w-full hover:after:w-[100%] hover:after:left-[50%] hover:after:translate-x-[-50%] hover:after:transition-all duration-300'
									href='#'
								>
									{item.title}
								</Link>{' '}
							</li>
						))}
					</ul>
				</div>
				<div>
					<p className='text-[18px] text-[#000000CC] mb-[18px] font-semibold'>
						Услуги
					</p>
					<ul className='flex flex-col items-start justify-center gap-[10px]'>
						{services.map((item, index) => (
							<li key={index}>
								<Link
									spy={true}
									smooth={true}
									offset={50}
									duration={500}
									to={item.to}
									className='text-[18px] text-primary font-normal relative hover:after:absolute after:h-[1.5px] after:bg-primary after:left-0 after:bottom-0 after:w-full hover:after:w-[100%] hover:after:left-[50%] hover:after:translate-x-[-50%] hover:after:transition-all duration-300'
									href='#'
								>
									{item.title}
								</Link>{' '}
							</li>
						))}
					</ul>
				</div>
				<div>
					<p className='text-[18px] text-[#000000CC] mb-[18px] font-semibold'>
						Портфолио
					</p>
					<ul className='flex flex-col items-start justify-center gap-[10px]'>
						{portfolio.map((item, index) => (
							<li key={index}>
								<Link
									spy={true}
									smooth={true}
									offset={50}
									duration={500}
									to={item.to}
									className='text-[18px] text-primary font-normal relative hover:after:absolute after:h-[1.5px] after:bg-primary after:left-0 after:bottom-0 after:w-full hover:after:w-[100%] hover:after:left-[50%] hover:after:translate-x-[-50%] hover:after:transition-all duration-300'
									href='#'
								>
									{item.title}
								</Link>{' '}
							</li>
						))}
					</ul>
				</div>
			</div>
			<hr className='text-primary w-[80%] lg:block hidden' />

			<div className='flex lg:flex-row flex-col-reverse lg:gap-0 gap-[20px] items-center justify-between w-[80%] py-[25px]'>
				<p className='text-primary text-[14px] font-semibold leading-5'>
					© 2024 Udevs. All rights reserved
				</p>
				<ul className='flex items-center justify-center gap-[16px]'>
					<li className='p-[7px] text-[24px] rounded-full text-primary bg-[rgba(27,91,247,.1)]'>
						<a href='https://udevs.io'>
							<FaInstagram />
						</a>
					</li>
					<li className='p-[7px] text-[24px] rounded-full text-primary bg-[rgba(27,91,247,.1)]'>
						<a href='https://udevs.io'>
							<FaTwitter />
						</a>
					</li>
					<li className='p-[7px] text-[24px] rounded-full text-primary bg-[rgba(27,91,247,.1)]'>
						<a href='https://udevs.io'>
							<FaYoutube />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
