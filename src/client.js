import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { format, parseISO } from 'date-fns'

const client = new ApolloClient({
    uri: 'https://api.entur.io/journey-planner/v3/graphql',
    cache: new InMemoryCache(),
});

const query = gql`
    query {
        stopPlace(id: "NSR:StopPlace:58801") {
            id
            name
            estimatedCalls(timeRange: 72100, numberOfDepartures: 10) {     
              expectedDepartureTime
              destinationDisplay {
                frontText
              }
            }
        }
    }
`

function mapDepartures(estimatedCalls) {
    return estimatedCalls.map(({ destinationDisplay, expectedDepartureTime }) => {
        return (
            {   
                frontText: destinationDisplay.frontText,
                departureTime: format(parseISO(expectedDepartureTime), 'HH:mm')
            }
        )
    })
}

export async function fetchDepartures() {
    const { data } = await client.query({
        query,
    })

    const departures = mapDepartures(data.stopPlace.estimatedCalls)

    return { stopPlace: data.stopPlace.name, departures}
}