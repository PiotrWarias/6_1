(function () {
  const ex1=document.getElementById ('ex1_button')
  const ex1c=document.getElementById ('ex1_content')

  ex1.addEventListener("click",function(){
    var data="";
    for(var i = 0;i < 10;i ++){
      if(i != 0)
        data += ",";
      data += i.toString();
    }
    ex1c.innerHTML=data;
  })
})();