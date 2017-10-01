<body>
  <div id="app">
    <h2>顏色列表</h2>
    <ul>
      <li v-if="load">
        {{color}}
      </li>
      
      <li v-if="loads">
        {{color2}}
      </li>
    </ul>
     
  </div>
<script src="https://unpkg.com/vue"></script>
</body>


var app =new Vue({
  el:'#app',
  data:{
    color:'blue',
    load:true,
    color2:'yellow',
    loads:true
      
  }
  
})
