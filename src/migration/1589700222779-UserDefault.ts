import {MigrationInterface, QueryRunner} from "typeorm";

export class UserDefault1589700222779 implements MigrationInterface {
    name = 'UserDefault1589700222779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "email" character varying(50) NOT NULL, "password" character varying NOT NULL, "firstName" character varying(40) NOT NULL, "lastName" character varying(40) NOT NULL, "age" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3023f46960cca9eb9d5c03c970d" UNIQUE ("email"), CONSTRAINT "PK_ac7b62b1284fea771b5bf2f47fe" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
