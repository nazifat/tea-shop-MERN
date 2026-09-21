type TopHeaderProps = {
    pageName: string;
}

const TopHeader = ({pageName}: TopHeaderProps) => {
    return (
        <div className="bg-green-300 h-96 flex justify-center" >
            This is {pageName} page
        </div>
    );
};

export default TopHeader;