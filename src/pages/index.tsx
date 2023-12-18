
import { Inter } from 'next/font/google'
import Dashboard from './dashboard'

import { useSession } from 'next-auth/react';


import scss from "../components/layout/layout.module.css";


import Login from '@/components/login/login';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
     
    <main className={scss.main}>
    
      
     {session && <Dashboard />}
      {!session && <Login/>}
    </main>
    </>
  )
}
