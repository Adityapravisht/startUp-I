// src/fakeData.js

// export function generateUsers(count = 10) {
//   return Array.from({ length: count }).map(() => ({
//     id: faker.string.uuid(),
//     name: faker.person.fullName(),
//     email: faker.internet.email(),
//     startDate: faker.date.between({ from: "2020-01-01", to: "2023-01-01" }),
//     endDate: faker.date.between({ from: "2023-02-01", to: "2024-01-01" }),
//   }));
// }
import { faker } from "@faker-js/faker";


export function generateUsers(count = 50) {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    language: faker.helpers.arrayElement(["English", "Hindi", "French"]),
    sku: faker.number.int({ min: 10, max: 100 }),
    dateOfOrder: faker.date.between({ from: "2020-01-01", to: "2030-01-01" }).toLocaleDateString(),
    validTill: faker.date.between({ from: "2023-02-01", to: "2030-01-01" }).toLocaleDateString(),
     planType: faker.helpers.arrayElement(["Basic", "Pro", "Premium"]),
  }));
}


export const fakeUsers = generateUsers(50);
