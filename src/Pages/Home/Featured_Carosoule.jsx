
const Featured_Carosoule = () => {
    return (
        <div>
            <div className="">
                <div className="carousel md:h-96 h-64 w-full">
                    <div className="carousel-item w-full md:h-72 h-40 relative">
                        <img src="https://cdn.guildfi.com/guildfi/image/upload/c_limit,w_1280,q_75,f_auto/carousel/wbgwyhx4u3qt69bsvoko" className="w-full rounded-xl object-cover" />
                        <p className="font-Teko text-2xl absolute -bottom-10 line-clamp-1 border-l-8 border-green-700 pl-4 text-black">GuildFi Ace Gunner SS4</p>
                        <p className="absolute -bottom-20 border-l-4 line-clamp-1 font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perferendis cum? Nobis sapiente animi ipsam ad ex impedit deserunt repellat.</p>
                    </div>
                    <div className="carousel-item w-full md:h-72 h-40 relative">
                        <img src="https://cdn.guildfi.com/guildfi/image/upload/c_limit,w_1280,q_75,f_auto/carousel/df0zlx0max68nkft0sqf" className="w-full rounded-xl object-cover" />
                        <p className="font-Teko text-2xl absolute -bottom-10 line-clamp-1 text-black">GuildFi Ace Gunner SS4</p>
                        <p className="absolute -bottom-20 border-l-4 line-clamp-1 font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perferendis cum? Nobis sapiente animi ipsam ad ex impedit deserunt repellat.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured_Carosoule;
