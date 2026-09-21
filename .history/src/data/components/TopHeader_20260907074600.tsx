type TopHeaderProps = {
    pageName: string;
}

const TopHeader = ({pageName}: TopHeaderProps) => {
    return (
        <div>
            This is {pageName} page
        </div>
    );
};

export default TopHeader;