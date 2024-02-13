from django.shortcuts import render
from rest_framework.decorators import api_view
from .utils import *

@api_view(['GET', 'POST'])
def getNotes(request):
    if request.method == 'GET': 
        return getNotesList(request)
        
    if request.method == 'POST':
        return createNote(request)

@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):
    if request.method == 'GET':
        return getNoteDetail(request, pk)
    
    if request.method == 'PUT':
        return updateNote(request, pk)
    
    if request.method == 'DELETE':
        return deleteNote(request, pk)

    