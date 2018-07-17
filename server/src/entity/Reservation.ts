import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToMany,
    JoinTable
} from 'typeorm'
import { User } from './User'
import { Room } from './Room'

@Entity()
export class Reservation extends BaseEntity {
    @PrimaryGeneratedColumn() id: number

    @Column() userId: number

    @Column() startDate: Date

    @Column() endDate: Date

    @Column() people: number

    @ManyToMany(() => Room)
    @JoinTable()
    rooms: Room[]

    @OneToOne(() => User)
    @JoinColumn()
    user: User
}
