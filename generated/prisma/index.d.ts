
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model creator
 * 
 */
export type creator = $Result.DefaultSelection<Prisma.$creatorPayload>
/**
 * Model media
 * 
 */
export type media = $Result.DefaultSelection<Prisma.$mediaPayload>
/**
 * Model mediaType
 * 
 */
export type mediaType = $Result.DefaultSelection<Prisma.$mediaTypePayload>
/**
 * Model mediaStatus
 * 
 */
export type mediaStatus = $Result.DefaultSelection<Prisma.$mediaStatusPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Creators
 * const creators = await prisma.creator.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Creators
   * const creators = await prisma.creator.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.creator`: Exposes CRUD operations for the **creator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creators
    * const creators = await prisma.creator.findMany()
    * ```
    */
  get creator(): Prisma.creatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.mediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaType`: Exposes CRUD operations for the **mediaType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaTypes
    * const mediaTypes = await prisma.mediaType.findMany()
    * ```
    */
  get mediaType(): Prisma.mediaTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaStatus`: Exposes CRUD operations for the **mediaStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaStatuses
    * const mediaStatuses = await prisma.mediaStatus.findMany()
    * ```
    */
  get mediaStatus(): Prisma.mediaStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    creator: 'creator',
    media: 'media',
    mediaType: 'mediaType',
    mediaStatus: 'mediaStatus',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "creator" | "media" | "mediaType" | "mediaStatus" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      creator: {
        payload: Prisma.$creatorPayload<ExtArgs>
        fields: Prisma.creatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.creatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.creatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload>
          }
          findFirst: {
            args: Prisma.creatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.creatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload>
          }
          findMany: {
            args: Prisma.creatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload>[]
          }
          create: {
            args: Prisma.creatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload>
          }
          createMany: {
            args: Prisma.creatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.creatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload>[]
          }
          delete: {
            args: Prisma.creatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload>
          }
          update: {
            args: Prisma.creatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload>
          }
          deleteMany: {
            args: Prisma.creatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.creatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.creatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload>[]
          }
          upsert: {
            args: Prisma.creatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creatorPayload>
          }
          aggregate: {
            args: Prisma.CreatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreator>
          }
          groupBy: {
            args: Prisma.creatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.creatorCountArgs<ExtArgs>
            result: $Utils.Optional<CreatorCountAggregateOutputType> | number
          }
        }
      }
      media: {
        payload: Prisma.$mediaPayload<ExtArgs>
        fields: Prisma.mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findFirst: {
            args: Prisma.mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findMany: {
            args: Prisma.mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          delete: {
            args: Prisma.mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          update: {
            args: Prisma.mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          deleteMany: {
            args: Prisma.mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      mediaType: {
        payload: Prisma.$mediaTypePayload<ExtArgs>
        fields: Prisma.mediaTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mediaTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mediaTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload>
          }
          findFirst: {
            args: Prisma.mediaTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mediaTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload>
          }
          findMany: {
            args: Prisma.mediaTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload>[]
          }
          create: {
            args: Prisma.mediaTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload>
          }
          createMany: {
            args: Prisma.mediaTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mediaTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload>[]
          }
          delete: {
            args: Prisma.mediaTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload>
          }
          update: {
            args: Prisma.mediaTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload>
          }
          deleteMany: {
            args: Prisma.mediaTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mediaTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mediaTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload>[]
          }
          upsert: {
            args: Prisma.mediaTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaTypePayload>
          }
          aggregate: {
            args: Prisma.MediaTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaType>
          }
          groupBy: {
            args: Prisma.mediaTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.mediaTypeCountArgs<ExtArgs>
            result: $Utils.Optional<MediaTypeCountAggregateOutputType> | number
          }
        }
      }
      mediaStatus: {
        payload: Prisma.$mediaStatusPayload<ExtArgs>
        fields: Prisma.mediaStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mediaStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mediaStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload>
          }
          findFirst: {
            args: Prisma.mediaStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mediaStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload>
          }
          findMany: {
            args: Prisma.mediaStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload>[]
          }
          create: {
            args: Prisma.mediaStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload>
          }
          createMany: {
            args: Prisma.mediaStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mediaStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload>[]
          }
          delete: {
            args: Prisma.mediaStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload>
          }
          update: {
            args: Prisma.mediaStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload>
          }
          deleteMany: {
            args: Prisma.mediaStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mediaStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mediaStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload>[]
          }
          upsert: {
            args: Prisma.mediaStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaStatusPayload>
          }
          aggregate: {
            args: Prisma.MediaStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaStatus>
          }
          groupBy: {
            args: Prisma.mediaStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.mediaStatusCountArgs<ExtArgs>
            result: $Utils.Optional<MediaStatusCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    creator?: creatorOmit
    media?: mediaOmit
    mediaType?: mediaTypeOmit
    mediaStatus?: mediaStatusOmit
    users?: usersOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CreatorCountOutputType
   */

  export type CreatorCountOutputType = {
    media: number
  }

  export type CreatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | CreatorCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorCountOutputType
     */
    select?: CreatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    mediaStatus: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaStatus?: boolean | MediaCountOutputTypeCountMediaStatusArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountMediaStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaStatusWhereInput
  }


  /**
   * Count Type MediaTypeCountOutputType
   */

  export type MediaTypeCountOutputType = {
    media: number
  }

  export type MediaTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaTypeCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * MediaTypeCountOutputType without action
   */
  export type MediaTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaTypeCountOutputType
     */
    select?: MediaTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaTypeCountOutputType without action
   */
  export type MediaTypeCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    mediaStatus: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaStatus?: boolean | UsersCountOutputTypeCountMediaStatusArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMediaStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaStatusWhereInput
  }


  /**
   * Models
   */

  /**
   * Model creator
   */

  export type AggregateCreator = {
    _count: CreatorCountAggregateOutputType | null
    _avg: CreatorAvgAggregateOutputType | null
    _sum: CreatorSumAggregateOutputType | null
    _min: CreatorMinAggregateOutputType | null
    _max: CreatorMaxAggregateOutputType | null
  }

  export type CreatorAvgAggregateOutputType = {
    creatorId: number | null
  }

  export type CreatorSumAggregateOutputType = {
    creatorId: number | null
  }

  export type CreatorMinAggregateOutputType = {
    creatorId: number | null
    creatorName: string | null
    dob: Date | null
  }

  export type CreatorMaxAggregateOutputType = {
    creatorId: number | null
    creatorName: string | null
    dob: Date | null
  }

  export type CreatorCountAggregateOutputType = {
    creatorId: number
    creatorName: number
    dob: number
    _all: number
  }


  export type CreatorAvgAggregateInputType = {
    creatorId?: true
  }

  export type CreatorSumAggregateInputType = {
    creatorId?: true
  }

  export type CreatorMinAggregateInputType = {
    creatorId?: true
    creatorName?: true
    dob?: true
  }

  export type CreatorMaxAggregateInputType = {
    creatorId?: true
    creatorName?: true
    dob?: true
  }

  export type CreatorCountAggregateInputType = {
    creatorId?: true
    creatorName?: true
    dob?: true
    _all?: true
  }

  export type CreatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which creator to aggregate.
     */
    where?: creatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creators to fetch.
     */
    orderBy?: creatorOrderByWithRelationInput | creatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: creatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned creators
    **/
    _count?: true | CreatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatorMaxAggregateInputType
  }

  export type GetCreatorAggregateType<T extends CreatorAggregateArgs> = {
        [P in keyof T & keyof AggregateCreator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreator[P]>
      : GetScalarType<T[P], AggregateCreator[P]>
  }




  export type creatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: creatorWhereInput
    orderBy?: creatorOrderByWithAggregationInput | creatorOrderByWithAggregationInput[]
    by: CreatorScalarFieldEnum[] | CreatorScalarFieldEnum
    having?: creatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreatorCountAggregateInputType | true
    _avg?: CreatorAvgAggregateInputType
    _sum?: CreatorSumAggregateInputType
    _min?: CreatorMinAggregateInputType
    _max?: CreatorMaxAggregateInputType
  }

  export type CreatorGroupByOutputType = {
    creatorId: number
    creatorName: string
    dob: Date | null
    _count: CreatorCountAggregateOutputType | null
    _avg: CreatorAvgAggregateOutputType | null
    _sum: CreatorSumAggregateOutputType | null
    _min: CreatorMinAggregateOutputType | null
    _max: CreatorMaxAggregateOutputType | null
  }

  type GetCreatorGroupByPayload<T extends creatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreatorGroupByOutputType[P]>
            : GetScalarType<T[P], CreatorGroupByOutputType[P]>
        }
      >
    >


  export type creatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    creatorId?: boolean
    creatorName?: boolean
    dob?: boolean
    media?: boolean | creator$mediaArgs<ExtArgs>
    _count?: boolean | CreatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creator"]>

  export type creatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    creatorId?: boolean
    creatorName?: boolean
    dob?: boolean
  }, ExtArgs["result"]["creator"]>

  export type creatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    creatorId?: boolean
    creatorName?: boolean
    dob?: boolean
  }, ExtArgs["result"]["creator"]>

  export type creatorSelectScalar = {
    creatorId?: boolean
    creatorName?: boolean
    dob?: boolean
  }

  export type creatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"creatorId" | "creatorName" | "dob", ExtArgs["result"]["creator"]>
  export type creatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | creator$mediaArgs<ExtArgs>
    _count?: boolean | CreatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type creatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type creatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $creatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "creator"
    objects: {
      media: Prisma.$mediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      creatorId: number
      creatorName: string
      dob: Date | null
    }, ExtArgs["result"]["creator"]>
    composites: {}
  }

  type creatorGetPayload<S extends boolean | null | undefined | creatorDefaultArgs> = $Result.GetResult<Prisma.$creatorPayload, S>

  type creatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<creatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreatorCountAggregateInputType | true
    }

  export interface creatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['creator'], meta: { name: 'creator' } }
    /**
     * Find zero or one Creator that matches the filter.
     * @param {creatorFindUniqueArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends creatorFindUniqueArgs>(args: SelectSubset<T, creatorFindUniqueArgs<ExtArgs>>): Prisma__creatorClient<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Creator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {creatorFindUniqueOrThrowArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends creatorFindUniqueOrThrowArgs>(args: SelectSubset<T, creatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__creatorClient<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creatorFindFirstArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends creatorFindFirstArgs>(args?: SelectSubset<T, creatorFindFirstArgs<ExtArgs>>): Prisma__creatorClient<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creatorFindFirstOrThrowArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends creatorFindFirstOrThrowArgs>(args?: SelectSubset<T, creatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__creatorClient<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Creators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Creators
     * const creators = await prisma.creator.findMany()
     * 
     * // Get first 10 Creators
     * const creators = await prisma.creator.findMany({ take: 10 })
     * 
     * // Only select the `creatorId`
     * const creatorWithCreatorIdOnly = await prisma.creator.findMany({ select: { creatorId: true } })
     * 
     */
    findMany<T extends creatorFindManyArgs>(args?: SelectSubset<T, creatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Creator.
     * @param {creatorCreateArgs} args - Arguments to create a Creator.
     * @example
     * // Create one Creator
     * const Creator = await prisma.creator.create({
     *   data: {
     *     // ... data to create a Creator
     *   }
     * })
     * 
     */
    create<T extends creatorCreateArgs>(args: SelectSubset<T, creatorCreateArgs<ExtArgs>>): Prisma__creatorClient<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Creators.
     * @param {creatorCreateManyArgs} args - Arguments to create many Creators.
     * @example
     * // Create many Creators
     * const creator = await prisma.creator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends creatorCreateManyArgs>(args?: SelectSubset<T, creatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Creators and returns the data saved in the database.
     * @param {creatorCreateManyAndReturnArgs} args - Arguments to create many Creators.
     * @example
     * // Create many Creators
     * const creator = await prisma.creator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Creators and only return the `creatorId`
     * const creatorWithCreatorIdOnly = await prisma.creator.createManyAndReturn({
     *   select: { creatorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends creatorCreateManyAndReturnArgs>(args?: SelectSubset<T, creatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Creator.
     * @param {creatorDeleteArgs} args - Arguments to delete one Creator.
     * @example
     * // Delete one Creator
     * const Creator = await prisma.creator.delete({
     *   where: {
     *     // ... filter to delete one Creator
     *   }
     * })
     * 
     */
    delete<T extends creatorDeleteArgs>(args: SelectSubset<T, creatorDeleteArgs<ExtArgs>>): Prisma__creatorClient<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Creator.
     * @param {creatorUpdateArgs} args - Arguments to update one Creator.
     * @example
     * // Update one Creator
     * const creator = await prisma.creator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends creatorUpdateArgs>(args: SelectSubset<T, creatorUpdateArgs<ExtArgs>>): Prisma__creatorClient<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Creators.
     * @param {creatorDeleteManyArgs} args - Arguments to filter Creators to delete.
     * @example
     * // Delete a few Creators
     * const { count } = await prisma.creator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends creatorDeleteManyArgs>(args?: SelectSubset<T, creatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Creators
     * const creator = await prisma.creator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends creatorUpdateManyArgs>(args: SelectSubset<T, creatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creators and returns the data updated in the database.
     * @param {creatorUpdateManyAndReturnArgs} args - Arguments to update many Creators.
     * @example
     * // Update many Creators
     * const creator = await prisma.creator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Creators and only return the `creatorId`
     * const creatorWithCreatorIdOnly = await prisma.creator.updateManyAndReturn({
     *   select: { creatorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends creatorUpdateManyAndReturnArgs>(args: SelectSubset<T, creatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Creator.
     * @param {creatorUpsertArgs} args - Arguments to update or create a Creator.
     * @example
     * // Update or create a Creator
     * const creator = await prisma.creator.upsert({
     *   create: {
     *     // ... data to create a Creator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Creator we want to update
     *   }
     * })
     */
    upsert<T extends creatorUpsertArgs>(args: SelectSubset<T, creatorUpsertArgs<ExtArgs>>): Prisma__creatorClient<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creatorCountArgs} args - Arguments to filter Creators to count.
     * @example
     * // Count the number of Creators
     * const count = await prisma.creator.count({
     *   where: {
     *     // ... the filter for the Creators we want to count
     *   }
     * })
    **/
    count<T extends creatorCountArgs>(
      args?: Subset<T, creatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Creator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreatorAggregateArgs>(args: Subset<T, CreatorAggregateArgs>): Prisma.PrismaPromise<GetCreatorAggregateType<T>>

    /**
     * Group by Creator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creatorGroupByArgs} args - Group by arguments.
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
      T extends creatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: creatorGroupByArgs['orderBy'] }
        : { orderBy?: creatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, creatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the creator model
   */
  readonly fields: creatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for creator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__creatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends creator$mediaArgs<ExtArgs> = {}>(args?: Subset<T, creator$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the creator model
   */
  interface creatorFieldRefs {
    readonly creatorId: FieldRef<"creator", 'Int'>
    readonly creatorName: FieldRef<"creator", 'String'>
    readonly dob: FieldRef<"creator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * creator findUnique
   */
  export type creatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creatorInclude<ExtArgs> | null
    /**
     * Filter, which creator to fetch.
     */
    where: creatorWhereUniqueInput
  }

  /**
   * creator findUniqueOrThrow
   */
  export type creatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creatorInclude<ExtArgs> | null
    /**
     * Filter, which creator to fetch.
     */
    where: creatorWhereUniqueInput
  }

  /**
   * creator findFirst
   */
  export type creatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creatorInclude<ExtArgs> | null
    /**
     * Filter, which creator to fetch.
     */
    where?: creatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creators to fetch.
     */
    orderBy?: creatorOrderByWithRelationInput | creatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for creators.
     */
    cursor?: creatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of creators.
     */
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }

  /**
   * creator findFirstOrThrow
   */
  export type creatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creatorInclude<ExtArgs> | null
    /**
     * Filter, which creator to fetch.
     */
    where?: creatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creators to fetch.
     */
    orderBy?: creatorOrderByWithRelationInput | creatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for creators.
     */
    cursor?: creatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of creators.
     */
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }

  /**
   * creator findMany
   */
  export type creatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creatorInclude<ExtArgs> | null
    /**
     * Filter, which creators to fetch.
     */
    where?: creatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creators to fetch.
     */
    orderBy?: creatorOrderByWithRelationInput | creatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing creators.
     */
    cursor?: creatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creators.
     */
    skip?: number
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }

  /**
   * creator create
   */
  export type creatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creatorInclude<ExtArgs> | null
    /**
     * The data needed to create a creator.
     */
    data: XOR<creatorCreateInput, creatorUncheckedCreateInput>
  }

  /**
   * creator createMany
   */
  export type creatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many creators.
     */
    data: creatorCreateManyInput | creatorCreateManyInput[]
  }

  /**
   * creator createManyAndReturn
   */
  export type creatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * The data used to create many creators.
     */
    data: creatorCreateManyInput | creatorCreateManyInput[]
  }

  /**
   * creator update
   */
  export type creatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creatorInclude<ExtArgs> | null
    /**
     * The data needed to update a creator.
     */
    data: XOR<creatorUpdateInput, creatorUncheckedUpdateInput>
    /**
     * Choose, which creator to update.
     */
    where: creatorWhereUniqueInput
  }

  /**
   * creator updateMany
   */
  export type creatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update creators.
     */
    data: XOR<creatorUpdateManyMutationInput, creatorUncheckedUpdateManyInput>
    /**
     * Filter which creators to update
     */
    where?: creatorWhereInput
    /**
     * Limit how many creators to update.
     */
    limit?: number
  }

  /**
   * creator updateManyAndReturn
   */
  export type creatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * The data used to update creators.
     */
    data: XOR<creatorUpdateManyMutationInput, creatorUncheckedUpdateManyInput>
    /**
     * Filter which creators to update
     */
    where?: creatorWhereInput
    /**
     * Limit how many creators to update.
     */
    limit?: number
  }

  /**
   * creator upsert
   */
  export type creatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creatorInclude<ExtArgs> | null
    /**
     * The filter to search for the creator to update in case it exists.
     */
    where: creatorWhereUniqueInput
    /**
     * In case the creator found by the `where` argument doesn't exist, create a new creator with this data.
     */
    create: XOR<creatorCreateInput, creatorUncheckedCreateInput>
    /**
     * In case the creator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<creatorUpdateInput, creatorUncheckedUpdateInput>
  }

  /**
   * creator delete
   */
  export type creatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creatorInclude<ExtArgs> | null
    /**
     * Filter which creator to delete.
     */
    where: creatorWhereUniqueInput
  }

  /**
   * creator deleteMany
   */
  export type creatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which creators to delete
     */
    where?: creatorWhereInput
    /**
     * Limit how many creators to delete.
     */
    limit?: number
  }

  /**
   * creator.media
   */
  export type creator$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    cursor?: mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * creator without action
   */
  export type creatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creator
     */
    select?: creatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creator
     */
    omit?: creatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creatorInclude<ExtArgs> | null
  }


  /**
   * Model media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    mediaId: number | null
    creatorId: number | null
    typeId: number | null
  }

  export type MediaSumAggregateOutputType = {
    mediaId: number | null
    creatorId: number | null
    typeId: number | null
  }

  export type MediaMinAggregateOutputType = {
    mediaId: number | null
    creatorId: number | null
    typeId: number | null
    mediaName: string | null
    released: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    mediaId: number | null
    creatorId: number | null
    typeId: number | null
    mediaName: string | null
    released: Date | null
  }

  export type MediaCountAggregateOutputType = {
    mediaId: number
    creatorId: number
    typeId: number
    mediaName: number
    released: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    mediaId?: true
    creatorId?: true
    typeId?: true
  }

  export type MediaSumAggregateInputType = {
    mediaId?: true
    creatorId?: true
    typeId?: true
  }

  export type MediaMinAggregateInputType = {
    mediaId?: true
    creatorId?: true
    typeId?: true
    mediaName?: true
    released?: true
  }

  export type MediaMaxAggregateInputType = {
    mediaId?: true
    creatorId?: true
    typeId?: true
    mediaName?: true
    released?: true
  }

  export type MediaCountAggregateInputType = {
    mediaId?: true
    creatorId?: true
    typeId?: true
    mediaName?: true
    released?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to aggregate.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithAggregationInput | mediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    mediaId: number
    creatorId: number
    typeId: number
    mediaName: string
    released: Date | null
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mediaId?: boolean
    creatorId?: boolean
    typeId?: boolean
    mediaName?: boolean
    released?: boolean
    mediaType?: boolean | mediaTypeDefaultArgs<ExtArgs>
    creator?: boolean | creatorDefaultArgs<ExtArgs>
    mediaStatus?: boolean | media$mediaStatusArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>


  export type mediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mediaId?: boolean
    creatorId?: boolean
    typeId?: boolean
    mediaName?: boolean
    released?: boolean
    mediaType?: boolean | mediaTypeDefaultArgs<ExtArgs>
    creator?: boolean | creatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type mediaSelectScalar = {
    mediaId?: boolean
    creatorId?: boolean
    typeId?: boolean
    mediaName?: boolean
    released?: boolean
  }

  export type mediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mediaId" | "creatorId" | "typeId" | "mediaName" | "released", ExtArgs["result"]["media"]>
  export type mediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaType?: boolean | mediaTypeDefaultArgs<ExtArgs>
    creator?: boolean | creatorDefaultArgs<ExtArgs>
    mediaStatus?: boolean | media$mediaStatusArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaType?: boolean | mediaTypeDefaultArgs<ExtArgs>
    creator?: boolean | creatorDefaultArgs<ExtArgs>
  }

  export type $mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "media"
    objects: {
      mediaType: Prisma.$mediaTypePayload<ExtArgs>
      creator: Prisma.$creatorPayload<ExtArgs>
      mediaStatus: Prisma.$mediaStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      mediaId: number
      creatorId: number
      typeId: number
      mediaName: string
      released: Date | null
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type mediaGetPayload<S extends boolean | null | undefined | mediaDefaultArgs> = $Result.GetResult<Prisma.$mediaPayload, S>

  type mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['media'], meta: { name: 'media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {mediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mediaFindUniqueArgs>(args: SelectSubset<T, mediaFindUniqueArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mediaFindFirstArgs>(args?: SelectSubset<T, mediaFindFirstArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `mediaId`
     * const mediaWithMediaIdOnly = await prisma.media.findMany({ select: { mediaId: true } })
     * 
     */
    findMany<T extends mediaFindManyArgs>(args?: SelectSubset<T, mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {mediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends mediaDeleteArgs>(args: SelectSubset<T, mediaDeleteArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {mediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mediaUpdateArgs>(args: SelectSubset<T, mediaUpdateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {mediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mediaDeleteManyArgs>(args?: SelectSubset<T, mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mediaUpdateManyArgs>(args: SelectSubset<T, mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {mediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `mediaId`
     * const mediaWithMediaIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { mediaId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mediaUpdateManyAndReturnArgs>(args: SelectSubset<T, mediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends mediaCountArgs>(
      args?: Subset<T, mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaGroupByArgs} args - Group by arguments.
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
      T extends mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mediaGroupByArgs['orderBy'] }
        : { orderBy?: mediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the media model
   */
  readonly fields: mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mediaType<T extends mediaTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mediaTypeDefaultArgs<ExtArgs>>): Prisma__mediaTypeClient<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends creatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, creatorDefaultArgs<ExtArgs>>): Prisma__creatorClient<$Result.GetResult<Prisma.$creatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mediaStatus<T extends media$mediaStatusArgs<ExtArgs> = {}>(args?: Subset<T, media$mediaStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the media model
   */
  interface mediaFieldRefs {
    readonly mediaId: FieldRef<"media", 'Int'>
    readonly creatorId: FieldRef<"media", 'Int'>
    readonly typeId: FieldRef<"media", 'Int'>
    readonly mediaName: FieldRef<"media", 'String'>
    readonly released: FieldRef<"media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * media findUnique
   */
  export type mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findUniqueOrThrow
   */
  export type mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findFirst
   */
  export type mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findFirstOrThrow
   */
  export type mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findMany
   */
  export type mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media update
   */
  export type mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The data needed to update a media.
     */
    data: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
    /**
     * Choose, which media to update.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media updateMany
   */
  export type mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update media.
     */
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyInput>
    /**
     * Filter which media to update
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to update.
     */
    limit?: number
  }

  /**
   * media updateManyAndReturn
   */
  export type mediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * The data used to update media.
     */
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyInput>
    /**
     * Filter which media to update
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * media delete
   */
  export type mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter which media to delete.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media deleteMany
   */
  export type mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to delete
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to delete.
     */
    limit?: number
  }

  /**
   * media.mediaStatus
   */
  export type media$mediaStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    where?: mediaStatusWhereInput
    orderBy?: mediaStatusOrderByWithRelationInput | mediaStatusOrderByWithRelationInput[]
    cursor?: mediaStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaStatusScalarFieldEnum | MediaStatusScalarFieldEnum[]
  }

  /**
   * media without action
   */
  export type mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
  }


  /**
   * Model mediaType
   */

  export type AggregateMediaType = {
    _count: MediaTypeCountAggregateOutputType | null
    _avg: MediaTypeAvgAggregateOutputType | null
    _sum: MediaTypeSumAggregateOutputType | null
    _min: MediaTypeMinAggregateOutputType | null
    _max: MediaTypeMaxAggregateOutputType | null
  }

  export type MediaTypeAvgAggregateOutputType = {
    typeId: number | null
  }

  export type MediaTypeSumAggregateOutputType = {
    typeId: number | null
  }

  export type MediaTypeMinAggregateOutputType = {
    typeId: number | null
    typeNme: string | null
  }

  export type MediaTypeMaxAggregateOutputType = {
    typeId: number | null
    typeNme: string | null
  }

  export type MediaTypeCountAggregateOutputType = {
    typeId: number
    typeNme: number
    _all: number
  }


  export type MediaTypeAvgAggregateInputType = {
    typeId?: true
  }

  export type MediaTypeSumAggregateInputType = {
    typeId?: true
  }

  export type MediaTypeMinAggregateInputType = {
    typeId?: true
    typeNme?: true
  }

  export type MediaTypeMaxAggregateInputType = {
    typeId?: true
    typeNme?: true
  }

  export type MediaTypeCountAggregateInputType = {
    typeId?: true
    typeNme?: true
    _all?: true
  }

  export type MediaTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mediaType to aggregate.
     */
    where?: mediaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediaTypes to fetch.
     */
    orderBy?: mediaTypeOrderByWithRelationInput | mediaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mediaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediaTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mediaTypes
    **/
    _count?: true | MediaTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaTypeMaxAggregateInputType
  }

  export type GetMediaTypeAggregateType<T extends MediaTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaType[P]>
      : GetScalarType<T[P], AggregateMediaType[P]>
  }




  export type mediaTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaTypeWhereInput
    orderBy?: mediaTypeOrderByWithAggregationInput | mediaTypeOrderByWithAggregationInput[]
    by: MediaTypeScalarFieldEnum[] | MediaTypeScalarFieldEnum
    having?: mediaTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaTypeCountAggregateInputType | true
    _avg?: MediaTypeAvgAggregateInputType
    _sum?: MediaTypeSumAggregateInputType
    _min?: MediaTypeMinAggregateInputType
    _max?: MediaTypeMaxAggregateInputType
  }

  export type MediaTypeGroupByOutputType = {
    typeId: number
    typeNme: string
    _count: MediaTypeCountAggregateOutputType | null
    _avg: MediaTypeAvgAggregateOutputType | null
    _sum: MediaTypeSumAggregateOutputType | null
    _min: MediaTypeMinAggregateOutputType | null
    _max: MediaTypeMaxAggregateOutputType | null
  }

  type GetMediaTypeGroupByPayload<T extends mediaTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MediaTypeGroupByOutputType[P]>
        }
      >
    >


  export type mediaTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    typeId?: boolean
    typeNme?: boolean
    media?: boolean | mediaType$mediaArgs<ExtArgs>
    _count?: boolean | MediaTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaType"]>

  export type mediaTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    typeId?: boolean
    typeNme?: boolean
  }, ExtArgs["result"]["mediaType"]>

  export type mediaTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    typeId?: boolean
    typeNme?: boolean
  }, ExtArgs["result"]["mediaType"]>

  export type mediaTypeSelectScalar = {
    typeId?: boolean
    typeNme?: boolean
  }

  export type mediaTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"typeId" | "typeNme", ExtArgs["result"]["mediaType"]>
  export type mediaTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | mediaType$mediaArgs<ExtArgs>
    _count?: boolean | MediaTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mediaTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type mediaTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $mediaTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mediaType"
    objects: {
      media: Prisma.$mediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      typeId: number
      typeNme: string
    }, ExtArgs["result"]["mediaType"]>
    composites: {}
  }

  type mediaTypeGetPayload<S extends boolean | null | undefined | mediaTypeDefaultArgs> = $Result.GetResult<Prisma.$mediaTypePayload, S>

  type mediaTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mediaTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaTypeCountAggregateInputType | true
    }

  export interface mediaTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mediaType'], meta: { name: 'mediaType' } }
    /**
     * Find zero or one MediaType that matches the filter.
     * @param {mediaTypeFindUniqueArgs} args - Arguments to find a MediaType
     * @example
     * // Get one MediaType
     * const mediaType = await prisma.mediaType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mediaTypeFindUniqueArgs>(args: SelectSubset<T, mediaTypeFindUniqueArgs<ExtArgs>>): Prisma__mediaTypeClient<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mediaTypeFindUniqueOrThrowArgs} args - Arguments to find a MediaType
     * @example
     * // Get one MediaType
     * const mediaType = await prisma.mediaType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mediaTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, mediaTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mediaTypeClient<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaTypeFindFirstArgs} args - Arguments to find a MediaType
     * @example
     * // Get one MediaType
     * const mediaType = await prisma.mediaType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mediaTypeFindFirstArgs>(args?: SelectSubset<T, mediaTypeFindFirstArgs<ExtArgs>>): Prisma__mediaTypeClient<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaTypeFindFirstOrThrowArgs} args - Arguments to find a MediaType
     * @example
     * // Get one MediaType
     * const mediaType = await prisma.mediaType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mediaTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, mediaTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__mediaTypeClient<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaTypes
     * const mediaTypes = await prisma.mediaType.findMany()
     * 
     * // Get first 10 MediaTypes
     * const mediaTypes = await prisma.mediaType.findMany({ take: 10 })
     * 
     * // Only select the `typeId`
     * const mediaTypeWithTypeIdOnly = await prisma.mediaType.findMany({ select: { typeId: true } })
     * 
     */
    findMany<T extends mediaTypeFindManyArgs>(args?: SelectSubset<T, mediaTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaType.
     * @param {mediaTypeCreateArgs} args - Arguments to create a MediaType.
     * @example
     * // Create one MediaType
     * const MediaType = await prisma.mediaType.create({
     *   data: {
     *     // ... data to create a MediaType
     *   }
     * })
     * 
     */
    create<T extends mediaTypeCreateArgs>(args: SelectSubset<T, mediaTypeCreateArgs<ExtArgs>>): Prisma__mediaTypeClient<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaTypes.
     * @param {mediaTypeCreateManyArgs} args - Arguments to create many MediaTypes.
     * @example
     * // Create many MediaTypes
     * const mediaType = await prisma.mediaType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mediaTypeCreateManyArgs>(args?: SelectSubset<T, mediaTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaTypes and returns the data saved in the database.
     * @param {mediaTypeCreateManyAndReturnArgs} args - Arguments to create many MediaTypes.
     * @example
     * // Create many MediaTypes
     * const mediaType = await prisma.mediaType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaTypes and only return the `typeId`
     * const mediaTypeWithTypeIdOnly = await prisma.mediaType.createManyAndReturn({
     *   select: { typeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mediaTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, mediaTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaType.
     * @param {mediaTypeDeleteArgs} args - Arguments to delete one MediaType.
     * @example
     * // Delete one MediaType
     * const MediaType = await prisma.mediaType.delete({
     *   where: {
     *     // ... filter to delete one MediaType
     *   }
     * })
     * 
     */
    delete<T extends mediaTypeDeleteArgs>(args: SelectSubset<T, mediaTypeDeleteArgs<ExtArgs>>): Prisma__mediaTypeClient<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaType.
     * @param {mediaTypeUpdateArgs} args - Arguments to update one MediaType.
     * @example
     * // Update one MediaType
     * const mediaType = await prisma.mediaType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mediaTypeUpdateArgs>(args: SelectSubset<T, mediaTypeUpdateArgs<ExtArgs>>): Prisma__mediaTypeClient<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaTypes.
     * @param {mediaTypeDeleteManyArgs} args - Arguments to filter MediaTypes to delete.
     * @example
     * // Delete a few MediaTypes
     * const { count } = await prisma.mediaType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mediaTypeDeleteManyArgs>(args?: SelectSubset<T, mediaTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaTypes
     * const mediaType = await prisma.mediaType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mediaTypeUpdateManyArgs>(args: SelectSubset<T, mediaTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaTypes and returns the data updated in the database.
     * @param {mediaTypeUpdateManyAndReturnArgs} args - Arguments to update many MediaTypes.
     * @example
     * // Update many MediaTypes
     * const mediaType = await prisma.mediaType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaTypes and only return the `typeId`
     * const mediaTypeWithTypeIdOnly = await prisma.mediaType.updateManyAndReturn({
     *   select: { typeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mediaTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, mediaTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaType.
     * @param {mediaTypeUpsertArgs} args - Arguments to update or create a MediaType.
     * @example
     * // Update or create a MediaType
     * const mediaType = await prisma.mediaType.upsert({
     *   create: {
     *     // ... data to create a MediaType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaType we want to update
     *   }
     * })
     */
    upsert<T extends mediaTypeUpsertArgs>(args: SelectSubset<T, mediaTypeUpsertArgs<ExtArgs>>): Prisma__mediaTypeClient<$Result.GetResult<Prisma.$mediaTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaTypeCountArgs} args - Arguments to filter MediaTypes to count.
     * @example
     * // Count the number of MediaTypes
     * const count = await prisma.mediaType.count({
     *   where: {
     *     // ... the filter for the MediaTypes we want to count
     *   }
     * })
    **/
    count<T extends mediaTypeCountArgs>(
      args?: Subset<T, mediaTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaTypeAggregateArgs>(args: Subset<T, MediaTypeAggregateArgs>): Prisma.PrismaPromise<GetMediaTypeAggregateType<T>>

    /**
     * Group by MediaType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaTypeGroupByArgs} args - Group by arguments.
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
      T extends mediaTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mediaTypeGroupByArgs['orderBy'] }
        : { orderBy?: mediaTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, mediaTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mediaType model
   */
  readonly fields: mediaTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mediaType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mediaTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends mediaType$mediaArgs<ExtArgs> = {}>(args?: Subset<T, mediaType$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mediaType model
   */
  interface mediaTypeFieldRefs {
    readonly typeId: FieldRef<"mediaType", 'Int'>
    readonly typeNme: FieldRef<"mediaType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mediaType findUnique
   */
  export type mediaTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaTypeInclude<ExtArgs> | null
    /**
     * Filter, which mediaType to fetch.
     */
    where: mediaTypeWhereUniqueInput
  }

  /**
   * mediaType findUniqueOrThrow
   */
  export type mediaTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaTypeInclude<ExtArgs> | null
    /**
     * Filter, which mediaType to fetch.
     */
    where: mediaTypeWhereUniqueInput
  }

  /**
   * mediaType findFirst
   */
  export type mediaTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaTypeInclude<ExtArgs> | null
    /**
     * Filter, which mediaType to fetch.
     */
    where?: mediaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediaTypes to fetch.
     */
    orderBy?: mediaTypeOrderByWithRelationInput | mediaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mediaTypes.
     */
    cursor?: mediaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediaTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mediaTypes.
     */
    distinct?: MediaTypeScalarFieldEnum | MediaTypeScalarFieldEnum[]
  }

  /**
   * mediaType findFirstOrThrow
   */
  export type mediaTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaTypeInclude<ExtArgs> | null
    /**
     * Filter, which mediaType to fetch.
     */
    where?: mediaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediaTypes to fetch.
     */
    orderBy?: mediaTypeOrderByWithRelationInput | mediaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mediaTypes.
     */
    cursor?: mediaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediaTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mediaTypes.
     */
    distinct?: MediaTypeScalarFieldEnum | MediaTypeScalarFieldEnum[]
  }

  /**
   * mediaType findMany
   */
  export type mediaTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaTypeInclude<ExtArgs> | null
    /**
     * Filter, which mediaTypes to fetch.
     */
    where?: mediaTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediaTypes to fetch.
     */
    orderBy?: mediaTypeOrderByWithRelationInput | mediaTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mediaTypes.
     */
    cursor?: mediaTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediaTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediaTypes.
     */
    skip?: number
    distinct?: MediaTypeScalarFieldEnum | MediaTypeScalarFieldEnum[]
  }

  /**
   * mediaType create
   */
  export type mediaTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a mediaType.
     */
    data: XOR<mediaTypeCreateInput, mediaTypeUncheckedCreateInput>
  }

  /**
   * mediaType createMany
   */
  export type mediaTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mediaTypes.
     */
    data: mediaTypeCreateManyInput | mediaTypeCreateManyInput[]
  }

  /**
   * mediaType createManyAndReturn
   */
  export type mediaTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * The data used to create many mediaTypes.
     */
    data: mediaTypeCreateManyInput | mediaTypeCreateManyInput[]
  }

  /**
   * mediaType update
   */
  export type mediaTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a mediaType.
     */
    data: XOR<mediaTypeUpdateInput, mediaTypeUncheckedUpdateInput>
    /**
     * Choose, which mediaType to update.
     */
    where: mediaTypeWhereUniqueInput
  }

  /**
   * mediaType updateMany
   */
  export type mediaTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mediaTypes.
     */
    data: XOR<mediaTypeUpdateManyMutationInput, mediaTypeUncheckedUpdateManyInput>
    /**
     * Filter which mediaTypes to update
     */
    where?: mediaTypeWhereInput
    /**
     * Limit how many mediaTypes to update.
     */
    limit?: number
  }

  /**
   * mediaType updateManyAndReturn
   */
  export type mediaTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * The data used to update mediaTypes.
     */
    data: XOR<mediaTypeUpdateManyMutationInput, mediaTypeUncheckedUpdateManyInput>
    /**
     * Filter which mediaTypes to update
     */
    where?: mediaTypeWhereInput
    /**
     * Limit how many mediaTypes to update.
     */
    limit?: number
  }

  /**
   * mediaType upsert
   */
  export type mediaTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the mediaType to update in case it exists.
     */
    where: mediaTypeWhereUniqueInput
    /**
     * In case the mediaType found by the `where` argument doesn't exist, create a new mediaType with this data.
     */
    create: XOR<mediaTypeCreateInput, mediaTypeUncheckedCreateInput>
    /**
     * In case the mediaType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mediaTypeUpdateInput, mediaTypeUncheckedUpdateInput>
  }

  /**
   * mediaType delete
   */
  export type mediaTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaTypeInclude<ExtArgs> | null
    /**
     * Filter which mediaType to delete.
     */
    where: mediaTypeWhereUniqueInput
  }

  /**
   * mediaType deleteMany
   */
  export type mediaTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mediaTypes to delete
     */
    where?: mediaTypeWhereInput
    /**
     * Limit how many mediaTypes to delete.
     */
    limit?: number
  }

  /**
   * mediaType.media
   */
  export type mediaType$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    cursor?: mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * mediaType without action
   */
  export type mediaTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaType
     */
    select?: mediaTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaType
     */
    omit?: mediaTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaTypeInclude<ExtArgs> | null
  }


  /**
   * Model mediaStatus
   */

  export type AggregateMediaStatus = {
    _count: MediaStatusCountAggregateOutputType | null
    _avg: MediaStatusAvgAggregateOutputType | null
    _sum: MediaStatusSumAggregateOutputType | null
    _min: MediaStatusMinAggregateOutputType | null
    _max: MediaStatusMaxAggregateOutputType | null
  }

  export type MediaStatusAvgAggregateOutputType = {
    mediaStatus: number | null
    userId: number | null
    mediaId: number | null
  }

  export type MediaStatusSumAggregateOutputType = {
    mediaStatus: number | null
    userId: number | null
    mediaId: number | null
  }

  export type MediaStatusMinAggregateOutputType = {
    mediaStatus: number | null
    userId: number | null
    mediaId: number | null
    mark: string | null
  }

  export type MediaStatusMaxAggregateOutputType = {
    mediaStatus: number | null
    userId: number | null
    mediaId: number | null
    mark: string | null
  }

  export type MediaStatusCountAggregateOutputType = {
    mediaStatus: number
    userId: number
    mediaId: number
    mark: number
    _all: number
  }


  export type MediaStatusAvgAggregateInputType = {
    mediaStatus?: true
    userId?: true
    mediaId?: true
  }

  export type MediaStatusSumAggregateInputType = {
    mediaStatus?: true
    userId?: true
    mediaId?: true
  }

  export type MediaStatusMinAggregateInputType = {
    mediaStatus?: true
    userId?: true
    mediaId?: true
    mark?: true
  }

  export type MediaStatusMaxAggregateInputType = {
    mediaStatus?: true
    userId?: true
    mediaId?: true
    mark?: true
  }

  export type MediaStatusCountAggregateInputType = {
    mediaStatus?: true
    userId?: true
    mediaId?: true
    mark?: true
    _all?: true
  }

  export type MediaStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mediaStatus to aggregate.
     */
    where?: mediaStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediaStatuses to fetch.
     */
    orderBy?: mediaStatusOrderByWithRelationInput | mediaStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mediaStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediaStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediaStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mediaStatuses
    **/
    _count?: true | MediaStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaStatusMaxAggregateInputType
  }

  export type GetMediaStatusAggregateType<T extends MediaStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaStatus[P]>
      : GetScalarType<T[P], AggregateMediaStatus[P]>
  }




  export type mediaStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaStatusWhereInput
    orderBy?: mediaStatusOrderByWithAggregationInput | mediaStatusOrderByWithAggregationInput[]
    by: MediaStatusScalarFieldEnum[] | MediaStatusScalarFieldEnum
    having?: mediaStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaStatusCountAggregateInputType | true
    _avg?: MediaStatusAvgAggregateInputType
    _sum?: MediaStatusSumAggregateInputType
    _min?: MediaStatusMinAggregateInputType
    _max?: MediaStatusMaxAggregateInputType
  }

  export type MediaStatusGroupByOutputType = {
    mediaStatus: number
    userId: number
    mediaId: number
    mark: string
    _count: MediaStatusCountAggregateOutputType | null
    _avg: MediaStatusAvgAggregateOutputType | null
    _sum: MediaStatusSumAggregateOutputType | null
    _min: MediaStatusMinAggregateOutputType | null
    _max: MediaStatusMaxAggregateOutputType | null
  }

  type GetMediaStatusGroupByPayload<T extends mediaStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaStatusGroupByOutputType[P]>
            : GetScalarType<T[P], MediaStatusGroupByOutputType[P]>
        }
      >
    >


  export type mediaStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mediaStatus?: boolean
    userId?: boolean
    mediaId?: boolean
    mark?: boolean
    media?: boolean | mediaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaStatus"]>

  export type mediaStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mediaStatus?: boolean
    userId?: boolean
    mediaId?: boolean
    mark?: boolean
    media?: boolean | mediaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaStatus"]>

  export type mediaStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mediaStatus?: boolean
    userId?: boolean
    mediaId?: boolean
    mark?: boolean
    media?: boolean | mediaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaStatus"]>

  export type mediaStatusSelectScalar = {
    mediaStatus?: boolean
    userId?: boolean
    mediaId?: boolean
    mark?: boolean
  }

  export type mediaStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mediaStatus" | "userId" | "mediaId" | "mark", ExtArgs["result"]["mediaStatus"]>
  export type mediaStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | mediaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type mediaStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | mediaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type mediaStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | mediaDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $mediaStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mediaStatus"
    objects: {
      media: Prisma.$mediaPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      mediaStatus: number
      userId: number
      mediaId: number
      mark: string
    }, ExtArgs["result"]["mediaStatus"]>
    composites: {}
  }

  type mediaStatusGetPayload<S extends boolean | null | undefined | mediaStatusDefaultArgs> = $Result.GetResult<Prisma.$mediaStatusPayload, S>

  type mediaStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mediaStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaStatusCountAggregateInputType | true
    }

  export interface mediaStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mediaStatus'], meta: { name: 'mediaStatus' } }
    /**
     * Find zero or one MediaStatus that matches the filter.
     * @param {mediaStatusFindUniqueArgs} args - Arguments to find a MediaStatus
     * @example
     * // Get one MediaStatus
     * const mediaStatus = await prisma.mediaStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mediaStatusFindUniqueArgs>(args: SelectSubset<T, mediaStatusFindUniqueArgs<ExtArgs>>): Prisma__mediaStatusClient<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mediaStatusFindUniqueOrThrowArgs} args - Arguments to find a MediaStatus
     * @example
     * // Get one MediaStatus
     * const mediaStatus = await prisma.mediaStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mediaStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, mediaStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mediaStatusClient<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaStatusFindFirstArgs} args - Arguments to find a MediaStatus
     * @example
     * // Get one MediaStatus
     * const mediaStatus = await prisma.mediaStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mediaStatusFindFirstArgs>(args?: SelectSubset<T, mediaStatusFindFirstArgs<ExtArgs>>): Prisma__mediaStatusClient<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaStatusFindFirstOrThrowArgs} args - Arguments to find a MediaStatus
     * @example
     * // Get one MediaStatus
     * const mediaStatus = await prisma.mediaStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mediaStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, mediaStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__mediaStatusClient<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaStatuses
     * const mediaStatuses = await prisma.mediaStatus.findMany()
     * 
     * // Get first 10 MediaStatuses
     * const mediaStatuses = await prisma.mediaStatus.findMany({ take: 10 })
     * 
     * // Only select the `mediaStatus`
     * const mediaStatusWithMediaStatusOnly = await prisma.mediaStatus.findMany({ select: { mediaStatus: true } })
     * 
     */
    findMany<T extends mediaStatusFindManyArgs>(args?: SelectSubset<T, mediaStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaStatus.
     * @param {mediaStatusCreateArgs} args - Arguments to create a MediaStatus.
     * @example
     * // Create one MediaStatus
     * const MediaStatus = await prisma.mediaStatus.create({
     *   data: {
     *     // ... data to create a MediaStatus
     *   }
     * })
     * 
     */
    create<T extends mediaStatusCreateArgs>(args: SelectSubset<T, mediaStatusCreateArgs<ExtArgs>>): Prisma__mediaStatusClient<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaStatuses.
     * @param {mediaStatusCreateManyArgs} args - Arguments to create many MediaStatuses.
     * @example
     * // Create many MediaStatuses
     * const mediaStatus = await prisma.mediaStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mediaStatusCreateManyArgs>(args?: SelectSubset<T, mediaStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaStatuses and returns the data saved in the database.
     * @param {mediaStatusCreateManyAndReturnArgs} args - Arguments to create many MediaStatuses.
     * @example
     * // Create many MediaStatuses
     * const mediaStatus = await prisma.mediaStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaStatuses and only return the `mediaStatus`
     * const mediaStatusWithMediaStatusOnly = await prisma.mediaStatus.createManyAndReturn({
     *   select: { mediaStatus: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mediaStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, mediaStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaStatus.
     * @param {mediaStatusDeleteArgs} args - Arguments to delete one MediaStatus.
     * @example
     * // Delete one MediaStatus
     * const MediaStatus = await prisma.mediaStatus.delete({
     *   where: {
     *     // ... filter to delete one MediaStatus
     *   }
     * })
     * 
     */
    delete<T extends mediaStatusDeleteArgs>(args: SelectSubset<T, mediaStatusDeleteArgs<ExtArgs>>): Prisma__mediaStatusClient<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaStatus.
     * @param {mediaStatusUpdateArgs} args - Arguments to update one MediaStatus.
     * @example
     * // Update one MediaStatus
     * const mediaStatus = await prisma.mediaStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mediaStatusUpdateArgs>(args: SelectSubset<T, mediaStatusUpdateArgs<ExtArgs>>): Prisma__mediaStatusClient<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaStatuses.
     * @param {mediaStatusDeleteManyArgs} args - Arguments to filter MediaStatuses to delete.
     * @example
     * // Delete a few MediaStatuses
     * const { count } = await prisma.mediaStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mediaStatusDeleteManyArgs>(args?: SelectSubset<T, mediaStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaStatuses
     * const mediaStatus = await prisma.mediaStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mediaStatusUpdateManyArgs>(args: SelectSubset<T, mediaStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaStatuses and returns the data updated in the database.
     * @param {mediaStatusUpdateManyAndReturnArgs} args - Arguments to update many MediaStatuses.
     * @example
     * // Update many MediaStatuses
     * const mediaStatus = await prisma.mediaStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaStatuses and only return the `mediaStatus`
     * const mediaStatusWithMediaStatusOnly = await prisma.mediaStatus.updateManyAndReturn({
     *   select: { mediaStatus: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mediaStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, mediaStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaStatus.
     * @param {mediaStatusUpsertArgs} args - Arguments to update or create a MediaStatus.
     * @example
     * // Update or create a MediaStatus
     * const mediaStatus = await prisma.mediaStatus.upsert({
     *   create: {
     *     // ... data to create a MediaStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaStatus we want to update
     *   }
     * })
     */
    upsert<T extends mediaStatusUpsertArgs>(args: SelectSubset<T, mediaStatusUpsertArgs<ExtArgs>>): Prisma__mediaStatusClient<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaStatusCountArgs} args - Arguments to filter MediaStatuses to count.
     * @example
     * // Count the number of MediaStatuses
     * const count = await prisma.mediaStatus.count({
     *   where: {
     *     // ... the filter for the MediaStatuses we want to count
     *   }
     * })
    **/
    count<T extends mediaStatusCountArgs>(
      args?: Subset<T, mediaStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaStatusAggregateArgs>(args: Subset<T, MediaStatusAggregateArgs>): Prisma.PrismaPromise<GetMediaStatusAggregateType<T>>

    /**
     * Group by MediaStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaStatusGroupByArgs} args - Group by arguments.
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
      T extends mediaStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mediaStatusGroupByArgs['orderBy'] }
        : { orderBy?: mediaStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, mediaStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mediaStatus model
   */
  readonly fields: mediaStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mediaStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mediaStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends mediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mediaDefaultArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mediaStatus model
   */
  interface mediaStatusFieldRefs {
    readonly mediaStatus: FieldRef<"mediaStatus", 'Int'>
    readonly userId: FieldRef<"mediaStatus", 'Int'>
    readonly mediaId: FieldRef<"mediaStatus", 'Int'>
    readonly mark: FieldRef<"mediaStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mediaStatus findUnique
   */
  export type mediaStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    /**
     * Filter, which mediaStatus to fetch.
     */
    where: mediaStatusWhereUniqueInput
  }

  /**
   * mediaStatus findUniqueOrThrow
   */
  export type mediaStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    /**
     * Filter, which mediaStatus to fetch.
     */
    where: mediaStatusWhereUniqueInput
  }

  /**
   * mediaStatus findFirst
   */
  export type mediaStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    /**
     * Filter, which mediaStatus to fetch.
     */
    where?: mediaStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediaStatuses to fetch.
     */
    orderBy?: mediaStatusOrderByWithRelationInput | mediaStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mediaStatuses.
     */
    cursor?: mediaStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediaStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediaStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mediaStatuses.
     */
    distinct?: MediaStatusScalarFieldEnum | MediaStatusScalarFieldEnum[]
  }

  /**
   * mediaStatus findFirstOrThrow
   */
  export type mediaStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    /**
     * Filter, which mediaStatus to fetch.
     */
    where?: mediaStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediaStatuses to fetch.
     */
    orderBy?: mediaStatusOrderByWithRelationInput | mediaStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mediaStatuses.
     */
    cursor?: mediaStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediaStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediaStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mediaStatuses.
     */
    distinct?: MediaStatusScalarFieldEnum | MediaStatusScalarFieldEnum[]
  }

  /**
   * mediaStatus findMany
   */
  export type mediaStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    /**
     * Filter, which mediaStatuses to fetch.
     */
    where?: mediaStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mediaStatuses to fetch.
     */
    orderBy?: mediaStatusOrderByWithRelationInput | mediaStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mediaStatuses.
     */
    cursor?: mediaStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mediaStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mediaStatuses.
     */
    skip?: number
    distinct?: MediaStatusScalarFieldEnum | MediaStatusScalarFieldEnum[]
  }

  /**
   * mediaStatus create
   */
  export type mediaStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a mediaStatus.
     */
    data: XOR<mediaStatusCreateInput, mediaStatusUncheckedCreateInput>
  }

  /**
   * mediaStatus createMany
   */
  export type mediaStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mediaStatuses.
     */
    data: mediaStatusCreateManyInput | mediaStatusCreateManyInput[]
  }

  /**
   * mediaStatus createManyAndReturn
   */
  export type mediaStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * The data used to create many mediaStatuses.
     */
    data: mediaStatusCreateManyInput | mediaStatusCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mediaStatus update
   */
  export type mediaStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a mediaStatus.
     */
    data: XOR<mediaStatusUpdateInput, mediaStatusUncheckedUpdateInput>
    /**
     * Choose, which mediaStatus to update.
     */
    where: mediaStatusWhereUniqueInput
  }

  /**
   * mediaStatus updateMany
   */
  export type mediaStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mediaStatuses.
     */
    data: XOR<mediaStatusUpdateManyMutationInput, mediaStatusUncheckedUpdateManyInput>
    /**
     * Filter which mediaStatuses to update
     */
    where?: mediaStatusWhereInput
    /**
     * Limit how many mediaStatuses to update.
     */
    limit?: number
  }

  /**
   * mediaStatus updateManyAndReturn
   */
  export type mediaStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * The data used to update mediaStatuses.
     */
    data: XOR<mediaStatusUpdateManyMutationInput, mediaStatusUncheckedUpdateManyInput>
    /**
     * Filter which mediaStatuses to update
     */
    where?: mediaStatusWhereInput
    /**
     * Limit how many mediaStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mediaStatus upsert
   */
  export type mediaStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the mediaStatus to update in case it exists.
     */
    where: mediaStatusWhereUniqueInput
    /**
     * In case the mediaStatus found by the `where` argument doesn't exist, create a new mediaStatus with this data.
     */
    create: XOR<mediaStatusCreateInput, mediaStatusUncheckedCreateInput>
    /**
     * In case the mediaStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mediaStatusUpdateInput, mediaStatusUncheckedUpdateInput>
  }

  /**
   * mediaStatus delete
   */
  export type mediaStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    /**
     * Filter which mediaStatus to delete.
     */
    where: mediaStatusWhereUniqueInput
  }

  /**
   * mediaStatus deleteMany
   */
  export type mediaStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mediaStatuses to delete
     */
    where?: mediaStatusWhereInput
    /**
     * Limit how many mediaStatuses to delete.
     */
    limit?: number
  }

  /**
   * mediaStatus without action
   */
  export type mediaStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userid: number | null
  }

  export type UsersSumAggregateOutputType = {
    userid: number | null
  }

  export type UsersMinAggregateOutputType = {
    userid: number | null
    email: string | null
    password: string | null
    fullName: string | null
  }

  export type UsersMaxAggregateOutputType = {
    userid: number | null
    email: string | null
    password: string | null
    fullName: string | null
  }

  export type UsersCountAggregateOutputType = {
    userid: number
    email: number
    password: number
    fullName: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userid?: true
  }

  export type UsersSumAggregateInputType = {
    userid?: true
  }

  export type UsersMinAggregateInputType = {
    userid?: true
    email?: true
    password?: true
    fullName?: true
  }

  export type UsersMaxAggregateInputType = {
    userid?: true
    email?: true
    password?: true
    fullName?: true
  }

  export type UsersCountAggregateInputType = {
    userid?: true
    email?: true
    password?: true
    fullName?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userid: number
    email: string
    password: string
    fullName: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    mediaStatus?: boolean | users$mediaStatusArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    userid?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "email" | "password" | "fullName", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediaStatus?: boolean | users$mediaStatusArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      mediaStatus: Prisma.$mediaStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userid: number
      email: string
      password: string
      fullName: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const usersWithUseridOnly = await prisma.users.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userid`
     * const usersWithUseridOnly = await prisma.users.createManyAndReturn({
     *   select: { userid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userid`
     * const usersWithUseridOnly = await prisma.users.updateManyAndReturn({
     *   select: { userid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mediaStatus<T extends users$mediaStatusArgs<ExtArgs> = {}>(args?: Subset<T, users$mediaStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly userid: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly fullName: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.mediaStatus
   */
  export type users$mediaStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mediaStatus
     */
    select?: mediaStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mediaStatus
     */
    omit?: mediaStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaStatusInclude<ExtArgs> | null
    where?: mediaStatusWhereInput
    orderBy?: mediaStatusOrderByWithRelationInput | mediaStatusOrderByWithRelationInput[]
    cursor?: mediaStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaStatusScalarFieldEnum | MediaStatusScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CreatorScalarFieldEnum: {
    creatorId: 'creatorId',
    creatorName: 'creatorName',
    dob: 'dob'
  };

  export type CreatorScalarFieldEnum = (typeof CreatorScalarFieldEnum)[keyof typeof CreatorScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    mediaId: 'mediaId',
    creatorId: 'creatorId',
    typeId: 'typeId',
    mediaName: 'mediaName',
    released: 'released'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const MediaTypeScalarFieldEnum: {
    typeId: 'typeId',
    typeNme: 'typeNme'
  };

  export type MediaTypeScalarFieldEnum = (typeof MediaTypeScalarFieldEnum)[keyof typeof MediaTypeScalarFieldEnum]


  export const MediaStatusScalarFieldEnum: {
    mediaStatus: 'mediaStatus',
    userId: 'userId',
    mediaId: 'mediaId',
    mark: 'mark'
  };

  export type MediaStatusScalarFieldEnum = (typeof MediaStatusScalarFieldEnum)[keyof typeof MediaStatusScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    userid: 'userid',
    email: 'email',
    password: 'password',
    fullName: 'fullName'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type creatorWhereInput = {
    AND?: creatorWhereInput | creatorWhereInput[]
    OR?: creatorWhereInput[]
    NOT?: creatorWhereInput | creatorWhereInput[]
    creatorId?: IntFilter<"creator"> | number
    creatorName?: StringFilter<"creator"> | string
    dob?: DateTimeNullableFilter<"creator"> | Date | string | null
    media?: MediaListRelationFilter
  }

  export type creatorOrderByWithRelationInput = {
    creatorId?: SortOrder
    creatorName?: SortOrder
    dob?: SortOrderInput | SortOrder
    media?: mediaOrderByRelationAggregateInput
  }

  export type creatorWhereUniqueInput = Prisma.AtLeast<{
    creatorId?: number
    AND?: creatorWhereInput | creatorWhereInput[]
    OR?: creatorWhereInput[]
    NOT?: creatorWhereInput | creatorWhereInput[]
    creatorName?: StringFilter<"creator"> | string
    dob?: DateTimeNullableFilter<"creator"> | Date | string | null
    media?: MediaListRelationFilter
  }, "creatorId">

  export type creatorOrderByWithAggregationInput = {
    creatorId?: SortOrder
    creatorName?: SortOrder
    dob?: SortOrderInput | SortOrder
    _count?: creatorCountOrderByAggregateInput
    _avg?: creatorAvgOrderByAggregateInput
    _max?: creatorMaxOrderByAggregateInput
    _min?: creatorMinOrderByAggregateInput
    _sum?: creatorSumOrderByAggregateInput
  }

  export type creatorScalarWhereWithAggregatesInput = {
    AND?: creatorScalarWhereWithAggregatesInput | creatorScalarWhereWithAggregatesInput[]
    OR?: creatorScalarWhereWithAggregatesInput[]
    NOT?: creatorScalarWhereWithAggregatesInput | creatorScalarWhereWithAggregatesInput[]
    creatorId?: IntWithAggregatesFilter<"creator"> | number
    creatorName?: StringWithAggregatesFilter<"creator"> | string
    dob?: DateTimeNullableWithAggregatesFilter<"creator"> | Date | string | null
  }

  export type mediaWhereInput = {
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    mediaId?: IntFilter<"media"> | number
    creatorId?: IntFilter<"media"> | number
    typeId?: IntFilter<"media"> | number
    mediaName?: StringFilter<"media"> | string
    released?: DateTimeNullableFilter<"media"> | Date | string | null
    mediaType?: XOR<MediaTypeScalarRelationFilter, mediaTypeWhereInput>
    creator?: XOR<CreatorScalarRelationFilter, creatorWhereInput>
    mediaStatus?: MediaStatusListRelationFilter
  }

  export type mediaOrderByWithRelationInput = {
    mediaId?: SortOrder
    creatorId?: SortOrder
    typeId?: SortOrder
    mediaName?: SortOrder
    released?: SortOrderInput | SortOrder
    mediaType?: mediaTypeOrderByWithRelationInput
    creator?: creatorOrderByWithRelationInput
    mediaStatus?: mediaStatusOrderByRelationAggregateInput
  }

  export type mediaWhereUniqueInput = Prisma.AtLeast<{
    mediaId?: number
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    creatorId?: IntFilter<"media"> | number
    typeId?: IntFilter<"media"> | number
    mediaName?: StringFilter<"media"> | string
    released?: DateTimeNullableFilter<"media"> | Date | string | null
    mediaType?: XOR<MediaTypeScalarRelationFilter, mediaTypeWhereInput>
    creator?: XOR<CreatorScalarRelationFilter, creatorWhereInput>
    mediaStatus?: MediaStatusListRelationFilter
  }, "mediaId">

  export type mediaOrderByWithAggregationInput = {
    mediaId?: SortOrder
    creatorId?: SortOrder
    typeId?: SortOrder
    mediaName?: SortOrder
    released?: SortOrderInput | SortOrder
    _count?: mediaCountOrderByAggregateInput
    _avg?: mediaAvgOrderByAggregateInput
    _max?: mediaMaxOrderByAggregateInput
    _min?: mediaMinOrderByAggregateInput
    _sum?: mediaSumOrderByAggregateInput
  }

  export type mediaScalarWhereWithAggregatesInput = {
    AND?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    OR?: mediaScalarWhereWithAggregatesInput[]
    NOT?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    mediaId?: IntWithAggregatesFilter<"media"> | number
    creatorId?: IntWithAggregatesFilter<"media"> | number
    typeId?: IntWithAggregatesFilter<"media"> | number
    mediaName?: StringWithAggregatesFilter<"media"> | string
    released?: DateTimeNullableWithAggregatesFilter<"media"> | Date | string | null
  }

  export type mediaTypeWhereInput = {
    AND?: mediaTypeWhereInput | mediaTypeWhereInput[]
    OR?: mediaTypeWhereInput[]
    NOT?: mediaTypeWhereInput | mediaTypeWhereInput[]
    typeId?: IntFilter<"mediaType"> | number
    typeNme?: StringFilter<"mediaType"> | string
    media?: MediaListRelationFilter
  }

  export type mediaTypeOrderByWithRelationInput = {
    typeId?: SortOrder
    typeNme?: SortOrder
    media?: mediaOrderByRelationAggregateInput
  }

  export type mediaTypeWhereUniqueInput = Prisma.AtLeast<{
    typeId?: number
    AND?: mediaTypeWhereInput | mediaTypeWhereInput[]
    OR?: mediaTypeWhereInput[]
    NOT?: mediaTypeWhereInput | mediaTypeWhereInput[]
    typeNme?: StringFilter<"mediaType"> | string
    media?: MediaListRelationFilter
  }, "typeId">

  export type mediaTypeOrderByWithAggregationInput = {
    typeId?: SortOrder
    typeNme?: SortOrder
    _count?: mediaTypeCountOrderByAggregateInput
    _avg?: mediaTypeAvgOrderByAggregateInput
    _max?: mediaTypeMaxOrderByAggregateInput
    _min?: mediaTypeMinOrderByAggregateInput
    _sum?: mediaTypeSumOrderByAggregateInput
  }

  export type mediaTypeScalarWhereWithAggregatesInput = {
    AND?: mediaTypeScalarWhereWithAggregatesInput | mediaTypeScalarWhereWithAggregatesInput[]
    OR?: mediaTypeScalarWhereWithAggregatesInput[]
    NOT?: mediaTypeScalarWhereWithAggregatesInput | mediaTypeScalarWhereWithAggregatesInput[]
    typeId?: IntWithAggregatesFilter<"mediaType"> | number
    typeNme?: StringWithAggregatesFilter<"mediaType"> | string
  }

  export type mediaStatusWhereInput = {
    AND?: mediaStatusWhereInput | mediaStatusWhereInput[]
    OR?: mediaStatusWhereInput[]
    NOT?: mediaStatusWhereInput | mediaStatusWhereInput[]
    mediaStatus?: IntFilter<"mediaStatus"> | number
    userId?: IntFilter<"mediaStatus"> | number
    mediaId?: IntFilter<"mediaStatus"> | number
    mark?: StringFilter<"mediaStatus"> | string
    media?: XOR<MediaScalarRelationFilter, mediaWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type mediaStatusOrderByWithRelationInput = {
    mediaStatus?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
    mark?: SortOrder
    media?: mediaOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type mediaStatusWhereUniqueInput = Prisma.AtLeast<{
    mediaStatus?: number
    AND?: mediaStatusWhereInput | mediaStatusWhereInput[]
    OR?: mediaStatusWhereInput[]
    NOT?: mediaStatusWhereInput | mediaStatusWhereInput[]
    userId?: IntFilter<"mediaStatus"> | number
    mediaId?: IntFilter<"mediaStatus"> | number
    mark?: StringFilter<"mediaStatus"> | string
    media?: XOR<MediaScalarRelationFilter, mediaWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "mediaStatus">

  export type mediaStatusOrderByWithAggregationInput = {
    mediaStatus?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
    mark?: SortOrder
    _count?: mediaStatusCountOrderByAggregateInput
    _avg?: mediaStatusAvgOrderByAggregateInput
    _max?: mediaStatusMaxOrderByAggregateInput
    _min?: mediaStatusMinOrderByAggregateInput
    _sum?: mediaStatusSumOrderByAggregateInput
  }

  export type mediaStatusScalarWhereWithAggregatesInput = {
    AND?: mediaStatusScalarWhereWithAggregatesInput | mediaStatusScalarWhereWithAggregatesInput[]
    OR?: mediaStatusScalarWhereWithAggregatesInput[]
    NOT?: mediaStatusScalarWhereWithAggregatesInput | mediaStatusScalarWhereWithAggregatesInput[]
    mediaStatus?: IntWithAggregatesFilter<"mediaStatus"> | number
    userId?: IntWithAggregatesFilter<"mediaStatus"> | number
    mediaId?: IntWithAggregatesFilter<"mediaStatus"> | number
    mark?: StringWithAggregatesFilter<"mediaStatus"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    userid?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    fullName?: StringFilter<"users"> | string
    mediaStatus?: MediaStatusListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    userid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    mediaStatus?: mediaStatusOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    userid?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    fullName?: StringFilter<"users"> | string
    mediaStatus?: MediaStatusListRelationFilter
  }, "userid">

  export type usersOrderByWithAggregationInput = {
    userid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    userid?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    fullName?: StringWithAggregatesFilter<"users"> | string
  }

  export type creatorCreateInput = {
    creatorName: string
    dob?: Date | string | null
    media?: mediaCreateNestedManyWithoutCreatorInput
  }

  export type creatorUncheckedCreateInput = {
    creatorId?: number
    creatorName: string
    dob?: Date | string | null
    media?: mediaUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type creatorUpdateInput = {
    creatorName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: mediaUpdateManyWithoutCreatorNestedInput
  }

  export type creatorUncheckedUpdateInput = {
    creatorId?: IntFieldUpdateOperationsInput | number
    creatorName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: mediaUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type creatorCreateManyInput = {
    creatorId?: number
    creatorName: string
    dob?: Date | string | null
  }

  export type creatorUpdateManyMutationInput = {
    creatorName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type creatorUncheckedUpdateManyInput = {
    creatorId?: IntFieldUpdateOperationsInput | number
    creatorName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mediaUpdateInput = {
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaType?: mediaTypeUpdateOneRequiredWithoutMediaNestedInput
    creator?: creatorUpdateOneRequiredWithoutMediaNestedInput
    mediaStatus?: mediaStatusUpdateManyWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateInput = {
    mediaId?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaStatus?: mediaStatusUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type mediaUpdateManyMutationInput = {
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mediaUncheckedUpdateManyInput = {
    mediaId?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mediaTypeCreateInput = {
    typeNme: string
    media?: mediaCreateNestedManyWithoutMediaTypeInput
  }

  export type mediaTypeUncheckedCreateInput = {
    typeId?: number
    typeNme: string
    media?: mediaUncheckedCreateNestedManyWithoutMediaTypeInput
  }

  export type mediaTypeUpdateInput = {
    typeNme?: StringFieldUpdateOperationsInput | string
    media?: mediaUpdateManyWithoutMediaTypeNestedInput
  }

  export type mediaTypeUncheckedUpdateInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    typeNme?: StringFieldUpdateOperationsInput | string
    media?: mediaUncheckedUpdateManyWithoutMediaTypeNestedInput
  }

  export type mediaTypeCreateManyInput = {
    typeId?: number
    typeNme: string
  }

  export type mediaTypeUpdateManyMutationInput = {
    typeNme?: StringFieldUpdateOperationsInput | string
  }

  export type mediaTypeUncheckedUpdateManyInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    typeNme?: StringFieldUpdateOperationsInput | string
  }

  export type mediaStatusCreateInput = {
    mark: string
    media: mediaCreateNestedOneWithoutMediaStatusInput
    users: usersCreateNestedOneWithoutMediaStatusInput
  }

  export type mediaStatusUncheckedCreateInput = {
    mediaStatus?: number
    userId: number
    mediaId: number
    mark: string
  }

  export type mediaStatusUpdateInput = {
    mark?: StringFieldUpdateOperationsInput | string
    media?: mediaUpdateOneRequiredWithoutMediaStatusNestedInput
    users?: usersUpdateOneRequiredWithoutMediaStatusNestedInput
  }

  export type mediaStatusUncheckedUpdateInput = {
    mediaStatus?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    mediaId?: IntFieldUpdateOperationsInput | number
    mark?: StringFieldUpdateOperationsInput | string
  }

  export type mediaStatusCreateManyInput = {
    mediaStatus?: number
    userId: number
    mediaId: number
    mark: string
  }

  export type mediaStatusUpdateManyMutationInput = {
    mark?: StringFieldUpdateOperationsInput | string
  }

  export type mediaStatusUncheckedUpdateManyInput = {
    mediaStatus?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    mediaId?: IntFieldUpdateOperationsInput | number
    mark?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    email: string
    password: string
    fullName: string
    mediaStatus?: mediaStatusCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    userid?: number
    email: string
    password: string
    fullName: string
    mediaStatus?: mediaStatusUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mediaStatus?: mediaStatusUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mediaStatus?: mediaStatusUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    userid?: number
    email: string
    password: string
    fullName: string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MediaListRelationFilter = {
    every?: mediaWhereInput
    some?: mediaWhereInput
    none?: mediaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type mediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type creatorCountOrderByAggregateInput = {
    creatorId?: SortOrder
    creatorName?: SortOrder
    dob?: SortOrder
  }

  export type creatorAvgOrderByAggregateInput = {
    creatorId?: SortOrder
  }

  export type creatorMaxOrderByAggregateInput = {
    creatorId?: SortOrder
    creatorName?: SortOrder
    dob?: SortOrder
  }

  export type creatorMinOrderByAggregateInput = {
    creatorId?: SortOrder
    creatorName?: SortOrder
    dob?: SortOrder
  }

  export type creatorSumOrderByAggregateInput = {
    creatorId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MediaTypeScalarRelationFilter = {
    is?: mediaTypeWhereInput
    isNot?: mediaTypeWhereInput
  }

  export type CreatorScalarRelationFilter = {
    is?: creatorWhereInput
    isNot?: creatorWhereInput
  }

  export type MediaStatusListRelationFilter = {
    every?: mediaStatusWhereInput
    some?: mediaStatusWhereInput
    none?: mediaStatusWhereInput
  }

  export type mediaStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mediaCountOrderByAggregateInput = {
    mediaId?: SortOrder
    creatorId?: SortOrder
    typeId?: SortOrder
    mediaName?: SortOrder
    released?: SortOrder
  }

  export type mediaAvgOrderByAggregateInput = {
    mediaId?: SortOrder
    creatorId?: SortOrder
    typeId?: SortOrder
  }

  export type mediaMaxOrderByAggregateInput = {
    mediaId?: SortOrder
    creatorId?: SortOrder
    typeId?: SortOrder
    mediaName?: SortOrder
    released?: SortOrder
  }

  export type mediaMinOrderByAggregateInput = {
    mediaId?: SortOrder
    creatorId?: SortOrder
    typeId?: SortOrder
    mediaName?: SortOrder
    released?: SortOrder
  }

  export type mediaSumOrderByAggregateInput = {
    mediaId?: SortOrder
    creatorId?: SortOrder
    typeId?: SortOrder
  }

  export type mediaTypeCountOrderByAggregateInput = {
    typeId?: SortOrder
    typeNme?: SortOrder
  }

  export type mediaTypeAvgOrderByAggregateInput = {
    typeId?: SortOrder
  }

  export type mediaTypeMaxOrderByAggregateInput = {
    typeId?: SortOrder
    typeNme?: SortOrder
  }

  export type mediaTypeMinOrderByAggregateInput = {
    typeId?: SortOrder
    typeNme?: SortOrder
  }

  export type mediaTypeSumOrderByAggregateInput = {
    typeId?: SortOrder
  }

  export type MediaScalarRelationFilter = {
    is?: mediaWhereInput
    isNot?: mediaWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type mediaStatusCountOrderByAggregateInput = {
    mediaStatus?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
    mark?: SortOrder
  }

  export type mediaStatusAvgOrderByAggregateInput = {
    mediaStatus?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
  }

  export type mediaStatusMaxOrderByAggregateInput = {
    mediaStatus?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
    mark?: SortOrder
  }

  export type mediaStatusMinOrderByAggregateInput = {
    mediaStatus?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
    mark?: SortOrder
  }

  export type mediaStatusSumOrderByAggregateInput = {
    mediaStatus?: SortOrder
    userId?: SortOrder
    mediaId?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    userid?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type mediaCreateNestedManyWithoutCreatorInput = {
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type mediaUncheckedCreateNestedManyWithoutCreatorInput = {
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type mediaUpdateManyWithoutCreatorNestedInput = {
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutCreatorInput | mediaUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutCreatorInput | mediaUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type mediaUncheckedUpdateManyWithoutCreatorNestedInput = {
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutCreatorInput | mediaUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutCreatorInput | mediaUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type mediaTypeUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<mediaTypeCreateWithoutMediaInput, mediaTypeUncheckedCreateWithoutMediaInput>
    connectOrCreate?: mediaTypeCreateOrConnectWithoutMediaInput
    upsert?: mediaTypeUpsertWithoutMediaInput
    connect?: mediaTypeWhereUniqueInput
    update?: XOR<XOR<mediaTypeUpdateToOneWithWhereWithoutMediaInput, mediaTypeUpdateWithoutMediaInput>, mediaTypeUncheckedUpdateWithoutMediaInput>
  }

  export type creatorUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<creatorCreateWithoutMediaInput, creatorUncheckedCreateWithoutMediaInput>
    connectOrCreate?: creatorCreateOrConnectWithoutMediaInput
    upsert?: creatorUpsertWithoutMediaInput
    connect?: creatorWhereUniqueInput
    update?: XOR<XOR<creatorUpdateToOneWithWhereWithoutMediaInput, creatorUpdateWithoutMediaInput>, creatorUncheckedUpdateWithoutMediaInput>
  }

  export type mediaStatusUpdateManyWithoutMediaNestedInput = {
    create?: XOR<mediaStatusCreateWithoutMediaInput, mediaStatusUncheckedCreateWithoutMediaInput> | mediaStatusCreateWithoutMediaInput[] | mediaStatusUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: mediaStatusCreateOrConnectWithoutMediaInput | mediaStatusCreateOrConnectWithoutMediaInput[]
    upsert?: mediaStatusUpsertWithWhereUniqueWithoutMediaInput | mediaStatusUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: mediaStatusCreateManyMediaInputEnvelope
    set?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    disconnect?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    delete?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    connect?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    update?: mediaStatusUpdateWithWhereUniqueWithoutMediaInput | mediaStatusUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: mediaStatusUpdateManyWithWhereWithoutMediaInput | mediaStatusUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: mediaStatusScalarWhereInput | mediaStatusScalarWhereInput[]
  }

  export type mediaStatusUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<mediaStatusCreateWithoutMediaInput, mediaStatusUncheckedCreateWithoutMediaInput> | mediaStatusCreateWithoutMediaInput[] | mediaStatusUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: mediaStatusCreateOrConnectWithoutMediaInput | mediaStatusCreateOrConnectWithoutMediaInput[]
    upsert?: mediaStatusUpsertWithWhereUniqueWithoutMediaInput | mediaStatusUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: mediaStatusCreateManyMediaInputEnvelope
    set?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    disconnect?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    delete?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    connect?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    update?: mediaStatusUpdateWithWhereUniqueWithoutMediaInput | mediaStatusUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: mediaStatusUpdateManyWithWhereWithoutMediaInput | mediaStatusUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: mediaStatusScalarWhereInput | mediaStatusScalarWhereInput[]
  }

  export type mediaCreateNestedManyWithoutMediaTypeInput = {
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type mediaUncheckedCreateNestedManyWithoutMediaTypeInput = {
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type mediaUpdateManyWithoutMediaTypeNestedInput = {
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutMediaTypeInput | mediaUpdateWithWhereUniqueWithoutMediaTypeInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutMediaTypeInput | mediaUpdateManyWithWhereWithoutMediaTypeInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type mediaUncheckedUpdateManyWithoutMediaTypeNestedInput = {
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutMediaTypeInput | mediaUpdateWithWhereUniqueWithoutMediaTypeInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutMediaTypeInput | mediaUpdateManyWithWhereWithoutMediaTypeInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type mediaCreateNestedOneWithoutMediaStatusInput = {
    connect?: mediaWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutMediaStatusInput = {
    create?: XOR<usersCreateWithoutMediaStatusInput, usersUncheckedCreateWithoutMediaStatusInput>
    connectOrCreate?: usersCreateOrConnectWithoutMediaStatusInput
    connect?: usersWhereUniqueInput
  }

  export type mediaUpdateOneRequiredWithoutMediaStatusNestedInput = {
    connect?: mediaWhereUniqueInput
    update?: XOR<XOR<mediaUpdateToOneWithWhereWithoutMediaStatusInput, mediaUpdateWithoutMediaStatusInput>, mediaUncheckedUpdateWithoutMediaStatusInput>
  }

  export type usersUpdateOneRequiredWithoutMediaStatusNestedInput = {
    create?: XOR<usersCreateWithoutMediaStatusInput, usersUncheckedCreateWithoutMediaStatusInput>
    connectOrCreate?: usersCreateOrConnectWithoutMediaStatusInput
    upsert?: usersUpsertWithoutMediaStatusInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMediaStatusInput, usersUpdateWithoutMediaStatusInput>, usersUncheckedUpdateWithoutMediaStatusInput>
  }

  export type mediaStatusCreateNestedManyWithoutUsersInput = {
    create?: XOR<mediaStatusCreateWithoutUsersInput, mediaStatusUncheckedCreateWithoutUsersInput> | mediaStatusCreateWithoutUsersInput[] | mediaStatusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mediaStatusCreateOrConnectWithoutUsersInput | mediaStatusCreateOrConnectWithoutUsersInput[]
    createMany?: mediaStatusCreateManyUsersInputEnvelope
    connect?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
  }

  export type mediaStatusUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<mediaStatusCreateWithoutUsersInput, mediaStatusUncheckedCreateWithoutUsersInput> | mediaStatusCreateWithoutUsersInput[] | mediaStatusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mediaStatusCreateOrConnectWithoutUsersInput | mediaStatusCreateOrConnectWithoutUsersInput[]
    createMany?: mediaStatusCreateManyUsersInputEnvelope
    connect?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
  }

  export type mediaStatusUpdateManyWithoutUsersNestedInput = {
    create?: XOR<mediaStatusCreateWithoutUsersInput, mediaStatusUncheckedCreateWithoutUsersInput> | mediaStatusCreateWithoutUsersInput[] | mediaStatusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mediaStatusCreateOrConnectWithoutUsersInput | mediaStatusCreateOrConnectWithoutUsersInput[]
    upsert?: mediaStatusUpsertWithWhereUniqueWithoutUsersInput | mediaStatusUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: mediaStatusCreateManyUsersInputEnvelope
    set?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    disconnect?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    delete?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    connect?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    update?: mediaStatusUpdateWithWhereUniqueWithoutUsersInput | mediaStatusUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: mediaStatusUpdateManyWithWhereWithoutUsersInput | mediaStatusUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: mediaStatusScalarWhereInput | mediaStatusScalarWhereInput[]
  }

  export type mediaStatusUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<mediaStatusCreateWithoutUsersInput, mediaStatusUncheckedCreateWithoutUsersInput> | mediaStatusCreateWithoutUsersInput[] | mediaStatusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: mediaStatusCreateOrConnectWithoutUsersInput | mediaStatusCreateOrConnectWithoutUsersInput[]
    upsert?: mediaStatusUpsertWithWhereUniqueWithoutUsersInput | mediaStatusUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: mediaStatusCreateManyUsersInputEnvelope
    set?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    disconnect?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    delete?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    connect?: mediaStatusWhereUniqueInput | mediaStatusWhereUniqueInput[]
    update?: mediaStatusUpdateWithWhereUniqueWithoutUsersInput | mediaStatusUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: mediaStatusUpdateManyWithWhereWithoutUsersInput | mediaStatusUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: mediaStatusScalarWhereInput | mediaStatusScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type mediaUpdateWithWhereUniqueWithoutCreatorInput = {
    where: mediaWhereUniqueInput
    data: XOR<mediaUpdateWithoutCreatorInput, mediaUncheckedUpdateWithoutCreatorInput>
  }

  export type mediaUpdateManyWithWhereWithoutCreatorInput = {
    where: mediaScalarWhereInput
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyWithoutCreatorInput>
  }

  export type mediaScalarWhereInput = {
    AND?: mediaScalarWhereInput | mediaScalarWhereInput[]
    OR?: mediaScalarWhereInput[]
    NOT?: mediaScalarWhereInput | mediaScalarWhereInput[]
    mediaId?: IntFilter<"media"> | number
    creatorId?: IntFilter<"media"> | number
    typeId?: IntFilter<"media"> | number
    mediaName?: StringFilter<"media"> | string
    released?: DateTimeNullableFilter<"media"> | Date | string | null
  }

  export type mediaTypeCreateWithoutMediaInput = {
    typeNme: string
  }

  export type mediaTypeUncheckedCreateWithoutMediaInput = {
    typeId?: number
    typeNme: string
  }

  export type mediaTypeCreateOrConnectWithoutMediaInput = {
    where: mediaTypeWhereUniqueInput
    create: XOR<mediaTypeCreateWithoutMediaInput, mediaTypeUncheckedCreateWithoutMediaInput>
  }

  export type mediaTypeUpsertWithoutMediaInput = {
    update: XOR<mediaTypeUpdateWithoutMediaInput, mediaTypeUncheckedUpdateWithoutMediaInput>
    create: XOR<mediaTypeCreateWithoutMediaInput, mediaTypeUncheckedCreateWithoutMediaInput>
    where?: mediaTypeWhereInput
  }

  export type mediaTypeUpdateToOneWithWhereWithoutMediaInput = {
    where?: mediaTypeWhereInput
    data: XOR<mediaTypeUpdateWithoutMediaInput, mediaTypeUncheckedUpdateWithoutMediaInput>
  }

  export type mediaTypeUpdateWithoutMediaInput = {
    typeNme?: StringFieldUpdateOperationsInput | string
  }

  export type mediaTypeUncheckedUpdateWithoutMediaInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    typeNme?: StringFieldUpdateOperationsInput | string
  }

  export type creatorCreateWithoutMediaInput = {
    creatorName: string
    dob?: Date | string | null
  }

  export type creatorUncheckedCreateWithoutMediaInput = {
    creatorId?: number
    creatorName: string
    dob?: Date | string | null
  }

  export type creatorCreateOrConnectWithoutMediaInput = {
    where: creatorWhereUniqueInput
    create: XOR<creatorCreateWithoutMediaInput, creatorUncheckedCreateWithoutMediaInput>
  }

  export type creatorUpsertWithoutMediaInput = {
    update: XOR<creatorUpdateWithoutMediaInput, creatorUncheckedUpdateWithoutMediaInput>
    create: XOR<creatorCreateWithoutMediaInput, creatorUncheckedCreateWithoutMediaInput>
    where?: creatorWhereInput
  }

  export type creatorUpdateToOneWithWhereWithoutMediaInput = {
    where?: creatorWhereInput
    data: XOR<creatorUpdateWithoutMediaInput, creatorUncheckedUpdateWithoutMediaInput>
  }

  export type creatorUpdateWithoutMediaInput = {
    creatorName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type creatorUncheckedUpdateWithoutMediaInput = {
    creatorId?: IntFieldUpdateOperationsInput | number
    creatorName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mediaStatusCreateWithoutMediaInput = {
    mark: string
    users: usersCreateNestedOneWithoutMediaStatusInput
  }

  export type mediaStatusUncheckedCreateWithoutMediaInput = {
    mediaStatus?: number
    userId: number
    mark: string
  }

  export type mediaStatusCreateOrConnectWithoutMediaInput = {
    where: mediaStatusWhereUniqueInput
    create: XOR<mediaStatusCreateWithoutMediaInput, mediaStatusUncheckedCreateWithoutMediaInput>
  }

  export type mediaStatusUpsertWithWhereUniqueWithoutMediaInput = {
    where: mediaStatusWhereUniqueInput
    update: XOR<mediaStatusUpdateWithoutMediaInput, mediaStatusUncheckedUpdateWithoutMediaInput>
    create: XOR<mediaStatusCreateWithoutMediaInput, mediaStatusUncheckedCreateWithoutMediaInput>
  }

  export type mediaStatusCreateManyMediaInputEnvelope = {
    data: mediaStatusCreateManyMediaInput | mediaStatusCreateManyMediaInput[]
  }

  export type mediaStatusUpdateWithWhereUniqueWithoutMediaInput = {
    where: mediaStatusWhereUniqueInput
    data: XOR<mediaStatusUpdateWithoutMediaInput, mediaStatusUncheckedUpdateWithoutMediaInput>
  }

  export type mediaStatusUpdateManyWithWhereWithoutMediaInput = {
    where: mediaStatusScalarWhereInput
    data: XOR<mediaStatusUpdateManyMutationInput, mediaStatusUncheckedUpdateManyWithoutMediaInput>
  }

  export type mediaStatusScalarWhereInput = {
    AND?: mediaStatusScalarWhereInput | mediaStatusScalarWhereInput[]
    OR?: mediaStatusScalarWhereInput[]
    NOT?: mediaStatusScalarWhereInput | mediaStatusScalarWhereInput[]
    mediaStatus?: IntFilter<"mediaStatus"> | number
    userId?: IntFilter<"mediaStatus"> | number
    mediaId?: IntFilter<"mediaStatus"> | number
    mark?: StringFilter<"mediaStatus"> | string
  }

  export type mediaUpdateWithWhereUniqueWithoutMediaTypeInput = {
    where: mediaWhereUniqueInput
    data: XOR<mediaUpdateWithoutMediaTypeInput, mediaUncheckedUpdateWithoutMediaTypeInput>
  }

  export type mediaUpdateManyWithWhereWithoutMediaTypeInput = {
    where: mediaScalarWhereInput
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyWithoutMediaTypeInput>
  }

  export type usersCreateWithoutMediaStatusInput = {
    email: string
    password: string
    fullName: string
  }

  export type usersUncheckedCreateWithoutMediaStatusInput = {
    userid?: number
    email: string
    password: string
    fullName: string
  }

  export type usersCreateOrConnectWithoutMediaStatusInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMediaStatusInput, usersUncheckedCreateWithoutMediaStatusInput>
  }

  export type mediaUpdateToOneWithWhereWithoutMediaStatusInput = {
    where?: mediaWhereInput
    data: XOR<mediaUpdateWithoutMediaStatusInput, mediaUncheckedUpdateWithoutMediaStatusInput>
  }

  export type mediaUpdateWithoutMediaStatusInput = {
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaType?: mediaTypeUpdateOneRequiredWithoutMediaNestedInput
    creator?: creatorUpdateOneRequiredWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateWithoutMediaStatusInput = {
    mediaId?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutMediaStatusInput = {
    update: XOR<usersUpdateWithoutMediaStatusInput, usersUncheckedUpdateWithoutMediaStatusInput>
    create: XOR<usersCreateWithoutMediaStatusInput, usersUncheckedCreateWithoutMediaStatusInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMediaStatusInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMediaStatusInput, usersUncheckedUpdateWithoutMediaStatusInput>
  }

  export type usersUpdateWithoutMediaStatusInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutMediaStatusInput = {
    userid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type mediaStatusCreateWithoutUsersInput = {
    mark: string
    media: mediaCreateNestedOneWithoutMediaStatusInput
  }

  export type mediaStatusUncheckedCreateWithoutUsersInput = {
    mediaStatus?: number
    mediaId: number
    mark: string
  }

  export type mediaStatusCreateOrConnectWithoutUsersInput = {
    where: mediaStatusWhereUniqueInput
    create: XOR<mediaStatusCreateWithoutUsersInput, mediaStatusUncheckedCreateWithoutUsersInput>
  }

  export type mediaStatusCreateManyUsersInputEnvelope = {
    data: mediaStatusCreateManyUsersInput | mediaStatusCreateManyUsersInput[]
  }

  export type mediaStatusUpsertWithWhereUniqueWithoutUsersInput = {
    where: mediaStatusWhereUniqueInput
    update: XOR<mediaStatusUpdateWithoutUsersInput, mediaStatusUncheckedUpdateWithoutUsersInput>
    create: XOR<mediaStatusCreateWithoutUsersInput, mediaStatusUncheckedCreateWithoutUsersInput>
  }

  export type mediaStatusUpdateWithWhereUniqueWithoutUsersInput = {
    where: mediaStatusWhereUniqueInput
    data: XOR<mediaStatusUpdateWithoutUsersInput, mediaStatusUncheckedUpdateWithoutUsersInput>
  }

  export type mediaStatusUpdateManyWithWhereWithoutUsersInput = {
    where: mediaStatusScalarWhereInput
    data: XOR<mediaStatusUpdateManyMutationInput, mediaStatusUncheckedUpdateManyWithoutUsersInput>
  }

  export type mediaUpdateWithoutCreatorInput = {
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaType?: mediaTypeUpdateOneRequiredWithoutMediaNestedInput
    mediaStatus?: mediaStatusUpdateManyWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateWithoutCreatorInput = {
    mediaId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaStatus?: mediaStatusUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateManyWithoutCreatorInput = {
    mediaId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mediaStatusUpdateWithoutMediaInput = {
    mark?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutMediaStatusNestedInput
  }

  export type mediaStatusUncheckedUpdateWithoutMediaInput = {
    mediaStatus?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    mark?: StringFieldUpdateOperationsInput | string
  }

  export type mediaStatusCreateManyMediaInput = {
    mediaStatus?: number
    userId: number
    mark: string
  }

  export type mediaStatusUncheckedUpdateManyWithoutMediaInput = {
    mediaStatus?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    mark?: StringFieldUpdateOperationsInput | string
  }

  export type mediaUpdateWithoutMediaTypeInput = {
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: creatorUpdateOneRequiredWithoutMediaNestedInput
    mediaStatus?: mediaStatusUpdateManyWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateWithoutMediaTypeInput = {
    mediaId?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mediaStatus?: mediaStatusUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateManyWithoutMediaTypeInput = {
    mediaId?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    mediaName?: StringFieldUpdateOperationsInput | string
    released?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mediaStatusCreateManyUsersInput = {
    mediaStatus?: number
    mediaId: number
    mark: string
  }

  export type mediaStatusUpdateWithoutUsersInput = {
    mark?: StringFieldUpdateOperationsInput | string
    media?: mediaUpdateOneRequiredWithoutMediaStatusNestedInput
  }

  export type mediaStatusUncheckedUpdateWithoutUsersInput = {
    mediaStatus?: IntFieldUpdateOperationsInput | number
    mediaId?: IntFieldUpdateOperationsInput | number
    mark?: StringFieldUpdateOperationsInput | string
  }

  export type mediaStatusUncheckedUpdateManyWithoutUsersInput = {
    mediaStatus?: IntFieldUpdateOperationsInput | number
    mediaId?: IntFieldUpdateOperationsInput | number
    mark?: StringFieldUpdateOperationsInput | string
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