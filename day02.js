// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:



//string with letters and characters
//string, just the domain name

// // domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

//use replace to get rid of http://www, then split at the . and return just the first element of the array

function domainName(url){
    let newURL = url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')
    console.log(newURL[0])
}

domainName("http://github.com/carbonfive/raygun")
domainName("http://www.zombie-bites.com")
domainName("https://www.cnet.com")