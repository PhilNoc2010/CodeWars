# In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

# Create as many "shufflings" as you can!

# Examples:

# With input 'a':
# Your function should return: ['a']

# With input 'ab':
# Your function should return ['ab', 'ba']

# With input 'abc':
# Your function should return ['abc','acb','bac','bca','cab','cba']

# With input 'aabb':
# Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

def permutations(s):
    # Code Away!
    characters = list(s)
    #we will attmept a two loop method to work through the list and constuct permutations as we go.
    # we will store these in a set to eliminate duplicates as we go.
    output = set()

    # a single character permutation will be treated as an edge case
    if len(characters) == 1:
        return characters

    for i in range(len(characters)):
        item = characters[i]

        for j in range(len(characters)):
            if (i != j):
                item = item + characters[j]
        output.add(item)
        for k in range(len(characters)-1, 0, -1):
            print(k)
            if (i != k):
                item = item + characters[k]
        output.add(item)


    print(output)

# permutations("a")
# permutations("ab")
permutations("abc")
# permutations("aabb")