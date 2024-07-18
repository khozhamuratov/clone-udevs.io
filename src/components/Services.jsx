import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

const services = [
	{
		title: 'Выделенная команда',
		icon: './person.svg',
	},
	{
		title: 'Разработка мобильных приложений',
		icon: './phone.svg',
	},
	{
		title: 'Разработка и внедрение ERP систем',
		icon: './branch.svg',
	},
	{
		title: 'UI/UX дизайн',
		icon: './layer.svg',
	},
	{
		title: 'Оптимизация инфроструктуры',
		icon: './settings.svg',
	},
	{
		title: 'IT консалтинг',
		icon: './computer.svg',
	},
]

function Services() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section
			id='services'
			className='w-[95%] py-[300px] mt-[300px] lg:pt-0 mx-auto h-screen flex lg:items-start items-center gap-[50px] justify-center flex-col'
		>
			<h1
				data-aos='fade-up'
				className='lg:text-[64px] text-[32px] text-primary font-semibold'
			>
				Наши услуги
			</h1>
			<div
				data-aos='fade-up'
				className='grid grid-cols-2 lg:grid-cols-3 gap-[30px]'
			>
				{services.map((item, index) => (
					<div
						key={index}
						className='flex items-start gap-[24px] flex-col bg-bgcolor rounded-[8px] p-[32px]'
					>
						<img src={item.icon} />
						<p className='text-[20px] mb-[20px] text-text_color font-semibold'>
							{item.title}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Services
