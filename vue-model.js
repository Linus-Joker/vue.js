HTML部分:

<body>
  <div id="app">
    
    輸入台幣: <input type="text" v-model="NT">元

   <ul>
     <li>日幣:{{NT / 0.2719}}元</li>
     <li>美金:{{NT / 30.657}}元</li>
     <li>人民幣:{{NT / 4.623}}元</li>
     <li>港幣:{{NT / 3.945}}元</li>
   </ul>
    
  </div>
   
  <script src="https://unpkg.com/vue"></script>
</body>


JS部分:

var app = new Vue({
  el:"#app",
  data:{
    NT:0
    
  }
  
})
