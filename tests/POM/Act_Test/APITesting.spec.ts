import {test, expect} from '@playwright/test';

test("get method", async({request}) => {
    
    // const getResponse = await request.get("https://restful-booker.herokuapp.com/booking");
    const getResponse = await request.get("/booking");
    console.log(getResponse);

    const getBodyResponseonly = await getResponse.json();
    console.log(getBodyResponseonly);

    expect(getResponse.status()).toBe(200);
    expect(getResponse.statusText()).toBe("OK")
    await expect(getResponse).toBeOK() // assertion response validation
    expect(getResponse.ok()).toBeTruthy

    expect(getBodyResponseonly.length).toBeGreaterThan(0);
    expect(getBodyResponseonly[3]).toHaveProperty("bookingid");

    expect(typeof getBodyResponseonly[3]).toBe("object");
    expect(typeof getBodyResponseonly[2].bookingid).toBe("number");
})

let bookingid : string;
test("post method", async({request}) => {
    const start = Date.now();

    const postresponse = await request.post("/booking",{
    headers : {"Content-Type":"application/json"},
    data : {
    "firstname" : "Venkatesh",
    "lastname" : "N",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
    }
}); 

const end = Date.now()
const responseTime = end - start;
const postpayload = await postresponse.json(); // to retrieve body content
console.log(postpayload);
console.log(postresponse.status()) // from raw data

//validation code
expect(postresponse.status()).toBe(200);
expect(postresponse.statusText()).toBe("OK");

//response time
expect.soft(responseTime).toBeLessThan(2000);

//Body Validation

expect(postpayload.bookingid).toBeDefined();
expect(typeof postpayload.bookingid).toBe("number");
expect(typeof postpayload.booking).toBe("object");
expect(postpayload.booking.firstname).toBe("Venkatesh");
expect(postpayload.booking.bookingdates.checkin).toBe("2018-01-01");

//header validation

console.log(postresponse.headers());
const header_array = postresponse.headersArray();

console.log(header_array);
expect(header_array[1]["name"]).toBe("Content-Type");

const header_obj = postresponse.headers();
await expect(header_obj['content-type']).toContain("application/json");

bookingid = postpayload.bookingid
console.log("===Booking Id===:", bookingid)

const bookingDetails = await request.get(`/booking/${bookingid}`);
console.log(await bookingDetails.json());
})


let token: string;
test("Create Token", async ({ request }) => {
  const authResponse = await request.post("/auth", {
    data: {
      username: "admin",
      password: "password123",
    },
    headers: { "Content-Type": "application/json" },
  });
  const data = await authResponse.json();
  token = await data.token;
  console.log(token);
});
test("put method", async ({ request }) => {
  const updateResponse = await request.put(`/booking/${bookingid}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Cookie: `token=${token}`,
    },
    data: {
      firstname: "Venkatesh_Updated",
      lastname: "N_Updated",
      totalprice: 1000,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "Breakfast",
    },
  });
  console.log(updateResponse);
  console.log(await updateResponse.json());
});

test("delete method", async ({ request }) => {
  const deleteResponse = await request.delete(`/booking/${bookingid}`, {
    headers: {
      "Content-Type": "application/json",
    //   Accept: "application/json",
      Cookie: `token=${token}`,
    },
  });
    console.log(deleteResponse);
    console.log(deleteResponse.status()) // from raw data

    //validation code
    // expect(deleteResponse.status()).toBe(200);
    // expect(deleteResponse.statusText()).toBe("OK");
    expect(deleteResponse.status()).toBe(201);
    expect(deleteResponse.statusText()).toBe("Created");
});


// negative scenarios in postman need to update
// UpdateBooking - Cookie method (done), Authorization method need to discuss (Basic Auth using username and password, cookie - token in header need to be disabled)