var sngs = document.getElementById("myTable").getElementsByClassName("sngdv");
  for (var sng = 0; sng < sngs.length; sng++){
  sngs[sng].setAttribute("id", sng);
  }
  document.getElementById("srch_page").innerHTML += document.getElementById("myTable").innerHTML;
function srcsng(atnm){
  filter = atnm.toUpperCase();
  td = document.getElementById("myTable").getElementsByClassName("sngdv");
  for (i = 0; i < td.length; i++) {
    tdv = td[i];
    if (tdv) {
      txtValue = tdv.textContent || tdv.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
    var nwsng = document.createElement("div");
    nwsng.setAttribute("class", "sngdv");
    nwsng.setAttribute("data-src", tdv.getAttribute("data-src"));
    nwsng.setAttribute("id", tdv.getAttribute("id"));
    nwsng.setAttribute("onclick", "plysng(this)");
    var nwimg = document.createElement("img");
    nwimg.setAttribute("src", tdv.getElementsByClassName("sngimg")[0].src);
    nwimg.setAttribute("class", "sngimg");
    var nwply = document.createElement("img");
    nwply.setAttribute("class", "play_icon");
    nwply.setAttribute("src", "https://html-code-editor.w3spaces.com/play.svg");
    var nwpnm = document.createElement("p");
    nwpnm.setAttribute("class", "plsnm");
    nwpnm.innerText = tdv.getElementsByClassName("plsnm")[0].innerText;
    nwsng.appendChild(nwimg);
    nwsng.appendChild(nwply);
    nwsng.appendChild(nwpnm);
    document.getElementById("orcnt").appendChild(nwsng);
    document.getElementById("artist_page").getElementsByClassName("nosngs")[0].innerHTML = document.getElementById("artist_page").getElementsByClassName("nosngs")[0].innerHTML*1+1;
      } else {}
    }
  }
}
function art(artist){
    var artist_page = document.getElementById("artist_page");
    artist_page.getElementsByClassName("aimg")[0].src = artist.getElementsByClassName("artimg")[0].src;
    artist_page.getElementsByClassName("anm")[0].innerText = artist.getElementsByClassName("artnm")[0].innerText;
    srcsng(artist.getElementsByClassName("artnm")[0].innerText);
    document.getElementById("glow").style.display = "none";
document.getElementById("srch_page").style.display = "none";
    document.getElementById("artist_page").getElementsByClassName("nosngs")[0].innerHTML += " SONGS";
 document.getElementById("artist_page").style.display = "block";
}
function dsart(){
    document.getElementById("artist_page").style.display = "none";
    
 document.getElementById("glow").style.display = "block";
    document.getElementById("orcnt").innerHTML = ";
    document.getElementById("artist_page").getElementsByClassName("nosngs")[0].innerHTML = "0";
}
var song = new Audio;
var isStopped = true;

localStorage.setItem("cntsngid", "0");
song.src = document.getElementById("0").getAttribute("data-src");

function hld(){
    document.getElementById("load").style.display = "none";
}

song.addEventListener('loadstart', function(){
    document.getElementById("load").style.display = "block";
});
function chkpp(){
  if(song.paused){
  document.getElementById("pply").style.display = "inline-block";
  document.getElementById("ppse").style.display = "none";
  document.getElementById("ply").style.display = "inline-block";
  document.getElementById("pse").style.display = "none";
  } else{
  document.getElementById("pply").style.display = "none";
  document.getElementById("ppse").style.display = "inline-block";
  document.getElementById("ply").style.display = "none";
  document.getElementById("pse").style.display = "inline-block";
  }
  }
function playpause(){
  chkpp();
  if (!song.paused) {
	 song.pause();
	} else {
	 song.play();
	 isStopped = false;
	}
}

function plysng(plsng){
  song.pause();
  song.src = plsng.getAttribute("data-src");
  song.play();
  ply();
  songName = document.getElementById("songName");
  songName.innerHTML = plsng.getElementsByClassName("plsnm")[0].innerText;
var sngnum = plsng.getAttribute("id");
localStorage.setItem("cntsngid", sngnum);
    document.getElementById("btnsngnm").innerHTML = plsng.getElementsByClassName("plsnm")[0].innerText;
	document.getElementById("btmimg").src = plsng.getElementsByClassName("sngimg")[0].src;
	document.getElementById("dftimg").src = plsng.getElementsByClassName("sngimg")[0].src;
	document.getElementById("btmnu").style.display = "block";
}

function skip(to) {
	if (to == 'prev') {
	  if (localStorage.getItem("cntsngid") > 0){
	  var plyprnm = localStorage.getItem("cntsngid");
	  var reqbtnid = (plyprnm*1 - 1*1);
	  document.getElementById(reqbtnid).click();
	  song.play();
	  } else{
	      alert("This is the first music.\nClick on the next button to play next.");
	  }
	}
	else if (to == 'next') {
		if (localStorage.getItem("cntsngid") > -1){
		var plyprnm = localStorage.getItem("cntsngid");
		var reqbtnid = (plyprnm*1 + 1*1);
		document.getElementById(reqbtnid).click();
		song.play();
		} else{
		document.getElementById("0").click();
		}
	}
}

function stop() {
	song.pause();
	song.currentTime = 0;
	document.getElementById("seek").value = 0;
	isStopped = true;
}

function tmvl(){
    var cutime = parseInt(song.currentTime,10);
	var ltstm = Math.floor(song.duration/60)+':'+Math.floor(song.duration)%60;
	document.getElementById('ltstm').innerHTML = '  '+ltstm;
	if (cutime > 59){
	var ftstm = Math.floor(cutime/60)+':'+Math.floor(cutime)%60;
	document.getElementById('ftstm').innerHTML = ftstm;
	} else{
	document.getElementById('ftstm').innerHTML = '0:'+cutime+'  ';
	}
}

function setPos(pos) {
	song.currentTime = pos;
}

function main(){
  chkpp();
  document.getElementById("player").classList.add("active");
  document.getElementById("back").style.display = "block";
  document.getElementById("body").style.overflow = "hidden";
}
function del(){
  chkpp();
  document.getElementById("player").classList.remove("active");
  document.getElementById("back").style.display = "none";
  document.getElementById("body").style.overflow = "scroll";
}
function myFunction() {
  var input, myTable, filter, td, arts, i, a, txtValue, artVl;
  input = document.getElementById("myInput");
  myTable = document.getElementById("srch_page");
  filter = input.value.toUpperCase();
  arts = myTable.getElementsByClassName("artdv");
  td = myTable.getElementsByClassName("sngdv");
  if (filter != null){
  for (i = 0; i < td.length; i++) {
    tdv = td[i];
    if (tdv) {
      txtValue = tdv.textContent || tdv.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tdv.style.display = "inline-block";
      } else {
        tdv.style.display = "none";
      }
    }
  }
  for (a = 0; a < arts.length; a++){
    art = arts[a];
    if (art) {
      artVl = art.getElementsByClassName("artnm")[0].innerText;
      if (artVl.toUpperCase().indexOf(filter) > -1) {
        art.style.display = "inline-block";
      } else {
        art.style.display = "none";
      }
    }
  }
  }
}

song.addEventListener('error', function(){
	stop();
	document.getElementById("songName").innerHTML = "Error Loading Audio!";
  document.getElementById("btnsngnm").innerHTML = "Error Loading Audio!";
});

song.addEventListener('timeupdate', function() {
	curtime = parseInt(song.currentTime,10);
	document.getElementById('seek').max = song.duration;
	document.getElementById('seek').value = curtime;
    document.getElementById("load").style.display = "none";
	tmvl();
});

song.addEventListener("ended", function() {
	var plyprnm = localStorage.getItem("cntsngid");
	var reqbtnid = (plyprnm*1 + 1*1);
	song.currentTime = 0;
	document.getElementById('seek').value = 0;
	document.getElementById(reqbtnid).click();
	song.play();
});
function ply(){
  chkpp();
  song.play();
  document.getElementById("pply").style.display = "none";

  document.getElementById("ppse").style.display = "inline-block";
  document.getElementById("ply").style.display = "none";
  document.getElementById("pse").style.display = "inline-block";
  }
function pse(){
  chkpp();
  song.pause();
  document.getElementById("pply").style.display = "inline-block";

  document.getElementById("ppse").style.display = "none";
  document.getElementById("pse").style.display = "none";
  document.getElementById("ply").style.display = "inline-block";
  }
function menu(){
  document.getElementById("menu").classList.add("active");
  document.getElementById("menubk").style.display = "block";
  }
  function ofmenu(){
  document.getElementById("menu").classList.remove("active");
  document.getElementById("menubk").style.display = "none";
  }
function srch(){
  document.getElementById("glow").style.display = "none";
  document.getElementById("srch_page").style.display = "block";
  
document.getElementById("myInput").focus();
  }
function ofsrch(){
  document.getElementById("srch_page").style.display = "none";
  document.getElementById("glow").style.display = "block";
  }
