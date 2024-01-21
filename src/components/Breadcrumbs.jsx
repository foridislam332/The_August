import { Link } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
    return (
        <div className='bg-[url("https://i.ibb.co/H4r1v7X/team.webp")] bg-fixed top-0 bg-right-top bg-no-repeat bg-cover xl:bg-center'>
            <div className='bg-black/70 py-24 md:py-28'>
                <h1 className='text-center font-semibold text-white text-4xl leading-snug md:text-6xl md:leading-snug uppercase drop-shadow-lg'>{title}</h1>
                <div className='text-white font-medium text-lg capitalize flex items-center justify-center gap-2'>
                    <Link to='/' className="hover:text-yellow hover:underline duration-300">Home</Link>
                    <span className='text-yellow'>/</span>
                    <span className='text-white'>{title}</span>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;