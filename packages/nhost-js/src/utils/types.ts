import { NhostAuthConstructorParams } from '@nhost/hasura-auth-js'

// TODO shared with other packages
export interface ErrorPayload {
  error: string
  status: number
  message: string
}

// TODO shared with other packages
export interface ActionErrorState {
  /**
   * @return `true` if an error occurred
   * @depreacted use `!isSuccess` or `!!error` instead
   * */
  isError: boolean
  /** Provides details about the error */
  error: ErrorPayload | null
}

// TODO shared with other packages
export interface ActionLoadingState {
  /**
   * @return `true` when the action is executing, `false` when it finished its execution.
   */
  isLoading: boolean
}

// TODO shared with other packages
export interface ActionSuccessState {
  /** Returns `true` if the action is successful. */
  isSuccess: boolean
}

export type BackendUrl = {
  /**
   * Nhost backend URL
   * Will be deprecated in a future release. Please look at 'subdomain' and 'region' instead.
   */
  backendUrl: string
}

export type Subdomain = {
  /**
   * Project subdomain (e.g. `ieingiwnginwnfnegqwvdqwdwq`)
   * Use `localhost` during local development
   */
  subdomain: string

  /**
   * Project region (e.g. `eu-central-1`)
   * Project region is not required during local development (when `subdomain` is `localhost`)
   */
  region?: string
  /**
   * When set, the admin secret is sent as a header, `x-hasura-admin-secret`,
   * for all requests to GraphQL, Storage, and Serverless Functions.
   */
  adminSecret?: string
}

export type ServiceUrls = {
  authUrl?: string
  graphqlUrl?: string
  storageUrl?: string
  functionsUrl?: string
}

export type BackendOrSubdomain = BackendUrl | Subdomain

export interface NhostClientConstructorParams
  extends Partial<BackendUrl>,
    Partial<Subdomain>,
    Partial<ServiceUrls>,
    Omit<NhostAuthConstructorParams, 'url'> {
  /**
   * When set, the admin secret is sent as a header, `x-hasura-admin-secret`,
   * for all requests to GraphQL, Storage, and Serverless Functions.
   */
  adminSecret?: string
}
