//REFERENCE: https://github.com/acro5piano/typed-graphqlify
import {query, types, alias, mutation, subscription} from 'typed-graphqlify'

//GET

//Actors
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

export const searchActors = query(
    `searchActors(
    $firstname: String,
    $lastname: String,
    $middlename: String,
)`,
    {
        [alias(
            'searchActors',
            `actor(
            where: { 
              lastname: {_ilike: $lastname}, 
              middlename: {_ilike: $middlename}, 
              firstname: {_ilike: $firstname}, 
            }
    )`,
        )]: [
            {
                id: types.number,
                firstname: types.string,
                lastname: types.string,
                middlename: types.string,
            },
        ],
    },
)

//CREATE UPDATE DELETE

//Actors
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

export const updateOneActor = mutation(
    `
updateOneActor(
  $id: uuid!, 
)`,
    {
        [alias(
            'updateOneActor',
            `update_actor(
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

//Messages
export const insertOneMessage = mutation(
    `
insertOneMesssage(
  $senderId: uuid!,
  $body: String!, 
)`,
    {
        [alias(
            'insertOneMessage',
            `insert_message_one(
              object: {
                actor_id: $senderId, 
                body: $body,  
              }
            )`,
        )]: { 
                actor_id: types.number,
                body: types.string, 
        },
    },
)

export const deleteOneMessage = mutation(
    `
deleteOneMessgae(
  $id: uuid!, 
)`,
    {
        [alias(
            'deleteOneMessgae',
            `delete_message(
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


//Posts



//Authentication


//SUBSCRIPTIONS

//Actors
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

//Messaging
export const getMessagesSubscription = subscription('SubscribeToMessages', {
    [alias('messages', 'message')]: [
        {
            body: types.string,
            timestamp: types.string,
            id: types.number,
            // reactions: types.string,
            actor: {
                firstname: types.string,
                id: types.number,
            },
        },
    ],
})

//Posts
export const getPostsSubscription = subscription('SubscribeToPosts', {
    [alias('posts', 'message')]: [
        {
            body: types.string,
            timestamp: types.string,
            id: types.number,
            // reactions: types.string,
            actor: {
                firstname: types.string,
                id: types.number,
            },
        },
    ],
})