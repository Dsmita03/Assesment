const header=({data})=>{
    return(
        <header className ="bg-gradient-to-r from-blue-500 to purple-500 text-white  p-6 text-center">
            <img src={data.profileImage} alt="profile" className="rounded-full mx-auto w-32 h-32 h-32 border-4 border-white"/>
            <h1 className="text-xl font-bold mt-4">{data.name}</h1>
            <p className="text-sm">{data.title}</p>
            <div className="flex justify-center mt-4">
                {Object.entries(data.socials).map(([key,value])=>(
                    <a href={url} key={url} target="_blank" rel="noreferrer" className="hover:underline">
                        {key.charAt(0).toUpperCase()+key.slice(1)}
                    </a>
                ))}
            </div>
        </header>
    );
};

export default header;