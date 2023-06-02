 sum_of_distinct_elements(set1, set2):
    distinct_elements = [];
     distinct_elements.append(element)
     distinct_elements.append(element)
    return sum(distinct_elements)

set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]
result = sum_of_distinct_elements(set1, set2)

print(result)  


//THIS IS THE CHECK POINT FOR RECUSSION
function isPalindrome(word) {
    // Remove any non-alphanumeric characters and convert to lowercase
    word = word.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Check if the word is equal to its reverse
    return word === word.split('').reverse().join('');
  }
  
  // Example usage
  console.log(isPalindrome('gag')); // true
  console.log(isPalindrome('kayak')); // true
  console.log(isPalindrome('php')); // true
  console.log(isPalindrome('radar')); // true
  console.log(isPalindrome('hello')); // false
  