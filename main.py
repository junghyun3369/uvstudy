# print("함수 출력")

# def a():
#     print("a() 실행")

# a()

# def b():
#     pass

# b()
# print("b() 호출 후 출력") //////////함수 기초

b = 0

def a(b):
    print(b)
    if b > 9:
        pass
    else :
        a(b + 1)

a(0) ###########함수 반복문 기초(if)

for b in range(10):
    print(b) ########함수 반복문 심화(for), 그리고 짧아서 자주 사용됨.