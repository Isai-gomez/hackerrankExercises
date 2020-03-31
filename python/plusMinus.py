arr = [6,[-4,3,-9,0,4,1]]
def plusMinus(arr):
    count = 0
    positive = 0
    negative = 0
    cero = 0
    while count < arr[0]:
        if arr[1][count] > 0:
            positive +=1
        if arr[1][count] < 0:
            negative +=1
        if arr[1][count] == 0:
            cero +=1
        count += 1
    # print(positive)
    # print(negative)
    # print(cero)
    print(format(positive/arr[0],'.6f'))
    print(format(negative/arr[0],'.6f'))
    print(format(cero/arr[0],'.6f'))
plusMinus(arr)