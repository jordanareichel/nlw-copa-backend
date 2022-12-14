
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Pool
 * 
 */
export type Pool = {
  id: string
  title: string
  code: string
  createdAt: Date
  ownerId: string | null
}

/**
 * Model Participant
 * 
 */
export type Participant = {
  id: string
  userId: string
  poolId: string
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string
  email: string
  googleId: string | null
  avatarUrl: string | null
  createdAt: Date
}

/**
 * Model Game
 * 
 */
export type Game = {
  id: string
  date: Date
  firstTeamCountryCode: string
  secondTeamCountryCode: string
}

/**
 * Model Guess
 * 
 */
export type Guess = {
  id: string
  firstTeamPoints: number
  secondTeamPoints: number
  createdAt: Date
  gameId: string
  participantId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pools
 * const pools = await prisma.pool.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pools
   * const pools = await prisma.pool.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.pool`: Exposes CRUD operations for the **Pool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pools
    * const pools = await prisma.pool.findMany()
    * ```
    */
  get pool(): Prisma.PoolDelegate<GlobalReject>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<GlobalReject>;

  /**
   * `prisma.guess`: Exposes CRUD operations for the **Guess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guesses
    * const guesses = await prisma.guess.findMany()
    * ```
    */
  get guess(): Prisma.GuessDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Pool: 'Pool',
    Participant: 'Participant',
    User: 'User',
    Game: 'Game',
    Guess: 'Guess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PoolCountOutputType
   */


  export type PoolCountOutputType = {
    participants: number
  }

  export type PoolCountOutputTypeSelect = {
    participants?: boolean
  }

  export type PoolCountOutputTypeGetPayload<S extends boolean | null | undefined | PoolCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PoolCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PoolCountOutputTypeArgs)
    ? PoolCountOutputType 
    : S extends { select: any } & (PoolCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PoolCountOutputType ? PoolCountOutputType[P] : never
  } 
      : PoolCountOutputType




  // Custom InputTypes

  /**
   * PoolCountOutputType without action
   */
  export type PoolCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PoolCountOutputType
     * 
    **/
    select?: PoolCountOutputTypeSelect | null
  }



  /**
   * Count Type ParticipantCountOutputType
   */


  export type ParticipantCountOutputType = {
    guesses: number
  }

  export type ParticipantCountOutputTypeSelect = {
    guesses?: boolean
  }

  export type ParticipantCountOutputTypeGetPayload<S extends boolean | null | undefined | ParticipantCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ParticipantCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ParticipantCountOutputTypeArgs)
    ? ParticipantCountOutputType 
    : S extends { select: any } & (ParticipantCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ParticipantCountOutputType ? ParticipantCountOutputType[P] : never
  } 
      : ParticipantCountOutputType




  // Custom InputTypes

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     * 
    **/
    select?: ParticipantCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    participantingAt: number
    ownPools: number
  }

  export type UserCountOutputTypeSelect = {
    participantingAt?: boolean
    ownPools?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type GameCountOutputType
   */


  export type GameCountOutputType = {
    guesses: number
  }

  export type GameCountOutputTypeSelect = {
    guesses?: boolean
  }

  export type GameCountOutputTypeGetPayload<S extends boolean | null | undefined | GameCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GameCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GameCountOutputTypeArgs)
    ? GameCountOutputType 
    : S extends { select: any } & (GameCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GameCountOutputType ? GameCountOutputType[P] : never
  } 
      : GameCountOutputType




  // Custom InputTypes

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     * 
    **/
    select?: GameCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Pool
   */


  export type AggregatePool = {
    _count: PoolCountAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  export type PoolMinAggregateOutputType = {
    id: string | null
    title: string | null
    code: string | null
    createdAt: Date | null
    ownerId: string | null
  }

  export type PoolMaxAggregateOutputType = {
    id: string | null
    title: string | null
    code: string | null
    createdAt: Date | null
    ownerId: string | null
  }

  export type PoolCountAggregateOutputType = {
    id: number
    title: number
    code: number
    createdAt: number
    ownerId: number
    _all: number
  }


  export type PoolMinAggregateInputType = {
    id?: true
    title?: true
    code?: true
    createdAt?: true
    ownerId?: true
  }

  export type PoolMaxAggregateInputType = {
    id?: true
    title?: true
    code?: true
    createdAt?: true
    ownerId?: true
  }

  export type PoolCountAggregateInputType = {
    id?: true
    title?: true
    code?: true
    createdAt?: true
    ownerId?: true
    _all?: true
  }

  export type PoolAggregateArgs = {
    /**
     * Filter which Pool to aggregate.
     * 
    **/
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     * 
    **/
    orderBy?: Enumerable<PoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pools
    **/
    _count?: true | PoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolMaxAggregateInputType
  }

  export type GetPoolAggregateType<T extends PoolAggregateArgs> = {
        [P in keyof T & keyof AggregatePool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePool[P]>
      : GetScalarType<T[P], AggregatePool[P]>
  }




  export type PoolGroupByArgs = {
    where?: PoolWhereInput
    orderBy?: Enumerable<PoolOrderByWithAggregationInput>
    by: Array<PoolScalarFieldEnum>
    having?: PoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolCountAggregateInputType | true
    _min?: PoolMinAggregateInputType
    _max?: PoolMaxAggregateInputType
  }


  export type PoolGroupByOutputType = {
    id: string
    title: string
    code: string
    createdAt: Date
    ownerId: string | null
    _count: PoolCountAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  type GetPoolGroupByPayload<T extends PoolGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolGroupByOutputType[P]>
            : GetScalarType<T[P], PoolGroupByOutputType[P]>
        }
      >
    >


  export type PoolSelect = {
    id?: boolean
    title?: boolean
    code?: boolean
    createdAt?: boolean
    participants?: boolean | ParticipantFindManyArgs
    ownerId?: boolean
    owner?: boolean | UserArgs
    _count?: boolean | PoolCountOutputTypeArgs
  }


  export type PoolInclude = {
    participants?: boolean | ParticipantFindManyArgs
    owner?: boolean | UserArgs
    _count?: boolean | PoolCountOutputTypeArgs
  } 

  export type PoolGetPayload<S extends boolean | null | undefined | PoolArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Pool :
    S extends undefined ? never :
    S extends { include: any } & (PoolArgs | PoolFindManyArgs)
    ? Pool  & {
    [P in TrueKeys<S['include']>]:
        P extends 'participants' ? Array < ParticipantGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'owner' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends '_count' ? PoolCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (PoolArgs | PoolFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'participants' ? Array < ParticipantGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'owner' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends '_count' ? PoolCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Pool ? Pool[P] : never
  } 
      : Pool


  type PoolCountArgs = Merge<
    Omit<PoolFindManyArgs, 'select' | 'include'> & {
      select?: PoolCountAggregateInputType | true
    }
  >

  export interface PoolDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Pool that matches the filter.
     * @param {PoolFindUniqueArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PoolFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PoolFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Pool'> extends True ? Prisma__PoolClient<PoolGetPayload<T>> : Prisma__PoolClient<PoolGetPayload<T> | null, null>

    /**
     * Find the first Pool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PoolFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PoolFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Pool'> extends True ? Prisma__PoolClient<PoolGetPayload<T>> : Prisma__PoolClient<PoolGetPayload<T> | null, null>

    /**
     * Find zero or more Pools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pools
     * const pools = await prisma.pool.findMany()
     * 
     * // Get first 10 Pools
     * const pools = await prisma.pool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolWithIdOnly = await prisma.pool.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PoolFindManyArgs>(
      args?: SelectSubset<T, PoolFindManyArgs>
    ): PrismaPromise<Array<PoolGetPayload<T>>>

    /**
     * Create a Pool.
     * @param {PoolCreateArgs} args - Arguments to create a Pool.
     * @example
     * // Create one Pool
     * const Pool = await prisma.pool.create({
     *   data: {
     *     // ... data to create a Pool
     *   }
     * })
     * 
    **/
    create<T extends PoolCreateArgs>(
      args: SelectSubset<T, PoolCreateArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Delete a Pool.
     * @param {PoolDeleteArgs} args - Arguments to delete one Pool.
     * @example
     * // Delete one Pool
     * const Pool = await prisma.pool.delete({
     *   where: {
     *     // ... filter to delete one Pool
     *   }
     * })
     * 
    **/
    delete<T extends PoolDeleteArgs>(
      args: SelectSubset<T, PoolDeleteArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Update one Pool.
     * @param {PoolUpdateArgs} args - Arguments to update one Pool.
     * @example
     * // Update one Pool
     * const pool = await prisma.pool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PoolUpdateArgs>(
      args: SelectSubset<T, PoolUpdateArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Delete zero or more Pools.
     * @param {PoolDeleteManyArgs} args - Arguments to filter Pools to delete.
     * @example
     * // Delete a few Pools
     * const { count } = await prisma.pool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PoolDeleteManyArgs>(
      args?: SelectSubset<T, PoolDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pools
     * const pool = await prisma.pool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PoolUpdateManyArgs>(
      args: SelectSubset<T, PoolUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pool.
     * @param {PoolUpsertArgs} args - Arguments to update or create a Pool.
     * @example
     * // Update or create a Pool
     * const pool = await prisma.pool.upsert({
     *   create: {
     *     // ... data to create a Pool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pool we want to update
     *   }
     * })
    **/
    upsert<T extends PoolUpsertArgs>(
      args: SelectSubset<T, PoolUpsertArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Find one Pool that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PoolFindUniqueOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PoolFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PoolFindUniqueOrThrowArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Find the first Pool that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PoolFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PoolFindFirstOrThrowArgs>
    ): Prisma__PoolClient<PoolGetPayload<T>>

    /**
     * Count the number of Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolCountArgs} args - Arguments to filter Pools to count.
     * @example
     * // Count the number of Pools
     * const count = await prisma.pool.count({
     *   where: {
     *     // ... the filter for the Pools we want to count
     *   }
     * })
    **/
    count<T extends PoolCountArgs>(
      args?: Subset<T, PoolCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoolAggregateArgs>(args: Subset<T, PoolAggregateArgs>): PrismaPromise<GetPoolAggregateType<T>>

    /**
     * Group by Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolGroupByArgs['orderBy'] }
        : { orderBy?: PoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Pool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PoolClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    participants<T extends ParticipantFindManyArgs= {}>(args?: Subset<T, ParticipantFindManyArgs>): PrismaPromise<Array<ParticipantGetPayload<T>>| Null>;

    owner<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Pool base type for findUnique actions
   */
  export type PoolFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Pool
     * 
    **/
    select?: PoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PoolInclude | null
    /**
     * Filter, which Pool to fetch.
     * 
    **/
    where: PoolWhereUniqueInput
  }

  /**
   * Pool: findUnique
   */
  export interface PoolFindUniqueArgs extends PoolFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pool base type for findFirst actions
   */
  export type PoolFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Pool
     * 
    **/
    select?: PoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PoolInclude | null
    /**
     * Filter, which Pool to fetch.
     * 
    **/
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     * 
    **/
    orderBy?: Enumerable<PoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     * 
    **/
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     * 
    **/
    distinct?: Enumerable<PoolScalarFieldEnum>
  }

  /**
   * Pool: findFirst
   */
  export interface PoolFindFirstArgs extends PoolFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pool findMany
   */
  export type PoolFindManyArgs = {
    /**
     * Select specific fields to fetch from the Pool
     * 
    **/
    select?: PoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PoolInclude | null
    /**
     * Filter, which Pools to fetch.
     * 
    **/
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     * 
    **/
    orderBy?: Enumerable<PoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pools.
     * 
    **/
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PoolScalarFieldEnum>
  }


  /**
   * Pool create
   */
  export type PoolCreateArgs = {
    /**
     * Select specific fields to fetch from the Pool
     * 
    **/
    select?: PoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PoolInclude | null
    /**
     * The data needed to create a Pool.
     * 
    **/
    data: XOR<PoolCreateInput, PoolUncheckedCreateInput>
  }


  /**
   * Pool update
   */
  export type PoolUpdateArgs = {
    /**
     * Select specific fields to fetch from the Pool
     * 
    **/
    select?: PoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PoolInclude | null
    /**
     * The data needed to update a Pool.
     * 
    **/
    data: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
    /**
     * Choose, which Pool to update.
     * 
    **/
    where: PoolWhereUniqueInput
  }


  /**
   * Pool updateMany
   */
  export type PoolUpdateManyArgs = {
    /**
     * The data used to update Pools.
     * 
    **/
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyInput>
    /**
     * Filter which Pools to update
     * 
    **/
    where?: PoolWhereInput
  }


  /**
   * Pool upsert
   */
  export type PoolUpsertArgs = {
    /**
     * Select specific fields to fetch from the Pool
     * 
    **/
    select?: PoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PoolInclude | null
    /**
     * The filter to search for the Pool to update in case it exists.
     * 
    **/
    where: PoolWhereUniqueInput
    /**
     * In case the Pool found by the `where` argument doesn't exist, create a new Pool with this data.
     * 
    **/
    create: XOR<PoolCreateInput, PoolUncheckedCreateInput>
    /**
     * In case the Pool was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
  }


  /**
   * Pool delete
   */
  export type PoolDeleteArgs = {
    /**
     * Select specific fields to fetch from the Pool
     * 
    **/
    select?: PoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PoolInclude | null
    /**
     * Filter which Pool to delete.
     * 
    **/
    where: PoolWhereUniqueInput
  }


  /**
   * Pool deleteMany
   */
  export type PoolDeleteManyArgs = {
    /**
     * Filter which Pools to delete
     * 
    **/
    where?: PoolWhereInput
  }


  /**
   * Pool: findUniqueOrThrow
   */
  export type PoolFindUniqueOrThrowArgs = PoolFindUniqueArgsBase
      

  /**
   * Pool: findFirstOrThrow
   */
  export type PoolFindFirstOrThrowArgs = PoolFindFirstArgsBase
      

  /**
   * Pool without action
   */
  export type PoolArgs = {
    /**
     * Select specific fields to fetch from the Pool
     * 
    **/
    select?: PoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PoolInclude | null
  }



  /**
   * Model Participant
   */


  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    poolId: string | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    poolId: string | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    userId: number
    poolId: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    id?: true
    userId?: true
    poolId?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    userId?: true
    poolId?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    userId?: true
    poolId?: true
    _all?: true
  }

  export type ParticipantAggregateArgs = {
    /**
     * Filter which Participant to aggregate.
     * 
    **/
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     * 
    **/
    orderBy?: Enumerable<ParticipantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs = {
    where?: ParticipantWhereInput
    orderBy?: Enumerable<ParticipantOrderByWithAggregationInput>
    by: Array<ParticipantScalarFieldEnum>
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }


  export type ParticipantGroupByOutputType = {
    id: string
    userId: string
    poolId: string
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect = {
    id?: boolean
    userId?: boolean
    poolId?: boolean
    guesses?: boolean | GuessFindManyArgs
    user?: boolean | UserArgs
    pool?: boolean | PoolArgs
    _count?: boolean | ParticipantCountOutputTypeArgs
  }


  export type ParticipantInclude = {
    guesses?: boolean | GuessFindManyArgs
    user?: boolean | UserArgs
    pool?: boolean | PoolArgs
    _count?: boolean | ParticipantCountOutputTypeArgs
  } 

  export type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Participant :
    S extends undefined ? never :
    S extends { include: any } & (ParticipantArgs | ParticipantFindManyArgs)
    ? Participant  & {
    [P in TrueKeys<S['include']>]:
        P extends 'guesses' ? Array < GuessGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'pool' ? PoolGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends '_count' ? ParticipantCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (ParticipantArgs | ParticipantFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'guesses' ? Array < GuessGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'pool' ? PoolGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends '_count' ? ParticipantCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Participant ? Participant[P] : never
  } 
      : Participant


  type ParticipantCountArgs = Merge<
    Omit<ParticipantFindManyArgs, 'select' | 'include'> & {
      select?: ParticipantCountAggregateInputType | true
    }
  >

  export interface ParticipantDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParticipantFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ParticipantFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Participant'> extends True ? Prisma__ParticipantClient<ParticipantGetPayload<T>> : Prisma__ParticipantClient<ParticipantGetPayload<T> | null, null>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParticipantFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ParticipantFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Participant'> extends True ? Prisma__ParticipantClient<ParticipantGetPayload<T>> : Prisma__ParticipantClient<ParticipantGetPayload<T> | null, null>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParticipantFindManyArgs>(
      args?: SelectSubset<T, ParticipantFindManyArgs>
    ): PrismaPromise<Array<ParticipantGetPayload<T>>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
    **/
    create<T extends ParticipantCreateArgs>(
      args: SelectSubset<T, ParticipantCreateArgs>
    ): Prisma__ParticipantClient<ParticipantGetPayload<T>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
    **/
    delete<T extends ParticipantDeleteArgs>(
      args: SelectSubset<T, ParticipantDeleteArgs>
    ): Prisma__ParticipantClient<ParticipantGetPayload<T>>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParticipantUpdateArgs>(
      args: SelectSubset<T, ParticipantUpdateArgs>
    ): Prisma__ParticipantClient<ParticipantGetPayload<T>>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParticipantDeleteManyArgs>(
      args?: SelectSubset<T, ParticipantDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParticipantUpdateManyArgs>(
      args: SelectSubset<T, ParticipantUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
    **/
    upsert<T extends ParticipantUpsertArgs>(
      args: SelectSubset<T, ParticipantUpsertArgs>
    ): Prisma__ParticipantClient<ParticipantGetPayload<T>>

    /**
     * Find one Participant that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ParticipantFindUniqueOrThrowArgs>
    ): Prisma__ParticipantClient<ParticipantGetPayload<T>>

    /**
     * Find the first Participant that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs>
    ): Prisma__ParticipantClient<ParticipantGetPayload<T>>

    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ParticipantClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    guesses<T extends GuessFindManyArgs= {}>(args?: Subset<T, GuessFindManyArgs>): PrismaPromise<Array<GuessGetPayload<T>>| Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    pool<T extends PoolArgs= {}>(args?: Subset<T, PoolArgs>): Prisma__PoolClient<PoolGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Participant base type for findUnique actions
   */
  export type ParticipantFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Participant
     * 
    **/
    select?: ParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParticipantInclude | null
    /**
     * Filter, which Participant to fetch.
     * 
    **/
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant: findUnique
   */
  export interface ParticipantFindUniqueArgs extends ParticipantFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Participant base type for findFirst actions
   */
  export type ParticipantFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Participant
     * 
    **/
    select?: ParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParticipantInclude | null
    /**
     * Filter, which Participant to fetch.
     * 
    **/
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     * 
    **/
    orderBy?: Enumerable<ParticipantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     * 
    **/
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     * 
    **/
    distinct?: Enumerable<ParticipantScalarFieldEnum>
  }

  /**
   * Participant: findFirst
   */
  export interface ParticipantFindFirstArgs extends ParticipantFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs = {
    /**
     * Select specific fields to fetch from the Participant
     * 
    **/
    select?: ParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParticipantInclude | null
    /**
     * Filter, which Participants to fetch.
     * 
    **/
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     * 
    **/
    orderBy?: Enumerable<ParticipantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     * 
    **/
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ParticipantScalarFieldEnum>
  }


  /**
   * Participant create
   */
  export type ParticipantCreateArgs = {
    /**
     * Select specific fields to fetch from the Participant
     * 
    **/
    select?: ParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParticipantInclude | null
    /**
     * The data needed to create a Participant.
     * 
    **/
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }


  /**
   * Participant update
   */
  export type ParticipantUpdateArgs = {
    /**
     * Select specific fields to fetch from the Participant
     * 
    **/
    select?: ParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParticipantInclude | null
    /**
     * The data needed to update a Participant.
     * 
    **/
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     * 
    **/
    where: ParticipantWhereUniqueInput
  }


  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs = {
    /**
     * The data used to update Participants.
     * 
    **/
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     * 
    **/
    where?: ParticipantWhereInput
  }


  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs = {
    /**
     * Select specific fields to fetch from the Participant
     * 
    **/
    select?: ParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParticipantInclude | null
    /**
     * The filter to search for the Participant to update in case it exists.
     * 
    **/
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     * 
    **/
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }


  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs = {
    /**
     * Select specific fields to fetch from the Participant
     * 
    **/
    select?: ParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParticipantInclude | null
    /**
     * Filter which Participant to delete.
     * 
    **/
    where: ParticipantWhereUniqueInput
  }


  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs = {
    /**
     * Filter which Participants to delete
     * 
    **/
    where?: ParticipantWhereInput
  }


  /**
   * Participant: findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs = ParticipantFindUniqueArgsBase
      

  /**
   * Participant: findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs = ParticipantFindFirstArgsBase
      

  /**
   * Participant without action
   */
  export type ParticipantArgs = {
    /**
     * Select specific fields to fetch from the Participant
     * 
    **/
    select?: ParticipantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParticipantInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    googleId: string | null
    avatarUrl: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    googleId: string | null
    avatarUrl: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    googleId: number
    avatarUrl: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    googleId?: true
    avatarUrl?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    googleId?: true
    avatarUrl?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    googleId?: true
    avatarUrl?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    googleId: string | null
    avatarUrl: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    googleId?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    participantingAt?: boolean | ParticipantFindManyArgs
    ownPools?: boolean | PoolFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    participantingAt?: boolean | ParticipantFindManyArgs
    ownPools?: boolean | PoolFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'participantingAt' ? Array < ParticipantGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'ownPools' ? Array < PoolGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'participantingAt' ? Array < ParticipantGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'ownPools' ? Array < PoolGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    participantingAt<T extends ParticipantFindManyArgs= {}>(args?: Subset<T, ParticipantFindManyArgs>): PrismaPromise<Array<ParticipantGetPayload<T>>| Null>;

    ownPools<T extends PoolFindManyArgs= {}>(args?: Subset<T, PoolFindManyArgs>): PrismaPromise<Array<PoolGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Game
   */


  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    date: Date | null
    firstTeamCountryCode: string | null
    secondTeamCountryCode: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    firstTeamCountryCode: string | null
    secondTeamCountryCode: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    date: number
    firstTeamCountryCode: number
    secondTeamCountryCode: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    date?: true
    firstTeamCountryCode?: true
    secondTeamCountryCode?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    date?: true
    firstTeamCountryCode?: true
    secondTeamCountryCode?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    date?: true
    firstTeamCountryCode?: true
    secondTeamCountryCode?: true
    _all?: true
  }

  export type GameAggregateArgs = {
    /**
     * Filter which Game to aggregate.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs = {
    where?: GameWhereInput
    orderBy?: Enumerable<GameOrderByWithAggregationInput>
    by: Array<GameScalarFieldEnum>
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }


  export type GameGroupByOutputType = {
    id: string
    date: Date
    firstTeamCountryCode: string
    secondTeamCountryCode: string
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect = {
    id?: boolean
    date?: boolean
    firstTeamCountryCode?: boolean
    secondTeamCountryCode?: boolean
    guesses?: boolean | GuessFindManyArgs
    _count?: boolean | GameCountOutputTypeArgs
  }


  export type GameInclude = {
    guesses?: boolean | GuessFindManyArgs
    _count?: boolean | GameCountOutputTypeArgs
  } 

  export type GameGetPayload<S extends boolean | null | undefined | GameArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Game :
    S extends undefined ? never :
    S extends { include: any } & (GameArgs | GameFindManyArgs)
    ? Game  & {
    [P in TrueKeys<S['include']>]:
        P extends 'guesses' ? Array < GuessGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? GameCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (GameArgs | GameFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'guesses' ? Array < GuessGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? GameCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Game ? Game[P] : never
  } 
      : Game


  type GameCountArgs = Merge<
    Omit<GameFindManyArgs, 'select' | 'include'> & {
      select?: GameCountAggregateInputType | true
    }
  >

  export interface GameDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Game'> extends True ? Prisma__GameClient<GameGetPayload<T>> : Prisma__GameClient<GameGetPayload<T> | null, null>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Game'> extends True ? Prisma__GameClient<GameGetPayload<T>> : Prisma__GameClient<GameGetPayload<T> | null, null>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameFindManyArgs>(
      args?: SelectSubset<T, GameFindManyArgs>
    ): PrismaPromise<Array<GameGetPayload<T>>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
    **/
    create<T extends GameCreateArgs>(
      args: SelectSubset<T, GameCreateArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
    **/
    delete<T extends GameDeleteArgs>(
      args: SelectSubset<T, GameDeleteArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameUpdateArgs>(
      args: SelectSubset<T, GameUpdateArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameDeleteManyArgs>(
      args?: SelectSubset<T, GameDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameUpdateManyArgs>(
      args: SelectSubset<T, GameUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
    **/
    upsert<T extends GameUpsertArgs>(
      args: SelectSubset<T, GameUpsertArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Find one Game that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GameFindUniqueOrThrowArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Find the first Game that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GameFindFirstOrThrowArgs>
    ): Prisma__GameClient<GameGetPayload<T>>

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    guesses<T extends GuessFindManyArgs= {}>(args?: Subset<T, GuessFindManyArgs>): PrismaPromise<Array<GuessGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Game base type for findUnique actions
   */
  export type GameFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where: GameWhereUniqueInput
  }

  /**
   * Game: findUnique
   */
  export interface GameFindUniqueArgs extends GameFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game base type for findFirst actions
   */
  export type GameFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     * 
    **/
    distinct?: Enumerable<GameScalarFieldEnum>
  }

  /**
   * Game: findFirst
   */
  export interface GameFindFirstArgs extends GameFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game findMany
   */
  export type GameFindManyArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Games to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game create
   */
  export type GameCreateArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The data needed to create a Game.
     * 
    **/
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }


  /**
   * Game update
   */
  export type GameUpdateArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The data needed to update a Game.
     * 
    **/
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs = {
    /**
     * The data used to update Games.
     * 
    **/
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     * 
    **/
    where?: GameWhereInput
  }


  /**
   * Game upsert
   */
  export type GameUpsertArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The filter to search for the Game to update in case it exists.
     * 
    **/
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     * 
    **/
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }


  /**
   * Game delete
   */
  export type GameDeleteArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter which Game to delete.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs = {
    /**
     * Filter which Games to delete
     * 
    **/
    where?: GameWhereInput
  }


  /**
   * Game: findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs = GameFindUniqueArgsBase
      

  /**
   * Game: findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs = GameFindFirstArgsBase
      

  /**
   * Game without action
   */
  export type GameArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
  }



  /**
   * Model Guess
   */


  export type AggregateGuess = {
    _count: GuessCountAggregateOutputType | null
    _avg: GuessAvgAggregateOutputType | null
    _sum: GuessSumAggregateOutputType | null
    _min: GuessMinAggregateOutputType | null
    _max: GuessMaxAggregateOutputType | null
  }

  export type GuessAvgAggregateOutputType = {
    firstTeamPoints: number | null
    secondTeamPoints: number | null
  }

  export type GuessSumAggregateOutputType = {
    firstTeamPoints: number | null
    secondTeamPoints: number | null
  }

  export type GuessMinAggregateOutputType = {
    id: string | null
    firstTeamPoints: number | null
    secondTeamPoints: number | null
    createdAt: Date | null
    gameId: string | null
    participantId: string | null
  }

  export type GuessMaxAggregateOutputType = {
    id: string | null
    firstTeamPoints: number | null
    secondTeamPoints: number | null
    createdAt: Date | null
    gameId: string | null
    participantId: string | null
  }

  export type GuessCountAggregateOutputType = {
    id: number
    firstTeamPoints: number
    secondTeamPoints: number
    createdAt: number
    gameId: number
    participantId: number
    _all: number
  }


  export type GuessAvgAggregateInputType = {
    firstTeamPoints?: true
    secondTeamPoints?: true
  }

  export type GuessSumAggregateInputType = {
    firstTeamPoints?: true
    secondTeamPoints?: true
  }

  export type GuessMinAggregateInputType = {
    id?: true
    firstTeamPoints?: true
    secondTeamPoints?: true
    createdAt?: true
    gameId?: true
    participantId?: true
  }

  export type GuessMaxAggregateInputType = {
    id?: true
    firstTeamPoints?: true
    secondTeamPoints?: true
    createdAt?: true
    gameId?: true
    participantId?: true
  }

  export type GuessCountAggregateInputType = {
    id?: true
    firstTeamPoints?: true
    secondTeamPoints?: true
    createdAt?: true
    gameId?: true
    participantId?: true
    _all?: true
  }

  export type GuessAggregateArgs = {
    /**
     * Filter which Guess to aggregate.
     * 
    **/
    where?: GuessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guesses to fetch.
     * 
    **/
    orderBy?: Enumerable<GuessOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GuessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guesses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guesses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guesses
    **/
    _count?: true | GuessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuessMaxAggregateInputType
  }

  export type GetGuessAggregateType<T extends GuessAggregateArgs> = {
        [P in keyof T & keyof AggregateGuess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuess[P]>
      : GetScalarType<T[P], AggregateGuess[P]>
  }




  export type GuessGroupByArgs = {
    where?: GuessWhereInput
    orderBy?: Enumerable<GuessOrderByWithAggregationInput>
    by: Array<GuessScalarFieldEnum>
    having?: GuessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuessCountAggregateInputType | true
    _avg?: GuessAvgAggregateInputType
    _sum?: GuessSumAggregateInputType
    _min?: GuessMinAggregateInputType
    _max?: GuessMaxAggregateInputType
  }


  export type GuessGroupByOutputType = {
    id: string
    firstTeamPoints: number
    secondTeamPoints: number
    createdAt: Date
    gameId: string
    participantId: string
    _count: GuessCountAggregateOutputType | null
    _avg: GuessAvgAggregateOutputType | null
    _sum: GuessSumAggregateOutputType | null
    _min: GuessMinAggregateOutputType | null
    _max: GuessMaxAggregateOutputType | null
  }

  type GetGuessGroupByPayload<T extends GuessGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GuessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuessGroupByOutputType[P]>
            : GetScalarType<T[P], GuessGroupByOutputType[P]>
        }
      >
    >


  export type GuessSelect = {
    id?: boolean
    firstTeamPoints?: boolean
    secondTeamPoints?: boolean
    createdAt?: boolean
    gameId?: boolean
    participantId?: boolean
    participant?: boolean | ParticipantArgs
    game?: boolean | GameArgs
  }


  export type GuessInclude = {
    participant?: boolean | ParticipantArgs
    game?: boolean | GameArgs
  } 

  export type GuessGetPayload<S extends boolean | null | undefined | GuessArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Guess :
    S extends undefined ? never :
    S extends { include: any } & (GuessArgs | GuessFindManyArgs)
    ? Guess  & {
    [P in TrueKeys<S['include']>]:
        P extends 'participant' ? ParticipantGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'game' ? GameGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (GuessArgs | GuessFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'participant' ? ParticipantGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'game' ? GameGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Guess ? Guess[P] : never
  } 
      : Guess


  type GuessCountArgs = Merge<
    Omit<GuessFindManyArgs, 'select' | 'include'> & {
      select?: GuessCountAggregateInputType | true
    }
  >

  export interface GuessDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Guess that matches the filter.
     * @param {GuessFindUniqueArgs} args - Arguments to find a Guess
     * @example
     * // Get one Guess
     * const guess = await prisma.guess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GuessFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GuessFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Guess'> extends True ? Prisma__GuessClient<GuessGetPayload<T>> : Prisma__GuessClient<GuessGetPayload<T> | null, null>

    /**
     * Find the first Guess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessFindFirstArgs} args - Arguments to find a Guess
     * @example
     * // Get one Guess
     * const guess = await prisma.guess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GuessFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GuessFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Guess'> extends True ? Prisma__GuessClient<GuessGetPayload<T>> : Prisma__GuessClient<GuessGetPayload<T> | null, null>

    /**
     * Find zero or more Guesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guesses
     * const guesses = await prisma.guess.findMany()
     * 
     * // Get first 10 Guesses
     * const guesses = await prisma.guess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guessWithIdOnly = await prisma.guess.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GuessFindManyArgs>(
      args?: SelectSubset<T, GuessFindManyArgs>
    ): PrismaPromise<Array<GuessGetPayload<T>>>

    /**
     * Create a Guess.
     * @param {GuessCreateArgs} args - Arguments to create a Guess.
     * @example
     * // Create one Guess
     * const Guess = await prisma.guess.create({
     *   data: {
     *     // ... data to create a Guess
     *   }
     * })
     * 
    **/
    create<T extends GuessCreateArgs>(
      args: SelectSubset<T, GuessCreateArgs>
    ): Prisma__GuessClient<GuessGetPayload<T>>

    /**
     * Delete a Guess.
     * @param {GuessDeleteArgs} args - Arguments to delete one Guess.
     * @example
     * // Delete one Guess
     * const Guess = await prisma.guess.delete({
     *   where: {
     *     // ... filter to delete one Guess
     *   }
     * })
     * 
    **/
    delete<T extends GuessDeleteArgs>(
      args: SelectSubset<T, GuessDeleteArgs>
    ): Prisma__GuessClient<GuessGetPayload<T>>

    /**
     * Update one Guess.
     * @param {GuessUpdateArgs} args - Arguments to update one Guess.
     * @example
     * // Update one Guess
     * const guess = await prisma.guess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GuessUpdateArgs>(
      args: SelectSubset<T, GuessUpdateArgs>
    ): Prisma__GuessClient<GuessGetPayload<T>>

    /**
     * Delete zero or more Guesses.
     * @param {GuessDeleteManyArgs} args - Arguments to filter Guesses to delete.
     * @example
     * // Delete a few Guesses
     * const { count } = await prisma.guess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GuessDeleteManyArgs>(
      args?: SelectSubset<T, GuessDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guesses
     * const guess = await prisma.guess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GuessUpdateManyArgs>(
      args: SelectSubset<T, GuessUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Guess.
     * @param {GuessUpsertArgs} args - Arguments to update or create a Guess.
     * @example
     * // Update or create a Guess
     * const guess = await prisma.guess.upsert({
     *   create: {
     *     // ... data to create a Guess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guess we want to update
     *   }
     * })
    **/
    upsert<T extends GuessUpsertArgs>(
      args: SelectSubset<T, GuessUpsertArgs>
    ): Prisma__GuessClient<GuessGetPayload<T>>

    /**
     * Find one Guess that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {GuessFindUniqueOrThrowArgs} args - Arguments to find a Guess
     * @example
     * // Get one Guess
     * const guess = await prisma.guess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GuessFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GuessFindUniqueOrThrowArgs>
    ): Prisma__GuessClient<GuessGetPayload<T>>

    /**
     * Find the first Guess that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessFindFirstOrThrowArgs} args - Arguments to find a Guess
     * @example
     * // Get one Guess
     * const guess = await prisma.guess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GuessFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GuessFindFirstOrThrowArgs>
    ): Prisma__GuessClient<GuessGetPayload<T>>

    /**
     * Count the number of Guesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessCountArgs} args - Arguments to filter Guesses to count.
     * @example
     * // Count the number of Guesses
     * const count = await prisma.guess.count({
     *   where: {
     *     // ... the filter for the Guesses we want to count
     *   }
     * })
    **/
    count<T extends GuessCountArgs>(
      args?: Subset<T, GuessCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuessAggregateArgs>(args: Subset<T, GuessAggregateArgs>): PrismaPromise<GetGuessAggregateType<T>>

    /**
     * Group by Guess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuessGroupByArgs['orderBy'] }
        : { orderBy?: GuessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuessGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Guess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GuessClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    participant<T extends ParticipantArgs= {}>(args?: Subset<T, ParticipantArgs>): Prisma__ParticipantClient<ParticipantGetPayload<T> | Null>;

    game<T extends GameArgs= {}>(args?: Subset<T, GameArgs>): Prisma__GameClient<GameGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Guess base type for findUnique actions
   */
  export type GuessFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Guess
     * 
    **/
    select?: GuessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GuessInclude | null
    /**
     * Filter, which Guess to fetch.
     * 
    **/
    where: GuessWhereUniqueInput
  }

  /**
   * Guess: findUnique
   */
  export interface GuessFindUniqueArgs extends GuessFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Guess base type for findFirst actions
   */
  export type GuessFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Guess
     * 
    **/
    select?: GuessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GuessInclude | null
    /**
     * Filter, which Guess to fetch.
     * 
    **/
    where?: GuessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guesses to fetch.
     * 
    **/
    orderBy?: Enumerable<GuessOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guesses.
     * 
    **/
    cursor?: GuessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guesses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guesses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guesses.
     * 
    **/
    distinct?: Enumerable<GuessScalarFieldEnum>
  }

  /**
   * Guess: findFirst
   */
  export interface GuessFindFirstArgs extends GuessFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Guess findMany
   */
  export type GuessFindManyArgs = {
    /**
     * Select specific fields to fetch from the Guess
     * 
    **/
    select?: GuessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GuessInclude | null
    /**
     * Filter, which Guesses to fetch.
     * 
    **/
    where?: GuessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guesses to fetch.
     * 
    **/
    orderBy?: Enumerable<GuessOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guesses.
     * 
    **/
    cursor?: GuessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guesses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guesses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GuessScalarFieldEnum>
  }


  /**
   * Guess create
   */
  export type GuessCreateArgs = {
    /**
     * Select specific fields to fetch from the Guess
     * 
    **/
    select?: GuessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GuessInclude | null
    /**
     * The data needed to create a Guess.
     * 
    **/
    data: XOR<GuessCreateInput, GuessUncheckedCreateInput>
  }


  /**
   * Guess update
   */
  export type GuessUpdateArgs = {
    /**
     * Select specific fields to fetch from the Guess
     * 
    **/
    select?: GuessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GuessInclude | null
    /**
     * The data needed to update a Guess.
     * 
    **/
    data: XOR<GuessUpdateInput, GuessUncheckedUpdateInput>
    /**
     * Choose, which Guess to update.
     * 
    **/
    where: GuessWhereUniqueInput
  }


  /**
   * Guess updateMany
   */
  export type GuessUpdateManyArgs = {
    /**
     * The data used to update Guesses.
     * 
    **/
    data: XOR<GuessUpdateManyMutationInput, GuessUncheckedUpdateManyInput>
    /**
     * Filter which Guesses to update
     * 
    **/
    where?: GuessWhereInput
  }


  /**
   * Guess upsert
   */
  export type GuessUpsertArgs = {
    /**
     * Select specific fields to fetch from the Guess
     * 
    **/
    select?: GuessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GuessInclude | null
    /**
     * The filter to search for the Guess to update in case it exists.
     * 
    **/
    where: GuessWhereUniqueInput
    /**
     * In case the Guess found by the `where` argument doesn't exist, create a new Guess with this data.
     * 
    **/
    create: XOR<GuessCreateInput, GuessUncheckedCreateInput>
    /**
     * In case the Guess was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GuessUpdateInput, GuessUncheckedUpdateInput>
  }


  /**
   * Guess delete
   */
  export type GuessDeleteArgs = {
    /**
     * Select specific fields to fetch from the Guess
     * 
    **/
    select?: GuessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GuessInclude | null
    /**
     * Filter which Guess to delete.
     * 
    **/
    where: GuessWhereUniqueInput
  }


  /**
   * Guess deleteMany
   */
  export type GuessDeleteManyArgs = {
    /**
     * Filter which Guesses to delete
     * 
    **/
    where?: GuessWhereInput
  }


  /**
   * Guess: findUniqueOrThrow
   */
  export type GuessFindUniqueOrThrowArgs = GuessFindUniqueArgsBase
      

  /**
   * Guess: findFirstOrThrow
   */
  export type GuessFindFirstOrThrowArgs = GuessFindFirstArgsBase
      

  /**
   * Guess without action
   */
  export type GuessArgs = {
    /**
     * Select specific fields to fetch from the Guess
     * 
    **/
    select?: GuessSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GuessInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const GameScalarFieldEnum: {
    id: 'id',
    date: 'date',
    firstTeamCountryCode: 'firstTeamCountryCode',
    secondTeamCountryCode: 'secondTeamCountryCode'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GuessScalarFieldEnum: {
    id: 'id',
    firstTeamPoints: 'firstTeamPoints',
    secondTeamPoints: 'secondTeamPoints',
    createdAt: 'createdAt',
    gameId: 'gameId',
    participantId: 'participantId'
  };

  export type GuessScalarFieldEnum = (typeof GuessScalarFieldEnum)[keyof typeof GuessScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    poolId: 'poolId'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const PoolScalarFieldEnum: {
    id: 'id',
    title: 'title',
    code: 'code',
    createdAt: 'createdAt',
    ownerId: 'ownerId'
  };

  export type PoolScalarFieldEnum = (typeof PoolScalarFieldEnum)[keyof typeof PoolScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    googleId: 'googleId',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type PoolWhereInput = {
    AND?: Enumerable<PoolWhereInput>
    OR?: Enumerable<PoolWhereInput>
    NOT?: Enumerable<PoolWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    code?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    participants?: ParticipantListRelationFilter
    ownerId?: StringNullableFilter | string | null
    owner?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type PoolOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    participants?: ParticipantOrderByRelationAggregateInput
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type PoolWhereUniqueInput = {
    id?: string
    code?: string
  }

  export type PoolOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
    _count?: PoolCountOrderByAggregateInput
    _max?: PoolMaxOrderByAggregateInput
    _min?: PoolMinOrderByAggregateInput
  }

  export type PoolScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PoolScalarWhereWithAggregatesInput>
    OR?: Enumerable<PoolScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PoolScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    ownerId?: StringNullableWithAggregatesFilter | string | null
  }

  export type ParticipantWhereInput = {
    AND?: Enumerable<ParticipantWhereInput>
    OR?: Enumerable<ParticipantWhereInput>
    NOT?: Enumerable<ParticipantWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    poolId?: StringFilter | string
    guesses?: GuessListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    pool?: XOR<PoolRelationFilter, PoolWhereInput>
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
    guesses?: GuessOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    pool?: PoolOrderByWithRelationInput
  }

  export type ParticipantWhereUniqueInput = {
    id?: string
    userId_poolId?: ParticipantUserIdPoolIdCompoundUniqueInput
  }

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ParticipantScalarWhereWithAggregatesInput>
    OR?: Enumerable<ParticipantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ParticipantScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    poolId?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    googleId?: StringNullableFilter | string | null
    avatarUrl?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    participantingAt?: ParticipantListRelationFilter
    ownPools?: PoolListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    participantingAt?: ParticipantOrderByRelationAggregateInput
    ownPools?: PoolOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
    googleId?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    googleId?: StringNullableWithAggregatesFilter | string | null
    avatarUrl?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GameWhereInput = {
    AND?: Enumerable<GameWhereInput>
    OR?: Enumerable<GameWhereInput>
    NOT?: Enumerable<GameWhereInput>
    id?: StringFilter | string
    date?: DateTimeFilter | Date | string
    firstTeamCountryCode?: StringFilter | string
    secondTeamCountryCode?: StringFilter | string
    guesses?: GuessListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    firstTeamCountryCode?: SortOrder
    secondTeamCountryCode?: SortOrder
    guesses?: GuessOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = {
    id?: string
  }

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    firstTeamCountryCode?: SortOrder
    secondTeamCountryCode?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    firstTeamCountryCode?: StringWithAggregatesFilter | string
    secondTeamCountryCode?: StringWithAggregatesFilter | string
  }

  export type GuessWhereInput = {
    AND?: Enumerable<GuessWhereInput>
    OR?: Enumerable<GuessWhereInput>
    NOT?: Enumerable<GuessWhereInput>
    id?: StringFilter | string
    firstTeamPoints?: IntFilter | number
    secondTeamPoints?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    gameId?: StringFilter | string
    participantId?: StringFilter | string
    participant?: XOR<ParticipantRelationFilter, ParticipantWhereInput>
    game?: XOR<GameRelationFilter, GameWhereInput>
  }

  export type GuessOrderByWithRelationInput = {
    id?: SortOrder
    firstTeamPoints?: SortOrder
    secondTeamPoints?: SortOrder
    createdAt?: SortOrder
    gameId?: SortOrder
    participantId?: SortOrder
    participant?: ParticipantOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type GuessWhereUniqueInput = {
    id?: string
    participantId_gameId?: GuessParticipantIdGameIdCompoundUniqueInput
  }

  export type GuessOrderByWithAggregationInput = {
    id?: SortOrder
    firstTeamPoints?: SortOrder
    secondTeamPoints?: SortOrder
    createdAt?: SortOrder
    gameId?: SortOrder
    participantId?: SortOrder
    _count?: GuessCountOrderByAggregateInput
    _avg?: GuessAvgOrderByAggregateInput
    _max?: GuessMaxOrderByAggregateInput
    _min?: GuessMinOrderByAggregateInput
    _sum?: GuessSumOrderByAggregateInput
  }

  export type GuessScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GuessScalarWhereWithAggregatesInput>
    OR?: Enumerable<GuessScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GuessScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    firstTeamPoints?: IntWithAggregatesFilter | number
    secondTeamPoints?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    gameId?: StringWithAggregatesFilter | string
    participantId?: StringWithAggregatesFilter | string
  }

  export type PoolCreateInput = {
    id?: string
    title: string
    code: string
    createdAt?: Date | string
    participants?: ParticipantCreateNestedManyWithoutPoolInput
    owner?: UserCreateNestedOneWithoutOwnPoolsInput
  }

  export type PoolUncheckedCreateInput = {
    id?: string
    title: string
    code: string
    createdAt?: Date | string
    participants?: ParticipantUncheckedCreateNestedManyWithoutPoolInput
    ownerId?: string | null
  }

  export type PoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantUpdateManyWithoutPoolNestedInput
    owner?: UserUpdateOneWithoutOwnPoolsNestedInput
  }

  export type PoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantUncheckedUpdateManyWithoutPoolNestedInput
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipantCreateInput = {
    id?: string
    guesses?: GuessCreateNestedManyWithoutParticipantInput
    user: UserCreateNestedOneWithoutParticipantingAtInput
    pool: PoolCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: string
    userId: string
    poolId: string
    guesses?: GuessUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guesses?: GuessUpdateManyWithoutParticipantNestedInput
    user?: UserUpdateOneRequiredWithoutParticipantingAtNestedInput
    pool?: PoolUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    guesses?: GuessUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    googleId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    participantingAt?: ParticipantCreateNestedManyWithoutUserInput
    ownPools?: PoolCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    googleId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    participantingAt?: ParticipantUncheckedCreateNestedManyWithoutUserInput
    ownPools?: PoolUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantingAt?: ParticipantUpdateManyWithoutUserNestedInput
    ownPools?: PoolUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantingAt?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
    ownPools?: PoolUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    date: Date | string
    firstTeamCountryCode: string
    secondTeamCountryCode: string
    guesses?: GuessCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    date: Date | string
    firstTeamCountryCode: string
    secondTeamCountryCode: string
    guesses?: GuessUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    firstTeamCountryCode?: StringFieldUpdateOperationsInput | string
    secondTeamCountryCode?: StringFieldUpdateOperationsInput | string
    guesses?: GuessUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    firstTeamCountryCode?: StringFieldUpdateOperationsInput | string
    secondTeamCountryCode?: StringFieldUpdateOperationsInput | string
    guesses?: GuessUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    firstTeamCountryCode?: StringFieldUpdateOperationsInput | string
    secondTeamCountryCode?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    firstTeamCountryCode?: StringFieldUpdateOperationsInput | string
    secondTeamCountryCode?: StringFieldUpdateOperationsInput | string
  }

  export type GuessCreateInput = {
    id?: string
    firstTeamPoints: number
    secondTeamPoints: number
    createdAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutGuessesInput
    game: GameCreateNestedOneWithoutGuessesInput
  }

  export type GuessUncheckedCreateInput = {
    id?: string
    firstTeamPoints: number
    secondTeamPoints: number
    createdAt?: Date | string
    gameId: string
    participantId: string
  }

  export type GuessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstTeamPoints?: IntFieldUpdateOperationsInput | number
    secondTeamPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutGuessesNestedInput
    game?: GameUpdateOneRequiredWithoutGuessesNestedInput
  }

  export type GuessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstTeamPoints?: IntFieldUpdateOperationsInput | number
    secondTeamPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type GuessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstTeamPoints?: IntFieldUpdateOperationsInput | number
    secondTeamPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstTeamPoints?: IntFieldUpdateOperationsInput | number
    secondTeamPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ParticipantListRelationFilter = {
    every?: ParticipantWhereInput
    some?: ParticipantWhereInput
    none?: ParticipantWhereInput
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PoolCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type PoolMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type PoolMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    ownerId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type GuessListRelationFilter = {
    every?: GuessWhereInput
    some?: GuessWhereInput
    none?: GuessWhereInput
  }

  export type PoolRelationFilter = {
    is?: PoolWhereInput
    isNot?: PoolWhereInput
  }

  export type GuessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantUserIdPoolIdCompoundUniqueInput = {
    userId: string
    poolId: string
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    poolId?: SortOrder
  }

  export type PoolListRelationFilter = {
    every?: PoolWhereInput
    some?: PoolWhereInput
    none?: PoolWhereInput
  }

  export type PoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    firstTeamCountryCode?: SortOrder
    secondTeamCountryCode?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    firstTeamCountryCode?: SortOrder
    secondTeamCountryCode?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    firstTeamCountryCode?: SortOrder
    secondTeamCountryCode?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type ParticipantRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type GameRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type GuessParticipantIdGameIdCompoundUniqueInput = {
    participantId: string
    gameId: string
  }

  export type GuessCountOrderByAggregateInput = {
    id?: SortOrder
    firstTeamPoints?: SortOrder
    secondTeamPoints?: SortOrder
    createdAt?: SortOrder
    gameId?: SortOrder
    participantId?: SortOrder
  }

  export type GuessAvgOrderByAggregateInput = {
    firstTeamPoints?: SortOrder
    secondTeamPoints?: SortOrder
  }

  export type GuessMaxOrderByAggregateInput = {
    id?: SortOrder
    firstTeamPoints?: SortOrder
    secondTeamPoints?: SortOrder
    createdAt?: SortOrder
    gameId?: SortOrder
    participantId?: SortOrder
  }

  export type GuessMinOrderByAggregateInput = {
    id?: SortOrder
    firstTeamPoints?: SortOrder
    secondTeamPoints?: SortOrder
    createdAt?: SortOrder
    gameId?: SortOrder
    participantId?: SortOrder
  }

  export type GuessSumOrderByAggregateInput = {
    firstTeamPoints?: SortOrder
    secondTeamPoints?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type ParticipantCreateNestedManyWithoutPoolInput = {
    create?: XOR<Enumerable<ParticipantCreateWithoutPoolInput>, Enumerable<ParticipantUncheckedCreateWithoutPoolInput>>
    connectOrCreate?: Enumerable<ParticipantCreateOrConnectWithoutPoolInput>
    connect?: Enumerable<ParticipantWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutOwnPoolsInput = {
    create?: XOR<UserCreateWithoutOwnPoolsInput, UserUncheckedCreateWithoutOwnPoolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnPoolsInput
    connect?: UserWhereUniqueInput
  }

  export type ParticipantUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<Enumerable<ParticipantCreateWithoutPoolInput>, Enumerable<ParticipantUncheckedCreateWithoutPoolInput>>
    connectOrCreate?: Enumerable<ParticipantCreateOrConnectWithoutPoolInput>
    connect?: Enumerable<ParticipantWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParticipantUpdateManyWithoutPoolNestedInput = {
    create?: XOR<Enumerable<ParticipantCreateWithoutPoolInput>, Enumerable<ParticipantUncheckedCreateWithoutPoolInput>>
    connectOrCreate?: Enumerable<ParticipantCreateOrConnectWithoutPoolInput>
    upsert?: Enumerable<ParticipantUpsertWithWhereUniqueWithoutPoolInput>
    set?: Enumerable<ParticipantWhereUniqueInput>
    disconnect?: Enumerable<ParticipantWhereUniqueInput>
    delete?: Enumerable<ParticipantWhereUniqueInput>
    connect?: Enumerable<ParticipantWhereUniqueInput>
    update?: Enumerable<ParticipantUpdateWithWhereUniqueWithoutPoolInput>
    updateMany?: Enumerable<ParticipantUpdateManyWithWhereWithoutPoolInput>
    deleteMany?: Enumerable<ParticipantScalarWhereInput>
  }

  export type UserUpdateOneWithoutOwnPoolsNestedInput = {
    create?: XOR<UserCreateWithoutOwnPoolsInput, UserUncheckedCreateWithoutOwnPoolsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnPoolsInput
    upsert?: UserUpsertWithoutOwnPoolsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOwnPoolsInput, UserUncheckedUpdateWithoutOwnPoolsInput>
  }

  export type ParticipantUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<Enumerable<ParticipantCreateWithoutPoolInput>, Enumerable<ParticipantUncheckedCreateWithoutPoolInput>>
    connectOrCreate?: Enumerable<ParticipantCreateOrConnectWithoutPoolInput>
    upsert?: Enumerable<ParticipantUpsertWithWhereUniqueWithoutPoolInput>
    set?: Enumerable<ParticipantWhereUniqueInput>
    disconnect?: Enumerable<ParticipantWhereUniqueInput>
    delete?: Enumerable<ParticipantWhereUniqueInput>
    connect?: Enumerable<ParticipantWhereUniqueInput>
    update?: Enumerable<ParticipantUpdateWithWhereUniqueWithoutPoolInput>
    updateMany?: Enumerable<ParticipantUpdateManyWithWhereWithoutPoolInput>
    deleteMany?: Enumerable<ParticipantScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GuessCreateNestedManyWithoutParticipantInput = {
    create?: XOR<Enumerable<GuessCreateWithoutParticipantInput>, Enumerable<GuessUncheckedCreateWithoutParticipantInput>>
    connectOrCreate?: Enumerable<GuessCreateOrConnectWithoutParticipantInput>
    connect?: Enumerable<GuessWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutParticipantingAtInput = {
    create?: XOR<UserCreateWithoutParticipantingAtInput, UserUncheckedCreateWithoutParticipantingAtInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantingAtInput
    connect?: UserWhereUniqueInput
  }

  export type PoolCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<PoolCreateWithoutParticipantsInput, PoolUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: PoolCreateOrConnectWithoutParticipantsInput
    connect?: PoolWhereUniqueInput
  }

  export type GuessUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<Enumerable<GuessCreateWithoutParticipantInput>, Enumerable<GuessUncheckedCreateWithoutParticipantInput>>
    connectOrCreate?: Enumerable<GuessCreateOrConnectWithoutParticipantInput>
    connect?: Enumerable<GuessWhereUniqueInput>
  }

  export type GuessUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<Enumerable<GuessCreateWithoutParticipantInput>, Enumerable<GuessUncheckedCreateWithoutParticipantInput>>
    connectOrCreate?: Enumerable<GuessCreateOrConnectWithoutParticipantInput>
    upsert?: Enumerable<GuessUpsertWithWhereUniqueWithoutParticipantInput>
    set?: Enumerable<GuessWhereUniqueInput>
    disconnect?: Enumerable<GuessWhereUniqueInput>
    delete?: Enumerable<GuessWhereUniqueInput>
    connect?: Enumerable<GuessWhereUniqueInput>
    update?: Enumerable<GuessUpdateWithWhereUniqueWithoutParticipantInput>
    updateMany?: Enumerable<GuessUpdateManyWithWhereWithoutParticipantInput>
    deleteMany?: Enumerable<GuessScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutParticipantingAtNestedInput = {
    create?: XOR<UserCreateWithoutParticipantingAtInput, UserUncheckedCreateWithoutParticipantingAtInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantingAtInput
    upsert?: UserUpsertWithoutParticipantingAtInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutParticipantingAtInput, UserUncheckedUpdateWithoutParticipantingAtInput>
  }

  export type PoolUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<PoolCreateWithoutParticipantsInput, PoolUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: PoolCreateOrConnectWithoutParticipantsInput
    upsert?: PoolUpsertWithoutParticipantsInput
    connect?: PoolWhereUniqueInput
    update?: XOR<PoolUpdateWithoutParticipantsInput, PoolUncheckedUpdateWithoutParticipantsInput>
  }

  export type GuessUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<Enumerable<GuessCreateWithoutParticipantInput>, Enumerable<GuessUncheckedCreateWithoutParticipantInput>>
    connectOrCreate?: Enumerable<GuessCreateOrConnectWithoutParticipantInput>
    upsert?: Enumerable<GuessUpsertWithWhereUniqueWithoutParticipantInput>
    set?: Enumerable<GuessWhereUniqueInput>
    disconnect?: Enumerable<GuessWhereUniqueInput>
    delete?: Enumerable<GuessWhereUniqueInput>
    connect?: Enumerable<GuessWhereUniqueInput>
    update?: Enumerable<GuessUpdateWithWhereUniqueWithoutParticipantInput>
    updateMany?: Enumerable<GuessUpdateManyWithWhereWithoutParticipantInput>
    deleteMany?: Enumerable<GuessScalarWhereInput>
  }

  export type ParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ParticipantCreateWithoutUserInput>, Enumerable<ParticipantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ParticipantCreateOrConnectWithoutUserInput>
    connect?: Enumerable<ParticipantWhereUniqueInput>
  }

  export type PoolCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<PoolCreateWithoutOwnerInput>, Enumerable<PoolUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PoolCreateOrConnectWithoutOwnerInput>
    connect?: Enumerable<PoolWhereUniqueInput>
  }

  export type ParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ParticipantCreateWithoutUserInput>, Enumerable<ParticipantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ParticipantCreateOrConnectWithoutUserInput>
    connect?: Enumerable<ParticipantWhereUniqueInput>
  }

  export type PoolUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<PoolCreateWithoutOwnerInput>, Enumerable<PoolUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PoolCreateOrConnectWithoutOwnerInput>
    connect?: Enumerable<PoolWhereUniqueInput>
  }

  export type ParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ParticipantCreateWithoutUserInput>, Enumerable<ParticipantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ParticipantCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ParticipantUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<ParticipantWhereUniqueInput>
    disconnect?: Enumerable<ParticipantWhereUniqueInput>
    delete?: Enumerable<ParticipantWhereUniqueInput>
    connect?: Enumerable<ParticipantWhereUniqueInput>
    update?: Enumerable<ParticipantUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ParticipantUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ParticipantScalarWhereInput>
  }

  export type PoolUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<PoolCreateWithoutOwnerInput>, Enumerable<PoolUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PoolCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<PoolUpsertWithWhereUniqueWithoutOwnerInput>
    set?: Enumerable<PoolWhereUniqueInput>
    disconnect?: Enumerable<PoolWhereUniqueInput>
    delete?: Enumerable<PoolWhereUniqueInput>
    connect?: Enumerable<PoolWhereUniqueInput>
    update?: Enumerable<PoolUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<PoolUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<PoolScalarWhereInput>
  }

  export type ParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ParticipantCreateWithoutUserInput>, Enumerable<ParticipantUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ParticipantCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ParticipantUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<ParticipantWhereUniqueInput>
    disconnect?: Enumerable<ParticipantWhereUniqueInput>
    delete?: Enumerable<ParticipantWhereUniqueInput>
    connect?: Enumerable<ParticipantWhereUniqueInput>
    update?: Enumerable<ParticipantUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ParticipantUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ParticipantScalarWhereInput>
  }

  export type PoolUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<PoolCreateWithoutOwnerInput>, Enumerable<PoolUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PoolCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<PoolUpsertWithWhereUniqueWithoutOwnerInput>
    set?: Enumerable<PoolWhereUniqueInput>
    disconnect?: Enumerable<PoolWhereUniqueInput>
    delete?: Enumerable<PoolWhereUniqueInput>
    connect?: Enumerable<PoolWhereUniqueInput>
    update?: Enumerable<PoolUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<PoolUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<PoolScalarWhereInput>
  }

  export type GuessCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<GuessCreateWithoutGameInput>, Enumerable<GuessUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GuessCreateOrConnectWithoutGameInput>
    connect?: Enumerable<GuessWhereUniqueInput>
  }

  export type GuessUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<GuessCreateWithoutGameInput>, Enumerable<GuessUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GuessCreateOrConnectWithoutGameInput>
    connect?: Enumerable<GuessWhereUniqueInput>
  }

  export type GuessUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<GuessCreateWithoutGameInput>, Enumerable<GuessUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GuessCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<GuessUpsertWithWhereUniqueWithoutGameInput>
    set?: Enumerable<GuessWhereUniqueInput>
    disconnect?: Enumerable<GuessWhereUniqueInput>
    delete?: Enumerable<GuessWhereUniqueInput>
    connect?: Enumerable<GuessWhereUniqueInput>
    update?: Enumerable<GuessUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<GuessUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<GuessScalarWhereInput>
  }

  export type GuessUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<GuessCreateWithoutGameInput>, Enumerable<GuessUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<GuessCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<GuessUpsertWithWhereUniqueWithoutGameInput>
    set?: Enumerable<GuessWhereUniqueInput>
    disconnect?: Enumerable<GuessWhereUniqueInput>
    delete?: Enumerable<GuessWhereUniqueInput>
    connect?: Enumerable<GuessWhereUniqueInput>
    update?: Enumerable<GuessUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<GuessUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<GuessScalarWhereInput>
  }

  export type ParticipantCreateNestedOneWithoutGuessesInput = {
    create?: XOR<ParticipantCreateWithoutGuessesInput, ParticipantUncheckedCreateWithoutGuessesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutGuessesInput
    connect?: ParticipantWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutGuessesInput = {
    create?: XOR<GameCreateWithoutGuessesInput, GameUncheckedCreateWithoutGuessesInput>
    connectOrCreate?: GameCreateOrConnectWithoutGuessesInput
    connect?: GameWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParticipantUpdateOneRequiredWithoutGuessesNestedInput = {
    create?: XOR<ParticipantCreateWithoutGuessesInput, ParticipantUncheckedCreateWithoutGuessesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutGuessesInput
    upsert?: ParticipantUpsertWithoutGuessesInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<ParticipantUpdateWithoutGuessesInput, ParticipantUncheckedUpdateWithoutGuessesInput>
  }

  export type GameUpdateOneRequiredWithoutGuessesNestedInput = {
    create?: XOR<GameCreateWithoutGuessesInput, GameUncheckedCreateWithoutGuessesInput>
    connectOrCreate?: GameCreateOrConnectWithoutGuessesInput
    upsert?: GameUpsertWithoutGuessesInput
    connect?: GameWhereUniqueInput
    update?: XOR<GameUpdateWithoutGuessesInput, GameUncheckedUpdateWithoutGuessesInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ParticipantCreateWithoutPoolInput = {
    id?: string
    guesses?: GuessCreateNestedManyWithoutParticipantInput
    user: UserCreateNestedOneWithoutParticipantingAtInput
  }

  export type ParticipantUncheckedCreateWithoutPoolInput = {
    id?: string
    userId: string
    guesses?: GuessUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutPoolInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutPoolInput, ParticipantUncheckedCreateWithoutPoolInput>
  }

  export type UserCreateWithoutOwnPoolsInput = {
    id?: string
    name: string
    email: string
    googleId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    participantingAt?: ParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnPoolsInput = {
    id?: string
    name: string
    email: string
    googleId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    participantingAt?: ParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnPoolsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnPoolsInput, UserUncheckedCreateWithoutOwnPoolsInput>
  }

  export type ParticipantUpsertWithWhereUniqueWithoutPoolInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutPoolInput, ParticipantUncheckedUpdateWithoutPoolInput>
    create: XOR<ParticipantCreateWithoutPoolInput, ParticipantUncheckedCreateWithoutPoolInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutPoolInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutPoolInput, ParticipantUncheckedUpdateWithoutPoolInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutPoolInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutParticipantsInput>
  }

  export type ParticipantScalarWhereInput = {
    AND?: Enumerable<ParticipantScalarWhereInput>
    OR?: Enumerable<ParticipantScalarWhereInput>
    NOT?: Enumerable<ParticipantScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    poolId?: StringFilter | string
  }

  export type UserUpsertWithoutOwnPoolsInput = {
    update: XOR<UserUpdateWithoutOwnPoolsInput, UserUncheckedUpdateWithoutOwnPoolsInput>
    create: XOR<UserCreateWithoutOwnPoolsInput, UserUncheckedCreateWithoutOwnPoolsInput>
  }

  export type UserUpdateWithoutOwnPoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantingAt?: ParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnPoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantingAt?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GuessCreateWithoutParticipantInput = {
    id?: string
    firstTeamPoints: number
    secondTeamPoints: number
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutGuessesInput
  }

  export type GuessUncheckedCreateWithoutParticipantInput = {
    id?: string
    firstTeamPoints: number
    secondTeamPoints: number
    createdAt?: Date | string
    gameId: string
  }

  export type GuessCreateOrConnectWithoutParticipantInput = {
    where: GuessWhereUniqueInput
    create: XOR<GuessCreateWithoutParticipantInput, GuessUncheckedCreateWithoutParticipantInput>
  }

  export type UserCreateWithoutParticipantingAtInput = {
    id?: string
    name: string
    email: string
    googleId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    ownPools?: PoolCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutParticipantingAtInput = {
    id?: string
    name: string
    email: string
    googleId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    ownPools?: PoolUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutParticipantingAtInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantingAtInput, UserUncheckedCreateWithoutParticipantingAtInput>
  }

  export type PoolCreateWithoutParticipantsInput = {
    id?: string
    title: string
    code: string
    createdAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnPoolsInput
  }

  export type PoolUncheckedCreateWithoutParticipantsInput = {
    id?: string
    title: string
    code: string
    createdAt?: Date | string
    ownerId?: string | null
  }

  export type PoolCreateOrConnectWithoutParticipantsInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutParticipantsInput, PoolUncheckedCreateWithoutParticipantsInput>
  }

  export type GuessUpsertWithWhereUniqueWithoutParticipantInput = {
    where: GuessWhereUniqueInput
    update: XOR<GuessUpdateWithoutParticipantInput, GuessUncheckedUpdateWithoutParticipantInput>
    create: XOR<GuessCreateWithoutParticipantInput, GuessUncheckedCreateWithoutParticipantInput>
  }

  export type GuessUpdateWithWhereUniqueWithoutParticipantInput = {
    where: GuessWhereUniqueInput
    data: XOR<GuessUpdateWithoutParticipantInput, GuessUncheckedUpdateWithoutParticipantInput>
  }

  export type GuessUpdateManyWithWhereWithoutParticipantInput = {
    where: GuessScalarWhereInput
    data: XOR<GuessUpdateManyMutationInput, GuessUncheckedUpdateManyWithoutGuessesInput>
  }

  export type GuessScalarWhereInput = {
    AND?: Enumerable<GuessScalarWhereInput>
    OR?: Enumerable<GuessScalarWhereInput>
    NOT?: Enumerable<GuessScalarWhereInput>
    id?: StringFilter | string
    firstTeamPoints?: IntFilter | number
    secondTeamPoints?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    gameId?: StringFilter | string
    participantId?: StringFilter | string
  }

  export type UserUpsertWithoutParticipantingAtInput = {
    update: XOR<UserUpdateWithoutParticipantingAtInput, UserUncheckedUpdateWithoutParticipantingAtInput>
    create: XOR<UserCreateWithoutParticipantingAtInput, UserUncheckedCreateWithoutParticipantingAtInput>
  }

  export type UserUpdateWithoutParticipantingAtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownPools?: PoolUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantingAtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownPools?: PoolUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PoolUpsertWithoutParticipantsInput = {
    update: XOR<PoolUpdateWithoutParticipantsInput, PoolUncheckedUpdateWithoutParticipantsInput>
    create: XOR<PoolCreateWithoutParticipantsInput, PoolUncheckedCreateWithoutParticipantsInput>
  }

  export type PoolUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnPoolsNestedInput
  }

  export type PoolUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipantCreateWithoutUserInput = {
    id?: string
    guesses?: GuessCreateNestedManyWithoutParticipantInput
    pool: PoolCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    poolId: string
    guesses?: GuessUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
  }

  export type PoolCreateWithoutOwnerInput = {
    id?: string
    title: string
    code: string
    createdAt?: Date | string
    participants?: ParticipantCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    code: string
    createdAt?: Date | string
    participants?: ParticipantUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolCreateOrConnectWithoutOwnerInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutOwnerInput, PoolUncheckedCreateWithoutOwnerInput>
  }

  export type ParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutUserInput, ParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutUserInput, ParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutParticipantingAtInput>
  }

  export type PoolUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PoolWhereUniqueInput
    update: XOR<PoolUpdateWithoutOwnerInput, PoolUncheckedUpdateWithoutOwnerInput>
    create: XOR<PoolCreateWithoutOwnerInput, PoolUncheckedCreateWithoutOwnerInput>
  }

  export type PoolUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PoolWhereUniqueInput
    data: XOR<PoolUpdateWithoutOwnerInput, PoolUncheckedUpdateWithoutOwnerInput>
  }

  export type PoolUpdateManyWithWhereWithoutOwnerInput = {
    where: PoolScalarWhereInput
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyWithoutOwnPoolsInput>
  }

  export type PoolScalarWhereInput = {
    AND?: Enumerable<PoolScalarWhereInput>
    OR?: Enumerable<PoolScalarWhereInput>
    NOT?: Enumerable<PoolScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    code?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    ownerId?: StringNullableFilter | string | null
  }

  export type GuessCreateWithoutGameInput = {
    id?: string
    firstTeamPoints: number
    secondTeamPoints: number
    createdAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutGuessesInput
  }

  export type GuessUncheckedCreateWithoutGameInput = {
    id?: string
    firstTeamPoints: number
    secondTeamPoints: number
    createdAt?: Date | string
    participantId: string
  }

  export type GuessCreateOrConnectWithoutGameInput = {
    where: GuessWhereUniqueInput
    create: XOR<GuessCreateWithoutGameInput, GuessUncheckedCreateWithoutGameInput>
  }

  export type GuessUpsertWithWhereUniqueWithoutGameInput = {
    where: GuessWhereUniqueInput
    update: XOR<GuessUpdateWithoutGameInput, GuessUncheckedUpdateWithoutGameInput>
    create: XOR<GuessCreateWithoutGameInput, GuessUncheckedCreateWithoutGameInput>
  }

  export type GuessUpdateWithWhereUniqueWithoutGameInput = {
    where: GuessWhereUniqueInput
    data: XOR<GuessUpdateWithoutGameInput, GuessUncheckedUpdateWithoutGameInput>
  }

  export type GuessUpdateManyWithWhereWithoutGameInput = {
    where: GuessScalarWhereInput
    data: XOR<GuessUpdateManyMutationInput, GuessUncheckedUpdateManyWithoutGuessesInput>
  }

  export type ParticipantCreateWithoutGuessesInput = {
    id?: string
    user: UserCreateNestedOneWithoutParticipantingAtInput
    pool: PoolCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantUncheckedCreateWithoutGuessesInput = {
    id?: string
    userId: string
    poolId: string
  }

  export type ParticipantCreateOrConnectWithoutGuessesInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutGuessesInput, ParticipantUncheckedCreateWithoutGuessesInput>
  }

  export type GameCreateWithoutGuessesInput = {
    id?: string
    date: Date | string
    firstTeamCountryCode: string
    secondTeamCountryCode: string
  }

  export type GameUncheckedCreateWithoutGuessesInput = {
    id?: string
    date: Date | string
    firstTeamCountryCode: string
    secondTeamCountryCode: string
  }

  export type GameCreateOrConnectWithoutGuessesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGuessesInput, GameUncheckedCreateWithoutGuessesInput>
  }

  export type ParticipantUpsertWithoutGuessesInput = {
    update: XOR<ParticipantUpdateWithoutGuessesInput, ParticipantUncheckedUpdateWithoutGuessesInput>
    create: XOR<ParticipantCreateWithoutGuessesInput, ParticipantUncheckedCreateWithoutGuessesInput>
  }

  export type ParticipantUpdateWithoutGuessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutParticipantingAtNestedInput
    pool?: PoolUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutGuessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
  }

  export type GameUpsertWithoutGuessesInput = {
    update: XOR<GameUpdateWithoutGuessesInput, GameUncheckedUpdateWithoutGuessesInput>
    create: XOR<GameCreateWithoutGuessesInput, GameUncheckedCreateWithoutGuessesInput>
  }

  export type GameUpdateWithoutGuessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    firstTeamCountryCode?: StringFieldUpdateOperationsInput | string
    secondTeamCountryCode?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateWithoutGuessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    firstTeamCountryCode?: StringFieldUpdateOperationsInput | string
    secondTeamCountryCode?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    guesses?: GuessUpdateManyWithoutParticipantNestedInput
    user?: UserUpdateOneRequiredWithoutParticipantingAtNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    guesses?: GuessUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateManyWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GuessUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstTeamPoints?: IntFieldUpdateOperationsInput | number
    secondTeamPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGuessesNestedInput
  }

  export type GuessUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstTeamPoints?: IntFieldUpdateOperationsInput | number
    secondTeamPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type GuessUncheckedUpdateManyWithoutGuessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstTeamPoints?: IntFieldUpdateOperationsInput | number
    secondTeamPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    guesses?: GuessUpdateManyWithoutParticipantNestedInput
    pool?: PoolUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    guesses?: GuessUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateManyWithoutParticipantingAtInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
  }

  export type PoolUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateManyWithoutOwnPoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuessUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstTeamPoints?: IntFieldUpdateOperationsInput | number
    secondTeamPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutGuessesNestedInput
  }

  export type GuessUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstTeamPoints?: IntFieldUpdateOperationsInput | number
    secondTeamPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}