import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function Med_page() {
    return (
        <main>
            <Header/>

        
            <h2 className="text-xl font-bold text-red-900 mt-12 ml-4"> Seja bem vindo(a) doutora Maria! </h2>
            <h1 className="text-lg font-semibold ml-4"> Consulte, dê diagnósticos e converse com o seu paciente!  </h1>

            <h1 className="text-xl font-bold text-red-900 ml-4"> Seus pacientes</h1>

            <div className="flex flex-row items-start ml-8 mt-4">
                <div className="flex flex-col items-start mr-4">
                    <div className="flex flex-row items-start mt-8">
                        <div className="bg-[#ebdbce] flex flex-col justify-center w-56 h-56 items-start p-2 rounded-sm">
                            <div className="flex flex-col items-start">
                                <h1 className="text-lg font-bold"> Maria Dolores </h1>
                                <h1 className="text-lg font-semibold"> CPF: 574-335-987-65</h1>
                            </div>

                            <div className="flex flex-col ml-8 items-start gap-1 mt-12">
                                <h1 className="text-lg font-semibold text-white bg-[#c56869] flex flex-row w-36 h-26 items-start px-1 rounded-sm pl-6"> Consultar </h1>
                                <a  href={"/form"} className="text-lg font-semibold text-white bg-[#c56869] flex flex-row w-36 h-26 items-start px-2 rounded-sm pl-8"> Exame </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </main>
    )
}