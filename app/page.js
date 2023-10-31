import Contador from "@/components/Contador";
import Saludo from "@/components/Saludo";
import Image from "next/image";
import logo from '../assets/coderhouse.svg'
import Link from "next/link";
import Header from "@/components/ui/Header";
import Boton from "@/components/ui/Boton";

export const metadata = {
  title: 'Coder App - Página inicio',
  // description: 'App de Next para Coderhouse',
  keywords: ['coderhouse', 'next', 'js', 'react']
}

const Home = () => {

  return (
    <main>
      {/* <Header /> */}

      <div className="container m-auto my-10">
        <h1 className="text-2xl font-bold">Hola mundo</h1>

        <Saludo />
        <Contador />

      </div>
    </main>
  )
}

export default Home