import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Characters from './components/characters/Characters';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`p-2 ${inter.className}`}
    >
      <Navbar />
      <section id='home'>
        <h1>Home</h1>
      </section>

      <section id='characters'>
        <Characters />
      </section>
    </main>
  )
}
