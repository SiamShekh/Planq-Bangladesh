import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured_User = () => {


    const date = new Date() - 0; // Today Date to stamp
    const todatDate = date.toString(); // Convart Number to String (today date)
    const cutStamp = todatDate.slice(0, -3); // Slice last 3 number (today date)

    var oneWeekAgo = new Date(); // Today date
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);  // One week ago date
    const oneWeek = oneWeekAgo - 0; // Convart one week ago date to timestamp
    const oneWeekString = oneWeek.toString(); // conavrt one week ago date  number to string
    const cutOneWeekStamp = oneWeekString.slice(0, -3); // one week ago timestamp cut last 3 number

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const User = await axios.get(`https://api.combot.org/v2/u/?chat_id=-1001974489754&from=${cutOneWeekStamp}&to=${cutStamp}&api_key=76c88a15-f3ee-473e-b10c-3ed447e0f53c&length=3&page=0`);
            return { User };
        }
    })

    return (
        <div className="mt-5">
            <div className="flex justify-between items-center">
                <p className="font-Teko text-2xl border-l-4 border-green-700 pl-5">Planq's EXP Leaderboard</p>
                <Link to={'https://combot.org/c/-1001974489754/a'} className="border px-5 py-2 font-mono bg-white rounded-lg border-cyan-500">View All</Link>
            </div>
            {/* For large devices */}
            <div className="bg-white md:flex w-full rounded-2xl border-gray-200 border-2 p-5 mt-5 hidden justify-between items-center">
                <div className="">
                    <div className="flex items-center gap-5">
                        <div className="avatar">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*lGTqeVITBSkZXT9x" />
                            </div>
                        </div>
                        <div>
                            <p className="font-Teko text-5xl bg-gradient-to-br from-cyan-400 to-cyan-700 text-transparent bg-clip-text">{data?.User?.data?.result[0]?.u[0].title}</p>
                            <p className="font-Teko uppercase text-xl">Take the <span className="lowercase">1st</span> Position</p>
                        </div>
                    </div>
                    {/* <p className="mt-5 text-transparent bg-gradient-to-b from-slate-300 to-gray-500 bg-clip-text">*rank by combot</p> */}
                </div>

                <div className="relative">
                    <div className="relative w-full z-30 items-center gap-5 flex justify-between bg-gray-100 rounded-tr-lg p-5">
                        <p className="absolute rounded-full text-xl px-3 py-1 bg-white top-0 bottom-0 m-auto h-fit -left-5">1</p>
                        <div className="avatar">
                            <div className="w-10 mask mask-squircle">
                                <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*lGTqeVITBSkZXT9x" />
                            </div>
                        </div>
                        <p className="font-Teko text-3xl">@{data?.User?.data?.result[0]?.u[0].username}</p>

                        <div className="justify-end">
                            <p className="font-mono">Message: {data?.User?.data?.result[0].m}</p>
                        </div>
                    </div>

                    <div className="relative z-20  w-full items-center gap-5 flex justify-between bg-gray-100  border-slate-400 p-5">
                        <p className="absolute rounded-full text-xl px-3 py-1 bg-white top-0 bottom-0 m-auto h-fit -left-5">2</p>
                        <div className="avatar">
                            <div className="w-10 mask mask-squircle">
                                <img src="https://i.seadn.io/gae/nr2PQytCsAti--2u3lWkznJAo1QqUP3wpGkadICKeH4Gly8LKBttsnndmRdywsS_jNlKoRAZ9bMi7-aIv_UKOB3O02lSITJf0LclrKg?auto=format&dpr=1&w=3840" />
                            </div>
                        </div>
                        <p className="font-Teko text-3xl">@{data?.User?.data?.result[1]?.u[0].username}</p>

                        <div className="justify-end">
                            <p className="font-mono">Message: {data?.User?.data?.result[1].m}</p>
                        </div>
                    </div>

                    <div className="relative z-10  w-full items-center gap-5 flex justify-between bg-gray-100 rounded-br-lg border-slate-400 p-5">
                        <p className="absolute rounded-full text-xl px-3 py-1 bg-white top-0 bottom-0 m-auto h-fit -left-5">3</p>
                        <div className="avatar">
                            <div className="w-10 mask mask-squircle">
                                <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F11%2Fnft-cryptopunk-635-recentten-million-usd-bid-announced-000.jpg" />
                            </div>
                        </div>
                        <p className="font-Teko text-3xl">@{data?.User?.data?.result[1]?.u[0].username}</p>

                        <div className="justify-end">
                            <p className="font-mono">Message: {data?.User?.data?.result[1].m}</p>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* For small Devices */}
            <div className="bg-white w-full md:hidden rounded-2xl border-gray-200 border-2 p-5 mt-5 flex flex-col justify-between items-center">
                <div className="">
                    <div className="flex items-center gap-5">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*lGTqeVITBSkZXT9x" />
                            </div>
                        </div>
                        <div>
                            <p className="font-Teko text-3xl bg-gradient-to-br from-cyan-400 to-cyan-700 text-transparent bg-clip-text">{data?.User?.data?.result[0]?.u[0].title}</p>
                            <p className="font-Teko uppercase text-sm">Take the <span className="lowercase">1st</span> Position</p>
                        </div>
                    </div>
                    {/* <p className="mt-5 text-transparent bg-gradient-to-b from-slate-300 to-gray-500 bg-clip-text">*rank by combot</p> */}
                </div>

                <div className="relative mt-5">
                    <div className="relative w-full z-30 items-center gap-5 flex  bg-gray-100 rounded-tr-lg p-5">
                        <p className="absolute rounded-full text-xl px-3 py-1 bg-white top-0 bottom-0 m-auto h-fit -left-5">1</p>
                        <div className="avatar">
                            <div className="w-10 mask mask-squircle">
                                <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*lGTqeVITBSkZXT9x" />
                            </div>
                        </div>
                        <p className="font-Teko text-xl line-clamp-1">{data?.User?.data?.result[0]?.u[0].title}</p>

                    </div>

                    <div className="relative z-20  w-full items-center gap-5 flex bg-gray-100  border-slate-400 p-5">
                        <p className="absolute rounded-full text-xl px-3 py-1 bg-white top-0 bottom-0 m-auto h-fit -left-5">2</p>
                        <div className="avatar">
                            <div className="w-10 mask mask-squircle">
                                <img src="https://i.seadn.io/gae/nr2PQytCsAti--2u3lWkznJAo1QqUP3wpGkadICKeH4Gly8LKBttsnndmRdywsS_jNlKoRAZ9bMi7-aIv_UKOB3O02lSITJf0LclrKg?auto=format&dpr=1&w=3840" />
                            </div>
                        </div>
                        <p className="font-Teko text-xl line-clamp-1">{data?.User?.data?.result[1]?.u[0].title}</p>

                    </div>

                    <div className="relative z-10  w-full items-center gap-5 flex bg-gray-100 rounded-br-lg border-gray-200 p-5">
                        <p className="absolute rounded-full text-xl px-3 py-1 bg-white top-0 bottom-0 m-auto h-fit -left-5">3</p>
                        <div className="avatar">
                            <div className="w-10 mask mask-squircle">
                                <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F11%2Fnft-cryptopunk-635-recentten-million-usd-bid-announced-000.jpg" />
                            </div>
                        </div>
                        <p className="font-Teko text-xl line-clamp-1">{data?.User?.data?.result[1]?.u[0].title}</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured_User;