# ![AS BROTHERS](https://asbros.github.io/image/icons8-male-user.gif)[AS BROTHERS](https://asbros.github.io/)
<meta content='https://img.icons8.com/cute-clipart/64/000000/web.png' property='og:image'/>
<link rel="shortcut icon" href="https://img.icons8.com/cute-clipart/64/000000/web.png" type="image/vnd.microsoft.icon"/>
<style>
@import url('https://fonts.googleapis.com/css2?family=Amarante&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
#skip-to-content, .page-header, .site-footer, h1:nth-child(1){width: 0;height: 0;padding: 0;margin: 0;opacity: 0;visibility: hidden;display: none;}
div.container-lg.px-3.my-5.markdown-body{padding: 10px 20px !important;margin: 0 !important;height: 80px !important;width: 100%;max-width: 100% !important;}
div.container-lg.px-3.my-5.markdown-body img{width: 60px;height: 60px;}
div.container-lg.px-3.my-5.markdown-body h1{margin-top: 0px !important;color: #000;font-family: 'Amarante', cursive;}
div.container-lg.px-3.my-5.markdown-body h1 a{position: relative;bottom: 15px;}
*{box-sizing: border-box;}
#myInput {background-image: url('https://img.icons8.com/color/48/000000/search--v1.png');background-position: 7px 8px;background-size: 30px;background-repeat: no-repeat;width: 100%;font-size:16px;padding:12px 20px 12px 40px;border: 1px solid #000;margin-bottom: 10px;outline: none;font-family: 'Ubuntu', sans-serif;}
.header{font-size: 20px;text-align: left;padding: 12px;border: 1px solid #000;}
#myTable {width: 100%;border: 1px solid #000;border-top: none;font-size: 18px;}
#myTable a{display: block;text-align: left;padding: 14px;border-bottom: 1px solid #ddd;font-family: 'Ubuntu', sans-serif;}
.header{font-family: 'Amarante', cursive;}
.header, #myTable a:hover {background-color: #f1f1f1;}
</style>

<input id='myInput' onkeyup='myFunction()' placeholder='Search for projects...' title='Type in a name' type='text'/>
<div class='header'>Our Projects</div>
<div id='myTable'></div>

<script>
const tools = [
  {
   n: 'Code Editor',
   u: 'https://asbros.github.io/tool/code-editor.html'
  },
  {
   n: 'Dictionary App',
   u: 'https://asbros.github.io/tool/dictionary-app.html'
  },
  {
  n: 'Jokes Generator',
  u: 'https://asbros.github.io/tool/jokes-generator.html'
  }
]
function additem(item, index){
 var html = "<a href='"+item.u+"' target='_blank'>"+item.n+"</a>";
document.getElementById("myTable").innerHTML += html;
}
tools.forEach(additem);
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("a");
  for (i = 0; i < tr.length; i++) {
    td = tr[i];
    if (td) {
      txtValue = td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
</script>
