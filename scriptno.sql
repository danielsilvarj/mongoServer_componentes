# mongod

# mongo

#Criando e entrando
use banco_componentes;

# mongo colecao

db;


db.aluno.insertMany([
    {
        "codigo": 1,
        "nome":"alexandre",
        "sexo": "m",
        "idade": 15
    },
    {
        "codigo": 2,
        "nome":"lu",
        "sexo": "f",
        "idade": 18
    }
])