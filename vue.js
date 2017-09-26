1.vue.js的 if 條件式判斷
  
var app = new Vue({
  el:".app",
  data:{
  message:'hello',
    seen:false
  
}
  
});

var app3 = new Vue({
  el:"#app3",
  data:{
  seen:true
  
}
  
});

2.vue.js的 for 迴圈用法

var app4 = new Vue({
  el:".app4",
  data:{
    todos:['123456','654321'],
    home:[{sister:"Candy"},{sister:"Tina"}]
  }
  
})


https://jsbin.com/nipematira/edit?html,js,output
