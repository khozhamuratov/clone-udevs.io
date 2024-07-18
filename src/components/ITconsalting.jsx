import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function ITconsalting() {
	const technoData = [
		{
			title: 'Frontend',
			icon: './frontend.svg',
		},
		{
			title: 'Backend',
			icon: './backend.svg',
		},
		{
			title: 'Architecture',
			icon: './architecture.svg',
		},
		{
			title: 'DevOps',
			icon: './devops.svg',
		},
		{
			title: 'UX / UI',
			icon: './uxui.svg',
		},
		{
			title: 'QA',
			icon: './qa.svg',
		},
	]

	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<main id='itconsulting' className='w-[95%] mx-auto py-[80px]'>
			<div className='flex-col items-start'>
				<h1 className='lg:text-[64px] text-[32px] mb-[80px] text-primary font-semibold'>
					IT консалтинг
				</h1>
				<div className='flex lg:flex-row flex-col-reverse items-center w-full justify-between'>
					<section className='flex-1'>
						<div className='flex flex-col gap-[40px] items-start justify-center max-w-[550px]'>
							<p className='lg:text-[24px]  py-[10px] lg:py-0 text-[16px] text-[#464359] font-medium lg:leading-10'>
								Мы можем повысить квалификацию ваших сотрудников тем самым
								увеличить эффективность вашей компании.
							</p>
							<div className='grid grid-cols-3 w-[90%] gap-[15px]'>
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
						</div>
					</section>
					<section className='flex-1'>
						<img src='./consulting.svg' alt='Background' className='' />
					</section>
				</div>
			</div>
		</main>
	)
}

export default ITconsalting
