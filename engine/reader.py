import sys
from tkinter import Tk
from tkinter.filedialog import askopenfilename

Tk().withdraw()
filename = askopenfilename()

message= str(sys.argv[1])+": "+filename

print(filename)
    