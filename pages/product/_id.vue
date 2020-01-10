<template>
  <div>
    {{id}}
  </div>
</template>

<script>
    export default {
        data: function() {
            return {
                id: '',
            }
        },
        mounted() {
            this.id = this.$route.params.id;
        }
    }
</script>

<style scoped>

</style>
