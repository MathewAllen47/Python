#add functionality to a function/they surround/wrap the function with additional functionality

def mydecorator(function):
    def wrapper(*args,**kwargs):
        #return_value= function(*args,**kwargs)
        print("i am decorating your function",function.__name__)
        return function(*args,**kwargs)#return_value
    return wrapper

#test
def hello_world():
    print("hello world")
    

mydecorator(hello_world)()

@mydecorator #adds additional functionality
def hello_world2():
    print("hello world2")
    #return "hello world2"

hello_world2()
#ISSUE, IT CANT TAKE INPUTS HERE /ABOVE 
@mydecorator
def hello(person):
    #print(f"hello {person} person")
    return f"hello {person}"

print(hello("mike"))


# hello("mike")

