"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navLink = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Education", href: "#education" },
		{ name: "Skills", href: "#skills" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<header className='fixed top-0 left-0 w-full z-50 shadow-md shadow-cyan-900/20'>
			<div className='bg-gray-900/50 backdrop-blur-sm'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-20'>
						<div className='flex-shrink-0'>
							<a href='#home' className='text-3xl font-bold text-white font-serif'>
								Yoga A.
							</a>
						</div>
						<div className='hidden md:block'>
							<div className='ml-10 flex items-baseline space-x-4'>
								{navLink.map((link) => (
									<a
										key={link.name}
										href={link.href}
										className='text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300'>
										{link.name}
									</a>
								))}
							</div>
						</div>
						<div className='-mr-2 flex md:hidden'>
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none'
								title='Toggle Menu'
								aria-controls='mobile-menu'
								aria-expanded={isOpen}>
								<span className='sr-only'>Open main menu</span>
								{isOpen ? (
									<X className='block h-6 w-6' />
								) : (
									<Menu className='block h-6 w-6' />
								)}
							</button>
						</div>
					</div>
				</div>
				{isOpen && (
					<div className='md:hidden' id='mobile-menu'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							{navLink.map((link) => (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className='text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300'>
									{link.name}
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
