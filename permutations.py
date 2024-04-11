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

    # a single character permutation will be treated as an edge case
    if len(characters) == 1:
        return characters

    output = set()

    for i in range(len(characters)):
        x = characters[i]
        xs = characters[:i] + characters[i+1:]
        for j in permutations(xs):
            output.add(x+j)

    return list(output)

print(permutations("a"))
print(permutations("ab"))
print(permutations("abc"))
print(permutations("aabb"))
print(permutations("ankle"))