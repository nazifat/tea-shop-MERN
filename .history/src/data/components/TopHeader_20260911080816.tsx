type TopHeaderProps = {
    pageName: string;
    coverImage: string;
}

const TopHeader = ({pageName, coverImage}: TopHeaderProps) => {
    return (
        <div className="bg-green-300 h-96 flex justify-center items-center" 
        style={{ backgroundImage: `url(${coverImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'darken'} }>
           <p className="text-white text-4xl font-bold">  {pageName} </p>
        </div>
    );
};

export default TopHeader;