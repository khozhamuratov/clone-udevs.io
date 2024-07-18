import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react'
import { tools } from '../constantas/consts'

function Tools() {
	const categories = [
		{ name: 'Frontend', value: 'Frontend', bgColor: '#c6d6ff' },
		{ name: 'Backend', value: 'Backend', bgColor: '#bddaed' },
		{ name: 'Devops', value: 'Devops', bgColor: '#a8bfff' },
		{ name: 'Testing', value: 'Testing', bgColor: '#e1e9fe' },
		{ name: 'UX/UI', value: 'UX/UI', bgColor: '#ced6ee' },
		{ name: 'Infrastructure', value: 'Infrastructure', bgColor: '#d1dde8' },
		{ name: 'Mobile', value: 'Mobile', bgColor: '#dbe5ff' },
	]

	useEffect(() => {
		AOS.init()
	}, [])

	const [selectedCategory, setSelectedCategory] = useState('')

	const handleRadioChange = value => {
		setSelectedCategory(prevValue => {
			if (prevValue === value) {
				return ''
			} else {
				return value
			}
		})
	}

	const getBgColor = role => {
		const category = categories.find(category => category.value === role)
		return category ? category.bgColor : '#E0E8FF'
	}

	return (
		<main id='tools' className='w-full bg-bgcolor py-20'>
			<div className='w-11/12 mx-auto flex flex-col justify-center gap-20 items-start'>
				<h1 data-aos='fade-up' className='text-4xl text-primary font-semibold'>
					Инструменты
				</h1>
				<div
					data-aos='fade-up'
					className='grid lg:grid-cols-7 grid-cols-2 gap-4'
				>
					{categories.map(category => (
						<label
							key={category.value}
							className='flex items-center cursor-pointer space-x-2'
						>
							<input
								type='radio'
								name='category'
								checked={selectedCategory === category.value}
								onClick={() => handleRadioChange(category.value)}
								onChange={() => {}}
								className='form-radio h-5 w-5 text-blue-600'
							/>
							<span>{category.name}</span>
						</label>
					))}
				</div>
				<section className='flex-1'>
					<div className='flex flex-col w-full gap-10 items-center justify-center'>
						<div className='grid lg:grid-cols-12 grid-cols-5 gap-2'>
							{tools.map((item, index) => (
								<div
									key={index}
									className={`h-[90px] w-full flex items-center justify-center gap-3 flex-col p-3 rounded-md`}
									style={{
										backgroundColor: getBgColor(item.role),
										opacity:
											selectedCategory && selectedCategory !== item.role
												? 0.4
												: 1,
									}}
								>
									<img className='w-6 h-6' src={item.icon} alt={item.title} />
									<p className='text-[11px] font-semibold'>{item.title}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Tools
