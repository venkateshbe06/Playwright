# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\Act_Test\describe.spec.ts >> API Chaining >> post method
- Location: tests\POM\Act_Test\describe.spec.ts:9:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Mohanapriya"
Received: "Venkatesh"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | // to execute group of tests together - test.describe
  4  | 
  5  | test.describe("API Chaining", async () => {
  6  |   test.describe.configure({ mode: "serial" }); // run serial mode (like workers = 1 )
  7  |   console.log("=================================");
  8  |   let bookingid: number;
  9  |   test("post method", async ({ request }) => {
  10 |     const start = Date.now();
  11 |     const postresponse = await request.post("/booking", {
  12 |       headers: { "Content-Type": "application/json" },
  13 |       data: {
  14 |         firstname: "Venkatesh",
  15 |         lastname: "N",
  16 |         totalprice: 1000,
  17 |         depositpaid: true,
  18 |         bookingdates: {
  19 |           checkin: "2018-01-01",
  20 |           checkout: "2019-01-01",
  21 |         },
  22 |         additionalneeds: "Breakfast",
  23 |       },
  24 |     });
  25 |     const end = Date.now();
  26 |     const responseTime = end - start;
  27 |     const postPayload = await postresponse.json();
  28 |     console.log(postPayload);
  29 |     console.log(postresponse.status());
  30 |     // validation status code
  31 | 
  32 |     expect(postresponse.status()).toBe(200);
  33 |     expect(postresponse.statusText()).toBe("OK");
  34 |     // response time
  35 |     expect.soft(responseTime).toBeLessThan(2000);
  36 | 
  37 |     // body validation
  38 | 
  39 |     expect(postPayload.bookingid).toBeDefined();
  40 |     expect(typeof postPayload.bookingid).toBe("number");
  41 |     expect(typeof postPayload.booking).toBe("object");
> 42 |     expect(postPayload.booking.firstname).toBe("Mohanapriya");
     |                                           ^ Error: expect(received).toBe(expected) // Object.is equality
  43 |     expect(postPayload.booking.bookingdates.checkin).toBe("2018-01-01");
  44 |     // header validation
  45 |     console.log(postresponse.headers());
  46 |     const harr = postresponse.headersArray();
  47 |     console.log(harr);
  48 |     expect(harr[1]["name"]).toBe("Content-Type");
  49 | 
  50 |     const hobj = postresponse.headers();
  51 |     await expect(hobj["content-type"]).toContain("application/json");
  52 |     bookingid = postPayload.bookingid;
  53 | 
  54 |     const bookingDetails = await request.get(`/booking/${bookingid}`);
  55 |     console.log(await bookingDetails.json());
  56 |   });
  57 |   //put
  58 | 
  59 |   let token: string;
  60 |   test("Create Token", async ({ request }) => {
  61 |     const authResponse = await request.post("/auth", {
  62 |       data: {
  63 |         username: "admin",
  64 |         password: "password123",
  65 |       },
  66 |       headers: { "Content-Type": "application/json" },
  67 |     });
  68 |     const data = await authResponse.json();
  69 |     token = await data.token;
  70 |     console.log(`===token===: ${token}`);
  71 |   });
  72 |   test("put method venkat", async ({ request }) => {
  73 |     const updateResponse = await request.put(`/booking/${bookingid}`, {
  74 |       headers: {
  75 |         "Content-Type": "application/json",
  76 |         Accept: "application/json",
  77 |         Cookie: `token=${token}`,
  78 |       },
  79 |       data: {
  80 |         firstname: "Venkatesh-Updated",
  81 |         lastname: "N-Updated",
  82 |         totalprice: 1000,
  83 |         depositpaid: true,
  84 |         bookingdates: {
  85 |           checkin: "2018-01-01",
  86 |           checkout: "2019-01-01",
  87 |         },
  88 |         additionalneeds: "Breakfast",
  89 |       },
  90 |     });
  91 |     console.log(updateResponse);
  92 |     console.log(await updateResponse.json());
  93 |   });
  94 |   console.log("============================================");
  95 | });
```