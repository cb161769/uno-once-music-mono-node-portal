import { MigrationInterface, QueryRunner } from "typeorm";

export class AllTables1705159294717 implements MigrationInterface {
    name = 'AllTables1705159294717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user-permissions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP, "isDeleted" boolean NOT NULL DEFAULT '0', "permission" integer NOT NULL, "description" character varying(150), "userId" uuid NOT NULL, CONSTRAINT "PK_118cd45183a3a624b0b22b6aaf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP, "isDeleted" boolean NOT NULL DEFAULT '0', "description" character varying(255) NOT NULL, "userId" uuid NOT NULL, "dateFrom" TIMESTAMP NOT NULL, "dateTo" TIMESTAMP NOT NULL, "hours" integer NOT NULL, "status" integer NOT NULL, CONSTRAINT "PK_da95cef71b617ac35dc5bcda243" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "studies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP, "isDeleted" boolean NOT NULL DEFAULT '0', "title" character varying(100) NOT NULL, "description" character varying, CONSTRAINT "PK_b100ff0c4a0ad02a9c2270d45b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP, "isDeleted" boolean NOT NULL DEFAULT '0', "title" character varying(100) NOT NULL, "description" character varying NOT NULL, "link" character varying, "type" integer NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP, "isDeleted" boolean NOT NULL DEFAULT '0', "path" character varying(30) NOT NULL, "title" character varying(50) NOT NULL, "description" character varying, CONSTRAINT "PK_8f21ed625aa34c8391d636b7d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "own-events" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP, "isDeleted" boolean NOT NULL DEFAULT '0', "title" character varying(100) NOT NULL, "description" character varying(200), "link" character varying, "dateFrom" TIMESTAMP NOT NULL, "dateTo" TIMESTAMP NOT NULL, "hours" integer NOT NULL, CONSTRAINT "PK_f04382126aa92b3c5e8d674780f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "memberships" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user-memberships" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user-permissions" ADD CONSTRAINT "FK_95ae8c92259717c22ced22437bc" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_aa0e1cc2c4f54da32bf8282154c" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_aa0e1cc2c4f54da32bf8282154c"`);
        await queryRunner.query(`ALTER TABLE "user-permissions" DROP CONSTRAINT "FK_95ae8c92259717c22ced22437bc"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user-memberships" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "memberships" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`DROP TABLE "own-events"`);
        await queryRunner.query(`DROP TABLE "pages"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "studies"`);
        await queryRunner.query(`DROP TABLE "reservations"`);
        await queryRunner.query(`DROP TABLE "user-permissions"`);
    }

}
