const RandomImage = () => {
    const x = Math.floor(Math.random()*9)+1;
    console.log(x);
    const view =
        `
            <h3>Imagen Random:</h3>
            <img src='../src/public/assets/images/`+x+`.jpg' alt='imagenrandom'>
        `;  
        return view;
};

export default RandomImage;