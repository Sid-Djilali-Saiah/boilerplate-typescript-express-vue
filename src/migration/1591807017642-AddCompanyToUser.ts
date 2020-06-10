import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCompanyToUser1591807017642 implements MigrationInterface {
    name = 'AddCompanyToUser1591807017642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "company" character varying DEFAULT null`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "company"`, undefined);
    }

}
