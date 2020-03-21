//Paginas de estilo
import './public/styles/css/footer.css';
import './public/styles/css/header.css';

// import './src/public/styles/css'
import Header from './public/templates/Header';
import Footer from './public/templates/Footer';
import AboutMe from './public/templates/AboutMe';

document.getElementById('H').innerHTML = Header();
document.getElementById('F').innerHTML = Footer();

//document.getElementById('app')
/*var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
*/

document.getElementById("About").onclick =  function(){
  document.getElementById('B').innerHTML = AboutMe();
};