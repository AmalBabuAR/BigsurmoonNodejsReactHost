import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BlogScreen from "../Components/Blog/BlogScreen";
import SubscribeContent from "../Components/Blog/SubscribeContent";

const Blog = () => {
  
  return (
    <>
      <Navbar />
      <BlogScreen />
      <SubscribeContent />
      <Footer />
    </>
  );
};

export default Blog;
