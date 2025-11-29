export const videoData = {
	categories: {
		sunburn: {
			name: 'Sunburn',
			description: 'Quick relief and healing tips for sun-damaged skin',
			icon: 'fluent:weather-sunny-24-regular', // nicer sun icon
			videos: [
				{
					id: 'sunburn-healing-fast',
					title: 'How To Heal A Sunburn FAST',
					vimeoId: '1134994314',
					description: 'Dermatologist tips for quick sunburn relief',
					views: '2.3K',
					duration: '8:42',
				},
			],
		},
		acne: {
			name: 'Acne',
			description: 'Comprehensive guides for treating and preventing acne',
			icon: 'mdi:face-woman', // simple face icon
			videos: [
				{
					id: 'acne-treatment-guide',
					title: 'Acne Treatment Guide',
					vimeoId: '1134997178',
					description: 'Effective acne treatment strategies',
					views: '5.1K',
					duration: '11:39',
				},
			],
		},
		eczema: {
			name: 'Eczema',
			description: 'Expert advice for managing eczema symptoms',
			icon: 'healthicons:rash', // keep this one, relevant
			videos: [
				{
					id: 'managing-eczema',
					title: 'Managing Eczema',
					vimeoId: '9876543210',
					description: 'Expert advice on eczema care',
					views: '3.8K',
					duration: '7:30',
				},
			],
		},
		rosacea: {
			name: 'Rosacea',
			description: 'Understanding and treating rosacea flare-ups',
			icon: 'mdi:face-woman-outline', // clean face outline
			videos: [
				{
					id: 'rosacea-basics',
					title: 'Understanding Rosacea',
					vimeoId: '1234567890',
					description: 'Everything you need to know about rosacea',
					views: '1.9K',
					duration: '9:15',
				},
			],
		},
		antiaging: {
			name: 'Anti-Aging',
			description: 'Skincare routines and treatments for youthful skin',
			icon: 'mdi:clock-outline', // represents anti-aging/time
			videos: [
				{
					id: 'antiaging-routine',
					title: 'Complete Anti-Aging Routine',
					vimeoId: '2345678901',
					description: 'Build an effective anti-aging skincare routine',
					views: '7.2K',
					duration: '14:20',
				},
				{
					id: 'retinol-guide',
					title: 'Retinol: Complete Guide',
					vimeoId: '3456789012',
					description: 'How to use retinol for maximum benefits',
					views: '6.4K',
					duration: '10:55',
				},
			],
		},
		hyperpigmentation: {
			name: 'Hyperpigmentation',
			description: 'Solutions for dark spots and uneven skin tone',
			icon: 'mdi:format-color-fill', // represents skin tone/dark spots
			videos: [
				{
					id: 'dark-spots-treatment',
					title: 'Treating Dark Spots',
					vimeoId: '4567890123',
					description: 'Effective treatments for hyperpigmentation',
					views: '4.5K',
					duration: '12:30',
				},
			],
		},
		dryskin: {
			name: 'Dry Skin',
			description: 'Hydration tips and treatments for dry, flaky skin',
			icon: 'mdi:water',
			videos: [
				{
					id: 'dry-skin-solutions',
					title: 'Combat Dry Skin',
					vimeoId: '5678901234',
					description: 'Best practices for deeply hydrating dry skin',
					views: '3.2K',
					duration: '9:45',
				},
			],
		},
		sensitiveskin: {
			name: 'Sensitive Skin',
			description: 'Gentle care for reactive and sensitive skin types',
			icon: 'mdi:heart-outline',
			videos: [
				{
					id: 'sensitive-skin-care',
					title: 'Caring for Sensitive Skin',
					vimeoId: '6789012345',
					description: 'How to build a gentle skincare routine',
					views: '2.8K',
					duration: '8:20',
				},
			],
		},
	},
};

export const categoryBackgrounds = {
	sunburn: '/sunburn-category.jpg',
	acne: '/acne-category.jpg',
	eczema: '/eczema-category.jpg',
	rosacea: '/rosacea-category.jpg',
	antiaging: '/anti-aging-category.jpg',
	hyperpigmentation:
		'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=80',
	dryskin:
		'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=1920&q=80',
	sensitiveskin:
		'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&q=80',
};

export const SUBSCRIPTION_PLANS = [
	{
		id: 'daily',
		name: 'Daily Pass',
		price: '₦50',
		duration: '24 hours',
		features: ['Access all videos', 'HD quality', 'No ads', '24/7 support'],
		popular: false,
		color: 'from-pink-500 to-rose-500',
	},
	{
		id: 'weekly',
		name: 'Weekly Pass',
		price: '₦200',
		duration: '7 days',
		features: [
			'Access all videos',
			'HD quality',
			'No ads',
			'24/7 support',
			'Early access to new content',
		],
		popular: true,
		color: 'from-purple-500 to-pink-500',
		savings: 'Save 43%',
	},
	{
		id: 'monthly',
		name: 'Monthly Pass',
		price: '₦500',
		duration: '30 days',
		features: [
			'Access all videos',
			'HD quality',
			'No ads',
			'24/7 support',
			'Early access to new content',
			'Exclusive masterclasses',
		],
		popular: false,
		color: 'from-indigo-500 to-purple-500',
		savings: 'Save 67%',
	},
];

// Helper function to get all categories
export const getAllCategories = () => {
	return Object.keys(videoData.categories).map((key) => ({
		slug: key,
		...videoData.categories[key],
	}));
};

// Helper function to get category by slug
export const getCategoryBySlug = (slug) => {
	return videoData.categories[slug] || null;
};

// Helper function to get video by category and video ID
export const getVideoById = (categorySlug, videoId) => {
	const category = videoData.categories[categorySlug];
	if (!category) return null;
	return category.videos.find((video) => video.id === videoId) || null;
};

// Helper function to get total video count
export const getTotalVideoCount = () => {
	return Object.values(videoData.categories).reduce(
		(total, category) => total + category.videos.length,
		0
	);
};
