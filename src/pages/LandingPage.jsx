import React from "react";
import { Hero } from "../components";
import food from "../assets/labeled_food.jpeg";
function LandingPage() {
  const first = {
    mainText: "The fastest way to track what you eat",
    subText:
      "Eat smart, lose weight. AI-powered calorie tracking from photos of your food. Just snap a photo - we'll track the calories.",
    imgUrl: food,
    imgAlt: "Get's started",
    buttonText: "Get's started",
    buttonLink: "/login",
    reverse: false,
  };

  const second = {
    mainText: "Track Calories with JiL",
    subText:
      "JIL is the first app where you can take a picture of any meal and get an accurate calorie count and nutrition in seconds",
    imgUrl: food,
    imgAlt: "Get's started",
    // buttonText: "Get's started",
    // buttonLink: "/login",
    reverse: true,
  };

  return (
    <div className="mt-6">
      <Hero data={first} />
      <Hero data={second} />
    </div>
  );
}

export default LandingPage;
