## Running the App

`git clone`
`npm install`
`npm start`

## Addressing Concerns

#### Scalability

I foresee the app running into issues in the `Holder` component, which would be responsible in a real world setting for pulling in data, perhaps making an XHR request to an API. As inventories can be quite large datasets, things may slow down trying to pull in large amounts of inventory data. To make the solution more scalable, we may want to employ a pagination strategy, which is more likely to happen on the server, but could be instituted on the client as well.

#### Maintainability

This small application is maintainable because if follows a concise and clear structure as well as data flow. There is a top level component, `Holder`, which is where the data flows in and out, and it holds two more components responsible for the major features - adding an item and viewing inventory. Adding an item could easily be extended to include additional inputs.

#### Pain Points

Pain points I can see deal more with scale and when the dataset becomes large. This could affect load times, the ability to sort and search for specific inventory items, and the ability to calculate additional metrics. The best strategy to avoid these situations may be to limit the amount of data viewed on the client. A simple solution would be to give the client view options for how many items they would like to view (10, 20, 50, all).


#### Architecture

The architecture for this flows top to bottom as follows:

1. `App`
2. `Holder`
    + `AddItem`
    + `Inventory`
      + `Item`

The `App` component gets rendered, and contains `Holder`, which contains `AddItem` and `Inventory`, where most of the action happens. Finally, `Inventory` is made up of each `Item`.

The architecture here is straightforward and clear. `AddItem` could likely be broken down into seperate pieces, but because of the size of the app, I felt this was not necessary. In a real world example, the logic and parts that control adding an item, could be broken out into another component so as to keep the components reusable, succinct and loosely coupled.
