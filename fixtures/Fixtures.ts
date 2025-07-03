import {test as baseTest,Page} from '@playwright/test'
import searchFeatures from '../pages/SearchPages'
import * as rentData from '../fixtures/data/rent_testData.json'
import { searchDescription, searchHeader } from '../tests/utils/Displayed_Text'

let page: Page


export const test = baseTest.extend<{
    searchLocation : searchFeatures
    searchedPage : Page
}>

({
    searchLocation : async ({page},use)=>{
        await page.goto('/')

         const acceptCookies = page.getByRole('button', { name: 'Accept all' });

  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
        
        const searchLocation = new searchFeatures(page)
        
         use(searchLocation)

    },

    searchedPage: async ({page,searchLocation},use)=>{
        const RentData = rentData
        await searchLocation.homePage_display()
        await searchLocation.searchLocation(RentData.searchCity)
        await searchLocation.searchAction(searchDescription.rent)
        await searchLocation.assertSearch(searchHeader.rent,RentData.searchCity,RentData.searchAction)
          use(page)


    }

})
export const expect = baseTest.expect