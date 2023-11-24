import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#f3d7d4] flex flex-row pt-1 w-full h-36 items-start h-24 mt-44">
            <div className="mt-2">
                <h1 className="font-semibold ml-8 text-[#c56869]"> Integrantes </h1>

                <ul className="font-semibold ml-8">
                    <li> André Testai Muchao </li>
                    <li> Caio Davi Gomes Munhoz </li>
                    <li> Florbela Freitas Oliveira </li>
                    <li> Jaquelline Aparecida Candido</li>
                </ul>
            </div>

            <div className="mt-2">
                <h1 className="font-semibold ml-8 text-[#c56869]"> RMs </h1>

                <ul className="font-semibold ml-8">
                    <li> 99637 </li>
                    <li> 97970 </li>
                    <li> 99475 </li>
                    <li> 99553 </li>
                </ul>
            </div>

            <div className="flex mr-2 ml-[55em] mt-6">
                <Image width={100} height={100} alt="" src="/images/SAFE-png.png"/> 
            </div>
        </footer>
    )
}