"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";


const AboutSection = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
			id='about'
			className='relative bg-[#032E66] py-20 lg:py-32 overflow-hidden'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
				>
					{/* Judul Section */}
					<motion.h2
						className='text-4xl lg:text-5xl font-bold text-white text-center'
						variants={itemVariants}>
						ABOUT ME
					</motion.h2>

					<motion.div
						className='relative mx-auto mt-16 mb-16 lg:mb-24 w-[250px] h-[330px] lg:w-[300px] lg:h-[400px] drop-shadow-2xl'
						variants={itemVariants}>
						<Image
							src='/photo-blob.svg'
							alt='Foto Profil Yoga Agustiansyah dalam bentuk blob'
							layout='fill'
							objectFit='contain'
						/>
					</motion.div>

					{/* Kontainer untuk paragraf deskripsi */}
					<div className='relative max-w-4xl mx-auto space-y-8'>
						<div className='absolute -inset-10 sm:-inset-20 bg-[#0B80A1]/10 blur-3xl rounded-full -z-10'></div>

						<motion.p
							className='text-center text-lg md:text-xl text-gray-200 leading-relaxed'
							variants={itemVariants}>
							Sebagai seorang software engineer, saya senang merancang dan membangun
							aplikasi secara menyeluruh, mulai dari backend hingga frontend. Keahlian
							saya berpusat pada Express.js untuk sisi server, yang saya padukan dengan
							kemahiran menggunakan React dan Next.js untuk menciptakan antarmuka yang
							responsif. Saya juga familiar dalam mengelola database PostgreSQL dan
							berpengalaman membangun aplikasi mobile lintas platform dengan Flutter
							serta React Native.
						</motion.p>

						{/* Garis pemisah dekoratif */}
						<motion.div
							className='relative flex justify-center py-4'
							variants={itemVariants}>
							<div className='w-4/5 lg:w-3/5 h-px bg-white/30 transform -rotate-1'></div>
						</motion.div>

						<motion.p
							className='text-center text-lg md:text-xl text-gray-200 leading-relaxed'
							variants={itemVariants}>
							Selain di bidang software engineering, saya juga berminat pada bagaimana
							membuat aplikasi tersebut &apos;berpikir&apos;. Dunia machine learning,
							deep learning, dan computer vision adalah bidang yang terus saya
							eksplorasi. Untuk memperdalam minat ini, saat ini saya menempuh
							pendidikan S1 Teknik Informatika di Institut Teknologi Garut dengan fokus
							pada konsentrasi Sistem Cerdas (Intelligent Systems).
						</motion.p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
