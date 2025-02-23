CREATE TYPE "public"."role" AS ENUM('USER', 'ADMIN');--> statement-breakpoint
CREATE TABLE "cart_item" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"session_id" uuid NOT NULL,
	"quantity" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "cart_item_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "discount" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"description" text,
	"discount_percentage" numeric,
	"active" boolean,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "discount_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "effects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"tingly" integer,
	"cancer" integer,
	"pms" integer,
	"spinal_cord_injury" integer,
	"pain" integer,
	"relaxed" integer,
	"aroused" integer,
	"muscle_spasms" integer,
	"depression" integer,
	"migraines" integer,
	"paranoid" integer,
	"inflammation" integer,
	"phantom_limb_pain" integer,
	"talkative" integer,
	"dry_eyes" integer,
	"dry_mouth" integer,
	"stress" integer,
	"alzheimers" integer,
	"eye_pressure" integer,
	"ptsd" integer,
	"fibromyalgia" integer,
	"anxious" integer,
	"dizzy" integer,
	"add_adh" integer,
	"epilepsy" integer,
	"anorexia" integer,
	"multiple_sclerosis" integer,
	"headaches" integer,
	"sleepy" integer,
	"fatigue" integer,
	"hiv_aids" integer,
	"nausea" integer,
	"euphoric" integer,
	"asthma" integer,
	"energetic" integer,
	"giggly" integer,
	"tourettes_syndrome" integer,
	"gastrointestinal_disorder" integer,
	"spasticity" integer,
	"anxiety" integer,
	"uplifted" integer,
	"cramps" integer,
	"parkinsons" integer,
	"hypertension" integer,
	"glaucoma" integer,
	"crohns_disease" integer,
	"insomnia" integer,
	"focused" integer,
	"hungry" integer,
	"muscle_dystrophy" integer,
	"creative" integer,
	"happy" integer,
	"lack_of_appetite" integer,
	"seizures" integer,
	"bipolar_disorder" integer,
	"tinnitus" integer,
	"arthritis" integer,
	"headache" integer,
	CONSTRAINT "effects_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "order_detail" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"payment_id" uuid NOT NULL,
	"total" numeric NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "order_detail_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "order_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"payment_id" uuid NOT NULL,
	"order_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "order_items_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "payment_detail" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"order_id" uuid NOT NULL,
	"amount" integer NOT NULL,
	"provider" varchar NOT NULL,
	"status" varchar NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "payment_detail_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "product_category" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "product_category_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "product_inventory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"quantity" integer,
	"availability" boolean,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "product_inventory_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "product" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"img_url" varchar,
	"type" varchar,
	"price" numeric,
	"thc_level" varchar,
	"description" varchar,
	"most_common_terpene" varchar,
	"category_id" uuid,
	"discount_id" uuid,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "product_id_unique" UNIQUE("id"),
	CONSTRAINT "product_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "shopping_session" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"total" numeric NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "shopping_session_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "user_address" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"address_line1" text,
	"address_line2" text,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"zip" text NOT NULL,
	"telephone" text NOT NULL,
	"mobile" text NOT NULL,
	CONSTRAINT "user_address_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "user_payment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"payment_type" varchar NOT NULL,
	"provider" varchar NOT NULL,
	"account_number" varchar(17) NOT NULL,
	"expiration" varchar(5) NOT NULL,
	CONSTRAINT "user_payment_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(16) NOT NULL,
	"first_name" varchar(30) NOT NULL,
	"last_name" varchar(30) NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"role" "role" DEFAULT 'USER',
	"last_activity_date" date DEFAULT now(),
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "user_id_unique" UNIQUE("id"),
	CONSTRAINT "user_username_unique" UNIQUE("username"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_session_id_shopping_session_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."shopping_session"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "effects" ADD CONSTRAINT "effects_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_payment_id_payment_detail_id_fk" FOREIGN KEY ("payment_id") REFERENCES "public"."payment_detail"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_payment_id_payment_detail_id_fk" FOREIGN KEY ("payment_id") REFERENCES "public"."payment_detail"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_order_detail_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."order_detail"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment_detail" ADD CONSTRAINT "payment_detail_order_id_order_detail_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."order_detail"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_inventory" ADD CONSTRAINT "product_inventory_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product" ADD CONSTRAINT "product_category_id_product_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."product_category"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product" ADD CONSTRAINT "product_discount_id_discount_id_fk" FOREIGN KEY ("discount_id") REFERENCES "public"."discount"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shopping_session" ADD CONSTRAINT "shopping_session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_payment" ADD CONSTRAINT "user_payment_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;