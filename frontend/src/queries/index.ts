//REFERENCE: https://github.com/acro5piano/typed-graphqlify
import {
    query,
    types,
    alias,
    mutation,
    subscription,
} from 'typed-graphqlify'

//GET
export const getActorsQuery = query('GetActors', {
    [alias('actor', 'actor')]: [
        {
            id: types.string,
            name: types.string,
            lastName: types.string,
            middleName: types.string,
        },
    ],
})
export const aggregateActorsRolesAndFilms = query('aggregateActorsRolesAndFilms', {
    [alias('getActors', 'actor')]: [
        {
            lastname: types.string,
            id: types.number,
            firstname: types.string,
            middlename: types.string,
        },
    ],
})

//CREATE UPDATE DELETE
export const insertOneActor = mutation(
    `
insertOneActor(
  $firstname: String!,
  $middlename: String,
  $lastname: String,
)`,
    {
        [alias(
            'insertOneActor',
            `insert_actor(
              objects: {
                firstname: $firstname, 
                lastname: $lastname, 
                middlename: $middlename 
              }
            )`,
        )]: {
            returning: {
                id: types.number,
                firstname: types.string,
            },
        },
    },
)
export const deleteOneActor = mutation(
    `
deleteOneActor(
  $id: uuid!, 
)`,
    {
        [alias(
            'deleteOneActor',
            `delete_actor(
              where: { 
                id: {_eq: $id}, 
              }
            )`,
        )]: {
            returning: {
                id: types.number,
            },
        },
    },
)


//SUBSCRIPTIONS
export const getActorsSubscription = subscription('SubscribeToActor', {
    [alias('actors', 'actor')]: [
        {
            id: types.string,
            firstname: types.string,
            lastname: types.string,
            middlename: types.string,
            version: types.number,
            // updated_at: types.string,
        },
    ],
})
