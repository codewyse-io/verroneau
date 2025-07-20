


<template>
  <section class="cat_sec">
    <div class="container">
        <div class="col-md-12">
            <div class="banner_cat">
                <h2>Outdoor and garden</h2>
                <p>Outdoor flowers, plants, garden decorations, trellises and planters</p>
            </div>
        </div>
    </div>
  </section>

  <div class="last">
    <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">About</a></li>
            </ul>
  </div>

  <NewArrivalProduct />
  <CategoryList />
  <ProductList />

  <section>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_product_disca">
                    <p>Take advantage of the warm, sunny days of summer right in your own yard, whether you have a small balcony or a large one, we have some ideas with realistic plastic plants just for you ! Decorate your patio and balcony with our collection of outdoor potted arrangements, outdoor artificial palm trees and artificial outdoor green plants. A large number of our realistic artificial plants for outdoors is guaranteed two years against UV discoloration, as well as our outdoor artificial flowers. All you need to do is place them in your yard and enjoy – no maintenance required! Our plant trellis for its part has a 5 year warranty against UV rays. It is the perfect outdoor privacy screen to use as an outdoor wall decor. Décors Véronneau is the destination to buy plants in Montreal. We deliver anywhere in Canada. Get the most realistic and the best artificial outdoor plants that have nothing from fake outdoor plants !</p>
                    <p>If you prefer the look of flowers, opt for potted outdoor flower arrangements, deck rail planters, outdoor hanging plants, hanging flower basket arrangements or flower boxes! These floral arrangements are filled with stunning outdoor hanging flowers like artificial geranium flowers and hibiscus flowers that will be in bloom all year long. You can even find a selection of outdoor floral centerpieces to make your outdoor table decor more inviting. If you’re looking to create your own outdoor floral compositions we have some flowers for planters available for you, from hanging pots to suspended plants made for your outdoor decor.</p>
                    <p>Not really looking for flowers ? Let our realistic outdoor artificial plants and shrubs become your new favorite! You’ll find a selection of artificial patio plants, hanging plants, realistic fake grass for balcony and boxwood balls of all sizes. With our artificial cedars or a boxwood topiary, you could also make a cedar fencing panel. If you prefer a more exotic feel in your outdoor space, you’ll love our high-quality fake agave and outdoor palm trees – perfect for your pool area. Use an outdoor palm plant or fake plants that look real to transform your deck decor.</p>
                    <p>In our outdoor planter section, you’ll find all of the essentials that you’ll need to show off your new faux botanicals. For example, outdoor flower pots, planter boxes, garden baskets, outdoor standing planters, flower boxes or raised garden boxes. Whether your are looking for a tall planter, modern flower pot, plastic planter pot or large outdoor planters, we have it all. Your flower boxes will have never looked this good!</p>
                    <p>Finally, to make sure that whatever’s in your yard remains your business, make sure to have a look at our trellis also called expandable privacy fence panel made with artificial foliage. It works as privacy screens that also adds an aesthetic element. Don’t forget to look at our outdoor garden decorations including : garden statues, birdhouses, bird baths, outdoor cushions, patio lanterns, solar lights and more.</p>
                    <p>Show us how you style your Décors Véronneau products by using #veronneau with your pictures on Facebook and on Instagram. Enjoy the warm weather!</p>
                </div>
            </div>
        </div>
    </div>
  </section>

  <FooterSection />
 </template>
  
  
  
  <script>
import NewArrivalProduct from "@/components/NewArrivalProduct.vue"
import CategoryList from "@/components/CategoryList.vue"
import ProductList from "@/components/ProductList.vue"
import FooterSection from "@/components/FooterSection.vue"

  export default {
      name: 'ProductCategory',
      components: {
        NewArrivalProduct,
        CategoryList,
        ProductList,
        FooterSection,
      }
  };
  </script>
  
  