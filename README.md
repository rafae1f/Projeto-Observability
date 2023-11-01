# Projeto-Observability

## Descrição do Projeto
Projeto desenvolvido para a disciplina de Observability do curso de DevOps da Ada Tech + Núclea.

Professor: [Israel Nogueira](https://www.linkedin.com/in/israel-lnogueira/)

Alunos: [Rafael Ferreira](https://www.linkedin.com/in/rafae1f/), [Vanessa Schnee](https://www.linkedin.com/in/vanessa-schnee/), [Ana Beatriz](https://www.linkedin.com/in/ana-beatriz-ferraz-078420156/), [Laysa Belici](https://www.linkedin.com/in/laysabelici/)

## Objetivo
O objetivo do projeto é instrumentar uma aplicação de exemplo com as ferramentas de observabilidade:\
Prometheus, AlertManager, Grafana e Graylog.

## Tecnologias
- AWS
- Docker
- Docker Compose
- Prometheus
- Alertmanager
- Grafana
- Graylog

## Execução
Para executar o projeto, basta seguir o guia abaixo:

COMANDOS ÚTEIS

Executar o docker-compose informando o arquivo .env
```bash
docker-compose -p projeto  --env-file .env up -d
```
Remover todos os containers
```bash
docker rm -f $(docker ps -a -q)
```

Fazer o download da stack para provisionamento da infraestrutura e configuração do ambiente:\
Link Stack para Cloud Formation: https://github.com/rafae1f/Projeto-Observability/blob/main/stack-cloudformation.yml

**Importante!** informe seu ip na hora de subir a stack para que seja liberado o acesso pelo security group 
Site para consulta: https://ipcost.com/pt

Tipo de instância EC2: **t3.medium** (Padrão)

Aguarde em torno de 7 minutos para completar a criação da stack e inicializar a instância EC2\
Recomendo aguardar a verificação da instância 2/2 para que tudo funcione corretamente

navegar para o diretório home/ssm-user
```bash
cd
```
```bash
cat .env
```
copie o ip INSTANCE_IP

Em seu navegador web acesse o graylog atraves do ip publico da instância EC2 copiado no passo anterior utilizando a porta 9000\
${INSTANCE_IP}:9000

Login: admin | Senha: admin

System -> Inputs -> Select Input\
Selecione a opção: **GELF TCP** -> Launch new input

Marque a opção **Global**, escolha um título\
confira se a Port está definida como: **12201**\
Save

Retorne para EC2
```bash
docker-compose -p projeto  --env-file .env up -d
```

Acesse o Grafana através do ip publico da instância EC2 utilizando a porta 3000\
${INSTANCE_IP}:3000

Login: admin | Senha: admin

Importe o dashboard do Prometheus: Create -> Import -> Upload JSON file\
Selecione o arquivo: Dashboard.json -> Selecione o data source: Prometheus -> Import
