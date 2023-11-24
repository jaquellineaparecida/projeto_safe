import Image from "next/image";
import Botao from "../components/button";
import Header from "../components/header";
import Input from "../components/input";

export default function Med_cad() {
    return (
        <main>
            <Header />

            <h1 className="text-2xl ml-16 mt-8 justify-start font-semibold text-red-900"> Cadastrando um médico! </h1>

            <div className="flex justify-center mt-4"> 
                <div className="bg-[#ebdbce] rounded w-[35em] h-[42em] mb-2">
                    <h1 className="ml-8 mt-4 font-semibold"> Insira as informações! </h1>

                    <div className="flex justify-center flex-col ml-20">
                        <Input type="text" placeholder="Nome do profissional"/>

                        <Input type="email" placeholder="Email"/>

                        <Input type="password" placeholder="Senha"/>
 
                        <Input type="text" placeholder="CPF" pattern="\d{11}"/>
                    </div>

                    <div>
                        <h1 className="ml-8 mt-4 font-semibold"> Contatos </h1>

                        <div className="flex justify-center flex-col ml-20">
                            <Input type="text" placeholder="DDI"/>

                            <Input type="text" placeholder="DDD"/>

                            <Input type="tel" placeholder="Telefone"/>

                            <Botao> {'Cadastrar'} </Botao>
                        </div>
                    </div>

                    <div className="flex justify-end mr-2 ">
                        <Image width={85} height={85} alt="" src="/images/SAFE-png.png"/> 
                    </div>
                </div>
            </div>
        </main>
    )
}