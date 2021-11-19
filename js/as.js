const as = {}
 as.container = function(){
  var cnt = document.createElement("div");
  cnt.setAttribute("id", "as-container");
  cnt.setAttribute("style", "display: none;position: fixed;bottom: 0;left: 0;width: 100%;height: 360px;background-color: #fff;z-index: 99999999999999999999999999999999;transition: display 1s;");
  var astool = ['Run-Code','Resources','Info','Snippets','Settings'];
  var cnthd = document.createElement("div");
  cnthd.setAttribute("style", "white-space: nowrap;overflow-x: scroll;background-color: #ccc;");
  function appendItem(item, index){
    var sitem = item.toLowerCase();
    var itemr = item.replace(/-/gi, " ");
    var ibtn = "<button onclick='as.set(\""+sitem+"\")' style='height: 36px;border: 0;margin-right: 3px;padding-left: 10px;padding-right: 10px;' class='as-tool-btn' id='as-"+sitem+"-btn'>"+itemr+"</button>";
    cnthd.innerHTML += ibtn;
  }
  astool.forEach(appendItem);
  cnt.appendChild(cnthd);
  var astools = [
      "<style>*{box-sizing: border-box;}.as-tool{height: 100%;width: 100%;margin-top: 5px;word-wrap: break-word;overflow-y: scroll;}.as-run-code-buttons{height: 34px;width: 33%;}#as-resources .as-resources{border: 1px solid #000;background-color: #fff;margin: 10px;}#as-resources .as-resources-head{display: block;color: #5D3FD3;padding: 10px;width: 100%;background-color: #eee;font-weight: bold;margin-bottom: 1px;}#asbtn.is-pointer-down{background-color: #29a !important;}</style>",
      "<div class='as-tool' id='as-run-code'><textarea style='height: 60%;width: 99%;padding: 5px;color: #000;' id='as-run-code-textarea' placeholder='Javascript Code here'></textarea><div style='position: fixed;bottom: 0;left: 0;width: 100%;justify-content: space-between;'><button class='as-run-code-buttons' onclick='as.code_clear()'>Clear</button><button class='as-run-code-buttons' onclick='as.code_copy()'>Copy</button><button class='as-run-code-buttons' onclick='as.code_run()'>Run Code</button></div></div>",
      "<div class='as-tool' style='color: #000;' id='as-resources'><div id='as-resources-1' class='as-resources'></div><div id='as-resources-2' class='as-resources'><span class='as-resources-head'>Session Storage</span></div><div id='as-resources-3' class='as-resources'><span class='as-resources-head'>Cookie</span></div><div id='as-resources-4' class='as-resources'><span class='as-resources-head'>Script</span></div><div id='as-resources-5' class='as-resources'><span class='as-resources-head'>Stylesheet</span></div><div id='as-resources-6' class='as-resources'><span class='as-resources-head'>Iframe</span></div><div id='as-resources-7' class='as-resources' style='overflow: scroll;'><span class='as-resources-head'>Image</span></div><br/><br/><br/></div>",
      "<div class='as-tool' id='as-info'>Info</div>",
      "<div class='as-tool' id='as-snippets'>Snippets</div>",
      "<div class='as-tool' id='as-settings'>Settings</div>",
      "<div id='as-sources' style='display: none;height: 100%;width: 100%;margin-top: 5px;word-wrap: break-word;overflow-y: scroll;text-align: center;'><button style='border: 0;border-radius: 20px;padding: 10px;width: 75px;margin-left: 5px;font-size: 18px;position: fixed;bottom: 5px;left: 0px;' onclick='as.sssl()'>Back</button><h3></h3><span></span><br/><br/><br/><br/><br/></div>"
    ];
  function additmc(item, index){
  cnt.innerHTML += item;
  }
  astools.forEach(additmc);
  document.body.appendChild(cnt);
 }
 as.set = function(n){
   var tools = document.getElementsByClassName("as-tool");
   var id = "as-"+n;
   for(var i = 0;i < tools.length;i++){
    document.getElementsByClassName("as-tool")[i].style.display = "none";
    document.getElementsByClassName("as-tool-btn")[i].style.backgroundColor = "";
    document.getElementsByClassName("as-tool-btn")[i].style.color = "#000";
   }
   document.getElementById(id).style.display = "block";
   document.getElementById(id+"-btn").style.backgroundColor = "#0096FF";
   document.getElementById(id+"-btn").style.color = "#fff";
   if(n == "resources"){
     as.getAllResources();
   }
   document.getElementById("as-sources").style.display = "none";
 }
 as.start = function(){
 if(!document.getElementById("as-container").style.display || document.getElementById("as-container").style.display != "none"){
     document.getElementById("as-container").style.setProperty("display", "none");
    } else{
     document.getElementById("as-container").style.removeProperty("display");
   }
   as.set('run-code');
 }
 as.button = function(){
  var btn = document.createElement("button");
  btn.setAttribute("id", "asbtn");
  btn.setAttribute("onclick","as.start()");
  btn.setAttribute("style", "border: none;position: fixed;bottom: 15px;right: 15px;height: 49px;width: 50px;background-color: #2196F3;color: #fff;border-radius: 10px;text-align: center;z-index: 9999999999999999999999999999999999;transition: all 0s !important;");
  btn.innerHTML = "<svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511 511'><path d='M256,510.18C116.1,510.18,2.28,396.16,2.28,256S116.1,1.82,256,1.82,509.72,115.84,509.72,256,395.9,510.18,256,510.18Z' fill='none' stroke='#131313' stroke-miterlimit='10' stroke-width='4.56'/><ellipse cx='256' cy='256' rx='217.72' ry='218.11' fill='#131313'/><path d='M361.57,184.58l-19.16-19.22a6.82,6.82,0,0,0-9.65,0,6.68,6.68,0,0,0-1.8,5.7,7,7,0,0,0-4.08,1.47l-.13-.15-49.67,49.75A19.1,19.1,0,0,1,274,234.75l5.23,5.31.12-.13.51.51-11,11-36-36a43,43,0,0,0-52.68-53.2L204.6,186.6l-6.41,23.92-23.9,6.4-24.35-24.42a43.07,43.07,0,0,0,54.93,52.27l.12.12,35.22,35.26-33.5,33.57-1.83-1.79-9.38,7.58-15.87,25,4,4.06,25-15.89,7.61-9.42-1.81-1.8L248,288l57.28,57.39A20.34,20.34,0,0,0,334,316.57L276.69,259.2l10.74-10.78,4.7,4.79A19,19,0,0,1,304.89,250l49-49,.7-.68-.15-.15a6.8,6.8,0,0,0,1.45-4.07,6.56,6.56,0,0,0,5.68-1.83A6.78,6.78,0,0,0,361.57,184.58Zm-40.19,141.8a7.78,7.78,0,1,1-7.74,7.78A7.74,7.74,0,0,1,321.38,326.39ZM293.57,224.83l-3.22-3.21,36.81-36.87,3.2,3.22Zm12,12-3.21-3.2,36.8-36.88,3.2,3.21Z' fill='#e0dfd7'/></svg>";
  document.body.appendChild(btn);
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
 as.init = function(){
  as.container();
  as.button();
  javascript:(function () { var script = document.createElement('script'); script.src="https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.js"; document.body.appendChild(script); script.onload = function () {let draggie = new Draggabilly('#asbtn', {containment: true});} })();
 }
 as.init();
