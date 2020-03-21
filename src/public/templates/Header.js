const Header = () => {
    const view =
        `
        <header>
            <div class='left'>
                <div>
                <img src="../src/public/assets/icons/gato.png" alt="Michi">
                </div>
                <h2><a href="">Neko-developer</a></h2>
            </div>
            <div class='rigth'>
                    <button id='Publisher'> Publicaciones </button>
                    <button id='Contact'>Contactame </button>
                    <button id='About'> Sobre mi </button>
                    <button id='Login'> Inicia Sesion </button>
            </div>
            
        </header>
        `;  
        return view;
};

export default Header;