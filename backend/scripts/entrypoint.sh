#!/bin/sh


set -e
python manage.py collectstatic --noinput

uwisgi --socket :8--- --master --enable-threads --module app.wsgi