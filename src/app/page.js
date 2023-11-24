import Image from "next/image"
import Botao from "./components/button"
import Input from "./components/input"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl ml-16 mt-6 justify-start font-semibold"> Seja bem-vindo(a) de volta! </h1>

      <div className="flex justify-center mt-6">
        <div className="bg-[#ebdbce] rounded w-[35em] h-[30em]">
          <h1 className="ml-16 mt-10 font-semibold"> Entre com a sua conta! </h1>

            <div className="flex justify-center flex-col ml-20 mt-2">
              <Input type="email" placeholder="Email"/>

              <Input type="text" placeholder="Tipo de conta"/>

              <Input type="password" placeholder="Senha"/>

              <Link href={"/page_med"}> 
                <Botao > {'Entrar'} </Botao>
              </Link>
              
            </div>

            <div className="flex items-center">
              <h1 className="ml-12 mt-6 font-semibold">Ainda não tem uma conta? Cadastre-se clicando</h1>
              <a href={"/cadastro"} className="ml-1 mt-6 text-red-900 font-bold underline cursor-pointer">aqui</a>
            </div>

            <div className="flex justify-end mr-2">
              <Image width={85} height={85} alt="" src="/images/SAFE-png.png"/> 
            </div>
        </div>
      </div>
    </main>
  )
}
