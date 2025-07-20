<template>
<section class="review">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="review_sec_img">
                    <img :src="require('../assets/img/review_sec.webp')" alt="">
                </div>
            </div>
            <div class="col-md-6">
                <div class="review_sec_content">
                    <h2>Reviews</h2>
                    <p>What our customers say</p>
                    <ul class="slider" ref="slider">
                        <li>
                            <div class="review_content">
                                <p>I chose the life like Olive tree for indoor display. the item arrived in a timely manner and in fabulous shape.
                                    thoroughly pleased with the product and would definitely buy again.
                                    Vince</p>
                                <div class="star_rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span><strong>Amanda Lowe</strong></span>
                            </div>
                        </li>
                        <li>
                            <div class="review_content">
                                <p>I chose the life like Olive tree for indoor display. the item arrived in a timely manner and in fabulous shape.
                                    thoroughly pleased with the product and would definitely buy again.
                                    Vince</p>
                                <div class="star_rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span><strong>Amanda Lowe</strong></span>
                            </div>
                        </li>
                        <li>
                            <div class="review_content">
                                <p>I chose the life like Olive tree for indoor display. the item arrived in a timely manner and in fabulous shape.
                                    thoroughly pleased with the product and would definitely buy again.
                                    Vince</p>
                                <div class="star_rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span><strong>Amanda Lowe</strong></span>
                            </div>
                        </li>
                        <li>
                            <div class="review_content">
                                <p>I chose the life like Olive tree for indoor display. the item arrived in a timely manner and in fabulous shape.
                                    thoroughly pleased with the product and would definitely buy again.
                                    Vince</p>
                                <div class="star_rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span><strong>Amanda Lowe</strong></span>
                            </div>
                        </li>
                        <li>
                            <div class="review_content">
                                <p>I chose the life like Olive tree for indoor display. the item arrived in a timely manner and in fabulous shape.
                                    thoroughly pleased with the product and would definitely buy again.
                                    Vince</p>
                                <div class="star_rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <span><strong>Amanda Lowe</strong></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
</template>




<script>
import 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jquery from 'jquery';



export default {
  mounted() {
    // Initialize Slick Slider
    jquery(this.$refs.slider).slick({
      // Slick Slider options
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplay:false,
      // Add more options as needed
    });
  },
};
</script>

<style scoped>
section.review {
    background-color: transparent;
    background-image: linear-gradient(90deg, #DBD6D040 34%, #fff 21%);
    opacity: 1;
    padding: 60px 0;
}

.review_sec_img img {
    object-fit: cover;
    object-position: center center;
    border-radius: 15px;
    width: 100%;
    height: 50vh;
}

.review_sec_content {
    position: relative;
}

.review_sec_content h2 {
    font-size: 50px;
    font-family: serif;
    margin: 0 0 10px 0;
}

.review_sec_content p {
    font-size: 20px;
    margin: 0 0 30px 0;
}

.review_sec_content ul {
    list-style: none;
    display: flex;
    margin: 30px 0 0 0 !important;
    padding: 0;
}

.review_sec_content ul li .review_content p {
    font-size: 22px;
    text-align: start;
}

.review_sec_content ul li .review_content .star_rating {
    display: flex;
    justify-content: start;
    padding: 0;
    margin: -7px 0 10px 0;
}

.review_sec_content ul li .review_content .star_rating svg {
    color: #ffe600;
    margin: 0 8px 0 0;
}

.review_sec_content ul li .review_content span strong {
    text-align: start;
    margin: 0;
    font-size: 16px;
}

.review_sec_content ul li .review_content {
    text-align: start;
}

</style>
