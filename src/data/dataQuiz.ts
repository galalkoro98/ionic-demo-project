// quizData.ts

import { shuffleArray } from "../helper/Helper";

interface Quiz {
    question: string;
    options: string[];
    answer?: string;
    hint?: string;
    answerInput?: boolean;
    isTrue?: boolean;
}


interface Level {
    levelNumber: number;
    quizzes: Quiz[];
}

const quizData: Level[] = [
    {
        levelNumber: 1,
        quizzes: [
            {
                question: "What is the difference between margin and padding in CSS?",
                options: shuffleArray([
                    "margin is the space outside the border, padding is the space inside the border",
                    "margin is the space inside the border, padding is the space outside the border",
                    "margin is the space between elements, padding is the space inside the border",
                    "margin is the space inside the border, padding is the space between elements"
                ]),
                answer: "margin is the space outside the border, padding is the space inside the border",
                answerInput: false,

            },
            {
                question: "How do you link a CSS file to an HTML file?",
                options: shuffleArray([
                    "<link rel='stylesheet' href='style.css'>",
                    "<link href='style.css' rel='stylesheet'>",
                    "<link href='style.css' rel='stylesheet' type='text/css'>",
                    "<link rel='stylesheet' type='text/css' href='style.css'>"
                ]),
                answer: "<link rel='stylesheet' href='style.css'>",
                answerInput: false,

            },
            {
                question: "What is the correct HTML for adding a background color?",
                options: shuffleArray([
                    "<body bg='yellow'>",
                    "<body style='background-color:yellow;'>",
                    "<background>yellow</background>",
                    "<body style='background-color:yellow'>"
                ]),
                answer: "<body style='background-color:yellow;'>",
                answerInput: false,
            },
            {
                question: "How do you make a list that lists the items with numbers?",
                options: shuffleArray([
                    "<ol>",
                    "<dl>",
                    "<ul>",
                    "<list>"
                ]),
                answer: "<ol>",
                answerInput: false,
            },
            {
                question: "How do you make a list that lists the items with bullets?",
                options: shuffleArray([
                    "<ol>",
                    "<dl>",
                    "<ul>",
                    "<list>"
                ]),
                answer: "<ul>",
                answerInput: false,
            }

        ],
    },
    {
        levelNumber: 2,
        quizzes: [
            {
                question: "What is the element used to define a paragraph in HTML?",
                hint: "the <p> tag is the element that let user write and paragraph",
                options: [
                    "<p>",
                    "<paragraph>",
                    "<div>",
                    "<body>"
                ],
                answer: "<p>",
                answerInput: true,

            },
            {
                question: "What is the attribute used to define the alternate text for an image in HTML?",
                hint: "alt is the attribute use to define alternate text for an image in HTML",
                options: [
                    "alt",
                    "src",
                    "title",
                    "href"
                ],
                answer: "alt",
                answerInput: true,

            },
            {
                question: "What is the element used to define a hyperlink in HTML?",
                hint: "the element <a> is used to define a hyperlink in HTML",
                options: [
                    "<a>",
                    "<link>",
                    "<href>",
                    "<url>"
                ],
                answer: "<a>",
                answerInput: true,
            },
            {
                question: "What is the element used to define a line break in HTML?",
                hint: "the element <br> is used to define a line break in HTML",
                options: [
                    "<br>",
                    "<break>",
                    "<lb>",
                    "<linebreak>"
                ],
                answer: "<br>",
                answerInput: true,
            }

        ],
    },
    {
        levelNumber: 3,
        quizzes: [
            {
                question: "The <img> tag is used to embed images in an HTML document.(True/False)",
                options: shuffleArray([
                    "True",
                    "False"
                ]),
                answer: "True",
            },
            {
                question: "The <a> tag is used to define a hyperlink in an HTML document.(True/False)",
                options: shuffleArray([
                    "True",
                    "False"
                ]),
                answer: "True",
            },
            {
                question: "The <pa> tag is used to define a paragraph in an HTML document.(True/False)",
                options: shuffleArray([
                    "True",
                    "False"
                ]),
                answer: "False",
            },
            {
                question: "The <ul> tag is used to define an unordered list in an HTML document.(True/False)",
                options: shuffleArray([
                    "True",
                    "False"
                ]),
                answer: "True",
            },
            {
                question: "The <ol> tag is used to define an ordered list in an HTML document.(True/False)",
                options: shuffleArray([
                    "True",
                    "False"
                ]),
                answer: "True",
            }
        ],
    },
    {
        levelNumber: 4,
        quizzes: [
            {
                question: "What does CSS stand for?",
                options: shuffleArray([
                    "Computer Style Sheets",
                    "Colorful Style Sheets",
                    "Creative Style Sheets",
                    "Cascading Style Sheets"
                ]),
                answer: "Cascading Style Sheets",
            },
            {
                question: "Where in an HTML document is the correct place to refer to an external style sheet?",
                options: shuffleArray([
                    "In the <head> section",
                    "In the <body> section",
                    "At the end of the document",
                    "You can't refer to an external style sheet"
                ]),
                answer: "In the <head> section",
            },
            {
                question: "Which HTML tag is used to define an internal style sheet?",
                options: shuffleArray([
                    "<style>",
                    "<script>",
                    "<css>",
                    "<styles>"
                ]),
                answer: "<style>",
            },
            {
                question: "Which HTML attribute is used to define inline styles?",
                options: shuffleArray([
                    "font",
                    "class",
                    "style",
                    "styles"
                ]),
                answer: "style",
            },
            {
                question: "Which is the correct CSS syntax?",
                options: shuffleArray([
                    "body:color=black;",
                    "{body;color:black;}",
                    "body {color: black;}",
                    "{body:color=black;}"
                ]),
                answer: "body {color: black;}",
            }
        ]
    }

];

export default quizData;
