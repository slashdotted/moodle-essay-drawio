/*
A script to include a Draw.io editor in a Moodle Essay question.
Inspired by https://github.com/detiuaveiro/moodle-essay-ace 
by JMR@ua.pt, a script used to incorporate an Ace Editor

Author: amos.brocco@supsi.ch
See LICENSE

*/

let moodle_textarea = null;
let editor_container = null;
let editor_iframe = null;

make_drawio_iframe = function() {
    var f = document.createElement("iframe");
    f.src = "https://embed.diagrams.net/?embed=1&ui=minimal&saveAndExit=0&noSaveBtn=1&noExitBtn=1&spin=1&proto=json&modified=0";
    f.style.position = 'relative';
	f.style.border = '0';
	f.style.top = '0px';
	f.style.left = '0px';
	f.style.width = '100%';
	f.style.height = '100%';
    return f;
}


window.onload = function() {

    try {
        // Hide the Moodle text area
        moodle_textarea = document.querySelector("textarea.form-control");
        moodle_textarea.parentElement.hidden = true;

        // Create an iframe with the draw.io editor
        editor_container = document.getElementById("drawio_editor");
        editor_iframe = make_drawio_iframe();
        editor_container.appendChild(editor_iframe);

        // Adjust the size of the editor's container
        let editorStyle = getComputedStyle(editor_container);
        const btw = editorStyle.borderTopWidth;
        const bbw = editorStyle.borderBottomWidth;
        editor_container.style.height =
            `calc(${moodle_textarea.rows}lh + ${btw} + ${bbw})`;

            window.addEventListener('message', function(evt) {
                if (evt.origin === "https://embed.diagrams.net") {
                    console.log("Event from draw.io" );
                    let data = JSON.parse(evt.data);
                    console.log(evt);
                    if (data.event === "init") {
                        console.log("Init event received, loading content");
                        let content = moodle_textarea.textContent;
                        if (content !== "") {
                            let jdata = JSON.parse(content);
                            jdata.action = "load"; // Set action event
                            jdata.autosave = 1; // Ensure autosave is enabled
                            content = JSON.stringify(jdata);
                            console.log("Reload existing content");
                        } else {
                            // Intial empty content
                            content = JSON.stringify({action: 'load', xml: '', autosave: 1});
                            console.log("Initial load")
                        }
                        // Send update
                        console.log("Sending load request")
                        console.log(content)
                        editor_iframe.contentWindow.postMessage(content, '*');                     
                    } else if (data.event === "save" || data.event === "autosave") {
                        console.log("Save event received, saving content");
                        console.log(data)
                        moodle_textarea.textContent = JSON.stringify(data);
                    } else if (data.event === "load") {
                        console.log("Data loaded");
                    } else {
                        console.log("Unknown event");
                        console.log(evt);
                    }
                }
            });

        editor_iframe.onload = function() {
            console.log("draw.io editor ready, waiting for events from draw.io app");
        }

    } catch (e) {
        console.log(e);
    }
};

