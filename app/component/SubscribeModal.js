'use client';

import { useState } from 'react';
import PlansStep from './PlanStep';
import PaymentStep from './PaymentStep';
import ProcessingStep from './ProcessingStep';
import SuccessStep from './SuccessStep';

const SubscriptionModal = ({ isOpen, onClose, lockedVideoTitle, video }) => {
	const [step, setStep] = useState('plans');
	const [selectedPlan, setSelectedPlan] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [error, setError] = useState('');

	if (!isOpen) return null;

	const handlePlanSelect = (plan) => {
		setSelectedPlan(plan);
		setStep('payment');
	};

	const handlePayment = (e) => {
		e.preventDefault();
		setError('');

		// Validate phone number (MTN format)
		if (!phoneNumber.match(/^0[789][01]\d{8}$/)) {
			setError('Please enter a valid MTN phone number');
			return;
		}

		setStep('processing');

		// Simulate API call
		setTimeout(() => {
			const success = Math.random() > 0.3; // 70% success for demo
			if (success) {
				setStep('success');
			} else {
				setError(
					'Payment failed. Please try again or check your account balance.'
				);
				setStep('payment');
			}
		}, 3000);
	};

	const resetModal = () => {
		setStep('plans');
		setSelectedPlan(null);
		setPhoneNumber('');
		setError('');
		onClose();
	};

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn'>
			<div className='bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp'>
				{step === 'plans' && (
					<PlansStep
						onClose={onClose}
						onSelectPlan={handlePlanSelect}
						lockedVideoTitle={lockedVideoTitle}
					/>
				)}

				{step === 'payment' && (
					<PaymentStep
						plan={selectedPlan}
						phoneNumber={phoneNumber}
						setPhoneNumber={setPhoneNumber}
						onBack={() => setStep('plans')}
						onSubmit={handlePayment}
						error={error}
					/>
				)}

				{step === 'processing' && <ProcessingStep plan={selectedPlan} />}

				{step === 'success' && (
					<SuccessStep
						plan={selectedPlan}
						onClose={resetModal}
						video={video}
					/>
				)}
			</div>
		</div>
	);
};

export default SubscriptionModal;
