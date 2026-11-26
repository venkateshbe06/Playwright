import {test, expect} from "@playwright/test";



test('Webtable handling', async({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-table/");
    const table = page.locator("table#courses_table");
    // page.getByRole("table")
    const colcount = await table.locator("thead tr th").count()
    const rowcount = await table.locator("tbody tr").count()
    console.log(`Column Count : ${colcount}, Row Count : ${rowcount}`)

    await expect(page).toHaveURL(/practice-test-table/) // page assertion
    await expect(table.locator("thead tr th")).toHaveCount(6);  // locator assertion
    expect(colcount).toBe(6); // Generic assertion

    await expect(page.locator("table#courses_table thead tr  th")).toHaveText([
        "ID",
        "Course Name",
        "Language",
        "Level",
        "Enrollments",
        "Link"
    ]);

    await expect(table.locator("tbody tr")).toHaveCount(9);
    expect(rowcount).toBe(9)

    //Dynamic method using n-th child
    const particularTextOfCell = await page
    .locator("table#courses_table tbody tr:nth-child(4)  td:nth-child(2) ")
    .innerText();
    console.log(`Method used in Selenium : ${particularTextOfCell}`);

    // filter method
    const targetRow = table.locator('tbody tr').filter({hasText : "1904956"} )
    const particular_course = await targetRow
    .locator('td[headers="col_course"]')
    .textContent();

    console.log(`Using filter method in Playwright : ${particular_course}`)

    const allData = await table.locator("tbody tr td").allTextContents();
    console.log(allData);
})

//for table = page.getByRole("table");
//for column = table.getByRole("columnheader");
//for row = table.getByRole("row");
// for cell = table.getByRole("cell").allInnerTexts();

test('columnHeader', async({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-table/");
    const table = page.getByRole("table");
    await expect(table).toBeVisible()

    const column = table.getByRole("columnheader");
    const col_count = await column.count();
    console.log(col_count);

    await expect(column).toHaveText([
        "ID",
        "Course Name",
        "Language",
        "Level",
        "Enrollments",
        "Link"
    ]);

    const particularRow = await page
        .getByRole("row")
        .filter({hasText : "1743612"})
        .textContent();

    console.log(particularRow)

    const all_cell_values = await table.getByRole("cell").allInnerTexts();
    console.log(all_cell_values);
})