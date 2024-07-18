import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function Delever() {
	const technoData = [
		{
			title: 'WebSite',
			icon: './website.svg',
		},
		{
			title: 'Admin Panel',
			icon: './admin.svg',
		},
		{
			title: 'Crossplatform',
			icon: './phones.svg',
		},
		{
			title: 'Web Design',
			icon: './webDesign.svg',
		},
		{
			title: 'Mobile Design',
			icon: './mobileDesign.svg',
		},
	]

	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div
			id='delever'
			className='w-[95%] mx-auto py-[80px] flex items-center justify-center gap-[80px] lg:flex-row flex-col-reverse'
		>
			<section className='flex-1'>
				<img data-aos='zoom-in' src='./portfolio/delever_app.png' />
			</section>
			<section className='flex-1 flex flex-col gap-[34px]'>
				<div className='flex flex-col items-start gap-[30px]'>
					<img src='./portfolio/delever-logo.svg' />
					<span
						data-aos='fade-up'
						className='px-[16px] py-[4px] flex gap-[8px] items-center justify-center rounded-[100px] bg-[rgba(255,87,34,0.2)]'
					>
						<img src='./portfolio/delivery-logo.svg' />
						<p className='text-[14px] font-medium text-[#ff5722]'>Delivery</p>
					</span>
				</div>
				<div className='flex flex-col items-start justify-center gap-[25px]'>
					<h1
						data-aos='fade-up'
						className='lg:text-[20px] text-[16px] text-[#464359] font-semibold'
					>
						Delever — Автоматизация службы доставки ориентированая как на
						потребителей так и на рестораны.
					</h1>
					<h3
						data-aos='fade-up'
						className='text-[24px] font-semibold text-[#000000CC]'
					>
						Мы разрабатывали:
					</h3>
					<div data-aos='fade-up' className='grid grid-cols-3 gap-[30px]'>
						{technoData.map((item, index) => (
							<div
								key={index}
								className='bg-bgcolor flex items-start justify-center gap-[12px] flex-col p-[16px] rounded-lg'
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
	)
}

export default Delever
