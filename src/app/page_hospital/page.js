import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";

export default function Hosp_Home() {
    return (
        <main>
            <Header/>

            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-red-900 mt-12 ml-4"> Seja bem vindo ao hospital Raio de Luz! </h2>
                    <h1 className="text-lg font-semibold ml-4"> Cadastre médicos e pacientes e consulte os usuários cadastrados </h1>
                </div>

                <div className="flex flex-col gap-5 items-start mt-6 ml-16 justify-center">
                    <div className="flex flex-row gap-8 ml-[17em]">
                        <Link href={"/cadastro_med"}> 
                            <div className="bg-[#ebdbce] flex flex-row mb-px gap-3 w-[30em] h-[6em] rounded-sm pt-8">
                                <h1 className="text-xl font-semibold ml-4">Cadastre um médico </h1>
                                <Image src="https://file.rendit.io/n/CzNmPBZaFJsFKQxgahNW.svg" className="ml-44 mb-8" width={30} height={30}/>
                            </div>
                        </Link>

                        <Link href={"/cadastro_pac"}> 
                            <div className="bg-[#ebdbce] flex flex-row mt-px gap-3 w-[30em] h-[6em] items-start rounded-sm pt-8">
                                <h1 className="text-xl font-semibold ml-4">Cadastre um paciente </h1>
                                <Image src="https://file.rendit.io/n/CzNmPBZaFJsFKQxgahNW.svg" className="ml-44" width={30} height={30}/>
                            </div>
                        </Link>
                    </div>

                    <div className="flex flex-row gap-8 w-full items-start justify-center">
                        <Link href={"/consultando_med"}> 
                            <div className="bg-[#ebdbce] flex flex-col gap-3 w-[30em] h-26 items-start pl-1 py-3 rounded-sm">
                                <h1 className="text-lg font-bold pl-4"> Consulte um médico </h1>
                                <h1 className="text-lg font-semibold pl-4"> Consulte, edite e exclua os médicos cadastrados. </h1>
                            </div>
                        </Link>
                    
                        <div className="bg-[#ebdbce] flex flex-col gap-3 w-[30em] h-26 items-start pl-1 py-3 rounded-sm">
                            <h1 className="text-lg font-bold pl-4"> Consulte um paciente </h1>
                            <h1 className="text-lg font-semibold pl-4"> Consulte, edite e exclua os pacientes cadastrados. </h1>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}