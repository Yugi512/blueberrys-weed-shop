ALTER TABLE "order_items" DROP CONSTRAINT "order_items_payment_id_payment_detail_id_fk";
--> statement-breakpoint
ALTER TABLE "order_detail" ALTER COLUMN "payment_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "order_detail" ADD COLUMN "completed" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "order_items" DROP COLUMN "payment_id";