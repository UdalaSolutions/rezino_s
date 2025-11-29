import { Check } from 'lucide-react';
import { useMemo } from 'react';
import Link from 'next/link';

const SuccessStep = ({ plan, onClose, video }) => {
	const expiryDate = useMemo(() => {
		const startDate = new Date();
		const duration =
			plan.id === 'daily'
				? 86400000
				: plan.id === 'weekly'
				? 604800000
				: 2592000000;

		return new Date(startDate.getTime() + duration).toLocaleDateString();
	}, [plan.id]);

	return (
		<div className='p-12 text-center'>
			<div className='inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-br from-green-100 to-emerald-100 mb-6 animate-bounce'>
				<Check className='w-12 h-12 text-green-600' />
			</div>

			<h2 className='text-3xl font-bold text-gray-900 mb-4'>
				Subscription Successful!
			</h2>

			<p className='text-gray-600 mb-8 max-w-md mx-auto'>
				Welcome to RezinoS Premium! You now have full access to all our expert
				skincare videos.
			</p>

			<div className='bg-linear-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200 max-w-md mx-auto mb-8'>
				<div className='flex items-center justify-between mb-4'>
					<span className='text-gray-700 font-semibold'>Subscription Plan</span>
					<span className='text-gray-900 font-bold'>{plan.name}</span>
				</div>
				<div className='flex items-center justify-between mb-4'>
					<span className='text-gray-700 font-semibold'>Amount Paid</span>
					<span className='text-gray-900 font-bold'>{plan.price}</span>
				</div>
				<div className='flex items-center justify-between'>
					<span className='text-gray-700 font-semibold'>Valid Until</span>
					<span className='text-gray-900 font-bold'>{expiryDate}</span>
				</div>
			</div>

			<Link
				href={`/video/${video.categorySlug}/${video.vimeoId}`}
				className='bg-linear-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block'>
				Start Watching
			</Link>

			<p className='text-sm text-gray-500 mt-6'>
				A confirmation has been sent to your phone
			</p>
		</div>
	);
};

export default SuccessStep;
