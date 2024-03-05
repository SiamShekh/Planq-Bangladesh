import { Link } from "react-router-dom";

const Featured_Blog = () => {
    return (
        <div className="mt-10">
            <p className="font-Teko uppercase text-2xl border-l-4 border-green-700 pl-3">Planq's Blog</p>

            <div className="grid mt-3 md:grid-cols-3 gap-5">

                <div className=" bg-white p-5 border border-gray-300 rounded-lg">
                    <img src="https://cdn-images-1.medium.com/v2/resize:fit:768/1*KwSBBobuMDwWqQkRcOK5SA.jpeg" className="w-full rounded-lg" />
                    <p className="font-Teko text-xl text-justify line-clamp-2 font-medium">Title: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, itaque.</p>
                    <p className="font-mono text-xs text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae delectus sit ipsam consectetur, omnis iusto reiciendis corrupti minus dolorum sequi.</p>
                    <Link className="text-blue-500 text-xl font-Teko" to={'#'}>Read more</Link>
                </div>

                <div className=" bg-white p-5 border border-gray-300 rounded-lg">
                    <img src="https://cdn-images-1.medium.com/v2/resize:fit:768/1*KwSBBobuMDwWqQkRcOK5SA.jpeg" className="w-full rounded-lg" />
                    <p className="font-Teko text-xl text-justify line-clamp-2 font-medium">Title: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, itaque.</p>
                    <p className="font-mono text-xs text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae delectus sit ipsam consectetur, omnis iusto reiciendis corrupti minus dolorum sequi.</p>
                    <Link className="text-blue-500 text-xl font-Teko" to={'#'}>Read more</Link>
                </div>

                <div className=" bg-white p-5 border border-gray-300 rounded-lg">
                    <img src="https://cdn-images-1.medium.com/v2/resize:fit:768/1*KwSBBobuMDwWqQkRcOK5SA.jpeg" className="w-full rounded-lg" />
                    <p className="font-Teko text-xl text-justify line-clamp-2 font-medium">Title: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, itaque.</p>
                    <p className="font-mono text-xs text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae delectus sit ipsam consectetur, omnis iusto reiciendis corrupti minus dolorum sequi.</p>
                    <Link className="text-blue-500 text-xl font-Teko" to={'#'}>Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default Featured_Blog;