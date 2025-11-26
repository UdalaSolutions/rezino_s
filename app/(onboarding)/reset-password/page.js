'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthWrapper from '../AuthWrapper';

export default function ResetPasswordPage() {
	const [formData, setFormData] = useState({
		password: '',
		confirmPassword: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [passwordStrength, setPasswordStrength] = useState(0);

	const calculatePasswordStrength = (password) => {
		let strength = 0;
		if (password.length >= 8) strength++;
		if (password.length >= 12) strength++;
		if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
		if (/\d/.test(password)) strength++;
		if (/[^a-zA-Z\d]/.test(password)) strength++;
		return strength;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (name === 'password') {
			setPasswordStrength(calculatePasswordStrength(value));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		// Validation
		if (formData.password.length < 8) {
			setError('Password must be at least 8 characters long');
			return;
		}

		if (formData.password !== formData.confirmPassword) {
			setError('Passwords do not match');
			return;
		}

		setIsLoading(true);

		try {
			// Add your reset password logic here
			console.log('Resetting password');

			await new Promise((resolve) => setTimeout(resolve, 1500));

			// Redirect to sign in with success message
			window.location.href = '/auth/signin?reset=success';
		} catch (err) {
			setError('Failed to reset password. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	const getStrengthLabel = () => {
		if (passwordStrength === 0) return { text: '', color: '' };
		if (passwordStrength <= 2) return { text: 'Weak', color: 'text-red-600' };
		if (passwordStrength <= 3)
			return { text: 'Fair', color: 'text-yellow-600' };
		if (passwordStrength <= 4) return { text: 'Good', color: 'text-blue-600' };
		return { text: 'Strong', color: 'text-green-600' };
	};

	const strength = getStrengthLabel();

	return (
		<AuthWrapper
			title='Set new password'
			subtitle='Your new password must be different from previously used passwords'>
			<form
				onSubmit={handleSubmit}
				className='space-y-6'>
				{error && (
					<div className='p-3 rounded-lg bg-red-50 border border-red-200'>
						<p className='text-sm text-red-600'>{error}</p>
					</div>
				)}

				{/* New Password Field */}
				<div>
					<label
						htmlFor='password'
						className='block text-sm font-medium text-gray-700 mb-2'>
						New password
					</label>
					<div className='relative'>
						<input
							id='password'
							name='password'
							type={showPassword ? 'text' : 'password'}
							required
							value={formData.password}
							onChange={handleChange}
							className='w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition'
							placeholder='Enter new password'
						/>
						<button
							type='button'
							onClick={() => setShowPassword(!showPassword)}
							className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'>
							{showPassword ? (
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
									/>
								</svg>
							) : (
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Confirm Password Field */}
				<div>
					<label
						htmlFor='confirmPassword'
						className='block text-sm font-medium text-gray-700 mb-2'>
						Confirm new password
					</label>
					<input
						id='confirmPassword'
						name='confirmPassword'
						type={showPassword ? 'text' : 'password'}
						required
						value={formData.confirmPassword}
						onChange={handleChange}
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition'
						placeholder='Re-enter new password'
					/>
					{formData.confirmPassword &&
						formData.password !== formData.confirmPassword && (
							<p className='mt-2 text-xs text-red-600'>
								Passwords do not match
							</p>
						)}

					{/* Password Strength Indicator */}
					{formData.password && (
						<div className='mt-2'>
							<div className='flex gap-1 mb-1'>
								{[1, 2, 3, 4, 5].map((level) => (
									<div
										key={level}
										className={`h-1 flex-1 rounded ${
											level <= passwordStrength
												? passwordStrength <= 2
													? 'bg-red-500'
													: passwordStrength <= 3
													? 'bg-yellow-500'
													: passwordStrength <= 4
													? 'bg-blue-500'
													: 'bg-green-500'
												: 'bg-gray-200'
										}`}
									/>
								))}
							</div>
							{strength.text && (
								<p className={`text-xs font-medium ${strength.color}`}>
									Password strength: {strength.text}
								</p>
							)}
						</div>
					)}

					<ul className='mt-3 text-xs text-gray-600 space-y-1'>
						<li className='flex items-center'>
							<span
								className={
									formData.password.length >= 8 ? 'text-green-600' : ''
								}>
								{formData.password.length >= 8 ? '✓' : '○'} At least 8
								characters
							</span>
						</li>
						<li className='flex items-center'>
							<span
								className={
									/[A-Z]/.test(formData.password) &&
									/[a-z]/.test(formData.password)
										? 'text-green-600'
										: ''
								}>
								{/[A-Z]/.test(formData.password) &&
								/[a-z]/.test(formData.password)
									? '✓'
									: '○'}{' '}
								Uppercase and lowercase letters
							</span>
						</li>
						<li className='flex items-center'>
							<span
								className={
									/\d/.test(formData.password) ? 'text-green-600' : ''
								}>
								{/\d/.test(formData.password) ? '✓' : '○'} At least one number
							</span>
						</li>
					</ul>
				</div>

				{/* Submit Button */}
				<button
					type='submit'
					disabled={isLoading || formData.password !== formData.confirmPassword}
					className='w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition'>
					{isLoading ? 'Resetting password...' : 'Reset password'}
				</button>

				{/* Back to Sign In */}
				<div className='text-center pt-4'>
					<Link
						href='/auth/signin'
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
