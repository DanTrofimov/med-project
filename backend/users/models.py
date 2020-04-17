from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserManager(BaseUserManager):

    def create_user(self, email, firstname, lastname, password=None):
        if not email:
            raise ValueError('Email непременно должен быть указан')

        user = self.model(
            email=UserManager.normalize_email(email),
        )
        user.firstname = firstname
        user.lastname = lastname
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, firstname, lastname, password):
        user = self.create_user(email, firstname, lastname, password)
        user.is_admin = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField('Электронная почта', max_length=255, unique=True, db_index=True)

    avatar = models.ImageField('Аватар', blank=True, null=True, upload_to="user/avatar")

    firstname = models.CharField('Имя', max_length=40, null=True, blank=True)

    lastname = models.CharField('Фамилия',  max_length=40, null=True, blank=True)

    register_date = models.DateField( 'День регистрации', auto_now_add=True)

    is_admin = models.BooleanField('Суперпользователь', default=False)

    def get_full_name(self):
        return self.email

    def is_staff(self):
        return self.is_admin

    def get_short_name(self):
        return self.firstname

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstname', 'lastname']

    objects = UserManager()

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'