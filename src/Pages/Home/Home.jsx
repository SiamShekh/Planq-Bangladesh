import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Featured_Carosoule from "./Featured_Carosoule";
import Featured_User from "./Featured_User";
import MarqueeProjects from "./MarqueeProjects";
import Featured_Blog from "./Featured_Blog";

const Home = () => {
    return (
        <div className="">
            <div className="h-screen flex justify-center items-center flex-col gap-5">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'সর্বপ্রথম মোবাইলে Cosmos Blockchain',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'সর্বপ্রথম মোবাইলে EVM',
                        1000,
                        'সর্বপ্রথম মোবাইলে Planq Ecosystem',
                        1000,
                    ]}
                    speed={50}
                    className="lg:text-7xl text-2xl md:text-5xl text-center font-mono text-gray-600"
                    repeat={Infinity}
                />
                <p className="text-gray-600 font-mono text-center md:text-xl lg:text-2xl text-xs">Planq network opens up the full blockchain potential of your phone with easy accessibility.</p>
                <div className="flex gap-5 mt-5">
                    <Link to={'https://planq.network/'} className="border px-6 py-3 text-gray-600 border-slate-600  rounded-full">Explore Planq</Link>
                    <Link to={'https://bingx.com/en-us/spot/PLQUSDT/'} className="border px-6 py-3 border-slate-600 text-gray-600 rounded-full">Buy $PLQ</Link>
                </div>
            </div>

            <div className="lg:grid grid-flow-row-dense lg:grid-cols-3 justify-center mt-10 m-5 lg:m-0 gap-5 lg:gap-0 ">
                <div className="bg-white lg:col-span-1 lg:sticky lg:top-[20%] lg:h-[450px] border w-full mx-auto lg:w-96 rounded-xl p-5 border-gray-200">
                    <div className="avatar lg:absolute -top-6 left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <div className="w-40 mask mask-hexagon">
                            <img src="https://i.seadn.io/gae/nr2PQytCsAti--2u3lWkznJAo1QqUP3wpGkadICKeH4Gly8LKBttsnndmRdywsS_jNlKoRAZ9bMi7-aIv_UKOB3O02lSITJf0LclrKg?auto=format&dpr=1&w=3840" />
                            <div className="w-full h-full bg-green-400">

                            </div>
                        </div>
                    </div>

                    <div className="lg:mt-10">
                        <p className="text-2xl font-mono text-gray-600 mb-5">Subscribe Newsletter</p>
                        <label className="input input-bordered flex items-center gap-2  mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="Name" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <textarea className="textarea w-full mt-5 h-20" placeholder="additional information"></textarea>

                        <button className="btn btn-outline border-b-8 w-full bg-transparent mt-5 normal-case text-black border-red-700">Subscribe</button>
                    </div>
                </div>
                <div className=" h-full col-span-2 lg:m-5 p-5 border-slate-400 rounded-2xl text-black font-mono">
                    <p className="font-Teko uppercase text-2xl border-l-4 border-green-700 pl-3">Planq's Featured</p>
                    {/* Carosoule Planq Featured*/}
                    <div className="mt-5">
                        <Featured_Carosoule />
                        <Featured_User />
                        <Featured_Blog />
                    </div>
                </div>
            </div>
            <MarqueeProjects />
        </div>
    );
};

export default Home;