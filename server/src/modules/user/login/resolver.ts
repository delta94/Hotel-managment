import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import { ResolverMap } from '../../../types/resolverMap'
import { User } from '../../../entity/User'
import { badEmail, badPassword } from './errorMessages'

export const resolver: ResolverMap = {
    Mutation: {
        login: async (_, { email, password }) => {
            const user = await User.findOne({ where: { email } })

            if (!user) {
                return {
                    ok: false,
                    errors: [{ message: badEmail }]
                }
            }

            const comparePasswords = await bcrypt.compare(
                password,
                user.password
            )

            if (!comparePasswords) {
                return {
                    ok: false,
                    errors: [{ message: badPassword }]
                }
            }

            const token = jwt.sign({ id: user.id }, process.env
                .SECRET as string)

            return {
                ok: true,
                token
            }
        }
    }
}
