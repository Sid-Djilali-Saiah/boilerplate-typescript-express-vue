import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class User extends BaseEntity {
  @PrimaryColumn('uuid')
  id!: string;

  @Column({
    unique: true,
    length: 50,
    width: 50,
  })
  email!: string;

  @Column()
  password!: string;

  @Column({
    length: 40,
  })
  firstName!: string;

  @Column({
    length: 40,
  })
  lastName!: string;

  @Column()
  age!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
