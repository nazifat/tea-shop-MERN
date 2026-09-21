type TopHeaderProps = {
    pageName: string;
}

const TopHeader = ({pageName}: TopHeaderProps) => {
    return (
        <div className="bg-green-300 h-96 flex justify-center items-center" >
           <p className="text-black-100 text-4xl font-bold"> This is {pageName} page</p>
        </div>
    );
};

export default TopHeader;