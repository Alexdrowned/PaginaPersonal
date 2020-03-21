const Contact = () => {
    const view =
        `
        <form>
            <label for='nameform'>Nombre(O como te hagas llamar):</label>
            <input type='text' id='nameform' name='nameform' placeholder='Nombre...'>
            <label for='topicform'>Asunto:</label>
            <input type='text' id='topicForm' name='topic' placeholder='Asunto...'>
            <label for='mensaje'>Mensaje:</label>
            <textarea name='message' rows='1' cols='70' placeholder='Mensaje...'></textarea> 
            <input type='submit' value='Submit'>
        </form>
       <br><br>
        `;  
        return view;
};

export default Contact;