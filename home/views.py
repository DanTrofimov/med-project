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
    pulse = employee.pulse.split(',')
    sys = employee.sys.split(',')
    dias = employee.dias.split(',')

    for i in range(0, len(pulse)):
        employee.list_of_pulse[i] = int(pulse[i])

    x1_data = [1, 2, 3, 4, 5]
    y1_data = employee.list_of_pulse
    graph_pulse = plot([Scatter(x=x1_data, y=y1_data,
                                mode='lines', name='test',
                                opacity=0.8, marker_color='green')],
                       output_type='div')

    for i in range(0, len(sys)):
        employee.list_of_sys_pressure[i] = int(sys[i])
    
    x2_data = [1, 2, 3, 4, 5]
    y2_data = employee.list_of_sys_pressure
    graphSysPressure = plot([Scatter(x=x2_data, y=y2_data,
                                     mode='lines', name='test',
                                     opacity=0.8, marker_color='green')],
                            output_type='div')

    for i in range(0, len(dias)):
        employee.list_of_dias_pressure[i] = int(dias[i])

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
        pulse = employee.pulse.split(',')
        sys = employee.sys.split(',')
        dias = employee.dias.split(',')

        for i in range(0, 4):
            if (request.POST.get('pulse') != ''):
                pulse[i] = pulse[i + 1]
            if (request.POST.get('sys') != ''):
                sys[i] = sys[i + 1]
            if (request.POST.get('dias') != ''):
                dias[i] = dias[i + 1]
        
        if (request.POST.get('pulse') != ''):
            pulse[4] = str(request.POST.get('pulse'))
            employee.pulse = ""
            for i in range(0, 4):
                employee.pulse += pulse[i] + ','
            employee.pulse += pulse[4]
            
        if (request.POST.get('sys') != ''):
            sys[4] = str(request.POST.get('sys'))
            employee.sys = ""
            for i in range(0, 4):
                employee.sys += sys[i] + ','
            employee.sys += sys[4]
            
        if (request.POST.get('dias') != ''):
            dias[4] = str(request.POST.get('dias'))
            employee.dias = ""
            for i in range(0, 4):
                employee.dias += dias[i] + ','
            employee.dias += dias[4]
        employee.save()
    return render(request, 'results/result.html')
