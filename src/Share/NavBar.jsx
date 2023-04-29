import React, { useState } from 'react';
import Logo from '../assets/logo.webp'
import { Link } from 'react-router-dom';
import { FaAlignJustify, FaDiceOne, FaHeart, FaShoppingCart, FaSortDown, FaUserTie } from 'react-icons/fa';

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
		<div className='page_container py-5 flex  items-center relative'>
			<Link>
				<img
					src={Logo}
					alt=''
				/>
			</Link>

			<nav className='mx-auto hidden md:block'>
				<ul className='flex gap-8 items-center'>
					<li>
						<Link>Home</Link>
					</li>
					<li>
						<Link>Shop</Link>
					</li>
					<li>
						<Link>Best Sellers</Link>
					</li>
					<li>
						<Link>Deal of The Day</Link>
					</li>
					<li>
						<Link>Pages</Link>
					</li>
					<li>
						<Link>Contact Us</Link>
					</li>
				</ul>
			</nav>

			<nav
				className={`mx-auto md:hidden absolute top-14 ${
					showNav ? "left-0" : "-left-40"
				} duration-500`}
			>
				<ul className='flex flex-col gap-4  bg-red-400 p-5 text-left'>
					<li>
						<Link>Home</Link>
					</li>
					<li>
						<Link>Shop</Link>
					</li>
					<li>
						<Link>Best Sellers</Link>
					</li>
					<li>
						<Link>Deal of The Day</Link>
					</li>
					<li>
						<Link>Pages</Link>
					</li>
					<li>
						<Link>Contact Us</Link>
					</li>
				</ul>
			</nav>

			<div className='flex gap-4 ms-auto md:ms-0'>
				<div
					onClick={() => setShowNav(!showNav)}
					className='cursor-pointer mr-5 md:hidden'
				>
					<FaAlignJustify />
				</div>
				<Link>
					<FaUserTie />
				</Link>
				<Link>
					<FaShoppingCart />
				</Link>
				<Link>
					<FaHeart />
				</Link>
				<div className='flex items-center gap-2 cursor-pointer'>
					US
					<FaDiceOne />
					<FaSortDown />
				</div>
			</div>
		</div>
	);
};

export default NavBar;