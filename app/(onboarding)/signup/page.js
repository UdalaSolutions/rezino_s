'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthWrapper from '../AuthWrapper';

export default function SignUpPage() {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
		confirmPassword: '',
		agreeToTerms: false,
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		// Validation
		if (formData.password !== formData.confirmPassword) {
			setError('Passwords do not match');
			return;
		}

		if (!formData.agreeToTerms) {
			setError('Please agree to the terms and conditions');
			return;
		}

		setIsLoading(true);

		try {
			// Add your sign up logic here
			console.log('Sign up:', formData);

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// Redirect to email verification
		} catch (err) {
			setError('Something went wrong. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthWrapper
			title='Create your account'
			subtitle='Join Rezino_s and start your skincare journey'>
			<form
				onSubmit={handleSubmit}
				className='space-y-5'>
				{error && (
					<div className='p-3 rounded-lg bg-red-50 border border-red-200'>
						<p className='text-sm text-red-600'>{error}</p>
					</div>
				)}

				{/* Full Name Field */}
				<div>
					<label
						htmlFor='fullName'
						className='block text-sm font-medium text-gray-700 mb-2'>
						Full name
					</label>
					<input
						id='fullName'
						name='fullName'
						type='text'
						required
						value={formData.fullName}
						onChange={handleChange}
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition'
						placeholder='John Doe'
					/>
				</div>

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
						value={formData.email}
						onChange={handleChange}
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition'
						placeholder='you@example.com'
					/>
				</div>

				{/* Password Field */}
				<div>
					<label
						htmlFor='password'
						className='block text-sm font-medium text-gray-700 mb-2'>
						Password
					</label>
					<input
						id='password'
						name='password'
						type='password'
						required
						value={formData.password}
						onChange={handleChange}
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition'
						placeholder='Create a strong password'
					/>
					<p className='mt-1 text-xs text-gray-500'>
						Must be at least 8 characters with uppercase, lowercase, and numbers
					</p>
				</div>

				{/* Confirm Password Field */}
				<div>
					<label
						htmlFor='confirmPassword'
						className='block text-sm font-medium text-gray-700 mb-2'>
						Confirm password
					</label>
					<input
						id='confirmPassword'
						name='confirmPassword'
						type='password'
						required
						value={formData.confirmPassword}
						onChange={handleChange}
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition'
						placeholder='Re-enter your password'
					/>
				</div>

				{/* Terms & Conditions */}
				<div>
					<label className='flex items-start'>
						<input
							type='checkbox'
							name='agreeToTerms'
							checked={formData.agreeToTerms}
							onChange={handleChange}
							className='w-4 h-4 mt-0.5 text-pink-600 border-gray-300 rounded focus:ring-pink-500'
						/>
						<span className='ml-2 text-sm text-gray-700'>
							I agree to the{' '}
							<Link
								href='/terms'
								className='text-pink-600 hover:text-pink-700 font-medium'>
								Terms of Service
							</Link>{' '}
							and{' '}
							<Link
								href='/privacy'
								className='text-pink-600 hover:text-pink-700 font-medium'>
								Privacy Policy
							</Link>
						</span>
					</label>
				</div>

				{/* Submit Button */}
				<button
					type='submit'
					disabled={isLoading}
					className='w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition'>
					{isLoading ? 'Creating account...' : 'Create account'}
				</button>

				{/* Sign In Link */}
				<p className='text-center text-sm text-gray-600 mt-6'>
					Already have an account?{' '}
					<Link
						href='/signin'
						className='text-pink-600 hover:text-pink-700 font-medium'>
						Sign in
					</Link>
				</p>
			</form>
		</AuthWrapper>
	);
}
