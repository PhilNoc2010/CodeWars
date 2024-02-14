// Take the following IPv4 address: 128.32.10.1

// This address has 4 octets where each octet is a single byte (or 8 bits).

// 1st octet 128 has the binary representation: 10000000
// 2nd octet 32 has the binary representation: 00100000
// 3rd octet 10 has the binary representation: 00001010
// 4th octet 1 has the binary representation: 00000001
// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

// Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

// Examples
// 2149583361 ==> "128.32.10.1"
// 32         ==> "0.0.0.32"
// 0          ==> "0.0.0.0"

function int32ToIp(int32){
    //start by inspecting the incoming value.
    // if 255 or less, there will only be one octet to convert
    // if 65535 or less, there will two octets to convert
    // if 16777215 or less, there will be three octets
    // if 4294967295 or less, there will 4 octets to find.
    // values that exceed 4294967295 cannot be converted to valid IPv4 addresses.
    if (int32 <= 255) {
        return `0.0.0.${int32}`
    }
    else if(int32 <= 65535) {
        let base2 = int32.toString(2)
        base2 = base2.padStart(16, 0)
        let firstOctet = parseInt(base2.slice(0,8),2)
        let secondOctet = parseInt(base2.slice(8,16), 2)
        return `0.0.${firstOctet}.${secondOctet}`
    }
    else if(int32 <= 16777215) {
        let base2 = int32.toString(2)
        base2 = base2.padStart(24, 0)
        let firstOctet = parseInt(base2.slice(0,8),2)
        let secondOctet = parseInt(base2.slice(8,16), 2)
        let thirdOctet = parseInt(base2.slice(16,24), 2)
        return `0.${firstOctet}.${secondOctet}.${thirdOctet}`
    }
    else if(int32 <= 4294967295) {
        let base2 = int32.toString(2)
        base2 = base2.padStart(32, 0)
        let firstOctet = parseInt(base2.slice(0,8),2)
        let secondOctet = parseInt(base2.slice(8,16), 2)
        let thirdOctet = parseInt(base2.slice(16,24), 2)
        let fourthOctet = parseInt(base2.slice(24,32), 2)
        return `${firstOctet}.${secondOctet}.${thirdOctet}.${fourthOctet}`
    } else {
        return "numbers above 4294967295 cannot be converted to IPv4"
    }

  }

console.log(int32ToIp(32))
console.log(int32ToIp(63))
console.log(int32ToIp(0))
console.log(int32ToIp(326))
console.log(int32ToIp(1369215))
console.log(int32ToIp(2149583361))
console.log(int32ToIp(5294967295))
