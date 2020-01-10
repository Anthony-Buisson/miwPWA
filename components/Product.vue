<template>
  <div class="product">
    <div class="product__infos">
      <div class="product__imgWrapper"></div>
      <div class="product__name">{{ product.name }}</div>
      <circle-color :grade="product.grade"></circle-color>
    </div>
  </div>
</template>
<script>
  import CircleColor from "./CircleColor";
  export default {
      components:{
          CircleColor
      },
      props: {
          product: {
              type: Object,
              default: '',
              required: true
          }
      }
  }

</script>
<style>

</style>
