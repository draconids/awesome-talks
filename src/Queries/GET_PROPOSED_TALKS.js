import { gql } from 'apollo-boost'

export default gql`
    query speakerVideos {
        allVideoses(orderBy: createdAt_DESC, filter: { isPublished: false }) {
            id
            speaker {
                name
            }
            description
            link
            name
            tags {
                name
                id
            }
        }
    }
`
