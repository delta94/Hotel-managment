import * as React from 'react'
import { compose } from 'react-apollo'

import { withServices, WithServicesQuery } from 'src/graphql/services'
import { Checkbox } from 'src/Components/Checkbox'
import { Container, Title, Row, Text, List } from './style'

export const C: React.SFC<WithServicesQuery> = ({ services }) => (
    <Container>
        <Title>Services</Title>
        <List>
            {services.map(service => (
                <Row key={service.id}>
                    <Checkbox onClick={() => null} />
                    <Text>
                        {service.name} / ${service.price}
                    </Text>
                </Row>
            ))}
        </List>
    </Container>
)

export const Services = compose(withServices)(C)
