import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialize1705155581333 implements MigrationInterface {
    name = 'Initialize1705155581333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "memberships" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP, "isDeleted" boolean NOT NULL DEFAULT '0', "title" character varying(100) NOT NULL, "description" character varying(255), "amount" integer NOT NULL, CONSTRAINT "UQ_acfa82f19a89abc14eb13ca61d9" UNIQUE ("title"), CONSTRAINT "PK_25d28bd932097a9e90495ede7b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user-memberships" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP, "isDeleted" boolean NOT NULL DEFAULT '0', "data" character varying, "paymentId" character varying, "userId" uuid NOT NULL, "membershipId" uuid NOT NULL, CONSTRAINT "PK_8a95b60d484471abfce34f93302" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP, "isDeleted" boolean NOT NULL DEFAULT '0', "fullName" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "bio" character varying(255), "username" character varying(20) NOT NULL, "passwordToken" character varying, "isAdmin" boolean NOT NULL, "status" integer NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user-memberships" ADD CONSTRAINT "FK_9d04bb95f4a56687ee0b58b5773" FOREIGN KEY ("membershipId") REFERENCES "memberships"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user-memberships" ADD CONSTRAINT "FK_abe7a39298f703bad90501f1eed" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user-memberships" DROP CONSTRAINT "FK_abe7a39298f703bad90501f1eed"`);
        await queryRunner.query(`ALTER TABLE "user-memberships" DROP CONSTRAINT "FK_9d04bb95f4a56687ee0b58b5773"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user-memberships"`);
        await queryRunner.query(`DROP TABLE "memberships"`);
    }

}
