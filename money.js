
  function convert(){
  var amount = document.getElementById("amount").value
    var tienvao= document.getElementById("tienvao").value
    var tienra = document.getElementById("tienra").value
    var x = amount*tienvao/tienra
    var y = document.getElementById("tienra");
    var text= y.options[y.selectedIndex].text;
    document.getElementById('result').innerText= ("Result = " + x + text)
    }