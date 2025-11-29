'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Lock, Play, ArrowLeft } from 'lucide-react';
import { useState, use } from 'react';
import SubscribeModal from '@/app/component/SubscribeModal';
import { getCategoryBySlug, getVideoById } from '@/app/utils';

export default function VideoPage({ params }) {
	const [showModal, setShowModal] = useState(false);

	const { category: categorySlug, id: vimeoId } = use(params);
	const category = getCategoryBySlug(categorySlug);

	// If category doesn't exist, show 404
	if (!category) {
		notFound();
	}

	// Find the current video by Vimeo ID
	const currentVideo = category.videos.find((v) => v.vimeoId === vimeoId);

	// If video doesn't exist, show 404
	if (!currentVideo) {
		notFound();
	}

	const handleLockedClick = () => {
		setShowModal(true);
	};

	return (
		<div className='min-h-screen bg-white'>
			<SubscribeModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
			/>

			{/* Header */}
			<header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
				<div className='max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between'>
					<h1 className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>
						RezinoS
					</h1>
					<div className='flex items-center gap-4'>
						<span className='text-gray-600 text-sm'>Skin Care Videos</span>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className='max-w-screen-2xl mx-auto px-6 py-6'>
				{/* Breadcrumb */}
				<div className='flex items-center gap-2 text-sm mb-4'>
					<Link
						href='/'
						className='text-gray-600 hover:text-pink-600 transition-colors'>
						Home
					</Link>
					<span className='text-gray-400'>/</span>
					<Link
						href={`/category/${categorySlug}`}
						className='text-gray-600 hover:text-pink-600 transition-colors'>
						{category.name}
					</Link>
					<span className='text-gray-400'>/</span>
					<span className='text-gray-900 font-medium'>
						{currentVideo.title}
					</span>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
					{/* Video Player Section */}
					<div className='lg:col-span-2'>
						{/* Video Player */}
						<div className='bg-black rounded-xl overflow-hidden border border-gray-200'>
							<div
								className='relative'
								style={{ padding: '56.25% 0 0 0' }}>
								<iframe
									src={`https://player.vimeo.com/video/${currentVideo.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: '100%',
									}}
									frameBorder='0'
									allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									title={currentVideo.title}
								/>
							</div>
						</div>

						{/* Video Info */}
						<div className='mt-4'>
							<h1 className='text-2xl font-bold text-gray-900 mb-2'>
								{currentVideo.title}
							</h1>

							<div className='flex items-center gap-4 text-sm text-gray-600 mb-4'>
								<span>{currentVideo.views} views</span>
								<span>•</span>
								<span>{currentVideo.duration}</span>
								<span>•</span>
								<span className='px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full text-pink-700 font-medium capitalize'>
									{category.name}
								</span>
							</div>

							{/* Channel Info */}
							<div className='flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200'>
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0'>
									RS
								</div>
								<div className='flex-1'>
									<h3 className='text-gray-900 font-semibold mb-1'>
										RezinoS Skincare
									</h3>
									<p className='text-gray-600 text-sm leading-relaxed'>
										{currentVideo.description}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Sidebar - Related Videos */}
					<div className='lg:col-span-1'>
						<div className='flex items-center justify-between mb-4 px-2'>
							<h2 className='text-gray-900 font-semibold'>
								More in {category.name}
							</h2>
							<Link
								href={`/category/${categorySlug}`}
								className='text-pink-600 hover:text-pink-700 text-sm transition-colors font-medium'>
								View all
							</Link>
						</div>

						<div className='space-y-3'>
							{category.videos.map((video) => {
								const isActive = video.vimeoId === vimeoId;
								const isLocked = false; // Set to true if you want to lock videos

								return (
									<Link
										key={video.id}
										href={`/video/${categorySlug}/${video.vimeoId}`}
										className={`block ${
											isActive ? 'pointer-events-none' : ''
										}`}>
										<div
											className={`flex gap-3 p-2 rounded-lg transition-colors border ${
												isActive
													? 'bg-pink-50 border-pink-200'
													: 'bg-white border-gray-200 hover:bg-gray-50'
											}`}>
											{/* Thumbnail */}
											<div className='w-40 h-24 flex-shrink-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg relative overflow-hidden'>
												<div className='absolute inset-0 flex items-center justify-center'>
													{isLocked ? (
														<Lock className='w-8 h-8 text-gray-400' />
													) : (
														<Play
															className='w-8 h-8 text-pink-600'
															fill='currentColor'
														/>
													)}
												</div>
												<div className='absolute bottom-1 right-1 bg-gray-900/90 text-white text-xs px-1.5 py-0.5 rounded'>
													{video.duration}
												</div>
												{isActive && (
													<div className='absolute top-1 left-1 bg-pink-600 text-white text-xs px-2 py-0.5 rounded font-medium'>
														Now Playing
													</div>
												)}
											</div>

											{/* Info */}
											<div className='flex-1 min-w-0'>
												<h3
													className={`text-sm font-medium line-clamp-2 mb-1 ${
														isActive ? 'text-pink-700' : 'text-gray-900'
													}`}>
													{video.title}
												</h3>
												<p className='text-gray-600 text-xs mb-1'>RezinoS</p>
												<p className='text-gray-500 text-xs'>
													{video.views} views
												</p>
											</div>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</main>

			{/* Vimeo Player Script */}
			<script
				src='https://player.vimeo.com/api/player.js'
				async
			/>
		</div>
	);
}
