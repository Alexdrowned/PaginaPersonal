import SideFunctions from './SideFunctions'
const AuxiliarSide = () => {
    if(document.getElementById('Dm')!=null) 
        SideFunctions(1);
    if(document.getElementById('Proyect')!=null) 
        SideFunctions(2);
    if(document.getElementById('Lol')!=null) 
        SideFunctions(3);
    if(document.getElementById('Git')!=null) 
        SideFunctions(4);
    if(document.getElementById('Rol')!=null) 
        SideFunctions(5); 
};

export default AuxiliarSide;

