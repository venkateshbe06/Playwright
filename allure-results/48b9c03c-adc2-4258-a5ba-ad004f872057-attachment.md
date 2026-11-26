# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\Act_Test\APITesting.spec.ts >> delete method
- Location: tests\POM\Act_Test\APITesting.spec.ts:120:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 201
```

# Test source

```ts
  32  |     "lastname" : "N",
  33  |     "totalprice" : 111,
  34  |     "depositpaid" : true,
  35  |     "bookingdates" : {
  36  |         "checkin" : "2018-01-01",
  37  |         "checkout" : "2019-01-01"
  38  |     },
  39  |     "additionalneeds" : "Breakfast"
  40  |     }
  41  | }); 
  42  | 
  43  | const end = Date.now()
  44  | const responseTime = end - start;
  45  | const postpayload = await postresponse.json(); // to retrieve body content
  46  | console.log(postpayload);
  47  | console.log(postresponse.status()) // from raw data
  48  | 
  49  | //validation code
  50  | expect(postresponse.status()).toBe(200);
  51  | expect(postresponse.statusText()).toBe("OK");
  52  | 
  53  | //response time
  54  | expect.soft(responseTime).toBeLessThan(2000);
  55  | 
  56  | //Body Validation
  57  | 
  58  | expect(postpayload.bookingid).toBeDefined();
  59  | expect(typeof postpayload.bookingid).toBe("number");
  60  | expect(typeof postpayload.booking).toBe("object");
  61  | expect(postpayload.booking.firstname).toBe("Venkatesh");
  62  | expect(postpayload.booking.bookingdates.checkin).toBe("2018-01-01");
  63  | 
  64  | //header validation
  65  | 
  66  | console.log(postresponse.headers());
  67  | const header_array = postresponse.headersArray();
  68  | 
  69  | console.log(header_array);
  70  | expect(header_array[1]["name"]).toBe("Content-Type");
  71  | 
  72  | const header_obj = postresponse.headers();
  73  | await expect(header_obj['content-type']).toContain("application/json");
  74  | 
  75  | bookingid = postpayload.bookingid
  76  | console.log("===Booking Id===:", bookingid)
  77  | 
  78  | const bookingDetails = await request.get(`/booking/${bookingid}`);
  79  | console.log(await bookingDetails.json());
  80  | })
  81  | 
  82  | 
  83  | let token: string;
  84  | test("Create Token", async ({ request }) => {
  85  |   const authResponse = await request.post("/auth", {
  86  |     data: {
  87  |       username: "admin",
  88  |       password: "password123",
  89  |     },
  90  |     headers: { "Content-Type": "application/json" },
  91  |   });
  92  |   const data = await authResponse.json();
  93  |   token = await data.token;
  94  |   console.log(token);
  95  | });
  96  | test("put method", async ({ request }) => {
  97  |   const updateResponse = await request.put(`/booking/${bookingid}`, {
  98  |     headers: {
  99  |       "Content-Type": "application/json",
  100 |       Accept: "application/json",
  101 |       Cookie: `token=${token}`,
  102 |     },
  103 |     data: {
  104 |       firstname: "Venkatesh_Updated",
  105 |       lastname: "N_Updated",
  106 |       totalprice: 1000,
  107 |       depositpaid: true,
  108 |       bookingdates: {
  109 |         checkin: "2018-01-01",
  110 |         checkout: "2019-01-01",
  111 |       },
  112 |       additionalneeds: "Breakfast",
  113 |     },
  114 |   });
  115 |   console.log(updateResponse);
  116 |   console.log(await updateResponse.json());
  117 | });
  118 | 
  119 | // let deleteResponse : string;
  120 | test("delete method", async ({ request }) => {
  121 |   const deleteResponse = await request.delete(`/booking/${bookingid}`, {
  122 |     headers: {
  123 |       "Content-Type": "application/json",
  124 |     //   Accept: "application/json",
  125 |       Cookie: `token=${token}`,
  126 |     },
  127 |   });
  128 |     console.log(deleteResponse);
  129 |     console.log(deleteResponse.status()) // from raw data
  130 | 
  131 |     //validation code
> 132 |     expect(deleteResponse.status()).toBe(200);
      |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  133 |     expect(deleteResponse.statusText()).toBe("OK");
  134 | });
```