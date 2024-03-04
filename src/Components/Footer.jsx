import { FaDiscord, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-white  border-t">
            <footer className="footer mx-auto max-w-[1200px] items-center p-4 bg-white  text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <img src="https://planq.network/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9770b285ecd94682a83d82643e538cdf%252F352051f7ea1344578a069ae40f99d9d1&w=96&q=75" alt="" className="w-7 h-7" />

                    <p className="text-gray-600">Copyright © 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <FaDiscord className="w-10 text-gray-600 h-10"/>
                    <FaTwitter className="h-10 w-10 text-gray-600"/>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;