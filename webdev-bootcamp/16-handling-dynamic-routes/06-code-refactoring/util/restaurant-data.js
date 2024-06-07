import { join } from "path";
import { readFileSync, writeFileSync } from "fs";

const filePath = join(__dirname, "..", "data", "restaurants.json");

function getStoredRestaurants() {
  const fileData = readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function storeRestaurants(storableRestaurants) {
  writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

export const getStoredRestaurants = getStoredRestaurants;
export const storeRestaurants = storeRestaurants;
