import Image from "next/image";

export default function Header() {
    return (
        <main>
            <div className="flex flex-row w-full items-start">
                <div className="bg-[#f3d7d4] flex flex-row justify-center pt-1 w-full items-start h-24">
                    <Image width={85} height={85} src="/images/SAFE-png.png"/>
                </div>
            </div>
        </main>
    )
}