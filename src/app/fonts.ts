import { Inter, Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '700', '500', '900'],
});

export const inter = Inter({ subsets: ['latin'] });
