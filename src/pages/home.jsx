import React, {useState} from "react";
import { NavBar } from "../components/header";
import tw from "twin.macro";
import Hero from "../components/hero/TwoColumnWithVideo.js";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import HeroImage from "../images/hero.jpg"
import MainFeature from "../components/features/TwoColWithButton.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import ceo from "../images/founder.jpg"
import Modal from "../components/features/modal1";
import Features from "../components/features/ThreeColSimple";
import chefIconImageSrc from "../images/vecteezy_isometric-flat-illustration-concept-courses-and-online_.jpg";
import celebrationIconImageSrc from "../images/icons8-good-quality.gif";
import shopIconImageSrc from "../images/icons8-in-transit.gif";
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.js";
import alternate from "../images/alternate.jpg";
import Testimonial from "../components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "../components/footers/MiniCenteredFooter.js";
import ContactUsForm from "../components/forms/TwoColContactUsWithIllustration.js";
import FAQ from "../components/faqs/SimpleWithSideImage.js";
import customerSupportIllustrationSrc from "../images/customer-support-illustration.svg";
import Testimonial1 from "../components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";

const Home = () => {
    const Subheading = tw.span`tracking-wider text-sm font-medium`;
    const HighlightedText = tw.span`bg-green-500 text-gray-100 px-4 transform -skew-x-12 inline-block mt-2`;
    // const HighlightedTextInverse = tw.span`bg-gray-100 text-green-500 px-4 transform -skew-x-12 inline-block`;
    const Description = tw.span`inline-block`;
    const imageCss = tw`rounded-[2.5rem]`;
    const [modalShow, setModalShow] = useState(false);
    return(
        <div className="overflow-x-hidden overflow-y-hidden">
            <AnimationRevealPage>
            <NavBar/>
            <Hero
                heading={<>Quality & Affordable <HighlightedText>Organic Products Across the Globe</HighlightedText></>}
                description="We want to improve the lives of thousands of families in Northern Ghana with the power of the shea nut"
                imageSrc={HeroImage}
                imageCss={imageCss}
                imageDecoratorBlob={true}
                primaryButtonText="Shop Now"
                watchVideoButtonText="About US"
            />
            <MainFeature
                subheading={<Subheading>Established Since 2002</Subheading>}
                heading={
                    <>
                        We've been serving for
                        <wbr /> <HighlightedText>over 2 decades.</HighlightedText>
                    </>
                }
                description={
                    <Description>

                        Founder and CEO Rabiatu Gurunpaga Abukari started Maltiti as a very small business two decades ago.
                        <br />
                        Rabiatu is an inspiring woman. She makes sure that the women produce good quality, she trains them, and she on a mission to mechanize the manual processes.
                    </Description>
                }
                buttonRounded={false}
                textOnLeft={false}
                primaryButtonText="Read More"
                imageSrc={ceo}
                imageCss={imageCss}
                imageDecoratorBlob={true}
                imageDecoratorBlobCss={tw`-translate-x-1/2 opacity-25 left-1/2 md:w-32 md:h-32`}
                modal={() => setModalShow(true)}
            />
            <TabGrid
                heading={
                    <>
                        Checkout our <HighlightedText>Products</HighlightedText>
                    </>
                }
            />
            <Features
                heading={
                    <>
                        Amazing <HighlightedText>Services.</HighlightedText>
                    </>
                }
                cards={[
                    {
                        imageSrc: shopIconImageSrc,
                        title: "Worldwide Export",
                        description: "We ship our products across the globe",
                        url: "#"
                    },
                    {
                        imageSrc: chefIconImageSrc,
                        title: "Training Services",
                        description: "We offer training services in the production of shea butter and other products",
                        url: "#"
                    },
                    {
                        imageSrc: celebrationIconImageSrc,
                        title: "Quality Products Distribution",
                        description: "Distribution of quality organic products.",
                        url: "#"
                    }
                ]}
                imageContainerCss={tw`p-2!`}
                imageCss={tw`w-20! h-20!`}
            />
            <MainFeature2
                subheading={<Subheading>A Reputed Brand</Subheading>}
                heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
                statistics={[
                    {
                        key: "Orders",
                        value: "5000+",
                    },
                    {
                        key: "Rural women",
                        value: "10000+"
                    },
                    {
                        key: "Communities",
                        value: "50+"
                    },
                    {
                        key: "Awards and Certificates",
                        value: "30+"
                    }
                ]}
                primaryButtonText="Order Now"
                primaryButtonUrl="#shop"
                imageInsideDiv={false}
                imageSrc={alternate}
                imageCss={Object.assign(tw`bg-cover`, imageCss)}
                imageContainerCss={tw`h-auto md:w-1/2`}
                imageDecoratorBlob={true}
                imageDecoratorBlobCss={tw`-translate-x-1/2 opacity-25 left-1/2 md:w-32 md:h-32`}
                textOnLeft={true}
            />
            <Testimonial1
                subheading="Testimonials"
                heading={
                    <>
                    Our Clients <span tw="text-primary-500">Love Us.</span>
                    </>
                }
                description="Here are what some of our amazing customers are saying about our marketing professionals."
                testimonials={[
                    {
                    imageSrc:
                        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
                    profileImageSrc:
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                    quote:
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
                    customerName: "Charlotte Hale",
                    customerTitle: "CEO, Tesla Inc."
                    },
                    {
                    imageSrc:
                        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
                    profileImageSrc:
                        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
                    quote:
                        "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
                    customerName: "Adam Cuppy",
                    customerTitle: "Founder, Nestle"
                    }
                ]}
                textOnLeft={true}
            />
            <Testimonial
                subheading=""
                heading={<>Key <HighlightedText>Members.</HighlightedText></>}
            />
            <FAQ
                imageSrc={customerSupportIllustrationSrc}
                imageContain={true}
                imageShadow={false}
                subheading="FAQs"
                heading={
                    <>
                    Do you have <span tw="text-primary-500">Questions ?</span>
                    </>
                }
            />
            <ContactUsForm/>
            <Footer />
            </AnimationRevealPage>
            <Modal modalShow={modalShow} onClick={() => setModalShow(false)}/>
        </div>
    );
}
export default Home;