import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function MobileDev() {
	const technoData = [
		{
			title: 'iOS',
			icon: './ios.svg',
		},
		{
			title: 'Android',
			icon: './android.svg',
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
		<main id='mobiledev' className='w-[95%] mx-auto py-[80px]'>
			<div className='flex-col items-start'>
				<h1 className='lg:text-[64px] text-[32px] mb-[80px] text-primary font-semibold'>
					Мобильная разработка
				</h1>
				<div className='flex lg:flex-row flex-col-reverse items-center w-full justify-between'>
					<section className='flex-1'>
						<div className='flex flex-col gap-[24px] items-start justify-center'>
							<p
								data-aos='fade-up'
								className='lg:text-[24px] text-[16px] text-[#464359] font-medium py-[10px] lg:py-0 lg:leading-10'
							>
								В сотрудничестве со стартапами мы научились создавать творческий
								и функциональный пользовательский интерфейс для мобильных
								приложений.
							</p>
						</div>
						<div
							data-aos='fade-up'
							className='grid grid-cols-3 w-[90%] gap-[15px]'
						>
							{technoData.map((item, index) => (
								<div
									key={index}
									className='bg-bgcolor flex items-start justify-center gap-[12px] flex-col p-[10px] rounded-lg'
								>
									<img src={item.icon} />
									<p className='lg:text-[18px] text-[16px] font-semibold'>
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
									<img src='./swift.svg' />
									<p className='lg:text-[20px] text-[18px] font-semibold'>
										Swift
									</p>
								</span>
								<span className='flex flex-col items-center justify-center'>
									<img src='./kotlin.svg' />
									<p className='lg:text-[20px] text-[18px] font-semibold'>
										Kotlin
									</p>
								</span>
								<span className='flex flex-col items-center justify-center'>
									<img src='./flutter.svg' />
									<p className='lg:text-[20px] text-[18px] font-semibold'>
										Flutter
									</p>
								</span>
							</div>
						</div>
					</section>
					<section className='flex-1'>
						<div className='relative max-w-[500px] flex items-center justify-center'>
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

export default MobileDev
