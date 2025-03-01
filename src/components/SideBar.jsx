
export default function SideBar({ showModal,handleToggleModal,data}) {
 

  return (
    <>
     
      {/* Sidebar Wrapper */}
      <div
        className={`fixed inset-0 flex flex-col z-10 transition-opacity duration-300  ${
          showModal ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-[#030615] opacity-50 transition-opacity duration-300"
          onClick={handleToggleModal}
        ></div>

        {/* Sidebar Content */}
        <div
          className={`relative flex flex-col gap-4 p-4 overflow-y-auto h-full w-[80%] sm:w-4/5 sm:max-w-[800px] ml-auto bg-[#030615] shadow-lg z-15 
          transform transition-transform duration-500 ease-in-out
          ${showModal ? "translate-x-0" : "translate-x-full"}`}
        >
          <h2 className="text-3xl font-medium">{data?.title}</h2>

          {/* Sidebar Description */}
          <div className="flex-1 ">
            <p className="text-sm font-semibold text-gray-400">{data?.date}</p>
            <p className="text-2xl mt-2">{data?.explanation}</p>
          </div>

          {/* Close Button */}
          <button
            onClick={handleToggleModal}
            className="bg-transparent text-white border-none outline-none mr-auto cursor-pointer transition-opacity duration-200 py-4 hover:opacity-70"
          >
            <i className="fa-solid fa-arrow-right text-xl"></i>
          </button>
        </div>
      </div>
    </>
  );
}

  