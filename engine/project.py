import json
import sys

class ReaderProject():
    #arquivoDefault= open('Ekirium_Projects\standart.json','r')

    def  readerProject(self,file,reader):
        with open(file,'r')as g:
            dados=json.load(g)
        reader=dados
        return reader
    pass


rd=  ReaderProject()
listnode=[]
listnode=rd.readerProject(R"C:\Users\Windows 8\Formiga Arquivos\Projetos\Ekirium\Ekirium_Projects\standart.json",listnode)
print(listnode)