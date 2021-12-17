# Serverless Challenge

### Link para [Documentação Externa](https://foggy-drug-9b5.notion.site/Documenta-o-Serverless-Challenge-706933dc6808486ca1856ea28e235bfa)

Desafio realizado com base no seguinte repositório: https://github.com/dornellas13/serverless-challenge

---

## Documentação de API
#### Endpoint: https://w6jb0xnc4i.execute-api.sa-east-1.amazonaws.com/dev/

### Funcionalidades na rota /funcionario
##### Create - POST > Endpoint/rota
```bash
{
	"nome": "Thiago",
	"idade": 21,
	"cargo": "Desenvolvedor Node.js"
}
```

##### Read - GET > Endpoint/rota/id
```bash
https://w6jb0xnc4i.execute-api.sa-east-1.amazonaws.com/dev/funcionario/1
```

##### Update - PUT > Endpoint/rota/id
```bash
https://w6jb0xnc4i.execute-api.sa-east-1.amazonaws.com/dev/funcionario/1

{
	"nome": "Stephen Hawking",
	"idade": 76,
	"cargo": "Doutor em cosmologia"
}
```

##### Delete - DELETE > Endpoint/rota/id
```bash
https://w6jb0xnc4i.execute-api.sa-east-1.amazonaws.com/dev/funcionario/1
```
