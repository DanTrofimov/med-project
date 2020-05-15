# Generated by Django 3.0.3 on 2020-05-14 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20200502_1639'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='dias_pressure',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='sys_pressure',
        ),
        migrations.AddField(
            model_name='employee',
            name='dias',
            field=models.CharField(default='0,0,0,0,0', max_length=50, verbose_name='Диаг давление'),
        ),
        migrations.AddField(
            model_name='employee',
            name='sys',
            field=models.CharField(default='0,0,0,0,0', max_length=50, verbose_name='Сис давление'),
        ),
        migrations.AlterField(
            model_name='employee',
            name='pulse',
            field=models.CharField(default='0,0,0,0,0', max_length=50, verbose_name='Пульс'),
        ),
    ]