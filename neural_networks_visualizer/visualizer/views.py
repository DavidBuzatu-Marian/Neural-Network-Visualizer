from django.shortcuts import render
from django.http import HttpResponse
from .helpers import return_graph


def get_plot(request):
    return HttpResponse(return_graph())
