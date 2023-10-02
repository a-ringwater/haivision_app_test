import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Characters from './components/characters/Characters';
import Landing from './components/landing/Landing';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`p-2 ${inter.className}`}
    >
      <Navbar />
      <section id='home'>
        <Landing />
      </section>

      <section id='characters'>
        <Characters />
      </section>
    </main>
  )
}
