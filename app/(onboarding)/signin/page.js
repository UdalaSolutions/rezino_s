'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthWrapper from '../AuthWrapper';

export default function SignInPage() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		rememberMe: false,
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
		setIsLoading(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
		} catch {
			setError('Invalid email or password. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthWrapper
			title='Welcome back'
			subtitle='Sign in to your account to continue'>
			<form
				onSubmit={handleSubmit}
				className='space-y-5'>
				{error && (
					<div className='p-3 rounded-lg bg-red-50 border border-red-200'>
						<p className='text-sm text-red-600'>{error}</p>
					</div>
				)}

				{/* Email */}
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-2'>
						Email address
					</label>
					<input
						id='email'
						name='email'
						type='email'
						required
						value={formData.email}
						onChange={handleChange}
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500'
					/>
				</div>

				{/* Password */}
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-2'>
						Password
					</label>
					<input
						id='password'
						name='password'
						type='password'
						required
						value={formData.password}
						onChange={handleChange}
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500'
					/>
				</div>

				{/* Remember me */}
				<div className='flex items-center justify-between'>
					<label className='flex items-center'>
						<input
							type='checkbox'
							name='rememberMe'
							checked={formData.rememberMe}
							onChange={handleChange}
							className='w-4 h-4 text-pink-600 border-gray-300 rounded'
						/>
						<span className='ml-2 text-sm text-gray-700'>Remember me</span>
					</label>

					<Link
						href='/forgot-password'
						className='text-sm text-pink-600 hover:text-pink-700'>
						Forgot password?
					</Link>
				</div>

				<button
					type='submit'
					disabled={isLoading}
					className='w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg disabled:opacity-50'>
					{isLoading ? 'Signing in...' : 'Sign in'}
				</button>

				<p className='text-center text-sm text-gray-600'>
					Don&apos;t have an account?{' '}
					<Link
						href='/signup'
						className='text-pink-600 font-medium'>
						Sign up
					</Link>
				</p>
			</form>
		</AuthWrapper>
	);
}
