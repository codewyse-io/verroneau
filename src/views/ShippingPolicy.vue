<template>
<section class="blog_de">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="main_static_b_details about_uspage">
                    <h4>Gift card</h4>
                    <hr>
                    <AboutNav />
                    <hr>
                </div>
            </div>
            <div class="col-md-8">
                <div class="blog_detailss_content">
                    <h5 class="mt-5">Processing and delivery times</h5>
                    <p>All orders are processed and shipped Monday through Friday from 8am to 4pm. Orders placed on weekends and holidays are processed the next business day. Please note that during busy periods, delivery may be delayed and delivery may also be made on Saturday.</p>
                    <p><b>Processing times* :</b> &nbsp; 2 to 10 business days</p>
                    <p><b>Delivery times** :</b> &nbsp; 3 to 7 business days</p>
                    <p>*Depending on the products ordered and the time required for manufacturing/preparation</p>
                    <p>**Depending on the destination address. Once orders leave our warehouse, we can track them with the carrier, but we have no control over delivery times.</p>
                    <p><em>Please note that once your order has been placed, it is no longer possible to add additional items. We will ask you to place a new order.</em></p>
                    <h5 class="mt-5">
                        Standard shipping fees
                    </h5>
                    <ul class="box_border">
                        <li>
                            <p><b>Quebec</b></p>
                            <p>$14,99*</p>
                        </li>
                        <li>
                            <p><b>Ontario</b></p>
                            <p>$19,99*</p>
                        </li>
                        <li>
                            <p><b>Elsewhere in Canada</b></p>
                            <p>$29,99*</p>
                        </li>
                    </ul>
                    <h6>*Extra shipping fee</h6>
                    <p>For some products that are heavier and/or bulkier, we now have to charge an additional fee due to the increase in carrier prices over the past several months, which is necessary for us to remain profitable. In such cases, this information is clearly indicated in the product description and the shopping cart. Exceptionally, if an order remains too expensive to ship (we have seen cases where shipping costs exceeded the value of the order), we reserve the right to contact the customer to request an extra fee. In such cases, you will be able to cancel the order.</p>
                    <p>In any case, rest assured that we will look around with multiple carriers to ensure we have the best rates. Thank you for your understanding.</p>
                    <h6>Gift card shipping</h6>
                    <p>The shipping is free for all gift cards.</p>
                    <h5 class="mt-5">Other delivery information</h5>
                    <p>– No delivery is possible for PO boxes.</p>
                    <p>– No promotional code can be applied once the order has been placed due to the volume of orders and the management involved. If you forget to add it, you can use it later.</p>
                    <p>– We reserve the right to put an order on a pallet in the case of several items in order to reduce delivery costs. This may also be the case for oversized and/or fragile items. In this case, the customer must be on site at the time of delivery, as agreed with the transport company we have pre-selected. Otherwise, we will have to cancel the order.</p>
                    <p>– Carriers vary depending on the delivery location and the products ordered. We mainly use the following delivery services: Fedex, Nationex, Canpar Express, Canada Post, GLS, Loomis Express, Purolator and Western Canada Express. You will be able to track your package with the tracking number that will be sent to you when your order is ready to leave our warehouse.</p>
                    <h5 class="mt-5">In-store pick up</h5>
                    <p>In-store pick up is free. For in-store pickup, you must wait until you receive the email stating that your order is ready before coming to the store*.</p>
                    <p>Once in store, you must go to the cashier with a printed copy or a mobile version of the email and a photo ID. If someone else is picking up the order, their full name must have been provided in the comments section at the time of the online payment. No exceptions will be accepted. The designated person will also need to show the order number, the email in printed version or mobile form, and a photo ID. A signature will be required to confirm that the order has been picked up.</p>
                    <p><b>*Prices indicated on our website may be different from the prices indicated in store.</b></p>
                    <div class="shades_para">
                        <p>For assistance, please get in touch with customer service at 1.888.909.2998 or by email at ecom@veronneau.com.</p>
                    </div>
                    <p><b>Having trouble placing your order online?</b></p>
                    <p>Watch this video to learn how to make your online purchase on our website:</p>
                    <div class="iframe_videos">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EYL1ghbCusU?si=HQ_orqT912qGIQch" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <hr>
                    <p>Décors Véronneau acts as a responsible party for all personal information you provide. That is why we have a Privacy Policy explaining how your personal information will be handled and protected. You can find our full Privacy Policy here.</p>
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
