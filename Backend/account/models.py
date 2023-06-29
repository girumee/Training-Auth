from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

# Custom User Manager
class UserManager(BaseUserManager):
    def create_user(self, email, name, is_admin=False, password=None):
        """creates and saves a user with the given email, name, and password."""
    
        if not email:
            raise ValueError('user musts have an email address')
        user = self.model(email=self.normalize_email(email), name=name, is_admin=is_admin)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, name, is_admin=True, password=None):
        
        """creates and saves a superuser with the given email, name, and password."""
        
        user = self.model(email=email, password=password, name=name,  is_admin=is_admin)
        user.is_admin = True
        user.save(using=self._db)
        return user

# Custom User Model.
class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='Email', max_length=255, unique=True,)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'is_admin']
    
    def __str__(self):
        return self().email
    
    def get_full_name(self):
        return self.name
    
    def get_short_name(self):
        return self.name
    
    objects = UserManager()
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Yes always
        return self.is_admin
    
    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        #yes always
        return True
    
    @property
    def is_staff(self):
        "Is the user a member of staff?"
        #all admin are staff
        return self.is_admin