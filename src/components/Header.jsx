import chefIcon from '/src/assets/icons/Chef Claude Icon.png' 

function Header() {
    return (
        <header className="header">
            <img src={chefIcon} alt="chef icon" className="chef-icon" />
            <h1 className="header-title">Chef Claude</h1>
        </header>
    )
}

export default Header