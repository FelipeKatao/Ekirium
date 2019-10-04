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
        let removeEl = document.getElementById('welcome-page');
        let containerEl = removeEl.parentNode;
        containerEl.removeChild(removeEl);
        let elementWork = document.getElementById('project-page-works');
        elementWork.style.visibility="visible";

    })
}

var  bt1 = document.getElementById('open-project');
bt1.addEventListener('click',getReader,false);