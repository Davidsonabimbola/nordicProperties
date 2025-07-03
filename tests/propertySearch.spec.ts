
import { test, expect } from '@playwright/test';
import searchFeatures from '../pages/SearchPages';
import { searchDescription, searchHeader } from './utils/Displayed_Text';
import * as rentData from '../fixtures/data/rent_testData.json'
import * as saleData from '../fixtures/data/sale_testData copy.json'


test.describe('Search available properties', () => {

  let search : searchFeatures


  test.beforeEach(async({page})=>{
    await page.goto('/');
    // Conditionally handle the cookie banner
  const acceptCookies = page.getByRole('button', { name: 'Accept all' });

  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
    search = new searchFeatures(page)

  })

    

test('successfully search properties for rent', async ({ page }) => {
  const RentData = rentData
  await search.homePage_display()
  await search.searchLocation(RentData.searchCity)
  await search.searchAction(searchDescription.rent)
  await search.assertSearch(searchHeader.rent, RentData.searchCity,RentData.searchAction)
});


test('successfully search properties for sale', async ({ page }) => {
  const SaleData = saleData
  await search.homePage_display()
  await search.searchLocation(SaleData.searchCity)
  await search.searchAction(searchDescription.sale)
  await search.assertSearch( searchHeader.sale,SaleData.searchCity,SaleData.searchAction)
  
});

  

  

 
  
});