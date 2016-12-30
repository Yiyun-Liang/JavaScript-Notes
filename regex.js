/*
/.../: start and end of a regex literal
^: beginning of the string
(?:...): means uncapturing group, things are only matched but not captured, '?' means group is optional
()?: repeat zero or one time
+: matched one or more time
*: matched zero or more time
second: will be matched literally
(\/{0,3}): '/' will be matched 0 or 1 or 2 or 3 times
([0-9.\-A-Za-z]+): can be numbers, letters, ., -
(?::(\d+))?: optional group, . followed by digits
(?:\/([^?#]*))?: [^?#] means all characters except ? and #
(?:#(.*))?: .* means match any characters except a line-ending character
$: end od the string
*/
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);
document.writeln(result)

var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
var blanks = '       ';
var i;
for (i = 0; i < names.length; i ++) {
  document.writeln(names[i] + ':' + blanks.substring(names[i].length), result[i]);
}

// results all aligned!
/*
scheme: http
slash:  //
host:   www.ora.com
port:   80
path:   goodparts
query:  q
hash:   fragment
*/

// if we omit /^...$/i, then this regex will tell us if a string contains a number
// with these, it tells us if the string is a number
// i flag: case insensitive
// g flag: Global(match multiple times; the precise meaning of this varies with the method)
// m flag: Multiline (^ and $ can match line-ending characters)
var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
var test = function (num) {
  document.writeln(parse_number.test(num));
};
test('1000'); //true
test('1.1.1.1'); //false

// \ /[](){}?+*|.^$ are characters that needs to be escaped
// regex class
// (?:a|e|i|o|u) same as [aeiou], [^...] means excluding these characters
// {...}: thing will be matched ... many times, ex. /w{3}/ is www, ex. {3,6} means 3-6 times
// ? is the same as {0,1}. * is the same as {0,}. + is the same as {1,}.
