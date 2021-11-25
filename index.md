# AS Brothers
<style>
#skip-to-content, .page-header, .site-footer, h1:nth-child(1){width: 0;height: 0;padding: 0;margin: 0;opacity: 0;visibility: hidden;display: none;}
div.container-lg.px-3.my-5.markdown-body{padding: 10px 20px !important;margin: 0 !important;height: 60px !important;width: 100%;max-width: 100% !important;}
div.container-lg.px-3.my-5.markdown-body h1{margin-top: 0px !important;color: rgb(3, 102, 204);}
* {box-sizing: border-box;}
#myInput {background-image: url('https://www.w3schools.com/css/searchicon.png');background-position: 10px 10px;background-repeat: no-repeat;width: 100%;font-size:16px;padding:12px 20px 12px 40px;border: 1px solid #000;margin-bottom: 12px;}
.header{font-size: 20px;text-align: left;padding: 12px;border: 1px solid #000;}
#myTable {width: 100%;border: 1px solid #000;border-top: none;font-size: 18px;}
#myTable div{text-align: left;padding: 12px;border-bottom: 1px solid #ddd;}
.header, #myTable div:hover {background-color: #f1f1f1;}
</style>

<input id='myInput' onkeyup='myFunction()' placeholder='Search for names..' title='Type in a name' type='text'/>
<div class='header'>Our Projects</div>
<div id='myTable'></div>

<script>
const tools = [
  {
   n: '1st Tool',
   u: 'https://techimodi.blogspot.com/'
  },
  {
   n: '2nd Tool',
   u: 'https://rtugames.blogspot.com/'
  },
  {
  n: '3rd tool',
  u: 'https://techimodi.blogspot.com/'
  }
]
function additem(item, index){
 var html = "<div><a href='"+item.u+"' target='_blank'>"+item.n+"</a></div>";
document.getElementById("myTable").innerHTML += html;
}
tools.forEach(additem);
</script>
