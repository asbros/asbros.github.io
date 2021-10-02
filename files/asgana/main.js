var sngs = document.getElementById(&quot;myTable&quot;).getElementsByClassName(&quot;sngdv&quot;);
  for (var sng = 0; sng &lt; sngs.length; sng++){
  sngs[sng].setAttribute(&quot;id&quot;, sng);
  }
  document.getElementById(&quot;srch_page&quot;).innerHTML += document.getElementById(&quot;myTable&quot;).innerHTML;
function srcsng(atnm){
  filter = atnm.toUpperCase();
  td = document.getElementById(&quot;myTable&quot;).getElementsByClassName(&quot;sngdv&quot;);
  for (i = 0; i &lt; td.length; i++) {
    tdv = td[i];
    if (tdv) {
      txtValue = tdv.textContent || tdv.innerText;
      if (txtValue.toUpperCase().indexOf(filter) &gt; -1) {
    var nwsng = document.createElement(&quot;div&quot;);
    nwsng.setAttribute(&quot;class&quot;, &quot;sngdv&quot;);
    nwsng.setAttribute(&quot;data-src&quot;, tdv.getAttribute(&quot;data-src&quot;));
    nwsng.setAttribute(&quot;id&quot;, tdv.getAttribute(&quot;id&quot;));
    nwsng.setAttribute(&quot;onclick&quot;, &quot;plysng(this)&quot;);
    var nwimg = document.createElement(&quot;img&quot;);
    nwimg.setAttribute(&quot;src&quot;, tdv.getElementsByClassName(&quot;sngimg&quot;)[0].src);
    nwimg.setAttribute(&quot;class&quot;, &quot;sngimg&quot;);
    var nwply = document.createElement(&quot;img&quot;);
    nwply.setAttribute(&quot;class&quot;, &quot;play_icon&quot;);
    nwply.setAttribute(&quot;src&quot;, &quot;https://html-code-editor.w3spaces.com/play.svg&quot;);
    var nwpnm = document.createElement(&quot;p&quot;);
    nwpnm.setAttribute(&quot;class&quot;, &quot;plsnm&quot;);
    nwpnm.innerText = tdv.getElementsByClassName(&quot;plsnm&quot;)[0].innerText;
    nwsng.appendChild(nwimg);
    nwsng.appendChild(nwply);
    nwsng.appendChild(nwpnm);
    document.getElementById(&quot;orcnt&quot;).appendChild(nwsng);
    document.getElementById(&quot;artist_page&quot;).getElementsByClassName(&quot;nosngs&quot;)[0].innerHTML = document.getElementById(&quot;artist_page&quot;).getElementsByClassName(&quot;nosngs&quot;)[0].innerHTML*1+1;
      } else {}
    }
  }
}
function art(artist){
    var artist_page = document.getElementById(&quot;artist_page&quot;);
    artist_page.getElementsByClassName(&quot;aimg&quot;)[0].src = artist.getElementsByClassName(&quot;artimg&quot;)[0].src;
    artist_page.getElementsByClassName(&quot;anm&quot;)[0].innerText = artist.getElementsByClassName(&quot;artnm&quot;)[0].innerText;
    srcsng(artist.getElementsByClassName(&quot;artnm&quot;)[0].innerText);
    document.getElementById(&quot;glow&quot;).style.display = &quot;none&quot;;
document.getElementById(&quot;srch_page&quot;).style.display = &quot;none&quot;;
    document.getElementById(&quot;artist_page&quot;).getElementsByClassName(&quot;nosngs&quot;)[0].innerHTML += &quot; SONGS&quot;;
 document.getElementById(&quot;artist_page&quot;).style.display = &quot;block&quot;;
}
function dsart(){
    document.getElementById(&quot;artist_page&quot;).style.display = &quot;none&quot;;
    
 document.getElementById(&quot;glow&quot;).style.display = &quot;block&quot;;
    document.getElementById(&quot;orcnt&quot;).innerHTML = &quot;&quot;;
    document.getElementById(&quot;artist_page&quot;).getElementsByClassName(&quot;nosngs&quot;)[0].innerHTML = &quot;0&quot;;
}
var song = new Audio;
var isStopped = true;

localStorage.setItem(&quot;cntsngid&quot;, &quot;0&quot;);
song.src = document.getElementById(&quot;0&quot;).getAttribute(&quot;data-src&quot;);

function hld(){
    document.getElementById(&quot;load&quot;).style.display = &quot;none&quot;;
}

song.addEventListener(&#39;loadstart&#39;, function(){
    document.getElementById(&quot;load&quot;).style.display = &quot;block&quot;;
});
function chkpp(){
  if(song.paused){
  document.getElementById(&quot;pply&quot;).style.display = &quot;inline-block&quot;;
  document.getElementById(&quot;ppse&quot;).style.display = &quot;none&quot;;
  document.getElementById(&quot;ply&quot;).style.display = &quot;inline-block&quot;;
  document.getElementById(&quot;pse&quot;).style.display = &quot;none&quot;;
  } else{
  document.getElementById(&quot;pply&quot;).style.display = &quot;none&quot;;
  document.getElementById(&quot;ppse&quot;).style.display = &quot;inline-block&quot;;
  document.getElementById(&quot;ply&quot;).style.display = &quot;none&quot;;
  document.getElementById(&quot;pse&quot;).style.display = &quot;inline-block&quot;;
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
  song.src = plsng.getAttribute(&quot;data-src&quot;);
  song.play();
  ply();
  songName = document.getElementById(&quot;songName&quot;);
  songName.innerHTML = plsng.getElementsByClassName(&quot;plsnm&quot;)[0].innerText;
var sngnum = plsng.getAttribute(&quot;id&quot;);
localStorage.setItem(&quot;cntsngid&quot;, sngnum);
    document.getElementById(&quot;btnsngnm&quot;).innerHTML = plsng.getElementsByClassName(&quot;plsnm&quot;)[0].innerText;
	document.getElementById(&quot;btmimg&quot;).src = plsng.getElementsByClassName(&quot;sngimg&quot;)[0].src;
	document.getElementById(&quot;dftimg&quot;).src = plsng.getElementsByClassName(&quot;sngimg&quot;)[0].src;
	document.getElementById(&quot;btmnu&quot;).style.display = &quot;block&quot;;
}

function skip(to) {
	if (to == &#39;prev&#39;) {
	  if (localStorage.getItem(&quot;cntsngid&quot;) &gt; 0){
	  var plyprnm = localStorage.getItem(&quot;cntsngid&quot;);
	  var reqbtnid = (plyprnm*1 - 1*1);
	  document.getElementById(reqbtnid).click();
	  song.play();
	  } else{
	      alert(&quot;This is the first music.\nClick on the next button to play next.&quot;);
	  }
	}
	else if (to == &#39;next&#39;) {
		if (localStorage.getItem(&quot;cntsngid&quot;) &gt; -1){
		var plyprnm = localStorage.getItem(&quot;cntsngid&quot;);
		var reqbtnid = (plyprnm*1 + 1*1);
		document.getElementById(reqbtnid).click();
		song.play();
		} else{
		document.getElementById(&quot;0&quot;).click();
		}
	}
}

function stop() {
	song.pause();
	song.currentTime = 0;
	document.getElementById(&quot;seek&quot;).value = 0;
	isStopped = true;
}

function tmvl(){
    var cutime = parseInt(song.currentTime,10);
	var ltstm = Math.floor(song.duration/60)+&#39;:&#39;+Math.floor(song.duration)%60;
	document.getElementById(&#39;ltstm&#39;).innerHTML = &#39;  &#39;+ltstm;
	if (cutime &gt; 59){
	var ftstm = Math.floor(cutime/60)+&#39;:&#39;+Math.floor(cutime)%60;
	document.getElementById(&#39;ftstm&#39;).innerHTML = ftstm;
	} else{
	document.getElementById(&#39;ftstm&#39;).innerHTML = &#39;0:&#39;+cutime+&#39;  &#39;;
	}
}

function setPos(pos) {
	song.currentTime = pos;
}

function main(){
  chkpp();
  document.getElementById(&quot;player&quot;).classList.add(&quot;active&quot;);
  document.getElementById(&quot;back&quot;).style.display = &quot;block&quot;;
  document.getElementById(&quot;body&quot;).style.overflow = &quot;hidden&quot;;
}
function del(){
  chkpp();
  document.getElementById(&quot;player&quot;).classList.remove(&quot;active&quot;);
  document.getElementById(&quot;back&quot;).style.display = &quot;none&quot;;
  document.getElementById(&quot;body&quot;).style.overflow = &quot;scroll&quot;;
}
function myFunction() {
  var input, myTable, filter, td, arts, i, a, txtValue, artVl;
  input = document.getElementById(&quot;myInput&quot;);
  myTable = document.getElementById(&quot;srch_page&quot;);
  filter = input.value.toUpperCase();
  arts = myTable.getElementsByClassName(&quot;artdv&quot;);
  td = myTable.getElementsByClassName(&quot;sngdv&quot;);
  if (filter != null){
  for (i = 0; i &lt; td.length; i++) {
    tdv = td[i];
    if (tdv) {
      txtValue = tdv.textContent || tdv.innerText;
      if (txtValue.toUpperCase().indexOf(filter) &gt; -1) {
        tdv.style.display = &quot;inline-block&quot;;
      } else {
        tdv.style.display = &quot;none&quot;;
      }
    }
  }
  for (a = 0; a &lt; arts.length; a++){
    art = arts[a];
    if (art) {
      artVl = art.getElementsByClassName(&quot;artnm&quot;)[0].innerText;
      if (artVl.toUpperCase().indexOf(filter) &gt; -1) {
        art.style.display = &quot;inline-block&quot;;
      } else {
        art.style.display = &quot;none&quot;;
      }
    }
  }
  }
}

song.addEventListener(&#39;error&#39;, function(){
	stop();
	document.getElementById(&quot;songName&quot;).innerHTML = &quot;Error Loading Audio!&quot;;
  document.getElementById(&quot;btnsngnm&quot;).innerHTML = &quot;Error Loading Audio!&quot;;
});

song.addEventListener(&#39;timeupdate&#39;, function() {
	curtime = parseInt(song.currentTime,10);
	document.getElementById(&#39;seek&#39;).max = song.duration;
	document.getElementById(&#39;seek&#39;).value = curtime;
    document.getElementById(&quot;load&quot;).style.display = &quot;none&quot;;
	tmvl();
});

song.addEventListener(&quot;ended&quot;, function() {
	var plyprnm = localStorage.getItem(&quot;cntsngid&quot;);
	var reqbtnid = (plyprnm*1 + 1*1);
	song.currentTime = 0;
	document.getElementById(&#39;seek&#39;).value = 0;
	document.getElementById(reqbtnid).click();
	song.play();
});
function ply(){
  chkpp();
  song.play();
  document.getElementById(&quot;pply&quot;).style.display = &quot;none&quot;;

  document.getElementById(&quot;ppse&quot;).style.display = &quot;inline-block&quot;;
  document.getElementById(&quot;ply&quot;).style.display = &quot;none&quot;;
  document.getElementById(&quot;pse&quot;).style.display = &quot;inline-block&quot;;
  }
function pse(){
  chkpp();
  song.pause();
  document.getElementById(&quot;pply&quot;).style.display = &quot;inline-block&quot;;

  document.getElementById(&quot;ppse&quot;).style.display = &quot;none&quot;;
  document.getElementById(&quot;pse&quot;).style.display = &quot;none&quot;;
  document.getElementById(&quot;ply&quot;).style.display = &quot;inline-block&quot;;
  }
function menu(){
  document.getElementById(&quot;menu&quot;).classList.add(&quot;active&quot;);
  document.getElementById(&quot;menubk&quot;).style.display = &quot;block&quot;;
  }
  function ofmenu(){
  document.getElementById(&quot;menu&quot;).classList.remove(&quot;active&quot;);
  document.getElementById(&quot;menubk&quot;).style.display = &quot;none&quot;;
  }
function srch(){
  document.getElementById(&quot;glow&quot;).style.display = &quot;none&quot;;
  document.getElementById(&quot;srch_page&quot;).style.display = &quot;block&quot;;
  
document.getElementById(&quot;myInput&quot;).focus();
  }
function ofsrch(){
  document.getElementById(&quot;srch_page&quot;).style.display = &quot;none&quot;;
  document.getElementById(&quot;glow&quot;).style.display = &quot;block&quot;;
  }
