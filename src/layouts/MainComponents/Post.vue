<template>
  <div class="ui-block-basic news">
    <div class="ui-block-content row-content-direction">
      <div class="preview">
        <div class="img-wrapper"><img src="@/assets/media/images/banner.jpg" alt="News 1"></div>
      </div>
      <div class="content">
        <div class="news-title">
          <h2>{{ title }}</h2>
        </div>
        <p class="description">{{ text }}</p>
        <div class="news-footer"><a class="ui-button-big icon-left" href="">
          <div class="name">Читать полностью</div><i class="ui-icon ui-icon-view"></i></a>
          <div class="time">{{ date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "Post",
  props : {
    title : String,
    text  : String,
    date :  String
  }
}
</script>