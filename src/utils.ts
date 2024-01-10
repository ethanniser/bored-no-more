import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomItems<T>(arr: T[], n: number) {
  // Create a copy of the array
  let tempArr = arr.slice();

  // Shuffle array using the Fisher-Yates shuffle algorithm
  for (let i = tempArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
  }

  // Return the first n items
  return tempArr.slice(0, n);
}
