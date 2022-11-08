there are 10 numbers
there are at least 4 operators
there is one "results" button

define a global variable to hold the first string of numbers
let a = text.value;
a = '';

create an event listener on all of the numbers that returns the text content of the button[numbers]

document.queryListenerAll('click', function('.numbers') =>
 item.forEach => num = item.textContent;
              => a = a.concact(num));

a = '1';

if the user presses another number '2'

it is added to the variable 'a'
a ='1' + '2'

and added to the display
input.value = '12'

if the user presses another number '3'

it is added to the variable 'a'
a ='1' + '2' + '3'

and added to the display
input.value = '123'

if the user presses any operator button '+' or '-' or '/' or 'x'

the string is parsed into integers
parseInt('123');
a = 123 

and the operator is placed onto the end of the statement
a = 123 +

if the user presses clear 
input.value = ''

otherwise if the user presses any amount of the number buttons again and they are added to another string
b = '4'

and again the string is added to the statement
(a = 123) + (b = '4')

the user then presses the equal button OR presses another operator button
=
or
+
or
-
or
x
/

the second string is parsed into a number
(a = 123) + (b = 4)

and the statement is calculated
a + b = a
return a

and is printed to the display
input.value = '127'