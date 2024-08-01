export const questions = [
  [
    {
      id: 1,
      question: 'What does HTML stand for?',
      answers: {
        a: 'Hyper Text Markup Language',
        b: 'Hyperlinks and Text Markup Language',
        c: 'Home Tool Markup Language',
        d: 'Hyperlinking Text Marking Language',
      },
      correctAnswer: 'a',
    },
    {
      id: 2,
      question: 'Who is making the Web standards?',
      answers: {
        a: 'Mozilla',
        b: 'Microsoft',
        c: 'The World Wide Web Consortium',
        d: 'Google',
      },
      correctAnswer: 'c',
    },
    {
      id: 3,
      question: 'Choose the correct HTML element for the largest heading:',
      answers: {
        a: '<heading>',
        b: '<h6>',
        c: '<h1>',
        d: '<head>',
      },
      correctAnswer: 'c',
    },
    {
      id: 4,
      question: 'What is the correct HTML element for inserting a line break?',
      answers: {
        a: '<lb>',
        b: '<br>',
        c: '<break>',
        d: '<line>',
      },
      correctAnswer: 'b',
    },
    {
      id: 5,
      question: 'What is the correct HTML for adding a background color?',
      answers: {
        a: '<body bg="yellow">',
        b: '<body style="background-color:yellow;">',
        c: '<background>yellow</background>',
        d: '<bgcolor="yellow">',
      },
      correctAnswer: 'b',
    },
    {
      id: 6,
      question: 'Choose the correct HTML element to define important text:',
      answers: {
        a: '<strong>',
        b: '<i>',
        c: '<b>',
        d: '<important>',
      },
      correctAnswer: 'a',
    },
    {
      id: 7,
      question: 'Choose the correct HTML element to define emphasized text:',
      answers: {
        a: '<italic>',
        b: '<em>',
        c: '<i>',
        d: '<b>',
      },
      correctAnswer: 'b',
    },
    {
      id: 8,
      question: 'What is the correct HTML for creating a hyperlink?',
      answers: {
        a: '<a href="http://www.example.com">Example</a>',
        b: '<a url="http://www.example.com">Example</a>',
        c: '<a link="http://www.example.com">Example</a>',
        d: '<a>http://www.example.com</a>',
      },
      correctAnswer: 'a',
    },
    {
      id: 9,
      question: 'Which character is used to indicate an end tag?',
      answers: {
        a: '/',
        b: '<',
        c: '*',
        d: '^',
      },
      correctAnswer: 'a',
    },
    {
      id: 10,
      question: 'How can you make a numbered list?',
      answers: {
        a: '<list>',
        b: '<ol>',
        c: '<dl>',
        d: '<ul>',
      },
      correctAnswer: 'b',
    },
    {
      id: 11,
      question: 'How can you make a bulleted list?',
      answers: {
        a: '<list>',
        b: '<ol>',
        c: '<dl>',
        d: '<ul>',
      },
      correctAnswer: 'd',
    },
    {
      id: 12,
      question: 'What is the correct HTML for making a checkbox?',
      answers: {
        a: '<input type="checkbox">',
        b: '<check>',
        c: '<checkbox>',
        d: '<input type="check">',
      },
      correctAnswer: 'a',
    },
    {
      id: 13,
      question: 'What is the correct HTML for making a text input field?',
      answers: {
        a: '<input type="textfield">',
        b: '<textfield>',
        c: '<input type="text">',
        d: '<textinput>',
      },
      correctAnswer: 'c',
    },
    {
      id: 14,
      question: 'What is the correct HTML for inserting an image?',
      answers: {
        a: '<img href="image.gif" alt="MyImage">',
        b: '<image src="image.gif" alt="MyImage">',
        c: '<img alt="MyImage">image.gif</img>',
        d: '<img src="image.gif" alt="MyImage">',
      },
      correctAnswer: 'd',
    },
    {
      id: 15,
      question: 'What is the correct HTML for creating a dropdown list?',
      answers: {
        a: '<list>',
        b: '<input type="dropdown">',
        c: '<select>',
        d: '<dropdown>',
      },
      correctAnswer: 'c',
    },
    {
      id: 16,
      question: 'What is the correct HTML for making a text area?',
      answers: {
        a: '<input type="textarea">',
        b: '<textarea>',
        c: '<textinput>',
        d: '<input type="text">',
      },
      correctAnswer: 'b',
    },
    {
      id: 17,
      question: 'What is the correct HTML for inserting a background image?',
      answers: {
        a: '<body bg="background.gif">',
        b: '<background img="background.gif">',
        c: '<body style="background-image:url(background.gif)">',
        d: '<background src="background.gif">',
      },
      correctAnswer: 'c',
    },
    {
      id: 18,
      question: 'Which HTML element defines the title of a document?',
      answers: {
        a: '<meta>',
        b: '<title>',
        c: '<head>',
        d: '<body>',
      },
      correctAnswer: 'b',
    },
    {
      id: 19,
      question: 'Which HTML element defines the document body?',
      answers: {
        a: '<head>',
        b: '<title>',
        c: '<body>',
        d: '<html>',
      },
      correctAnswer: 'c',
    },
    {
      id: 20,
      question: 'What is the correct HTML for creating a table?',
      answers: {
        a: '<table><tr><td></td></tr></table>',
        b: '<table><row><column></column></row></table>',
        c: '<table><tr><tt></tt></tr></table>',
        d: '<table><t><r><c></c></r></t></table>',
      },
      correctAnswer: 'a',
    },
  ],
  [
    {
      id: 1,
      question: 'Which CSS property controls the text size?',
      answers: {
        a: 'font-style',
        b: 'text-size',
        c: 'font-size',
        d: 'text-style',
      },
      correctAnswer: 'c',
    },
    {
      id: 2,
      question:
        'How do you make each word in a text start with a capital letter?',
      answers: {
        a: 'text-transform: capitalize;',
        b: 'text-transform: uppercase;',
        c: 'text-transform: lowercase;',
        d: 'text-transform: capitalize-each;',
      },
      correctAnswer: 'a',
    },
    {
      id: 3,
      question: 'Which CSS property is used to change the background color?',
      answers: {
        a: 'background-color',
        b: 'color',
        c: 'bgcolor',
        d: 'background-image',
      },
      correctAnswer: 'a',
    },
    {
      id: 4,
      question: 'How do you add a background color for all <h1> elements?',
      answers: {
        a: 'h1 {background-color: #FFFFFF;}',
        b: 'all.h1 {background-color: #FFFFFF;}',
        c: 'h1.all {background-color: #FFFFFF;}',
        d: 'h1 {bgcolor: #FFFFFF;}',
      },
      correctAnswer: 'a',
    },
    {
      id: 5,
      question:
        'Which CSS property is used to change the text color of an element?',
      answers: {
        a: 'fgcolor',
        b: 'color',
        c: 'text-color',
        d: 'font-color',
      },
      correctAnswer: 'b',
    },
    {
      id: 6,
      question: 'Which CSS property controls the text alignment?',
      answers: {
        a: 'text-align',
        b: 'vertical-align',
        c: 'align-text',
        d: 'align',
      },
      correctAnswer: 'a',
    },
    {
      id: 7,
      question:
        'Which CSS property is used to change the left margin of an element?',
      answers: {
        a: 'padding-left',
        b: 'margin-left',
        c: 'indent-left',
        d: 'margin',
      },
      correctAnswer: 'b',
    },
    {
      id: 8,
      question: 'How do you select an element with id "demo"?',
      answers: {
        a: 'demo',
        b: '.demo',
        c: '#demo',
        d: '*demo',
      },
      correctAnswer: 'c',
    },
    {
      id: 9,
      question: 'Which property is used to change the font of an element?',
      answers: {
        a: 'font-family',
        b: 'font-style',
        c: 'font-weight',
        d: 'font-type',
      },
      correctAnswer: 'a',
    },
    {
      id: 10,
      question: 'How do you make the text bold?',
      answers: {
        a: 'font: bold;',
        b: 'font-weight: bold;',
        c: 'font-style: bold;',
        d: 'text-style: bold;',
      },
      correctAnswer: 'b',
    },
    {
      id: 11,
      question:
        'How do you display a border like this: The top border = 10px, the bottom border = 5px, the left border = 20px, and the right border = 1px?',
      answers: {
        a: 'border-width: 10px 1px 5px 20px;',
        b: 'border-width: 10px 20px 5px 1px;',
        c: 'border-width: 10px 5px 20px 1px;',
        d: 'border-width: 10px 1px 20px 5px;',
      },
      correctAnswer: 'a',
    },
    {
      id: 12,
      question: 'Which property is used to change the background image?',
      answers: {
        a: 'bg-image',
        b: 'background-image',
        c: 'image-background',
        d: 'image-bg',
      },
      correctAnswer: 'b',
    },
    {
      id: 13,
      question:
        'Which property is used to change the left padding of an element?',
      answers: {
        a: 'padding-left',
        b: 'margin-left',
        c: 'padding',
        d: 'margin',
      },
      correctAnswer: 'a',
    },
    {
      id: 14,
      question: 'How do you select elements with class name "test"?',
      answers: {
        a: '*test',
        b: '#test',
        c: '.test',
        d: 'test',
      },
      correctAnswer: 'c',
    },
    {
      id: 15,
      question: 'How do you select all p elements inside a div element?',
      answers: {
        a: 'div p',
        b: 'div.p',
        c: 'div + p',
        d: 'div > p',
      },
      correctAnswer: 'a',
    },
    {
      id: 16,
      question:
        'Which CSS property is used to change the spacing between letters?',
      answers: {
        a: 'letter-spacing',
        b: 'text-spacing',
        c: 'font-spacing',
        d: 'character-spacing',
      },
      correctAnswer: 'a',
    },
    {
      id: 17,
      question: 'How do you select all elements with class name "intro"?',
      answers: {
        a: '.intro',
        b: '#intro',
        c: 'intro',
        d: '*intro',
      },
      correctAnswer: 'a',
    },
    {
      id: 18,
      question:
        'How do you make each word in a text start with a capital letter?',
      answers: {
        a: 'text-transform: capitalize;',
        b: 'text-transform: uppercase;',
        c: 'text-transform: lowercase;',
        d: 'text-transform: capitalize-each;',
      },
      correctAnswer: 'a',
    },
    {
      id: 19,
      question:
        'Which property is used to change the font color of an element?',
      answers: {
        a: 'color',
        b: 'font-color',
        c: 'text-color',
        d: 'text-style',
      },
      correctAnswer: 'a',
    },
    {
      id: 20,
      question: 'How do you add a shadow to an element?',
      answers: {
        a: 'box-shadow',
        b: 'element-shadow',
        c: 'shadow-box',
        d: 'shadow-element',
      },
      correctAnswer: 'a',
    },
  ],
  [
    {
      id: 1,
      question:
        'What is the correct syntax for referring to an external script called "app.js"?',
      answers: {
        a: '<script src="app.js">',
        b: '<script href="app.js">',
        c: '<script ref="app.js">',
        d: '<script link="app.js">',
      },
      correctAnswer: 'a',
    },
    {
      id: 2,
      question: 'How do you write "Hello World" in an alert box?',
      answers: {
        a: 'msg("Hello World");',
        b: 'alertBox("Hello World");',
        c: 'alert("Hello World");',
        d: 'msgBox("Hello World");',
      },
      correctAnswer: 'c',
    },
    {
      id: 3,
      question: 'How do you create a function in JavaScript?',
      answers: {
        a: 'function:myFunction()',
        b: 'function myFunction()',
        c: 'function = myFunction()',
        d: 'createFunction myFunction()',
      },
      correctAnswer: 'b',
    },
    {
      id: 4,
      question: 'How do you call a function named "myFunction"?',
      answers: {
        a: 'call myFunction()',
        b: 'call function myFunction()',
        c: 'myFunction()',
        d: 'Call.myFunction()',
      },
      correctAnswer: 'c',
    },
    {
      id: 5,
      question: 'How do you write an IF statement in JavaScript?',
      answers: {
        a: 'if i == 5 then',
        b: 'if i = 5 then',
        c: 'if (i == 5)',
        d: 'if i = 5',
      },
      correctAnswer: 'c',
    },
    {
      id: 6,
      question: 'How does a WHILE loop start?',
      answers: {
        a: 'while i = 1 to 10',
        b: 'while (i <= 10)',
        c: 'while (i < 10; i++)',
        d: 'while i < 10',
      },
      correctAnswer: 'b',
    },
    {
      id: 7,
      question: 'How does a FOR loop start?',
      answers: {
        a: 'for (i = 0; i <= 5; i++)',
        b: 'for i = 1 to 5',
        c: 'for (i <= 5; i++)',
        d: 'for (i = 0; i <= 5)',
      },
      correctAnswer: 'a',
    },
    {
      id: 8,
      question: 'How can you add a comment in JavaScript?',
      answers: {
        a: '<!-- This is a comment -->',
        b: "' This is a comment",
        c: '// This is a comment',
        d: '** This is a comment',
      },
      correctAnswer: 'c',
    },
    {
      id: 9,
      question: 'What is the correct way to write a JavaScript array?',
      answers: {
        a: 'var colors = "red", "green", "blue"',
        b: 'var colors = ["red", "green", "blue"]',
        c: 'var colors = (1:"red", 2:"green", 3:"blue")',
        d: 'var colors = {"red", "green", "blue"}',
      },
      correctAnswer: 'b',
    },
    {
      id: 10,
      question: 'How do you round the number 7.25 to the nearest integer?',
      answers: {
        a: 'Math.round(7.25)',
        b: 'Math.rnd(7.25)',
        c: 'round(7.25)',
        d: 'rnd(7.25)',
      },
      correctAnswer: 'a',
    },
    {
      id: 11,
      question: 'How do you find the number with the highest value of x and y?',
      answers: {
        a: 'ceil(x, y)',
        b: 'Math.ceil(x, y)',
        c: 'Math.max(x, y)',
        d: 'top(x, y)',
      },
      correctAnswer: 'c',
    },
    {
      id: 12,
      question: 'What event occurs when the user clicks on an HTML element?',
      answers: {
        a: 'onmouseclick',
        b: 'onchange',
        c: 'onclick',
        d: 'onmouseover',
      },
      correctAnswer: 'c',
    },
    {
      id: 13,
      question: 'How do you declare a JavaScript variable?',
      answers: {
        a: 'v carName;',
        b: 'variable carName;',
        c: 'var carName;',
        d: 'string carName;',
      },
      correctAnswer: 'c',
    },
    {
      id: 14,
      question: 'Which operator is used to assign a value to a variable?',
      answers: {
        a: '*',
        b: '-',
        c: '=',
        d: 'x',
      },
      correctAnswer: 'c',
    },
    {
      id: 15,
      question: 'What will the following code return: Boolean(10 > 9)?',
      answers: {
        a: 'true',
        b: 'false',
        c: 'NaN',
        d: 'undefined',
      },
      correctAnswer: 'a',
    },
    {
      id: 16,
      question:
        'What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id="demo">This is a demonstration.</p>',
      answers: {
        a: 'document.getElementById("demo").innerHTML = "Hello World!";',
        b: 'document.getElementByName("p").innerHTML = "Hello World!";',
        c: 'document.getElement("p").innerHTML = "Hello World!";',
        d: 'document.getElementById("demo").text = "Hello World!";',
      },
      correctAnswer: 'a',
    },
    {
      id: 17,
      question: 'How do you create a Date object in JavaScript?',
      answers: {
        a: 'var date = new Date()',
        b: 'var date = Date()',
        c: 'var date = new Date',
        d: 'var date = date()',
      },
      correctAnswer: 'a',
    },
    {
      id: 18,
      question:
        'Which method can be used to convert a JSON text into a JavaScript object?',
      answers: {
        a: 'JSON.parse()',
        b: 'JSON.stringify()',
        c: 'JSON.convert()',
        d: 'JSON.toObject()',
      },
      correctAnswer: 'a',
    },
    {
      id: 19,
      question:
        'Which built-in method returns the characters in a string beginning at the specified location?',
      answers: {
        a: 'substr()',
        b: 'getSubstring()',
        c: 'slice()',
        d: 'getSlice()',
      },
      correctAnswer: 'a',
    },
    {
      id: 20,
      question:
        'Which method is used to join two or more arrays in JavaScript?',
      answers: {
        a: 'join()',
        b: 'concat()',
        c: 'merge()',
        d: 'group()',
      },
      correctAnswer: 'b',
    },
  ],
];
