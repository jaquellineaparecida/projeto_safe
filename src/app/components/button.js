export default function Botao({ children }) {
    return (
        <main>
            <button className="w-96 h-12 text-white bg-red-900 rounded-[7px] mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"> {children} </button>
        </main>
    )
}