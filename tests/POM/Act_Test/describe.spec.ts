import { test, expect } from "@playwright/test";

// to execute group of tests together - test.describe

test.describe("API Chaining", async () => {
  test.describe.configure({ mode: "serial" }); // run serial mode (like workers = 1 )
  console.log("=================================");
  let bookingid: number;
  test("post method", async ({ request }) => {
    const start = Date.now();
    const postresponse = await request.post("/booking", {
      headers: { "Content-Type": "application/json" },
      data: {
        firstname: "Venkatesh",
        lastname: "N",
        totalprice: 1000,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    });
    const end = Date.now();
    const responseTime = end - start;
    const postPayload = await postresponse.json();
    console.log(postPayload);
    console.log(postresponse.status());
    // validation status code

    expect(postresponse.status()).toBe(200);
    expect(postresponse.statusText()).toBe("OK");
    // response time
    expect.soft(responseTime).toBeLessThan(2000);

    // body validation

    expect(postPayload.bookingid).toBeDefined();
    expect(typeof postPayload.bookingid).toBe("number");
    expect(typeof postPayload.booking).toBe("object");
    // expect(postPayload.booking.firstname).toBe("Mohanapriya");
    expect(postPayload.booking.firstname).toBe("Venkatesh");
  
    expect(postPayload.booking.bookingdates.checkin).toBe("2018-01-01");
    // header validation
    console.log(postresponse.headers());
    const harr = postresponse.headersArray();
    console.log(harr);
    expect(harr[1]["name"]).toBe("Content-Type");

    const hobj = postresponse.headers();
    await expect(hobj["content-type"]).toContain("application/json");
    bookingid = postPayload.bookingid;

    const bookingDetails = await request.get(`/booking/${bookingid}`);
    console.log(await bookingDetails.json());
  });
  //put

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
    console.log(`===token===: ${token}`);
  });
  test("put method venkat", async ({ request }) => {
    const updateResponse = await request.put(`/booking/${bookingid}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookie: `token=${token}`,
      },
      data: {
        firstname: "Venkatesh-Updated",
        lastname: "N-Updated",
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
  console.log("============================================");
});