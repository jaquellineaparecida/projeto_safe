import Image from "next/image";
import Botao from "../components/button";
import Input from "../components/input";

export default function Cadastro() {
    return (
        <main>
            <h1 className="text-2xl ml-16 mt-8 justify-start font-semibold"> Preencha o formulário para criar sua conta na Safe! </h1>

            <div className="flex justify-center mt-4"> 
                <div className="bg-[#ebdbce] rounded w-[35em] h-[50em]">
                    <h1 className="ml-8 mt-4 font-semibold"> Insira as informações! </h1>

                    <div className="flex justify-center flex-col ml-20">
                        <Input type="text" placeholder="Nome do hospital"/>

                        <Input type="email" placeholder="Email"/>

                        <Input type="password" placeholder="Senha"/>
                    </div>

                    <h1 className="ml-8 mt-4 font-semibold"> Insira o endereço! </h1>

                    <div className="flex justify-center flex-col ml-20">
                        <Input type="text" placeholder="Endereço"/>

                        <Input type="number" placeholder="Número"/>

                        <Input type="text" placeholder="Cidade"/>

                        <Input type="text" placeholder="Estado"/>

                        <Input type="text" placeholder="CEP" pattern="\d{8}"/>

                        <Input type="text" placeholder="Bairro"/>

                        <Botao> {'Cadastrar'} </Botao>
                    </div>

                    <div className="flex justify-end mr-2">
                        <Image width={85} height={85} src="/images/SAFE-png.png"/> 
                    </div>
                </div>
            </div>
        </main>
    )
}