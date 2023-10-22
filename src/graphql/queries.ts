/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMenueItems = /* GraphQL */ `query GetMenueItems($id: ID!) {
  getMenueItems(id: $id) {
    id
    name
    description
    Menu {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMenueItemsQueryVariables,
  APITypes.GetMenueItemsQuery
>;
export const listMenueItems = /* GraphQL */ `query ListMenueItems(
  $filter: ModelMenueItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenueItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMenueItemsQueryVariables,
  APITypes.ListMenueItemsQuery
>;
export const getMenus = /* GraphQL */ `query GetMenus($id: ID!) {
  getMenus(id: $id) {
    id
    title
    menueitemss {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMenusQueryVariables, APITypes.GetMenusQuery>;
export const listMenus = /* GraphQL */ `query ListMenus(
  $filter: ModelMenusFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMenusQueryVariables, APITypes.ListMenusQuery>;
export const getServices = /* GraphQL */ `query GetServices($id: ID!) {
  getServices(id: $id) {
    id
    title
    subtitle
    content
    imageUrl
    weight
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServicesQueryVariables,
  APITypes.GetServicesQuery
>;
export const listServices = /* GraphQL */ `query ListServices(
  $filter: ModelServicesFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      subtitle
      content
      imageUrl
      weight
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServicesQueryVariables,
  APITypes.ListServicesQuery
>;
export const getMenueItemsMenus = /* GraphQL */ `query GetMenueItemsMenus($id: ID!) {
  getMenueItemsMenus(id: $id) {
    id
    menueItemsId
    menusId
    menueItems {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    menus {
      id
      title
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMenueItemsMenusQueryVariables,
  APITypes.GetMenueItemsMenusQuery
>;
export const listMenueItemsMenus = /* GraphQL */ `query ListMenueItemsMenus(
  $filter: ModelMenueItemsMenusFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenueItemsMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      menueItemsId
      menusId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMenueItemsMenusQueryVariables,
  APITypes.ListMenueItemsMenusQuery
>;
export const menueItemsMenusByMenueItemsId = /* GraphQL */ `query MenueItemsMenusByMenueItemsId(
  $menueItemsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMenueItemsMenusFilterInput
  $limit: Int
  $nextToken: String
) {
  menueItemsMenusByMenueItemsId(
    menueItemsId: $menueItemsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      menueItemsId
      menusId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MenueItemsMenusByMenueItemsIdQueryVariables,
  APITypes.MenueItemsMenusByMenueItemsIdQuery
>;
export const menueItemsMenusByMenusId = /* GraphQL */ `query MenueItemsMenusByMenusId(
  $menusId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMenueItemsMenusFilterInput
  $limit: Int
  $nextToken: String
) {
  menueItemsMenusByMenusId(
    menusId: $menusId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      menueItemsId
      menusId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MenueItemsMenusByMenusIdQueryVariables,
  APITypes.MenueItemsMenusByMenusIdQuery
>;
