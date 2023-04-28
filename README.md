# Visual regression testing for websites using playwright

## Project setup
```
yarn install
```

### To run visual tests
```
yarn test:run
```
### To update the baseline of the website screenshots or if there is no baseline screenshots
```
yarn test:update
```
If you want to modify the list of websites to be tested, just open website.json file. 
You can add as many websites as you want.
The baseline website screenshots are located in /tests/visual.spec.js-snapshots.
The test is located in /tests/visual.spec.js

