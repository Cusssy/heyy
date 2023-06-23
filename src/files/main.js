const outputDiv = document.getElementById('output');
const inputElement = document.getElementById('input');

outputDiv.innerHTML += '<h1>Bienvenido!</h1>';
outputDiv.innerHTML += "<p>Comandos que te pueden ayudar<br><br>'help' para ver la lista de comandos<br>'repo' ver mis repositorios disponibles</p>";

function processCommand(command) {
command = command.trim();

if (command === 'help') {
    outputDiv.innerHTML += '<br>Lista de comandos <br> -   info: mis cosas <br> -  repo: lista de mis proyectos <br> -    heyy: heyy <br> -    clear limpiar terminal<br> -    github: directo a mi github <br><br>';
} else if (command === 'mycommand') {
    outputDiv.innerHTML += 'Este es mi propio comando!<br>';
} else if (command === 'clear') {
    outputDiv.innerHTML = '';
} else if (command === 'exit') {
    outputDiv.innerHTML += 'Bye bye!<br>';
} else if (command === 'info') {
    outputDiv.innerHTML += "Version 1.0.0<br> Twitter: <a href='https://twitter.com/cusssy_'>cusssy_</a><br>discord: cusssy<br> Github: <a href='https://github.com/Cusssy'>Cusssy</a><br>";
} else if (command === 'repo') {
    outputDiv.innerHTML += 'Lista de mis proyectos<br><br> -    <a href="https://github.com/Cusssy/tweet-cutter">Tweet cutter</a><br><br>Cree esta pagina web usando ChatGPT para poder ver todo el potencia que puede dar esta IA, puedo asegurar que no habre editado mas de 20 lineas de codigo en total, 99% lo ha hecho la IA, asique nada mas este proyecto se va a quedar aqui pero no creo que le haga muchos cambios en un futuro<br><br> URL: <a href="https://cutter.cusssy.com">Tweet Cutter</a><br><br> -    <a href="https://github.com/Cusssy/WordFinder">WordFinder</a><br><br>Un sencillo programa que usa la whisper la inteligencia artificia de OpenAI para transcribir todos tus videos/audios a texto el cual sera almacenado en una base de datos de mongoDB.<br><br> -    WordFinder_Twtich<br> <br>Mismo funcionamiento a WordFinder pero para Twitch, descarga todos los clips de un canal, los procesa y los sube a la base de datos de mongoDB.<br><br> <p style="color: red">Aun no esta disponible aun</p><br><br>';
} else if (command === 'heyy') {
    outputDiv.innerHTML += 'Heyy!<br>';
} else if (command === 'github') {
    window.location.href = "https://github.com/Cusssy";
}
else {
    outputDiv.innerHTML += `Command not found: ${command}<br>`;
}

inputElement.value = '';
outputDiv.scrollTop = outputDiv.scrollHeight;
}

inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const command = inputElement.value;
        outputDiv.innerHTML += `<span class="hostname">guest@cusssy.com</span><span>:</span><span class="hostname2">~</span><span>$</span> ${command} <br>`;
        processCommand(command);
    }
});

