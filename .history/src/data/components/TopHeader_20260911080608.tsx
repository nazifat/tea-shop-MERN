type TopHeaderProps = {
    pageName: string;
    coverImage: string;
}

const TopHeader = ({pageName, coverImage}: TopHeaderProps) => {
    return (
        <div className="bg-green-300 h-96 flex justify-center items-center" 
        style={{ backgroundImage: `url(${coverImage})`, backgroundRepeat: 'no-repeat' } }>
           <p className="text-base-100 text-4xl font-bold">  {pageName} </p>
        </div>
    );
};

export default TopHeader;