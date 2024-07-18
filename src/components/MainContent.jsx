import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'

function MainContent() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<main className='w-[95%] mx-auto h-[90vh] pt-[200px] lg:pt-0 pb-1 flex flex-col lg:flex-row items-center justify-center'>
			<section className='flex-1'>
				<div className='flex flex-col gap-[24px] items-center lg:items-start justify-center'>
					<img
						data-aos='fade-up'
						className='lg:w-[267px] w-[125px] h-[89px]'
						src='./logo.svg'
						alt='LOGO'
					/>
					<h1
						data-aos='fade-up'
						data-aos-duration='1500'
						className='lg:text-[40px] text-[24px] text-[#464359] font-semibold'
					>
						IT-Аутсорсинг Компания
					</h1>
					<span
						data-aos='fade-up'
						data-aos-duration='1500'
						className='lg:text-[40px] text-[24px] text-primary font-semibold'
					>
						<Typewriter
							options={{
								strings: [
									'Разработка мобильных приложений',
									'Разработка и внедрение ERP систем',
									'UI/UX дизайн',
									'IT консалтинг',
									'Оптимизация инфроструктуры',
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</span>
					<Link to='contact' smooth={true} duration={500}>
						<button className='text-[20px] lg:block hidden w-[248px] text-white px-[16px] py-[10px] bg-primary rounded-[8px] font-bold hover:scale-105 transition-all duration-100'>
							Связяться
						</button>
					</Link>
				</div>
			</section>
			<section className='flex-1 pt-[50px] lg:pt-0'>
				<img src='./main-content-img.svg' alt='Main IMG' />
			</section>
		</main>
	)
}

export default MainContent
