import { Builder, Capabilities, By } from "selenium-webdriver"
import { beforeAll, afterAll, it } from "@jest/globals"


const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async ()=> {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async ()=> {
    await driver.quit()
})

it('should add a movie to the movie list', async ()=> {
    await driver.findElement(By.xpath('//input')).sendKeys('Clash of the Titans')

    await driver.findElement(By.css('button')).click()
    await driver.sleep(5000)
})