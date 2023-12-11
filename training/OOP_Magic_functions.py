#import pandas as pd

# MAGIC METHODS

class person:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def __del__(self):
        print("object is being deconstructed")

p=person("mike",25)
print("the name is" ,p.name)
import math


class vector:
    def __init__(self,x,y):
        self.x=x
        self.y=y
    def __add__(self,other):
        return vector(self.x+other.x,self.y+other.y)
    
    def __repr__(self):
        return f"X: {self.x}, Y: {self.y}"

    def __len__(self):
        return (self.x*self.x   + self.y*self.y)
    def __call__(self):
        print("hello, i was called",self)


v1=vector(10,20)
v2=vector(30,40)
v3=v1+v2
print("sum is v3:",v3.x,"  ,  ", v3.y)

print("correctly represented as ", v3)

v3()

print("magnitute /length of vector is", len(v3))
