<template>
  <div class="home">
 
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
 

export default {
  name: "Home",
  components: {
    HelloWorld
  },
    mounted() {

    // 使用：执行一个laydate实例

    //this.$layer.alert("！");

  }
};
</script>
