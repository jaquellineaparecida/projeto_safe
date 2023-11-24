import Image from "next/image";
import Botao from "../components/button";
import Input from "../components/input";
import Header from "../components/header";

export default function Form() {
    return (
        <main>
            <Header/>

            <h1 className="text-2xl ml-16 mt-8 justify-start font-semibold"> Preencha o formulário para criar sua conta na Safe! </h1>

            <div className="flex justify-center mt-4"> 
                <div className="bg-[#ebdbce] rounded w-[35em] h-[36em]">
                    <h1 className="ml-8 mt-4 font-semibold"> Insira as informações! </h1>

                    <div className="flex justify-center flex-col ml-20">
                        <Input type="text" placeholder="Nome do paciente"/>

                        <Input type="text" placeholder="Pressão sistólica"/>

                        <Input type="text" placeholder="Pressão diastólica"/>

                        <Input type="text" placeholder="Nível de glicose"/>

                        <Input type="text" placeholder="Temperatura corporal"/>

                        <Input type="text" placeholder="Frequência cardíaca"/>

                        <Botao> {'Enviar'} </Botao>
                    </div>

                    <div className="flex justify-end mr-2">
                        <Image width={85} height={85} alt="" src="/images/SAFE-png.png"/> 
                    </div>
                </div>
            </div>
        </main>
    )
}