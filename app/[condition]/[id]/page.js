'use client';

import { notFound } from 'next/navigation';
import { Lock, Play } from 'lucide-react';
import { useState, use } from 'react';
import SubscribeModal from '@/app/component/SubscribeModal';
import { videoData } from '@/app/utils';

export default function ConditionPage({ params }) {
	const [showModal, setShowModal] = useState(false);

	// Unwrap the params Promise using React.use()
	const { condition: conditionParam, id } = use(params);
	const condition = conditionParam.toLowerCase();
	const video = videoData[condition];

	// If condition doesn't exist, show 404
	if (!video) {
		notFound();
	}

	// Check if the provided ID matches the Vimeo ID
	const hasAccess = video.vimeoId === id;

	// If no valid access, show 404
	if (!hasAccess) {
		notFound();
	}

	const handleLockedClick = () => {
		setShowModal(true);
	};

	return (
		<div className='min-h-screen bg-gray-950'>
			<SubscribeModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
			/>

			{/* Header */}
			<header className='bg-gray-900 border-b border-gray-800 sticky top-0 z-50'>
				<div className='max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between'>
					<h1 className='text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent'>
						RezinoS
					</h1>
					<div className='flex items-center gap-4'>
						<span className='text-gray-400 text-sm'>Skin Care Videos</span>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className='max-w-screen-2xl mx-auto px-6 py-6'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
					{/* Video Player Section */}
					<div className='lg:col-span-2'>
						{/* Video Player */}
						<div className='bg-black rounded-xl overflow-hidden'>
							<div
								className='relative'
								style={{ padding: '56.25% 0 0 0' }}>
								<iframe
									src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
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
									title={video.title}
								/>
							</div>
						</div>

						{/* Video Info */}
						<div className='mt-4'>
							<h1 className='text-2xl font-bold text-white mb-2'>
								{video.title}
							</h1>

							<div className='flex items-center gap-4 text-sm text-gray-400 mb-4'>
								<span>{video.views} views</span>
								<span>•</span>
								<span>{video.duration}</span>
								<span>•</span>
								<span className='px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-pink-300 capitalize'>
									{condition}
								</span>
							</div>

							{/* Channel Info */}
							<div className='flex items-start gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800'>
								<div className='w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0'>
									RS
								</div>
								<div className='flex-1'>
									<h3 className='text-white font-semibold mb-1'>
										RezinoS Skincare
									</h3>
									<p className='text-gray-400 text-sm leading-relaxed'>
										{video.description}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Sidebar - Related Videos */}
					<div className='lg:col-span-1'>
						<h2 className='text-white font-semibold mb-4 px-2'>
							More Skin Care Videos
						</h2>
						<div className='space-y-3'>
							{Object.keys(videoData).map((key) => {
								const relatedVideo = videoData[key];
								const isActive = key === condition;
								const isLocked = !isActive;

								return (
									<div
										key={key}
										onClick={() => isLocked && handleLockedClick()}
										className={`block ${
											isLocked ? 'cursor-pointer' : 'cursor-default'
										}`}>
										<div className='flex gap-3 p-2 rounded-lg hover:bg-gray-900 transition-colors'>
											{/* Thumbnail */}
											<div className='w-40 h-24 flex-shrink-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg relative overflow-hidden'>
												<div className='absolute inset-0 flex items-center justify-center'>
													{isLocked ? (
														<Lock className='w-8 h-8 text-gray-500' />
													) : (
														<Play
															className='w-8 h-8 text-pink-400'
															fill='currentColor'
														/>
													)}
												</div>
												<div className='absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded'>
													{relatedVideo.duration}
												</div>
												{isLocked && (
													<div className='absolute inset-0 bg-gray-900/60 backdrop-blur-[2px]'></div>
												)}
											</div>

											{/* Info */}
											<div className='flex-1 min-w-0'>
												<h3
													className={`text-sm font-medium line-clamp-2 mb-1 ${
														isLocked ? 'text-gray-500' : 'text-white'
													}`}>
													{relatedVideo.title}
												</h3>
												<p className='text-gray-500 text-xs mb-1'>RezinoS</p>
												<div className='flex items-center gap-2'>
													<p className='text-gray-500 text-xs'>
														{relatedVideo.views} views
													</p>
													{isLocked && (
														<span className='text-xs text-gray-600 flex items-center gap-1'>
															<Lock className='w-3 h-3' />
															Locked
														</span>
													)}
												</div>
											</div>
										</div>
									</div>
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
