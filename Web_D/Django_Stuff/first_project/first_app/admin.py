from django.contrib import admin
from first_app.models import User,AccessRecord,Webpage,Topic
# Register your models here.

admin.site.register(AccessRecord)
admin.site.register(Topic)
admin.site.register(Webpage)
admin.site.register(User)
