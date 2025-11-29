const BenefitItem = ({ icon: Icon, text }) => {
	return (
		<div className='flex items-center gap-2'>
			<div className='w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0'>
				<Icon className='w-4 h-4 text-pink-600' />
			</div>
			<span className='text-sm text-gray-700'>{text}</span>
		</div>
	);
};

export default BenefitItem;
