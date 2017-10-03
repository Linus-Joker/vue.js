HTML部分

<body>
  <div id="app">
  小名的年齡:<input type="text" v-model="a"><br>
  小華的年齡:<input type="text" v-model="b">
  
  <ul>
    <li>誰的年紀比較小:{{year}}</li>
  </ul>
  
  </div>
  
  
<script src="https://unpkg.com/vue"></script>
</body>

JS 部分

var app = new Vue({
  el:"#app",
  data:{
    a:0,
    b:0
    
  },
  computed:{
    year: function(){
      if(this.a < this.b){
        return '小名年紀比較小'
      }else if(this.b < this.a){
        return '小華年紀比較小'
      }else{
        
        return '一樣!!'
      }
      
    }
  }
  
  
})
