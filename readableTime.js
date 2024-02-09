// Your task in order to complete this Kata is to write a function which formats a duration,
// given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now".
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// 60 seconds in one minute
// 3600 seconds in one hour (60 * 60)
// 86400 seconds in one day (3600 * 24)
// 31536000 seconds in one year (86400 * 365)

function formatDuration (seconds) {
    // Complete this function
    if (seconds === 0) {return "now"}

    let outputArray = []
    let outputString = ""

    //first, start by finding the years
    let years = Math.floor(seconds / 31536000)

    //next, get the days
    let days = Math.floor((seconds % 31536000) / 86400)

    //next, get the hours
    let hours = Math.floor((seconds % 86400) / 3600)

    //next, get the minutes
    let minutes = Math.floor((seconds % 3600) / 60)

    // finally, get any remaining seconds
    let lastseconds = Math.floor(seconds % 60)

    // gather the pieces of the output
    if (years > 1) {
        outputArray.push(`${years} years`)
    } else if (years === 1) {
        outputArray.push(`${years} year`)
    }

    if (days > 1) {
        outputArray.push(`${days} days`)
    } else if (days === 1) {
        outputArray.push(`${days} day`)
    }
    if (hours > 1) {
        outputArray.push(`${hours} hours`)
    } else if (hours === 1 ){
        outputArray.push(`${hours} hour`)
    }

    if (minutes > 1) {
        outputArray.push(`${minutes} minutes`)
    } else if (minutes === 1) {
        outputArray.push(`${minutes} minute`)
    }

    if (lastseconds > 1) {
        outputArray.push(`${lastseconds} seconds`)
    } else if (lastseconds === 1) {
        outputArray.push(`${lastseconds} second`)
    }

    //we know we have at least one element, so our output will start with that
    outputString = outputArray[0]

    //combine the array elements into an output string, formatting as we go
    for (let i = 1; outputArray[i] != undefined; i++){
        if (outputArray[i+1] === undefined) {
            outputString += " and " + outputArray[i]
        } else {
            outputString += ", " + outputArray[i]
        }
    }

    return outputString
  }

  console.log(formatDuration(65))

  console.log(formatDuration(365))
  console.log(formatDuration(3665))
  console.log(formatDuration(7200))
  console.log(formatDuration(89520))

  console.log(formatDuration(56889565))

  console.log(formatDuration(132030240))

  console.log(formatDuration(5342436))

  console.log(formatDuration(31536012))