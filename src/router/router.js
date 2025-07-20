import { createRouter, createWebHistory } from "vue-router";
import homeview from "@/views/homeview.vue";
import ProductCategory from "@/views/ProductCategory.vue";
import AboutUs from '@/views/AboutUs.vue';
import InspirationsPage from '@/views/InspirationsPage.vue';
import FAQS from '@/views/FAQS.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import Store from '@/views/Store.vue';
import ContactUs from '@/views/ContactUs.vue';
import TermsOfService from '@/views/TermsOfService.vue';
import RefundPolicy from '@/views/RefundPolicy.vue';
import LoginPage from "@/views/LoginPage.vue";
import CreateAccount from "@/views/CreateAccount.vue";
import LostPassword from "@/views/LostPassword.vue";
import BlogPage from "@/views/BlogPage.vue";
import BlogPagedeails from "@/views/BlogPagedeails.vue";
import WhoweOur from "@/views/WhoweOur.vue";
import CareerPage from "@/views/CareerPage.vue";
import DistributeurPage from "@/views/DistributeurPage.vue";
import AdvantagesCard from "@/views/AdvantagesCard.vue";
import GiftCardPage from "@/views/GiftCardPage.vue";
import ReviewsPage from "@/views/ReviewsPage.vue";
import ShippingPolicy from "@/views/ShippingPolicy.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import CookiesPolicy from "@/views/CookiesPolicy.vue";
import BecomeDistributor from "@/views/BecomeDistributor.vue"
import InfluencerCollaborator from "@/views/InfluencerCollaborator.vue";
import DesignerArtitechture from "@/views/DesignerArtitechture.vue";
import NewsletterPage from "@/views/NewsletterPage.vue";
import ContestPage from "@/views/ContestPage.vue";
import MyFavouritePage from "@/views/MyFavouritePage.vue";


const routes = [

  {
    path: '/',
    component: homeview
  },
  {
    path: '/ProductCategory',
    component: ProductCategory, 
  },
  {
    path: '/AboutUs',
    component: AboutUs, 
  },
  {
    path: '/InspirationsPage',
    component: InspirationsPage, 
  },
  {
    path: '/FAQS',
    component: FAQS, 
  },
  {
    path: '/ProductDetails',
    component: ProductDetails, 
  },
  {
    path: '/Store',
    component: Store, 
  },
  {
    path: '/ContactUs',
    component: ContactUs, 
  },
  {
    path: '/TermsOfService',
    component: TermsOfService, 
  },
  {
    path: '/RefundPolicy',
    component: RefundPolicy, 
  },
  {
    path: '/LoginPage',
    component: LoginPage, 
  },
  {
    path: '/CreateAccount',
    component: CreateAccount, 
  },
  {
    path: '/LostPassword',
    component: LostPassword, 
  },
  {
    path: '/BlogPage',
    component: BlogPage, 
  },
  {
    path: '/BlogPagedeails',
    component: BlogPagedeails, 
  },
  {
    path: '/WhoweOur',
    component: WhoweOur, 
  },
  {
    path: '/CareerPage',
    component: CareerPage, 
  },
  {
    path: '/DistributeurPage',
    component: DistributeurPage, 
  },
  {
    path: '/AdvantagesCard',
    component: AdvantagesCard, 
  },
  {
    path: '/GiftCardPage',
    component: GiftCardPage, 
  },
  {
    path: '/ReviewsPage',
    component: ReviewsPage, 
  },
  {
    path: '/ShippingPolicy',
    component: ShippingPolicy, 
  },
  {
    path: '/PrivacyPolicy',
    component: PrivacyPolicy, 
  },
  {
    path: '/CookiesPolicy',
    component: CookiesPolicy, 
  },
  {
    path: '/BecomeDistributor',
    component: BecomeDistributor, 
  },
  {
    path: '/InfluencerCollaborator',
    component: InfluencerCollaborator, 
  },
  {
    path: '/DesignerArtitechture',
    component: DesignerArtitechture, 
  },
  {
    path: '/NewsletterPage',
    component: NewsletterPage, 
  },
  {
    path: '/ContestPage',
    component: ContestPage, 
  },
  {
    path: '/MyFavouritePage',
    component: MyFavouritePage, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active'
});


export default router;
