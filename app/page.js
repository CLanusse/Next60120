import Contador from "@/components/Contador";
import Saludo from "@/components/Saludo";

export default function Home() {

  return (
    <main>
      <div className="container m-auto my-10">
        <h1 className="text-2xl font-bold">Hola mundo</h1>

        <Saludo />
        <Contador />
      </div>
    </main>
  )
}
