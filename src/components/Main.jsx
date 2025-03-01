export default function Main({data}) {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <img 
                src={data?.hdurl} 
                alt={data?.title || 'bg-img'} 
                className=" flex flex-1 w-full max-h-screen object-contain"
            />
        </div>
    );
}