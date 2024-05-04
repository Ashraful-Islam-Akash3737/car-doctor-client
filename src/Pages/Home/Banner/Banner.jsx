import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[550px] md:[500px] h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 h-full  bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 lg:p-24 md:p-12 p-5">
                        <h2 className="md:text-6xl text-4xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex items-center gap-3 md:gap-5">
                            <button className="btn px-3 md:px-4  btn-primary text-white bg-red-600 border-none">Discover More</button>
                            <button className="btn px-3 md:px-4 btn-outline  btn-secondary text-white">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 h-full  bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 lg:p-24 md:p-12 p-5">
                        <h2 className="md:text-6xl text-4xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex items-center gap-3 md:gap-5">
                            <button className="btn px-3 md:px-4  btn-primary text-white bg-red-600 border-none">Discover More</button>
                            <button className="btn px-3 md:px-4 btn-outline btn-secondary text-white">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 h-full  bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 lg:p-24 md:p-12 p-5">
                        <h2 className="md:text-6xl text-4xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex items-center gap-3 md:gap-5">
                            <button className="btn px-3 md:px-4  btn-primary text-white bg-red-600 border-none">Discover More</button>
                            <button className="btn px-3 md:px-4 btn-outline btn-secondary text-white">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 h-full  bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 lg:p-24 md:p-12 p-5">
                        <h2 className="md:text-6xl text-4xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex items-center gap-3 md:gap-5">
                            <button className="btn px-3 md:px-4  btn-primary text-white bg-red-600 border-none">Discover More</button>
                            <button className="btn px-3 md:px-4 btn-outline btn-secondary text-white">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 h-full  bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 lg:p-24 md:p-12 p-5">
                        <h2 className="md:text-6xl text-4xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex items-center gap-3 md:gap-5">
                            <button className="btn px-3 md:px-4  btn-primary text-white bg-red-600 border-none">Discover More</button>
                            <button className="btn px-3 md:px-4 btn-outline btn-secondary text-white">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute flex items-center left-0 top-0 h-full  bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 lg:p-24 md:p-12 p-5">
                        <h2 className="md:text-6xl text-4xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex items-center gap-3 md:gap-5">
                            <button className="btn px-3 md:px-4  btn-primary text-white bg-red-600 border-none">Discover More</button>
                            <button className="btn px-3 md:px-4 btn-outline btn-secondary text-white">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;