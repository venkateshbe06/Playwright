import { test } from "@playwright/test";

//bypass the login flow for all testcases by using storageState
test.use({ storageState: "AuthNew.json" });

test("click My Booking", async ({ page }) => {
  await page.goto("https://eventhub.rahulshettyacademy.com/");
  await page.getByTestId("nav-bookings").click();
});