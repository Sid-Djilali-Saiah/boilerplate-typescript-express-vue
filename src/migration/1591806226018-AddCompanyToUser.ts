import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCompanyToUser1591806226018 implements MigrationInterface {
    name = 'AddCompanyToUser1591806226018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "company" character varying NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "company"`, undefined);
    }

}
