import { TextField } from '@mui/material'
import React, { useState } from 'react'
import {
	FaCheckCircle,
	FaFacebookSquare,
	FaInstagram,
	FaTelegramPlane,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'

function Contact() {
	const [values, setValues] = useState({
		name: '',
		email: '',
		project: '',
	})
	const [errors, setErrors] = useState({
		name: false,
		email: false,
		project: false,
	})
	const [helperTexts, setHelperTexts] = useState({
		name: '',
		email: '',
		project: '',
	})
	const [open, setOpen] = useState(false)

	const handleChange = field => event => {
		const { value } = event.target
		setValues(prevValues => ({
			...prevValues,
			[field]: value,
		}))
		if (value.trim() === '') {
			setErrors(prevErrors => ({
				...prevErrors,
				[field]: true,
			}))
			setHelperTexts(prevHelperTexts => ({
				...prevHelperTexts,
				[field]: 'Заполните поле',
			}))
		} else {
			setErrors(prevErrors => ({
				...prevErrors,
				[field]: false,
			}))
			setHelperTexts(prevHelperTexts => ({
				...prevHelperTexts,
				[field]: '',
			}))
		}
	}

	const handleSubmit = event => {
		event.preventDefault()
		const newErrors = {
			name: values.name.trim() === '',
			email: values.email.trim() === '',
			project: values.project.trim() === '',
		}
		setErrors(newErrors)
		const newHelperTexts = {
			name: newErrors.name ? 'Заполните поле' : '',
			email: newErrors.email ? 'Заполните поле' : '',
			project: newErrors.project ? 'Заполните поле' : '',
		}
		setHelperTexts(newHelperTexts)
		if (!newErrors.name && !newErrors.email && !newErrors.project) {
			setOpen(true)
		}
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleClickOutside = event => {
		if (event.target.id === 'dialogOverlay') {
			handleClose()
		}
	}

	return (
		<div
			id='contact'
			className='py-[80px] mb-[80px] w-[90%] mx-auto flex flex-col items-start justify-center gap-[80px]'
		>
			<h1 className='lg:text-[64px] text-[32px] text-primary font-bold leading-5'>
				Свяжитесь с нами
			</h1>
			<div className='pt-[40px] px-[98px] pb-[88px] rounded-[10px] lg:shadow-[2px_10px_28px_rgba(75,0,129,0.12)] w-full'>
				<h1 className='text-[20px] text-[#0F001A] font-bold leading-5'>
					Оставьте нам сообщение
				</h1>
				<div className='flex lg:flex-row flex-col items-center justify-between w-full gap-[80px]'>
					<section className='w-full'>
						<form
							onSubmit={handleSubmit}
							className='flex flex-col items-start justify-center gap-[20px]'
						>
							<TextField
								label='Имя'
								variant='outlined'
								value={values.name}
								onChange={handleChange('name')}
								error={errors.name}
								helperText={helperTexts.name}
								required
								fullWidth
								margin='normal'
							/>
							<TextField
								label='Ваша почта'
								variant='outlined'
								value={values.email}
								onChange={handleChange('email')}
								error={errors.email}
								helperText={helperTexts.email}
								required
								fullWidth
								margin='normal'
							/>
							<TextField
								label='Кратко опишите свой проект'
								variant='outlined'
								value={values.project}
								onChange={handleChange('project')}
								error={errors.project}
								helperText={helperTexts.project}
								required
								fullWidth
								multiline
								rows={4}
								margin='normal'
							/>
							<button className='text-[20px] w-[250px] mt-[20px] text-white px-[16px] py-[13px] bg-primary rounded-[8px] font-bold hover:scale-105 transition-all duration-100'>
								Связяться
							</button>
						</form>
					</section>
					<section className='max-w-[500px]'>
						<ul className='flex flex-col items-start justify-center max-w-[420px] gap-[25px]'>
							<li>
								<a
									className='flex items-center justify-center gap-[8px]'
									href='https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor'
								>
									<img src='./tools/location-logo.svg' />
									<p className='text-[16px] text-[#0F001A]'>
										Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
									</p>
								</a>
							</li>
							<li>
								<a
									className='flex items-center justify-center gap-[8px]'
									href='tel:+998336600999'
								>
									<img src='./tools/phone-logo.svg' />
									<p className='text-[16px] text-[#0F001A]'>
										+998 33 66 00 999
									</p>
								</a>
							</li>
							<li>
								<a
									className='flex items-center justify-center gap-[8px]'
									href='mailto:azizbek.b@udevs.io'
								>
									<img src='./tools/sms-logo.svg' />
									<p className='text-[16px] text-[#0F001A]'>
										azizbek.b@udevs.io
									</p>
								</a>
							</li>
							<li>
								<a
									className='flex items-center justify-center gap-[8px]'
									href='https://t.me/azizbekbakhodirov'
								>
									<FaTelegramPlane size={24} className='text-primary' />
									<p className='text-[16px] text-primary font-bold'>
										t.me/azizbekbakhodirov
									</p>
								</a>
							</li>
						</ul>
						<div className='flex gap-[16px] mt-[25px]'>
							<a
								className='text-primary hover:text-red-600 transition-all duration-500'
								href='https://udevs.io'
							>
								<FaYoutube size={24} />
							</a>
							<a
								className='text-primary hover:text-red-500 transition-all duration-500'
								href='https://udevs.io'
							>
								<FaInstagram size={24} />
							</a>
							<a
								className='text-primary hover:text-blue-900 transition-all duration-500'
								href='https://udevs.io'
							>
								<FaFacebookSquare size={24} />
							</a>
							<a
								className='text-primary hover:text-blue-400 transition-all duration-500'
								href='https://udevs.io'
							>
								<FaTwitter size={24} />
							</a>
						</div>
						<div className='lg:block hidden mt-[20px] max-w-[400px] h-[200px]'>
							<iframe
								className='w-full h-full'
								src='https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor'
								width='560'
								height='400'
							></iframe>
						</div>
					</section>
				</div>
			</div>
			{open && (
				<div
					id='dialogOverlay'
					className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
					onClick={handleClickOutside}
				>
					<div
						className='bg-white w-[60%] h-[70%] p-6 rounded-lg shadow-lg relative flex items-center justify-center'
						onClick={e => e.stopPropagation()}
					>
						<button
							className='absolute top-0 text-[50px] right-0 mr-6 text-black hover:text-gray-800'
							onClick={handleClose}
						>
							×
						</button>
						<div className='flex flex-col items-center'>
							<FaCheckCircle className='text-primary' size={150} />
							<h2 className='text-2xl text-[#000000CC] font-semibold mt-4'>
								Ваша заявка принята
							</h2>
							<p className='text-[20px] text-[#464359] mt-2'>
								Скоро мы свяжемся с вами
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Contact
