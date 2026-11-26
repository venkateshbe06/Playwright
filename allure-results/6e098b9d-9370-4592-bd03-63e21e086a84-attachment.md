# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\Act_Test\eventhub_storage_state.spec.ts >> EVENT-Storage State
- Location: tests\POM\Act_Test\eventhub_storage_state.spec.ts:27:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation to "https://eventhub.rahulshettyacademy.com/" until "load"
============================================================
```

# Test source

```ts
  1  | import { test, expect, request } from "@playwright/test";
  2  | 
  3  | //token = header.payload.signature // JWT - Jason Web Token
  4  | //JWT (JSON Web Token) is a compact, secure way to transmit information between parties as a JSON object. 
  5  | // It is commonly used for authentication and authorization in web applications and APIs.
  6  | 
  7  | /*Structure of a JWT
  8  | 
  9  | A JWT consists of three parts separated by dots (.):
  10 | 
  11 | Plain Text
  12 | header.payload.signature 
  13 | 
  14 | -----------------
  15 | Difference Between 401 and 403
  16 | Status Code	- Meaning
  17 | 401 Unauthorized	- Authentication is missing or invalid.
  18 | 403 Forbidden	- Authentication succeeded, but you don't have sufficient permissions.
  19 | 
  20 | A simple way to remember it:
  21 | 
  22 | 401 = "Who are you?" (authentication problem)
  23 | 403 = "I know who you are, but you're not allowed." (authorization problem)
  24 | 
  25 | */
  26 | 
  27 | test("EVENT-Storage State", async ({ page, context }) => {  // context also need to add
  28 |   const apicontext = await request.newContext();
  29 | 
  30 |   const response = await apicontext.post(
  31 |     "https://api.eventhub.rahulshettyacademy.com/api/auth/login", // not loading in browser by manually
  32 |     {
  33 |       headers: {
  34 |         accept: "application/json",
  35 |         "Content-Type": "application/json",
  36 |       },
  37 |       data: {
  38 |         email: "trends.06208@gmail.com",
  39 |         password: "Trensa@06208",
  40 |       },
  41 |     },
  42 |   );
  43 | 
  44 |   console.log(response);
  45 | 
  46 |   // await apicontext.storageState({ path: "auth-venkat.json" }); // no data due to browser
> 47 |   await page.waitForURL("https://eventhub.rahulshettyacademy.com/");
     |              ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  48 |   await context.storageState({ path: "auth-venkat.json" }); 
  49 |   const body = await response.json();
  50 |   console.log(body);
  51 |   console.log("body token value === ", body.token);
  52 |   await apicontext.dispose();
  53 | 
  54 |   await page.goto("https://eventhub.rahulshettyacademy.com/login");
  55 |   await page.locator("#email").fill("trends.06208@gmail.com");
  56 |   await page.locator("#password").fill("Trensa@06208");
  57 |   await page.locator("#login-btn").click();
  58 |   await page.waitForURL("https://eventhub.rahulshettyacademy.com/"); // it is needed
  59 |   await context.storageState({ path: "AuthNew.json" });
  60 | 
  61 |   const jwtToken = await page.localStorage.getItem("eventhub_token");
  62 | });
```