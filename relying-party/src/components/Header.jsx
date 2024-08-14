import './Header.css'

function Header(props) {
    return (
        <header id='page-header'>
            <img id="logo" src="./images/volunteer-logo.jpg" alt="Volunteer websites logo" />
            <div class="title">
                <h1>{props.pagetitle}</h1>

            </div>
        </header>
    );
}

export default Header;