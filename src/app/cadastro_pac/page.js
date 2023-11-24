import Image from "next/image";
import Header from "../components/header";
import Input from "../components/input";
import Botao from "../components/button";

export default function Pac_cad() {
    return (
        <main>
            <Header/>

            <h1 className="text-2xl ml-16 mt-8 justify-start font-semibold text-red-900"> Cadastrando um paciente! </h1>

                <div className="flex justify-center mt-4"> 
                    <div className="bg-[#ebdbce] rounded w-[35em] h-[73em] mb-2">
                        <h1 className="ml-8 mt-4 font-semibold"> Insira as informações! </h1>

                        <div className="flex justify-center flex-col ml-20">
                            <Input type="text" placeholder="Nome do paciente"/>

                            <Input type="date" placeholder="Data de nasc."/>

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
                        </div>
                    </div>

                    <h1 className="ml-8 mt-4 font-semibold"> Endereço </h1>


                    <div className="flex justify-center flex-col ml-20">
                        <Input type="text" placeholder="Endereço"/>

                        <Input type="number" placeholder="Número"/>

                        <Input type="text" placeholder="Cidade"/>

                        <Input type="text" placeholder="Estado"/>

                        <Input type="text" placeholder="CEP" pattern="\d{8}"/>

                        <Input type="text" placeholder="Bairro"/>

                        <Botao> {'Cadastrar'} </Botao>
                    </div>


                    <div className="flex justify-end mr-2 ">
                        <Image width={85} height={85} alt="" src="/images/SAFE-png.png"/> 
                    </div>
                </div>
            </div>
        </main>
    )
}