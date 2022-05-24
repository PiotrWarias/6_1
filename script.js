(function () {
  const ex1=document.getElementById ('ex1_button')
  const ex1c=document.getElementById ('ex1_content')
  const ex2=document.getElementById ('ex2_text')
  const ex2c=document.getElementById ('ex2_content')
  
  function validTel(str){
  str = str.replace(/[^0-9]/g, '');
  var l = str.length;
  if(l<9 || l>9) return ['Długość numeru musi być równa 9'];
  var tel = '', num = str.substr(-7),
      code = str.substr(-9, 3),
      coCode = '';
  if(l>9) {
    coCode =  + str.substr(0, (l-9) );
  }
  tel = coCode + code + num;
  
  return ['okay ', tel];
}
  function isNumeric(num){
  return !isNaN(num)
}
  
  ex1.addEventListener("click", function(){
    var data="";
    for(var i = 0;i < 9;i ++){
      if(i != 0)
        data += ",";
      data += i.toString();
    }
    ex1c.innerHTML=data;
  })
  
  ex2.addEventListener("change", function(){
    ex2c.innerHTML=isNumeric(ex2.value);
    ex2c.innerHTML=validTel(ex2.value);
  })
})();