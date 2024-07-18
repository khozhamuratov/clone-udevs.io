import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react'
function Team() {
	const [count, setCount] = useState(70)

	useEffect(() => {
		AOS.init()
		let interval
		if (count < 97) {
			interval = setInterval(() => setCount(count + 1), 50)
		} else if (count >= 97 && count < 100) {
			interval = setInterval(() => setCount(count + 1), 100)
		}

		return () => clearInterval(interval)
	}, [count])

	return (
		<main id='team' className='w-full bg-bgcolor py-[80px] mt-[100px] lg:mt-0'>
			<div className='w-[95%] mx-auto h-[90vh] flex-col items-start justify-center'>
				<h1
					data-aos='fade-up'
					className='lg:text-[64px] text-[32px] whitespace-pre-wrap mb-[80px] text-primary font-semibold'
				>
					Выделенная команда
				</h1>
				<section className='flex lg:flex-row flex-col-reverse items-center justify-center'>
					<section className='flex-1'>
						<div className='flex flex-col gap-[24px] items-start justify-center'>
							<p
								data-aos='fade-up'
								className='lg:text-[20px] text-[16px] text-[#464359] font-medium lg:leading-10'
							>
								Для каждого проекта мы формируем команду, в которую входят
								проект менеджер, бизнес-аналитик, UI/UX дизайнер, DevOps,
								QA-инженер, бэкенд и фронтенд разработчики
							</p>
							<div
								data-aos='fade-up'
								className='lg:text-[120px] text-[80px] font-bold text-primary flex flex-col'
							>
								{count}
								{count === 100 ? '+' : ''}
								<span className='lg:text-[40px] text-[24px] leading-[72px] text-[#464359]'>
									Сотрудников
								</span>
							</div>
						</div>
					</section>
					<section className='flex-1'>
						<img
							data-aos='zoom-in'
							src='./Team-Logo.svg'
							className='w-[300px] lg:w-[500px] lg:m-0 m-[32px]'
							alt='Team IMG'
						/>
					</section>
				</section>
			</div>
		</main>
	)
}

export default Team
