'use client';

import { X } from 'lucide-react';

export default function SubscribeModal({ isOpen, onClose }) {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
			<div className='bg-gray-900 rounded-2xl max-w-md w-full p-8 relative border border-gray-800'>
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-gray-400 hover:text-white transition-colors'>
					<X className='w-6 h-6' />
				</button>

				<div className='text-center'>
					<div className='w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4'>
						<svg
							className='w-8 h-8 text-white'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
							/>
						</svg>
					</div>

					<h2 className='text-2xl font-bold text-white mb-2'>
						Subscribe to View
					</h2>
					<p className='text-gray-400 mb-6'>
						Get unlimited access to all RezinoS skincare videos and expert
						dermatologist advice.
					</p>
				</div>
			</div>
		</div>
	);
}
