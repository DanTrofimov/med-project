from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm , EmployeeForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.template.context_processors import csrf


@login_required(login_url='login')
def home(request):
    return render(request, "index.html")


@login_required(login_url='login')
def news(request):
    return render(request, "news.html")


def registerPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, 'Account was created for' + user)
                return redirect('login')

        context = {'form': form}
        return render(request, "register.html", context)


def loginPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.info(request, 'Username OR password is incorrect')
        context = {}
        return render(request, "login.html", context)


def logoutUser(request):
    logout(request)
    return redirect('login')


@login_required(login_url='login')
def personalcab(request):
    return render(request, 'personal-cab-3.html')


@login_required(login_url='login')
def personalcab_changedata(request):
    employee = request.user.employee
    form = EmployeeForm(instance=employee)

    if request.method == 'POST':
        form = EmployeeForm(request.POST,request.FILES,instance=employee)
        if form.is_valid():
            form.save()
        employee.save()
    context = {'form':form}
    return render(request, 'personal-cab-3-changedata.html', context)


@login_required(login_url='login')
def analyse(request):
    return render(request, 'analyse.html')


@login_required(login_url='login')
def getresults(request):
    if request.method == 'POST':
        employee = request.user.employee
        employee.measurements_count += 1

        employee.pulse = request.POST.get('pulse')
        employee.list_of_pulse[employee.measurements_count] = employee.pulse
        employee.sys_pressure = request.POST.get('sys')
        employee.list_of_sys_pressure[employee.measurements_count] = employee.sys_pressure
        employee.dias_pressure = request.POST.get('dias')
        employee.list_of_dias_pressure[employee.measurements_count] = employee.dias_pressure
        employee.save()
    return render(request,'results/result.html')