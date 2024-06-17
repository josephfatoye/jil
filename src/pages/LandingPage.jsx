import React from "react";
import { Hero } from "../components";
import food from "../assets/labeled_food.jpeg";
function LandingPage() {
  const first = {
    mainText: "The easiest way to track what you eat",
    subText:
      "Eat right, lose weight. AI-enhanced calorie tracking from pictures of your food. Just take a picture & we'll get the calories.",
    imgUrl: food,
    imgAlt: "Get's started",
    buttonText: "Get's started",
    buttonLink: "/login",
    reverse: false,
  };

  const second = {
    mainText: "Track Calories with JiL",
    subText:
      "JIL is the best app for taking a picture of any meal and getting an accurate calorie count and nutrition in seconds!",
    imgUrl: food,
    imgAlt: "Get's started",
    // buttonText: "Get's started",
    // buttonLink: "/login",
    reverse: true,
  };

  return (
    <div className="mt-6">
      <Hero data={first} />
      <Hero data={second} id="about" />
    </div>
  );
}

export default LandingPage;
