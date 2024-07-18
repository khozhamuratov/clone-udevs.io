import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function Smsuz() {
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
			id='smsuz'
			className='w-[95%] mx-auto lg:flex-row flex-col py-[80px] flex items-center justify-between'
		>
			<section className='flex flex-col gap-[34px]'>
				<div
					data-aos='fade-up'
					className='flex flex-col items-start gap-[30px]'
				>
					<img src='./portfolio/smsuz.uz-logo.svg' />
					<span className='px-[16px] py-[4px] flex gap-[8px] items-center justify-center rounded-[100px] bg-[#4473E533]'>
						<img src='./portfolio/notification.svg' />
						<p className='text-[14px] font-medium text-[#4473E5]'>
							Notification
						</p>
					</span>
				</div>
				<div
					data-aos='fade-up'
					className='flex flex-col items-start justify-center gap-[25px]'
				>
					<h1 className='lg:text-[20px] text-[16px] text-[#464359] font-semibold'>
						Smsuz.uz - It is a platform for bulk SMS messaging.
					</h1>
					<h3 className='text-[24px] font-semibold text-[#000000CC]'>
						Мы разрабатывали:
					</h3>
					<div className='grid grid-cols-3 max-w-[500px] gap-[30px] mb-[20px] lg:mb-0'>
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
			<section className=''>
				<img data-aos='zoom-in' src='./portfolio/smsuz_app.png' />
			</section>
		</div>
	)
}

export default Smsuz
