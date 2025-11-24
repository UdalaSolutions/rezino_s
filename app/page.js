'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { Icon } from '@iconify/react';
import { getAllCategories, getTotalVideoCount } from '@/app/utils';

export default function HomePage() {
	const categories = getAllCategories();
	const totalVideos = getTotalVideoCount();
	const categoriesRef = useRef(null);

	const scrollToCategories = () => {
		categoriesRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='min-h-screen bg-white'>
			{/* Header */}
			<header className='bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50'>
				<div className='max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between'>
					<h1 className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>
						RezinoS
					</h1>
					<div className='flex items-center gap-4'>
						<span className='text-gray-600 text-sm font-medium'>
							{totalVideos} Skin Care Videos
						</span>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className='relative overflow-hidden border-b border-gray-100'>
				<div
					className='absolute inset-0 z-0'
					style={{
						backgroundImage: 'url("/skincare-groups.jpg")',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}>
					<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30'></div>
				</div>

				<div className='relative z-10 max-w-screen-2xl mx-auto px-6 py-24 md:py-32 text-center'>
					<div className='max-w-4xl mx-auto'>
						<div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6'>
							<span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
							<span className='text-white text-sm font-medium'>
								Expert Dermatology Content
							</span>
						</div>

						<h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
							Expert Skin Care
							<span className='block mt-2'>Videos</span>
						</h2>

						<p className='text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed'>
							Browse our collection of dermatologist-approved videos covering
							various skin conditions and treatments
						</p>

						<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
							<button
								onClick={scrollToCategories}
								className='bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer'>
								Explore Videos
							</button>
						</div>

						<div className='mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12'>
							<div className='text-center'>
								<div className='text-3xl md:text-4xl font-bold text-white mb-1'>
									{totalVideos}+
								</div>
								<div className='text-white/80 text-sm font-medium'>Videos</div>
							</div>
							<div className='text-center'>
								<div className='text-3xl md:text-4xl font-bold text-white mb-1'>
									{categories.length}
								</div>
								<div className='text-white/80 text-sm font-medium'>
									Categories
								</div>
							</div>
							<div className='text-center'>
								<div className='text-3xl md:text-4xl font-bold text-white mb-1'>
									100%
								</div>
								<div className='text-white/80 text-sm font-medium'>
									Expert Approved
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Categories Section */}
			<main
				ref={categoriesRef}
				className='max-w-screen-2xl mx-auto px-6 py-16'>
				<div className='text-center mb-12'>
					<h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Browse by Category
					</h3>
					<p className='text-gray-600 text-lg max-w-2xl mx-auto'>
						Choose from our expertly curated categories to find the perfect
						skincare guidance
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{categories.map((category) => (
						<Link
							key={category.slug}
							href={`/category/${category.slug}`}
							className='group'>
							<div className='bg-white border border-gray-200 rounded-xl p-6 hover:border-pink-400 hover:shadow-xl transition-all duration-300'>
								<div className='w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 border border-gray-200 group-hover:border-pink-400 group-hover:scale-110 transition-transform'>
									<Icon
										icon={category.icon}
										className='text-3xl text-pink-500'
									/>
								</div>

								<h4 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors'>
									{category.name}
								</h4>

								<p className='text-gray-600 text-sm mb-4 leading-relaxed'>
									{category.description}
								</p>

								<div className='flex items-center justify-between text-sm text-gray-500'>
									<div className='flex items-center gap-2'>
										<Play className='w-4 h-4' />
										<span>
											{category.videos.length}{' '}
											{category.videos.length === 1 ? 'video' : 'videos'}
										</span>
									</div>
									<div className='text-pink-500 group-hover:translate-x-1 transition-transform font-semibold'>
										→
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</main>

			<footer className='bg-gray-50 border-t border-gray-200 mt-20'>
				<div className='max-w-screen-2xl mx-auto px-6 py-8 text-center text-gray-600 text-sm'>
					<p>© 2025 RezinoS Skincare. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
