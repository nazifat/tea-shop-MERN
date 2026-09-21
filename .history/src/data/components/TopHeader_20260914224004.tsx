type TopHeaderProps = {
    pageName: string;
    coverImage: string;
}

const TopHeader = ({ pageName, coverImage }: TopHeaderProps) => {
    return (
        <div className="relative bg-green-300 h-96 flex justify-center items-center"
            style={{ backgroundImage: `url(${coverImage})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Title */}
            <p className="relative z-10 text-white text-4xl font-bold">
                {pageName}
            </p>

        </div>
    );
};

export default TopHeader;