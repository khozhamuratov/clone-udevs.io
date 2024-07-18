import React from 'react'
import Marquee from 'react-fast-marquee'

function Clients() {
	const first_Logos = [
		'./clients/clients01.svg',
		'./clients/clients02.svg',
		'./clients/clients03.svg',
		'./clients/clients04.svg',
		'./clients/clients05.svg',
		'./clients/clients06.svg',
		'./clients/clients07.svg',
	]

	const second_Logos = [
		'./clients/clients08.svg',
		'./clients/clients09.svg',
		'./clients/clients10.svg',
		'./clients/clients11.svg',
		'./clients/clients12.svg',
		'./clients/clients13.svg',
		'./clients/clients14.svg',
	]

	return (
		<main id='clients' className='flex flex-col gap-[40px]'>
			<h1 className='lg:text-[64px] text-[32px] font-bold text-primary ml-[20px] pl-[30px]'>
				Наши клиенты
			</h1>
			<div>
				<Marquee speed={15}>
					<div className='flex gap-[10px] ml-[10px]'>
						{first_Logos.map((logo, index) => (
							<div key={index} className='p-[20px] transition-all'>
								<img
									src={logo}
									className='lg:w-[213px] w-[130px] hover:scale-110 shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-3xl duration-300'
									alt={`Client Logo ${index + 1}`}
								/>
							</div>
						))}
					</div>
				</Marquee>
				<div>
					<Marquee direction='right' speed={15}>
						<div className='flex gap-[10px] ml-[10px]'>
							{second_Logos.map((logo, index) => (
								<div key={index} className='p-[20px] transition-all'>
									<img
										src={logo}
										className='lg:w-[213px] w-[130px] hover:scale-110 shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-3xl duration-300'
										alt={`Client Logo ${index + 1}`}
									/>
								</div>
							))}
						</div>
					</Marquee>
				</div>
			</div>
		</main>
	)
}

export default Clients
