export default function Footer({handleToggleModal,data}){
    return <footer className="fixed bottom-0 left-0 w-full flex items-center justify-between  px-3 md:px-6 ">
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#030615] to-transparent"></div>
        <div className="mb-10 ">

            <h1 className="text-sm sm:text-xl font-extralight ">APOD-APP</h1>
            <h2 className="text-3xl font-medium sm:text-6xl">{data?.title}</h2>
            
            
        </div >
        <button className="bg-transparent border-none outline-none text-white  transition-opacity text-2xl duration-200 hover:opacity-70 cursor-pointer  pr-2 " onClick={handleToggleModal }><i className="fa-solid fa-circle-info"></i></button>
    </footer>
}