<template>
<section class="myfavourite">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_my_favourite-">
                    <h2>Your list of favorites</h2>
                    <table style="width:100%">
                        <tr>
                            <th>Product name</th>
                            <th>Unit price</th>
                        </tr>
                        <tr>
                            <td>No products added to the wishlist</td>
                            <td></td>
                            <td></td>
                        </tr>
                       
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

<ProductList />

<section class="second_last">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_newletter">
                    <h2>Save with our newsletter!</h2>
                    <p>Save with our newsletter!</p>
                    <form action="">
                        <input type="email" placeholder="Your email address" required>
                        <input type="submit" value="Subscribe to the newsletter">
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<FooterSection />
</template>


<script>
import ProductList from "@/components/ProductList.vue"
import FooterSection from "@/components/FooterSection"


export default {
      name: 'MyFavouritePage',
      components: {
        ProductList,
        FooterSection,
      }
  };
</script>