import React from "react";
import Title from '../components/Title.jsx'
import { assets } from "../assets/assets.js";
import NewsLetterBox from '../components/NewsLetterBox.jsx'

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}  />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>At Forever E-Commerce, we make shopping simple, reliable, and exciting. From fashion and lifestyle to electronics and home essentials, we bring everything you need in one place at the best prices.</p>
          <p>Our goal is to provide quality products, fast delivery, and a smooth shopping experience you can trust. With Forever E-Commerce, you don’t just shop—you become part of a community that values convenience and care.</p>
          <b className="text-gray-800">Our Missin</b>
          <p>At Forever, our mission is to make online shopping simple, affordable, and enjoyable for everyone. We believe that fashion and lifestyle products should be accessible to all, without compromising on quality or style.

We are committed to offering carefully curated collections, seamless customer service, and a shopping experience that feels personal and trustworthy. Our goal is to inspire confidence and bring joy to every purchase, helping our customers express themselves in the best way possible.</p>
        </div>
      </div>
      <div className="text-xl py-4">
         <Title text1={"WHY"} text2={"CHOOSE"}  />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-4 sm:py-20 flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">At Forever, quality is at the heart of everything we do. Every product goes through strict checks to ensure it meets our high standards of durability, comfort, and style. We partner only with trusted suppliers and manufacturers who share our commitment to excellence.

Our dedicated quality team inspects each item before it reaches you, so you can shop with confidence knowing that what you buy is crafted to last. Your trust is our priority, and we work hard to deliver nothing less than the best.</p>
        </div>
        <div className="border px-10 md:px-16 py-4 sm:py-20 flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Shopping at Forever is designed to be simple, fast, and hassle-free. With an easy-to-use interface, secure payment options, and a smooth checkout process, we make sure your experience is seamless from start to finish.

From browsing to doorstep delivery, everything is just a few clicks away. Our flexible return and exchange policies ensure that you can shop with peace of mind, anytime and anywhere.</p>
        </div>
          <div className="border px-10 md:px-16 py-4 sm:py-20 flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">At Forever, we believe every customer deserves personal care and attention. Our dedicated support team is always ready to assist you—whether it’s tracking your order, handling returns, or answering product questions.

We value your trust, which is why we focus on quick responses, friendly interactions, and solutions that make your shopping journey smooth and satisfying. Your happiness is our priority.</p>
        </div>

      </div>
      <NewsLetterBox/>
    </div>
  );
}

export default About;
