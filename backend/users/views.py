from django.shortcuts import render, redirect
from django.contrib import auth
from .forms import CustomUserCreationForm
from django.template.context_processors import csrf

#Примерный вид функций для авторизации и регистрации
def login(request):
    args = {}
    args.update(csrf(request))
    if request.POST:
        email = request.POST.get('email', '')
        password = request.POST.get('password', '')
        user = auth.authenticate(email=email, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            args['login_error'] = "Пользователь не найден"
            return render(request, 'login.html', args)
    else:
        return render(request, 'login.html', args)

def logout(request):
    auth.logout(request)
    return redirect("/")

def register(request):
    args = {}
    args.update(csrf(request))
    args['form'] = CustomUserCreationForm()
    if request.POST:
        newuser_form = CustomUserCreationForm(request.POST)
        if newuser_form.is_valid():
            newuser_form.save()
            newuser = auth.authenticate(email=request.POST.get('email'), firstname=request.POST.get('firstname'), secondname=request.POST.get('lastname'), password=request.POST.get('password2'))
            auth.login(request, newuser)
            return redirect('/')
        else:
            args['form'] = newuser_form
    return render(request, 'register.html', args)