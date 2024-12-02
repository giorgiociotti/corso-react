function Link({ children, href }) {
    return (
        <a href={href} className="link">
            {children}
        </a>
    );
}

export default Link;