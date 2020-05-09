from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm, EmployeeForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.template.context_processors import csrf
from plotly.offline import plot
from plotly.graph_objs import Scatter
import plotly.graph_objects as go

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

    employee = request.user.employee
    x1_data = [1, 2, 3, 4, 5]
    y1_data = employee.list_of_pulse
    graph_pulse = plot([Scatter(x=x1_data, y=y1_data,
                                mode='lines', name='test',
                                opacity=0.8, marker_color='green')],
                       output_type='div')
    x2_data = [1, 2, 3, 4, 5]
    y2_data = employee.list_of_sys_pressure
    graphSysPressure = plot([Scatter(x=x2_data, y=y2_data,
                                     mode='lines', name='test',
                                     opacity=0.8, marker_color='green')],
                            output_type='div')
    x3_data = [1, 2, 3, 4, 5]
    y3_data = employee.list_of_dias_pressure
    graphDiasPressure = plot([Scatter(x=x3_data, y=y3_data,
                                      mode='lines', name='test',
                                      opacity=0.8, marker_color='green')],
                             output_type='div')

    return render(request, 'personal-cab-3.html', context={'getGraph_pulse': graph_pulse,'getGraph_sysPressure': graphSysPressure,
                                                           'getGraph_diasPressure': graphDiasPressure})

@login_required(login_url='login')
def personalcab_changedata(request):
    employee = request.user.employee
    form = EmployeeForm(instance=employee)

    if request.method == 'POST':
        form = EmployeeForm(request.POST, request.FILES, instance=employee)
        if form.is_valid():
            form.save()
        employee.save()
    context = {'form': form}
    return render(request, 'personal-cab-3-changedata.html', context)


@login_required(login_url='login')
def analyse(request):
    return render(request, 'analyse.html')


@login_required(login_url='login')
def getresults(request):
    if request.method == 'POST':
        employee = request.user.employee
        if (request.POST.get('pulse') != ''):
            employee.pulse = request.POST.get('pulse')
        if (request.POST.get('sys') != ''):
            employee.sys_pressure = request.POST.get('sys')
        if (request.POST.get('dias') != ''):
            employee.dias_pressure = request.POST.get('dias')

        for i in range(0, 4):
            if (request.POST.get('pulse') != ''):
                employee.list_of_pulse[i] = employee.list_of_pulse[i + 1]
            if (request.POST.get('sys') != ''):
                employee.list_of_sys_pressure[i] = employee.list_of_sys_pressure[i + 1]
            if (request.POST.get('dias') != ''):
                employee.list_of_dias_pressure[i] = employee.list_of_dias_pressure[i + 1]
        if (request.POST.get('pulse') != ''):
            employee.list_of_pulse[4] = employee.pulse
        if (request.POST.get('sys') != ''):
            employee.list_of_sys_pressure[4] = employee.sys_pressure
        if (request.POST.get('dias') != ''):
            employee.list_of_dias_pressure[4] = employee.dias_pressure
        employee.measurements_count += 1
        employee.save()
    return render(request, 'results/result.html')
