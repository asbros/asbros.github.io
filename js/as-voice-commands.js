var script = document.createElement("script");
let as_commands;
script.setAttribute("src", "https://asbros.github.io/js/as-voice-commands-annyang.js");
script.addEventListener("load", function(){
as_commands = annyang;
});
(document.head || document.body).appendChild(script);
