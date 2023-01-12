-- Don't forget to add your create table SQL 
CREATE TABLE "shoppingList" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL,
  "quantity" numeric(10,2) NOT NULL,
  "unit" VARCHAR(20) NOT NULL,
  "bought" BOOLEAN DEFAULT FALSE
);

INSERT INTO "shoppingList"
	("name", "quantity", "unit")
	VALUES
	('Cole', '5', 'logs'),
	('Connor', '6', 'computers');

-- It is also helpful to include some test 