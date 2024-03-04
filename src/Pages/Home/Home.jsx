import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Featured_Carosoule from "./Featured_Carosoule";

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

            <div className="grid grid-flow-row-dense grid-cols-3 justify-center items-center mt-10 m-5 lg:m-0 gap-5 lg:gap-0 ">
                <div className="bg-white  col-span-1 sticky top-0 h-[450px] w-full lg:w-96 rounded-2xl p-5 border border-slate-400">
                    <div className="avatar absolute -top-6 left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <div className="w-40 mask mask-hexagon">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            <div className="w-full h-full bg-green-400">

                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
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
                    </div>
                </div>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat temporibus ab itaque fugiat laborum unde, ratione fugit fuga atque rerum velit. Aspernatur vitae magni perferendis unde quas nostrum ullam obcaecati cumque ab inventore eaque, excepturi consequatur? Incidunt, quod pariatur corporis explicabo accusamus ut ullam vitae tempore, libero omnis eos dolor. Tempore error esse deleniti hic facilis illum placeat asperiores voluptas dignissimos ab a reprehenderit minus ipsum nihil blanditiis ducimus recusandae repellat odio doloremque, quas ipsam. Autem unde amet quod in excepturi adipisci officiis illum voluptatem, vitae ad voluptas corrupti, exercitationem modi pariatur aspernatur delectus quae officia nam eum accusantium laudantium! Repellendus adipisci sit doloremque tempore aspernatur nulla sed nesciunt quibusdam unde, nobis quasi voluptates repellat minus porro nostrum ratione molestiae dicta impedit esse? Necessitatibus corrupti laboriosam, labore amet, culpa voluptates, nisi distinctio ipsam fugiat soluta animi reiciendis? Deleniti voluptatibus dolorem blanditiis tempora aliquam eos itaque possimus earum, repellat maiores. Impedit mollitia at sunt doloremque animi explicabo assumenda? Repudiandae atque aliquam fugiat rerum vel reiciendis. Sit rerum et accusamus itaque facilis at maxime nemo cupiditate, iste debitis vitae voluptatum voluptatem nostrum veniam amet voluptates labore, facere laboriosam, repellendus nesciunt? Sequi sint reprehenderit voluptates molestias consectetur et consequuntur soluta accusamus asperiores.</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat temporibus ab itaque fugiat laborum unde, ratione fugit fuga atque rerum velit. Aspernatur vitae magni perferendis unde quas nostrum ullam obcaecati cumque ab inventore eaque, excepturi consequatur? Incidunt, quod pariatur corporis explicabo accusamus ut ullam vitae tempore, libero omnis eos dolor. Tempore error esse deleniti hic facilis illum placeat asperiores voluptas dignissimos ab a reprehenderit minus ipsum nihil blanditiis ducimus recusandae repellat odio doloremque, quas ipsam. Autem unde amet quod in excepturi adipisci officiis illum voluptatem, vitae ad voluptas corrupti, exercitationem modi pariatur aspernatur delectus quae officia nam eum accusantium laudantium! Repellendus adipisci sit doloremque tempore aspernatur nulla sed nesciunt quibusdam unde, nobis quasi voluptates repellat minus porro nostrum ratione molestiae dicta impedit esse? Necessitatibus corrupti laboriosam, labore amet, culpa voluptates, nisi distinctio ipsam fugiat soluta animi reiciendis? Deleniti voluptatibus dolorem blanditiis tempora aliquam eos itaque possimus earum, repellat maiores. Impedit mollitia at sunt doloremque animi explicabo assumenda? Repudiandae atque aliquam fugiat rerum vel reiciendis. Sit rerum et accusamus itaque facilis at maxime nemo cupiditate, iste debitis vitae voluptatum voluptatem nostrum veniam amet voluptates labore, facere laboriosam, repellendus nesciunt? Sequi sint reprehenderit voluptates molestias consectetur et consequuntur soluta accusamus asperiores.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat temporibus ab itaque fugiat laborum unde, ratione fugit fuga atque rerum velit. Aspernatur vitae magni perferendis unde quas nostrum ullam obcaecati cumque ab inventore eaque, excepturi consequatur? Incidunt, quod pariatur corporis explicabo accusamus ut ullam vitae tempore, libero omnis eos dolor. Tempore error esse deleniti hic facilis illum placeat asperiores voluptas dignissimos ab a reprehenderit minus ipsum nihil blanditiis ducimus recusandae repellat odio doloremque, quas ipsam. Autem unde amet quod in excepturi adipisci officiis illum voluptatem, vitae ad voluptas corrupti, exercitationem modi pariatur aspernatur delectus quae officia nam eum accusantium laudantium! Repellendus adipisci sit doloremque tempore aspernatur nulla sed nesciunt quibusdam unde, nobis quasi voluptates repellat minus porro nostrum ratione molestiae dicta impedit esse? Necessitatibus corrupti laboriosam, labore amet, culpa voluptates, nisi distinctio ipsam fugiat soluta animi reiciendis? Deleniti voluptatibus dolorem blanditiis tempora aliquam eos itaque possimus earum, repellat maiores. Impedit mollitia at sunt doloremque animi explicabo assumenda? Repudiandae atque aliquam fugiat rerum vel reiciendis. Sit rerum et accusamus itaque facilis at maxime nemo cupiditate, iste debitis vitae voluptatum voluptatem nostrum veniam amet voluptates labore, facere laboriosam, repellendus nesciunt? Sequi sint reprehenderit voluptates molestias consectetur et consequuntur soluta accusamus asperiores.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat temporibus ab itaque fugiat laborum unde, ratione fugit fuga atque rerum velit. Aspernatur vitae magni perferendis unde quas nostrum ullam obcaecati cumque ab inventore eaque, excepturi consequatur? Incidunt, quod pariatur corporis explicabo accusamus ut ullam vitae tempore, libero omnis eos dolor. Tempore error esse deleniti hic facilis illum placeat asperiores voluptas dignissimos ab a reprehenderit minus ipsum nihil blanditiis ducimus recusandae repellat odio doloremque, quas ipsam. Autem unde amet quod in excepturi adipisci officiis illum voluptatem, vitae ad voluptas corrupti, exercitationem modi pariatur aspernatur delectus quae officia nam eum accusantium laudantium! Repellendus adipisci sit doloremque tempore aspernatur nulla sed nesciunt quibusdam unde, nobis quasi voluptates repellat minus porro nostrum ratione molestiae dicta impedit esse? Necessitatibus corrupti laboriosam, labore amet, culpa voluptates, nisi distinctio ipsam fugiat soluta animi reiciendis? Deleniti voluptatibus dolorem blanditiis tempora aliquam eos itaque possimus earum, repellat maiores. Impedit mollitia at sunt doloremque animi explicabo assumenda? Repudiandae atque aliquam fugiat rerum vel reiciendis. Sit rerum et accusamus itaque facilis at maxime nemo cupiditate, iste debitis vitae voluptatum voluptatem nostrum veniam amet voluptates labore, facere laboriosam, repellendus nesciunt? Sequi sint reprehenderit voluptates molestias consectetur et consequuntur soluta accusamus asperiores.</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat temporibus ab itaque fugiat laborum unde, ratione fugit fuga atque rerum velit. Aspernatur vitae magni perferendis unde quas nostrum ullam obcaecati cumque ab inventore eaque, excepturi consequatur? Incidunt, quod pariatur corporis explicabo accusamus ut ullam vitae tempore, libero omnis eos dolor. Tempore error esse deleniti hic facilis illum placeat asperiores voluptas dignissimos ab a reprehenderit minus ipsum nihil blanditiis ducimus recusandae repellat odio doloremque, quas ipsam. Autem unde amet quod in excepturi adipisci officiis illum voluptatem, vitae ad voluptas corrupti, exercitationem modi pariatur aspernatur delectus quae officia nam eum accusantium laudantium! Repellendus adipisci sit doloremque tempore aspernatur nulla sed nesciunt quibusdam unde, nobis quasi voluptates repellat minus porro nostrum ratione molestiae dicta impedit esse? Necessitatibus corrupti laboriosam, labore amet, culpa voluptates, nisi distinctio ipsam fugiat soluta animi reiciendis? Deleniti voluptatibus dolorem blanditiis tempora aliquam eos itaque possimus earum, repellat maiores. Impedit mollitia at sunt doloremque animi explicabo assumenda? Repudiandae atque aliquam fugiat rerum vel reiciendis. Sit rerum et accusamus itaque facilis at maxime nemo cupiditate, iste debitis vitae voluptatum voluptatem nostrum veniam amet voluptates labore, facere laboriosam, repellendus nesciunt? Sequi sint reprehenderit voluptates molestias consectetur et consequuntur soluta accusamus asperiores.</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat temporibus ab itaque fugiat laborum unde, ratione fugit fuga atque rerum velit. Aspernatur vitae magni perferendis unde quas nostrum ullam obcaecati cumque ab inventore eaque, excepturi consequatur? Incidunt, quod pariatur corporis explicabo accusamus ut ullam vitae tempore, libero omnis eos dolor. Tempore error esse deleniti hic facilis illum placeat asperiores voluptas dignissimos ab a reprehenderit minus ipsum nihil blanditiis ducimus recusandae repellat odio doloremque, quas ipsam. Autem unde amet quod in excepturi adipisci officiis illum voluptatem, vitae ad voluptas corrupti, exercitationem modi pariatur aspernatur delectus quae officia nam eum accusantium laudantium! Repellendus adipisci sit doloremque tempore aspernatur nulla sed nesciunt quibusdam unde, nobis quasi voluptates repellat minus porro nostrum ratione molestiae dicta impedit esse? Necessitatibus corrupti laboriosam, labore amet, culpa voluptates, nisi distinctio ipsam fugiat soluta animi reiciendis? Deleniti voluptatibus dolorem blanditiis tempora aliquam eos itaque possimus earum, repellat maiores. Impedit mollitia at sunt doloremque animi explicabo assumenda? Repudiandae atque aliquam fugiat rerum vel reiciendis. Sit rerum et accusamus itaque facilis at maxime nemo cupiditate, iste debitis vitae voluptatum voluptatem nostrum veniam amet voluptates labore, facere laboriosam, repellendus nesciunt? Sequi sint reprehenderit voluptates molestias consectetur et consequuntur soluta accusamus asperiores.</p>
        </div>
    );
};

export default Home;