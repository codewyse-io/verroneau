<template>
<footer class="footer_sec">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="fisrt_footer">
                    <h3>Décors Véronneau</h3>
                    <ul>
                    <li>
                        <RouterLink to="/WhoweOur">About us</RouterLink>
                    </li>
                    <li>
                    <RouterLink to="/CareerPage">Careers</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/ContactUs">Contact us</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/DistributeurPage">Our distributors</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/BlogPage">Blog</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/BlogPagedeails">Environment</RouterLink>
                    </li>
                  </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="second_footer">
                    <h3>Loyalty programs</h3>
                    <ul>
                        <li>
                            <RouterLink to="/AdvantagesCard">Advantage card</RouterLink>
                        </li>
                        <li>
                        <RouterLink to="/ContestPage">Contests</RouterLink>
                        </li>
                        <li>
                        <RouterLink to="/GiftCardPage">Gift card</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/NewsletterPage">Newsletter</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/ReviewsPage">Reviews</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/BecomeDistributor">Become a distributor</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/InfluencerCollaborator">Influencers and collaborations</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/DesignerArtitechture">Designers, architects and landscapers</RouterLink>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="second_footer">
                    <h3>Support</h3>
                    <ul>
                        <li>
                            <RouterLink to="/Store">Our store</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/ShippingPolicy">Shipping policy</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/RefundPolicy">Return and refund policy</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/PrivacyPolicy">Privacy policy</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/FAQS">FAQ</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="#">Website plan</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="third_footer">
                    <h3>Follow us</h3>
                    <ul>
                        <li><a href="" target="_blank"><i class="fa-brands fa-tiktok"></i></a></li>
                        <li><a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="" target="_blank"><i class="fa-brands fa-pinterest"></i></a></li>
                    </ul>
                    <div class="last_img">
                        <img :src="require('../assets/img/Payment-Methods.svg')" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5 last">
            <div class="col-md-12">
                <div class="disclaimer">
                    <h4>Décors Véronneau : artificial flowers and plants store</h4>
                    <p>Décors Véronneau is a family-owned Quebec company offering a wide selection of artificial flowers and plants, custom-designed floral arrangements and trendy plant walls, both large and small. The company is particularly renowned for the many tree models it creates in its own workshop from natural trunks and artificial foliage. At the beginning, over thirty years ago, founder and owner Guy Véronneau mainly offered a natural plant maintenance service for businesses. Soon, however, he noticed that clients were less pleased with the cost of maintaining and replacing plants. It was at this point that the idea of hybrid plants happened and a transformation took place. The reputation of Décors Véronneau’s products is now well established, and contributes to the success of the company’s commercial design department, which specializes in interior and exterior landscaping, as well as Christmas decorations.</p>
                    <ul>
                        <li>
                            <RouterLink to="/TermsOfService">Terms and conditions</RouterLink>
                        </li>
                        <li>Conception & development : Aiki Informatique</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>
