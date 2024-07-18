import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Dropdown = ({ title, dropdownData }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleMouseEnter = () => {
		setIsOpen(true)
	}

	const handleMouseLeave = () => {
		setIsOpen(false)
	}

	return (
		<div
			className='relative inline-block text-left'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<a
				className='text-[14px] text-text_color font-semibold flex items-center justify-center gap-[2px]'
				href='#'
			>
				{title}
				<FaAngleDown size={12} />
			</a>

			{isOpen && (
				<div
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className='origin-top-right absolute right-0 mt-[1px] w-[300px] py-[18px] rounded-[8px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10'
				>
					<p className='text-[12px] tracking-[1px] text-gray-400 font-semibold px-[24px]'>
						{title}
					</p>
					<ul className='py-1 flex flex-col gap-[8px]'>
						{dropdownData.map((item, index) => (
							<li key={index}>
								<Link
									spy={true}
									smooth={true}
									offset={50}
									duration={500}
									to={item.to}
									className='flex items-center gap-[18px] pr-[11px] pl-[20px] py-[8px] text-sm text-gray-700 hover:text-white cursor-pointer hover:bg-primary'
								>
									<span className='p-[10px] rounded-full flex items-center justify-center bg-bgcolor'>
										<img className='w-[24px] h-[24px]' src={item.icon} />
									</span>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Dropdown
