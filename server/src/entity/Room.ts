import { Entity, BaseEntity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Room extends BaseEntity {
    @PrimaryColumn() roomNumber: number

    @Column() price: number

    @Column() people: number
}
