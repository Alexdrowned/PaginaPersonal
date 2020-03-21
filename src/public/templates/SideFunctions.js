import Blog from './Blog';
import BlogSide from './BlogSide';
import RandomImage from './RandomImage';
import AuxiliarSide from './AuxiliarSide';
const SideFunctions = (number) => {
    switch (number) {
        case 1:
            document.getElementById('Dm').onclick = function(){
                document.getElementById('B').innerHTML = Blog(2);
                document.getElementById('side').innerHTML = BlogSide();
                document.getElementById('randomImg').innerHTML = RandomImage();
                if(document.getElementsByClassName('list')!=null)
                    AuxiliarSide();   
            }
            break;
        case 2:
            document.getElementById('Proyect').onclick = function(){
                document.getElementById('B').innerHTML = Blog(3);
                document.getElementById('side').innerHTML = BlogSide();
                document.getElementById('randomImg').innerHTML = RandomImage();
                if(document.getElementsByClassName('list')!=null)
                    AuxiliarSide();   
            }
            break;

        case 3:
            document.getElementById('Lol').onclick = function(){
                document.getElementById('B').innerHTML = Blog(4);
                document.getElementById('side').innerHTML = BlogSide();
                document.getElementById('randomImg').innerHTML = RandomImage();
                if(document.getElementsByClassName('list')!=null)
                    AuxiliarSide();   
            }
            break;
        case 4:
            document.getElementById('Git').onclick = function(){
                document.getElementById('B').innerHTML = Blog(5);
                document.getElementById('side').innerHTML = BlogSide();
                document.getElementById('randomImg').innerHTML = RandomImage();
                if(document.getElementsByClassName('list')!=null)
                    AuxiliarSide();   
            }
            break;
        case 5:
            document.getElementById('Rol').onclick = function(){
                document.getElementById('B').innerHTML = Blog(6);
                document.getElementById('side').innerHTML = BlogSide();
                document.getElementById('randomImg').innerHTML = RandomImage();
                if(document.getElementsByClassName('list')!=null)
                    AuxiliarSide();   
            }
            break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }
      
            
};

export default SideFunctions;

