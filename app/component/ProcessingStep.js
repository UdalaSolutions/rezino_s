import { Loader2 } from 'lucide-react';

const ProcessingStep = ({ plan }) => {
	return (
		<div className='p-12 text-center'>
			<div className='inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 mb-6'>
				<Loader2 className='w-12 h-12 text-pink-600 animate-spin' />
			</div>

			<h2 className='text-3xl font-bold text-gray-900 mb-4'>
				Processing Payment...
			</h2>

			<p className='text-gray-600 mb-6 max-w-md mx-auto'>
				Please check your phone for the payment prompt and authorize the
				transaction.
			</p>

			<div className='bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200 max-w-md mx-auto'>
				<p className='text-sm text-gray-700'>
					<span className='font-semibold'>Amount:</span> {plan.price}
				</p>
				<p className='text-sm text-gray-700 mt-2'>
					<span className='font-semibold'>Plan:</span> {plan.name}
				</p>
			</div>

			<p className='text-sm text-gray-500 mt-6'>
				This may take a few moments...
			</p>
		</div>
	);
};

export default ProcessingStep;
