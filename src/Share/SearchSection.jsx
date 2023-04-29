import React, { useState } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

const SearchSection = () => {
	const [showAllCategory, setShowAllCategory] = useState(false);
	const [isGreen, setIsGreen] = useState(false)
	
    return (
		<div className='page_container grid md:grid-cols-[1fr_2fr] my-3'>
			{/* search category  */}
			<div className='border px-8  hidden md:block cursor-pointer relative'>
				{/* default category  */}
				<div
					onClick={() => setShowAllCategory(!showAllCategory)}
					className={`flex items-center justify-between  h-full`}
				>
					All Category <FaChevronDown />
				</div>
				<ul
					className={` absolute w-full left-0 bg-gray-50 duration-500 overflow-hidden ${
						!showAllCategory ? "max-h-0" : " max-h-[450px]"
					} shadow-[1px_1px_2px_rgba(0,0,0,.2)]`}
				>
					<li className='btn-hover-effect pl-8 py-3 border-b'>
						Fruits
					</li>
					<li className='btn-hover-effect pl-8 py-3 border-b'>
						Vegetable
					</li>
					<li className='btn-hover-effect pl-8 py-3 border-b'>
						Flour
					</li>
					<li className='btn-hover-effect pl-8 py-3 border-b'>
						Cookies
					</li>
					<li className='btn-hover-effect pl-8 py-3 '>Meat</li>
				</ul>
			</div>

			{/* search section  */}
			<div className=' relative'>
				<input
					type='text'
					name=''
					id=''
					className={`w-full duration-500 outline-none border ${
						isGreen ? "border-[#89c74a]" : ""
					} px-8 py-3 h-full`}
					placeholder='search'
					onFocus={() => setIsGreen(!isGreen)}
					onBlur={() => setIsGreen(!isGreen)}
				/>

				<div
					className='bg-[#89C74A] h-full
                absolute top-0 right-0 w-[80px] flex items-center justify-center cursor-pointer text-white btn-hover-effect'
				>
					<FaSearch />
				</div>
			</div>
		</div>
	);
};

export default SearchSection;