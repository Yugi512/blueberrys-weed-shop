import {
    varchar,
    uuid,
    integer,
    text,
    pgTable,
    date,
    pgEnum,
    timestamp, decimal, boolean
} from "drizzle-orm/pg-core";

export const ROLE = pgEnum('role', ["USER","ADMIN"])


// Users
export const userTable = pgTable("user",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    username: varchar("username",{length:16}).unique().notNull(),
    firstName: varchar("first_name",{length:30}).notNull(),
    lastName: varchar("last_name",{length:30}).notNull(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    role: ROLE('role').default('USER'),
    lastActivityDate: date("last_activity_date").defaultNow(),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow()
})

export const userAddressTable = pgTable("user_address",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    userID: uuid("user_id")
        .references(() => userTable.id)
        .notNull(),
    addressLineOne: text("address_line1"),
    addressLineTwo: text("address_line2"),
    city: text("city").notNull(),
    state: text("state").notNull(),
    zip: text("zip").notNull(),
    telephone: text("telephone").notNull(),
    mobile: text("mobile").notNull(),
})

export const userPaymentTable = pgTable("user_payment",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    userID: uuid("user_id")
        .references(() => userTable.id)
        .notNull(),
    payment_type: varchar("payment_type").notNull(),
    provider: varchar("provider").notNull(),
    accountNumber: varchar("account_number",{length:17}).notNull(),
    expiration: varchar("expiration",{length:5}).notNull(),
})

// Shopping
export const shoppingSessionTable = pgTable("shopping_session",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    userID: uuid("user_id")
        .references(() => userTable.id)
        .notNull(),
    total: decimal("total").notNull(),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

export const cartItemTable = pgTable("cart_item",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    productID: uuid("product_id")
        .references(() => productTable.id)
        .notNull(),
    sessionID: uuid("session_id")
        .references(() => shoppingSessionTable.id)
        .notNull(),
    quantity: integer("quantity").notNull(),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

// Orders
export const orderDetailTable: any = pgTable("order_detail",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    userID: uuid("user_id")
        .references(() => userTable.id)
        .notNull(),
    paymentID: uuid("payment_id")
        .references(() => paymentDetailTable.id)
        .notNull(),
    total: decimal("total").notNull(),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow()
})

export const orderItemsTable = pgTable("order_items",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    paymentID: uuid("payment_id")
        .references(() => paymentDetailTable.id)
        .notNull(),
    orderID: uuid("order_id")
        .references(() => orderDetailTable.id)
        .notNull(),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
})

// Payments
export const paymentDetailTable = pgTable("payment_detail",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    orderID: uuid("order_id")
        .references(() => orderDetailTable.id)
        .notNull(),
    amount: integer("amount").notNull(),
    provider: varchar("provider").notNull(),
    status: varchar("status").notNull(),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})
// Products
export const productCategoryTable = pgTable("product_category",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    name: varchar("name").notNull(),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

export const discountTable = pgTable("discount",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    name: varchar("name"),
    description: text("description"),
    discountPercentage: decimal("discount_percentage"),
    active: boolean("active"),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

export const productTable = pgTable("product",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    name: varchar("name").unique().notNull(),
    imgUrl: varchar("img_url"),
    type: varchar("type"),
    price: decimal("price"),
    thcLevel: varchar("thc_level"),
    description: varchar("description"),
    mostCommonTerpene: varchar("most_common_terpene"),
    categoryID: uuid("category_id")
    .references(() => productCategoryTable.id),
    discountID: uuid("discount_id")
        .references(() => discountTable.id),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

export const effectsTable = pgTable("effects",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    productID: uuid("product_id")
        .references(() => productTable.id)
        .notNull(),
    tingly: integer("tingly"),
    cancer: integer("cancer"),
    pms: integer("pms"),
    spinalCordInjury: integer("spinal_cord_injury"),
    pain: integer("pain"),
    relaxed: integer("relaxed"),
    aroused: integer("aroused"),
    muscleSpasms: integer("muscle_spasms"),
    depression: integer("depression"),
    migraines: integer("migraines"),
    paranoid: integer("paranoid"),
    inflammation: integer("inflammation"),
    phantomLimbPain: integer("phantom_limb_pain"),
    talkative: integer("talkative"),
    dryEyes: integer("dry_eyes"),
    dryMouth: integer("dry_mouth"),
    stress: integer("stress"),
    alzheimers: integer("alzheimers"),
    eyePressure: integer("eye_pressure"),
    ptsd: integer("ptsd"),
    fibromyalgia: integer('fibromyalgia'),
    anxious: integer("anxious"),
    dizzy: integer("dizzy"),
    addADHD: integer("add_adh"),
    epilepsy: integer("epilepsy"),
    anorexia: integer('anorexia'),
    multipleSclerosis: integer("multiple_sclerosis"),
    headaches: integer("headaches"),
    sleepy: integer("sleepy"),
    fatigue: integer("fatigue"),
    hivAids: integer("hiv_aids"),
    nausea: integer("nausea"),
    euphoric: integer("euphoric"),
    asthma: integer("asthma"),
    energetic: integer("energetic"),
    giggly: integer("giggly"),
    tourettesSyndrome: integer("tourettes_syndrome"),
    gastrointestinalDisorder: integer("gastrointestinal_disorder"),
    spasticity: integer("spasticity"),
    anxiety: integer("anxiety"),
    uplifted: integer("uplifted"),
    cramps: integer("cramps"),
    parkinsons: integer("parkinsons"),
    hypertension: integer("hypertension"),
    glaucoma: integer("glaucoma"),
    crohnsDisease: integer("crohns_disease"),
    insomnia: integer("insomnia"),
    focused: integer("focused"),
    hungry: integer("hungry"),
    muscularDystrophy: integer("muscle_dystrophy"),
    creative: integer("creative"),
    happy: integer("happy"),
    lackOfAppetite: integer("lack_of_appetite"),
    seizures: integer("seizures"),
    bipolarDisorder: integer("bipolar_disorder"),
    tinnitus: integer("tinnitus"),
    arthritis: integer("arthritis"),
    headache: integer("headache")
})

export const productInventoryTable = pgTable("product_inventory",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    productID: uuid("product_id")
        .references(() => productTable.id)
        .notNull(),
    quantity: integer("quantity"),
    availability: boolean("availability"),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

// no need but can be created later just incase anything
// Create relations
// User Relations
// Product Relations
// Shopping relations