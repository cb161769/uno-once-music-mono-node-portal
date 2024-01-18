import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTableLastLogin1705501982742 implements MigrationInterface {
    name = 'UserTableLastLogin1705501982742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "lastLoginAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isVerified" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "memberships" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user-memberships" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user-permissions" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "studies" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "own-events" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "pages" ALTER COLUMN "isDeleted" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pages" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "own-events" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "studies" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "reservations" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user-permissions" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user-memberships" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "memberships" ALTER COLUMN "isDeleted" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isVerified"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastLoginAt"`);
    }

}
