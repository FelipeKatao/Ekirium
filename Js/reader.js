function getReader(){
    var {PythonShell} = require('python-shell')
    var path = require('path')
    var message="hello world";
    var selectReader ={
        scriptPath: path.join(__dirname,'engine'),
        args:[message]
    }
    var reader = new PythonShell('reader.py',selectReader);
    reader.on('message',function(message){
        alert(message);
    })
}

var  bt1 = document.getElementById('active');
bt1.addEventListener('click',getReader,false);