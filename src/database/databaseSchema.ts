import { serial, text, pgTable, integer } from 'drizzle-orm/pg-core';

const articles = pgTable('articles', {
  id: serial('id').primaryKey(),
  title: text('title'),
  content: text('content'),
});

export const addresses = pgTable('addresses', {
  id: serial('id').primaryKey(),
  street: text('street'),
  city: text('city'),
  country: text('country'),
});

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').unique(),
  name: text('name'),
  password: text('password'),
  addressId: integer('address_id')
    .unique()
    .references(() => addresses.id),
});

export const databaseSchema = {
  articles,
  addresses,
  users,
};

export { articles };
