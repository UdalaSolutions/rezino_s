import { Check, ChevronRight } from 'lucide-react';

const PlanCard = ({ plan, onSelect }) => {
	return (
		<div
			className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
				plan.popular
					? 'border-pink-500 bg-gradient-to-br from-pink-50 to-purple-50'
					: 'border-gray-200 bg-white hover:border-pink-300'
			}`}
			onClick={onSelect}>
			{plan.popular && (
				<div className='absolute -top-3 left-1/2 -translate-x-1/2'>
					<span className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full'>
						MOST POPULAR
					</span>
				</div>
			)}

			{plan.savings && (
				<div className='absolute -top-3 right-4'>
					<span className='bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
						{plan.savings}
					</span>
				</div>
			)}

			<div className='text-center mb-4'>
				<h3 className='text-xl font-bold text-gray-900 mb-2'>{plan.name}</h3>
				<div className='flex items-end justify-center gap-1 mb-1'>
					<span className='text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>
						{plan.price}
					</span>
				</div>
				<p className='text-gray-600 text-sm'>{plan.duration}</p>
			</div>

			<ul className='space-y-3 mb-6'>
				{plan.features.map((feature, index) => (
					<li
						key={index}
						className='flex items-start gap-2 text-sm'>
						<Check className='w-4 h-4 text-green-500 flex-shrink-0 mt-0.5' />
						<span className='text-gray-700'>{feature}</span>
					</li>
				))}
			</ul>

			<button
				className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
					plan.popular
						? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
						: 'bg-gray-900 text-white hover:bg-gray-800'
				}`}>
				Select Plan
				<ChevronRight className='w-4 h-4' />
			</button>
		</div>
	);
};

export default PlanCard;
