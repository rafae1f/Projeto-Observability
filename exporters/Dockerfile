FROM python:3.8-slim
LABEL description="Dockerfile para criar o exporter para o Prometheus"
COPY . .
RUN pip3 install -r requirements.txt
CMD python3 exporter_wordpress.py
```