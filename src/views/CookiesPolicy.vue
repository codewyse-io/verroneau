<template>
    <section class="blog_de">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="main_static_b_details about_uspage">
                        <h4>Cookie policy (CA)</h4>
                        <hr>
                        <AboutNav />
                        <hr>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="blog_detailss_content">
                        <p>This page was last changed on 14/03/2024, last checked on 14/03/2024 and applies to citizens and legal permanent residents of Canada.</p>
                        <h5 class="mt-5">1. Introduction</h5>
                        <p>Our website, https://www.veronneau.com/en/ (hereinafter: "the website") uses cookies and other related technologies (for convenience all technologies are referred to as "cookies"). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.</p>
                        <h5>2. What are cookies?</h5>
                        <p>A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.</p>
                        <h5>3. What are scripts?</h5>
                        <p>A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.</p>
                        <h5 class="mt-5">1. Introduction</h5>
                        <p>Our website, https://www.veronneau.com/en/ (hereinafter: "the website") uses cookies and other related technologies (for convenience all technologies are referred to as "cookies"). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.</p>
                        <h5>2. What are cookies?</h5>
                        <p>A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.</p>
                        <h5>3. What are scripts?</h5>
                        <p>A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.</p>

                    
                    
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
    