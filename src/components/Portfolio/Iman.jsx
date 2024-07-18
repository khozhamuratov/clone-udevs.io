import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function ImanApp() {
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
	]
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div
			id='iman'
			className='w-[95%] mx-auto lg:flex-row flex-col py-[80px] flex items-center justify-between gap-[40px] lg:gap-0'
		>
			<section className='flex-1 flex flex-col gap-[34px]'>
				<div
					data-aos='fade-up'
					className='flex flex-col items-start gap-[30px]'
				>
					<img src='./portfolio/iman-logo.svg' />
					<span className='px-[16px] py-[4px] flex gap-[8px] items-center justify-center rounded-[100px] bg-[#01CAB033]'>
						<img src='./portfolio/financesvg.svg' />
						<p className='text-[14px] font-medium text-[#01CAB0]'>Finance</p>
					</span>
				</div>
				<div
					data-aos='fade-up'
					className='flex flex-col items-start justify-center gap-[25px]'
				>
					<h1 className='lg:text-[20px] text-[16px] text-[#464359] font-semibold'>
						Iman - It is a mutual financing platform based on the principles of
						Islamic Finance. Buyers, sellers and investors meet here.
					</h1>
					<h3 className='text-[24px] font-semibold text-[#000000CC]'>
						Мы разрабатывали:
					</h3>
					<div className='grid grid-cols-3 max-w-[500px] gap-[30px]'>
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
			<section data-aos='zoom-in' className='flex-1'>
				<img src='./portfolio/imanApp.png' />
			</section>
		</div>
	)
}

export default ImanApp
