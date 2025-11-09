import { Sparkles, Video, Lock } from 'lucide-react';

export default function NotFound() {
	return (
		<div className='min-h-screen bg-gray-950 flex flex-col'>
			{/* Header */}
			<header className='bg-gray-900 border-b border-gray-800'>
				<div className='max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between'>
					<h1 className='text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent'>
						RezinoS
					</h1>
					<span className='text-gray-400 text-sm'>Skin Care Videos</span>
				</div>
			</header>

			{/* Main Content */}
			<main className='flex-1 flex items-center justify-center px-4 py-16'>
				<div className='max-w-3xl w-full text-center'>
					{/* Icon Circle */}
					<div className='w-24 h-24 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-pink-500/30'>
						<Video className='w-12 h-12 text-pink-400' />
					</div>

					{/* Heading */}
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4'>
						<span className='text-[#f5f5f5]'>Welcome to RezinoS</span>
					</h1>
					<p className='text-lg sm:text-xl text-gray-400 mb-10'>
						Your premium destination for expert skincare knowledge and guidance.
					</p>

					{/* Feature Cards */}
					<div className='grid gap-6 md:grid-cols-3'>
						{[
							{
								icon: <Sparkles className='w-6 h-6 text-pink-400' />,
								title: 'Expert Advice',
								desc: 'Professional dermatologist tips and treatments',
							},
							{
								icon: <Video className='w-6 h-6 text-purple-400' />,
								title: 'Video Library',
								desc: 'Comprehensive guides for every skin type',
							},
							{
								icon: <Lock className='w-6 h-6 text-pink-400' />,
								title: 'Exclusive Access',
								desc: 'Premium videos available with subscription',
							},
						].map((feature, i) => (
							<div
								key={i}
								className='bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-pink-500/30 transition-all'>
								<div className='w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4'>
									{feature.icon}
								</div>
								<h3 className='text-white font-semibold mb-2'>
									{feature.title}
								</h3>
								<p className='text-gray-500 text-sm'>{feature.desc}</p>
							</div>
						))}
					</div>

					{/* Footer note */}
					<p className='text-gray-600 text-sm mt-12'>
						Need help?{' '}
						<a
							href='mailto:support@rezinos.com'
							className='text-pink-500 hover:text-pink-400 underline transition-colors'>
							Contact us
						</a>
					</p>
				</div>
			</main>
		</div>
	);
}
