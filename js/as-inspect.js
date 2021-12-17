const as = {}
 as.container = function(){
  var cnt = document.createElement("div");
  cnt.setAttribute("id", "as-container");
  cnt.setAttribute("style", "display: none;position: fixed;bottom: 0;left: 0;width: 100%;height: 50vh;background-color: #fff;z-index: 99999999999999999999999999999999;transition: display 1s;");
  cnt.setAttribute("class", "as-not-inspect");
  var astool = ['Console','Inspect','Resources','Info','Run-Code','Sources'];
  var cnthd = document.createElement("div");
  cnthd.setAttribute("style", "white-space: nowrap;overflow-x: scroll;background-color: #ccc;");
  cnthd.setAttribute("id", "as-top-toolbar");
  cnthd.setAttribute("class", "as-not-inspect");
  function appendItem(item, index){
    var sitem = item.toLowerCase();
    var itemr = item.replace(/-/gi, " ");
    var ibtn = "<button onclick='as.set(\""+sitem+"\")' style='height: 36px;border: 0;margin-right: 3px;padding-left: 10px;padding-right: 10px;font-family: 'Quicksand';' class='as-tool-btn as-not-inspect' id='as-"+sitem+"-btn'>"+itemr+"</button>";
    cnthd.innerHTML += ibtn;
  }
  astool.forEach(appendItem);
  cnt.appendChild(cnthd);
  var astools = [
      "<style>@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');</style><style>*{box-sizing: border-box;}.as-tool{font-family: 'Quicksand';height: 100%;width: 100%;margin-top: 5px;word-wrap: break-word;overflow-y: scroll;}.as-run-code-buttons{height: 34px;width: 33%;}.as-inspect-button{height: 36px;width: 100%;margin-right: 1%;}#as-resources .as-resources{border: 1px solid #000;background-color: #fff;margin: 10px;}#as-resources .as-resources-head{display: block;color: #4169E1;padding: 10px;width: 100%;background-color: #eee;font-weight: bold;margin-bottom: 1px;}#AS-main-btn.is-pointer-down{background-color: #29a !important;}#as-info fieldset{margin: 8px;border: 1.5px solid #bbb;}.as-tool button{font-family: 'Quicksand';}.as-tool textarea{font-family: 'Quicksand';font-size: 15px;}.as-tool#as-console button{margin-left: 5px;}.as-console-log,.as-console-error,.as-console-warn,.as-console-info{display: block;margin: 3px;padding: 3px;font-size: 16px;}.as-console-error{color: #ff8080;background-color: #570d0d;padding-left: 30x}.as-console-error:before{content: '❌';}.as-console-warn{color: #ffff00;background-color: #ffcb6b;}.as-console-warn:before{content: '⚠️';}#as-console-input{height: 30px;border: 1px solid #000;width: 94%;margin: 0;position: absolute;bottom: 5px;left: 21px;font-size: 16px;}.as-tool table{border-collapse: collapse;border-spacing: 0;border: 1px solid #ddd;width: 100%;}.as-tool td,th{padding: 7px;}.as-tool tr{border: 1px solid #010101;width: 100%;}.as-tool tr:nth-child(odd){background-color: #f1f1f1}#as-inspect-startBtn{background-image: linear-gradient(rgb(64,200,241),rgb(43,105,226));color: #fff;border: 0;border-radius: 7px;box-shadow: rgba(0,0,0,0.16)0 2px 6.5727px 0, rgba(0,0,0,0.12) 0 2px 11.5727px 0;padding: 7px 10px;font-size: 18px;font-weight: bold;}</style>",
      "<div class='as-tool' id='as-inspect' style='text-align: center;'><button onclick='as.inspectStart()' id='as-inspect-startBtn'>Start</button><code id='as-inspect-output' style='padding-bottom: 100px;'></code><div style='position: fixed;bottom: 0;left: 0;width: 100%;justify-content: space-between;background-color: #fff;display: none;' id='as-inspect-toolbar'><button class='as-inspect-button' onclick='as.inspectEnd()'>End Inspect</button></div></div>",
      "<div class='as-tool' id='as-console'><div style='height: 30px;width: 100%;'><button onclick='as.clearConsoleBtn()'>🚫 Clear</button><button onclick='as.getConsoleItems(1)'>All</button><button onclick='as.getConsoleItems(2)'>Error</button><button onclick='as.getConsoleItems(3)'>Warning</button><button onclick='as.getConsoleItems(4)'>Info</button></div><div id='as-console-area' style='height: calc(50vh - 110px);width: 100%;overflow: scroll;'></div><div style='height: 36px;width: 100%;margin: 0;padding: 0;'><div style='display: inline;color: #00f;font-size: 44px;margin: 0;width: 20px;position: absolute;bottom: -3px;left: 4px;'>›</div><form action='javascript:as.consoleInput()'><input id='as-console-input' type='text' autocomplete='off'/></form></div><br/><br/></div>",
      "<div class='as-tool' id='as-run-code'><textarea style='height: 80%;width: 99%;padding: 5px;color: #000;' id='as-run-code-textarea' placeholder='Javascript Code here'></textarea><div style='position: fixed;bottom: 0;left: 0;width: 100%;justify-content: space-between;'><button class='as-run-code-buttons' onclick='as.code_clear()'>Clear</button><button class='as-run-code-buttons' onclick='as.code_copy()'>Copy</button><button class='as-run-code-buttons' onclick='as.code_run()'>Run Code</button></div></div>",
      "<div class='as-tool' style='color: #000;' id='as-resources'><div id='as-resources-1' class='as-resources'></div><div id='as-resources-2' class='as-resources'><span class='as-resources-head'>Session Storage</span></div><div id='as-resources-3' class='as-resources'><span class='as-resources-head'>Cookie</span></div><div id='as-resources-4' class='as-resources'><span class='as-resources-head'>Script</span></div><div id='as-resources-5' class='as-resources'><span class='as-resources-head'>Stylesheet</span></div><div id='as-resources-6' class='as-resources'><span class='as-resources-head'>Iframe</span></div><div id='as-resources-7' class='as-resources' style='overflow: scroll;'><span class='as-resources-head'>Image</span></div><br/><br/><br/></div>",
      "<div class='as-tool' id='as-info' style='padding-bottom: 60px;'></div>",
      "<div id='as-sources' class='as-tool' style='height: 100%;width: 100%;margin-top: 5px;word-wrap: break-word;overflow-y: scroll;text-align: center;'><button style='border: 0;border-radius: 20px;padding: 10px;margin-left: 5px;font-size: 18px;position: fixed;bottom: 15px;left: 5px;display: none;' id='as-sources-back' onclick='as.sssl()'>Back</button><h3 class='as-not-inspect'></h3><span class='as-not-inspect' style='color: #000;'></span><br/><br/><br/><br/><br/></div>"
    ];
  function additmc(item, index){
  cnt.innerHTML += item;
  }
  astools.forEach(additmc);
  document.documentElement.appendChild(cnt);
 }
 as.showGeoLocation = function(position){
  var geo = "<fieldset><span style='color: #4169E1;font-weight: bold;'>Geolocation</span><br/><span>Latitude - </span>"+position.coords.latitude+"<br/>"+"<span>Longitude - </span>"+position.coords.longitude+"</fieldset>";
  document.getElementById("as-info").innerHTML += geo;
 }
 as.set = function(n){
   var tools = document.getElementsByClassName("as-tool");
   var id = "as-"+n;
   for(var i = 0;i < tools.length;i++){
    document.getElementsByClassName("as-tool")[i].style.display = "none";
    document.getElementsByClassName("as-tool-btn")[i].style.backgroundColor = "";
    document.getElementsByClassName("as-tool-btn")[i].style.color = "#000";
   }
   if(n == "resources"){
     as.getAllResources();
   }else if(n == "info"){
     document.getElementById("as-info").innerHTML = "<fieldset><span style='color: #4169E1;font-weight: bold;'>Location - </span><span style='color: #000;' id='as-info-location'></span><br/></fieldset>";
     document.getElementById("as-info-location").innerText = window.location;
     if(navigator.userAgent){
       var uah = "<fieldset><span style='color: #4169E1;font-weight: bold;'>User Agent - </span><span>"+navigator.userAgent+"</span></fieldset>";
       document.getElementById("as-info").innerHTML += uah;
     }
    var ds = "<fieldset><span style='color: #4169E1;font-weight: bold;'>Device</span><br/><span>screen - </span>"+screen.width+" * "+screen.height+"<br/>"+"<span>viewport - </span>"+window.innerWidth+" * "+window.innerHeight+"</fieldset>";
    document.getElementById("as-info").innerHTML += ds;
    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(as.showGeoLocation);
    }
   }else if(n == "sources"){
    document.getElementById(id).getElementsByTagName("h3")[0].textContent = "";
   document.getElementById("as-sources-back").style.display = "none";
    document.getElementById(id).getElementsByTagName("span")[0].textContent = document.documentElement.outerHTML;
   }else{}
   document.getElementById(id).style.display = "block";
   document.getElementById(id+"-btn").style.backgroundColor = "#0096FF";
   document.getElementById(id+"-btn").style.color = "#fff";
   sessionStorage.setItem("as-opened", n);
 }
 as.start = function(){
 if(!document.getElementById("as-container").style.display || document.getElementById("as-container").style.display != "none"){
     document.getElementById("as-container").style.setProperty("display", "none");
    } else{
     document.getElementById("as-container").style.removeProperty("display");
  }
  if(sessionStorage.getItem("as-opened")){
   try{
   as.set(sessionStorage.getItem("as-opened"));
   }catch(e){
     as.set('console');
   }
  }else{
   as.set('console');
  }
 }
 as.button = function(){
  var btn = document.createElement("button");
  btn.setAttribute("id", "AS-main-btn");
  btn.setAttribute("onclick","as.start()");
  btn.setAttribute("class", "as-not-inspect");
  btn.setAttribute("style", "border: none;position: fixed;bottom: 15px;right: 15px;height: 49px;width: 50px;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;z-index: 9999999999999999999999999999999999;transition: all 0s !important;");
  btn.innerHTML = "<svg id='Layer_1' data-name='Layer 1' class='as-not-inspect' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511 511'><path d='M256,510.18C116.1,510.18,2.28,396.16,2.28,256S116.1,1.82,256,1.82,509.72,115.84,509.72,256,395.9,510.18,256,510.18Z' fill='none' stroke='#131313' stroke-miterlimit='10' stroke-width='4.56'/><ellipse cx='256' cy='256' rx='217.72' ry='218.11' fill='#131313'/><path d='M361.57,184.58l-19.16-19.22a6.82,6.82,0,0,0-9.65,0,6.68,6.68,0,0,0-1.8,5.7,7,7,0,0,0-4.08,1.47l-.13-.15-49.67,49.75A19.1,19.1,0,0,1,274,234.75l5.23,5.31.12-.13.51.51-11,11-36-36a43,43,0,0,0-52.68-53.2L204.6,186.6l-6.41,23.92-23.9,6.4-24.35-24.42a43.07,43.07,0,0,0,54.93,52.27l.12.12,35.22,35.26-33.5,33.57-1.83-1.79-9.38,7.58-15.87,25,4,4.06,25-15.89,7.61-9.42-1.81-1.8L248,288l57.28,57.39A20.34,20.34,0,0,0,334,316.57L276.69,259.2l10.74-10.78,4.7,4.79A19,19,0,0,1,304.89,250l49-49,.7-.68-.15-.15a6.8,6.8,0,0,0,1.45-4.07,6.56,6.56,0,0,0,5.68-1.83A6.78,6.78,0,0,0,361.57,184.58Zm-40.19,141.8a7.78,7.78,0,1,1-7.74,7.78A7.74,7.74,0,0,1,321.38,326.39ZM293.57,224.83l-3.22-3.21,36.81-36.87,3.2,3.22Zm12,12-3.21-3.2,36.8-36.88,3.2,3.21Z' fill='#e0dfd7'/></svg>";
  document.documentElement.appendChild(btn);
 }
 as.code_clear = function(){
   document.getElementById("as-run-code-textarea").value = "";
 }
 as.code_copy = function(){
 navigator.clipboard.writeText(document.getElementById("as-run-code-textarea").value);
 }
 as.code_run = function(){
  try{
    var f = new Function(document.getElementById("as-run-code-textarea").value);
    f();
  }catch(err) {
    console.error(err);
  }
 }
 as.lsss = function(t,n){
   var d = document.getElementById("as-sources");
   d.getElementsByTagName("h3")[0].innerText = n;
   if(t == "ls"){
   d.getElementsByTagName("span")[0].textContent = localStorage.getItem(n);
   }else if(t == "ss"){
    d.getElementsByTagName("span")[0].textContent = sessionStorage.getItem(n);
   }else {}
   document.getElementById("as-resources").style.display = "none";
   document.getElementById("as-sources").style.display = "block";
   document.getElementById("as-sources-back").style.display = "block";
 }
 as.sssl = function(){
   document.getElementById("as-sources").style.display = "none";
   document.getElementById("as-resources").style.display = "block";
 }
 as.getAllLocalStorage = function(){
 document.getElementById("as-resources-1").innerHTML = "<span class='as-resources-head'>Local Storage</span>";
  for (let i = 0; i < localStorage.length; i++) {
   const key = localStorage.key(i);
   var b = document.createElement("button");
   b.setAttribute("onclick", "as.lsss('ls','"+key+"')");
   b.innerText = key;
   b.setAttribute("style", "display: inline-block;width: auto;margin: 3px;border: 0;border: 1px solid #000;");
   document.getElementById("as-resources-1").appendChild(b);
  }
 }
 as.getAllSessionStorage = function(){
 document.getElementById("as-resources-2").innerHTML = "<span class='as-resources-head'>Session Storage</span>";
  for (let i = 0; i < sessionStorage.length; i++) {
   const key = sessionStorage.key(i);
   var b = document.createElement("button");
   b.setAttribute("onclick", "as.lsss('ss','"+key+"')");
   b.innerText = key;
   b.setAttribute("style", "display: inline-block;width: auto;margin: 3px;border: 0;border: 1px solid #000;");
   document.getElementById("as-resources-2").appendChild(b);
  }
 }
 as.getAllCookies = function(){
 document.getElementById("as-resources-3").innerHTML = "<span class='as-resources-head'>Cookie</span>";
  var cookies = document.cookie.split(';'); 
  for (var i = 0; i < cookies.length; i++) {
   if(cookies[i]){
   var b = document.createElement("button");
   b.innerText = decodeURIComponent(cookies[i]);
   b.setAttribute("style", "display: inline-block;width: auto;margin: 3px;border: 0;border: 1px solid #000;");
   document.getElementById("as-resources-3").appendChild(b);
   }
  }
  }
 as.getAllScripts = function(){
  document.getElementById("as-resources-4").innerHTML = "<span class='as-resources-head'>Scripts</span>";
   var scripts = document.querySelectorAll("script[src]");
  for (var i = 0;i < scripts.length;i++){
  var a = document.createElement("a");
  a.setAttribute("style", "display: block;margin: 7px;text-decoration: underline;color: #1F51FF;");
  a.setAttribute("target", "_blank");
  var u = document.querySelectorAll("script[src]")[i].getAttribute("src");
  a.innerText = u;
  a.setAttribute("href", u);
  document.getElementById("as-resources-4").appendChild(a);
    }
 }
 as.getAllStylesheets = function(){
  document.getElementById("as-resources-5").innerHTML = "<span class='as-resources-head'>Stylesheets</span>";
  var stylesheets = document.querySelectorAll("link[rel='stylesheet']");
  for (var i = 0;i < stylesheets.length;i++){
  var a = document.createElement("a");
  a.setAttribute("style", "display: block;margin: 7px;text-decoration: underline;color: #1F51FF;");
  a.setAttribute("target", "_blank");
  var u = document.querySelectorAll("link[rel='stylesheet']")[i].getAttribute("href");
  a.innerText = u;
  a.setAttribute("href", u);
  document.getElementById("as-resources-5").appendChild(a);
   }
 }
 as.getAllIframes = function(){
  document.getElementById("as-resources-6").innerHTML = "<span class='as-resources-head'>Iframes</span>";
  var iframes = document.querySelectorAll("iframe[src]");
  for (var i = 0;i < iframes.length;i++){
  var a = document.createElement("a");
  a.setAttribute("style", "display: block;margin: 7px;text-decoration: underline;color: #1F51FF;");
  a.setAttribute("target", "_blank");
  var u = document.querySelectorAll("iframe[src]")[i].getAttribute("src");
  a.innerText = u;
  a.setAttribute("href", u);
    document.getElementById("as-resources-6").appendChild(a);
   }
 }
 as.getAllImages = function(){
   document.getElementById("as-resources-7").innerHTML = "<span class='as-resources-head'>Images</span>";
   var images = document.querySelectorAll("img[src]");
   for (var i = 0;i < images.length;i++){
    var b = document.createElement("a");
    b.setAttribute("target", "_blank");
    var a = document.createElement("img");
    var u = document.querySelectorAll("img[src]")[i].getAttribute("src");
    a.setAttribute("src", u);
    b.setAttribute("href", u);
    a.setAttribute("style", "height: 100px;min-width: 49%;display: inline-block;margin: 0;padding: 0;object-fit: cover;");
    b.appendChild(a);
    document.getElementById("as-resources-7").appendChild(b);
   }
 }
 as.getAllResources = function(){
   as.getAllLocalStorage();
   as.getAllSessionStorage();
   as.getAllCookies();
   as.getAllScripts();
   as.getAllStylesheets();
   as.getAllIframes();
   as.getAllImages();
 }
 as.addLog = function(something, type) {
  var logmsg = document.createElement("div");
  if(type == "log"){
  logmsg.setAttribute("class", "as-console-item as-console-log");
  logmsg.innerText = something;
  document.getElementById("as-console-area").appendChild(logmsg);
  }else if(type == "error"){
    logmsg.setAttribute("class", "as-console-item as-console-error");
    logmsg.innerText = something;
    document.getElementById("as-console-area").appendChild(logmsg);
  }else if(type == "warn"){
    logmsg.setAttribute("class", "as-console-item as-console-warn");
    logmsg.innerText = something;
    document.getElementById("as-console-area").appendChild(logmsg);
  }else if(type == "info"){
    logmsg.setAttribute("class", "as-console-item as-console-info");
    logmsg.innerText = something;
    document.getElementById("as-console-area").appendChild(logmsg);
  }else{
  }
 };
 as.getConsoleItems = function(n){
   var items = document.getElementsByClassName("as-console-item");
   for(var i = 0;i < items.length;i++){
    document.getElementsByClassName("as-console-item")[i].style.display = "none";
   }
   if(n == 1){
    for(var a = 0;a < document.getElementsByClassName("as-console-item").length;a++){
      document.getElementsByClassName("as-console-item")[a].style.display = "block";
    }
   }else if(n == 2){
    for(var b = 0;b < document.getElementsByClassName("as-console-error").length;b++){
      document.getElementsByClassName("as-console-error")[b].style.display = "block";
    }
   }else if(n == 3){
    for(var c = 0;c < document.getElementsByClassName("as-console-warn").length;c++){
      document.getElementsByClassName("as-console-warn")[c].style.display = "block";
    }
   }else if(n == 4){
    for(var d = 0;d < document.getElementsByClassName("as-console-info").length;d++){
      document.getElementsByClassName("as-console-info")[d].style.display = "block";
    }
   }else{
    
   }
 }
 as.clearConsole = function(){
  document.getElementById("as-console-area").innerHTML = "";
  var logmsg = document.createElement("i");
  logmsg.setAttribute("class", "as-console-item");
  logmsg.setAttribute("style", "color: #f00;margin: 3px;");
  logmsg.innerText = "Console was cleared!";
  document.getElementById("as-console-area").appendChild(logmsg);
 }
 as.clearConsoleBtn = function (){
  document.getElementById("as-console-area").innerHTML = "";
 }
 as.originalError = console.error;
 as.originalLog = console.log;
 as.originalWarning = console.warn;
 as.originalInfo = console.info;
 as.originalClear = console.clear;
 console.error = function (error) {
   as.addLog(error.stack ? error.stack : error.toString(), "error");
   as.originalError.apply(console, arguments);
    };
 console.log = function () {
   var args = Array.prototype.slice.call(arguments);
   args.forEach(function(item){as.addLog(item, "log")});
   as.originalLog.apply(console, args);
    };
 console.warn = function () {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(item){as.addLog(item, "warn")});
    as.originalWarning.apply(console, args);
    };
 console.info = function () {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(item){as.addLog(item, "info")});
    as.originalInfo.apply(console, args);
    };
 console.clear = function (...args) {
    as.clearConsole();
    as.originalClear.apply(console, args);
    };
 as.consoleInput = function(){
 var a = document.getElementById("as-console-input").value;
 console.log("> "+a);
 try{
  var b = new Function("return "+a);
  console.log("< "+b());
 }catch(err){
  console.error(err);
 }
 document.getElementById("as-console-input").value = "";
 }
 as.newTr = function(t, n, v){
   var tr = document.createElement("tr");
   var nth = document.createElement("th");
   nth.style.color = "#FF851B";
   nth.innerText = n;
   var vth = document.createElement("th");
   vth.style.color = "#0074D9";
   vth.innerText = v;
   tr.appendChild(nth);
   tr.appendChild(vth);
   document.getElementById(t).appendChild(tr);
 }
 as.notInspect = function(){
  document.getElementById("as-container").classList.add("as-not-inspect");
  for(var i = 0;i < document.getElementsByClassName("as-tool").length;i++){
      document.getElementsByClassName("as-tool")[i].classList.add("as-not-inspect");
    var allaselem = document.getElementsByClassName("as-tool")[i].querySelectorAll("*");
    for(var m = 0;m < allaselem.length;m++){
      document.getElementsByClassName("as-tool")[i].querySelectorAll("*")[m].classList.add("as-not-inspect");
    }
   }
   document.getElementById("AS-main-btn").classList.add("as-not-inspect");
   for(var m = 0;m < document.getElementById("AS-main-btn").querySelectorAll("*").length;m++){
    document.getElementById("AS-main-btn").querySelectorAll("*")[m].classList.add("as-not-inspect");
  }
  document.getElementById("as-top-toolbar").classList.add("as-not-inspect");
  for(var i = 0; i < document.getElementById("as-top-toolbar").querySelectorAll("*").length; i++){
   document.getElementById("as-top-toolbar").querySelectorAll("*")[i].classList.add("as-not-inspect");
  }
  document.getElementById("as-sources").classList.add("as-not-inspect");
  for(var i = 0; i < document.getElementById("as-sources").querySelectorAll("*").length; i++){
   document.getElementById("as-sources").querySelectorAll("*")[i].classList.add("as-not-inspect");
  }
 }
 as.inspect = function(n){
  if(n.classList.contains("as-not-inspect") != true){
  var el = document.createElement(n.tagName);
  for (a = 0; a < n.attributes.length; a++) {
  if(n.attributes[a].value != "" && n.attributes[a].name != "style"){
    el.setAttribute(n.attributes[a].name, n.attributes[a].value);
   }
  }
  el.setAttribute("style", "");
  for(var i = 0; i < n.style.length; i++){
  var ns = n.style[i];
  el.setAttribute("style", el.getAttribute("style")+ns+": "+n.style.getPropertyValue(ns)+";");
  }
  el.innerHTML = n.innerHTML;
  var out = el.outerHTML;
  document.getElementById("as-inspect-output").innerText = out;
  }
  event.stopPropagation();
 }
 as.inspectStart = function(){
  for(var i = 0; i < document.querySelectorAll("*").length; i++){
    try{
     document.querySelectorAll("*")[i].classList.remove("as-not-inspect");
    }catch(err){}
   }
  as.notInspect();
  document.getElementById("as-inspect-startBtn").style.display = "none";
  for(var i = 0; i < document.querySelectorAll("*").length; i++){
   if(document.querySelectorAll("*")[i].ontouchstart != undefined){
    document.querySelectorAll("*")[i].addEventListener('touchstart', function(){as.inspect(this);});
   }else{
    document.querySelectorAll("*")[i].addEventListener('mouseover', function(){as.inspect(this);});
   }
  }
  document.getElementById("as-inspect-toolbar").style.display = "block";
  document.getElementById("as-inspect-output").innerText = "Touch or Hover an element.";
 }
 as.inspectEnd = function(){
  document.getElementById("as-inspect-startBtn").style.display = "";
  document.getElementById("as-inspect-output").innerText = "";
  for(var i = 0; i < document.querySelectorAll("*").length; i++){
   try{
    document.querySelectorAll("*")[i].classList.add("as-not-inspect");
   }catch(err){
    
   }
  }
  document.getElementById("as-inspect-toolbar").style.display = "none";
 }
 as.setAll = function(){
  as.container();
  as.button();
  var script = document.createElement('script');
  script.setAttribute("src", "https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.js");
  document.documentElement.appendChild(script);
  script.onload = function() {
  let draggie = new Draggabilly('#AS-main-btn', {containment: document.documentElement});
  };
 }
 as.init = function(){
  as.setAll();
 }
as.init();
