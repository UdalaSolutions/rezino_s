import {
	Check,
	Phone,
	CreditCard,
	AlertCircle,
	ChevronRight,
	Shield,
} from 'lucide-react';

const PaymentStep = ({
	plan,
	phoneNumber,
	setPhoneNumber,
	onBack,
	onSubmit,
	error,
}) => {
	return (
		<>
			{/* Header */}
			<div className='border-b border-gray-200 p-6'>
				<button
					onClick={onBack}
					className='text-gray-600 hover:text-gray-900 transition-colors mb-4 flex items-center gap-2'>
					← Back to plans
				</button>

				<div className='text-center'>
					<div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-4'>
						<CreditCard className='w-8 h-8 text-white' />
					</div>
					<h2 className='text-3xl font-bold text-gray-900 mb-2'>
						Complete Payment
					</h2>
					<p className='text-gray-600'>
						Subscribe to{' '}
						<span className='font-semibold text-gray-900'>{plan.name}</span>
					</p>
				</div>
			</div>

			{/* Payment Content */}
			<div className='p-6 overflow-y-auto max-h-[calc(90vh-200px)]'>
				{/* Selected Plan Summary */}
				<div className='bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200 mb-6'>
					<div className='flex items-center justify-between mb-4'>
						<div>
							<h3 className='font-bold text-gray-900'>{plan.name}</h3>
							<p className='text-sm text-gray-600'>{plan.duration} access</p>
						</div>
						<div className='text-right'>
							<div className='text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>
								{plan.price}
							</div>
						</div>
					</div>

					<div className='border-t border-pink-200 pt-4'>
						<ul className='space-y-2'>
							{plan.features.slice(0, 3).map((feature, index) => (
								<li
									key={index}
									className='flex items-center gap-2 text-sm text-gray-700'>
									<Check className='w-4 h-4 text-green-500 flex-shrink-0' />
									{feature}
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Phone Number Input */}
				<div className='mb-6'>
					<label className='block text-sm font-semibold text-gray-900 mb-2'>
						MTN Phone Number
					</label>
					<div className='relative'>
						<Phone className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
						<input
							type='tel'
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							placeholder='e.g., 08012345678'
							className='w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none text-lg'
						/>
					</div>
					<p className='text-sm text-gray-500 mt-2'>
						Enter your MTN number to receive payment confirmation
					</p>
				</div>

				{error && (
					<div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3'>
						<AlertCircle className='w-5 h-5 text-red-600 flex-shrink-0 mt-0.5' />
						<p className='text-sm text-red-800'>{error}</p>
					</div>
				)}

				{/* Security Note */}
				<div className='mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3'>
					<Shield className='w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5' />
					<div className='text-sm text-blue-800'>
						<p className='font-semibold mb-1'>Secure Payment</p>
						<p>
							You&apos;ll receive a prompt on your phone to authorize the
							payment. Your subscription activates instantly after confirmation.
						</p>
					</div>
				</div>

				<button
					onClick={onSubmit}
					className='w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'>
					Pay {plan.price} with MTN
					<ChevronRight className='w-5 h-5' />
				</button>

				<p className='text-center text-xs text-gray-500 mt-4'>
					By subscribing, you agree to our Terms of Service and Privacy Policy
				</p>
			</div>
		</>
	);
};
export default PaymentStep;
