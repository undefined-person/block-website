/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * API
 * OpenAPI spec version: 1.0.0
 */
import { createInstance } from "./api";
import type { BodyType } from "./api";
export type BlocklistControllerGetListParams = {
  q?: string;
};

export type AddBlockItemDtoType =
  (typeof AddBlockItemDtoType)[keyof typeof AddBlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddBlockItemDtoType = {
  Keyword: "Keyword",
  Website: "Website",
} as const;

export interface AddBlockItemDto {
  data: string;
  type: AddBlockItemDtoType;
}

export type BlockItemDtoType =
  (typeof BlockItemDtoType)[keyof typeof BlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BlockItemDtoType = {
  Keyword: "Keyword",
  Website: "Website",
} as const;

export interface BlockItemDto {
  blocklistId: number;
  createdAt: string;
  data: string;
  id: number;
  type: BlockItemDtoType;
}

export interface BlockListDto {
  id: number;
  items: BlockItemDto[];
  ownerId: number;
}

export interface PatchAccountDto {
  isBlockingEnabled?: boolean;
}

export interface AccountDto {
  id: number;
  isBlockingEnabled: boolean;
  ownerId: number;
}

export interface GetSessionInfoDto {
  email: string;
  exp: number;
  iat: number;
  id: number;
}

export interface SignInBodyDto {
  email: string;
  password: string;
}

export interface SignUpBodyDto {
  email: string;
  password: string;
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const authControllerSignUp = (
  signUpBodyDto: BodyType<SignUpBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-up`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpBodyDto,
    },
    options,
  );
};

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-in`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signInBodyDto,
    },
    options,
  );
};

export const authControllerSignOut = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/auth/sign-out`, method: "POST" },
    options,
  );
};

export const authControllerGetSessionInfo = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<GetSessionInfoDto>(
    { url: `/auth/session`, method: "GET" },
    options,
  );
};

export const accountControllerGetAccount = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    { url: `/account`, method: "GET" },
    options,
  );
};

export const accountControllerUpdateAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    {
      url: `/account`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: patchAccountDto,
    },
    options,
  );
};

export const blocklistControllerGetList = (
  params?: BlocklistControllerGetListParams,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockListDto>(
    { url: `/block-list`, method: "GET", params },
    options,
  );
};

export const blocklistControllerAddBlockListItem = (
  addBlockItemDto: BodyType<AddBlockItemDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockItemDto>(
    {
      url: `/block-list/item`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: addBlockItemDto,
    },
    options,
  );
};

export const blocklistControllerDeleteBlockListItem = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<BlockItemDto>(
    { url: `/block-list/item/${id}`, method: "DELETE" },
    options,
  );
};

export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSignOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignOut>>
>;
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerUpdateAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerUpdateAccount>>
>;
export type BlocklistControllerGetListResult = NonNullable<
  Awaited<ReturnType<typeof blocklistControllerGetList>>
>;
export type BlocklistControllerAddBlockListItemResult = NonNullable<
  Awaited<ReturnType<typeof blocklistControllerAddBlockListItem>>
>;
export type BlocklistControllerDeleteBlockListItemResult = NonNullable<
  Awaited<ReturnType<typeof blocklistControllerDeleteBlockListItem>>
>;
