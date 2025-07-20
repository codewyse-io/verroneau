<template>
<section class="blog_de">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="main_static_b_details about_uspage">
                    <h4>Terms and conditions</h4>
                    <hr>
                    <AboutNav />
                    <hr>
                </div>
            </div>
            <div class="col-md-8">
                <div class="blog_detailss_content">
                    <p>These Terms of Use govern your practices associated with the Customer Ratings and Review platform offered by Les Plantes d’Intérieur Véronneau Inc. (Décors Véronneau).
                        By submitting any rating or review unto “https://veronneau.com/en” you agree and warrant that:</p>
                    <ul>
                        <li>You are at least 16 years old.</li>
                        <li>You are at least 16 years old.</li>
                    </ul>
                    <p>Additionally, you agree and warrant that you may not publish any material:</p>
                    <ul>
                        <li>You are at least 16 years old.</li>
                        <li>You are at least 16 years old.</li>
                        <li>You are at least 16 years old.</li>
                        <li>You are at least 16 years old.</li>
                        <li>You are at least 16 years old.</li>
                        <li>You are at least 16 years old.</li>
                    </ul>
                    <p>In the event of a breach of your representations and agreements set forth above; you hereby authorize Décors Véronneau (including but not limited to members of management) to indemnify you against all claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, including equitable legal costs.</p>
                    <p>Any material shared herein may be used if in compliance with the above laws at the discretion of Décors Véronneau; and reserves the right to edit, condense or delete any material on its website, and does not guarantee that you will have any recourse to Décors Véronneau to edit or delete any material you have submitted in a timely manner. Reviews and testimonials are generally published within 2 to 4 business days. In addition, Décors Véronneau reserves the right to refuse any sharing of materials that do not comply with the above terms and conditions. You also acknowledge that you, and not Décors Véronneau, are responsible for the submission of any reviews and testimonials. None of the material you submit, other than your email address, is subject to any obligation of confidentiality on the part of Décors Véronneau.</p>

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
