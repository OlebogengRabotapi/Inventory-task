// Online Store Inventory


//  PROGRAM IPO
// Input: an inventory object
// Process: look up, restock, or value items in that object
// Output: item info, updated inventory, or a total value

const inventory = {
  laptop: [999.99, 5],
  mouse: [25.00, 15],
  keyboard: [45.50, 0],
  monitor: [150.00, 8]
};

//  Item Lookup
// Input: item name, inventory

function lookupItem(item, data) {
  if (!data[item]) return `Item "${item}" not found.`;
  const [price, quantity] = data[item];
  return { item, price, quantity };
}

// Requirement 2: Inventory Restocking
// Input: item name, new quantity, inventory
function restockItem(item, newQty, data) {
  if (!data[item]) return `Item "${item}" not found.`;
  data[item][1] = newQty;
  return data;
}

//  Requirement 3: Inventory Valuation
// Input: item name, inventory

function getItemValue(item, data) {
  if (!data[item]) return `Item "${item}" not found.`;
  const [price, quantity] = data[item];
  return price * quantity;
}



console.log("Requirement 1 - Item Lookup (mouse):");
console.log(lookupItem("mouse", inventory));

console.log("\nRequirement 2 - Restocking (keyboard to 20):");
const updatedInventory = restockItem("keyboard", 20, inventory);
console.log(updatedInventory);
console.log("New keyboard quantity:", updatedInventory.keyboard[1]);

console.log("\nRequirement 3 - Inventory Valuation (monitor):");
console.log("Total value of monitor stock: R" + getItemValue("monitor", inventory));
