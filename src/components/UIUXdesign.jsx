import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function UIUXdesign() {
	const technoData = [
		{
			title: 'UX',
			icon: './ux.svg',
		},
		{
			title: 'UI',
			icon: './ui.svg',
		},
		{
			title: 'Prototyping',
			icon: './prototyping.svg',
		},
		{
			title: 'Mobile Design',
			icon: './mobileDesign.svg',
		},
		{
			title: 'Web Design',
			icon: './webDesign.svg',
		},
		{
			title: 'Atomic Design',
			icon: './atomicDesign.svg',
		},
	]

	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<main id='uiuxdesign' className='w-full py-[80px]'>
			<div className='flex flex-col items-start w-[95%] mx-auto justify-center gap-[80px]'>
				<h1 className='lg:text-[64px] text-[32px] text-primary font-semibold'>
					UI / UX Дизайн
				</h1>
				<div className='flex lg:flex-row flex-col-reverse items-center justify-between w-full'>
					<section className='flex-1'>
						<div className='max-w-[500px] mb-[40px]'>
							<p
								data-aos='fade-up'
								className='lg:text-[24px] text-[16px] my-[16px] lg:my-0 text-[#464359] font-medium lg:leading-10'
							>
								Наша компания придерживается подхода <br /> к дизайну,
								ориентированного на <br /> человека..
							</p>
						</div>
						<div
							data-aos='fade-up'
							className='grid grid-cols-3 max-w-[500px] gap-[15px]'
						>
							{technoData.map((item, index) => (
								<div
									key={index}
									className='bg-bgcolor flex items-start justify-center gap-[12px] flex-col p-[10px] rounded-lg'
								>
									<img src={item.icon} />
									<p className='lg:text-[18px] text-[14px] font-semibold'>
										{item.title}
									</p>
								</div>
							))}
						</div>
						<div className='flex flex-col items-start justify-center gap-[32px] mt-[40px]'>
							<h1
								data-aos='fade-up'
								className='text-[32px] text-[#464359] font-semibold'
							>
								Технологий
							</h1>
							<div data-aos='fade-up' className='flex items-center gap-[48px]'>
								<span className='flex flex-col items-center justify-center'>
									<img src='./figma.svg' />
									<p className='text-[18px] lg:text-[20px] font-semibold'>
										Figma
									</p>
								</span>
								<span className='flex flex-col items-center justify-center'>
									<img src='./sketch.svg' />
									<p className='text-[18px] lg:text-[20px] font-semibold'>
										Sketch
									</p>
								</span>
								<span className='flex flex-col items-center justify-center'>
									<img
										src='./lottie.svg'
										className='w-[30px] h-[42px] mb-[8px]'
									/>
									<p className='text-[18px] lg:text-[20px] font-semibold'>
										Lottie
									</p>
								</span>
								<span className='flex flex-col items-center justify-center'>
									<img src='./illustrator.svg' />
									<p className='text-[18px] lg:text-[20px] font-semibold'>
										Illustrator
									</p>
								</span>
							</div>
						</div>
					</section>
					<section className='flex-1'>
						<div className='relative xl:w-[500px] flex items-center justify-center'>
							<img
								src='./bg_pattern.png'
								alt='Background'
								className='w-full h-[500px] object-cover'
							/>
							<img
								data-aos='zoom-in'
								src='./mobile_dev.png'
								alt='Overlay'
								className='absolute'
							/>
						</div>
					</section>
				</div>
			</div>
		</main>
	)
}

export default UIUXdesign
