export default function Input({ type, placeholder }) {
    return (
        <main>
            <input className="w-96 h-12 bg-white rounded-[7px] mt-4 placeholder:text-red-400 placeholder:text-opacity-75 placeholder:font-semibold pl-4 border-none outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent" type={type} placeholder={placeholder}/> 
        </main>
    )
}