//hooks

import {test} from '@playwright/test'


//Database connection creation
test.beforeAll(() => {
    console.log('Runs once before all test');
})

//Database connection close
test.afterAll(() => {
    console.log('Runs once after all test');
})

//Launch brower, context, page and login for each test
test.beforeEach(() => {
    console.log('Runs before each test');
})

//close logout, page, context, browser 
test.afterEach(() => {
    console.log('Runs after each test');
})


test('TEST 1', async () => {
    console.log('TEST 1')
})

test('TEST 2', async () => {
    console.log('TEST 2')
})

test('TEST 3', async () => {
    console.log('TEST 3')
})

test('TEST 4', async () => {
    console.log('TEST 4')
})