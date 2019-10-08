import json
import sys

Entrada = str(sys.argv[1])
Entrada1 = str(sys.argv[2])
class ReaderProject():
    #arquivoDefault= open('Ekirium_Projects\standart.json','r') 

    def  readerProject(self,file,reader):
        with open(file,'r')as g:
            dados=json.load(g)
        reader=dados
        return reader
    pass

#Start Project
rd=  ReaderProject()
listnode=[]
listnode=rd.readerProject(Entrada,Entrada1)
print(listnode)