# Find the missing letter
# Write a method that takes an array of consecutive (increasing) letters as input and
# that returns the missing letter in the array.

# You will always get an valid array. And it will be always exactly one letter be missing. The length of
# the array will always be at least 2.

# The array will always contain letters in only one case.

# Example:

# ['a','b','c','d','f'] -> 'e'
# ['O','Q','R','S'] -> 'P'

def find_missing_letter(chars):
    for i in range(len(chars)):
        ascii_char = ord(chars[i])
        if ascii_char + 1 != ord(chars[i + 1]):
            return chr(ascii_char + 1)

print(find_missing_letter(['a','b','c','d','f']))
print(find_missing_letter(['O','Q','R','S']))