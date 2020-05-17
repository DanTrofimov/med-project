from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User
from .models import *

my_default_errors = {
    'required': 'This field is required',
    'invalid': 'Enter a valid value'
}

class CreateUserForm(UserCreationForm):

    class Meta:
        model = User
        fields = ['username','email','password1','password2']

class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = '__all__'
        exclude = ['user']
        widgets = {
            'firstname': forms.TextInput(attrs={'class': 'btn btn-black page-item-surname pers-data', 'id':'firstname'}),
            'lastname': forms.TextInput(attrs={'class': 'btn btn-black page-item-surname pers-data'}),
            'height': forms.TextInput(attrs={'class': 'btn btn-black page-item-surname pers-data'}),
            'weight': forms.TextInput(attrs={'class': 'btn btn-black page-item-surname pers-data'}),
            'age': forms.TextInput(attrs={'class': 'btn btn-black page-item-surname pers-data'}),
            'sex': forms.TextInput(attrs={'class': 'btn btn-black page-item-surname pers-data'}),
            'isSmoking': forms.TextInput(attrs={'class': 'btn btn-black page-item-surname pers-data'}),
        }