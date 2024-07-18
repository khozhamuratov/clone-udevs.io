import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function Goodzone() {
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
			id='goodzone'
			className='w-[95%] mx-auto lg:flex-row flex-col-reverse py-[80px] flex items-center gap-[80px]'
		>
			<section data-aos='zoom-in' className='flex-1'>
				<img src='./portfolio/goodzone_app.png' />
			</section>
			<section data-aos='fade-up' className='flex-1 flex flex-col gap-[34px]'>
				<div className='flex flex-col items-start gap-[30px]'>
					<img src='./portfolio/gz-logo.png' />
					<span className='px-[16px] py-[4px] flex gap-[8px] items-center justify-center rounded-[100px] bg-[#F5000033]'>
						<img src='./portfolio/commerce.svg' />
						<p className='text-[14px] font-medium text-[#F50000]'>E-Commerce</p>
					</span>
				</div>
				<div className='flex flex-col items-start justify-center gap-[25px]'>
					<h1 className='lg:text-[20px] text-[16px] text-[#464359] font-semibold'>
						Goodzone - Internet shop of household appliances in Uzbekistan.
					</h1>
					<h3 className='text-[24px] font-semibold text-[#000000CC]'>
						Мы разрабатывали:
					</h3>
					<div className='grid grid-cols-3 gap-[30px]'>
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

export default Goodzone
