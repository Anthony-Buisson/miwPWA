<template>
  <div :class="`circle circle-${color}`"></div>
</template>
<script>
  export default {
      props: {
          grade: {
              type: Number,
              default: 0,
              required: true
          }
      },
      data(){
          const color = this.grade < 5 ? 'red' : this.grade < 8 ? 'orange' : 'green';
          return {
              color
          }
      }
  }
</script>
<style lang="scss" scoped>
  .circle{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    &-red{
      background-color: red;
    }
    &-green{
      background-color: green;
    }
    &-orange{
      background-color: orange;
    }
  }
</style>
