import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "./Product";

@Entity("reviews")
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  feedback: string;

  @Column()
  experience: string;

  @Column()
  recommend: boolean;

  @Column()
  productId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "productId" })
  product: Product;
}
