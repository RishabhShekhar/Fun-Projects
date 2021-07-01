import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','AdvCBV.settings')

import django
django.setup()

import random
from basic_app.models import Student,School
from faker import Faker


fakegen=Faker()

ages=[16,17,15,12,13,14,18]


def populate(N=5):
    for entry in range(N):
        fake_school=fakegen.company()
        fake_principal=fakegen.name()
        fake_location=fakegen.address()
        fake_name=fakegen.name()

        schools=School.objects.get_or_create(name=fake_school,principal=fake_principal,location=fake_location)[0]

        student=Student.objects.get_or_create(name=fake_name,age=random.choice(ages),school=schools)[0]

if __name__=='__main__':
    print('populating')
    populate(20)
    print('populating done')
