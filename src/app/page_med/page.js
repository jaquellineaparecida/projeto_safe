import Header from "../components/header";

export default function Med_page() {
    return (
        <main>
            <Header/>

            <h2 className="text-xl font-bold text-red-900 mt-12 ml-4"> Seja bem vindo(a) doutora Maria! </h2>
            <h1 className="text-lg font-semibold ml-4"> Consulte, dê diagnósticos e converse com o seu paciente!  </h1>

            <h2 className="text-xl font-bold text-red-900 mt-12 ml-4"> Seus pacientes </h2>

            <div className="flex flex-row ">
                <div className="bg-[#ebdbce] flex flex-col justify-center pl-2 w-56 h-64 rounded-sm ml-36 pt-6">
                    <h1 className="text-lg font-bold">Maria Dolores</h1>
                    <h1 className="text-lg font-bold">CPF: 574-335-987-65</h1>

                    <div className="flex flex-col ml-10 gap-2 items-start mt-12">
                        <a className="text-lg font-semibold text-white bg-[#c56869] flex w-28 h-[2.5em] items-start pl-3 pt-2 rounded-md"> Consultar </a>
                        <a className="text-lg  font-semibold text-white bg-[#c56869] flex w-28 h-[2.5em] items-start pl-6 pt-2 rounded-md"> Exame </a>
                    </div>
                </div>
            </div>

        </main>
    )
}