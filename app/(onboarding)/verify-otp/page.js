'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import AuthWrapper from '../AuthWrapper';

export default function OTPVerificationPage() {
	const [otp, setOtp] = useState(['', '', '', '', '', '']);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [resendTimer, setResendTimer] = useState(60);
	const inputRefs = useRef([]);

	useEffect(() => {
		// Focus first input on mount
		inputRefs.current[0]?.focus();
	}, []);

	useEffect(() => {
		// Countdown timer for resend
		if (resendTimer > 0) {
			const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
			return () => clearTimeout(timer);
		}
	}, [resendTimer]);

	const handleChange = (index, value) => {
		// Only allow numbers
		if (value && !/^\d$/.test(value)) return;

		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);
		setError('');

		// Auto-focus next input
		if (value && index < 5) {
			inputRefs.current[index + 1]?.focus();
		}

		// Auto-submit when all fields are filled
		if (value && index === 5 && newOtp.every((digit) => digit !== '')) {
			handleSubmit(newOtp.join(''));
		}
	};

	const handleKeyDown = (index, e) => {
		// Handle backspace
		if (e.key === 'Backspace' && !otp[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handlePaste = (e) => {
		e.preventDefault();
		const pastedData = e.clipboardData.getData('text').slice(0, 6);

		if (/^\d+$/.test(pastedData)) {
			const newOtp = pastedData
				.split('')
				.concat(Array(6 - pastedData.length).fill(''));
			setOtp(newOtp);

			// Focus the next empty input or the last input
			const nextIndex = Math.min(pastedData.length, 5);
			inputRefs.current[nextIndex]?.focus();
		}
	};

	const handleSubmit = async (otpValue) => {
		const code = otpValue || otp.join('');

		if (code.length !== 6) {
			setError('Please enter all 6 digits');
			return;
		}

		setIsLoading(true);
		setError('');

		try {
			// Add your OTP verification logic here
			console.log('Verifying OTP:', code);

			await new Promise((resolve) => setTimeout(resolve, 1500));

			// Handle success (redirect, etc.)
		} catch (err) {
			setError('Invalid code. Please try again.');
			setOtp(['', '', '', '', '', '']);
			inputRefs.current[0]?.focus();
		} finally {
			setIsLoading(false);
		}
	};

	const handleResend = async () => {
		if (resendTimer > 0) return;

		try {
			// Add your resend OTP logic here
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setResendTimer(60);
			setOtp(['', '', '', '', '', '']);
			inputRefs.current[0]?.focus();
		} catch (err) {
			setError('Failed to resend code. Please try again.');
		}
	};

	return (
		<AuthWrapper
			title='Enter verification code'
			subtitle="We've sent a 6-digit code to your phone">
			<div className='space-y-6'>
				{/* OTP Input Fields */}
				<div>
					<div className='flex justify-center gap-3 mb-6'>
						{otp.map((digit, index) => (
							<input
								key={index}
								ref={(el) => (inputRefs.current[index] = el)}
								type='text'
								inputMode='numeric'
								maxLength={1}
								value={digit}
								onChange={(e) => handleChange(index, e.target.value)}
								onKeyDown={(e) => handleKeyDown(index, e)}
								onPaste={index === 0 ? handlePaste : undefined}
								className='w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition'
								disabled={isLoading}
							/>
						))}
					</div>

					{/* Error Message */}
					{error && (
						<div className='p-3 rounded-lg bg-red-50 border border-red-200'>
							<p className='text-sm text-red-600 text-center'>{error}</p>
						</div>
					)}
				</div>

				{/* Verify Button */}
				<button
					onClick={() => handleSubmit()}
					disabled={isLoading || otp.some((digit) => !digit)}
					className='w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition'>
					{isLoading ? 'Verifying...' : 'Verify code'}
				</button>

				{/* Resend Code */}
				<div className='text-center'>
					{resendTimer > 0 ? (
						<p className='text-sm text-gray-600'>
							Resend code in{' '}
							<span className='font-semibold text-pink-600'>
								{resendTimer}s
							</span>
						</p>
					) : (
						<button
							onClick={handleResend}
							className='text-sm text-pink-600 hover:text-pink-700 font-medium'>
							Didn&apos;t receive the code? Resend
						</button>
					)}
				</div>

				{/* Info Box */}
				<div className='bg-blue-50 rounded-lg p-4 border border-blue-200'>
					<div className='flex items-start'>
						<svg
							className='w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0'
							fill='currentColor'
							viewBox='0 0 20 20'>
							<path
								fillRule='evenodd'
								d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
								clipRule='evenodd'
							/>
						</svg>
						<div className='text-sm text-blue-800'>
							<p className='font-medium mb-1'>Security tip</p>
							<p>
								Never share your verification code with anyone. Rezino&apos;s
								will never ask for your code.
							</p>
						</div>
					</div>
				</div>

				{/* Back Link */}
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
