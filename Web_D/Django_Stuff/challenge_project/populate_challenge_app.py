import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE','challenge_project.settings')

import django
django.setup()


from challenge_app.models import User
from faker import Faker

fakegen= Faker()
def populate(N=5):
    for entry in range(N):

        fake_fn=fakegen.first_name()
        fake_ln=fakegen.last_name()
        fake_email=fakegen.email()

        profile=User.objects.get_or_create(fname=fake_fn,lname=fake_ln,email=fake_email)

if __name__=="__main__":
    print("populating script")
    populate(20)
    print("populating completed!")
