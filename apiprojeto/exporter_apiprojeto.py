# requests para fazer requisições HTTP
import requests
# json para converter o resultado em JSON
import json
# time para fazer o sleep
import time
# Importa o módulo prometheus_client para criar as métricas
from prometheus_client import (
    CollectorRegistry,
    Counter,
    Histogram,
    generate_latest,
    multiprocess,
)

registry = CollectorRegistry()
multiprocess.MultiProcessCollector(registry)

PROM_GRAPHQL_REQUEST_TIME = Histogram(
    'request_processing_seconds',
    'Time spent processing an API request',
)

PROM_PAGEVIEWS = Counter(
    'pageviews',
    'Number of pageviews',
)

def registry_to_text():
    return generate_latest(registry)


# Função principal
if __name__ == '__main__':

    # Inicia o servidor HTTP na porta 8000
    start_http_server(8000)

    # Cria as métricas
    g = Gauge('api_projeto', 'API Projeto')
    c = Counter('api_projeto_counter', 'API Projeto Counter')

    # Loop infinito
    while True:
        # Faz a requisição HTTP
        r = requests.get('http://localhost:5000/')

        # Converte o resultado em JSON
        data = json.loads(r.text)

        # Define o valor da métrica
        g.set(data['valor'])

        # Incrementa o contador
        c.inc()

        # Aguarda 5 segundos
        time.sleep(5)
