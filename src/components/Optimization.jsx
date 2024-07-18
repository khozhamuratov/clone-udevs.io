import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function Optimization() {
	useEffect(() => {
		AOS.init()
	}, [])
	const technoData = [
		{
			title: 'Architecture',
			icon: './architecture.svg',
		},
		{
			title: 'Auto Testing',
			icon: './autotesting.svg',
		},
		{
			title: 'Stress Testing',
			icon: './stresstesting.svg',
		},
		{
			title: 'Load Testing',
			icon: './loadtesting.svg',
		},
		{
			title: 'Devops',
			icon: './devops.svg',
		},
		{
			title: 'Cloud',
			icon: './cloud.svg',
		},
		{
			title: 'CI / CD',
			icon: './cicd.svg',
		},
	]

	return (
		<main id='optimization' className='w-full bg-bgcolor py-[80px]'>
			<div className='w-[95%] mx-auto flex flex-col justify-center gap-[80px] items-start'>
				<h1 className='lg:text-[64px] text-[32px] text-primary font-semibold'>
					Оптимизация <br /> инфраструктуры
				</h1>
				<div className='flex lg:flex-row flex-col items-center w-full justify-between'>
					<section className='flex-1'>
						<div className='relative max-w-[500px] flex items-center justify-center'>
							<img
								data-aos='zoom-in'
								src='./bg_pattern.png'
								alt='Background'
								className='w-full object-cover'
							/>
							<img
								data-aos='zoom-in'
								data-aos-duration='1000'
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
								className='lg:text-[24px] text-[16px] text-text_color font-medium lg:leading-10'
							>
								Наши опытные специалисты помогут оптимизировать вашу
								инфраструктуру.
							</p>
							<div
								data-aos='fade-up'
								className='grid grid-cols-3 xl:grid-cols-3 max-w-[400px] xl:w-[500px] lg:gap-[15px] gap-[10px]'
							>
								{technoData.map((item, index) => (
									<div
										key={index}
										className='bg-[#E0E8FF] flex items-start justify-center gap-[12px] flex-col p-[10px] rounded-lg'
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

export default Optimization
