'use client';

import Image from 'next/image';
import Link from 'next/link';

const Home = () => (
  <div className="w-full">
    <nav className="bg-white py-2 drop-shadow-sm">
      <Link href='/'><Image className="mx-auto" src="/logo.png" alt="Logo" width={123} height={83} /></Link >
    </nav>
    <div className='flex flex-col relative'>
      <section className="py-40 relative">
        <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 blur-sm bg-fixed" style={{ backgroundImage: 'url("/bg.jpg")' }}></div>
        <h1 className="text-black drop-shadow-sm text-7xl text-center relative">Green XPERT</h1>
        <p className="text-black drop-shadow-sm text-2xl text-center relative">Where sustainability meets realtime insight</p>
      </section>
      <section className='container mx-auto py-40 text-center text-3xl'>
        <p className='mb-2'>Green XPERT is your best friend for sustainable home-hunting.</p>
        <p className='mb-2'>Simply enter a postcode and receive data on the eco-friendliness of your property.</p>
        <p className='mb-2'>Green XPERT empowers your decisions and promotes a greener lifestyle.</p>
        <div className='my-6'>
          <Link href="/xpert" className='rounded-md border border-black px-6 py-3 text-base hover:underline' style={{ backgroundColor: '#77c287' }}>Chat now 💬</Link>
        </div>
      </section>
    </div>
    <footer className="bg-white py-2 drop-shadow-sm text-center">
      <p>© 2023</p>
    </footer>
  </div>
);

export default Home;
