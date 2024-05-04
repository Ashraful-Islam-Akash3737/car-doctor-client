import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-white my-10">
            <div className="hero-content flex-col lg:flex-row gap-28 lg:gap-16">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg absolute right-0 -bottom-16 border-8 border-white shadow-2xl" />
                </div>
                <div className="lg:w-1/2 space-y-6 ">
                    <h3 className="text-3xl font-bold text-orange-500">About Us</h3>
                    <h1 className="text-4xl md:text-5xl font-bold w-11/12 md:w-10/12">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                    <button className="btn px-3 md:px-4  btn-primary bg-red-600 border-none text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;