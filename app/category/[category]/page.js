'use client';

import { use } from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { ArrowLeft, Play, Clock, Eye } from 'lucide-react';
import Link from 'next/link';
import { getCategoryBySlug, categoryBackgrounds } from '@/app/utils';
import SubscriptionModal from '@/app/component/SubscribeModal';

export default function CategoryPage({ params: paramsPromise }) {
	// Unwrap params
	const params = use(paramsPromise);
	const categorySlug = params.category;

	const category = getCategoryBySlug(categorySlug);
	const backgroundImage =
		categoryBackgrounds[categorySlug] || categoryBackgrounds.acne;

	const [showModal, setShowModal] = useState(false);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const handleVideoClick = (video) => {
		setSelectedVideo({ ...video, categorySlug });
		setShowModal(true);
	};

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Header */}
			<header className='bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50'>
				<div className='max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between'>
					<h1 className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>
						RezinoS
					</h1>
					<div className='flex items-center gap-4'>
						<span className='text-gray-600 text-sm font-medium'>
							Skin Care Videos
						</span>
					</div>
				</div>
			</header>

			{/* Category Hero */}
			<section className='relative overflow-hidden border-b border-gray-200'>
				<div
					className='absolute inset-0 z-0'
					style={{
						backgroundImage: `url("${backgroundImage}")`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}>
					<div className='absolute inset-0 bg-white/15'></div>
				</div>

				<div className='relative z-10 max-w-screen-2xl mx-auto px-6 py-16'>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors mb-8 font-medium'>
						<ArrowLeft className='w-4 h-4' />
						<span>Back to Categories</span>
					</Link>

					<div className='max-w-3xl'>
						<div className='flex items-start gap-6 mb-6'>
							<div className='w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-lg border border-gray-200'>
								<Icon
									icon={category.icon}
									className='text-5xl text-pink-600'
								/>
							</div>

							<div className='flex-1'>
								<h2 className='text-5xl font-bold text-gray-900 mb-4'>
									{category.name}
								</h2>
								<p className='text-xl text-gray-700 mb-4 leading-relaxed'>
									{category.description}
								</p>

								<div className='inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium'>
									<Play className='w-4 h-4 text-pink-600' />
									<span>
										{category.videos.length}{' '}
										{category.videos.length === 1 ? 'video' : 'videos'}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Videos Section */}
			<main className='max-w-screen-2xl mx-auto px-6 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{category.videos.map((video) => {
						const thumbnailUrl = `https://vumbnail.com/${video.vimeoId}.jpg`;
						return (
							<div
								key={video.id}
								className='group cursor-pointer'
								onClick={() => handleVideoClick(video)}>
								<div className='bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-pink-400 hover:shadow-2xl transition-all duration-300'>
									{/* Video Thumbnail */}
									<div
										className='relative aspect-video bg-gray-100 bg-cover bg-center'
										style={{ backgroundImage: `url(${thumbnailUrl})` }}>
										{/* Play Button */}
										<div className='absolute inset-0 flex items-center justify-center'>
											<div className='w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform'>
												<Play
													className='w-8 h-8 text-pink-600 ml-1'
													fill='currentColor'
												/>
											</div>
										</div>

										{/* Duration */}
										<div className='absolute bottom-3 right-3 bg-gray-900/90 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium'>
											<Clock className='w-3 h-3' />
											{video.duration}
										</div>
									</div>

									{/* Video Info */}
									<div className='p-5'>
										<h3 className='text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2'>
											{video.title}
										</h3>
										<p className='text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed'>
											{video.description}
										</p>
										<div className='flex items-center gap-3 text-gray-500 text-sm'>
											<div className='flex items-center gap-1.5'>
												<Eye className='w-4 h-4' />
												<span className='font-medium'>{video.views} views</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Empty State */}
				{category.videos.length === 0 && (
					<div className='text-center py-20'>
						<div className='w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100'>
							<Play className='w-12 h-12 text-gray-400' />
						</div>
						<h3 className='text-2xl font-bold text-gray-900 mb-3'>
							No videos yet
						</h3>
						<p className='text-gray-600 text-lg'>
							Videos for this category are coming soon!
						</p>
					</div>
				)}
			</main>

			{/* Subscription Modal */}
			<SubscriptionModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				lockedVideoTitle={selectedVideo?.title}
				video={selectedVideo}
			/>

			{/* Footer */}
			<footer className='bg-white border-t border-gray-200 mt-16'>
				<div className='max-w-screen-2xl mx-auto px-6 py-8 text-center text-gray-600 text-sm'>
					<p>© 2025 RezinoS Skincare. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
