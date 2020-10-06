function palindrome(str) {
  str = str.toLowerCase();
  let spanE = document.getElementById("palinAnswer");
  j = str.length - 1;

  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) != str.charAt(j)) {
      spanE.innerHTML = "It's not a palindrome.";
      return false;
    }
    j--;
  }
  spanE.innerHTML = "It's a palindrome!";
  return true;
}

document.getElementById("palinBtn").addEventListener("click", function() {
  str1 = document.getElementById("userNum6").value;
  palindrome(str1);
});
