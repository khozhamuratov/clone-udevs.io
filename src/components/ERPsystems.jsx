import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function ERPSystems() {
	const technoData = [
		{
			title: 'CRM',
			icon: './crm.svg',
		},
		{
			title: 'eLearning',
			icon: './eLearning.svg',
		},
		{
			title: 'E-Commerce',
			icon: './eCommerce.svg',
		},
		{
			title: 'POS',
			icon: './pos.svg',
		},
		{
			title: 'Sms / Email',
			icon: './sms.svg',
		},
		{
			title: 'Warehouse',
			icon: './wareHouse.svg',
		},
	]

	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<main id='erpsystem' className='w-full bg-bgcolor py-[80px]'>
			<div className='w-[95%] mx-auto flex flex-col justify-center gap-[80px] items-start'>
				<h1 className='lg:text-[64px] text-[32px] text-primary font-semibold'>
					ERP cистемы
				</h1>
				<div className='flex lg:flex-row flex-col items-center w-full justify-between'>
					<section className='flex-1'>
						<div className='relative max-w-[500px] flex items-center justify-center'>
							<img
								src='./bg_pattern.png'
								alt='Background'
								className='h-[450px] w-full object-cover'
							/>
							<img
								data-aos='zoom-in'
								src='./desktop_erp.png'
								alt='Overlay'
								className='absolute object-contain'
							/>
						</div>
					</section>
					<section className='flex-1'>
						<div className='flex flex-col max-w-[500px] gap-[40px] items-start justify-center'>
							<p
								data-aos='fade-up'
								className='lg:text-[24px] text-[16px] text-text_color font-normal leading-10'
							>
								IT Системы любого уровня сложности в удобные для вас сроки.
							</p>
							<div
								data-aos='fade-up'
								className='grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 w-[400px] xl:w-[500px] gap-[15px]'
							>
								{technoData.map((item, index) => (
									<div
										key={index}
										className='bg-[#E0E8FF] flex items-start justify-center gap-[12px] flex-col p-[10px] rounded-lg lg:w-auto'
									>
										<img src={item.icon} />
										<p className='lg:text-[18px] text-[14px] font-semibold'>
											{item.title}
										</p>
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	)
}

export default ERPSystems
