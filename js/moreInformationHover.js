const moreInfButton = document.querySelectorAll(".dietLineButton");

function pasteText(number, string) {
  let textCloud;
  moreInfButton[number].addEventListener("mouseenter", function (e) {
    textCloud = document.createElement("p");
    textCloud.classList.add("textCloud");
    moreInfButton[number].appendChild(textCloud);
    textCloud.textContent = string;
  });
  moreInfButton[number].addEventListener("mouseleave", function (e) {
    textCloud.remove();
  });
}

pasteText(
  0,
  "A gluten-free diet excludes any foods that contain gluten, which is a protein found in wheat and several other grains. It means eating only whole foods that don't contain gluten, such as fruits, vegetables, meat and eggs, as well as processed gluten-free foods like gluten-free bread or pasta."
);
pasteText(
  1,
  "“Ketogenic” is a term for a low-carb diet (like the Atkins diet). The idea is for you to get more calories from protein and fat and less from carbohydrates. You cut back most on the carbs that are easy to digest, like sugar, soda, pastries, and white bread."
);
pasteText(
  2,
  "When people think about a vegetarian diet, they typically think about a diet that doesn't include meat, poultry or fish. But vegetarian diets vary in what foods they include and exclude: Lacto-vegetarian diets exclude meat, fish, poultry and eggs, as well as foods that contain them."
);
pasteText(
  3,
  "Lacto-vegetarians do not eat meat, poultry, fish, or eggs. They do eat dairy products, such as milk, yogurt, and cheese."
);
pasteText(
  4,
  "What is an ovo-vegetarian diet? An ovo-vegetarian diet excludes all animal-based foods except for eggs. Meat, poultry, fish, or dairy products like milk, yogurt, and cheese are eliminated, but whole eggs, egg whites, and egg-containing foods like mayonnaise, egg noodles, and certain baked goods are permitted."
);
pasteText(
  5,
  "A vegan diet contains only plants (such as vegetables, grains, nuts and fruits) and foods made from plants. Vegans do not eat foods that come from animals, including dairy products and eggs."
);
pasteText(
  6,
  "By that definition, a pescatarian is someone who chooses to eat a vegetarian diet, but who also eats fish and other seafood. It's a largely plant-based diet of whole grains, nuts, legumes, produce and healthy fats, with seafood playing a key role as a main protein source. Many pescatarians also eat dairy and eggs."
);
pasteText(
  7,
  "A paleo diet typically includes lean meats, fish, fruits, vegetables, nuts and seeds — foods that in the past could be obtained by hunting and gathering. A paleo diet limits foods that became common when farming emerged about 10,000 years ago. These foods include dairy products, legumes and grains."
);
pasteText(
  8,
  "Here are the basics: Eat: Meat, fish, eggs, vegetables, fruits, nuts, seeds, herbs, spices, healthy fats and oils. Avoid: Processed foods, sugar, soft drinks, grains, most dairy products, legumes, artificial sweeteners, vegetable oils, margarine and trans fats."
);
pasteText(
  9,
  "A list of examples of certain foods and drinks to avoid on a low FODMAP diet are some vegetables and fruits, beans, lentils, wheat, dairy products with lactose, high fructose corn syrup, and artificial sweeteners."
);
pasteText(
  10,
  "The Whole30 isn't a weight loss diet You would not count or restrict calories, skip meals, or eliminate carbs. You will eat real, whole food to satiety, with no pills, powders, or shakes required. We even ask that you stay off the scale and away from body measurements for 30 days—that is how serious we are!"
);
