import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    BeforeInsert
} from 'typeorm'
import * as bcrypt from 'bcryptjs'

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn() id: number

    @Column() email: string

    @Column() password: string

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }
}
