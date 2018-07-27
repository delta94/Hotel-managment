import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ServicesQuery_services, ServicesQuery } from '../../schemaTypes'

const query = gql`
    query ServicesQuery {
        services {
            id
            name
            price
            priceCategory
        }
    }
`

export interface WithServicesQuery {
    services: ServicesQuery_services[]
    loading: boolean
}

export const withServices = graphql<any, ServicesQuery, {}, WithServicesQuery>(
    query,
    {
        props: ({ data }) => {
            let services: ServicesQuery_services[] = []

            if (data && !data.loading && data.services) {
                services = data.services
            }

            return {
                services,
                loading: data ? data.loading : false
            }
        }
    }
)
