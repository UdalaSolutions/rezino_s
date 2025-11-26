/* eslint-disable @next/next/no-img-element */

export default function AuthLayout({ children }) {
	return (
		<div className='min-h-screen flex flex-col lg:flex-row max-h-screen'>
			{/* Image Section - Right Side */}
			<div className='hidden lg:block lg:w-1/2 relative bg-linear-to-br from-pink-100 to-purple-100 rounded-tr-xl rounded-br-xl'>
				<img
					src='/copy-space-cleaning-cosmetic-product.jpg'
					alt='auth'
					className='w-full h-full rounded-tr-2xl rounded-br-2xl'
					height={0}
					width={0}
				/>
			</div>
			{/* Form Section - Left Side */}
			<div className='w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12'>
				<div className='w-full max-w-md'>{children}</div>
			</div>
		</div>
	);
}
