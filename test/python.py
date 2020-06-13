import sys
import requests
import json
from tabulate import tabulate
table = [["Sun",696000,1989100000],["Earth",6371,5973.6],["Moon",1737,73.5],["Mars",3390,641.85]]
tablecopy = ["Sun",696000,1989100000,"Earth",6371,5973.6,"Moon",1737,73.5,"Mars",3390,641.85]
data=tabulate(table)
print(tablecopy)
