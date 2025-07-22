"use client";

// Mengimpor ikon dari lucide-react
import { Github, Instagram, Twitter } from "lucide-react";

const HeroSection = () => {
	return (
		// Menambahkan 'relative' agar bisa memposisikan ikon sosial
		<section
			id='home'
			className='relative min-h-screen flex flex-col md:flex-row bg-navy'>
			{/* Kolom Kiri: Kontainer Gambar */}
			<div className='relative w-full md:w-5/12 h-[60vh] md:h-auto md:pt-20 group'>
				<div className='relative w-full h-full'>
					{/* Gambar #1: Siluet (lapisan belakang, bayangan) */}
					<img
						src='/yoga-photo.png'
						alt=''
						aria-hidden='true'
						className='absolute bottom-0 left-0 w-full h-full object-cover 
                                   mix-blend-color-burn opacity-15 
                                   transform scale-110 origin-bottom'
					/>

					{/* Gambar #2: Foto Utama dengan filter */}
					<img
						src='/yoga-photo.png'
						alt='Foto Yoga Agustiansyah'
						className='absolute bottom-0 left-0 w-full h-full object-cover
                                   mix-blend-overlay
                                   transition-opacity duration-700 ease-in-out
                                   group-hover:opacity-0' // Menghilang saat hover
					/>

					{/* Gambar #3: Foto tanpa filter */}
					<img
						src='/yoga-photo.png'
						alt='Foto Yoga Agustiansyah'
						className='absolute bottom-0 left-0 w-full h-full object-cover
                                   opacity-0
                                   transition-opacity duration-700 ease-in-out
                                   group-hover:opacity-100' // Muncul saat hover
					/>
				</div>
			</div>

			{/* Kolom Kanan: Kontainer Teks */}
			<div className='w-full md:w-7/12 flex items-center md:items-end p-8 sm:p-12 lg:p-16 md:pt-20'>
				<div className='w-full'>
					{/* FIX: Kelas 'font-serif' dihapus, karena sudah diwarisi dari body */}
					<h1 className='text-white font-bold text-6xl md:text-[80px] leading-tight md:leading-[99px]'>
						Hi, I'm Yoga Agustiansyah
					</h1>
					<h2 className='italic font-bold text-cyan-light text-4xl md:text-5xl mt-4'>
						Software Engineer and AI Enthusiast
					</h2>
					<p className='italic text-white text-2xl md:text-[32px] mt-20'>
						-Breathing life into lines of code.-
					</p>

					<div className='mt-8 flex justify-start'>
						<a
							href='#contact'
							className='px-8 py-3 text-dark-cyan font-bold text-[35px] bg-transparent border-4 border-dark-cyan rounded-lg hover:bg-dark-cyan/10 transition-colors duration-300'>
							Let's Talk
						</a>
					</div>
				</div>
			</div>

			{/* Ikon Sosial di pojok kanan bawah */}
			<div className='absolute bottom-10 right-10 hidden md:flex items-center gap-6'>
				<a
					href='https://x.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='w-16 h-16 rounded-full border-[3px] border-dark-cyan flex items-center justify-center text-dark-cyan hover:bg-dark-cyan/10 hover:text-cyan-light transition-all duration-300'>
					<Twitter size={32} />
				</a>
				<a
					href='https://instagram.com'
					target='_blank'
					rel='noopener noreferrer'
					className='w-16 h-16 rounded-full border-[3px] border-dark-cyan flex items-center justify-center text-dark-cyan hover:bg-dark-cyan/10 hover:text-cyan-light transition-all duration-300'>
					<Instagram size={32} />
				</a>
				<a
					href='https://github.com'
					target='_blank'
					rel='noopener noreferrer'
					className='w-16 h-16 rounded-full border-[3px] border-dark-cyan flex items-center justify-center text-dark-cyan hover:bg-dark-cyan/10 hover:text-cyan-light transition-all duration-300'>
					<Github size={32} />
				</a>
			</div>
		</section>
	);
};

export default HeroSection;
