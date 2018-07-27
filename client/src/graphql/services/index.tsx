import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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

export const services = graphql(query)
