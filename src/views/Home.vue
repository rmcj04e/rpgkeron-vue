<template>
<div>
  <div class="ui-block-news">

    <Post v-for="post in posts" :title="post.title" :text="post.text" :date="post.date" :key="post.id"/>

  </div>
</div>
</template>

<script>
import Post from "@/layouts/MainComponents/Post"
export default {
  name: 'Home',
  components : {Post},
  data(){
    return {
      posts : [
        {title : "aboba",text : "bruh" , date : "пять десять пятого"},
        {title: "bruh", text : "КОШКА МАСЯ РОДИЛА СОБАКУ", date: "десять восьмого пятого"}
      ]
    }
  }
}
</script>
