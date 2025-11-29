import { X, Check, Lock, Phone, Shield, Zap, Star } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '@/app/utils';
import PlanCard from './PlanCard';
import BenefitItem from './BenefitItem';

const PlansStep = ({ onClose, onSelectPlan, lockedVideoTitle }) => {
	return (
		<>
			{/* Header */}
			<div className='relative border-b border-gray-200 p-6'>
				<button
					onClick={onClose}
					className='absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors'>
					<X className='w-6 h-6' />
				</button>

				<div className='text-center mb-2'>
					<div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mb-4'>
						<Lock className='w-8 h-8 text-white' />
					</div>
					<h2 className='text-3xl font-bold text-gray-900 mb-2'>
						Unlock Premium Content
					</h2>
					{lockedVideoTitle && (
						<p className='text-gray-600'>
							Subscribe to watch{' '}
							<span className='font-semibold text-gray-900'>
								&apos;{lockedVideoTitle}&apos;
							</span>{' '}
							and access our entire video library
						</p>
					)}
				</div>
			</div>

			{/* Plans Grid */}
			<div className='p-6 overflow-y-auto max-h-[calc(90vh-180px)]'>
				<div className='grid md:grid-cols-3 gap-4 mb-6'>
					{SUBSCRIPTION_PLANS.map((plan) => (
						<PlanCard
							key={plan.id}
							plan={plan}
							onSelect={() => onSelectPlan(plan)}
						/>
					))}
				</div>

				{/* Benefits Section */}
				<div className='bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200'>
					<h3 className='font-bold text-gray-900 mb-4 flex items-center gap-2'>
						<Star className='w-5 h-5 text-pink-600' />
						Why Subscribe to RezinoS?
					</h3>
					<div className='grid md:grid-cols-2 gap-4'>
						<BenefitItem
							icon={Check}
							text='Expert dermatologist-approved content'
						/>
						<BenefitItem
							icon={Zap}
							text='Instant access after payment'
						/>
						<BenefitItem
							icon={Shield}
							text='Secure MTN payment gateway'
						/>
						<BenefitItem
							icon={Phone}
							text='Watch on any device'
						/>
					</div>
				</div>

				{/* Payment Method Info */}
				<div className='mt-6 text-center text-sm text-gray-500'>
					<p>Payments powered by MTN Mobile Money</p>
				</div>
			</div>
		</>
	);
};

export default PlansStep;
