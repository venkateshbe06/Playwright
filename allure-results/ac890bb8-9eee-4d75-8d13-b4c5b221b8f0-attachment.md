# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\Act_Test\APITesting.spec.ts >> post method
- Location: tests\POM\Act_Test\APITesting.spec.ts:25:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "applicaiton/json"
Received string:    "application/json; charset=utf-8"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | 
  4  | test("get method", async({request}) => {
  5  |     
  6  |     // const getResponse = await request.get("https://restful-booker.herokuapp.com/booking");
  7  |     const getResponse = await request.get("/booking");
  8  |     console.log(getResponse);
  9  | 
  10 |     const getBodyResponseonly = await getResponse.json();
  11 |     console.log(getBodyResponseonly);
  12 | 
  13 |     expect(getResponse.status()).toBe(200);
  14 |     expect(getResponse.statusText()).toBe("OK")
  15 |     await expect(getResponse).toBeOK() // assertion response validation
  16 |     expect(getResponse.ok()).toBeTruthy
  17 | 
  18 |     expect(getBodyResponseonly.length).toBeGreaterThan(0);
  19 |     expect(getBodyResponseonly[3]).toHaveProperty("bookingid");
  20 | 
  21 |     expect(typeof getBodyResponseonly[3]).toBe("object");
  22 |     expect(typeof getBodyResponseonly[2].bookingid).toBe("number");
  23 | })
  24 | 
  25 | test("post method", async({request}) => {
  26 |     const start = Date.now();
  27 | 
  28 |     const postresponse = await request.post("/booking",{
  29 |     headers : {"Content-Type":"application/json"},
  30 |     data : {
  31 |     "firstname" : "Venkatesh",
  32 |     "lastname" : "N",
  33 |     "totalprice" : 111,
  34 |     "depositpaid" : true,
  35 |     "bookingdates" : {
  36 |         "checkin" : "2018-01-01",
  37 |         "checkout" : "2019-01-01"
  38 |     },
  39 |     "additionalneeds" : "Breakfast"
  40 |     }
  41 | }); 
  42 | 
  43 | const end = Date.now()
  44 | const responseTime = end - start;
  45 | const postpayload = await postresponse.json(); // to retrieve body content
  46 | console.log(postpayload);
  47 | console.log(postresponse.status()) // from raw data
  48 | 
  49 | //validation code
  50 | expect(postresponse.status()).toBe(200);
  51 | expect(postresponse.statusText()).toBe("OK");
  52 | 
  53 | //response time
  54 | expect.soft(responseTime).toBeLessThan(2000);
  55 | 
  56 | //Body Validation
  57 | 
  58 | expect(postpayload.bookingid).toBeDefined();
  59 | expect(typeof postpayload.bookingid).toBe("number");
  60 | expect(typeof postpayload.booking).toBe("object");
  61 | expect(postpayload.booking.firstname).toBe("Venkatesh");
  62 | expect(postpayload.booking.bookingdates.checkin).toBe("2018-01-01");
  63 | 
  64 | //header validation
  65 | 
  66 | console.log(postresponse.headers());
  67 | const header_array = postresponse.headersArray();
  68 | 
  69 | console.log(header_array);
  70 | expect(header_array[1]["name"]).toBe("Content-Type");
  71 | 
  72 | const header_obj = postresponse.headers();
> 73 | await expect(header_obj['content-type']).toContain("applicaiton/json");
     |                                          ^ Error: expect(received).toContain(expected) // indexOf
  74 | 
  75 | })
```