from django.shortcuts import render

from django.views.generic import View
from django.http import HttpResponse
from django.http import JsonResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

from rest_framework.views import APIView
from .mcdonalds import retrieveCode

import json
import urllib

# Create your views here.
class FillingRequestView(APIView):
  def get(self, request):
    print(request)
    code1 = request.GET.get('code1', '')
    code2 = request.GET.get('code2', '')
    code3 = request.GET.get('code3', '')
    amountPound = request.GET.get('amountPound', '')
    amountPence = request.GET.get('amountPence', '')
    recaptcha = request.GET.get('recaptcha')

    ''' Begin reCAPTCHA validation '''
    url = 'https://www.google.com/recaptcha/api/siteverify'
    values = {
        'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
        'response': recaptcha
    }
    data = urllib.parse.urlencode(values).encode()
    req =  urllib.request.Request(url, data=data)
    response = urllib.request.urlopen(req)
    result = json.loads(response.read().decode())

    if result['success']:
      print(result)
      offercode = retrieveCode(code1, code2, code3, amountPound, amountPence)
      return JsonResponse({
        'offer_code': offercode
      })
    else:
      return HttpResponse(status=403,)

# Front end app view that loads the app
class FrontendAppView(View):
  """
  Serves the compiled frontend entry point (only works if you have run `yarn
  run build`).
  """
  def get(self, request):
    payload = {}
    try:
        return render(request, 'mcd/build/index.html', payload)
    except FileNotFoundError:
        return HttpResponse(
            """
            This URL is only used when you have built the production
            version of the app. Visit http://localhost:3000/ instead, or
            run `yarn run build` to test the production version.
            """,
            status=501,
        )