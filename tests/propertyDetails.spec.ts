
import {test} from "../fixtures/Fixtures"
import * as propertyData from "../fixtures/data/property_testData.json"
import { propertyFeatures } from '../pages/PropertyPages';
import { errorMessages } from "./utils/Displayed_Text";
import { userBio } from "./utils/userInfo";


test.describe('Search available properties', () => {
    let PropertyFeatures: propertyFeatures


    test(' successful search for an accomodation',async({searchedPage})=>{
        const Property_Data = propertyData
         PropertyFeatures = new propertyFeatures(searchedPage)
        await PropertyFeatures.selectMinimum_Price(Property_Data.minPrice)
        await PropertyFeatures.selectMaximumPrice(Property_Data.maxPrice)
        await PropertyFeatures.selectApartmentType(Property_Data.type)
        await PropertyFeatures.submitSearch()
        await PropertyFeatures.assertResult()
        await PropertyFeatures.selectProperty()
        await PropertyFeatures.assertProperty_Image()
        await PropertyFeatures.assertAgent_Contact()
    })

    


    test(' validate mandatory fields when contacting agent',async({searchedPage})=>{
        const Property_Data = propertyData
         PropertyFeatures = new propertyFeatures(searchedPage)
        await PropertyFeatures.selectMinimum_Price(Property_Data.minPrice)
        await PropertyFeatures.selectMaximumPrice(Property_Data.maxPrice)
        await PropertyFeatures.selectApartmentType(Property_Data.type)
        await PropertyFeatures.submitSearch()
        await PropertyFeatures.assertResult()
        await PropertyFeatures.selectProperty()
        await PropertyFeatures.assertProperty_Image()
        await PropertyFeatures.assertAgent_Contact()
        await PropertyFeatures.contact_propertyAgent(userBio.firstName,userBio.lastName,userBio.phoneNumber)
        await PropertyFeatures.send_email_to_Agent()
        await PropertyFeatures.validate_errorMessage(errorMessages.invalidEmail)
         await PropertyFeatures.validate_errorMessage(errorMessages.invalidPostcode)

    })
});
