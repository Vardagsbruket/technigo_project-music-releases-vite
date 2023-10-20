export const Header = () => {
    return (
        <div className="header">
            <h1>New Albums & Singles</h1>
            <h2>A project by Diana Undén and Rebecca Higson</h2>
            <p>🍍 Team Pineapple 🍍</p>
        </div>
    );
};

Header.defaultProps = {
    header: "No header",
};