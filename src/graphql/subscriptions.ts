/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMenueItems = /* GraphQL */ `subscription OnCreateMenueItems(
  $filter: ModelSubscriptionMenueItemsFilterInput
) {
  onCreateMenueItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMenueItemsSubscriptionVariables,
  APITypes.OnCreateMenueItemsSubscription
>;
export const onUpdateMenueItems = /* GraphQL */ `subscription OnUpdateMenueItems(
  $filter: ModelSubscriptionMenueItemsFilterInput
) {
  onUpdateMenueItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMenueItemsSubscriptionVariables,
  APITypes.OnUpdateMenueItemsSubscription
>;
export const onDeleteMenueItems = /* GraphQL */ `subscription OnDeleteMenueItems(
  $filter: ModelSubscriptionMenueItemsFilterInput
) {
  onDeleteMenueItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMenueItemsSubscriptionVariables,
  APITypes.OnDeleteMenueItemsSubscription
>;
export const onCreateMenus = /* GraphQL */ `subscription OnCreateMenus($filter: ModelSubscriptionMenusFilterInput) {
  onCreateMenus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMenusSubscriptionVariables,
  APITypes.OnCreateMenusSubscription
>;
export const onUpdateMenus = /* GraphQL */ `subscription OnUpdateMenus($filter: ModelSubscriptionMenusFilterInput) {
  onUpdateMenus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMenusSubscriptionVariables,
  APITypes.OnUpdateMenusSubscription
>;
export const onDeleteMenus = /* GraphQL */ `subscription OnDeleteMenus($filter: ModelSubscriptionMenusFilterInput) {
  onDeleteMenus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMenusSubscriptionVariables,
  APITypes.OnDeleteMenusSubscription
>;
export const onCreateServices = /* GraphQL */ `subscription OnCreateServices($filter: ModelSubscriptionServicesFilterInput) {
  onCreateServices(filter: $filter) {
    id
    title
    subtitle
    content
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServicesSubscriptionVariables,
  APITypes.OnCreateServicesSubscription
>;
export const onUpdateServices = /* GraphQL */ `subscription OnUpdateServices($filter: ModelSubscriptionServicesFilterInput) {
  onUpdateServices(filter: $filter) {
    id
    title
    subtitle
    content
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServicesSubscriptionVariables,
  APITypes.OnUpdateServicesSubscription
>;
export const onDeleteServices = /* GraphQL */ `subscription OnDeleteServices($filter: ModelSubscriptionServicesFilterInput) {
  onDeleteServices(filter: $filter) {
    id
    title
    subtitle
    content
    imageUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServicesSubscriptionVariables,
  APITypes.OnDeleteServicesSubscription
>;
export const onCreateMenueItemsMenus = /* GraphQL */ `subscription OnCreateMenueItemsMenus(
  $filter: ModelSubscriptionMenueItemsMenusFilterInput
) {
  onCreateMenueItemsMenus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMenueItemsMenusSubscriptionVariables,
  APITypes.OnCreateMenueItemsMenusSubscription
>;
export const onUpdateMenueItemsMenus = /* GraphQL */ `subscription OnUpdateMenueItemsMenus(
  $filter: ModelSubscriptionMenueItemsMenusFilterInput
) {
  onUpdateMenueItemsMenus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMenueItemsMenusSubscriptionVariables,
  APITypes.OnUpdateMenueItemsMenusSubscription
>;
export const onDeleteMenueItemsMenus = /* GraphQL */ `subscription OnDeleteMenueItemsMenus(
  $filter: ModelSubscriptionMenueItemsMenusFilterInput
) {
  onDeleteMenueItemsMenus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMenueItemsMenusSubscriptionVariables,
  APITypes.OnDeleteMenueItemsMenusSubscription
>;
