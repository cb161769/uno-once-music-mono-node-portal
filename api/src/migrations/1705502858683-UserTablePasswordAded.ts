import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTablePasswordAded1705502858683 implements MigrationInterface {
    name = 'UserTablePasswordAded1705502858683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "username" TO "password"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" TO "UQ_450a05c0c4de5b75ac8d34835b9"`);
        await queryRunner.query(`ALTER TABLE "memberships" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user-memberships" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_450a05c0c4de5b75ac8d34835b9"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdmin" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user-permissions" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "studies" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "pages" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "own-events" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "own-events" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "pages" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "studies" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user-permissions" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdmin" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_450a05c0c4de5b75ac8d34835b9" UNIQUE ("password")`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user-memberships" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "memberships" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "UQ_450a05c0c4de5b75ac8d34835b9" TO "UQ_fe0bb3f6520ee0469504521e710"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "password" TO "username"`);
    }

}
