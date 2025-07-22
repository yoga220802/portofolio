"use client";

import Image from "next/image";
import { Github, Instagram, X } from "lucide-react";
import { motion, Variants } from "framer-motion";

const HeroSection = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.3 },
		},
	};

	const itemVariants: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 100 },
		},
	};

	return (
		<section
			id='home'
			className='relative min-h-screen flex flex-col justify-center items-center lg:flex-row lg:justify-start bg-[#08204F] overflow-hidden'>
			<div className='absolute inset-0 block lg:hidden z-0'>
				<Image
					src='/yoga-photo.png'
					alt='Latar Belakang Foto Yoga'
					fill
					className='object-cover object-center opacity-[0.03]'
				/>
			</div>

			<div className='hidden lg:block relative w-full lg:w-5/12 h-screen'>
				<motion.div
					className='absolute inset-0 group'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}>
					<Image
						src='/yoga-photo.png'
						alt=''
						aria-hidden='true'
						fill
						className='object-cover object-center mix-blend-color-burn opacity-15 transform scale-110'
					/>
					<Image
						src='/yoga-photo.png'
						alt='Foto Yoga Agustiansyah dengan filter'
						fill
						className='object-cover object-center mix-blend-overlay transition-opacity duration-700 ease-in-out group-hover:opacity-0'
					/>
					<Image
						src='/yoga-photo.png'
						alt='Foto Yoga Agustiansyah'
						fill
						className='object-cover object-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100'
						priority
					/>
				</motion.div>
			</div>

			<div className='relative z-10 w-full lg:w-7/12 flex items-center justify-center p-8 text-center lg:text-left'>
				<motion.div
					className='w-full max-w-md lg:max-w-2xl'
					variants={containerVariants}
					initial='hidden'
					animate='visible'>
					<motion.h1
						className='text-white font-bold text-4xl sm:text-5xl lg:text-5xl leading-tight lg:whitespace-nowrap'
						variants={itemVariants}>
						Hi, I'm Yoga Agustiansyah
					</motion.h1>

					<motion.h2
						className='italic font-bold text-[#B3EEFF] text-2xl sm:text-3xl lg:text-3xl mt-4 lg:whitespace-nowrap'
						variants={itemVariants}>
						Software Engineer and AI Enthusiast
					</motion.h2>

					<motion.p
						className='italic text-gray-300 text-lg sm:text-xl lg:text-2xl mt-12'
						variants={itemVariants}>
						-Breathing life into lines of code.-
					</motion.p>

					<motion.div
						className='mt-10 flex justify-center lg:justify-start'
						variants={itemVariants}>
						<a
							href='#contact'
							className='px-8 py-3 text-[#0B80A1] font-bold text-lg lg:text-xl bg-transparent border-2 border-[#0B80A1] rounded-lg hover:bg-[#0B80A1]/10 transition-colors duration-300'>
							Let's Talk
						</a>
					</motion.div>

					{/* Ikon Sosial untuk Mobile */}
					<motion.div
						className='mt-12 flex justify-center gap-6 lg:hidden'
						variants={itemVariants}>
						<a
							title='Follow me on X'
							href='https://x.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='w-10 h-10 rounded-full border-2 border-[#0B80A1] flex items-center justify-center text-[#0B80A1] hover:bg-[#0B80A1]/10 transition-all duration-300'>
							<X size={20} />
						</a>
						<a
							title='Follow me on Instagram'
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							className='w-10 h-10 rounded-full border-2 border-[#0B80A1] flex items-center justify-center text-[#0B80A1] hover:bg-[#0B80A1]/10 transition-all duration-300'>
							<Instagram size={20} />
						</a>
						<a
							title='Follow me on GitHub'
							href='https://github.com'
							target='_blank'
							rel='noopener noreferrer'
							className='w-10 h-10 rounded-full border-2 border-[#0B80A1] flex items-center justify-center text-[#0B80A1] hover:bg-[#0B80A1]/10 transition-all duration-300'>
							<Github size={20} />
						</a>
					</motion.div>
				</motion.div>
			</div>

			{/* Ikon Sosial di pojok kanan bawah (Hanya Desktop) */}
			<div className='absolute bottom-8 right-8 hidden lg:flex items-center gap-5'>
				<motion.a
					whileHover={{ scale: 1.1, y: -2 }}
					href='https://x.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='w-12 h-12 rounded-full border-2 border-[#0B80A1] flex items-center justify-center text-[#0B80A1] hover:bg-[#0B80A1]/10 transition-all duration-300'>
					<X size={24} />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1, y: -2 }}
					href='https://instagram.com'
					target='_blank'
					rel='noopener noreferrer'
					className='w-12 h-12 rounded-full border-2 border-[#0B80A1] flex items-center justify-center text-[#0B80A1] hover:bg-[#0B80A1]/10 transition-all duration-300'>
					<Instagram size={24} />
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1, y: -2 }}
					href='https://github.com'
					target='_blank'
					rel='noopener noreferrer'
					className='w-12 h-12 rounded-full border-2 border-[#0B80A1] flex items-center justify-center text-[#0B80A1] hover:bg-[#0B80A1]/10 transition-all duration-300'>
					<Github size={24} />
				</motion.a>
			</div>
		</section>
	);
};

export default HeroSection;
