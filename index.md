<html>
<head>
<title>AS CODE EDITOR</title>
<meta charset='UTF-8'/>
<meta content='width=device-width, initial-scale=1' name='viewport'/>
<meta content='#000' name='theme-color'/>
<style>
#skip-to-content, .page-header, .site-footer{
width: 0;
height: 0;
padding: 0;
margin: 0;
opacity: 0;
visibility: hidden;
display: none;
}
</style>
<style id='page-skin-1' type='text/css'><!--
body{margin: 0;padding: 0;background-color: #fff;}
body:fullscreen{background-color: #fff;}
#cdhd{margin: 0 0;padding: 0 0;background: #111;height: 50px;width: 100%;position: absolute;top: 0px;left: 0;color: #ffffff;user-select: none;}
#cdar{margin-top: 50px;}
#editor{position: absolute;top: 50px;right: 0;bottom: 0;left: 0;font-size: 14px;}
#hdtt{position: absolute;margin-left: 50px;height: 40px;margin-top: 12px;font-size: 22px;}
.mnbtn{position: absolute;margin-left: 10px;margin-top: 11px;font-size: 22px;color: #0088ff;background-color: transparent;border: 0;}
#cdprv{position: absolute;width: 100vw;height: 100vh;margin: 0;margin-top: 50px;border: 0;background: #fff;}
body:fullscreen #cdprv{height: 93vh;}
button{user-select: none;}
input[type="file"]{display: none;}
.custom-file-upload {margin-left: 10px;color: white;width: 171px;height: 27px;border: 1px solid #ccc;display: block;cursor: pointer;background-color: black;padding-top: 9px;padding-left: 7px;}
#menu_cont{width: 200px;height: 100vh; position: fixed;z-index: 9999999;background-color: #222;justify-content: center;top: 0;left: -200px;bottom: 0;transition: all 0.3s;}
#menu_cont.active{position: fixed;left: 0;}
.snackText {visibility: hidden;user-select: none;min-width: 250px;margin-left: -125px;background-color: rgb(110, 26, 106);color: #fff;text-align: center;border-radius: 2px;padding: 8px;position: fixed;z-index: 1;left: 50%;bottom: 50px;font-size: 17px;}
.snackText.show {visibility: visible;user-select: none;z-index: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;animation: fadein 0.3s, fadeout 0s 2s;
}
@keyframes fadein {
from {bottom: 0;opacity: 0;}
to {bottom: 50px;opacity: 1;}
}
@keyframes fadeout {
from {bottom: 0px;opacity: 1;}
to {bottom: 0;opacity: 0;}
}
.buttons{color: #0088ff;position: absolute;top: 11px;font-size: 22px;background-color: transparent;border: 0;outline: none;}
.menu_buttons{background-color: black;color: white;margin-left: 10px;height: 36px;width: 100%;border: 1px solid #ccc;font-size: 18px;text-align: left;margin-bottom: 10px;}
#theme{outline: none;}

--></style>
<link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' rel='stylesheet'/>
<script charset='utf-8' src='https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js' type='text/javascript'></script>
<script src='https://ace.c9.io/build/src-noconflict/ext-language_tools.js'></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');
#cdhdtxt, button, label{font-family: 'Source Serif Pro', serif;}
</style>
<meta name='google-adsense-platform-account' content='ca-host-pub-1556223355139109'/>
<meta name='google-adsense-platform-domain' content='blogspot.com'/>

</head>
<body id='bdy' onload='stascevl()' translate='no'>
<div id='cdhd'><button class='mnbtn' id='opmn' onclick='opmn()'><i class='fas fa-bars'></i></button><div id='hdtt'><i class='fab fa-html5' style='color: #f06529;'></i><span id='cdhdtxt'> AS CODE EDITOR</span></div></div>
<div id='cdar'><div class='pro' id='editor'></div></div>
<iframe id='cdprv' style='display: none;'></iframe>
<button class='buttons' id='cdud' onclick='uncd()' style='right: 72px;'><i class='fas fa-undo-alt'></i></button>
<button class='buttons' id='cdrd' onclick='rdcd()' style='right: 40px;'><i class='fas fa-redo-alt'></i></button>
<button class='buttons' id='rncd' onclick='rncd()' style='right: 5px;'><i class='fas fa-play'></i></button>
<button class='buttons' id='rlpr' onclick='rlpr()' style='display: none;right: 45px;'><i class='fas fa-sync-alt'></i></button>
<button class='buttons' id='bkcd' onclick='bkcd()' style='display: none;right: 5px;'><i class='fas fa-backward'></i></button>
<div id='menu_cont'>
<div id='menu' style='height: 100%;width: 100%;user-select: none;'>
<div id='mnhd' style='height: 50px;width: 100%;background-color: #333;color: white;position: absolute;top: 0;box-shadow: 1px 1px 6px 1px black;'>
<p style='display: inline;position: absolute;top: -10px;font-size: 22px;color: #ffffff;background-color: transparent;border: 0;left: 20px;'>MENU</p><button id='clmn' onclick='clmn()' style='position: absolute;left: 160px;top: 11px;font-size: 24px;color: #0088ff;background-color: transparent;border: 0;'><i class='fas fa-times'></i></button>
</div>
<div id='mnbdy' style='width: 180px;position: absolute;top: 60px;left: 0;margin-left: 0;'>
<button class='menu_buttons' id='shrbtn' onclick='shrcd()' style='display: none;'><i class='fas fa-share' style='color: #f06529;'></i><span style='margin-left: 8px;'>Share</span></button><br/>
<select class='menu_buttons' id='theme' onchange='theme()'>
<option id='dflt' value='twilight'>🎨 Default Theme</option>
<optgroup label='Light Themes'>
<option value='chrome'>Chrome</option>
<option value='iplastic'>IPlastic</option>
<option value='dreamweaver'>Dreamweaver</option><option value='github'>GitHub</option>
<option value='tomorrow'>Tomorrow</option>
<option value='xcode'>Xcode</option>
<option value='eclipse'>Eclipse</option>
</optgroup>
<optgroup label='Dark Themes'>
<option value='twilight'>Twilight</option>
<option value='dracula'>Dracula</option>
<option value='cobalt'>Cobalt</option>
<option value='idle_fingers'>Idle Fingers</option>
<option value='kr_theme'>krTheme</option>
<option value='merbivore'>Merbivore</option>
<option value='monokai'>Monokai</option>
<option value='terminal'>Terminal</option>
<option value='gruvbox'>Gruvbox</option>
<option value='vibrant_ink'>Vibrant Ink</option>
</optgroup>
</select><br/>
<button class='menu_buttons' onclick='dwntxt()'><i class='fas fa-download' style='color: #f06529;'></i><span style='margin-left: 8px;'>TXT FILE</span></button><br/>
<button class='menu_buttons' onclick='dwnhtm()'><i class='fas fa-download' style='color: #f06529;'></i><span style='margin-left: 8px;'>HTML FILE</span></button><br/>
<button class='menu_buttons' onclick='medfs()'><i class='fas fa-expand-arrows-alt' style='color: #f06529;'></i><span style='margin-left: 8px;'>FULLSCREEN</span></button><br/>
<label class='custom-file-upload'><form id='cfrm' style='display: none;'><input class='inputfile' id='ucpfile' name='file' type='file'/></form><i class='fas fa-upload' style='color: #f06529;'></i><span style='margin-left: 8px;'>UPLOAD FILE</span></label><br/>
</div>
</div>
</div>
<div id='blrbd' onclick='clmn()' style='display: none;height: 100vh;width: 100%;opacity: 0.7;z-index: 99999;position: fixed;top: 0;left: 0;right: 0;bottom: 0;margin-top: 0;margin-left: 0;margin-right: 0;margin-bottom: 0;background-color: #000;'></div>
<div class='snackText'></div>
<div class='no-items section' id='header' name='header'></div>

<script type="text/javascript" src="https://www.blogger.com/static/v1/widgets/1527282520-widgets.js"></script>
<script type='text/javascript'>
window['__wavt'] = 'AOuZoY7tJiakOSVQt6bQj98LHXwNPPWPyw:1632549843114';_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d3986792074378104596','//ascodeeditor.blogspot.com/?m\x3d1','3986792074378104596');
_WidgetManager._SetDataContext([{'name': 'blog', 'data': {'blogId': '3986792074378104596', 'title': 'AS CODE EDITOR', 'url': 'https://ascodeeditor.blogspot.com/?m\x3d1', 'canonicalUrl': 'https://ascodeeditor.blogspot.com/', 'homepageUrl': 'https://ascodeeditor.blogspot.com/?m\x3d1', 'searchUrl': 'https://ascodeeditor.blogspot.com/search', 'canonicalHomepageUrl': 'https://ascodeeditor.blogspot.com/', 'blogspotFaviconUrl': 'https://ascodeeditor.blogspot.com/favicon.ico', 'bloggerUrl': 'https://www.blogger.com', 'hasCustomDomain': false, 'httpsEnabled': true, 'enabledCommentProfileImages': true, 'gPlusViewType': 'FILTERED_POSTMOD', 'adultContent': false, 'analyticsAccountNumber': '', 'encoding': 'UTF-8', 'locale': 'en-GB', 'localeUnderscoreDelimited': 'en_gb', 'languageDirection': 'ltr', 'isPrivate': false, 'isMobile': true, 'isMobileRequest': true, 'mobileClass': ' mobile', 'isPrivateBlog': false, 'isDynamicViewsAvailable': true, 'feedLinks': '\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22AS CODE EDITOR - Atom\x22 href\x3d\x22https://ascodeeditor.blogspot.com/feeds/posts/default\x22 /\x3e\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/rss+xml\x22 title\x3d\x22AS CODE EDITOR - RSS\x22 href\x3d\x22https://ascodeeditor.blogspot.com/feeds/posts/default?alt\x3drss\x22 /\x3e\n\x3clink rel\x3d\x22service.post\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22AS CODE EDITOR - Atom\x22 href\x3d\x22https://www.blogger.com/feeds/3986792074378104596/posts/default\x22 /\x3e\n', 'meTag': '\x3clink rel\x3d\x22me\x22 href\x3d\x22https://www.blogger.com/profile/14119495659275178860\x22 /\x3e\n', 'adsenseHostId': 'ca-host-pub-1556223355139109', 'adsenseHasAds': false, 'adsenseAutoAds': false, 'view': '', 'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js', 'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/597c4434690a0a14', 'plusOneApiSrc': 'https://apis.google.com/js/plusone.js', 'disableGComments': true, 'sharing': {'platforms': [{'name': 'Get link', 'key': 'link', 'shareMessage': 'Get link', 'target': ''}, {'name': 'Facebook', 'key': 'facebook', 'shareMessage': 'Share to Facebook', 'target': 'facebook'}, {'name': 'BlogThis!', 'key': 'blogThis', 'shareMessage': 'BlogThis!', 'target': 'blog'}, {'name': 'Twitter', 'key': 'twitter', 'shareMessage': 'Share to Twitter', 'target': 'twitter'}, {'name': 'Pinterest', 'key': 'pinterest', 'shareMessage': 'Share to Pinterest', 'target': 'pinterest'}, {'name': 'Email', 'key': 'email', 'shareMessage': 'Email', 'target': 'email'}], 'disableGooglePlus': true, 'googlePlusShareButtonWidth': 0, 'googlePlusBootstrap': '\x3cscript type\x3d\x22text/javascript\x22\x3ewindow.___gcfg \x3d {\x27lang\x27: \x27en_GB\x27};\x3c/script\x3e'}, 'hasCustomJumpLinkMessage': false, 'jumpLinkMessage': 'Read more', 'pageType': 'index', 'pageName': '', 'pageTitle': 'AS CODE EDITOR'}}, {'name': 'features', 'data': {'sharing_get_link_dialog': 'true', 'sharing_native': 'false'}}, {'name': 'messages', 'data': {'edit': 'Edit', 'linkCopiedToClipboard': 'Link copied to clipboard', 'ok': 'Ok', 'postLink': 'Post link'}}, {'name': 'template', 'data': {'name': 'custom', 'localizedName': 'Custom', 'isResponsive': true, 'isAlternateRendering': false, 'isCustom': true}}, {'name': 'view', 'data': {'classic': {'name': 'classic', 'url': '?view\x3dclassic'}, 'flipcard': {'name': 'flipcard', 'url': '?view\x3dflipcard'}, 'magazine': {'name': 'magazine', 'url': '?view\x3dmagazine'}, 'mosaic': {'name': 'mosaic', 'url': '?view\x3dmosaic'}, 'sidebar': {'name': 'sidebar', 'url': '?view\x3dsidebar'}, 'snapshot': {'name': 'snapshot', 'url': '?view\x3dsnapshot'}, 'timeslide': {'name': 'timeslide', 'url': '?view\x3dtimeslide'}, 'isMobile': false, 'title': 'AS CODE EDITOR', 'description': '', 'url': 'https://ascodeeditor.blogspot.com/?m\x3d1', 'type': 'feed', 'isSingleItem': false, 'isMultipleItems': true, 'isError': false, 'isPage': false, 'isPost': false, 'isHomepage': true, 'isArchive': false, 'isLabelSearch': false}}, {'name': 'widgets', 'data': []}]);
</script>
</body>
<script>
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
 if(!localStorage.getItem("theme")){
editor.setTheme("ace/theme/twilight");
    } else{
    editor.setTheme("ace/theme/"+localStorage.getItem("theme"));
    

document.getElementById("dflt").value = localStorage.getItem("theme");
    }
editor.session.setMode("ace/mode/html");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    wrap: true,
    enableLiveAutocompletion: true
});
editor.on("change", function(e){

localStorage.setItem("ascodeeditor", editor.getValue());

});
    var frame = document.getElementById("cdprv").contentWindow.document;
function stascevl(){
    if(localStorage.getItem("ascodeeditor")){
var ascode = localStorage.getItem("ascodeeditor");
editor.setValue(ascode);
editor.clearSelection();
    
    var x = document.querySelector(".snackText");
  x.innerText = 'Showing your previous code!';
      x.className += " show";
      setTimeout(function() {
         x.className = x.className.replace("show", "");
      }, 1000);

    }else{
    var dftedvl = "";
    editor.setValue(dftedvl);
    editor.clearSelection();
    }
    if (navigator.canShare){
    document.getElementById("shrbtn").style.display = "inline-block";
    }
}
   
function rncd(){
    var edvl = '<style>body{color:#000;bamargin:0;padding: 0;}</style>'+editor.getValue();
frame.open();
frame.write(edvl);
frame.close();
    document.getElementById("cdprv").addEventListener("load", reldd);
document.getElementById("cdar").style.display = "none";
document.getElementById("rncd").style.display = "none";
    document.getElementById("cdud").style.display = "none";
    document.getElementById("cdrd").style.display = "none";
document.getElementById("rlpr").style.display = "block";
document.getElementById("cdprv").style.display = "block";
document.getElementById("cdhdtxt").innerHTML = " CODE PREVIEWER";
document.getElementById("bkcd").style.display = "block";
  
}
function bkcd(){
document.getElementById("cdprv").style.display = "none";
    

document.getElementById("rlpr").style.display = "none";
document.getElementById("cdar").style.display = "block";
document.getElementById("rncd").style.display = "block";
    document.getElementById("cdud").style.display = "block";

    document.getElementById("cdrd").style.display = "block";
document.getElementById("cdhdtxt").innerHTML = " AS CODE EDITOR";
document.getElementById("bkcd").style.display = "none";
document.getElementById("cdprv").innerHTML = "";
document.getElementById("cdprv").removeEventListener("load", reldd);
}
 
function reldd(){

        var x = document.querySelector(".snackText");
  x.innerText = 'Loaded!';
      x.className += " show";
      setTimeout(function() {
         x.className = x.className.replace("show", "");
      }, 1000);
    }
    
function uncd(){
    editor.undo();
    }
function rdcd(){
    editor.redo();
    }
function opmn(){
    document.getElementById("blrbd").style.display = "block";
  
document.getElementById("menu_cont").classList.add("active");

    }
function clmn(){
    document.getElementById("blrbd").style.display = "none";
    document.getElementById("menu_cont").classList.remove("active");


    }
function rlpr(){
    
document.getElementById("cdprv").removeEventListener("load", reldd);
    frame.open();

frame.write("");

frame.close();
    frame.open();

frame.write('<style>body{color:#000;background-color:#fff;margin:0;padding:0;}</style>'+editor.getValue());

frame.close();
    document.getElementById("cdprv").addEventListener("load", reldd);
    }
function medfs(){
    var full_cont = document.getElementById("bdy");


  if (full_cont.requestFullscreen) {

    full_cont.requestFullscreen();

   

  } else if (full_cont.webkitRequestFullscreen) { /* Safari */

    full_cont.webkitRequestFullscreen();

   

  } else if (full_cont.msRequestFullscreen) { /* IE11 */

    full_cont.msRequestFullscreen();

   

  }

clmn();
    }
function download(filename, text){
var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);
element.style.display = 'none';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
}
function dwntxt(){
    if (editor.getValue().length > 0){
  var fptnm = prompt("Enter File Name To Download");
    if (fptnm != null) {
  var filename = fptnm+".txt";
  var text = editor.getValue();
download(filename, text);
    }
} else{
  var x = document.querySelector(".snackText");
  x.innerText = 'Write Something to download.';
      x.className += " show";
      setTimeout(function() {
         x.className = x.className.replace("show", "");
      }, 1000);
}clmn();
    }
function dwnhtm(){
    if (editor.getValue().length > 0){
    var fptnm = prompt("Enter File Name To Download.");
    if (fptnm != null) {
  var filename = fptnm+".html";
  var text = editor.getValue();
download(filename, text);
    }
} else{
  var x = document.querySelector(".snackText");
  x.innerText = 'Write Something to download.';
      x.className += " show";
      setTimeout(function() {
         x.className = x.className.replace("show", "");
      }, 1000);
}clmn();
    }
    document.getElementById("ucpfile").addEventListener('change', function() {
    var all_files = this.files;
    var file = all_files[0];
    var allowed_types = [ 'text/plain','text/html','txt/htm','image/svg+xml' ];
	if(allowed_types.indexOf(file.type) == -1) {
      var x = document.querySelector(".snackText");
  x.innerText = 'Upload txt/html/svg file.';
      x.className += " show";
      setTimeout(function() {
         x.className = x.className.replace("show", "");
      }, 3000);
		return;
	}else{}
	var fr = new FileReader();
	fr.onload = function(){
      var x = document.querySelector(".snackText");
  x.innerText = 'Successfully Uploaded!';
      x.className += " show";
      setTimeout(function() {
         x.className = x.className.replace("show", "");
      }, 1000);
editor.setValue(" ");
editor.clearSelection();
clmn();
editor.setValue(fr.result);
editor.clearSelection();
	}
	fr.readAsText(this.files[0]);
    document.getElementById("cfrm").reset();
    });
function shrcd(){
    navigator.share({
    text: editor.getValue()
  });
    clmn();
    }
function theme(){
    editor.setTheme("ace/theme/"+document.getElementById("theme").value);
    clmn();
    localStorage.setItem("theme", document.getElementById('theme').value)
    }
</script>
</html>
