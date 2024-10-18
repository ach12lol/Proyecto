window.addEventListener('scroll',() => {const wrapper = index.getElementById('wrapper');
    if(window.scrollY >0){
        wrapper.classlist.remove('shown');
        wrapper.classlist.add('hidden');
    }else{
        wrapper.classlist.remove('hidden');
        wrapper.classlist.add('shown');
    }
});

<script>
function updateDiv(){ $("i").load("i > *");} 
window.addEventListener('scroll', () => {
  const i = document.getElementById('i');
  if (window.scrollY > 0) {
    function change_autorefreshdiv(){
      var div = document.getElementById("i")
      div.className="hidden"
      updateDiv();
    } 
  } else {
    function change_autorefreshdiv(){
      var div = document.getElementById("i")
      div.className="shown"
      updateDiv();
    } 
  }
});</script>