Name: Alexandre Zanatta
github.com/azanatta83/desafio2

Boa noite!

Desculpem a demora no envio do desafio. Estive de férias por muito tempo e posteriormente dedicado com projeto em minha empresa.

Gostaria tambem de agradecer a oportunidade de participar do desafio.

Basicamente a infraestrutura é uma VM Ubuntu 16.04 (instalado do zero) que roda em cima de um VMWare com 4 núcleos de processadores. 1GB de RAM.

O "desenrolar" do desafio todo se dá pelo arquivo "apt_steps.txt". E os codigos fontes estão também estão juntos no publico desse branch do github. 

A versão do node instalada é a 10.15.1.

Acabei criando 2 formas de balanceamento. 
1. Usando pm2 com root.hs
2. Usando o balancer.js que distribui a carga nos 8081.js, 8082.js, 8083.js, 8084.js.

Acabei adotando o pm2 pois parece gerenciar melhor os processos, além de que se uma instancia fica DOWN, ele faz o UP automaticamente. 

Pensei em criar um script pra gerenciar o balancer e seu sub-processos, mas não achei necessário.

Configurei um apache bem simples! Apenas porta 80 pra testar as mesmas e principalmente ver se estava fazendo a distribuicao das portas do balancer.js (com mensagem na tela de cada porta) de forma correta.

Configurei um ssmtp pra envio de notificações, pela facilidade do mesmo.

Acabei usando o siege para testes de stress com 2000 requisições concorrentes, durante 30 segundos.

Criei um script pra levantar o Apache automaticamente depois de uma queda do mesmo, criando um log e enviando por email.

O relatório diário com com frequência das requisições é um filtro do /var/log/apache2/access.log, podendo gerar um novo arquivo e enviado por email da mesma forma. Caso queiram que evolua isso, sem problemas.

Resumindo é isso. Tentei fazer o mais simples possível, apenas pra demostrar a linha de raciocínio. Como falei, se acharem pertinente evoluir melhor algum dos requisitos, favor não hesitem em cobrar.

Obrigado mais uma vez e espero ter superado expectativas.

:-)
