'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthWrapper from '../AuthWrapper';

export default function VerifyEmailPage() {
	const [isResending, setIsResending] = useState(false);
	const [resendMessage, setResendMessage] = useState('');
	const [email] = useState('user@example.com');

	const handleResendEmail = async () => {
		setIsResending(true);
		setResendMessage('');

		try {
			// Add your resend email logic here
			await new Promise((resolve) => setTimeout(resolve, 1500));

			setResendMessage('Verification email sent! Please check your inbox.');
		} catch (err) {
			setResendMessage('Failed to resend email. Please try again.');
		} finally {
			setIsResending(false);
		}
	};

	return (
		<AuthWrapper
			title='Verify your email'
			subtitle="We've sent a verification link to your email">
			<div className='space-y-6'>
				{/* Email Icon */}
				<div className='flex '>
					<div className='w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center'>
						<svg
							className='w-10 h-10 text-pink-600'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
							/>
						</svg>
					</div>
				</div>

				{/* Instructions */}
				<div className='text-left space-y-4'>
					<p className='text-gray-700'>
						We&apos;ve sent a verification email to:
					</p>
					<p className='font-semibold text-gray-900'>{email}</p>
					<p className='text-sm text-gray-600'>
						Click the link in the email to verify your account. The link will
						expire in 24 hours.
					</p>
				</div>

				{/* Resend Message */}
				{resendMessage && (
					<div
						className={`p-3 rounded-lg ${
							resendMessage.includes('Failed')
								? 'bg-red-50 border border-red-200'
								: 'bg-green-50 border border-green-200'
						}`}>
						<p
							className={`text-sm ${
								resendMessage.includes('Failed')
									? 'text-red-600'
									: 'text-green-600'
							}`}>
							{resendMessage}
						</p>
					</div>
				)}

				{/* Resend Button */}
				<div className='pt-4'>
					<button
						onClick={handleResendEmail}
						disabled={isResending}
						className='w-full bg-white border-2 border-pink-500 text-pink-600 py-3 px-4 rounded-lg font-medium hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition'>
						{isResending ? 'Sending...' : "Didn't receive the email? Resend"}
					</button>
				</div>

				{/* Help Text */}
				<div className='bg-gray-50 rounded-lg p-4 space-y-2'>
					<p className='text-sm font-medium text-gray-900'>
						Can&apos;t find the email?
					</p>
					<ul className='text-sm text-gray-600 space-y-1 list-disc list-inside'>
						<li>Check your spam or junk folder</li>
						<li>Make sure {email} is correct</li>
						<li>Wait a few minutes and check again</li>
					</ul>
				</div>

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
			</div>
		</AuthWrapper>
	);
}
