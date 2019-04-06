#!/bin/bash
cd mcd
npm run build
cd ..
python manage.py collectstatic --noinput --clear