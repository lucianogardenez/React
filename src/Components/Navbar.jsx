    import CartWidget from "./CartWidget";
    
    const Navbar = () => {
        return (
            <header>
                <span className="tittle">AppleRos</span>
                <span className="cat">Iphone</span>
                <span className="cat">Mac</span>
                <span className="cat">Apple Watch</span>
                <span className="cat">AirPods</span>
                <span className="icon"><CartWidget /></span>
            </header>
        )
    }

    export default Navbar;