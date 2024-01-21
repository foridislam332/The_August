
const SectionTitle = ({ title, des }) => {
    return (
        <div className="text-center">
            <h3 className="text-4xl text-dark font-semibold drop-shadow-lg border-b border-dashed border-blue px-4 pb-1 w-fit mx-auto">{title}</h3>
            <p className="w-[400px] mx-auto mt-2 text-dark-gray">{des}</p>
        </div>
    );
};

export default SectionTitle;