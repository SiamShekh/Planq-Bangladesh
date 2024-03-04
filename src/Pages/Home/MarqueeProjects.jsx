import Marquee from "react-fast-marquee";
import HomeImageViewer from "../../Hook/HomeImageViewer";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MarqueeProjects = () => {
    return (
        <div className="relative mt-20 ">
            <Marquee speed={100} gradientWidth={200} gradient className="z-0  bg-gradient-to-r ">
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9770b285ecd94682a83d82643e538cdf%252Ffc904c2d2f9d4cc8b2440df64716ec4a&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252Fbcce17edbead49668f5056fb7e56a33c&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252F7477e7b9ca11479daaa0c55269aa1c95&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252F07f132392a734fecb8eee95fe6c9feeb&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252F571498520c9d4feb8e1c97f6c2c23c23&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252F79c76ad9a77548d28bbce80c2e03374b&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252F3a1f84d6ae8e45469f95ee09d953c87d&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252Feef859f528da476faf1c82d0b38f6c4d&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252Fb70a351c339c4c518b3dcca18a7367aa&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252F1e9ef5680eaf4a6cabce219a9e88836b%3Fformat%3Dwebp&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252F67ae30720e0f43949680f867f33e8221&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252F178d87f90d5341e3af8f5b117a658c36&w=96&q=75'} />
                <HomeImageViewer url={'https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fc92d0d771f2a433b8e0b2fb2ad5abd5e%252F2b5b31691d454270927951899e2addde&w=96&q=75'} />
                <HomeImageViewer url={''} />

            </Marquee>
            <div className="bg-white opacity-60 w-full h-full z-10 absolute top-0"></div>
            <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="font-Teko lg:text-5xl text-black font-bold text-center text-2xl">আরো প্রকাশ করা হবে</p>
                <p className="text-gray-700 font-mono text-center hidden lg:flex">Planq কে সব জায়গায় ব্যাবহার করতে পারবেন, যেখানে Crypto রয়েছে।</p>

                <Link to={'https://discord.com/invite/planq-network'}>
                    <div className="bg-blue-500 px-5 py-3 items-center w-fit flex gap-3 justify-center rounded-2xl mx-auto mt-5">
                        <FaDiscord className="text-white text-xl" />
                        <p className="text-white text-xl lg:flex hidden font-mono text-center">Join Planq Discord</p>
                        <p className="text-white text-xl font-mono text-center">Discord</p>

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MarqueeProjects;