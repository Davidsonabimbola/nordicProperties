import { Locator, Page, expect } from "@playwright/test";


class searchFeatures{
private page: Page


constructor(page:Page){
this.page = page

}


async homePage_display(){
    const searchInput = this.page.locator('[data-testid="search-panel-typeahead"]');
  await expect(searchInput).toBeVisible();
}

async searchLocation(address:string){
    await this.page.locator('[id="ta_searchInput"]').fill(address)
  await this.page.getByRole('button', { name: address, exact: true }).click({force:true})
  
}


async searchAction(action:string){
    await this.page.getByRole('button',{name: action}).click({force:true})

}

async assertSearch(headerText:string,city:string, action:string){
  await this.page.waitForTimeout(1000);
    await expect(await this.page.getByText(`${headerText} ${action} in ${city}`)).toBeVisible()
  const searchPanel = this.page.locator('[id="Search_propertySearchCriteria__Wn7r_"]')
  await this.page.waitForTimeout(1000);
  await expect(searchPanel).toBeVisible({ timeout: 10000 });
}


}
export default searchFeatures