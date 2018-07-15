import { ResolverMap } from '../../../types/resolverMap'
import { User } from '../../../entity/User'
import { RegisterSchema } from './registerSchema'
import { formatYupError } from '../../../utils/formatYupError'
import { duplicateEmail } from './errorMessages'

export const resolver: ResolverMap = {
    Query: { hello: () => 'hello' },
    Mutation: {
        register: async (_, args) => {
            try {
                await RegisterSchema.validate(args, { abortEarly: false })
            } catch (err) {
                return {
                    ok: false,
                    errors: formatYupError(err)
                }
            }

            const { email, password } = args

            const isEmailTaken = await User.findOne({ where: { email } })

            if (isEmailTaken) {
                return {
                    ok: false,
                    errors: [
                        {
                            message: duplicateEmail
                        }
                    ]
                }
            }

            await User.create({
                email,
                password
            }).save()

            return {
                ok: true
            }
        }
    }
}
