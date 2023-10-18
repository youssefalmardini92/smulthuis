/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMenueItems = /* GraphQL */ `mutation CreateMenueItems(
  $input: CreateMenueItemsInput!
  $condition: ModelMenueItemsConditionInput
) {
  createMenueItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMenueItemsMutationVariables,
  APITypes.CreateMenueItemsMutation
>;
export const updateMenueItems = /* GraphQL */ `mutation UpdateMenueItems(
  $input: UpdateMenueItemsInput!
  $condition: ModelMenueItemsConditionInput
) {
  updateMenueItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMenueItemsMutationVariables,
  APITypes.UpdateMenueItemsMutation
>;
export const deleteMenueItems = /* GraphQL */ `mutation DeleteMenueItems(
  $input: DeleteMenueItemsInput!
  $condition: ModelMenueItemsConditionInput
) {
  deleteMenueItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMenueItemsMutationVariables,
  APITypes.DeleteMenueItemsMutation
>;
export const createMenus = /* GraphQL */ `mutation CreateMenus(
  $input: CreateMenusInput!
  $condition: ModelMenusConditionInput
) {
  createMenus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMenusMutationVariables,
  APITypes.CreateMenusMutation
>;
export const updateMenus = /* GraphQL */ `mutation UpdateMenus(
  $input: UpdateMenusInput!
  $condition: ModelMenusConditionInput
) {
  updateMenus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMenusMutationVariables,
  APITypes.UpdateMenusMutation
>;
export const deleteMenus = /* GraphQL */ `mutation DeleteMenus(
  $input: DeleteMenusInput!
  $condition: ModelMenusConditionInput
) {
  deleteMenus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMenusMutationVariables,
  APITypes.DeleteMenusMutation
>;
export const createServices = /* GraphQL */ `mutation CreateServices(
  $input: CreateServicesInput!
  $condition: ModelServicesConditionInput
) {
  createServices(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServicesMutationVariables,
  APITypes.CreateServicesMutation
>;
export const updateServices = /* GraphQL */ `mutation UpdateServices(
  $input: UpdateServicesInput!
  $condition: ModelServicesConditionInput
) {
  updateServices(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServicesMutationVariables,
  APITypes.UpdateServicesMutation
>;
export const deleteServices = /* GraphQL */ `mutation DeleteServices(
  $input: DeleteServicesInput!
  $condition: ModelServicesConditionInput
) {
  deleteServices(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServicesMutationVariables,
  APITypes.DeleteServicesMutation
>;
export const createMenueItemsMenus = /* GraphQL */ `mutation CreateMenueItemsMenus(
  $input: CreateMenueItemsMenusInput!
  $condition: ModelMenueItemsMenusConditionInput
) {
  createMenueItemsMenus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMenueItemsMenusMutationVariables,
  APITypes.CreateMenueItemsMenusMutation
>;
export const updateMenueItemsMenus = /* GraphQL */ `mutation UpdateMenueItemsMenus(
  $input: UpdateMenueItemsMenusInput!
  $condition: ModelMenueItemsMenusConditionInput
) {
  updateMenueItemsMenus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMenueItemsMenusMutationVariables,
  APITypes.UpdateMenueItemsMenusMutation
>;
export const deleteMenueItemsMenus = /* GraphQL */ `mutation DeleteMenueItemsMenus(
  $input: DeleteMenueItemsMenusInput!
  $condition: ModelMenueItemsMenusConditionInput
) {
  deleteMenueItemsMenus(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMenueItemsMenusMutationVariables,
  APITypes.DeleteMenueItemsMenusMutation
>;
