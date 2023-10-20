export const Header = ({ }) => {
    return (
        <div className="MainHeader">
            <h1>New Albums & Singles</h1>
            <h2 className="subheading">Diana & Rebecca, Team Pineapple</h2>
        </div>
    );
};

Header.defaultProps = {
    header: "No header",
};