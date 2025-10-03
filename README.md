# moodle-essay-drawio

This script replaces the standard text editor in a Moodle essay question with an embedded draw.io diagram editor. It was inspired by [moodle-essay-ace](https://github.com/detiuaveiro/moodle-ts). 

## Description
In quizzes where students are required to draw diagrams, instructors often resort to paper-based submissions or ask students to upload diagram files. Reviewing these can be time-consuming, especially during large exams. This script streamlines the process by embedding a diagram editor directly into the Moodle quiz interface, allowing students to draw and submit diagrams without leaving the page.

## 🛠️ Setup Instructions

1. **(Optional) Host the Script**  
   Use the default URL for the script or upload the `moodle-essay-drawio.js` file to a publicly accessible server or directly within Moodle.

2. **Create an Essay Question**  
   In your Moodle quiz, add a new question of type **Essay**.

3. **Configure the Response Format**  
   Set the response format to **Plain text, monospaced font**.  
   *(You can find this under: `Response options → Response format`)*

4. **Insert the Script into the Question Text**  
   Switch to the HTML source view of the question text and insert the following code:

```html
   <script src="https://raw.githubusercontent.com/slashdotted/moodle-essay-drawio/refs/heads/master/moodle-essay-drawio.js"> 
   Question Text 
   <div id="drawio_editor"></div>
```

## ⚠️ Important Notes

1. Ensure that only one question is displayed per page during the quiz.

2. When reviewing quiz attempts, configure Moodle to show one question per page as well. This setup ensures the diagram editor loads correctly and avoids conflicts with other questions.
   
4. Additional options for **draw.io** can be found on [this page](https://www.drawio.com/doc/faq/embed-mode).
