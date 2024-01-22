
const SectionTitle = ({ title, des }) => {
    return (
        <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-start py-4 px-10 font-PlayFair">{title}</h3>
            <p className="w-[400px] mx-auto mt-2 text-dark-gray">{des}</p>
        </div>
    );
};

export default SectionTitle;