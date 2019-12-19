<template>
  <div>
    <table v-for="(product) in products" :key="product._id.$oid">
      <thead>
      <tr>
        <th colspan="3"><h2>{{ product.name }}</h2></th>
      </tr>
      <tr>
        <th><h3>de {{ product.brand }}</h3></th>
        <th><i>code-barre : {{ product.bar_code ? product.bar_code.$numberInt : 'non renseigné' }}</i></th>
        <th><i>quantité : {{ product.quantity || 'non renseignée' }}</i></th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="product.ingredients.length > 0">
        <td>Liste des ingrédients :</td>
        <td colspan="2" ><span v-for="(ingredient, index) in product.ingredients">{{ ingredient.name }} ({{ ingredient.proportion }}%)<br></span></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';
    export default {
    //generateur bd : https://mockaroo.com/
        data(){
            return {
                products: [
                    {
                        "_id": {
                            "$oid": "5dea4fa36247bf23d8339037"
                        },
                        "name": "Lipton Ice Tea",
                        "brand": "Lipton",
                        "bar_code": {
                            "$numberInt": "123456789"
                        },
                        "grade": "5",
                        "pictures": ["/public/img1", "/public/img2"],
                        "quantity": "200 ml",
                        "ingredients": [{
                            "name": "sugar",
                            "proportion": "70"
                        }, {
                            "name": "petrol",
                            "proportion": "10"
                        }, {
                            "name": "water",
                            "proportion": "5"
                        }, {
                            "name": "strawberry",
                            "proportion": "10"
                        }, {
                            "name": "milk",
                            "proportion": "5"
                        }]
                    },
                    {
                        "_id": {
                            "$oid": "5dfb3be981c85c2f808c89cb"
                        },
                        "pictures": [],
                        "quantity": "",
                        "ingredients": [],
                        "name": "pepsi",
                        "brand": "satan",
                        "__v": {
                            "$numberInt": "0"
                        }
                    }
                ]
            }
        },
        methods:{
            ...mapActions(['fetchProducts'])
        },
        computed:
            mapState({
                // products: state => state.api
            }),
        mounted() {
            // this.fetchProducts();
        }
    }
</script>
<style>
  table{
    border: 1px solid black;
    margin: 1rem;
  }
</style>
