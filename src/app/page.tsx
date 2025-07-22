import Header from "./components/header";
import HeroSection from "./components/heroSection";

export default function Home() {
	return (
		<>
			<Header />

			<HeroSection />

			<main className='px-4 sm:px-6 lg:px-8'>
				<div className='max-w-7xl mx-auto'>

					<section
						id='about'
						className='min-h-screen flex items-center justify-center py-20'>
						<h2 className='text-4xl font-bold text-center text-lightest-slate font-serif'>
							Section Lain Sedang Dibangun
						</h2>
					</section>

				</div>
			</main>
		</>
	);
}
