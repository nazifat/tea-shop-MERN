type TopHeaderProps = {
    pageName: string;
}

const TopHeader = ({pageName}: TopHeaderProps) => {
    return (
        <div className="bg-green-300 h-96 flex justify-center items-center" >
           <h2 className="text-white-100 text-7xl font-bold"> This is {pageName} page</h2>
        </div>
    );
};

export default TopHeader;