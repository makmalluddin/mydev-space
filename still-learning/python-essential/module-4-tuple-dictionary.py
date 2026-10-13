nums = [1, 2, 3]
vals = nums
del vals[:]

print(nums)
print(vals)

print("a", "b", "c", sep="sep")

x = 1 // 5 + 1 / 5
print(x)


tup = (1, 2, 4, 8)
tup = tup[-2:-1]
tup = tup[-1]
print(tup)


dd = {"1": "0", "0": "1"}
for x in dd.values():
    print(x, end="")


dct = {}
dct["1"] = (1, 2)
dct["2"] = (2, 1)

for x in dct.keys():
    print(dct[x][1], end="")
