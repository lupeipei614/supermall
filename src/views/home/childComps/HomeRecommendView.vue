<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" width="90%"/>
        <p>{{item.title}}</p>
      </a>
    </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  border-bottom: 8px solid #eee;
}
  .recommend-item{
    padding: 10px 0 20px;
    font-size: 12px;
    flex: 1;
    text-align: center;
    line-height: 20px;
  }
</style>
