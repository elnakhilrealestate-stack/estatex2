import {
  pgTable,
  text,
  integer,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  location: text().notNull(),
  developer: text().notNull(),
  priceFrom: text().notNull(),
  downPayment: text().notNull(),
  installments: text().notNull(),
  tag: text().notNull(),
  description: text().notNull(),
  image: text().notNull(),
  featured: boolean().default(true),
  sort: integer().default(0),
});

export const testimonials = pgTable("testimonials", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  role: text().notNull(),
  company: text().notNull(),
  quote: text().notNull(),
  rating: integer().default(5),
  sort: integer().default(0),
});

export const courses = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  category: text().notNull(),
  duration: text().notNull(),
  lessons: integer().notNull(),
  level: text().notNull(),
  description: text().notNull(),
  accent: text().notNull(),
  sort: integer().default(0),
});

export const inquiries = pgTable("inquiries", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  phone: text(),
  email: text(),
  interest: text(),
  message: text(),
  createdAt: timestamp().defaultNow(),
});
