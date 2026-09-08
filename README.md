# Online Store Inventory Task

This is my JavaScript check-in task for the "Online Store Inventory Management" scenario.

## What it's about

A local store is moving online and needs a simple tool to manage their stock. Their data looks like this:

```js
const inventory = {
  laptop: [999.99, 5],
  mouse: [25.00, 15],
  keyboard: [45.50, 0],
  monitor: [150.00, 8]
};
```

Each item has a price and a quantity stored in an array, like `[price, quantity]`.

## What the code does

I wrote three small functions to cover the store owner's needs:

1. **lookupItem()** – Looks up the price and quantity of a specific item (e.g. "mouse").
2. **restockItem()** – Updates the quantity of an item when new stock comes in (e.g. setting "keyboard" to 20).
3. **getItemValue()** – Works out the total value of stock for one item (price × quantity), e.g. for "monitor".

Before writing the code, I planned out the Input, Process, and Output (IPO) for the program and for each function. I put those IPO notes as comments directly above each function in `inventory.js`, so it's easy to see the thinking behind the code without needing a separate document.

## How to run it

1. Clone this repo.
2. Make sure you have Node.js installed.
3. Run:
