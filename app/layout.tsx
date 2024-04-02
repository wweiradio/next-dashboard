import '@/app/ui/global.css'; // 导入根目录下的全局样式
import styles from '@/app/ui/home.module.css';

import { inter } from '@/app/ui/fonts'; //导入fonts的inter
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout( {children,} : { children: React.ReactNode;}  //传入的参数为{children}, 而{children} 为 {ReactNode} 
                                  )  
{

  return (
    <html lang="en">
      
      <body className={`${inter.className} antialiased`}>

        {children}
      
      </body>

    </html>
  );
}
