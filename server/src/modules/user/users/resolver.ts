import { getRepository } from 'typeorm'

import { User } from '../../../entity/User'
import { ResolverMap } from '../../../types/resolverMap'

export const resolver: ResolverMap = {
    Query: {
        users: async (_, { pattern }) => {
            const data = await getRepository(User)
                .createQueryBuilder('user')
                .select()
                .where('user.email like :name', {
                    name: '%' + pattern + '%'
                })
                .getMany()

            return data
        }
    }
}
