ALTER TABLE "user_address" ALTER COLUMN "telephone" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user_address" ALTER COLUMN "mobile" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_telephone_unique" UNIQUE("telephone");--> statement-breakpoint
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_mobile_unique" UNIQUE("mobile");