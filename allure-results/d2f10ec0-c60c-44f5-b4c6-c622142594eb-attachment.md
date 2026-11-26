# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\Act_Test\API_Mocking.spec.ts >> API Mocking
- Location: tests\POM\Act_Test\API_Mocking.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]: GREENKART
      - generic [ref=e8]:
        - searchbox "Search for Vegetables and Fruits" [ref=e9]
        - button [ref=e10] [cursor=pointer]
      - generic [ref=e11]:
        - link "🎯 I’ll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e12] [cursor=pointer]:
          - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
        - link "Top Deals" [ref=e13] [cursor=pointer]:
          - /url: "#/offers"
        - link "Flight Booking" [ref=e14] [cursor=pointer]:
          - /url: https://rahulshettyacademy.com/dropdownsPractise/
        - table [ref=e16]:
          - rowgroup [ref=e17]:
            - row [ref=e18]:
              - cell "Items" [ref=e19]
              - cell ":" [ref=e20]
              - cell [ref=e21]:
                - strong [ref=e22]: "0"
            - row [ref=e23]:
              - cell "Price" [ref=e24]
              - cell ":" [ref=e25]
              - cell [ref=e26]:
                - strong [ref=e27]: "0"
        - link [ref=e28] [cursor=pointer]:
          - /url: "#"
          - img "Cart" [ref=e29]
  - generic [ref=e31]:
    - generic [ref=e32]:
      - img "Mocked Mango - 1 Kg" [ref=e34]
      - heading "Mocked Mango - 1 Kg" [level=4] [ref=e35]
      - paragraph [ref=e36]: ₹ 800
      - generic [ref=e37]:
        - link "–" [ref=e38] [cursor=pointer]:
          - /url: "#"
        - spinbutton [ref=e39]: "1"
        - link "+" [ref=e40] [cursor=pointer]:
          - /url: "#"
      - button "ADD TO CART" [ref=e42] [cursor=pointer]
    - generic [ref=e43]:
      - img "Mocked Banana - 1 Kg" [ref=e45]
      - heading "Mocked Banana - 1 Kg" [level=4] [ref=e46]
      - paragraph [ref=e47]: ₹ 150
      - generic [ref=e48]:
        - link "–" [ref=e49] [cursor=pointer]:
          - /url: "#"
        - spinbutton [ref=e50]: "1"
        - link "+" [ref=e51] [cursor=pointer]:
          - /url: "#"
      - button "ADD TO CART" [ref=e53] [cursor=pointer]
  - contentinfo [ref=e54]:
    - paragraph [ref=e55]:
      - text: © 2019
      - strong [ref=e56]: GreenKart
      - text: "- buy veg and fruits online"
  - text: ₹ ₹
```