import { test, expect, request } from "@playwright/test";

//token = header.payload.signature // JWT - Jason Web Token
//JWT (JSON Web Token) is a compact, secure way to transmit information between parties as a JSON object. 
// It is commonly used for authentication and authorization in web applications and APIs.

/*Structure of a JWT

A JWT consists of three parts separated by dots (.):

Plain Text
header.payload.signature 

-----------------
Difference Between 401 and 403
Status Code	- Meaning
401 Unauthorized	- Authentication is missing or invalid.
403 Forbidden	- Authentication succeeded, but you don't have sufficient permissions.

A simple way to remember it:

401 = "Who are you?" (authentication problem)
403 = "I know who you are, but you're not allowed." (authorization problem)

*/

test("EVENT-Storage State", async ({ page, context }) => {  // context also need to add
  const apicontext = await request.newContext();

  const response = await apicontext.post(
    "https://api.eventhub.rahulshettyacademy.com/api/auth/login", // not loading in browser by manually
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        email: "trends.06208@gmail.com",
        password: "Trensa@06208",
      },
    },
  );

  console.log(response);

  await apicontext.storageState({ path: "auth-venkat.json" }); // no data due to browser - since it is api level

  // await page.waitForURL("https://eventhub.rahulshettyacademy.com/");
  // await context.storageState({ path: "auth-venkat.json" }); 


  const body = await response.json();
  console.log(body);
  console.log("body token value === ", body.token);
  await apicontext.dispose();

  await page.goto("https://eventhub.rahulshettyacademy.com/login");
  await page.locator("#email").fill("trends.06208@gmail.com");
  await page.locator("#password").fill("Trensa@06208");
  await page.locator("#login-btn").click();
  await page.waitForURL("https://eventhub.rahulshettyacademy.com/"); // it is needed
  await context.storageState({ path: "AuthNew.json" });
  // or 
  // await page.context().storageState({ path: "AuthNew.json" });
  const jwtToken = await page.localStorage.getItem("eventhub_token");
  console.log(`jwtToken : ${jwtToken}`)
});

// jwt token we can get only via browser (page.goto('url'))
