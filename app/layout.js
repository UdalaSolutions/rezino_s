import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
});

export const metadata = {
	title: 'rezinoS',
	description:
		'Your premium destination for expert skincare knowledge and guidance. ',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${plusJakarta.className}  antialiased`}>
				{children}
			</body>
		</html>
	);
}
