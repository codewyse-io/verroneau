<template>
<section class="blog_de">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="main_static_b_details about_uspage">
                    <h4>Contests</h4>
                    <hr>
                    <AboutNav />
                    <hr>
                </div>
            </div>
            <div class="col-md-8">
                <div class="blog_detailss_content">
                    <div class="first_inner_img">
                        <img :src="require('../assets/img/concours.png')" alt="">
                    </div>
                    <h5 class="mt-5">Contest closed - Transform your decor this summer!</h5>
                    <p><b>$2500 in gift cards</b> to win! 1 grand prize of $1500 and 2 prizes of $500.</p>
                    <p><b>This contest is now closed,</b> here are the list of the winners:</p>
                    <p>First grand prize of a $1500 gift card: Sylvie Laplante <br>Second prize of a $500 gift card: Karine Lessard <br>Third prize of a $500 gift card: Marielle Perron-Bacchi</p>
                    <p>*The winners will be contacted by email. Thank you for participating!</p>                    
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
                        <input type="text" placeholder="Your email address" required>
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
