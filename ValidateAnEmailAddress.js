{/**Write a function isValidEmail that checks whether a given string is a valid email address according to a simplified format specification.
A string is considered a valid email address if and only if:
It has the format <local>@<domain>.<tld>.
Local part (before @): Contains at least one character and consists only of alphanumeric characters (a-z, A-Z, 0-9), periods (.), underscores (_), or hyphens (-).
Domain part (between @ and .): Contains at least one character and consists only of alphanumeric characters (a-z, A-Z, 0-9) or hyphens (-).
Top-Level Domain (TLD) (after .): Contains at least two characters and consists only of alphabetical letters (a-z, A-Z).
The email must not contain any spaces or additional @ characters.

Examples
isValidEmail("user@example.com");
// => true
isValidEmail("invalid.email@");
// => false

Example 1
Input: email = "user@example.com"
Output: true
Explanation: Standard valid email matching local, domain, and 3-letter TLD.

Example 2
Input: email = "invalid.email@"
Output: false
Explanation: Missing domain and TLD parts.

Constraints
email is a string with length between 0 and 100
email contains only printable ASCII characters */}

function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  return pattern.test(email);
}