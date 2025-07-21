# print("함수 출력")

# def a():
#     print("a() 실행")

# a()

# def b():
#     pass

# b()
# print("b() 호출 후 출력") //////////함수 기초

b = 0

def a(b,c):
    print(b,c)
    if c >= 9:
        c = 0
        b += 1
        if b > 9:
            pass #종료
        else:
            a(b+1,c) #첫번째 변수 증가(밖)
    else:
        a(b,c + 1)# 두번째 변수 증가(안)   
        # else :
        #     a(b + 1)
# a(0,0) ###########함수 반복문(if), 길어서 어려워

# for b in range(10):
#     print(b) ########함수 반복문(for),짧아서 자주 사용됨.

for b in range(10): #10번 >> 0,1,2,3,4,5,6,7,8,9,
    for c in range(10): # 10 *10번
        print(b,c)

    