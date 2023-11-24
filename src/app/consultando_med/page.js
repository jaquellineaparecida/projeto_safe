import Image from "next/image";
import Header from "../components/header";

export default function Consult_med() {
    return(
        <main>
            <Header/>

            <div>
                <h2 className="text-xl font-bold text-red-900 mt-12 ml-4"> Consultando um médico </h2>
                <h1 className="text-lg font-semibold ml-4"> Aqui há todos os médicos já cadastrados! Você pode alterar e excluir os médicos cadastrados. </h1>
            </div>

            <div className="flex flex-row justify-center mt-8">
                <div className="drop-shadow bg-[#edd8d5] flex flex-row gap-16 items-start pt-1 px-2 rounded w-[30em] h-[6em]">
                    <div className="flex flex-col mb-1 gap-1 justify-center pt-4">
                        <h1 className="text-lg font-bold text-[#b96d6d]"> Joana Maria da Silva </h1>
                        <h1 className="text-lg font-bold text-[#b96d6d]"> CRM: 845722 </h1>
                    </div>

                    <div className="flex flex-row gap-2 w-8 items-start mt-8 ml-32">
                        <Image src="/images/edit_safe.svg" className="pt-[2px] mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" alt="" width={27} height={27}/>
                        <Image src="/images/trash_safe.svg" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" alt="" width={25} height={25}/>
                    </div>
                </div>
            </div>
        </main>
    )
}