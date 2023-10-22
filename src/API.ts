/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMenueItemsInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
};

export type ModelMenueItemsConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMenueItemsConditionInput | null > | null,
  or?: Array< ModelMenueItemsConditionInput | null > | null,
  not?: ModelMenueItemsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type MenueItems = {
  __typename: "MenueItems",
  id: string,
  name?: string | null,
  description?: string | null,
  Menu?: ModelMenueItemsMenusConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMenueItemsMenusConnection = {
  __typename: "ModelMenueItemsMenusConnection",
  items:  Array<MenueItemsMenus | null >,
  nextToken?: string | null,
};

export type MenueItemsMenus = {
  __typename: "MenueItemsMenus",
  id: string,
  menueItemsId: string,
  menusId: string,
  menueItems: MenueItems,
  menus: Menus,
  createdAt: string,
  updatedAt: string,
};

export type Menus = {
  __typename: "Menus",
  id: string,
  title?: string | null,
  menueitemss?: ModelMenueItemsMenusConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMenueItemsInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteMenueItemsInput = {
  id: string,
};

export type CreateMenusInput = {
  id?: string | null,
  title?: string | null,
};

export type ModelMenusConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelMenusConditionInput | null > | null,
  or?: Array< ModelMenusConditionInput | null > | null,
  not?: ModelMenusConditionInput | null,
};

export type UpdateMenusInput = {
  id: string,
  title?: string | null,
};

export type DeleteMenusInput = {
  id: string,
};

export type CreateServicesInput = {
  id?: string | null,
  title?: string | null,
  subtitle?: string | null,
  content?: string | null,
  imageUrl?: string | null,
  weight?: number | null,
};

export type ModelServicesConditionInput = {
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  and?: Array< ModelServicesConditionInput | null > | null,
  or?: Array< ModelServicesConditionInput | null > | null,
  not?: ModelServicesConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Services = {
  __typename: "Services",
  id: string,
  title?: string | null,
  subtitle?: string | null,
  content?: string | null,
  imageUrl?: string | null,
  weight?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateServicesInput = {
  id: string,
  title?: string | null,
  subtitle?: string | null,
  content?: string | null,
  imageUrl?: string | null,
  weight?: number | null,
};

export type DeleteServicesInput = {
  id: string,
};

export type CreateMenueItemsMenusInput = {
  id?: string | null,
  menueItemsId: string,
  menusId: string,
};

export type ModelMenueItemsMenusConditionInput = {
  menueItemsId?: ModelIDInput | null,
  menusId?: ModelIDInput | null,
  and?: Array< ModelMenueItemsMenusConditionInput | null > | null,
  or?: Array< ModelMenueItemsMenusConditionInput | null > | null,
  not?: ModelMenueItemsMenusConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMenueItemsMenusInput = {
  id: string,
  menueItemsId?: string | null,
  menusId?: string | null,
};

export type DeleteMenueItemsMenusInput = {
  id: string,
};

export type ModelMenueItemsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMenueItemsFilterInput | null > | null,
  or?: Array< ModelMenueItemsFilterInput | null > | null,
  not?: ModelMenueItemsFilterInput | null,
};

export type ModelMenueItemsConnection = {
  __typename: "ModelMenueItemsConnection",
  items:  Array<MenueItems | null >,
  nextToken?: string | null,
};

export type ModelMenusFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelMenusFilterInput | null > | null,
  or?: Array< ModelMenusFilterInput | null > | null,
  not?: ModelMenusFilterInput | null,
};

export type ModelMenusConnection = {
  __typename: "ModelMenusConnection",
  items:  Array<Menus | null >,
  nextToken?: string | null,
};

export type ModelServicesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  content?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  and?: Array< ModelServicesFilterInput | null > | null,
  or?: Array< ModelServicesFilterInput | null > | null,
  not?: ModelServicesFilterInput | null,
};

export type ModelServicesConnection = {
  __typename: "ModelServicesConnection",
  items:  Array<Services | null >,
  nextToken?: string | null,
};

export type ModelMenueItemsMenusFilterInput = {
  id?: ModelIDInput | null,
  menueItemsId?: ModelIDInput | null,
  menusId?: ModelIDInput | null,
  and?: Array< ModelMenueItemsMenusFilterInput | null > | null,
  or?: Array< ModelMenueItemsMenusFilterInput | null > | null,
  not?: ModelMenueItemsMenusFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionMenueItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenueItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenueItemsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionMenusFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenusFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenusFilterInput | null > | null,
};

export type ModelSubscriptionServicesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  subtitle?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionServicesFilterInput | null > | null,
  or?: Array< ModelSubscriptionServicesFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMenueItemsMenusFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  menueItemsId?: ModelSubscriptionIDInput | null,
  menusId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMenueItemsMenusFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenueItemsMenusFilterInput | null > | null,
};

export type CreateMenueItemsMutationVariables = {
  input: CreateMenueItemsInput,
  condition?: ModelMenueItemsConditionInput | null,
};

export type CreateMenueItemsMutation = {
  createMenueItems?:  {
    __typename: "MenueItems",
    id: string,
    name?: string | null,
    description?: string | null,
    Menu?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenueItemsMutationVariables = {
  input: UpdateMenueItemsInput,
  condition?: ModelMenueItemsConditionInput | null,
};

export type UpdateMenueItemsMutation = {
  updateMenueItems?:  {
    __typename: "MenueItems",
    id: string,
    name?: string | null,
    description?: string | null,
    Menu?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenueItemsMutationVariables = {
  input: DeleteMenueItemsInput,
  condition?: ModelMenueItemsConditionInput | null,
};

export type DeleteMenueItemsMutation = {
  deleteMenueItems?:  {
    __typename: "MenueItems",
    id: string,
    name?: string | null,
    description?: string | null,
    Menu?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenusMutationVariables = {
  input: CreateMenusInput,
  condition?: ModelMenusConditionInput | null,
};

export type CreateMenusMutation = {
  createMenus?:  {
    __typename: "Menus",
    id: string,
    title?: string | null,
    menueitemss?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenusMutationVariables = {
  input: UpdateMenusInput,
  condition?: ModelMenusConditionInput | null,
};

export type UpdateMenusMutation = {
  updateMenus?:  {
    __typename: "Menus",
    id: string,
    title?: string | null,
    menueitemss?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenusMutationVariables = {
  input: DeleteMenusInput,
  condition?: ModelMenusConditionInput | null,
};

export type DeleteMenusMutation = {
  deleteMenus?:  {
    __typename: "Menus",
    id: string,
    title?: string | null,
    menueitemss?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateServicesMutationVariables = {
  input: CreateServicesInput,
  condition?: ModelServicesConditionInput | null,
};

export type CreateServicesMutation = {
  createServices?:  {
    __typename: "Services",
    id: string,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    weight?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateServicesMutationVariables = {
  input: UpdateServicesInput,
  condition?: ModelServicesConditionInput | null,
};

export type UpdateServicesMutation = {
  updateServices?:  {
    __typename: "Services",
    id: string,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    weight?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteServicesMutationVariables = {
  input: DeleteServicesInput,
  condition?: ModelServicesConditionInput | null,
};

export type DeleteServicesMutation = {
  deleteServices?:  {
    __typename: "Services",
    id: string,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    weight?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenueItemsMenusMutationVariables = {
  input: CreateMenueItemsMenusInput,
  condition?: ModelMenueItemsMenusConditionInput | null,
};

export type CreateMenueItemsMenusMutation = {
  createMenueItemsMenus?:  {
    __typename: "MenueItemsMenus",
    id: string,
    menueItemsId: string,
    menusId: string,
    menueItems:  {
      __typename: "MenueItems",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    menus:  {
      __typename: "Menus",
      id: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenueItemsMenusMutationVariables = {
  input: UpdateMenueItemsMenusInput,
  condition?: ModelMenueItemsMenusConditionInput | null,
};

export type UpdateMenueItemsMenusMutation = {
  updateMenueItemsMenus?:  {
    __typename: "MenueItemsMenus",
    id: string,
    menueItemsId: string,
    menusId: string,
    menueItems:  {
      __typename: "MenueItems",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    menus:  {
      __typename: "Menus",
      id: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenueItemsMenusMutationVariables = {
  input: DeleteMenueItemsMenusInput,
  condition?: ModelMenueItemsMenusConditionInput | null,
};

export type DeleteMenueItemsMenusMutation = {
  deleteMenueItemsMenus?:  {
    __typename: "MenueItemsMenus",
    id: string,
    menueItemsId: string,
    menusId: string,
    menueItems:  {
      __typename: "MenueItems",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    menus:  {
      __typename: "Menus",
      id: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMenueItemsQueryVariables = {
  id: string,
};

export type GetMenueItemsQuery = {
  getMenueItems?:  {
    __typename: "MenueItems",
    id: string,
    name?: string | null,
    description?: string | null,
    Menu?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenueItemsQueryVariables = {
  filter?: ModelMenueItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenueItemsQuery = {
  listMenueItems?:  {
    __typename: "ModelMenueItemsConnection",
    items:  Array< {
      __typename: "MenueItems",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenusQueryVariables = {
  id: string,
};

export type GetMenusQuery = {
  getMenus?:  {
    __typename: "Menus",
    id: string,
    title?: string | null,
    menueitemss?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenusConnection",
    items:  Array< {
      __typename: "Menus",
      id: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetServicesQueryVariables = {
  id: string,
};

export type GetServicesQuery = {
  getServices?:  {
    __typename: "Services",
    id: string,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    weight?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListServicesQueryVariables = {
  filter?: ModelServicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesQuery = {
  listServices?:  {
    __typename: "ModelServicesConnection",
    items:  Array< {
      __typename: "Services",
      id: string,
      title?: string | null,
      subtitle?: string | null,
      content?: string | null,
      imageUrl?: string | null,
      weight?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenueItemsMenusQueryVariables = {
  id: string,
};

export type GetMenueItemsMenusQuery = {
  getMenueItemsMenus?:  {
    __typename: "MenueItemsMenus",
    id: string,
    menueItemsId: string,
    menusId: string,
    menueItems:  {
      __typename: "MenueItems",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    menus:  {
      __typename: "Menus",
      id: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenueItemsMenusQueryVariables = {
  filter?: ModelMenueItemsMenusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenueItemsMenusQuery = {
  listMenueItemsMenus?:  {
    __typename: "ModelMenueItemsMenusConnection",
    items:  Array< {
      __typename: "MenueItemsMenus",
      id: string,
      menueItemsId: string,
      menusId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MenueItemsMenusByMenueItemsIdQueryVariables = {
  menueItemsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMenueItemsMenusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MenueItemsMenusByMenueItemsIdQuery = {
  menueItemsMenusByMenueItemsId?:  {
    __typename: "ModelMenueItemsMenusConnection",
    items:  Array< {
      __typename: "MenueItemsMenus",
      id: string,
      menueItemsId: string,
      menusId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MenueItemsMenusByMenusIdQueryVariables = {
  menusId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMenueItemsMenusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MenueItemsMenusByMenusIdQuery = {
  menueItemsMenusByMenusId?:  {
    __typename: "ModelMenueItemsMenusConnection",
    items:  Array< {
      __typename: "MenueItemsMenus",
      id: string,
      menueItemsId: string,
      menusId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMenueItemsSubscriptionVariables = {
  filter?: ModelSubscriptionMenueItemsFilterInput | null,
};

export type OnCreateMenueItemsSubscription = {
  onCreateMenueItems?:  {
    __typename: "MenueItems",
    id: string,
    name?: string | null,
    description?: string | null,
    Menu?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenueItemsSubscriptionVariables = {
  filter?: ModelSubscriptionMenueItemsFilterInput | null,
};

export type OnUpdateMenueItemsSubscription = {
  onUpdateMenueItems?:  {
    __typename: "MenueItems",
    id: string,
    name?: string | null,
    description?: string | null,
    Menu?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenueItemsSubscriptionVariables = {
  filter?: ModelSubscriptionMenueItemsFilterInput | null,
};

export type OnDeleteMenueItemsSubscription = {
  onDeleteMenueItems?:  {
    __typename: "MenueItems",
    id: string,
    name?: string | null,
    description?: string | null,
    Menu?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenusSubscriptionVariables = {
  filter?: ModelSubscriptionMenusFilterInput | null,
};

export type OnCreateMenusSubscription = {
  onCreateMenus?:  {
    __typename: "Menus",
    id: string,
    title?: string | null,
    menueitemss?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenusSubscriptionVariables = {
  filter?: ModelSubscriptionMenusFilterInput | null,
};

export type OnUpdateMenusSubscription = {
  onUpdateMenus?:  {
    __typename: "Menus",
    id: string,
    title?: string | null,
    menueitemss?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenusSubscriptionVariables = {
  filter?: ModelSubscriptionMenusFilterInput | null,
};

export type OnDeleteMenusSubscription = {
  onDeleteMenus?:  {
    __typename: "Menus",
    id: string,
    title?: string | null,
    menueitemss?:  {
      __typename: "ModelMenueItemsMenusConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateServicesSubscriptionVariables = {
  filter?: ModelSubscriptionServicesFilterInput | null,
};

export type OnCreateServicesSubscription = {
  onCreateServices?:  {
    __typename: "Services",
    id: string,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    weight?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateServicesSubscriptionVariables = {
  filter?: ModelSubscriptionServicesFilterInput | null,
};

export type OnUpdateServicesSubscription = {
  onUpdateServices?:  {
    __typename: "Services",
    id: string,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    weight?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteServicesSubscriptionVariables = {
  filter?: ModelSubscriptionServicesFilterInput | null,
};

export type OnDeleteServicesSubscription = {
  onDeleteServices?:  {
    __typename: "Services",
    id: string,
    title?: string | null,
    subtitle?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    weight?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenueItemsMenusSubscriptionVariables = {
  filter?: ModelSubscriptionMenueItemsMenusFilterInput | null,
};

export type OnCreateMenueItemsMenusSubscription = {
  onCreateMenueItemsMenus?:  {
    __typename: "MenueItemsMenus",
    id: string,
    menueItemsId: string,
    menusId: string,
    menueItems:  {
      __typename: "MenueItems",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    menus:  {
      __typename: "Menus",
      id: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenueItemsMenusSubscriptionVariables = {
  filter?: ModelSubscriptionMenueItemsMenusFilterInput | null,
};

export type OnUpdateMenueItemsMenusSubscription = {
  onUpdateMenueItemsMenus?:  {
    __typename: "MenueItemsMenus",
    id: string,
    menueItemsId: string,
    menusId: string,
    menueItems:  {
      __typename: "MenueItems",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    menus:  {
      __typename: "Menus",
      id: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenueItemsMenusSubscriptionVariables = {
  filter?: ModelSubscriptionMenueItemsMenusFilterInput | null,
};

export type OnDeleteMenueItemsMenusSubscription = {
  onDeleteMenueItemsMenus?:  {
    __typename: "MenueItemsMenus",
    id: string,
    menueItemsId: string,
    menusId: string,
    menueItems:  {
      __typename: "MenueItems",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    menus:  {
      __typename: "Menus",
      id: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
