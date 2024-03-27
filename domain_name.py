# Write a function that when given a URL as a string, parses out
# just the domain name and returns it as a string. For example:

# * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
# * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
# * url = "https://www.cnet.com"                -> domain name = "cnet"

def domain_name(url):
    url_start = url.find("//") + 2
    url_end = url.find("/", url_start)

    domain = url[url_start:url_end]
    domain = domain.replace("www.","")
    domain = domain[:domain.find(".")]

    return domain

print(domain_name("http://github.com/carbonfive/raygun"))
print(domain_name("http://www.youtube.com"))