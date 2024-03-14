# Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid
# if they consist of four octets, with values between 0 and 255, inclusive.

# Valid inputs examples:
# Examples of valid inputs:
# 1.2.3.4
# 123.45.67.89
# Invalid input examples:
# 1.2.3
# 1.2.3.4.5
# 123.456.78.90
# 123.045.067.089
import math

def is_valid_IP(strng):
    # start by splitting the incoming data to a list, split at the '.' character
    octets = strng.split(".")
    # if the incoming string cannot be split into exactly four octets, the IP address cannot be valid,
    # so we return false
    if len(octets) != 4:
        return False
    # for octet in octets:
    for octet in octets:
        if octet.isdigit() == False:
            return False
        if octet[0] == "0" and len(octet) > 1:
            return False
        if int(octet) < 0 or int(octet) >= 256:
            print(f"octet {octet} out of range")
            return False
    return True

print(is_valid_IP("1.02.3.4"))
print(is_valid_IP("123.45.67.89"))
print(is_valid_IP("12.255.56.1"))
print(is_valid_IP("1.2.3"))
print(is_valid_IP("1.2.3.4.5"))
print(is_valid_IP("123.456.78.90"))
print(is_valid_IP("123.045.067.089"))
print(is_valid_IP('abc.def.ghi.jkl'))
print(is_valid_IP('0.0.0.0'))
print(is_valid_IP('0.0.-1.0'))
print(is_valid_IP("123.156.78 .90"))
