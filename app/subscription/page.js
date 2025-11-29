'use client';

import React, { useState } from 'react';
import { Lock, Shield } from 'lucide-react';
import SubscriptionModal from '../component/SubscribeModal';

// Demo App Component
export default function SubscriptionApp() {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center p-6'>
			<div className='text-center'>
				<div className='mb-8'>
					<h1 className='text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4'>
						RezinoS Premium
					</h1>
					<p className='text-gray-600 text-lg'>
						Click below to see the subscription flow
					</p>
				</div>

				<button
					onClick={() => setShowModal(true)}
					className='bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto'>
					<Lock className='w-5 h-5' />
					View Subscription Plans
				</button>

				<div className='mt-12 inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2'>
					<Shield className='w-4 h-4 text-green-600' />
					<span className='text-sm text-gray-600'>Secure MTN Payment</span>
				</div>
			</div>

			<SubscriptionModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				lockedVideoTitle='Advanced Acne Treatment Techniques'
			/>
		</div>
	);
}
