import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
    OneToMany
} from 'typeorm'
import { User } from './User'
import { Room } from './Room'
import { Service } from './Service'

@Entity()
export class Reservation extends BaseEntity {
    @PrimaryGeneratedColumn() id: number

    @Column() userId: number

    @Column() startDate: Date

    @Column() endDate: Date

    @Column() people: number

    @ManyToMany(() => Room, room => room.reservations)
    @JoinTable()
    rooms: Room[]

    @OneToMany(() => Service, service => service.reservations)
    services: Service[]

    @OneToOne(() => User)
    @JoinColumn()
    user: User
}
