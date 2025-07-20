<template>
<section class="blog_de">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="main_static_b_details about_uspage">
                    <h4>Advantage card</h4>
                    <hr>
                    <AboutNav />
                    <hr>
                </div>
            </div>
            <div class="col-md-8">
                <div class="blog_detailss_content">
                    <div class="first_inner_img">
                        <img :src="require('../assets/img/advantag.png')" alt="">
                    </div>
                    <h5 class="mt-5">Discounts in-store with the card</h5>
                    <p>The Advantage Card is a free loyalty card used to combine purchases, and, once full, gives you a $10 discount on your next purchase. This card is valid in Décors Véronneau’s store in Laval.</p>
                  
                  <div class="main_inner_img">
                    <img :src="require('../assets/img/saop.webp')" alt="">
                  </div>
                 <h4>Terms of use :</h4>
                 <p>All cash or debit purchases of $25 or more, before taxes, entitle you to a stamp on your card.</p>
                 <ul>
                  <li>The card cannot be combined with any other promotion.</li>
                  <li>The card cannot be applied to already-reduced items, handling, consultations, delivery, installation or gift cards.</li>
                  <li>The Advantage Card is non-transferable.</li>
                  <li>Once the card is full, you are entitled to a $10 off your next purchase in our store.</li>
                  <li>Décors Véronneau reserves the right to terminate or modify the Advantage Card program at any time, without notice.</li>
                  <li>The card cannot be replaced if lost.</li>
                  <li>The card is valid in store only, and cannot be applied to online purchases.</li>
                  <li>Décors Véronneau reserves the right to refuse a card that is damaged or whose stamps are irregular.</li>
                  <li>The Advantage Card does not expire; it is valid at all times.</li>
                 </ul>
                 <p>To claim your $10 discount, you must fill in all the squares (16 squares) and present your card at the service counter during your next purchase. The sales associate will retrieve it and staple it to your invoice.</p>
                 <p>Get your Advantage Card at the service counter of our Laval store.</p>
                </div>
            </div>
        </div>
    </div>
</section>
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
import AboutNav from "@/components/AboutNav.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {
      AboutNav,
        FooterSection,
    }
};
</script>
