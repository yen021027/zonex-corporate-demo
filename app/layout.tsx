import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const noto = localFont({src:'../public/assets/noto-sans-tc.a2923570cd.woff2',display:'swap',variable:'--font-noto',weight:'100 900'});
export const metadata: Metadata = { title: '宗錸物流 ZONEX TRANSPORT｜台中貨運・全省配送', description:'宗錸物流提供台中、彰化、南投貨運洽詢，承接倉儲轉運、工廠搬遷、機械設備與展覽進退場運送。箱型鷗翼車、升降尾門與隨車電動拖板車。', robots:{index:false,follow:false}, alternates:{canonical:'https://zonex-transport.com.tw/'} };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="zh-Hant" className={noto.variable}><body>{children}</body></html>}
