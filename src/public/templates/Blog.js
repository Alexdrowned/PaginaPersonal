const Blog = (number) => {
    const npublics ={1:
        `
        <div id='blog'>
            <div id='card'>
                <h1>Esta es una publicacion secreta</h1>
                <img src='../src/public/assets/images/Kirby-sentado.jpg' alt='Kirby'>
                <p>Por favor no le digas a nadie... o kirby te comera</p>
            </div>
            <div id='side'>  
            </div>
        </div>
        `,
        2:
        `
        <div id='blog'>
            <div  id='card'>
                <h1>Doom (2016): Opinion </h1>
                <img src='../src/public/assets/images/doom.jpg' alt='Doom'>
                <p></p>
            </div>
            <div id='side'>  
            </div>
        </div>
        `,
        3:
        `
        <div id='blog'>
            <div  id='card'>
                <h1>Organizacion en Proyectos:</h1>
                <img src='../src/public/assets/images/organizacion.jpg' alt='Organizados'>
                <p></p>
            </div>
            <div id='side'>  
            </div>
        </div>
        `,
        4:
        `
        <div id='blog'>
            <div id='card'>
                <h1>League of Legends</h1>
                <img src='../src/public/assets/images/LoL.jpg' alt='Lol'>
                <p></p>
            </div>
            <div id='side'>  
            </div>
        </div>
        `,
        5:
        `
        <div id='blog'>
            <div id='card'>
                <h1>Git</h1>
                <img src='../src/public/assets/images/git.jpg' alt='Git'>
                <p></p>
            </div>
            <div id='side'>  
            </div>
        </div>
        `,
        6:
        `
        <div id='blog'>
            <div id='card'>
                <h1>Juegos de rol</h1>
                <img src='../src/public/assets/images/rolplay.jpg' alt='role'>
                <p></p>
            </div>
            <div id='side'>  
            </div>
        </div>
        `,
    };  
        return npublics[number];
};

export default Blog;