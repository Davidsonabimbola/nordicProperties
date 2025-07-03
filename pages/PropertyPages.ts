import { Locator, Page, expect } from "@playwright/test";


export class propertyFeatures{
private page: Page


constructor(page:Page){
this.page = page

}

async selectMinimum_Price(minimumPrice:string){
    const Minimum_PriceList = await this.page.locator('[id="minPrice"]')
        await Minimum_PriceList.selectOption(minimumPrice)
}

async selectMaximumPrice(maximumPrice:string){
    const Maximum_PriceList = await this.page.locator('[id="maxPrice"]')
        await Maximum_PriceList.selectOption(maximumPrice)
}

async selectApartmentType(propertytype:string){
    const propertyType = this.page.locator('[id="propertyTypes"]')
        await propertyType.selectOption(propertytype)
}

async submitSearch(){
    await this.page.locator('button[id="submit"]').click()
}

async assertResult(){
     const searchResult = await this.page.locator('[id="l-searchResults"]')
        await expect(await searchResult).toBeTruthy()
}

async selectProperty(){
    const propertyDetails = await this.page.locator('a[data-test="property-details"]').nth(0)
        const address = await propertyDetails.locator('[data-testid="property-address"]')
        const addressDetails = await address.locator('address').textContent()
        console.log(await addressDetails)
         await address.click({force: true})
}

async assertProperty_Image(){
    const imageCollage = await this.page.locator('[data-testid="photo-collage"]')
        await expect(await imageCollage).toBeVisible()
        const lettingDetails = await this.page.getByText('Letting details')
        await expect(await lettingDetails).toBeVisible()
}

async assertAgent_Contact(){
    const contactLink = await this.page.locator('a')
        const agentContact = await contactLink.getByText('Request details')
        await expect(await agentContact).toBeVisible()
        await this.page.waitForTimeout(1000)
        await agentContact.click({force: true})
}

async contact_propertyAgent(user_firstName:string,user_lastName,user_phoneNumber:string){
     await this.page.waitForTimeout(1000)
    const firstName_Field = this.page.locator('input[id="firstName"]')
        await expect(await firstName_Field).toBeVisible()
        await this.page.waitForTimeout(1000)
        await firstName_Field.fill(user_firstName)
        await this.page.locator('input[id="lastName"]').fill(user_lastName)
        await this.page.locator('input[id="phone.number"]').fill(user_phoneNumber)
}

async send_email_to_Agent(){
    const sendEmail_button = await this.page.locator('button').getByText('Send email')
        await sendEmail_button.click({force:true})
}

async validate_errorMessage(errorMessage:string){
    const errorEmail = await this.page.getByText(errorMessage)      
        await expect(errorMessage).toBeTruthy()
        await expect(errorEmail).toBeTruthy()
}
}