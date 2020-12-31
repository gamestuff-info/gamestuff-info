import logo_xeno2 from "./images/xeno2.svg";

const sites = [
    {
        name: "Xenoblade Chronicles 2: Management Simulator",
        image: logo_xeno2,
        link: "https://xeno2.gamestuff.info/"
    },
    // {
    //     name: "Pokétools",
    //     image: logo_poketools,
    //     link: "https://poketools.gamestuff.info"
    // },
];

function Header(props) {
    return (
        <header className="mb-auto">
            <div>
                <h1 className="display-4">gamestuff.info</h1>
            </div>
        </header>
    );
}

function Site(props) {
    const site = props.site;
    return (
        <div className="site-link">
            <a href={site.link}>
                <img src={site.image} alt={site.name}/>
            </a>
        </div>
    );
}

function Footer(props) {
    return (
        <footer className="mt-auto">
            <p><a href="https://github.com/gamestuff-info">Contribute to development</a></p>
        </footer>
    );
}

function App() {
    const siteLinks = sites.map((site) => <Site key={site.name} site={site}/>);

    return (
        <div className="d-flex h-100 p-3 mx-auto flex-column">
            <Header/>
            <main>
                <div className="site-links">
                    {siteLinks}
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
