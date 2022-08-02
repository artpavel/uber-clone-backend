import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field(() => Boolean)
  @Column()
  @IsBoolean()
  isVegan?: boolean;

  @Field(() => String)
  @Column()
  @IsString()
  address: string;

  @Field(() => String)
  @Column()
  @IsString()
  ownerName: string;

  @Field(() => String)
  @Column()
  @IsString()
  categoryName: string;
}
