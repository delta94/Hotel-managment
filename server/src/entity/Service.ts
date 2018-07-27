import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from 'typeorm'
import { Reservation } from './Reservation'

@Entity()
export class Service extends BaseEntity {
    @PrimaryGeneratedColumn() id: number

    @Column() name: string

    @Column() price: number

    @Column() priceCategory: string

    @ManyToOne(() => Reservation, reservation => reservation.services)
    reservations: Reservation[]
}
