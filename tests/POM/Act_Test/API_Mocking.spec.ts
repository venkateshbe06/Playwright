// API Mocking
// Block the backend and provide the fake data
import { test, expect } from "@playwright/test";

test("API Mocking", async ({ page }) => {
    // await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    // await page.waitForTimeout(3000);

    // block the below url endpoint and mock the data with our customized data with respective json format
    
    // using route method
    await page.route("**/data/products.json", async (route) => {
    // array of objects need to pass
    // fake data via payload
    const payload = [
      {
        id: 102,
        name: " Mocked Mango - 1 Kg",
        price: 800,
        image: "./images/mango.jpg",
        category: "fruits",
      },
      {
        id: 105,
        name: " Mocked Banana - 1 Kg",
        price: 150,
        image: "./images/banana.jpg",
        category: "fruits",
      },
    ];

    await route.fulfill({
      status: 200,
      contentType: "application/json",
    //   body: payload,
      body: JSON.stringify(payload),
    });
  });

  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
  await page.waitForTimeout(3000);
  
});