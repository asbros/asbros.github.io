var script = document.createElement("script");
let as_commands;
script.setAttribute("src", "https://asbros.github.io/js/as-voice-commands-annyang.js");
document.body.appendChild(script);
script.onload = function(){as_commands = annyang;};
