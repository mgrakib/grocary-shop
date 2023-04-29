import React from 'react';
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TopCommunication = () => {
    return (
		<div className='bg-[#89C74A] page_container py-2 text-[12px] flex items-center gap-3 text-white'>
			{/* mail */}
			<div className='flex items-center gap-1 border-r pr-3 cursor-pointer text-blck-hover'>
				<FaEnvelope />
				info@example.com
			</div>
			{/* number  */}
			<div className='flex items-center gap-1 flex-1  cursor-pointer text-blck-hover'>
				<FaPhone />
				0000-12345-6789
			</div>

            <div>
                <ul className='flex items-center gap-4'>
                    <li className='text-blck-hover'><Link>
                        <FaFacebookSquare/>
                    </Link></li>
                    <li className='text-blck-hover'><Link>
                        <FaTwitter/>
                    </Link></li>
                    <li className='text-blck-hover'><Link>
                        <FaPinterest/>
                    </Link></li>
                    <li className='text-blck-hover'><Link>
                        <FaInstagram/>
                    </Link></li>
                </ul>
            </div>
		</div>
	);
};

export default TopCommunication;