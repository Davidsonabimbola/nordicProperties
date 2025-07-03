# nordicProperties
This project contains Playwright-based automated UI tests for the Rightmove property search platform. The goal is to validate key functionality such as property searching, applying filters, and verifying result listings in a real-world property portal.

Test Framework: Playwright with TypeScriptTested Site: https://www.rightmove.co.uk/Focus Areas: Search input, filters, result verification, cross-browser testing

Setup Instructions

Install dependencies: npm install

Install Playwright browsers: npx playwright install

Run All Tests: npx playwright test

Run Specific Test File: npx playwright test specs/propertySearch.spec.ts

Open Playwright Test Report: npx playwright show-report

Debug in Inspector Mode (Optional): npx playwright test --debug

Included Test Scenarios

Search properties by location (e.g., "Liverpool")

Select filters: minimum bedrooms, property type

Submit search and verify at least one result

Check that first result contains expected address text

Handle cookie banner automatically if shown

Browser Support

Configured for: Chromium (Desktop Chrome), Firefox

Note: WebKit (Safari) is excluded due to known compatibility issues with Rightmove UI.

Test Data

Test input values (like location and filter options) are maintained in:
Assumptions & Notes

Tests only cover public browsing features (no login)

Timing and waits have been tuned for UI delays; minor UI changes may require adjustments
