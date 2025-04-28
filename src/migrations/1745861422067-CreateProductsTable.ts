import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1745861422067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "varchar" },
          { name: "category", type: "varchar" },
          { name: "brand", type: "varchar" },
          { name: "description", type: "varchar" },
          { name: "price", type: "decimal", precision: 10, scale: 2 },
          { name: "image", type: "varchar" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
