//Paginas de estilo
import './public/styles/css/footer.css';
import './public/styles/css/header.css';
import './public/styles/css/forms.css';
import './public/styles/css/blog.css';
// import './src/public/styles/css'
//Se importan el header y footer
import Header from './public/templates/Header';
import Footer from './public/templates/Footer';

//Partes del Blog
import AboutMe from './public/templates/AboutMe';
import Blog from './public/templates/Blog';
import LoginS from './public/templates/LoginS';
import Contact from './public/templates/Contact';
import BlogSide from './public/templates/BlogSide';
//Imagenes Random
import RandomImage from './public/templates/RandomImage';

//Partes del Side
import AuxiliarSide from './public/templates/AuxiliarSide';

import SideFunctions from './public/templates/SideFunctions';

document.getElementById('H').innerHTML = Header();
document.getElementById('F').innerHTML = Footer();

//Events
document.getElementById("About").onclick =  function(){
  document.getElementById('B').innerHTML = AboutMe();
};
document.getElementById("Contact").onclick =  function(){
  document.getElementById('B').innerHTML = Contact();
};

document.getElementById("Login").onclick =  function(){
  document.getElementById('B').innerHTML = LoginS();
};


document.getElementById("Publisher").onclick =  function(){
  document.getElementById('B').innerHTML = Blog(2);
  document.getElementById('side').innerHTML = BlogSide();
  document.getElementById('randomImg').innerHTML = RandomImage();
  if(document.getElementsByClassName('list')!=null)
    AuxiliarSide();
};
/*


document.getElementById('Rol').onclick = function(){
  document.getElementById('B').innerHTML = Blog(3);
  document.getElementById('side').innerHTML = BlogSide();
  document.getElementById('randomImg').innerHTML = RandomImage();
}
*/

