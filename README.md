# moodle-essay-drawio

This script replaces the standard text editor in a Moodle essay question with an embedded [draw.io]iagram editor. It was inspired by [moodle-essay-ace](https://github.com/detiuaveiro/moodle-ts are required to draw diagrams, instructors often resort to paper-based submissions or ask students to upload diagram files. Reviewing these can be time-consuming, especially during large exams. This script streamlines the process by embedding a diagram editor directly into the Moodle quiz interface, allowing students to draw and submit diagrams without leaving the page.

## 🛠️ Setup Instructions

1. **Host the Script**  
   Upload the `moodle-essay-drawio.js` file to a publicly accessible server or directly within Moodle.

2. **Create an Essay Question**  
   In your Moodle quiz, add a new question of type **Essay**.

3. **Configure Response Format**  
   Set the response format to **Plain text, monospaced font**.  
   *(You can find this under: `Response options → Response format`)*

4. **Insert the Script into the Question Text**  
   Switch to the HTML source view of the question text and insert the following code:

```html
   <script src="<Insert moodle-essay-drawio.js URL"> 
   Question Text 
   <div id="drawio_editor"></div>
```

## ⚠️ Important Notes

Ensure that only one question is displayed per page during the quiz.
When reviewing quiz attempts, configure Moodle to show one question per page as well. This setup ensures the diagram editor loads correctly and avoids conflicts with other questions. Additional options for **draw.io** can be found on [this page][https://www.drawio.com/doc/faq/embed-mode].
