arr = [8,1,2,3,-1,-2,-3,0,0]
def plusMinus(arr):
    count = 1
    positive = 0
    negative = 0
    cero = 0
    while count <= arr[0]:
        if arr[count] > 0:
            positive +=1
        if arr[count] < 0:
            negative +=1
        if arr[count] == 0:
            cero +=1
        count += 1
    print(format(positive/arr[0],'.6f'))
    print(format(negative/arr[0],'.6f'))
    print(format(cero/arr[0],'.6f'))
plusMinus(arr)