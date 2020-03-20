//Paginas de estilo
import './public/styles/css/footer.css';
import './public/styles/css/header.css';

// import './src/public/styles/css'
import Header from './public/templates/Header';
import Footer from './public/templates/Footer';

document.getElementById('H').innerHTML = Header();
document.getElementById('F').innerHTML = Footer();