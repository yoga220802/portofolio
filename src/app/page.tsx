import HeroSection from "./components/heroSection";

export default function Home() {
	return (
		<main>
			<HeroSection />

			<section
				id='about'
				className='min-h-screen flex items-center justify-center bg-gray-800 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-3xl mx-auto text-center'>
					<h2 className='text-4xl font-bold text-white'>About Me</h2>
					<p className='mt-4 text-lg text-gray-300'>
						Bagian Lain Masing Dalam Pengembangan
					</p>
				</div>
			</section>
		</main>
	);
}
