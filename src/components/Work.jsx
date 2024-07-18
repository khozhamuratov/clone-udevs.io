import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function Work() {
	const contactData = [
		{
			title: 'Связь',
			icon: './portfolio/phone.svg',
			content: 'Отправьте нам свой запрос на проект или идею проекта.',
		},
		{
			title: 'Анализ',
			icon: './portfolio/analys.svg',
			content: 'Мы свяжемся с вами, чтобы уточнить ваши требования к проекту.',
		},
		{
			title: 'Предложение',
			icon: './portfolio/folder.svg',
			content:
				'Мы предоставим вам нашу бесплатную, не имеющую обязательной силы заявку.',
		},
		{
			title: 'Команда',
			icon: './portfolio/contact.svg',
			content: 'Мы выделяем команду под ваши требования.',
		},
		{
			title: 'Старт',
			icon: './portfolio/start.svg',
			content: 'Вы познакомитесь с командой, и мы начнем.',
		},
	]

	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div
			id='work'
			className='w-[95%] mx-auto py-[80px] flex flex-col items-start gap-[80px]'
		>
			<h1
				data-aos='fade-up'
				className='lg:text-[64px] text-[32px] text-primary'
			>
				Как мы работаем!
			</h1>
			<div className='flex relative max-[800px]:flex-col max-[800px]:items-start gap-[20px]'>
				<img
					className='absolute max-[800px]:w-[90%] w-full max-[800px]:right-[250px] max-[800px]:top-[300px] pt-[80px] -z-20 max-[800px]:rotate-90'
					src='./portfolio/dots.svg'
				/>
				{contactData.map(item => (
					<div
						data-aos='fade-up'
						key={item.title}
						className='flex flex-col max-[800px]:flex-row items-center justify-center min-[800px]:text-center pt-[30px]'
					>
						<img src={item.icon} />
						<div className='flex flex-col max-[800px]:items-start items-center'>
							<h4 className='text-[18px] text-[#000000CC] font-bold '>
								{item.title}
							</h4>
							<p className='text-[16px] font-normal text-[#000000CC] '>
								{item.content}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Work
