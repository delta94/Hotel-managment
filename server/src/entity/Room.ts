import { Entity, BaseEntity, Column, PrimaryColumn, ManyToMany } from 'typeorm'
import { Reservation } from './Reservation'

@Entity()
export class Room extends BaseEntity {
    @PrimaryColumn() roomNumber: number

    @Column() price: number

    @Column() people: number

    @ManyToMany(() => Reservation, reservation => reservation.rooms)
    reservations: Reservation[]
}
