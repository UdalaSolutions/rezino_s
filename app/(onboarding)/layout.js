/* eslint-disable @next/next/no-img-element */

export default function AuthLayout({ children }) {
	return (
		<div className='max-h-screen flex flex-col lg:flex-row items-stretch p-1.5'>
			{/* LEFT — IMAGE + TEXT */}
			<div className='hidden lg:flex relative w-[640px] items-end'>
				<img
					src='/auth-img.svg'
					alt='auth'
					className='w-full h-full max-h-screen object-cover rounded-xl'
				/>

				{/* TEXT AT BOTTOM OF IMAGE */}
				<div className='absolute bottom-6 left-6 right-6 text-white space-y-2 max-w-[645px]'>
					<h1 className='font-bold text-4xl leading-13.5'>
						Expert skincare tips designed for every skin type
					</h1>
					<p>
						Learn how to care for your skin the right way, with tips that makes
						your routine easier and more effective.
					</p>
				</div>
			</div>

			{/* RIGHT — FORM AREA */}
			<div className='flex flex-1 items-center justify-center p-6 sm:p-8 lg:p-12'>
				<div className='w-full max-w-md lg:max-w-lg'>{children}</div>
			</div>
		</div>
	);
}
