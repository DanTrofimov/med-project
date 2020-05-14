from django.contrib.auth.models import User
from django.db import models

class Employee(models.Model):

    user = models.OneToOneField(User,on_delete=models.CASCADE)
    avatar = models.ImageField('Аватар', blank=True, null=True, upload_to="static/images/users/",default="static/images/users/default.jpg")
    firstname = models.CharField('Имя', max_length=40, null=True, blank=True ,default='Имя')
    lastname = models.CharField('Фамилия', max_length=40, null=True, blank=True,default='Фамилия')
    height = models.PositiveSmallIntegerField('Рост',default='0')
    weight = models.PositiveSmallIntegerField('Вес',default='0')
    age = models.PositiveSmallIntegerField('Возраст',default='0')
    sex = models.CharField("Пол",max_length=15 ,default='муж')
    isSmoking = models.CharField("Курение",max_length=5,default='нет')

    list_of_pulse = [0]*5
    list_of_sys_pressure = [0]*5
    list_of_dias_pressure = [0]*5

    pulse = models.CharField('Пульс', max_length=50, default='0,0,0,0,0')
    sys = models.CharField('Сис давление', max_length=50, default='0,0,0,0,0')
    dias = models.CharField('Диаг давление', max_length=50, default='0,0,0,0,0')