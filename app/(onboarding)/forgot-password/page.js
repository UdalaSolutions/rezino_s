'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthWrapper from '../AuthWrapper';

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		try {
			// Add your forgot password logic here
			console.log('Reset password for:', email);

			await new Promise((resolve) => setTimeout(resolve, 1500));

			setIsSubmitted(true);
		} catch (err) {
			setError('Failed to send reset email. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	if (isSubmitted) {
		return (
			<AuthWrapper
				title='Check your email'
				subtitle="We've sent password reset instructions">
				<div className='space-y-6'>
					{/* Success Icon */}
					<div className='flex justify-center'>
						<div className='w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center'>
							<svg
								className='w-10 h-10 text-green-600'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>
					</div>

					{/* Success Message */}
					<div className='text-center space-y-4'>
						<p className='text-gray-700'>
							We&apos;ve sent password reset instructions to:
						</p>
						<p className='font-semibold text-gray-900'>{email}</p>
						<p className='text-sm text-gray-600'>
							Click the link in the email to reset your password. The link will
							expire in 1 hour.
						</p>
					</div>

					{/* Back to Sign In Button */}
					<button
						onClick={() => (window.location.href = '/auth/signin')}
						className='w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition'>
						Back to sign in
					</button>

					{/* Help Text */}
					<div className='bg-gray-50 rounded-lg p-4 space-y-2'>
						<p className='text-sm font-medium text-gray-900'>
							Didn&apos;t receive the email?
						</p>
						<ul className='text-sm text-gray-600 space-y-1 list-disc list-inside'>
							<li>Check your spam or junk folder</li>
							<li>Make sure {email} is correct</li>
							<li>Wait a few minutes and check again</li>
						</ul>
					</div>

					{/* Resend Link */}
					<div className='text-center'>
						<button
							onClick={() => setIsSubmitted(false)}
							className='text-sm text-pink-600 hover:text-pink-700 font-medium'>
							Try a different email address
						</button>
					</div>
				</div>
			</AuthWrapper>
		);
	}

	return (
		<AuthWrapper
			title='Forgot your password?'
			subtitle="No worries, we'll send you reset instructions">
			<form
				onSubmit={handleSubmit}
				className='space-y-6'>
				{/* Lock Icon */}
				<div className='flex '>
					<div className='w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center'>
						<svg
							className='w-8 h-8 text-pink-600'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
							/>
						</svg>
					</div>
				</div>

				{error && (
					<div className='p-3 rounded-lg bg-red-50 border border-red-200'>
						<p className='text-sm text-red-600'>{error}</p>
					</div>
				)}

				{/* Email Field */}
				<div>
					<label
						htmlFor='email'
						className='block text-sm font-medium text-gray-700 mb-2'>
						Email address
					</label>
					<input
						id='email'
						name='email'
						type='email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition'
						placeholder='you@example.com'
					/>
					<p className='mt-2 text-xs text-gray-500'>
						Enter the email address associated with your account
					</p>
				</div>

				{/* Submit Button */}
				<button
					type='submit'
					disabled={isLoading}
					className='w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition'>
					{isLoading ? 'Sending...' : 'Send reset instructions'}
				</button>

				{/* Back to Sign In */}
				<div className='text-center pt-4'>
					<Link
						href='/signin'
						className='text-sm text-gray-600 hover:text-gray-900 inline-flex items-center'>
						<svg
							className='w-4 h-4 mr-2'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M15 19l-7-7 7-7'
							/>
						</svg>
						Back to sign in
					</Link>
				</div>
			</form>
		</AuthWrapper>
	);
}
