from django.shortcuts import render
from django.http import HttpResponse
#from challenge_app.models import User
from challenge_app.forms import NewUserForm
# Create your views here.
def index(request):
    return render(request,'challenge_app/index.html')

def user(request):

    form = NewUserForm()

    if request.method == "POST":
        form = NewUserForm(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print("ERROR FORM INVALID")
    return render(request,'challenge_app/user.html',{'form':form})
    # prof_list=User.objects.order_by('fname')
    # mydict={'prof':prof_list}
    # return render(request,'challenge_app/user.html',context=mydict)
