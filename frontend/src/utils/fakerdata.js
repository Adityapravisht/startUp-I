// src/fakeData.js
import { faker } from "@faker-js/faker";

export function generateUsers(count = 10) {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    startDate: faker.date.between({ from: "2020-01-01", to: "2023-01-01" }),
    endDate: faker.date.between({ from: "2023-02-01", to: "2024-01-01" }),
  }));
}

export const fakeUsers = generateUsers(10);
