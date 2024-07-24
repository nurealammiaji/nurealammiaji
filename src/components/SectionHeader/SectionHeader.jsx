
const SectionHeader = ({header, message}) => {
    return (
        <div>
            <h5 className="mt-10 mb-5 text-xl">{header}</h5>
            <h2 className="mb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{message}</h2>
        </div>
    );
};

export default SectionHeader;