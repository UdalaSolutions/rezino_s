export default function AuthWrapper({ title, subtitle, children }) {
	return (
		<div className='space-y-6'>
			<div className='flex gap-2.5 flex-col'>
				<h1 className='text-2xl font-bold text-gray-800'>{title}</h1>
				<p className='text-gray-600'>{subtitle}</p>
			</div>

			{children}
		</div>
	);
}
