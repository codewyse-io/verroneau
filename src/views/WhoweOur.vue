<template>
<section class="blog_de">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="main_static_b_details about_uspage">
                    <h4>Who are we ?</h4>
                    <hr>
                    <AboutNav />
                    <hr>
                </div>
            </div>
            <div class="col-md-8">
                <div class="blog_detailss_content">
                    <div class="first_inner_img">
                        <img :src="require('../assets/img/gallery1.webp')" alt="">
                    </div>
                    <p class="mt-5">Décors Véronneau is a family owned, Quebec-based business that offers a selection of artificial plants and flowers, custom floral arrangements, and green walls that can be scaled for large or small projects. The company is renowned for its large number of artificial trees, made from the trunk of real trees, with artificial foliage.</p>
                    <p>The first impression is not just limited to the interior of your Airbnb. When guests arrive onsite, the exterior of your property can also play a crucial role in their decision to book. By investing in a beautiful outdoor decor, you create an immersive experience from the very first moment your guests arrive.</p>
                    <p>When the company began its journey over thirty years ago, founder and owner Guy Véronneau mainly specialized in plant maintenance services for businesses. He quickly realized that there was a growing frustration in terms of maintenance costs for these plants, as well as replacing them. It was from this point that the idea of hybrid plants was born, and a transformation put into place.</p>
                    <p>Since then, the products available at Décors Véronneau have a reputation that is second to none, that also contributes to the continued success of their commercial design teams, which is specialised in interior and outdoor decor, as well as larger-than-life holiday displays.</p>
                    <p>Over the years, the company’s installations have been seen at Complexe Desjardins, Fairmont Queen Elizabeth hotel, and at the prestigious Birks, as well as in numerous restaurants, grocery stores, condo buildings, car dealerships, offices, retirement communities and malls.</p>
                    <p>Décors Véronneau currently counts on a Laval store and employs over 65 people who contribute to the company’s success on a daily basis. Whether in store or online, you will find a large inventory of vases and pots, as well as paintings, decor accessories, garden essentials, and holiday decorations.</p>
                    <div class="team_meet">
                      <h3>Management team</h3>
                      <ul>
                        <li>
                          <div class="team_img">
                            <img :src="require('../assets/img/team1.webp')" alt="">
                          </div>
                          <hr>
                          <div class="team_namess">
                            <h5>Guy Véronneau</h5>
                            <p>Guy Véronneau</p>
                          </div>
                        </li>
                        <li>
                          <div class="team_img">
                            <img :src="require('../assets/img/team1.webp')" alt="">
                          </div>
                          <hr>
                          <div class="team_namess">
                            <h5>Guy Véronneau</h5>
                            <p>Guy Véronneau</p>
                          </div>
                        </li>
                        <li>
                          <div class="team_img">
                            <img :src="require('../assets/img/team1.webp')" alt="">
                          </div>
                          <hr>
                          <div class="team_namess">
                            <h5>Guy Véronneau</h5>
                            <p>Guy Véronneau</p>
                          </div>
                        </li>
                      </ul>
                    </div>
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
