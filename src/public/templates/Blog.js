const Blog = (number) => {
    const npublics ={1:
        `
        <div id='blog'>
            <div id='card'>
                <h1>Esta es una publicacion secreta</h1>
                <img src='../src/public/assets/images/Kirby-sentado.jpg' alt='Kirby'>
                <p>Por favor no le digas a nadie... o kirby te comera</p>
            </div>
            <div id='slide'>
                <header>
                    <h3>Publicaciones</h3>
                </header>
                <div id='randomImg'>
                </div>
                <h4>Otras publicaciones</h4>
                <ul>
                    <li>Doom: Opinion</li>
                    <li>Organizacion en Proyectos</li>
                    <li>League of Legends: Opinion</li>
                    <li>Git simplemente deberias amarlo</li>
                    <li>Juegos de Rol: Primer experiencia</li>
                </ul>  
            </div>
        </div>
        `,
        2:
        `
        <div id='blog'>
            <div>
                <h1>Esto deberia ser un Texto</h1>
                <img src='' alt=''>
                <p></p>
            </div>
            <div>
                <p>Esto es una barrita mas pequeña</p>
            </div>
        </div>
        `,
        3:
        `
        <div id='blog'>
            <div>
                <h1>Esto deberia ser un Texto</h1>
                <img src='' alt=''>
                <p></p>
            </div>
            <div>
                <p>Esto es una barrita mas pequeña</p>
            </div>
        </div>
        `,
        4:
        `
        <div id='blog'>
            <div>
                <h1>Esto deberia ser un Texto</h1>
                <img src='' alt=''>
                <p></p>
            </div>
            <div>
                <p>Esto es una barrita mas pequeña</p>
            </div>
        </div>
        `,
        5:
        `
        <div id='blog'>
            <div>
                <h1>Esto deberia ser un Texto</h1>
                <img src='' alt=''>
                <p></p>
            </div>
            <div>
                <p>Esto es una barrita mas pequeña</p>
            </div>
        </div>
        `,
        6:
        `
        <div id='blog'>
            <div>
                <h1>Esto deberia ser un Texto</h1>
                <img src='' alt=''>
                <p></p>
            </div>
            <div>
                <p>Esto es una barrita mas pequeña</p>
            </div>
        </div>
        `,
    };  
        return npublics[number];
};

export default Blog;