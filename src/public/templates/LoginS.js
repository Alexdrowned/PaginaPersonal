const LoginS= () => {
    const view =
        `
        <div class="login">
                  <article>
                    <form action="" method="POST">
                        
                        <div class='container'>
                            <label><h2>Inicia Sesion</h2></label> 
                            <label>Usuario: </label> 
                            <input type="text" name="User" maxlength="20" size="5"/> 
                            <label>Contraseña: </label> 
                            <input type="password" name="Password" maxlength="20" size="15"/> 
                            <input type="submit" value="Iniciar" />
                        </div>  
                    </form>
                  </article>
                </div>
        `;  
        return view;
};

export default LoginS;