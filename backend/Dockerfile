FROM python:3.10-slim-buster
ENV PYTHONBUFFERED 1
ENV PYTHONDONTWEITEBYTECODE 1
RUN pip install --upgrade pip

RUN mkdir /app
COPY . /app
WORKDIR /app

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

RUN python manage.py makemigrations
RUN python manage.py migrate