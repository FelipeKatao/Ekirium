function getReader(){
    
    var {PythonShell} = require('python-shell')
    var path = require('path')
    var message="";
    var selectReader ={
        scriptPath: path.join(__dirname,'engine'),
        args:[message]
    }
    var reader = new PythonShell('reader.py',selectReader);
    reader.on('message',function(message){
        if(message!=""){
        let removeEl = document.getElementById('welcome-page');
        let containerEl = removeEl.parentNode;
        containerEl.removeChild(removeEl);
        //Deixar visivel e habilitado partes dos menus//
        let elementWork = document.getElementById('project-page-works');
        elementWork.style.visibility="visible";    
        ActiveMenu();
        }
    })
}

function ActiveMenu(){
    let elemnetItens = document.querySelectorAll('a');
    for(var i=0;i<elemnetItens.length;i++){
        elemnetItens[i].classList.remove('disabled');
    }
    
}

var  bt1 = document.getElementById('open-project');
bt1.addEventListener('click',getReader,false);