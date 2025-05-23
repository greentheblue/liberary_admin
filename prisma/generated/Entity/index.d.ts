
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
 * Model Entity
 * 
 */
export type Entity = $Result.DefaultSelection<Prisma.$EntityPayload>
/**
 * Model HeadPerson
 * 
 */
export type HeadPerson = $Result.DefaultSelection<Prisma.$HeadPersonPayload>
/**
 * Model ContactPerson
 * 
 */
export type ContactPerson = $Result.DefaultSelection<Prisma.$ContactPersonPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model BookCategory
 * 
 */
export type BookCategory = $Result.DefaultSelection<Prisma.$BookCategoryPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model IssuedBook
 * 
 */
export type IssuedBook = $Result.DefaultSelection<Prisma.$IssuedBookPayload>
/**
 * Model IssuedBookItem
 * 
 */
export type IssuedBookItem = $Result.DefaultSelection<Prisma.$IssuedBookItemPayload>
/**
 * Model PasswordReset
 * 
 */
export type PasswordReset = $Result.DefaultSelection<Prisma.$PasswordResetPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MemberType: {
  STUDENT: 'STUDENT',
  YOUTH: 'YOUTH',
  ADULT: 'ADULT'
};

export type MemberType = (typeof MemberType)[keyof typeof MemberType]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type MemberType = $Enums.MemberType

export const MemberType: typeof $Enums.MemberType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entities
 * const entities = await prisma.entity.findMany()
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
   * // Fetch zero or more Entities
   * const entities = await prisma.entity.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.entity`: Exposes CRUD operations for the **Entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entities
    * const entities = await prisma.entity.findMany()
    * ```
    */
  get entity(): Prisma.EntityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.headPerson`: Exposes CRUD operations for the **HeadPerson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeadPeople
    * const headPeople = await prisma.headPerson.findMany()
    * ```
    */
  get headPerson(): Prisma.HeadPersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactPerson`: Exposes CRUD operations for the **ContactPerson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactPeople
    * const contactPeople = await prisma.contactPerson.findMany()
    * ```
    */
  get contactPerson(): Prisma.ContactPersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookCategory`: Exposes CRUD operations for the **BookCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookCategories
    * const bookCategories = await prisma.bookCategory.findMany()
    * ```
    */
  get bookCategory(): Prisma.BookCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issuedBook`: Exposes CRUD operations for the **IssuedBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IssuedBooks
    * const issuedBooks = await prisma.issuedBook.findMany()
    * ```
    */
  get issuedBook(): Prisma.IssuedBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issuedBookItem`: Exposes CRUD operations for the **IssuedBookItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IssuedBookItems
    * const issuedBookItems = await prisma.issuedBookItem.findMany()
    * ```
    */
  get issuedBookItem(): Prisma.IssuedBookItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordReset`: Exposes CRUD operations for the **PasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordReset.findMany()
    * ```
    */
  get passwordReset(): Prisma.PasswordResetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
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
    Entity: 'Entity',
    HeadPerson: 'HeadPerson',
    ContactPerson: 'ContactPerson',
    Staff: 'Staff',
    Member: 'Member',
    BookCategory: 'BookCategory',
    Book: 'Book',
    IssuedBook: 'IssuedBook',
    IssuedBookItem: 'IssuedBookItem',
    PasswordReset: 'PasswordReset',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "entity" | "headPerson" | "contactPerson" | "staff" | "member" | "bookCategory" | "book" | "issuedBook" | "issuedBookItem" | "passwordReset" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Entity: {
        payload: Prisma.$EntityPayload<ExtArgs>
        fields: Prisma.EntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findFirst: {
            args: Prisma.EntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findMany: {
            args: Prisma.EntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          create: {
            args: Prisma.EntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          createMany: {
            args: Prisma.EntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          update: {
            args: Prisma.EntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          deleteMany: {
            args: Prisma.EntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          aggregate: {
            args: Prisma.EntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntity>
          }
          groupBy: {
            args: Prisma.EntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntityCountArgs<ExtArgs>
            result: $Utils.Optional<EntityCountAggregateOutputType> | number
          }
        }
      }
      HeadPerson: {
        payload: Prisma.$HeadPersonPayload<ExtArgs>
        fields: Prisma.HeadPersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeadPersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadPersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeadPersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadPersonPayload>
          }
          findFirst: {
            args: Prisma.HeadPersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadPersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeadPersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadPersonPayload>
          }
          findMany: {
            args: Prisma.HeadPersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadPersonPayload>[]
          }
          create: {
            args: Prisma.HeadPersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadPersonPayload>
          }
          createMany: {
            args: Prisma.HeadPersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HeadPersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadPersonPayload>
          }
          update: {
            args: Prisma.HeadPersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadPersonPayload>
          }
          deleteMany: {
            args: Prisma.HeadPersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeadPersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HeadPersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadPersonPayload>
          }
          aggregate: {
            args: Prisma.HeadPersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeadPerson>
          }
          groupBy: {
            args: Prisma.HeadPersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeadPersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeadPersonCountArgs<ExtArgs>
            result: $Utils.Optional<HeadPersonCountAggregateOutputType> | number
          }
        }
      }
      ContactPerson: {
        payload: Prisma.$ContactPersonPayload<ExtArgs>
        fields: Prisma.ContactPersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactPersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactPersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          findFirst: {
            args: Prisma.ContactPersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactPersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          findMany: {
            args: Prisma.ContactPersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>[]
          }
          create: {
            args: Prisma.ContactPersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          createMany: {
            args: Prisma.ContactPersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContactPersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          update: {
            args: Prisma.ContactPersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          deleteMany: {
            args: Prisma.ContactPersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactPersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactPersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          aggregate: {
            args: Prisma.ContactPersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactPerson>
          }
          groupBy: {
            args: Prisma.ContactPersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactPersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactPersonCountArgs<ExtArgs>
            result: $Utils.Optional<ContactPersonCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      BookCategory: {
        payload: Prisma.$BookCategoryPayload<ExtArgs>
        fields: Prisma.BookCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>
          }
          findFirst: {
            args: Prisma.BookCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>
          }
          findMany: {
            args: Prisma.BookCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>[]
          }
          create: {
            args: Prisma.BookCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>
          }
          createMany: {
            args: Prisma.BookCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>
          }
          update: {
            args: Prisma.BookCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BookCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>
          }
          aggregate: {
            args: Prisma.BookCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookCategory>
          }
          groupBy: {
            args: Prisma.BookCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BookCategoryCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      IssuedBook: {
        payload: Prisma.$IssuedBookPayload<ExtArgs>
        fields: Prisma.IssuedBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssuedBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssuedBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookPayload>
          }
          findFirst: {
            args: Prisma.IssuedBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssuedBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookPayload>
          }
          findMany: {
            args: Prisma.IssuedBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookPayload>[]
          }
          create: {
            args: Prisma.IssuedBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookPayload>
          }
          createMany: {
            args: Prisma.IssuedBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IssuedBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookPayload>
          }
          update: {
            args: Prisma.IssuedBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookPayload>
          }
          deleteMany: {
            args: Prisma.IssuedBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssuedBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IssuedBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookPayload>
          }
          aggregate: {
            args: Prisma.IssuedBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssuedBook>
          }
          groupBy: {
            args: Prisma.IssuedBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssuedBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssuedBookCountArgs<ExtArgs>
            result: $Utils.Optional<IssuedBookCountAggregateOutputType> | number
          }
        }
      }
      IssuedBookItem: {
        payload: Prisma.$IssuedBookItemPayload<ExtArgs>
        fields: Prisma.IssuedBookItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssuedBookItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssuedBookItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookItemPayload>
          }
          findFirst: {
            args: Prisma.IssuedBookItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssuedBookItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookItemPayload>
          }
          findMany: {
            args: Prisma.IssuedBookItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookItemPayload>[]
          }
          create: {
            args: Prisma.IssuedBookItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookItemPayload>
          }
          createMany: {
            args: Prisma.IssuedBookItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IssuedBookItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookItemPayload>
          }
          update: {
            args: Prisma.IssuedBookItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookItemPayload>
          }
          deleteMany: {
            args: Prisma.IssuedBookItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssuedBookItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IssuedBookItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuedBookItemPayload>
          }
          aggregate: {
            args: Prisma.IssuedBookItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssuedBookItem>
          }
          groupBy: {
            args: Prisma.IssuedBookItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssuedBookItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssuedBookItemCountArgs<ExtArgs>
            result: $Utils.Optional<IssuedBookItemCountAggregateOutputType> | number
          }
        }
      }
      PasswordReset: {
        payload: Prisma.$PasswordResetPayload<ExtArgs>
        fields: Prisma.PasswordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findMany: {
            args: Prisma.PasswordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          create: {
            args: Prisma.PasswordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          createMany: {
            args: Prisma.PasswordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PasswordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          update: {
            args: Prisma.PasswordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PasswordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordReset>
          }
          groupBy: {
            args: Prisma.PasswordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    entity?: EntityOmit
    headPerson?: HeadPersonOmit
    contactPerson?: ContactPersonOmit
    staff?: StaffOmit
    member?: MemberOmit
    bookCategory?: BookCategoryOmit
    book?: BookOmit
    issuedBook?: IssuedBookOmit
    issuedBookItem?: IssuedBookItemOmit
    passwordReset?: PasswordResetOmit
    user?: UserOmit
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
   * Count Type EntityCountOutputType
   */

  export type EntityCountOutputType = {
    books: number
    bookCategories: number
    issuedBooks: number
    staff: number
    members: number
  }

  export type EntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | EntityCountOutputTypeCountBooksArgs
    bookCategories?: boolean | EntityCountOutputTypeCountBookCategoriesArgs
    issuedBooks?: boolean | EntityCountOutputTypeCountIssuedBooksArgs
    staff?: boolean | EntityCountOutputTypeCountStaffArgs
    members?: boolean | EntityCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityCountOutputType
     */
    select?: EntityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountBookCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookCategoryWhereInput
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountIssuedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedBookWhereInput
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    createdMembers: number
    createdCategories: number
    createdBooks: number
    createdIssuedBooks: number
    collectedItems: number
    lastEditedMembers: number
    lastEditedBooks: number
    lastEditedCategories: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdMembers?: boolean | StaffCountOutputTypeCountCreatedMembersArgs
    createdCategories?: boolean | StaffCountOutputTypeCountCreatedCategoriesArgs
    createdBooks?: boolean | StaffCountOutputTypeCountCreatedBooksArgs
    createdIssuedBooks?: boolean | StaffCountOutputTypeCountCreatedIssuedBooksArgs
    collectedItems?: boolean | StaffCountOutputTypeCountCollectedItemsArgs
    lastEditedMembers?: boolean | StaffCountOutputTypeCountLastEditedMembersArgs
    lastEditedBooks?: boolean | StaffCountOutputTypeCountLastEditedBooksArgs
    lastEditedCategories?: boolean | StaffCountOutputTypeCountLastEditedCategoriesArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountCreatedMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountCreatedCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookCategoryWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountCreatedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountCreatedIssuedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedBookWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountCollectedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedBookItemWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountLastEditedMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountLastEditedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountLastEditedCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookCategoryWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    issuedBooks: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuedBooks?: boolean | MemberCountOutputTypeCountIssuedBooksArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountIssuedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedBookWhereInput
  }


  /**
   * Count Type BookCategoryCountOutputType
   */

  export type BookCategoryCountOutputType = {
    books: number
  }

  export type BookCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | BookCategoryCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * BookCategoryCountOutputType without action
   */
  export type BookCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategoryCountOutputType
     */
    select?: BookCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCategoryCountOutputType without action
   */
  export type BookCategoryCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    issuedBookItems: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuedBookItems?: boolean | BookCountOutputTypeCountIssuedBookItemsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountIssuedBookItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedBookItemWhereInput
  }


  /**
   * Count Type IssuedBookCountOutputType
   */

  export type IssuedBookCountOutputType = {
    items: number
  }

  export type IssuedBookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | IssuedBookCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * IssuedBookCountOutputType without action
   */
  export type IssuedBookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookCountOutputType
     */
    select?: IssuedBookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IssuedBookCountOutputType without action
   */
  export type IssuedBookCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedBookItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Entity
   */

  export type AggregateEntity = {
    _count: EntityCountAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  export type EntityMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntityCountAggregateOutputType = {
    id: number
    name: number
    address: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EntityMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntityMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntityCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entity to aggregate.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entities
    **/
    _count?: true | EntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityMaxAggregateInputType
  }

  export type GetEntityAggregateType<T extends EntityAggregateArgs> = {
        [P in keyof T & keyof AggregateEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntity[P]>
      : GetScalarType<T[P], AggregateEntity[P]>
  }




  export type EntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityWhereInput
    orderBy?: EntityOrderByWithAggregationInput | EntityOrderByWithAggregationInput[]
    by: EntityScalarFieldEnum[] | EntityScalarFieldEnum
    having?: EntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityCountAggregateInputType | true
    _min?: EntityMinAggregateInputType
    _max?: EntityMaxAggregateInputType
  }

  export type EntityGroupByOutputType = {
    id: string
    name: string
    address: string
    type: string
    createdAt: Date
    updatedAt: Date
    _count: EntityCountAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  type GetEntityGroupByPayload<T extends EntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntityGroupByOutputType[P]>
            : GetScalarType<T[P], EntityGroupByOutputType[P]>
        }
      >
    >


  export type EntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | Entity$booksArgs<ExtArgs>
    bookCategories?: boolean | Entity$bookCategoriesArgs<ExtArgs>
    contactPerson?: boolean | Entity$contactPersonArgs<ExtArgs>
    headPerson?: boolean | Entity$headPersonArgs<ExtArgs>
    issuedBooks?: boolean | Entity$issuedBooksArgs<ExtArgs>
    staff?: boolean | Entity$staffArgs<ExtArgs>
    members?: boolean | Entity$membersArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entity"]>



  export type EntitySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["entity"]>
  export type EntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Entity$booksArgs<ExtArgs>
    bookCategories?: boolean | Entity$bookCategoriesArgs<ExtArgs>
    contactPerson?: boolean | Entity$contactPersonArgs<ExtArgs>
    headPerson?: boolean | Entity$headPersonArgs<ExtArgs>
    issuedBooks?: boolean | Entity$issuedBooksArgs<ExtArgs>
    staff?: boolean | Entity$staffArgs<ExtArgs>
    members?: boolean | Entity$membersArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entity"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
      bookCategories: Prisma.$BookCategoryPayload<ExtArgs>[]
      contactPerson: Prisma.$ContactPersonPayload<ExtArgs> | null
      headPerson: Prisma.$HeadPersonPayload<ExtArgs> | null
      issuedBooks: Prisma.$IssuedBookPayload<ExtArgs>[]
      staff: Prisma.$StaffPayload<ExtArgs>[]
      members: Prisma.$MemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["entity"]>
    composites: {}
  }

  type EntityGetPayload<S extends boolean | null | undefined | EntityDefaultArgs> = $Result.GetResult<Prisma.$EntityPayload, S>

  type EntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntityCountAggregateInputType | true
    }

  export interface EntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entity'], meta: { name: 'Entity' } }
    /**
     * Find zero or one Entity that matches the filter.
     * @param {EntityFindUniqueArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntityFindUniqueArgs>(args: SelectSubset<T, EntityFindUniqueArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Entity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntityFindUniqueOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntityFindUniqueOrThrowArgs>(args: SelectSubset<T, EntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntityFindFirstArgs>(args?: SelectSubset<T, EntityFindFirstArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntityFindFirstOrThrowArgs>(args?: SelectSubset<T, EntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entities
     * const entities = await prisma.entity.findMany()
     * 
     * // Get first 10 Entities
     * const entities = await prisma.entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityWithIdOnly = await prisma.entity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntityFindManyArgs>(args?: SelectSubset<T, EntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Entity.
     * @param {EntityCreateArgs} args - Arguments to create a Entity.
     * @example
     * // Create one Entity
     * const Entity = await prisma.entity.create({
     *   data: {
     *     // ... data to create a Entity
     *   }
     * })
     * 
     */
    create<T extends EntityCreateArgs>(args: SelectSubset<T, EntityCreateArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Entities.
     * @param {EntityCreateManyArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntityCreateManyArgs>(args?: SelectSubset<T, EntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entity.
     * @param {EntityDeleteArgs} args - Arguments to delete one Entity.
     * @example
     * // Delete one Entity
     * const Entity = await prisma.entity.delete({
     *   where: {
     *     // ... filter to delete one Entity
     *   }
     * })
     * 
     */
    delete<T extends EntityDeleteArgs>(args: SelectSubset<T, EntityDeleteArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Entity.
     * @param {EntityUpdateArgs} args - Arguments to update one Entity.
     * @example
     * // Update one Entity
     * const entity = await prisma.entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntityUpdateArgs>(args: SelectSubset<T, EntityUpdateArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Entities.
     * @param {EntityDeleteManyArgs} args - Arguments to filter Entities to delete.
     * @example
     * // Delete a few Entities
     * const { count } = await prisma.entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntityDeleteManyArgs>(args?: SelectSubset<T, EntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntityUpdateManyArgs>(args: SelectSubset<T, EntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entity.
     * @param {EntityUpsertArgs} args - Arguments to update or create a Entity.
     * @example
     * // Update or create a Entity
     * const entity = await prisma.entity.upsert({
     *   create: {
     *     // ... data to create a Entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entity we want to update
     *   }
     * })
     */
    upsert<T extends EntityUpsertArgs>(args: SelectSubset<T, EntityUpsertArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityCountArgs} args - Arguments to filter Entities to count.
     * @example
     * // Count the number of Entities
     * const count = await prisma.entity.count({
     *   where: {
     *     // ... the filter for the Entities we want to count
     *   }
     * })
    **/
    count<T extends EntityCountArgs>(
      args?: Subset<T, EntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntityAggregateArgs>(args: Subset<T, EntityAggregateArgs>): Prisma.PrismaPromise<GetEntityAggregateType<T>>

    /**
     * Group by Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityGroupByArgs} args - Group by arguments.
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
      T extends EntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntityGroupByArgs['orderBy'] }
        : { orderBy?: EntityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entity model
   */
  readonly fields: EntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Entity$booksArgs<ExtArgs> = {}>(args?: Subset<T, Entity$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    bookCategories<T extends Entity$bookCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Entity$bookCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    contactPerson<T extends Entity$contactPersonArgs<ExtArgs> = {}>(args?: Subset<T, Entity$contactPersonArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    headPerson<T extends Entity$headPersonArgs<ExtArgs> = {}>(args?: Subset<T, Entity$headPersonArgs<ExtArgs>>): Prisma__HeadPersonClient<$Result.GetResult<Prisma.$HeadPersonPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    issuedBooks<T extends Entity$issuedBooksArgs<ExtArgs> = {}>(args?: Subset<T, Entity$issuedBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    staff<T extends Entity$staffArgs<ExtArgs> = {}>(args?: Subset<T, Entity$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    members<T extends Entity$membersArgs<ExtArgs> = {}>(args?: Subset<T, Entity$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Entity model
   */ 
  interface EntityFieldRefs {
    readonly id: FieldRef<"Entity", 'String'>
    readonly name: FieldRef<"Entity", 'String'>
    readonly address: FieldRef<"Entity", 'String'>
    readonly type: FieldRef<"Entity", 'String'>
    readonly createdAt: FieldRef<"Entity", 'DateTime'>
    readonly updatedAt: FieldRef<"Entity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entity findUnique
   */
  export type EntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findUniqueOrThrow
   */
  export type EntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findFirst
   */
  export type EntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findFirstOrThrow
   */
  export type EntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findMany
   */
  export type EntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entities to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity create
   */
  export type EntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The data needed to create a Entity.
     */
    data: XOR<EntityCreateInput, EntityUncheckedCreateInput>
  }

  /**
   * Entity createMany
   */
  export type EntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entity update
   */
  export type EntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The data needed to update a Entity.
     */
    data: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
    /**
     * Choose, which Entity to update.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity updateMany
   */
  export type EntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entities.
     */
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyInput>
    /**
     * Filter which Entities to update
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to update.
     */
    limit?: number
  }

  /**
   * Entity upsert
   */
  export type EntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The filter to search for the Entity to update in case it exists.
     */
    where: EntityWhereUniqueInput
    /**
     * In case the Entity found by the `where` argument doesn't exist, create a new Entity with this data.
     */
    create: XOR<EntityCreateInput, EntityUncheckedCreateInput>
    /**
     * In case the Entity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
  }

  /**
   * Entity delete
   */
  export type EntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter which Entity to delete.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity deleteMany
   */
  export type EntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entities to delete
     */
    where?: EntityWhereInput
    /**
     * Limit how many Entities to delete.
     */
    limit?: number
  }

  /**
   * Entity.books
   */
  export type Entity$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Entity.bookCategories
   */
  export type Entity$bookCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    where?: BookCategoryWhereInput
    orderBy?: BookCategoryOrderByWithRelationInput | BookCategoryOrderByWithRelationInput[]
    cursor?: BookCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[]
  }

  /**
   * Entity.contactPerson
   */
  export type Entity$contactPersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    where?: ContactPersonWhereInput
  }

  /**
   * Entity.headPerson
   */
  export type Entity$headPersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
    where?: HeadPersonWhereInput
  }

  /**
   * Entity.issuedBooks
   */
  export type Entity$issuedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    where?: IssuedBookWhereInput
    orderBy?: IssuedBookOrderByWithRelationInput | IssuedBookOrderByWithRelationInput[]
    cursor?: IssuedBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuedBookScalarFieldEnum | IssuedBookScalarFieldEnum[]
  }

  /**
   * Entity.staff
   */
  export type Entity$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Entity.members
   */
  export type Entity$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Entity without action
   */
  export type EntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entity
     */
    omit?: EntityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
  }


  /**
   * Model HeadPerson
   */

  export type AggregateHeadPerson = {
    _count: HeadPersonCountAggregateOutputType | null
    _min: HeadPersonMinAggregateOutputType | null
    _max: HeadPersonMaxAggregateOutputType | null
  }

  export type HeadPersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    entityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeadPersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    entityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeadPersonCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    entityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeadPersonMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    entityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeadPersonMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    entityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeadPersonCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    entityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeadPersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeadPerson to aggregate.
     */
    where?: HeadPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadPeople to fetch.
     */
    orderBy?: HeadPersonOrderByWithRelationInput | HeadPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeadPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeadPeople
    **/
    _count?: true | HeadPersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeadPersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeadPersonMaxAggregateInputType
  }

  export type GetHeadPersonAggregateType<T extends HeadPersonAggregateArgs> = {
        [P in keyof T & keyof AggregateHeadPerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeadPerson[P]>
      : GetScalarType<T[P], AggregateHeadPerson[P]>
  }




  export type HeadPersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadPersonWhereInput
    orderBy?: HeadPersonOrderByWithAggregationInput | HeadPersonOrderByWithAggregationInput[]
    by: HeadPersonScalarFieldEnum[] | HeadPersonScalarFieldEnum
    having?: HeadPersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeadPersonCountAggregateInputType | true
    _min?: HeadPersonMinAggregateInputType
    _max?: HeadPersonMaxAggregateInputType
  }

  export type HeadPersonGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    address: string | null
    entityId: string
    createdAt: Date
    updatedAt: Date
    _count: HeadPersonCountAggregateOutputType | null
    _min: HeadPersonMinAggregateOutputType | null
    _max: HeadPersonMaxAggregateOutputType | null
  }

  type GetHeadPersonGroupByPayload<T extends HeadPersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeadPersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeadPersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeadPersonGroupByOutputType[P]>
            : GetScalarType<T[P], HeadPersonGroupByOutputType[P]>
        }
      >
    >


  export type HeadPersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    entityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entity?: boolean | EntityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headPerson"]>



  export type HeadPersonSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    entityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HeadPersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "address" | "entityId" | "createdAt" | "updatedAt", ExtArgs["result"]["headPerson"]>
  export type HeadPersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | EntityDefaultArgs<ExtArgs>
  }

  export type $HeadPersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeadPerson"
    objects: {
      entity: Prisma.$EntityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      address: string | null
      entityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["headPerson"]>
    composites: {}
  }

  type HeadPersonGetPayload<S extends boolean | null | undefined | HeadPersonDefaultArgs> = $Result.GetResult<Prisma.$HeadPersonPayload, S>

  type HeadPersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeadPersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeadPersonCountAggregateInputType | true
    }

  export interface HeadPersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeadPerson'], meta: { name: 'HeadPerson' } }
    /**
     * Find zero or one HeadPerson that matches the filter.
     * @param {HeadPersonFindUniqueArgs} args - Arguments to find a HeadPerson
     * @example
     * // Get one HeadPerson
     * const headPerson = await prisma.headPerson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeadPersonFindUniqueArgs>(args: SelectSubset<T, HeadPersonFindUniqueArgs<ExtArgs>>): Prisma__HeadPersonClient<$Result.GetResult<Prisma.$HeadPersonPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one HeadPerson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeadPersonFindUniqueOrThrowArgs} args - Arguments to find a HeadPerson
     * @example
     * // Get one HeadPerson
     * const headPerson = await prisma.headPerson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeadPersonFindUniqueOrThrowArgs>(args: SelectSubset<T, HeadPersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeadPersonClient<$Result.GetResult<Prisma.$HeadPersonPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first HeadPerson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadPersonFindFirstArgs} args - Arguments to find a HeadPerson
     * @example
     * // Get one HeadPerson
     * const headPerson = await prisma.headPerson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeadPersonFindFirstArgs>(args?: SelectSubset<T, HeadPersonFindFirstArgs<ExtArgs>>): Prisma__HeadPersonClient<$Result.GetResult<Prisma.$HeadPersonPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first HeadPerson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadPersonFindFirstOrThrowArgs} args - Arguments to find a HeadPerson
     * @example
     * // Get one HeadPerson
     * const headPerson = await prisma.headPerson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeadPersonFindFirstOrThrowArgs>(args?: SelectSubset<T, HeadPersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeadPersonClient<$Result.GetResult<Prisma.$HeadPersonPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more HeadPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadPersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeadPeople
     * const headPeople = await prisma.headPerson.findMany()
     * 
     * // Get first 10 HeadPeople
     * const headPeople = await prisma.headPerson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const headPersonWithIdOnly = await prisma.headPerson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeadPersonFindManyArgs>(args?: SelectSubset<T, HeadPersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadPersonPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a HeadPerson.
     * @param {HeadPersonCreateArgs} args - Arguments to create a HeadPerson.
     * @example
     * // Create one HeadPerson
     * const HeadPerson = await prisma.headPerson.create({
     *   data: {
     *     // ... data to create a HeadPerson
     *   }
     * })
     * 
     */
    create<T extends HeadPersonCreateArgs>(args: SelectSubset<T, HeadPersonCreateArgs<ExtArgs>>): Prisma__HeadPersonClient<$Result.GetResult<Prisma.$HeadPersonPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many HeadPeople.
     * @param {HeadPersonCreateManyArgs} args - Arguments to create many HeadPeople.
     * @example
     * // Create many HeadPeople
     * const headPerson = await prisma.headPerson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeadPersonCreateManyArgs>(args?: SelectSubset<T, HeadPersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HeadPerson.
     * @param {HeadPersonDeleteArgs} args - Arguments to delete one HeadPerson.
     * @example
     * // Delete one HeadPerson
     * const HeadPerson = await prisma.headPerson.delete({
     *   where: {
     *     // ... filter to delete one HeadPerson
     *   }
     * })
     * 
     */
    delete<T extends HeadPersonDeleteArgs>(args: SelectSubset<T, HeadPersonDeleteArgs<ExtArgs>>): Prisma__HeadPersonClient<$Result.GetResult<Prisma.$HeadPersonPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one HeadPerson.
     * @param {HeadPersonUpdateArgs} args - Arguments to update one HeadPerson.
     * @example
     * // Update one HeadPerson
     * const headPerson = await prisma.headPerson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeadPersonUpdateArgs>(args: SelectSubset<T, HeadPersonUpdateArgs<ExtArgs>>): Prisma__HeadPersonClient<$Result.GetResult<Prisma.$HeadPersonPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more HeadPeople.
     * @param {HeadPersonDeleteManyArgs} args - Arguments to filter HeadPeople to delete.
     * @example
     * // Delete a few HeadPeople
     * const { count } = await prisma.headPerson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeadPersonDeleteManyArgs>(args?: SelectSubset<T, HeadPersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeadPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadPersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeadPeople
     * const headPerson = await prisma.headPerson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeadPersonUpdateManyArgs>(args: SelectSubset<T, HeadPersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HeadPerson.
     * @param {HeadPersonUpsertArgs} args - Arguments to update or create a HeadPerson.
     * @example
     * // Update or create a HeadPerson
     * const headPerson = await prisma.headPerson.upsert({
     *   create: {
     *     // ... data to create a HeadPerson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeadPerson we want to update
     *   }
     * })
     */
    upsert<T extends HeadPersonUpsertArgs>(args: SelectSubset<T, HeadPersonUpsertArgs<ExtArgs>>): Prisma__HeadPersonClient<$Result.GetResult<Prisma.$HeadPersonPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of HeadPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadPersonCountArgs} args - Arguments to filter HeadPeople to count.
     * @example
     * // Count the number of HeadPeople
     * const count = await prisma.headPerson.count({
     *   where: {
     *     // ... the filter for the HeadPeople we want to count
     *   }
     * })
    **/
    count<T extends HeadPersonCountArgs>(
      args?: Subset<T, HeadPersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeadPersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeadPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadPersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeadPersonAggregateArgs>(args: Subset<T, HeadPersonAggregateArgs>): Prisma.PrismaPromise<GetHeadPersonAggregateType<T>>

    /**
     * Group by HeadPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadPersonGroupByArgs} args - Group by arguments.
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
      T extends HeadPersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeadPersonGroupByArgs['orderBy'] }
        : { orderBy?: HeadPersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeadPersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeadPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeadPerson model
   */
  readonly fields: HeadPersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeadPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeadPersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entity<T extends EntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntityDefaultArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the HeadPerson model
   */ 
  interface HeadPersonFieldRefs {
    readonly id: FieldRef<"HeadPerson", 'String'>
    readonly name: FieldRef<"HeadPerson", 'String'>
    readonly phone: FieldRef<"HeadPerson", 'String'>
    readonly address: FieldRef<"HeadPerson", 'String'>
    readonly entityId: FieldRef<"HeadPerson", 'String'>
    readonly createdAt: FieldRef<"HeadPerson", 'DateTime'>
    readonly updatedAt: FieldRef<"HeadPerson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HeadPerson findUnique
   */
  export type HeadPersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
    /**
     * Filter, which HeadPerson to fetch.
     */
    where: HeadPersonWhereUniqueInput
  }

  /**
   * HeadPerson findUniqueOrThrow
   */
  export type HeadPersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
    /**
     * Filter, which HeadPerson to fetch.
     */
    where: HeadPersonWhereUniqueInput
  }

  /**
   * HeadPerson findFirst
   */
  export type HeadPersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
    /**
     * Filter, which HeadPerson to fetch.
     */
    where?: HeadPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadPeople to fetch.
     */
    orderBy?: HeadPersonOrderByWithRelationInput | HeadPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeadPeople.
     */
    cursor?: HeadPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeadPeople.
     */
    distinct?: HeadPersonScalarFieldEnum | HeadPersonScalarFieldEnum[]
  }

  /**
   * HeadPerson findFirstOrThrow
   */
  export type HeadPersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
    /**
     * Filter, which HeadPerson to fetch.
     */
    where?: HeadPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadPeople to fetch.
     */
    orderBy?: HeadPersonOrderByWithRelationInput | HeadPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeadPeople.
     */
    cursor?: HeadPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeadPeople.
     */
    distinct?: HeadPersonScalarFieldEnum | HeadPersonScalarFieldEnum[]
  }

  /**
   * HeadPerson findMany
   */
  export type HeadPersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
    /**
     * Filter, which HeadPeople to fetch.
     */
    where?: HeadPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadPeople to fetch.
     */
    orderBy?: HeadPersonOrderByWithRelationInput | HeadPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeadPeople.
     */
    cursor?: HeadPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadPeople.
     */
    skip?: number
    distinct?: HeadPersonScalarFieldEnum | HeadPersonScalarFieldEnum[]
  }

  /**
   * HeadPerson create
   */
  export type HeadPersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
    /**
     * The data needed to create a HeadPerson.
     */
    data: XOR<HeadPersonCreateInput, HeadPersonUncheckedCreateInput>
  }

  /**
   * HeadPerson createMany
   */
  export type HeadPersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeadPeople.
     */
    data: HeadPersonCreateManyInput | HeadPersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeadPerson update
   */
  export type HeadPersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
    /**
     * The data needed to update a HeadPerson.
     */
    data: XOR<HeadPersonUpdateInput, HeadPersonUncheckedUpdateInput>
    /**
     * Choose, which HeadPerson to update.
     */
    where: HeadPersonWhereUniqueInput
  }

  /**
   * HeadPerson updateMany
   */
  export type HeadPersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeadPeople.
     */
    data: XOR<HeadPersonUpdateManyMutationInput, HeadPersonUncheckedUpdateManyInput>
    /**
     * Filter which HeadPeople to update
     */
    where?: HeadPersonWhereInput
    /**
     * Limit how many HeadPeople to update.
     */
    limit?: number
  }

  /**
   * HeadPerson upsert
   */
  export type HeadPersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
    /**
     * The filter to search for the HeadPerson to update in case it exists.
     */
    where: HeadPersonWhereUniqueInput
    /**
     * In case the HeadPerson found by the `where` argument doesn't exist, create a new HeadPerson with this data.
     */
    create: XOR<HeadPersonCreateInput, HeadPersonUncheckedCreateInput>
    /**
     * In case the HeadPerson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeadPersonUpdateInput, HeadPersonUncheckedUpdateInput>
  }

  /**
   * HeadPerson delete
   */
  export type HeadPersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
    /**
     * Filter which HeadPerson to delete.
     */
    where: HeadPersonWhereUniqueInput
  }

  /**
   * HeadPerson deleteMany
   */
  export type HeadPersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeadPeople to delete
     */
    where?: HeadPersonWhereInput
    /**
     * Limit how many HeadPeople to delete.
     */
    limit?: number
  }

  /**
   * HeadPerson without action
   */
  export type HeadPersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadPerson
     */
    select?: HeadPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadPerson
     */
    omit?: HeadPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadPersonInclude<ExtArgs> | null
  }


  /**
   * Model ContactPerson
   */

  export type AggregateContactPerson = {
    _count: ContactPersonCountAggregateOutputType | null
    _min: ContactPersonMinAggregateOutputType | null
    _max: ContactPersonMaxAggregateOutputType | null
  }

  export type ContactPersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    entityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactPersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    entityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactPersonCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    entityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactPersonMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    entityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactPersonMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    entityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactPersonCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    entityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactPersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPerson to aggregate.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactPeople
    **/
    _count?: true | ContactPersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactPersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactPersonMaxAggregateInputType
  }

  export type GetContactPersonAggregateType<T extends ContactPersonAggregateArgs> = {
        [P in keyof T & keyof AggregateContactPerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactPerson[P]>
      : GetScalarType<T[P], AggregateContactPerson[P]>
  }




  export type ContactPersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactPersonWhereInput
    orderBy?: ContactPersonOrderByWithAggregationInput | ContactPersonOrderByWithAggregationInput[]
    by: ContactPersonScalarFieldEnum[] | ContactPersonScalarFieldEnum
    having?: ContactPersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactPersonCountAggregateInputType | true
    _min?: ContactPersonMinAggregateInputType
    _max?: ContactPersonMaxAggregateInputType
  }

  export type ContactPersonGroupByOutputType = {
    id: string
    name: string
    phone: string
    address: string
    entityId: string
    createdAt: Date
    updatedAt: Date
    _count: ContactPersonCountAggregateOutputType | null
    _min: ContactPersonMinAggregateOutputType | null
    _max: ContactPersonMaxAggregateOutputType | null
  }

  type GetContactPersonGroupByPayload<T extends ContactPersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactPersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactPersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactPersonGroupByOutputType[P]>
            : GetScalarType<T[P], ContactPersonGroupByOutputType[P]>
        }
      >
    >


  export type ContactPersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    entityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entity?: boolean | EntityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactPerson"]>



  export type ContactPersonSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    entityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactPersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "address" | "entityId" | "createdAt" | "updatedAt", ExtArgs["result"]["contactPerson"]>
  export type ContactPersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | EntityDefaultArgs<ExtArgs>
  }

  export type $ContactPersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactPerson"
    objects: {
      entity: Prisma.$EntityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      address: string
      entityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactPerson"]>
    composites: {}
  }

  type ContactPersonGetPayload<S extends boolean | null | undefined | ContactPersonDefaultArgs> = $Result.GetResult<Prisma.$ContactPersonPayload, S>

  type ContactPersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactPersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactPersonCountAggregateInputType | true
    }

  export interface ContactPersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactPerson'], meta: { name: 'ContactPerson' } }
    /**
     * Find zero or one ContactPerson that matches the filter.
     * @param {ContactPersonFindUniqueArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactPersonFindUniqueArgs>(args: SelectSubset<T, ContactPersonFindUniqueArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ContactPerson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactPersonFindUniqueOrThrowArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactPersonFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactPersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ContactPerson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindFirstArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactPersonFindFirstArgs>(args?: SelectSubset<T, ContactPersonFindFirstArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ContactPerson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindFirstOrThrowArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactPersonFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactPersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ContactPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactPeople
     * const contactPeople = await prisma.contactPerson.findMany()
     * 
     * // Get first 10 ContactPeople
     * const contactPeople = await prisma.contactPerson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactPersonWithIdOnly = await prisma.contactPerson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactPersonFindManyArgs>(args?: SelectSubset<T, ContactPersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ContactPerson.
     * @param {ContactPersonCreateArgs} args - Arguments to create a ContactPerson.
     * @example
     * // Create one ContactPerson
     * const ContactPerson = await prisma.contactPerson.create({
     *   data: {
     *     // ... data to create a ContactPerson
     *   }
     * })
     * 
     */
    create<T extends ContactPersonCreateArgs>(args: SelectSubset<T, ContactPersonCreateArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ContactPeople.
     * @param {ContactPersonCreateManyArgs} args - Arguments to create many ContactPeople.
     * @example
     * // Create many ContactPeople
     * const contactPerson = await prisma.contactPerson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactPersonCreateManyArgs>(args?: SelectSubset<T, ContactPersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactPerson.
     * @param {ContactPersonDeleteArgs} args - Arguments to delete one ContactPerson.
     * @example
     * // Delete one ContactPerson
     * const ContactPerson = await prisma.contactPerson.delete({
     *   where: {
     *     // ... filter to delete one ContactPerson
     *   }
     * })
     * 
     */
    delete<T extends ContactPersonDeleteArgs>(args: SelectSubset<T, ContactPersonDeleteArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ContactPerson.
     * @param {ContactPersonUpdateArgs} args - Arguments to update one ContactPerson.
     * @example
     * // Update one ContactPerson
     * const contactPerson = await prisma.contactPerson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactPersonUpdateArgs>(args: SelectSubset<T, ContactPersonUpdateArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ContactPeople.
     * @param {ContactPersonDeleteManyArgs} args - Arguments to filter ContactPeople to delete.
     * @example
     * // Delete a few ContactPeople
     * const { count } = await prisma.contactPerson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactPersonDeleteManyArgs>(args?: SelectSubset<T, ContactPersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactPeople
     * const contactPerson = await prisma.contactPerson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactPersonUpdateManyArgs>(args: SelectSubset<T, ContactPersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactPerson.
     * @param {ContactPersonUpsertArgs} args - Arguments to update or create a ContactPerson.
     * @example
     * // Update or create a ContactPerson
     * const contactPerson = await prisma.contactPerson.upsert({
     *   create: {
     *     // ... data to create a ContactPerson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactPerson we want to update
     *   }
     * })
     */
    upsert<T extends ContactPersonUpsertArgs>(args: SelectSubset<T, ContactPersonUpsertArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ContactPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonCountArgs} args - Arguments to filter ContactPeople to count.
     * @example
     * // Count the number of ContactPeople
     * const count = await prisma.contactPerson.count({
     *   where: {
     *     // ... the filter for the ContactPeople we want to count
     *   }
     * })
    **/
    count<T extends ContactPersonCountArgs>(
      args?: Subset<T, ContactPersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactPersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactPersonAggregateArgs>(args: Subset<T, ContactPersonAggregateArgs>): Prisma.PrismaPromise<GetContactPersonAggregateType<T>>

    /**
     * Group by ContactPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonGroupByArgs} args - Group by arguments.
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
      T extends ContactPersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactPersonGroupByArgs['orderBy'] }
        : { orderBy?: ContactPersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactPersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactPerson model
   */
  readonly fields: ContactPersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactPersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entity<T extends EntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntityDefaultArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the ContactPerson model
   */ 
  interface ContactPersonFieldRefs {
    readonly id: FieldRef<"ContactPerson", 'String'>
    readonly name: FieldRef<"ContactPerson", 'String'>
    readonly phone: FieldRef<"ContactPerson", 'String'>
    readonly address: FieldRef<"ContactPerson", 'String'>
    readonly entityId: FieldRef<"ContactPerson", 'String'>
    readonly createdAt: FieldRef<"ContactPerson", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactPerson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactPerson findUnique
   */
  export type ContactPersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson findUniqueOrThrow
   */
  export type ContactPersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson findFirst
   */
  export type ContactPersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPeople.
     */
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson findFirstOrThrow
   */
  export type ContactPersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPeople.
     */
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson findMany
   */
  export type ContactPersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPeople to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson create
   */
  export type ContactPersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactPerson.
     */
    data: XOR<ContactPersonCreateInput, ContactPersonUncheckedCreateInput>
  }

  /**
   * ContactPerson createMany
   */
  export type ContactPersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactPeople.
     */
    data: ContactPersonCreateManyInput | ContactPersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactPerson update
   */
  export type ContactPersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactPerson.
     */
    data: XOR<ContactPersonUpdateInput, ContactPersonUncheckedUpdateInput>
    /**
     * Choose, which ContactPerson to update.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson updateMany
   */
  export type ContactPersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactPeople.
     */
    data: XOR<ContactPersonUpdateManyMutationInput, ContactPersonUncheckedUpdateManyInput>
    /**
     * Filter which ContactPeople to update
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to update.
     */
    limit?: number
  }

  /**
   * ContactPerson upsert
   */
  export type ContactPersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactPerson to update in case it exists.
     */
    where: ContactPersonWhereUniqueInput
    /**
     * In case the ContactPerson found by the `where` argument doesn't exist, create a new ContactPerson with this data.
     */
    create: XOR<ContactPersonCreateInput, ContactPersonUncheckedCreateInput>
    /**
     * In case the ContactPerson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactPersonUpdateInput, ContactPersonUncheckedUpdateInput>
  }

  /**
   * ContactPerson delete
   */
  export type ContactPersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter which ContactPerson to delete.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson deleteMany
   */
  export type ContactPersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPeople to delete
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to delete.
     */
    limit?: number
  }

  /**
   * ContactPerson without action
   */
  export type ContactPersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    name: string | null
    gender: string | null
    phone: string | null
    email: string | null
    address: string | null
    entityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pasword: string | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gender: string | null
    phone: string | null
    email: string | null
    address: string | null
    entityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pasword: string | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    phone: number
    email: number
    address: number
    entityId: number
    createdAt: number
    updatedAt: number
    pasword: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    entityId?: true
    createdAt?: true
    updatedAt?: true
    pasword?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    entityId?: true
    createdAt?: true
    updatedAt?: true
    pasword?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    entityId?: true
    createdAt?: true
    updatedAt?: true
    pasword?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt: Date
    updatedAt: Date
    pasword: string | null
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    entityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pasword?: boolean
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    createdMembers?: boolean | Staff$createdMembersArgs<ExtArgs>
    createdCategories?: boolean | Staff$createdCategoriesArgs<ExtArgs>
    createdBooks?: boolean | Staff$createdBooksArgs<ExtArgs>
    createdIssuedBooks?: boolean | Staff$createdIssuedBooksArgs<ExtArgs>
    collectedItems?: boolean | Staff$collectedItemsArgs<ExtArgs>
    lastEditedMembers?: boolean | Staff$lastEditedMembersArgs<ExtArgs>
    lastEditedBooks?: boolean | Staff$lastEditedBooksArgs<ExtArgs>
    lastEditedCategories?: boolean | Staff$lastEditedCategoriesArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>



  export type StaffSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    entityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pasword?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "phone" | "email" | "address" | "entityId" | "createdAt" | "updatedAt" | "pasword", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    createdMembers?: boolean | Staff$createdMembersArgs<ExtArgs>
    createdCategories?: boolean | Staff$createdCategoriesArgs<ExtArgs>
    createdBooks?: boolean | Staff$createdBooksArgs<ExtArgs>
    createdIssuedBooks?: boolean | Staff$createdIssuedBooksArgs<ExtArgs>
    collectedItems?: boolean | Staff$collectedItemsArgs<ExtArgs>
    lastEditedMembers?: boolean | Staff$lastEditedMembersArgs<ExtArgs>
    lastEditedBooks?: boolean | Staff$lastEditedBooksArgs<ExtArgs>
    lastEditedCategories?: boolean | Staff$lastEditedCategoriesArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      entity: Prisma.$EntityPayload<ExtArgs>
      createdMembers: Prisma.$MemberPayload<ExtArgs>[]
      createdCategories: Prisma.$BookCategoryPayload<ExtArgs>[]
      createdBooks: Prisma.$BookPayload<ExtArgs>[]
      createdIssuedBooks: Prisma.$IssuedBookPayload<ExtArgs>[]
      collectedItems: Prisma.$IssuedBookItemPayload<ExtArgs>[]
      lastEditedMembers: Prisma.$MemberPayload<ExtArgs>[]
      lastEditedBooks: Prisma.$BookPayload<ExtArgs>[]
      lastEditedCategories: Prisma.$BookCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gender: string
      phone: string
      email: string
      address: string
      entityId: string
      createdAt: Date
      updatedAt: Date
      pasword: string | null
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
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
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entity<T extends EntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntityDefaultArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    createdMembers<T extends Staff$createdMembersArgs<ExtArgs> = {}>(args?: Subset<T, Staff$createdMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    createdCategories<T extends Staff$createdCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Staff$createdCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    createdBooks<T extends Staff$createdBooksArgs<ExtArgs> = {}>(args?: Subset<T, Staff$createdBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    createdIssuedBooks<T extends Staff$createdIssuedBooksArgs<ExtArgs> = {}>(args?: Subset<T, Staff$createdIssuedBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    collectedItems<T extends Staff$collectedItemsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$collectedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    lastEditedMembers<T extends Staff$lastEditedMembersArgs<ExtArgs> = {}>(args?: Subset<T, Staff$lastEditedMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    lastEditedBooks<T extends Staff$lastEditedBooksArgs<ExtArgs> = {}>(args?: Subset<T, Staff$lastEditedBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    lastEditedCategories<T extends Staff$lastEditedCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Staff$lastEditedCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Staff model
   */ 
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly name: FieldRef<"Staff", 'String'>
    readonly gender: FieldRef<"Staff", 'String'>
    readonly phone: FieldRef<"Staff", 'String'>
    readonly email: FieldRef<"Staff", 'String'>
    readonly address: FieldRef<"Staff", 'String'>
    readonly entityId: FieldRef<"Staff", 'String'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
    readonly updatedAt: FieldRef<"Staff", 'DateTime'>
    readonly pasword: FieldRef<"Staff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.createdMembers
   */
  export type Staff$createdMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Staff.createdCategories
   */
  export type Staff$createdCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    where?: BookCategoryWhereInput
    orderBy?: BookCategoryOrderByWithRelationInput | BookCategoryOrderByWithRelationInput[]
    cursor?: BookCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[]
  }

  /**
   * Staff.createdBooks
   */
  export type Staff$createdBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Staff.createdIssuedBooks
   */
  export type Staff$createdIssuedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    where?: IssuedBookWhereInput
    orderBy?: IssuedBookOrderByWithRelationInput | IssuedBookOrderByWithRelationInput[]
    cursor?: IssuedBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuedBookScalarFieldEnum | IssuedBookScalarFieldEnum[]
  }

  /**
   * Staff.collectedItems
   */
  export type Staff$collectedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    where?: IssuedBookItemWhereInput
    orderBy?: IssuedBookItemOrderByWithRelationInput | IssuedBookItemOrderByWithRelationInput[]
    cursor?: IssuedBookItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuedBookItemScalarFieldEnum | IssuedBookItemScalarFieldEnum[]
  }

  /**
   * Staff.lastEditedMembers
   */
  export type Staff$lastEditedMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Staff.lastEditedBooks
   */
  export type Staff$lastEditedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Staff.lastEditedCategories
   */
  export type Staff$lastEditedCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    where?: BookCategoryWhereInput
    orderBy?: BookCategoryOrderByWithRelationInput | BookCategoryOrderByWithRelationInput[]
    cursor?: BookCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    name: string | null
    profileImage: string | null
    memberType: $Enums.MemberType | null
    gender: $Enums.Gender | null
    phoneNumber: string | null
    address: string | null
    class: string | null
    division: string | null
    entityId: string | null
    createdBy: string | null
    lastEditedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    name: string | null
    profileImage: string | null
    memberType: $Enums.MemberType | null
    gender: $Enums.Gender | null
    phoneNumber: string | null
    address: string | null
    class: string | null
    division: string | null
    entityId: string | null
    createdBy: string | null
    lastEditedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    name: number
    profileImage: number
    memberType: number
    gender: number
    phoneNumber: number
    address: number
    class: number
    division: number
    entityId: number
    createdBy: number
    lastEditedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    name?: true
    profileImage?: true
    memberType?: true
    gender?: true
    phoneNumber?: true
    address?: true
    class?: true
    division?: true
    entityId?: true
    createdBy?: true
    lastEditedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    name?: true
    profileImage?: true
    memberType?: true
    gender?: true
    phoneNumber?: true
    address?: true
    class?: true
    division?: true
    entityId?: true
    createdBy?: true
    lastEditedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    name?: true
    profileImage?: true
    memberType?: true
    gender?: true
    phoneNumber?: true
    address?: true
    class?: true
    division?: true
    entityId?: true
    createdBy?: true
    lastEditedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    name: string
    profileImage: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class: string | null
    division: string | null
    entityId: string
    createdBy: string
    lastEditedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileImage?: boolean
    memberType?: boolean
    gender?: boolean
    phoneNumber?: boolean
    address?: boolean
    class?: boolean
    division?: boolean
    entityId?: boolean
    createdBy?: boolean
    lastEditedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    creator?: boolean | StaffDefaultArgs<ExtArgs>
    lastEditor?: boolean | Member$lastEditorArgs<ExtArgs>
    issuedBooks?: boolean | Member$issuedBooksArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>



  export type MemberSelectScalar = {
    id?: boolean
    name?: boolean
    profileImage?: boolean
    memberType?: boolean
    gender?: boolean
    phoneNumber?: boolean
    address?: boolean
    class?: boolean
    division?: boolean
    entityId?: boolean
    createdBy?: boolean
    lastEditedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profileImage" | "memberType" | "gender" | "phoneNumber" | "address" | "class" | "division" | "entityId" | "createdBy" | "lastEditedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    creator?: boolean | StaffDefaultArgs<ExtArgs>
    lastEditor?: boolean | Member$lastEditorArgs<ExtArgs>
    issuedBooks?: boolean | Member$issuedBooksArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      entity: Prisma.$EntityPayload<ExtArgs>
      creator: Prisma.$StaffPayload<ExtArgs>
      lastEditor: Prisma.$StaffPayload<ExtArgs> | null
      issuedBooks: Prisma.$IssuedBookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      profileImage: string | null
      memberType: $Enums.MemberType
      gender: $Enums.Gender
      phoneNumber: string
      address: string
      class: string | null
      division: string | null
      entityId: string
      createdBy: string
      lastEditedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entity<T extends EntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntityDefaultArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    creator<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    lastEditor<T extends Member$lastEditorArgs<ExtArgs> = {}>(args?: Subset<T, Member$lastEditorArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    issuedBooks<T extends Member$issuedBooksArgs<ExtArgs> = {}>(args?: Subset<T, Member$issuedBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Member model
   */ 
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly profileImage: FieldRef<"Member", 'String'>
    readonly memberType: FieldRef<"Member", 'MemberType'>
    readonly gender: FieldRef<"Member", 'Gender'>
    readonly phoneNumber: FieldRef<"Member", 'String'>
    readonly address: FieldRef<"Member", 'String'>
    readonly class: FieldRef<"Member", 'String'>
    readonly division: FieldRef<"Member", 'String'>
    readonly entityId: FieldRef<"Member", 'String'>
    readonly createdBy: FieldRef<"Member", 'String'>
    readonly lastEditedBy: FieldRef<"Member", 'String'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.lastEditor
   */
  export type Member$lastEditorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * Member.issuedBooks
   */
  export type Member$issuedBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    where?: IssuedBookWhereInput
    orderBy?: IssuedBookOrderByWithRelationInput | IssuedBookOrderByWithRelationInput[]
    cursor?: IssuedBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuedBookScalarFieldEnum | IssuedBookScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model BookCategory
   */

  export type AggregateBookCategory = {
    _count: BookCategoryCountAggregateOutputType | null
    _min: BookCategoryMinAggregateOutputType | null
    _max: BookCategoryMaxAggregateOutputType | null
  }

  export type BookCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    entityId: string | null
    createdBy: string | null
    lastEditedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    entityId: string | null
    createdBy: string | null
    lastEditedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCategoryCountAggregateOutputType = {
    id: number
    name: number
    entityId: number
    createdBy: number
    lastEditedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookCategoryMinAggregateInputType = {
    id?: true
    name?: true
    entityId?: true
    createdBy?: true
    lastEditedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    entityId?: true
    createdBy?: true
    lastEditedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCategoryCountAggregateInputType = {
    id?: true
    name?: true
    entityId?: true
    createdBy?: true
    lastEditedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookCategory to aggregate.
     */
    where?: BookCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookCategories to fetch.
     */
    orderBy?: BookCategoryOrderByWithRelationInput | BookCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookCategories
    **/
    _count?: true | BookCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookCategoryMaxAggregateInputType
  }

  export type GetBookCategoryAggregateType<T extends BookCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBookCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookCategory[P]>
      : GetScalarType<T[P], AggregateBookCategory[P]>
  }




  export type BookCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookCategoryWhereInput
    orderBy?: BookCategoryOrderByWithAggregationInput | BookCategoryOrderByWithAggregationInput[]
    by: BookCategoryScalarFieldEnum[] | BookCategoryScalarFieldEnum
    having?: BookCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCategoryCountAggregateInputType | true
    _min?: BookCategoryMinAggregateInputType
    _max?: BookCategoryMaxAggregateInputType
  }

  export type BookCategoryGroupByOutputType = {
    id: string
    name: string
    entityId: string
    createdBy: string
    lastEditedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookCategoryCountAggregateOutputType | null
    _min: BookCategoryMinAggregateOutputType | null
    _max: BookCategoryMaxAggregateOutputType | null
  }

  type GetBookCategoryGroupByPayload<T extends BookCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BookCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BookCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    entityId?: boolean
    createdBy?: boolean
    lastEditedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | BookCategory$booksArgs<ExtArgs>
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    creator?: boolean | StaffDefaultArgs<ExtArgs>
    lastEditor?: boolean | BookCategory$lastEditorArgs<ExtArgs>
    _count?: boolean | BookCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookCategory"]>



  export type BookCategorySelectScalar = {
    id?: boolean
    name?: boolean
    entityId?: boolean
    createdBy?: boolean
    lastEditedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "entityId" | "createdBy" | "lastEditedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["bookCategory"]>
  export type BookCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | BookCategory$booksArgs<ExtArgs>
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    creator?: boolean | StaffDefaultArgs<ExtArgs>
    lastEditor?: boolean | BookCategory$lastEditorArgs<ExtArgs>
    _count?: boolean | BookCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookCategory"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
      entity: Prisma.$EntityPayload<ExtArgs>
      creator: Prisma.$StaffPayload<ExtArgs>
      lastEditor: Prisma.$StaffPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      entityId: string
      createdBy: string
      lastEditedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookCategory"]>
    composites: {}
  }

  type BookCategoryGetPayload<S extends boolean | null | undefined | BookCategoryDefaultArgs> = $Result.GetResult<Prisma.$BookCategoryPayload, S>

  type BookCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCategoryCountAggregateInputType | true
    }

  export interface BookCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookCategory'], meta: { name: 'BookCategory' } }
    /**
     * Find zero or one BookCategory that matches the filter.
     * @param {BookCategoryFindUniqueArgs} args - Arguments to find a BookCategory
     * @example
     * // Get one BookCategory
     * const bookCategory = await prisma.bookCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookCategoryFindUniqueArgs>(args: SelectSubset<T, BookCategoryFindUniqueArgs<ExtArgs>>): Prisma__BookCategoryClient<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one BookCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookCategoryFindUniqueOrThrowArgs} args - Arguments to find a BookCategory
     * @example
     * // Get one BookCategory
     * const bookCategory = await prisma.bookCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BookCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookCategoryClient<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first BookCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryFindFirstArgs} args - Arguments to find a BookCategory
     * @example
     * // Get one BookCategory
     * const bookCategory = await prisma.bookCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookCategoryFindFirstArgs>(args?: SelectSubset<T, BookCategoryFindFirstArgs<ExtArgs>>): Prisma__BookCategoryClient<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first BookCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryFindFirstOrThrowArgs} args - Arguments to find a BookCategory
     * @example
     * // Get one BookCategory
     * const bookCategory = await prisma.bookCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BookCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookCategoryClient<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more BookCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookCategories
     * const bookCategories = await prisma.bookCategory.findMany()
     * 
     * // Get first 10 BookCategories
     * const bookCategories = await prisma.bookCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookCategoryWithIdOnly = await prisma.bookCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookCategoryFindManyArgs>(args?: SelectSubset<T, BookCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a BookCategory.
     * @param {BookCategoryCreateArgs} args - Arguments to create a BookCategory.
     * @example
     * // Create one BookCategory
     * const BookCategory = await prisma.bookCategory.create({
     *   data: {
     *     // ... data to create a BookCategory
     *   }
     * })
     * 
     */
    create<T extends BookCategoryCreateArgs>(args: SelectSubset<T, BookCategoryCreateArgs<ExtArgs>>): Prisma__BookCategoryClient<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many BookCategories.
     * @param {BookCategoryCreateManyArgs} args - Arguments to create many BookCategories.
     * @example
     * // Create many BookCategories
     * const bookCategory = await prisma.bookCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCategoryCreateManyArgs>(args?: SelectSubset<T, BookCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookCategory.
     * @param {BookCategoryDeleteArgs} args - Arguments to delete one BookCategory.
     * @example
     * // Delete one BookCategory
     * const BookCategory = await prisma.bookCategory.delete({
     *   where: {
     *     // ... filter to delete one BookCategory
     *   }
     * })
     * 
     */
    delete<T extends BookCategoryDeleteArgs>(args: SelectSubset<T, BookCategoryDeleteArgs<ExtArgs>>): Prisma__BookCategoryClient<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one BookCategory.
     * @param {BookCategoryUpdateArgs} args - Arguments to update one BookCategory.
     * @example
     * // Update one BookCategory
     * const bookCategory = await prisma.bookCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookCategoryUpdateArgs>(args: SelectSubset<T, BookCategoryUpdateArgs<ExtArgs>>): Prisma__BookCategoryClient<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more BookCategories.
     * @param {BookCategoryDeleteManyArgs} args - Arguments to filter BookCategories to delete.
     * @example
     * // Delete a few BookCategories
     * const { count } = await prisma.bookCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookCategoryDeleteManyArgs>(args?: SelectSubset<T, BookCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookCategories
     * const bookCategory = await prisma.bookCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookCategoryUpdateManyArgs>(args: SelectSubset<T, BookCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookCategory.
     * @param {BookCategoryUpsertArgs} args - Arguments to update or create a BookCategory.
     * @example
     * // Update or create a BookCategory
     * const bookCategory = await prisma.bookCategory.upsert({
     *   create: {
     *     // ... data to create a BookCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookCategory we want to update
     *   }
     * })
     */
    upsert<T extends BookCategoryUpsertArgs>(args: SelectSubset<T, BookCategoryUpsertArgs<ExtArgs>>): Prisma__BookCategoryClient<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryCountArgs} args - Arguments to filter BookCategories to count.
     * @example
     * // Count the number of BookCategories
     * const count = await prisma.bookCategory.count({
     *   where: {
     *     // ... the filter for the BookCategories we want to count
     *   }
     * })
    **/
    count<T extends BookCategoryCountArgs>(
      args?: Subset<T, BookCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookCategoryAggregateArgs>(args: Subset<T, BookCategoryAggregateArgs>): Prisma.PrismaPromise<GetBookCategoryAggregateType<T>>

    /**
     * Group by BookCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryGroupByArgs} args - Group by arguments.
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
      T extends BookCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BookCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookCategory model
   */
  readonly fields: BookCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends BookCategory$booksArgs<ExtArgs> = {}>(args?: Subset<T, BookCategory$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    entity<T extends EntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntityDefaultArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    creator<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    lastEditor<T extends BookCategory$lastEditorArgs<ExtArgs> = {}>(args?: Subset<T, BookCategory$lastEditorArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the BookCategory model
   */ 
  interface BookCategoryFieldRefs {
    readonly id: FieldRef<"BookCategory", 'String'>
    readonly name: FieldRef<"BookCategory", 'String'>
    readonly entityId: FieldRef<"BookCategory", 'String'>
    readonly createdBy: FieldRef<"BookCategory", 'String'>
    readonly lastEditedBy: FieldRef<"BookCategory", 'String'>
    readonly createdAt: FieldRef<"BookCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"BookCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookCategory findUnique
   */
  export type BookCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BookCategory to fetch.
     */
    where: BookCategoryWhereUniqueInput
  }

  /**
   * BookCategory findUniqueOrThrow
   */
  export type BookCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BookCategory to fetch.
     */
    where: BookCategoryWhereUniqueInput
  }

  /**
   * BookCategory findFirst
   */
  export type BookCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BookCategory to fetch.
     */
    where?: BookCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookCategories to fetch.
     */
    orderBy?: BookCategoryOrderByWithRelationInput | BookCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookCategories.
     */
    cursor?: BookCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookCategories.
     */
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[]
  }

  /**
   * BookCategory findFirstOrThrow
   */
  export type BookCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BookCategory to fetch.
     */
    where?: BookCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookCategories to fetch.
     */
    orderBy?: BookCategoryOrderByWithRelationInput | BookCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookCategories.
     */
    cursor?: BookCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookCategories.
     */
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[]
  }

  /**
   * BookCategory findMany
   */
  export type BookCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BookCategories to fetch.
     */
    where?: BookCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookCategories to fetch.
     */
    orderBy?: BookCategoryOrderByWithRelationInput | BookCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookCategories.
     */
    cursor?: BookCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookCategories.
     */
    skip?: number
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[]
  }

  /**
   * BookCategory create
   */
  export type BookCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BookCategory.
     */
    data: XOR<BookCategoryCreateInput, BookCategoryUncheckedCreateInput>
  }

  /**
   * BookCategory createMany
   */
  export type BookCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookCategories.
     */
    data: BookCategoryCreateManyInput | BookCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookCategory update
   */
  export type BookCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BookCategory.
     */
    data: XOR<BookCategoryUpdateInput, BookCategoryUncheckedUpdateInput>
    /**
     * Choose, which BookCategory to update.
     */
    where: BookCategoryWhereUniqueInput
  }

  /**
   * BookCategory updateMany
   */
  export type BookCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookCategories.
     */
    data: XOR<BookCategoryUpdateManyMutationInput, BookCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BookCategories to update
     */
    where?: BookCategoryWhereInput
    /**
     * Limit how many BookCategories to update.
     */
    limit?: number
  }

  /**
   * BookCategory upsert
   */
  export type BookCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BookCategory to update in case it exists.
     */
    where: BookCategoryWhereUniqueInput
    /**
     * In case the BookCategory found by the `where` argument doesn't exist, create a new BookCategory with this data.
     */
    create: XOR<BookCategoryCreateInput, BookCategoryUncheckedCreateInput>
    /**
     * In case the BookCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookCategoryUpdateInput, BookCategoryUncheckedUpdateInput>
  }

  /**
   * BookCategory delete
   */
  export type BookCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
    /**
     * Filter which BookCategory to delete.
     */
    where: BookCategoryWhereUniqueInput
  }

  /**
   * BookCategory deleteMany
   */
  export type BookCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookCategories to delete
     */
    where?: BookCategoryWhereInput
    /**
     * Limit how many BookCategories to delete.
     */
    limit?: number
  }

  /**
   * BookCategory.books
   */
  export type BookCategory$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * BookCategory.lastEditor
   */
  export type BookCategory$lastEditorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * BookCategory without action
   */
  export type BookCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    copies: number | null
    availableCopies: number | null
  }

  export type BookSumAggregateOutputType = {
    copies: number | null
    availableCopies: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    copies: number | null
    availableCopies: number | null
    categoryId: string | null
    entityId: string | null
    createdBy: string | null
    lastEditedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    copies: number | null
    availableCopies: number | null
    categoryId: string | null
    entityId: string | null
    createdBy: string | null
    lastEditedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    copies: number
    availableCopies: number
    categoryId: number
    entityId: number
    createdBy: number
    lastEditedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    copies?: true
    availableCopies?: true
  }

  export type BookSumAggregateInputType = {
    copies?: true
    availableCopies?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    copies?: true
    availableCopies?: true
    categoryId?: true
    entityId?: true
    createdBy?: true
    lastEditedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    copies?: true
    availableCopies?: true
    categoryId?: true
    entityId?: true
    createdBy?: true
    lastEditedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    copies?: true
    availableCopies?: true
    categoryId?: true
    entityId?: true
    createdBy?: true
    lastEditedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    categoryId: string
    entityId: string
    createdBy: string
    lastEditedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    copies?: boolean
    availableCopies?: boolean
    categoryId?: boolean
    entityId?: boolean
    createdBy?: boolean
    lastEditedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BookCategoryDefaultArgs<ExtArgs>
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    creator?: boolean | StaffDefaultArgs<ExtArgs>
    lastEditor?: boolean | Book$lastEditorArgs<ExtArgs>
    issuedBookItems?: boolean | Book$issuedBookItemsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>



  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    copies?: boolean
    availableCopies?: boolean
    categoryId?: boolean
    entityId?: boolean
    createdBy?: boolean
    lastEditedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "copies" | "availableCopies" | "categoryId" | "entityId" | "createdBy" | "lastEditedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BookCategoryDefaultArgs<ExtArgs>
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    creator?: boolean | StaffDefaultArgs<ExtArgs>
    lastEditor?: boolean | Book$lastEditorArgs<ExtArgs>
    issuedBookItems?: boolean | Book$issuedBookItemsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      category: Prisma.$BookCategoryPayload<ExtArgs>
      entity: Prisma.$EntityPayload<ExtArgs>
      creator: Prisma.$StaffPayload<ExtArgs>
      lastEditor: Prisma.$StaffPayload<ExtArgs> | null
      issuedBookItems: Prisma.$IssuedBookItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string
      copies: number
      availableCopies: number
      categoryId: string
      entityId: string
      createdBy: string
      lastEditedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends BookCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookCategoryDefaultArgs<ExtArgs>>): Prisma__BookCategoryClient<$Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    entity<T extends EntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntityDefaultArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    creator<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    lastEditor<T extends Book$lastEditorArgs<ExtArgs> = {}>(args?: Subset<T, Book$lastEditorArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    issuedBookItems<T extends Book$issuedBookItemsArgs<ExtArgs> = {}>(args?: Subset<T, Book$issuedBookItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Book model
   */ 
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly author: FieldRef<"Book", 'String'>
    readonly copies: FieldRef<"Book", 'Int'>
    readonly availableCopies: FieldRef<"Book", 'Int'>
    readonly categoryId: FieldRef<"Book", 'String'>
    readonly entityId: FieldRef<"Book", 'String'>
    readonly createdBy: FieldRef<"Book", 'String'>
    readonly lastEditedBy: FieldRef<"Book", 'String'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.lastEditor
   */
  export type Book$lastEditorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * Book.issuedBookItems
   */
  export type Book$issuedBookItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    where?: IssuedBookItemWhereInput
    orderBy?: IssuedBookItemOrderByWithRelationInput | IssuedBookItemOrderByWithRelationInput[]
    cursor?: IssuedBookItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuedBookItemScalarFieldEnum | IssuedBookItemScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model IssuedBook
   */

  export type AggregateIssuedBook = {
    _count: IssuedBookCountAggregateOutputType | null
    _min: IssuedBookMinAggregateOutputType | null
    _max: IssuedBookMaxAggregateOutputType | null
  }

  export type IssuedBookMinAggregateOutputType = {
    id: string | null
    issueDate: Date | null
    memberId: string | null
    entityId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssuedBookMaxAggregateOutputType = {
    id: string | null
    issueDate: Date | null
    memberId: string | null
    entityId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssuedBookCountAggregateOutputType = {
    id: number
    issueDate: number
    memberId: number
    entityId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IssuedBookMinAggregateInputType = {
    id?: true
    issueDate?: true
    memberId?: true
    entityId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssuedBookMaxAggregateInputType = {
    id?: true
    issueDate?: true
    memberId?: true
    entityId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssuedBookCountAggregateInputType = {
    id?: true
    issueDate?: true
    memberId?: true
    entityId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IssuedBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssuedBook to aggregate.
     */
    where?: IssuedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedBooks to fetch.
     */
    orderBy?: IssuedBookOrderByWithRelationInput | IssuedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssuedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IssuedBooks
    **/
    _count?: true | IssuedBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssuedBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssuedBookMaxAggregateInputType
  }

  export type GetIssuedBookAggregateType<T extends IssuedBookAggregateArgs> = {
        [P in keyof T & keyof AggregateIssuedBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssuedBook[P]>
      : GetScalarType<T[P], AggregateIssuedBook[P]>
  }




  export type IssuedBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedBookWhereInput
    orderBy?: IssuedBookOrderByWithAggregationInput | IssuedBookOrderByWithAggregationInput[]
    by: IssuedBookScalarFieldEnum[] | IssuedBookScalarFieldEnum
    having?: IssuedBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssuedBookCountAggregateInputType | true
    _min?: IssuedBookMinAggregateInputType
    _max?: IssuedBookMaxAggregateInputType
  }

  export type IssuedBookGroupByOutputType = {
    id: string
    issueDate: Date
    memberId: string
    entityId: string
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: IssuedBookCountAggregateOutputType | null
    _min: IssuedBookMinAggregateOutputType | null
    _max: IssuedBookMaxAggregateOutputType | null
  }

  type GetIssuedBookGroupByPayload<T extends IssuedBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssuedBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssuedBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssuedBookGroupByOutputType[P]>
            : GetScalarType<T[P], IssuedBookGroupByOutputType[P]>
        }
      >
    >


  export type IssuedBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueDate?: boolean
    memberId?: boolean
    entityId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
    creator?: boolean | StaffDefaultArgs<ExtArgs>
    items?: boolean | IssuedBook$itemsArgs<ExtArgs>
    _count?: boolean | IssuedBookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issuedBook"]>



  export type IssuedBookSelectScalar = {
    id?: boolean
    issueDate?: boolean
    memberId?: boolean
    entityId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IssuedBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "issueDate" | "memberId" | "entityId" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["issuedBook"]>
  export type IssuedBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | EntityDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
    creator?: boolean | StaffDefaultArgs<ExtArgs>
    items?: boolean | IssuedBook$itemsArgs<ExtArgs>
    _count?: boolean | IssuedBookCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $IssuedBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IssuedBook"
    objects: {
      entity: Prisma.$EntityPayload<ExtArgs>
      member: Prisma.$MemberPayload<ExtArgs>
      creator: Prisma.$StaffPayload<ExtArgs>
      items: Prisma.$IssuedBookItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      issueDate: Date
      memberId: string
      entityId: string
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["issuedBook"]>
    composites: {}
  }

  type IssuedBookGetPayload<S extends boolean | null | undefined | IssuedBookDefaultArgs> = $Result.GetResult<Prisma.$IssuedBookPayload, S>

  type IssuedBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssuedBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssuedBookCountAggregateInputType | true
    }

  export interface IssuedBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IssuedBook'], meta: { name: 'IssuedBook' } }
    /**
     * Find zero or one IssuedBook that matches the filter.
     * @param {IssuedBookFindUniqueArgs} args - Arguments to find a IssuedBook
     * @example
     * // Get one IssuedBook
     * const issuedBook = await prisma.issuedBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssuedBookFindUniqueArgs>(args: SelectSubset<T, IssuedBookFindUniqueArgs<ExtArgs>>): Prisma__IssuedBookClient<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one IssuedBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssuedBookFindUniqueOrThrowArgs} args - Arguments to find a IssuedBook
     * @example
     * // Get one IssuedBook
     * const issuedBook = await prisma.issuedBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssuedBookFindUniqueOrThrowArgs>(args: SelectSubset<T, IssuedBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssuedBookClient<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first IssuedBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookFindFirstArgs} args - Arguments to find a IssuedBook
     * @example
     * // Get one IssuedBook
     * const issuedBook = await prisma.issuedBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssuedBookFindFirstArgs>(args?: SelectSubset<T, IssuedBookFindFirstArgs<ExtArgs>>): Prisma__IssuedBookClient<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first IssuedBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookFindFirstOrThrowArgs} args - Arguments to find a IssuedBook
     * @example
     * // Get one IssuedBook
     * const issuedBook = await prisma.issuedBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssuedBookFindFirstOrThrowArgs>(args?: SelectSubset<T, IssuedBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssuedBookClient<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more IssuedBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IssuedBooks
     * const issuedBooks = await prisma.issuedBook.findMany()
     * 
     * // Get first 10 IssuedBooks
     * const issuedBooks = await prisma.issuedBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issuedBookWithIdOnly = await prisma.issuedBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssuedBookFindManyArgs>(args?: SelectSubset<T, IssuedBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a IssuedBook.
     * @param {IssuedBookCreateArgs} args - Arguments to create a IssuedBook.
     * @example
     * // Create one IssuedBook
     * const IssuedBook = await prisma.issuedBook.create({
     *   data: {
     *     // ... data to create a IssuedBook
     *   }
     * })
     * 
     */
    create<T extends IssuedBookCreateArgs>(args: SelectSubset<T, IssuedBookCreateArgs<ExtArgs>>): Prisma__IssuedBookClient<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many IssuedBooks.
     * @param {IssuedBookCreateManyArgs} args - Arguments to create many IssuedBooks.
     * @example
     * // Create many IssuedBooks
     * const issuedBook = await prisma.issuedBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssuedBookCreateManyArgs>(args?: SelectSubset<T, IssuedBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IssuedBook.
     * @param {IssuedBookDeleteArgs} args - Arguments to delete one IssuedBook.
     * @example
     * // Delete one IssuedBook
     * const IssuedBook = await prisma.issuedBook.delete({
     *   where: {
     *     // ... filter to delete one IssuedBook
     *   }
     * })
     * 
     */
    delete<T extends IssuedBookDeleteArgs>(args: SelectSubset<T, IssuedBookDeleteArgs<ExtArgs>>): Prisma__IssuedBookClient<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one IssuedBook.
     * @param {IssuedBookUpdateArgs} args - Arguments to update one IssuedBook.
     * @example
     * // Update one IssuedBook
     * const issuedBook = await prisma.issuedBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssuedBookUpdateArgs>(args: SelectSubset<T, IssuedBookUpdateArgs<ExtArgs>>): Prisma__IssuedBookClient<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more IssuedBooks.
     * @param {IssuedBookDeleteManyArgs} args - Arguments to filter IssuedBooks to delete.
     * @example
     * // Delete a few IssuedBooks
     * const { count } = await prisma.issuedBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssuedBookDeleteManyArgs>(args?: SelectSubset<T, IssuedBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssuedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IssuedBooks
     * const issuedBook = await prisma.issuedBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssuedBookUpdateManyArgs>(args: SelectSubset<T, IssuedBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IssuedBook.
     * @param {IssuedBookUpsertArgs} args - Arguments to update or create a IssuedBook.
     * @example
     * // Update or create a IssuedBook
     * const issuedBook = await prisma.issuedBook.upsert({
     *   create: {
     *     // ... data to create a IssuedBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IssuedBook we want to update
     *   }
     * })
     */
    upsert<T extends IssuedBookUpsertArgs>(args: SelectSubset<T, IssuedBookUpsertArgs<ExtArgs>>): Prisma__IssuedBookClient<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of IssuedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookCountArgs} args - Arguments to filter IssuedBooks to count.
     * @example
     * // Count the number of IssuedBooks
     * const count = await prisma.issuedBook.count({
     *   where: {
     *     // ... the filter for the IssuedBooks we want to count
     *   }
     * })
    **/
    count<T extends IssuedBookCountArgs>(
      args?: Subset<T, IssuedBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssuedBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IssuedBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssuedBookAggregateArgs>(args: Subset<T, IssuedBookAggregateArgs>): Prisma.PrismaPromise<GetIssuedBookAggregateType<T>>

    /**
     * Group by IssuedBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookGroupByArgs} args - Group by arguments.
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
      T extends IssuedBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssuedBookGroupByArgs['orderBy'] }
        : { orderBy?: IssuedBookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IssuedBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssuedBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IssuedBook model
   */
  readonly fields: IssuedBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IssuedBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssuedBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entity<T extends EntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntityDefaultArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    creator<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    items<T extends IssuedBook$itemsArgs<ExtArgs> = {}>(args?: Subset<T, IssuedBook$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the IssuedBook model
   */ 
  interface IssuedBookFieldRefs {
    readonly id: FieldRef<"IssuedBook", 'String'>
    readonly issueDate: FieldRef<"IssuedBook", 'DateTime'>
    readonly memberId: FieldRef<"IssuedBook", 'String'>
    readonly entityId: FieldRef<"IssuedBook", 'String'>
    readonly createdBy: FieldRef<"IssuedBook", 'String'>
    readonly createdAt: FieldRef<"IssuedBook", 'DateTime'>
    readonly updatedAt: FieldRef<"IssuedBook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IssuedBook findUnique
   */
  export type IssuedBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    /**
     * Filter, which IssuedBook to fetch.
     */
    where: IssuedBookWhereUniqueInput
  }

  /**
   * IssuedBook findUniqueOrThrow
   */
  export type IssuedBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    /**
     * Filter, which IssuedBook to fetch.
     */
    where: IssuedBookWhereUniqueInput
  }

  /**
   * IssuedBook findFirst
   */
  export type IssuedBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    /**
     * Filter, which IssuedBook to fetch.
     */
    where?: IssuedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedBooks to fetch.
     */
    orderBy?: IssuedBookOrderByWithRelationInput | IssuedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssuedBooks.
     */
    cursor?: IssuedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssuedBooks.
     */
    distinct?: IssuedBookScalarFieldEnum | IssuedBookScalarFieldEnum[]
  }

  /**
   * IssuedBook findFirstOrThrow
   */
  export type IssuedBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    /**
     * Filter, which IssuedBook to fetch.
     */
    where?: IssuedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedBooks to fetch.
     */
    orderBy?: IssuedBookOrderByWithRelationInput | IssuedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssuedBooks.
     */
    cursor?: IssuedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssuedBooks.
     */
    distinct?: IssuedBookScalarFieldEnum | IssuedBookScalarFieldEnum[]
  }

  /**
   * IssuedBook findMany
   */
  export type IssuedBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    /**
     * Filter, which IssuedBooks to fetch.
     */
    where?: IssuedBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedBooks to fetch.
     */
    orderBy?: IssuedBookOrderByWithRelationInput | IssuedBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IssuedBooks.
     */
    cursor?: IssuedBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedBooks.
     */
    skip?: number
    distinct?: IssuedBookScalarFieldEnum | IssuedBookScalarFieldEnum[]
  }

  /**
   * IssuedBook create
   */
  export type IssuedBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    /**
     * The data needed to create a IssuedBook.
     */
    data: XOR<IssuedBookCreateInput, IssuedBookUncheckedCreateInput>
  }

  /**
   * IssuedBook createMany
   */
  export type IssuedBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IssuedBooks.
     */
    data: IssuedBookCreateManyInput | IssuedBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IssuedBook update
   */
  export type IssuedBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    /**
     * The data needed to update a IssuedBook.
     */
    data: XOR<IssuedBookUpdateInput, IssuedBookUncheckedUpdateInput>
    /**
     * Choose, which IssuedBook to update.
     */
    where: IssuedBookWhereUniqueInput
  }

  /**
   * IssuedBook updateMany
   */
  export type IssuedBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IssuedBooks.
     */
    data: XOR<IssuedBookUpdateManyMutationInput, IssuedBookUncheckedUpdateManyInput>
    /**
     * Filter which IssuedBooks to update
     */
    where?: IssuedBookWhereInput
    /**
     * Limit how many IssuedBooks to update.
     */
    limit?: number
  }

  /**
   * IssuedBook upsert
   */
  export type IssuedBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    /**
     * The filter to search for the IssuedBook to update in case it exists.
     */
    where: IssuedBookWhereUniqueInput
    /**
     * In case the IssuedBook found by the `where` argument doesn't exist, create a new IssuedBook with this data.
     */
    create: XOR<IssuedBookCreateInput, IssuedBookUncheckedCreateInput>
    /**
     * In case the IssuedBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssuedBookUpdateInput, IssuedBookUncheckedUpdateInput>
  }

  /**
   * IssuedBook delete
   */
  export type IssuedBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
    /**
     * Filter which IssuedBook to delete.
     */
    where: IssuedBookWhereUniqueInput
  }

  /**
   * IssuedBook deleteMany
   */
  export type IssuedBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssuedBooks to delete
     */
    where?: IssuedBookWhereInput
    /**
     * Limit how many IssuedBooks to delete.
     */
    limit?: number
  }

  /**
   * IssuedBook.items
   */
  export type IssuedBook$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    where?: IssuedBookItemWhereInput
    orderBy?: IssuedBookItemOrderByWithRelationInput | IssuedBookItemOrderByWithRelationInput[]
    cursor?: IssuedBookItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuedBookItemScalarFieldEnum | IssuedBookItemScalarFieldEnum[]
  }

  /**
   * IssuedBook without action
   */
  export type IssuedBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBook
     */
    select?: IssuedBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBook
     */
    omit?: IssuedBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookInclude<ExtArgs> | null
  }


  /**
   * Model IssuedBookItem
   */

  export type AggregateIssuedBookItem = {
    _count: IssuedBookItemCountAggregateOutputType | null
    _min: IssuedBookItemMinAggregateOutputType | null
    _max: IssuedBookItemMaxAggregateOutputType | null
  }

  export type IssuedBookItemMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    issuedBookId: string | null
    collected: boolean | null
    collectedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssuedBookItemMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    issuedBookId: string | null
    collected: boolean | null
    collectedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssuedBookItemCountAggregateOutputType = {
    id: number
    bookId: number
    issuedBookId: number
    collected: number
    collectedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IssuedBookItemMinAggregateInputType = {
    id?: true
    bookId?: true
    issuedBookId?: true
    collected?: true
    collectedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssuedBookItemMaxAggregateInputType = {
    id?: true
    bookId?: true
    issuedBookId?: true
    collected?: true
    collectedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssuedBookItemCountAggregateInputType = {
    id?: true
    bookId?: true
    issuedBookId?: true
    collected?: true
    collectedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IssuedBookItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssuedBookItem to aggregate.
     */
    where?: IssuedBookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedBookItems to fetch.
     */
    orderBy?: IssuedBookItemOrderByWithRelationInput | IssuedBookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssuedBookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedBookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedBookItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IssuedBookItems
    **/
    _count?: true | IssuedBookItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssuedBookItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssuedBookItemMaxAggregateInputType
  }

  export type GetIssuedBookItemAggregateType<T extends IssuedBookItemAggregateArgs> = {
        [P in keyof T & keyof AggregateIssuedBookItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssuedBookItem[P]>
      : GetScalarType<T[P], AggregateIssuedBookItem[P]>
  }




  export type IssuedBookItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuedBookItemWhereInput
    orderBy?: IssuedBookItemOrderByWithAggregationInput | IssuedBookItemOrderByWithAggregationInput[]
    by: IssuedBookItemScalarFieldEnum[] | IssuedBookItemScalarFieldEnum
    having?: IssuedBookItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssuedBookItemCountAggregateInputType | true
    _min?: IssuedBookItemMinAggregateInputType
    _max?: IssuedBookItemMaxAggregateInputType
  }

  export type IssuedBookItemGroupByOutputType = {
    id: string
    bookId: string
    issuedBookId: string
    collected: boolean
    collectedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: IssuedBookItemCountAggregateOutputType | null
    _min: IssuedBookItemMinAggregateOutputType | null
    _max: IssuedBookItemMaxAggregateOutputType | null
  }

  type GetIssuedBookItemGroupByPayload<T extends IssuedBookItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssuedBookItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssuedBookItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssuedBookItemGroupByOutputType[P]>
            : GetScalarType<T[P], IssuedBookItemGroupByOutputType[P]>
        }
      >
    >


  export type IssuedBookItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    issuedBookId?: boolean
    collected?: boolean
    collectedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    issuedBook?: boolean | IssuedBookDefaultArgs<ExtArgs>
    collector?: boolean | IssuedBookItem$collectorArgs<ExtArgs>
  }, ExtArgs["result"]["issuedBookItem"]>



  export type IssuedBookItemSelectScalar = {
    id?: boolean
    bookId?: boolean
    issuedBookId?: boolean
    collected?: boolean
    collectedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IssuedBookItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "issuedBookId" | "collected" | "collectedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["issuedBookItem"]>
  export type IssuedBookItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    issuedBook?: boolean | IssuedBookDefaultArgs<ExtArgs>
    collector?: boolean | IssuedBookItem$collectorArgs<ExtArgs>
  }

  export type $IssuedBookItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IssuedBookItem"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      issuedBook: Prisma.$IssuedBookPayload<ExtArgs>
      collector: Prisma.$StaffPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
      issuedBookId: string
      collected: boolean
      collectedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["issuedBookItem"]>
    composites: {}
  }

  type IssuedBookItemGetPayload<S extends boolean | null | undefined | IssuedBookItemDefaultArgs> = $Result.GetResult<Prisma.$IssuedBookItemPayload, S>

  type IssuedBookItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssuedBookItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssuedBookItemCountAggregateInputType | true
    }

  export interface IssuedBookItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IssuedBookItem'], meta: { name: 'IssuedBookItem' } }
    /**
     * Find zero or one IssuedBookItem that matches the filter.
     * @param {IssuedBookItemFindUniqueArgs} args - Arguments to find a IssuedBookItem
     * @example
     * // Get one IssuedBookItem
     * const issuedBookItem = await prisma.issuedBookItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssuedBookItemFindUniqueArgs>(args: SelectSubset<T, IssuedBookItemFindUniqueArgs<ExtArgs>>): Prisma__IssuedBookItemClient<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one IssuedBookItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssuedBookItemFindUniqueOrThrowArgs} args - Arguments to find a IssuedBookItem
     * @example
     * // Get one IssuedBookItem
     * const issuedBookItem = await prisma.issuedBookItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssuedBookItemFindUniqueOrThrowArgs>(args: SelectSubset<T, IssuedBookItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssuedBookItemClient<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first IssuedBookItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookItemFindFirstArgs} args - Arguments to find a IssuedBookItem
     * @example
     * // Get one IssuedBookItem
     * const issuedBookItem = await prisma.issuedBookItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssuedBookItemFindFirstArgs>(args?: SelectSubset<T, IssuedBookItemFindFirstArgs<ExtArgs>>): Prisma__IssuedBookItemClient<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first IssuedBookItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookItemFindFirstOrThrowArgs} args - Arguments to find a IssuedBookItem
     * @example
     * // Get one IssuedBookItem
     * const issuedBookItem = await prisma.issuedBookItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssuedBookItemFindFirstOrThrowArgs>(args?: SelectSubset<T, IssuedBookItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssuedBookItemClient<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more IssuedBookItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IssuedBookItems
     * const issuedBookItems = await prisma.issuedBookItem.findMany()
     * 
     * // Get first 10 IssuedBookItems
     * const issuedBookItems = await prisma.issuedBookItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issuedBookItemWithIdOnly = await prisma.issuedBookItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssuedBookItemFindManyArgs>(args?: SelectSubset<T, IssuedBookItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a IssuedBookItem.
     * @param {IssuedBookItemCreateArgs} args - Arguments to create a IssuedBookItem.
     * @example
     * // Create one IssuedBookItem
     * const IssuedBookItem = await prisma.issuedBookItem.create({
     *   data: {
     *     // ... data to create a IssuedBookItem
     *   }
     * })
     * 
     */
    create<T extends IssuedBookItemCreateArgs>(args: SelectSubset<T, IssuedBookItemCreateArgs<ExtArgs>>): Prisma__IssuedBookItemClient<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many IssuedBookItems.
     * @param {IssuedBookItemCreateManyArgs} args - Arguments to create many IssuedBookItems.
     * @example
     * // Create many IssuedBookItems
     * const issuedBookItem = await prisma.issuedBookItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssuedBookItemCreateManyArgs>(args?: SelectSubset<T, IssuedBookItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IssuedBookItem.
     * @param {IssuedBookItemDeleteArgs} args - Arguments to delete one IssuedBookItem.
     * @example
     * // Delete one IssuedBookItem
     * const IssuedBookItem = await prisma.issuedBookItem.delete({
     *   where: {
     *     // ... filter to delete one IssuedBookItem
     *   }
     * })
     * 
     */
    delete<T extends IssuedBookItemDeleteArgs>(args: SelectSubset<T, IssuedBookItemDeleteArgs<ExtArgs>>): Prisma__IssuedBookItemClient<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one IssuedBookItem.
     * @param {IssuedBookItemUpdateArgs} args - Arguments to update one IssuedBookItem.
     * @example
     * // Update one IssuedBookItem
     * const issuedBookItem = await prisma.issuedBookItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssuedBookItemUpdateArgs>(args: SelectSubset<T, IssuedBookItemUpdateArgs<ExtArgs>>): Prisma__IssuedBookItemClient<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more IssuedBookItems.
     * @param {IssuedBookItemDeleteManyArgs} args - Arguments to filter IssuedBookItems to delete.
     * @example
     * // Delete a few IssuedBookItems
     * const { count } = await prisma.issuedBookItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssuedBookItemDeleteManyArgs>(args?: SelectSubset<T, IssuedBookItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssuedBookItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IssuedBookItems
     * const issuedBookItem = await prisma.issuedBookItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssuedBookItemUpdateManyArgs>(args: SelectSubset<T, IssuedBookItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IssuedBookItem.
     * @param {IssuedBookItemUpsertArgs} args - Arguments to update or create a IssuedBookItem.
     * @example
     * // Update or create a IssuedBookItem
     * const issuedBookItem = await prisma.issuedBookItem.upsert({
     *   create: {
     *     // ... data to create a IssuedBookItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IssuedBookItem we want to update
     *   }
     * })
     */
    upsert<T extends IssuedBookItemUpsertArgs>(args: SelectSubset<T, IssuedBookItemUpsertArgs<ExtArgs>>): Prisma__IssuedBookItemClient<$Result.GetResult<Prisma.$IssuedBookItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of IssuedBookItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookItemCountArgs} args - Arguments to filter IssuedBookItems to count.
     * @example
     * // Count the number of IssuedBookItems
     * const count = await prisma.issuedBookItem.count({
     *   where: {
     *     // ... the filter for the IssuedBookItems we want to count
     *   }
     * })
    **/
    count<T extends IssuedBookItemCountArgs>(
      args?: Subset<T, IssuedBookItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssuedBookItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IssuedBookItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssuedBookItemAggregateArgs>(args: Subset<T, IssuedBookItemAggregateArgs>): Prisma.PrismaPromise<GetIssuedBookItemAggregateType<T>>

    /**
     * Group by IssuedBookItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuedBookItemGroupByArgs} args - Group by arguments.
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
      T extends IssuedBookItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssuedBookItemGroupByArgs['orderBy'] }
        : { orderBy?: IssuedBookItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IssuedBookItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssuedBookItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IssuedBookItem model
   */
  readonly fields: IssuedBookItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IssuedBookItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssuedBookItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    issuedBook<T extends IssuedBookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssuedBookDefaultArgs<ExtArgs>>): Prisma__IssuedBookClient<$Result.GetResult<Prisma.$IssuedBookPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    collector<T extends IssuedBookItem$collectorArgs<ExtArgs> = {}>(args?: Subset<T, IssuedBookItem$collectorArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the IssuedBookItem model
   */ 
  interface IssuedBookItemFieldRefs {
    readonly id: FieldRef<"IssuedBookItem", 'String'>
    readonly bookId: FieldRef<"IssuedBookItem", 'String'>
    readonly issuedBookId: FieldRef<"IssuedBookItem", 'String'>
    readonly collected: FieldRef<"IssuedBookItem", 'Boolean'>
    readonly collectedBy: FieldRef<"IssuedBookItem", 'String'>
    readonly createdAt: FieldRef<"IssuedBookItem", 'DateTime'>
    readonly updatedAt: FieldRef<"IssuedBookItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IssuedBookItem findUnique
   */
  export type IssuedBookItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    /**
     * Filter, which IssuedBookItem to fetch.
     */
    where: IssuedBookItemWhereUniqueInput
  }

  /**
   * IssuedBookItem findUniqueOrThrow
   */
  export type IssuedBookItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    /**
     * Filter, which IssuedBookItem to fetch.
     */
    where: IssuedBookItemWhereUniqueInput
  }

  /**
   * IssuedBookItem findFirst
   */
  export type IssuedBookItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    /**
     * Filter, which IssuedBookItem to fetch.
     */
    where?: IssuedBookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedBookItems to fetch.
     */
    orderBy?: IssuedBookItemOrderByWithRelationInput | IssuedBookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssuedBookItems.
     */
    cursor?: IssuedBookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedBookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedBookItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssuedBookItems.
     */
    distinct?: IssuedBookItemScalarFieldEnum | IssuedBookItemScalarFieldEnum[]
  }

  /**
   * IssuedBookItem findFirstOrThrow
   */
  export type IssuedBookItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    /**
     * Filter, which IssuedBookItem to fetch.
     */
    where?: IssuedBookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedBookItems to fetch.
     */
    orderBy?: IssuedBookItemOrderByWithRelationInput | IssuedBookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssuedBookItems.
     */
    cursor?: IssuedBookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedBookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedBookItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssuedBookItems.
     */
    distinct?: IssuedBookItemScalarFieldEnum | IssuedBookItemScalarFieldEnum[]
  }

  /**
   * IssuedBookItem findMany
   */
  export type IssuedBookItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    /**
     * Filter, which IssuedBookItems to fetch.
     */
    where?: IssuedBookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssuedBookItems to fetch.
     */
    orderBy?: IssuedBookItemOrderByWithRelationInput | IssuedBookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IssuedBookItems.
     */
    cursor?: IssuedBookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssuedBookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssuedBookItems.
     */
    skip?: number
    distinct?: IssuedBookItemScalarFieldEnum | IssuedBookItemScalarFieldEnum[]
  }

  /**
   * IssuedBookItem create
   */
  export type IssuedBookItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    /**
     * The data needed to create a IssuedBookItem.
     */
    data: XOR<IssuedBookItemCreateInput, IssuedBookItemUncheckedCreateInput>
  }

  /**
   * IssuedBookItem createMany
   */
  export type IssuedBookItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IssuedBookItems.
     */
    data: IssuedBookItemCreateManyInput | IssuedBookItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IssuedBookItem update
   */
  export type IssuedBookItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    /**
     * The data needed to update a IssuedBookItem.
     */
    data: XOR<IssuedBookItemUpdateInput, IssuedBookItemUncheckedUpdateInput>
    /**
     * Choose, which IssuedBookItem to update.
     */
    where: IssuedBookItemWhereUniqueInput
  }

  /**
   * IssuedBookItem updateMany
   */
  export type IssuedBookItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IssuedBookItems.
     */
    data: XOR<IssuedBookItemUpdateManyMutationInput, IssuedBookItemUncheckedUpdateManyInput>
    /**
     * Filter which IssuedBookItems to update
     */
    where?: IssuedBookItemWhereInput
    /**
     * Limit how many IssuedBookItems to update.
     */
    limit?: number
  }

  /**
   * IssuedBookItem upsert
   */
  export type IssuedBookItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    /**
     * The filter to search for the IssuedBookItem to update in case it exists.
     */
    where: IssuedBookItemWhereUniqueInput
    /**
     * In case the IssuedBookItem found by the `where` argument doesn't exist, create a new IssuedBookItem with this data.
     */
    create: XOR<IssuedBookItemCreateInput, IssuedBookItemUncheckedCreateInput>
    /**
     * In case the IssuedBookItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssuedBookItemUpdateInput, IssuedBookItemUncheckedUpdateInput>
  }

  /**
   * IssuedBookItem delete
   */
  export type IssuedBookItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
    /**
     * Filter which IssuedBookItem to delete.
     */
    where: IssuedBookItemWhereUniqueInput
  }

  /**
   * IssuedBookItem deleteMany
   */
  export type IssuedBookItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssuedBookItems to delete
     */
    where?: IssuedBookItemWhereInput
    /**
     * Limit how many IssuedBookItems to delete.
     */
    limit?: number
  }

  /**
   * IssuedBookItem.collector
   */
  export type IssuedBookItem$collectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * IssuedBookItem without action
   */
  export type IssuedBookItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuedBookItem
     */
    select?: IssuedBookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssuedBookItem
     */
    omit?: IssuedBookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuedBookItemInclude<ExtArgs> | null
  }


  /**
   * Model PasswordReset
   */

  export type AggregatePasswordReset = {
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  export type PasswordResetMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type PasswordResetMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type PasswordResetCountAggregateOutputType = {
    id: number
    email: number
    token: number
    createdAt: number
    expiresAt: number
    used: number
    _all: number
  }


  export type PasswordResetMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    used?: true
  }

  export type PasswordResetMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    used?: true
  }

  export type PasswordResetCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    used?: true
    _all?: true
  }

  export type PasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordReset to aggregate.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResets
    **/
    _count?: true | PasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetMaxAggregateInputType
  }

  export type GetPasswordResetAggregateType<T extends PasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordReset[P]>
      : GetScalarType<T[P], AggregatePasswordReset[P]>
  }




  export type PasswordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithAggregationInput | PasswordResetOrderByWithAggregationInput[]
    by: PasswordResetScalarFieldEnum[] | PasswordResetScalarFieldEnum
    having?: PasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetCountAggregateInputType | true
    _min?: PasswordResetMinAggregateInputType
    _max?: PasswordResetMaxAggregateInputType
  }

  export type PasswordResetGroupByOutputType = {
    id: string
    email: string
    token: string
    createdAt: Date
    expiresAt: Date
    used: boolean
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  type GetPasswordResetGroupByPayload<T extends PasswordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    used?: boolean
  }, ExtArgs["result"]["passwordReset"]>



  export type PasswordResetSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    used?: boolean
  }

  export type PasswordResetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "createdAt" | "expiresAt" | "used", ExtArgs["result"]["passwordReset"]>

  export type $PasswordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordReset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      createdAt: Date
      expiresAt: Date
      used: boolean
    }, ExtArgs["result"]["passwordReset"]>
    composites: {}
  }

  type PasswordResetGetPayload<S extends boolean | null | undefined | PasswordResetDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetPayload, S>

  type PasswordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetCountAggregateInputType | true
    }

  export interface PasswordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordReset'], meta: { name: 'PasswordReset' } }
    /**
     * Find zero or one PasswordReset that matches the filter.
     * @param {PasswordResetFindUniqueArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetFindUniqueArgs>(args: SelectSubset<T, PasswordResetFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PasswordReset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetFindUniqueOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetFindFirstArgs>(args?: SelectSubset<T, PasswordResetFindFirstArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetFindManyArgs>(args?: SelectSubset<T, PasswordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PasswordReset.
     * @param {PasswordResetCreateArgs} args - Arguments to create a PasswordReset.
     * @example
     * // Create one PasswordReset
     * const PasswordReset = await prisma.passwordReset.create({
     *   data: {
     *     // ... data to create a PasswordReset
     *   }
     * })
     * 
     */
    create<T extends PasswordResetCreateArgs>(args: SelectSubset<T, PasswordResetCreateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PasswordResets.
     * @param {PasswordResetCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetCreateManyArgs>(args?: SelectSubset<T, PasswordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PasswordReset.
     * @param {PasswordResetDeleteArgs} args - Arguments to delete one PasswordReset.
     * @example
     * // Delete one PasswordReset
     * const PasswordReset = await prisma.passwordReset.delete({
     *   where: {
     *     // ... filter to delete one PasswordReset
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetDeleteArgs>(args: SelectSubset<T, PasswordResetDeleteArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PasswordReset.
     * @param {PasswordResetUpdateArgs} args - Arguments to update one PasswordReset.
     * @example
     * // Update one PasswordReset
     * const passwordReset = await prisma.passwordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetUpdateArgs>(args: SelectSubset<T, PasswordResetUpdateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {PasswordResetDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetDeleteManyArgs>(args?: SelectSubset<T, PasswordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetUpdateManyArgs>(args: SelectSubset<T, PasswordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PasswordReset.
     * @param {PasswordResetUpsertArgs} args - Arguments to update or create a PasswordReset.
     * @example
     * // Update or create a PasswordReset
     * const passwordReset = await prisma.passwordReset.upsert({
     *   create: {
     *     // ... data to create a PasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetUpsertArgs>(args: SelectSubset<T, PasswordResetUpsertArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordReset.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetCountArgs>(
      args?: Subset<T, PasswordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetAggregateArgs>(args: Subset<T, PasswordResetAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetAggregateType<T>>

    /**
     * Group by PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordReset model
   */
  readonly fields: PasswordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PasswordReset model
   */ 
  interface PasswordResetFieldRefs {
    readonly id: FieldRef<"PasswordReset", 'String'>
    readonly email: FieldRef<"PasswordReset", 'String'>
    readonly token: FieldRef<"PasswordReset", 'String'>
    readonly createdAt: FieldRef<"PasswordReset", 'DateTime'>
    readonly expiresAt: FieldRef<"PasswordReset", 'DateTime'>
    readonly used: FieldRef<"PasswordReset", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PasswordReset findUnique
   */
  export type PasswordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findUniqueOrThrow
   */
  export type PasswordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findFirst
   */
  export type PasswordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findFirstOrThrow
   */
  export type PasswordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findMany
   */
  export type PasswordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset create
   */
  export type PasswordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordReset.
     */
    data: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
  }

  /**
   * PasswordReset createMany
   */
  export type PasswordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset update
   */
  export type PasswordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordReset.
     */
    data: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
    /**
     * Choose, which PasswordReset to update.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset updateMany
   */
  export type PasswordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset upsert
   */
  export type PasswordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordReset to update in case it exists.
     */
    where: PasswordResetWhereUniqueInput
    /**
     * In case the PasswordReset found by the `where` argument doesn't exist, create a new PasswordReset with this data.
     */
    create: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
    /**
     * In case the PasswordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
  }

  /**
   * PasswordReset delete
   */
  export type PasswordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Filter which PasswordReset to delete.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset deleteMany
   */
  export type PasswordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to delete
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to delete.
     */
    limit?: number
  }

  /**
   * PasswordReset without action
   */
  export type PasswordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
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
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
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
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EntityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EntityScalarFieldEnum = (typeof EntityScalarFieldEnum)[keyof typeof EntityScalarFieldEnum]


  export const HeadPersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    entityId: 'entityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeadPersonScalarFieldEnum = (typeof HeadPersonScalarFieldEnum)[keyof typeof HeadPersonScalarFieldEnum]


  export const ContactPersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    entityId: 'entityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactPersonScalarFieldEnum = (typeof ContactPersonScalarFieldEnum)[keyof typeof ContactPersonScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    phone: 'phone',
    email: 'email',
    address: 'address',
    entityId: 'entityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pasword: 'pasword'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profileImage: 'profileImage',
    memberType: 'memberType',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    address: 'address',
    class: 'class',
    division: 'division',
    entityId: 'entityId',
    createdBy: 'createdBy',
    lastEditedBy: 'lastEditedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const BookCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    entityId: 'entityId',
    createdBy: 'createdBy',
    lastEditedBy: 'lastEditedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookCategoryScalarFieldEnum = (typeof BookCategoryScalarFieldEnum)[keyof typeof BookCategoryScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    copies: 'copies',
    availableCopies: 'availableCopies',
    categoryId: 'categoryId',
    entityId: 'entityId',
    createdBy: 'createdBy',
    lastEditedBy: 'lastEditedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const IssuedBookScalarFieldEnum: {
    id: 'id',
    issueDate: 'issueDate',
    memberId: 'memberId',
    entityId: 'entityId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IssuedBookScalarFieldEnum = (typeof IssuedBookScalarFieldEnum)[keyof typeof IssuedBookScalarFieldEnum]


  export const IssuedBookItemScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    issuedBookId: 'issuedBookId',
    collected: 'collected',
    collectedBy: 'collectedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IssuedBookItemScalarFieldEnum = (typeof IssuedBookItemScalarFieldEnum)[keyof typeof IssuedBookItemScalarFieldEnum]


  export const PasswordResetScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    used: 'used'
  };

  export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const EntityOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    type: 'type'
  };

  export type EntityOrderByRelevanceFieldEnum = (typeof EntityOrderByRelevanceFieldEnum)[keyof typeof EntityOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const HeadPersonOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    entityId: 'entityId'
  };

  export type HeadPersonOrderByRelevanceFieldEnum = (typeof HeadPersonOrderByRelevanceFieldEnum)[keyof typeof HeadPersonOrderByRelevanceFieldEnum]


  export const ContactPersonOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    entityId: 'entityId'
  };

  export type ContactPersonOrderByRelevanceFieldEnum = (typeof ContactPersonOrderByRelevanceFieldEnum)[keyof typeof ContactPersonOrderByRelevanceFieldEnum]


  export const StaffOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    phone: 'phone',
    email: 'email',
    address: 'address',
    entityId: 'entityId',
    pasword: 'pasword'
  };

  export type StaffOrderByRelevanceFieldEnum = (typeof StaffOrderByRelevanceFieldEnum)[keyof typeof StaffOrderByRelevanceFieldEnum]


  export const MemberOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    profileImage: 'profileImage',
    phoneNumber: 'phoneNumber',
    address: 'address',
    class: 'class',
    division: 'division',
    entityId: 'entityId',
    createdBy: 'createdBy',
    lastEditedBy: 'lastEditedBy'
  };

  export type MemberOrderByRelevanceFieldEnum = (typeof MemberOrderByRelevanceFieldEnum)[keyof typeof MemberOrderByRelevanceFieldEnum]


  export const BookCategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    entityId: 'entityId',
    createdBy: 'createdBy',
    lastEditedBy: 'lastEditedBy'
  };

  export type BookCategoryOrderByRelevanceFieldEnum = (typeof BookCategoryOrderByRelevanceFieldEnum)[keyof typeof BookCategoryOrderByRelevanceFieldEnum]


  export const BookOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    categoryId: 'categoryId',
    entityId: 'entityId',
    createdBy: 'createdBy',
    lastEditedBy: 'lastEditedBy'
  };

  export type BookOrderByRelevanceFieldEnum = (typeof BookOrderByRelevanceFieldEnum)[keyof typeof BookOrderByRelevanceFieldEnum]


  export const IssuedBookOrderByRelevanceFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    entityId: 'entityId',
    createdBy: 'createdBy'
  };

  export type IssuedBookOrderByRelevanceFieldEnum = (typeof IssuedBookOrderByRelevanceFieldEnum)[keyof typeof IssuedBookOrderByRelevanceFieldEnum]


  export const IssuedBookItemOrderByRelevanceFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    issuedBookId: 'issuedBookId',
    collectedBy: 'collectedBy'
  };

  export type IssuedBookItemOrderByRelevanceFieldEnum = (typeof IssuedBookItemOrderByRelevanceFieldEnum)[keyof typeof IssuedBookItemOrderByRelevanceFieldEnum]


  export const PasswordResetOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token'
  };

  export type PasswordResetOrderByRelevanceFieldEnum = (typeof PasswordResetOrderByRelevanceFieldEnum)[keyof typeof PasswordResetOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'MemberType'
   */
  export type EnumMemberTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberType'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EntityWhereInput = {
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    id?: StringFilter<"Entity"> | string
    name?: StringFilter<"Entity"> | string
    address?: StringFilter<"Entity"> | string
    type?: StringFilter<"Entity"> | string
    createdAt?: DateTimeFilter<"Entity"> | Date | string
    updatedAt?: DateTimeFilter<"Entity"> | Date | string
    books?: BookListRelationFilter
    bookCategories?: BookCategoryListRelationFilter
    contactPerson?: XOR<ContactPersonNullableScalarRelationFilter, ContactPersonWhereInput> | null
    headPerson?: XOR<HeadPersonNullableScalarRelationFilter, HeadPersonWhereInput> | null
    issuedBooks?: IssuedBookListRelationFilter
    staff?: StaffListRelationFilter
    members?: MemberListRelationFilter
  }

  export type EntityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    books?: BookOrderByRelationAggregateInput
    bookCategories?: BookCategoryOrderByRelationAggregateInput
    contactPerson?: ContactPersonOrderByWithRelationInput
    headPerson?: HeadPersonOrderByWithRelationInput
    issuedBooks?: IssuedBookOrderByRelationAggregateInput
    staff?: StaffOrderByRelationAggregateInput
    members?: MemberOrderByRelationAggregateInput
    _relevance?: EntityOrderByRelevanceInput
  }

  export type EntityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    name?: StringFilter<"Entity"> | string
    address?: StringFilter<"Entity"> | string
    type?: StringFilter<"Entity"> | string
    createdAt?: DateTimeFilter<"Entity"> | Date | string
    updatedAt?: DateTimeFilter<"Entity"> | Date | string
    books?: BookListRelationFilter
    bookCategories?: BookCategoryListRelationFilter
    contactPerson?: XOR<ContactPersonNullableScalarRelationFilter, ContactPersonWhereInput> | null
    headPerson?: XOR<HeadPersonNullableScalarRelationFilter, HeadPersonWhereInput> | null
    issuedBooks?: IssuedBookListRelationFilter
    staff?: StaffListRelationFilter
    members?: MemberListRelationFilter
  }, "id">

  export type EntityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EntityCountOrderByAggregateInput
    _max?: EntityMaxOrderByAggregateInput
    _min?: EntityMinOrderByAggregateInput
  }

  export type EntityScalarWhereWithAggregatesInput = {
    AND?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    OR?: EntityScalarWhereWithAggregatesInput[]
    NOT?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entity"> | string
    name?: StringWithAggregatesFilter<"Entity"> | string
    address?: StringWithAggregatesFilter<"Entity"> | string
    type?: StringWithAggregatesFilter<"Entity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Entity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Entity"> | Date | string
  }

  export type HeadPersonWhereInput = {
    AND?: HeadPersonWhereInput | HeadPersonWhereInput[]
    OR?: HeadPersonWhereInput[]
    NOT?: HeadPersonWhereInput | HeadPersonWhereInput[]
    id?: StringFilter<"HeadPerson"> | string
    name?: StringFilter<"HeadPerson"> | string
    phone?: StringNullableFilter<"HeadPerson"> | string | null
    address?: StringNullableFilter<"HeadPerson"> | string | null
    entityId?: StringFilter<"HeadPerson"> | string
    createdAt?: DateTimeFilter<"HeadPerson"> | Date | string
    updatedAt?: DateTimeFilter<"HeadPerson"> | Date | string
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
  }

  export type HeadPersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entity?: EntityOrderByWithRelationInput
    _relevance?: HeadPersonOrderByRelevanceInput
  }

  export type HeadPersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    entityId?: string
    AND?: HeadPersonWhereInput | HeadPersonWhereInput[]
    OR?: HeadPersonWhereInput[]
    NOT?: HeadPersonWhereInput | HeadPersonWhereInput[]
    name?: StringFilter<"HeadPerson"> | string
    phone?: StringNullableFilter<"HeadPerson"> | string | null
    address?: StringNullableFilter<"HeadPerson"> | string | null
    createdAt?: DateTimeFilter<"HeadPerson"> | Date | string
    updatedAt?: DateTimeFilter<"HeadPerson"> | Date | string
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
  }, "id" | "entityId">

  export type HeadPersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeadPersonCountOrderByAggregateInput
    _max?: HeadPersonMaxOrderByAggregateInput
    _min?: HeadPersonMinOrderByAggregateInput
  }

  export type HeadPersonScalarWhereWithAggregatesInput = {
    AND?: HeadPersonScalarWhereWithAggregatesInput | HeadPersonScalarWhereWithAggregatesInput[]
    OR?: HeadPersonScalarWhereWithAggregatesInput[]
    NOT?: HeadPersonScalarWhereWithAggregatesInput | HeadPersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HeadPerson"> | string
    name?: StringWithAggregatesFilter<"HeadPerson"> | string
    phone?: StringNullableWithAggregatesFilter<"HeadPerson"> | string | null
    address?: StringNullableWithAggregatesFilter<"HeadPerson"> | string | null
    entityId?: StringWithAggregatesFilter<"HeadPerson"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HeadPerson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HeadPerson"> | Date | string
  }

  export type ContactPersonWhereInput = {
    AND?: ContactPersonWhereInput | ContactPersonWhereInput[]
    OR?: ContactPersonWhereInput[]
    NOT?: ContactPersonWhereInput | ContactPersonWhereInput[]
    id?: StringFilter<"ContactPerson"> | string
    name?: StringFilter<"ContactPerson"> | string
    phone?: StringFilter<"ContactPerson"> | string
    address?: StringFilter<"ContactPerson"> | string
    entityId?: StringFilter<"ContactPerson"> | string
    createdAt?: DateTimeFilter<"ContactPerson"> | Date | string
    updatedAt?: DateTimeFilter<"ContactPerson"> | Date | string
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
  }

  export type ContactPersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entity?: EntityOrderByWithRelationInput
    _relevance?: ContactPersonOrderByRelevanceInput
  }

  export type ContactPersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    entityId?: string
    AND?: ContactPersonWhereInput | ContactPersonWhereInput[]
    OR?: ContactPersonWhereInput[]
    NOT?: ContactPersonWhereInput | ContactPersonWhereInput[]
    name?: StringFilter<"ContactPerson"> | string
    phone?: StringFilter<"ContactPerson"> | string
    address?: StringFilter<"ContactPerson"> | string
    createdAt?: DateTimeFilter<"ContactPerson"> | Date | string
    updatedAt?: DateTimeFilter<"ContactPerson"> | Date | string
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
  }, "id" | "entityId">

  export type ContactPersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactPersonCountOrderByAggregateInput
    _max?: ContactPersonMaxOrderByAggregateInput
    _min?: ContactPersonMinOrderByAggregateInput
  }

  export type ContactPersonScalarWhereWithAggregatesInput = {
    AND?: ContactPersonScalarWhereWithAggregatesInput | ContactPersonScalarWhereWithAggregatesInput[]
    OR?: ContactPersonScalarWhereWithAggregatesInput[]
    NOT?: ContactPersonScalarWhereWithAggregatesInput | ContactPersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactPerson"> | string
    name?: StringWithAggregatesFilter<"ContactPerson"> | string
    phone?: StringWithAggregatesFilter<"ContactPerson"> | string
    address?: StringWithAggregatesFilter<"ContactPerson"> | string
    entityId?: StringWithAggregatesFilter<"ContactPerson"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactPerson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactPerson"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    gender?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    address?: StringFilter<"Staff"> | string
    entityId?: StringFilter<"Staff"> | string
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    pasword?: StringNullableFilter<"Staff"> | string | null
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    createdMembers?: MemberListRelationFilter
    createdCategories?: BookCategoryListRelationFilter
    createdBooks?: BookListRelationFilter
    createdIssuedBooks?: IssuedBookListRelationFilter
    collectedItems?: IssuedBookItemListRelationFilter
    lastEditedMembers?: MemberListRelationFilter
    lastEditedBooks?: BookListRelationFilter
    lastEditedCategories?: BookCategoryListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pasword?: SortOrderInput | SortOrder
    entity?: EntityOrderByWithRelationInput
    createdMembers?: MemberOrderByRelationAggregateInput
    createdCategories?: BookCategoryOrderByRelationAggregateInput
    createdBooks?: BookOrderByRelationAggregateInput
    createdIssuedBooks?: IssuedBookOrderByRelationAggregateInput
    collectedItems?: IssuedBookItemOrderByRelationAggregateInput
    lastEditedMembers?: MemberOrderByRelationAggregateInput
    lastEditedBooks?: BookOrderByRelationAggregateInput
    lastEditedCategories?: BookCategoryOrderByRelationAggregateInput
    _relevance?: StaffOrderByRelevanceInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    name?: StringFilter<"Staff"> | string
    gender?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    address?: StringFilter<"Staff"> | string
    entityId?: StringFilter<"Staff"> | string
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    pasword?: StringNullableFilter<"Staff"> | string | null
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    createdMembers?: MemberListRelationFilter
    createdCategories?: BookCategoryListRelationFilter
    createdBooks?: BookListRelationFilter
    createdIssuedBooks?: IssuedBookListRelationFilter
    collectedItems?: IssuedBookItemListRelationFilter
    lastEditedMembers?: MemberListRelationFilter
    lastEditedBooks?: BookListRelationFilter
    lastEditedCategories?: BookCategoryListRelationFilter
  }, "id">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pasword?: SortOrderInput | SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    name?: StringWithAggregatesFilter<"Staff"> | string
    gender?: StringWithAggregatesFilter<"Staff"> | string
    phone?: StringWithAggregatesFilter<"Staff"> | string
    email?: StringWithAggregatesFilter<"Staff"> | string
    address?: StringWithAggregatesFilter<"Staff"> | string
    entityId?: StringWithAggregatesFilter<"Staff"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    pasword?: StringNullableWithAggregatesFilter<"Staff"> | string | null
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    profileImage?: StringNullableFilter<"Member"> | string | null
    memberType?: EnumMemberTypeFilter<"Member"> | $Enums.MemberType
    gender?: EnumGenderFilter<"Member"> | $Enums.Gender
    phoneNumber?: StringFilter<"Member"> | string
    address?: StringFilter<"Member"> | string
    class?: StringNullableFilter<"Member"> | string | null
    division?: StringNullableFilter<"Member"> | string | null
    entityId?: StringFilter<"Member"> | string
    createdBy?: StringFilter<"Member"> | string
    lastEditedBy?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    creator?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    lastEditor?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    issuedBooks?: IssuedBookListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    memberType?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    class?: SortOrderInput | SortOrder
    division?: SortOrderInput | SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entity?: EntityOrderByWithRelationInput
    creator?: StaffOrderByWithRelationInput
    lastEditor?: StaffOrderByWithRelationInput
    issuedBooks?: IssuedBookOrderByRelationAggregateInput
    _relevance?: MemberOrderByRelevanceInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    name?: StringFilter<"Member"> | string
    profileImage?: StringNullableFilter<"Member"> | string | null
    memberType?: EnumMemberTypeFilter<"Member"> | $Enums.MemberType
    gender?: EnumGenderFilter<"Member"> | $Enums.Gender
    phoneNumber?: StringFilter<"Member"> | string
    address?: StringFilter<"Member"> | string
    class?: StringNullableFilter<"Member"> | string | null
    division?: StringNullableFilter<"Member"> | string | null
    entityId?: StringFilter<"Member"> | string
    createdBy?: StringFilter<"Member"> | string
    lastEditedBy?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    creator?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    lastEditor?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    issuedBooks?: IssuedBookListRelationFilter
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    memberType?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    class?: SortOrderInput | SortOrder
    division?: SortOrderInput | SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    name?: StringWithAggregatesFilter<"Member"> | string
    profileImage?: StringNullableWithAggregatesFilter<"Member"> | string | null
    memberType?: EnumMemberTypeWithAggregatesFilter<"Member"> | $Enums.MemberType
    gender?: EnumGenderWithAggregatesFilter<"Member"> | $Enums.Gender
    phoneNumber?: StringWithAggregatesFilter<"Member"> | string
    address?: StringWithAggregatesFilter<"Member"> | string
    class?: StringNullableWithAggregatesFilter<"Member"> | string | null
    division?: StringNullableWithAggregatesFilter<"Member"> | string | null
    entityId?: StringWithAggregatesFilter<"Member"> | string
    createdBy?: StringWithAggregatesFilter<"Member"> | string
    lastEditedBy?: StringNullableWithAggregatesFilter<"Member"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type BookCategoryWhereInput = {
    AND?: BookCategoryWhereInput | BookCategoryWhereInput[]
    OR?: BookCategoryWhereInput[]
    NOT?: BookCategoryWhereInput | BookCategoryWhereInput[]
    id?: StringFilter<"BookCategory"> | string
    name?: StringFilter<"BookCategory"> | string
    entityId?: StringFilter<"BookCategory"> | string
    createdBy?: StringFilter<"BookCategory"> | string
    lastEditedBy?: StringNullableFilter<"BookCategory"> | string | null
    createdAt?: DateTimeFilter<"BookCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BookCategory"> | Date | string
    books?: BookListRelationFilter
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    creator?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    lastEditor?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }

  export type BookCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    books?: BookOrderByRelationAggregateInput
    entity?: EntityOrderByWithRelationInput
    creator?: StaffOrderByWithRelationInput
    lastEditor?: StaffOrderByWithRelationInput
    _relevance?: BookCategoryOrderByRelevanceInput
  }

  export type BookCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookCategoryWhereInput | BookCategoryWhereInput[]
    OR?: BookCategoryWhereInput[]
    NOT?: BookCategoryWhereInput | BookCategoryWhereInput[]
    name?: StringFilter<"BookCategory"> | string
    entityId?: StringFilter<"BookCategory"> | string
    createdBy?: StringFilter<"BookCategory"> | string
    lastEditedBy?: StringNullableFilter<"BookCategory"> | string | null
    createdAt?: DateTimeFilter<"BookCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BookCategory"> | Date | string
    books?: BookListRelationFilter
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    creator?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    lastEditor?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }, "id">

  export type BookCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookCategoryCountOrderByAggregateInput
    _max?: BookCategoryMaxOrderByAggregateInput
    _min?: BookCategoryMinOrderByAggregateInput
  }

  export type BookCategoryScalarWhereWithAggregatesInput = {
    AND?: BookCategoryScalarWhereWithAggregatesInput | BookCategoryScalarWhereWithAggregatesInput[]
    OR?: BookCategoryScalarWhereWithAggregatesInput[]
    NOT?: BookCategoryScalarWhereWithAggregatesInput | BookCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookCategory"> | string
    name?: StringWithAggregatesFilter<"BookCategory"> | string
    entityId?: StringWithAggregatesFilter<"BookCategory"> | string
    createdBy?: StringWithAggregatesFilter<"BookCategory"> | string
    lastEditedBy?: StringNullableWithAggregatesFilter<"BookCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BookCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookCategory"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    copies?: IntFilter<"Book"> | number
    availableCopies?: IntFilter<"Book"> | number
    categoryId?: StringFilter<"Book"> | string
    entityId?: StringFilter<"Book"> | string
    createdBy?: StringFilter<"Book"> | string
    lastEditedBy?: StringNullableFilter<"Book"> | string | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    category?: XOR<BookCategoryScalarRelationFilter, BookCategoryWhereInput>
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    creator?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    lastEditor?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    issuedBookItems?: IssuedBookItemListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    copies?: SortOrder
    availableCopies?: SortOrder
    categoryId?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: BookCategoryOrderByWithRelationInput
    entity?: EntityOrderByWithRelationInput
    creator?: StaffOrderByWithRelationInput
    lastEditor?: StaffOrderByWithRelationInput
    issuedBookItems?: IssuedBookItemOrderByRelationAggregateInput
    _relevance?: BookOrderByRelevanceInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    copies?: IntFilter<"Book"> | number
    availableCopies?: IntFilter<"Book"> | number
    categoryId?: StringFilter<"Book"> | string
    entityId?: StringFilter<"Book"> | string
    createdBy?: StringFilter<"Book"> | string
    lastEditedBy?: StringNullableFilter<"Book"> | string | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    category?: XOR<BookCategoryScalarRelationFilter, BookCategoryWhereInput>
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    creator?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    lastEditor?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    issuedBookItems?: IssuedBookItemListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    copies?: SortOrder
    availableCopies?: SortOrder
    categoryId?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    author?: StringWithAggregatesFilter<"Book"> | string
    copies?: IntWithAggregatesFilter<"Book"> | number
    availableCopies?: IntWithAggregatesFilter<"Book"> | number
    categoryId?: StringWithAggregatesFilter<"Book"> | string
    entityId?: StringWithAggregatesFilter<"Book"> | string
    createdBy?: StringWithAggregatesFilter<"Book"> | string
    lastEditedBy?: StringNullableWithAggregatesFilter<"Book"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
  }

  export type IssuedBookWhereInput = {
    AND?: IssuedBookWhereInput | IssuedBookWhereInput[]
    OR?: IssuedBookWhereInput[]
    NOT?: IssuedBookWhereInput | IssuedBookWhereInput[]
    id?: StringFilter<"IssuedBook"> | string
    issueDate?: DateTimeFilter<"IssuedBook"> | Date | string
    memberId?: StringFilter<"IssuedBook"> | string
    entityId?: StringFilter<"IssuedBook"> | string
    createdBy?: StringFilter<"IssuedBook"> | string
    createdAt?: DateTimeFilter<"IssuedBook"> | Date | string
    updatedAt?: DateTimeFilter<"IssuedBook"> | Date | string
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    creator?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    items?: IssuedBookItemListRelationFilter
  }

  export type IssuedBookOrderByWithRelationInput = {
    id?: SortOrder
    issueDate?: SortOrder
    memberId?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entity?: EntityOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
    creator?: StaffOrderByWithRelationInput
    items?: IssuedBookItemOrderByRelationAggregateInput
    _relevance?: IssuedBookOrderByRelevanceInput
  }

  export type IssuedBookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IssuedBookWhereInput | IssuedBookWhereInput[]
    OR?: IssuedBookWhereInput[]
    NOT?: IssuedBookWhereInput | IssuedBookWhereInput[]
    issueDate?: DateTimeFilter<"IssuedBook"> | Date | string
    memberId?: StringFilter<"IssuedBook"> | string
    entityId?: StringFilter<"IssuedBook"> | string
    createdBy?: StringFilter<"IssuedBook"> | string
    createdAt?: DateTimeFilter<"IssuedBook"> | Date | string
    updatedAt?: DateTimeFilter<"IssuedBook"> | Date | string
    entity?: XOR<EntityScalarRelationFilter, EntityWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    creator?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    items?: IssuedBookItemListRelationFilter
  }, "id">

  export type IssuedBookOrderByWithAggregationInput = {
    id?: SortOrder
    issueDate?: SortOrder
    memberId?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IssuedBookCountOrderByAggregateInput
    _max?: IssuedBookMaxOrderByAggregateInput
    _min?: IssuedBookMinOrderByAggregateInput
  }

  export type IssuedBookScalarWhereWithAggregatesInput = {
    AND?: IssuedBookScalarWhereWithAggregatesInput | IssuedBookScalarWhereWithAggregatesInput[]
    OR?: IssuedBookScalarWhereWithAggregatesInput[]
    NOT?: IssuedBookScalarWhereWithAggregatesInput | IssuedBookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IssuedBook"> | string
    issueDate?: DateTimeWithAggregatesFilter<"IssuedBook"> | Date | string
    memberId?: StringWithAggregatesFilter<"IssuedBook"> | string
    entityId?: StringWithAggregatesFilter<"IssuedBook"> | string
    createdBy?: StringWithAggregatesFilter<"IssuedBook"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IssuedBook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IssuedBook"> | Date | string
  }

  export type IssuedBookItemWhereInput = {
    AND?: IssuedBookItemWhereInput | IssuedBookItemWhereInput[]
    OR?: IssuedBookItemWhereInput[]
    NOT?: IssuedBookItemWhereInput | IssuedBookItemWhereInput[]
    id?: StringFilter<"IssuedBookItem"> | string
    bookId?: StringFilter<"IssuedBookItem"> | string
    issuedBookId?: StringFilter<"IssuedBookItem"> | string
    collected?: BoolFilter<"IssuedBookItem"> | boolean
    collectedBy?: StringNullableFilter<"IssuedBookItem"> | string | null
    createdAt?: DateTimeFilter<"IssuedBookItem"> | Date | string
    updatedAt?: DateTimeFilter<"IssuedBookItem"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    issuedBook?: XOR<IssuedBookScalarRelationFilter, IssuedBookWhereInput>
    collector?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }

  export type IssuedBookItemOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    issuedBookId?: SortOrder
    collected?: SortOrder
    collectedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    book?: BookOrderByWithRelationInput
    issuedBook?: IssuedBookOrderByWithRelationInput
    collector?: StaffOrderByWithRelationInput
    _relevance?: IssuedBookItemOrderByRelevanceInput
  }

  export type IssuedBookItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IssuedBookItemWhereInput | IssuedBookItemWhereInput[]
    OR?: IssuedBookItemWhereInput[]
    NOT?: IssuedBookItemWhereInput | IssuedBookItemWhereInput[]
    bookId?: StringFilter<"IssuedBookItem"> | string
    issuedBookId?: StringFilter<"IssuedBookItem"> | string
    collected?: BoolFilter<"IssuedBookItem"> | boolean
    collectedBy?: StringNullableFilter<"IssuedBookItem"> | string | null
    createdAt?: DateTimeFilter<"IssuedBookItem"> | Date | string
    updatedAt?: DateTimeFilter<"IssuedBookItem"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    issuedBook?: XOR<IssuedBookScalarRelationFilter, IssuedBookWhereInput>
    collector?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }, "id">

  export type IssuedBookItemOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    issuedBookId?: SortOrder
    collected?: SortOrder
    collectedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IssuedBookItemCountOrderByAggregateInput
    _max?: IssuedBookItemMaxOrderByAggregateInput
    _min?: IssuedBookItemMinOrderByAggregateInput
  }

  export type IssuedBookItemScalarWhereWithAggregatesInput = {
    AND?: IssuedBookItemScalarWhereWithAggregatesInput | IssuedBookItemScalarWhereWithAggregatesInput[]
    OR?: IssuedBookItemScalarWhereWithAggregatesInput[]
    NOT?: IssuedBookItemScalarWhereWithAggregatesInput | IssuedBookItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IssuedBookItem"> | string
    bookId?: StringWithAggregatesFilter<"IssuedBookItem"> | string
    issuedBookId?: StringWithAggregatesFilter<"IssuedBookItem"> | string
    collected?: BoolWithAggregatesFilter<"IssuedBookItem"> | boolean
    collectedBy?: StringNullableWithAggregatesFilter<"IssuedBookItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IssuedBookItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IssuedBookItem"> | Date | string
  }

  export type PasswordResetWhereInput = {
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    id?: StringFilter<"PasswordReset"> | string
    email?: StringFilter<"PasswordReset"> | string
    token?: StringFilter<"PasswordReset"> | string
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    used?: BoolFilter<"PasswordReset"> | boolean
  }

  export type PasswordResetOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    _relevance?: PasswordResetOrderByRelevanceInput
  }

  export type PasswordResetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    email?: StringFilter<"PasswordReset"> | string
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    used?: BoolFilter<"PasswordReset"> | boolean
  }, "id" | "token">

  export type PasswordResetOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    _count?: PasswordResetCountOrderByAggregateInput
    _max?: PasswordResetMaxOrderByAggregateInput
    _min?: PasswordResetMinOrderByAggregateInput
  }

  export type PasswordResetScalarWhereWithAggregatesInput = {
    AND?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    OR?: PasswordResetScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordReset"> | string
    email?: StringWithAggregatesFilter<"PasswordReset"> | string
    token?: StringWithAggregatesFilter<"PasswordReset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
    used?: BoolWithAggregatesFilter<"PasswordReset"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EntityCreateInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutEntityInput
    staff?: StaffCreateNestedManyWithoutEntityInput
    members?: MemberCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryUncheckedCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonUncheckedCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonUncheckedCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutEntityInput
    staff?: StaffUncheckedCreateNestedManyWithoutEntityInput
    members?: MemberUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutEntityNestedInput
    staff?: StaffUpdateManyWithoutEntityNestedInput
    members?: MemberUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUncheckedUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUncheckedUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUncheckedUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutEntityNestedInput
    staff?: StaffUncheckedUpdateManyWithoutEntityNestedInput
    members?: MemberUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type EntityCreateManyInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadPersonCreateInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutHeadPersonInput
  }

  export type HeadPersonUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadPersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutHeadPersonNestedInput
  }

  export type HeadPersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadPersonCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadPersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadPersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPersonCreateInput = {
    id?: string
    name: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutContactPersonInput
  }

  export type ContactPersonUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutContactPersonNestedInput
  }

  export type ContactPersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPersonCreateManyInput = {
    id?: string
    name: string
    phone: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    entity: EntityCreateNestedOneWithoutStaffInput
    createdMembers?: MemberCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryCreateNestedManyWithoutCreatorInput
    createdBooks?: BookCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdMembers?: MemberUncheckedCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryUncheckedCreateNestedManyWithoutCreatorInput
    createdBooks?: BookUncheckedCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemUncheckedCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryUncheckedCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: EntityUpdateOneRequiredWithoutStaffNestedInput
    createdMembers?: MemberUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdMembers?: MemberUncheckedUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUncheckedUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUncheckedUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUncheckedUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUncheckedUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUncheckedUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffCreateManyInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberCreateInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutMembersInput
    creator: StaffCreateNestedOneWithoutCreatedMembersInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedMembersInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutMembersNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedMembersNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedMembersNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutCategoryInput
    entity: EntityCreateNestedOneWithoutBookCategoriesInput
    creator: StaffCreateNestedOneWithoutCreatedCategoriesInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedCategoriesInput
  }

  export type BookCategoryUncheckedCreateInput = {
    id?: string
    name: string
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BookCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutCategoryNestedInput
    entity?: EntityUpdateOneRequiredWithoutBookCategoriesNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedCategoriesNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedCategoriesNestedInput
  }

  export type BookCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BookCategoryCreateManyInput = {
    id?: string
    name: string
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BookCategoryCreateNestedOneWithoutBooksInput
    entity: EntityCreateNestedOneWithoutBooksInput
    creator: StaffCreateNestedOneWithoutCreatedBooksInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedBooksInput
    issuedBookItems?: IssuedBookItemCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    categoryId: string
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedBookItems?: IssuedBookItemUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BookCategoryUpdateOneRequiredWithoutBooksNestedInput
    entity?: EntityUpdateOneRequiredWithoutBooksNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedBooksNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedBooksNestedInput
    issuedBookItems?: IssuedBookItemUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBookItems?: IssuedBookItemUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    categoryId: string
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookCreateInput = {
    id?: string
    issueDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutIssuedBooksInput
    member: MemberCreateNestedOneWithoutIssuedBooksInput
    creator: StaffCreateNestedOneWithoutCreatedIssuedBooksInput
    items?: IssuedBookItemCreateNestedManyWithoutIssuedBookInput
  }

  export type IssuedBookUncheckedCreateInput = {
    id?: string
    issueDate?: Date | string
    memberId: string
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: IssuedBookItemUncheckedCreateNestedManyWithoutIssuedBookInput
  }

  export type IssuedBookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutIssuedBooksNestedInput
    member?: MemberUpdateOneRequiredWithoutIssuedBooksNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedIssuedBooksNestedInput
    items?: IssuedBookItemUpdateManyWithoutIssuedBookNestedInput
  }

  export type IssuedBookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: IssuedBookItemUncheckedUpdateManyWithoutIssuedBookNestedInput
  }

  export type IssuedBookCreateManyInput = {
    id?: string
    issueDate?: Date | string
    memberId: string
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookItemCreateInput = {
    id?: string
    collected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutIssuedBookItemsInput
    issuedBook: IssuedBookCreateNestedOneWithoutItemsInput
    collector?: StaffCreateNestedOneWithoutCollectedItemsInput
  }

  export type IssuedBookItemUncheckedCreateInput = {
    id?: string
    bookId: string
    issuedBookId: string
    collected?: boolean
    collectedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutIssuedBookItemsNestedInput
    issuedBook?: IssuedBookUpdateOneRequiredWithoutItemsNestedInput
    collector?: StaffUpdateOneWithoutCollectedItemsNestedInput
  }

  export type IssuedBookItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    issuedBookId?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookItemCreateManyInput = {
    id?: string
    bookId: string
    issuedBookId: string
    collected?: boolean
    collectedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    issuedBookId?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateInput = {
    id?: string
    email: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    used?: boolean
  }

  export type PasswordResetUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    used?: boolean
  }

  export type PasswordResetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetCreateManyInput = {
    id?: string
    email: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    used?: boolean
  }

  export type PasswordResetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type BookCategoryListRelationFilter = {
    every?: BookCategoryWhereInput
    some?: BookCategoryWhereInput
    none?: BookCategoryWhereInput
  }

  export type ContactPersonNullableScalarRelationFilter = {
    is?: ContactPersonWhereInput | null
    isNot?: ContactPersonWhereInput | null
  }

  export type HeadPersonNullableScalarRelationFilter = {
    is?: HeadPersonWhereInput | null
    isNot?: HeadPersonWhereInput | null
  }

  export type IssuedBookListRelationFilter = {
    every?: IssuedBookWhereInput
    some?: IssuedBookWhereInput
    none?: IssuedBookWhereInput
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssuedBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntityOrderByRelevanceInput = {
    fields: EntityOrderByRelevanceFieldEnum | EntityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EntityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EntityScalarRelationFilter = {
    is?: EntityWhereInput
    isNot?: EntityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HeadPersonOrderByRelevanceInput = {
    fields: HeadPersonOrderByRelevanceFieldEnum | HeadPersonOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HeadPersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeadPersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeadPersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ContactPersonOrderByRelevanceInput = {
    fields: ContactPersonOrderByRelevanceFieldEnum | ContactPersonOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContactPersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuedBookItemListRelationFilter = {
    every?: IssuedBookItemWhereInput
    some?: IssuedBookItemWhereInput
    none?: IssuedBookItemWhereInput
  }

  export type IssuedBookItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffOrderByRelevanceInput = {
    fields: StaffOrderByRelevanceFieldEnum | StaffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pasword?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pasword?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pasword?: SortOrder
  }

  export type EnumMemberTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberType | EnumMemberTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberType[]
    notIn?: $Enums.MemberType[]
    not?: NestedEnumMemberTypeFilter<$PrismaModel> | $Enums.MemberType
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type StaffNullableScalarRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type MemberOrderByRelevanceInput = {
    fields: MemberOrderByRelevanceFieldEnum | MemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    memberType?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    class?: SortOrder
    division?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    memberType?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    class?: SortOrder
    division?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    memberType?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    class?: SortOrder
    division?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMemberTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberType | EnumMemberTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberType[]
    notIn?: $Enums.MemberType[]
    not?: NestedEnumMemberTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemberType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberTypeFilter<$PrismaModel>
    _max?: NestedEnumMemberTypeFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type BookCategoryOrderByRelevanceInput = {
    fields: BookCategoryOrderByRelevanceFieldEnum | BookCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BookCategoryScalarRelationFilter = {
    is?: BookCategoryWhereInput
    isNot?: BookCategoryWhereInput
  }

  export type BookOrderByRelevanceInput = {
    fields: BookOrderByRelevanceFieldEnum | BookOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    copies?: SortOrder
    availableCopies?: SortOrder
    categoryId?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    copies?: SortOrder
    availableCopies?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    copies?: SortOrder
    availableCopies?: SortOrder
    categoryId?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    copies?: SortOrder
    availableCopies?: SortOrder
    categoryId?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    lastEditedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    copies?: SortOrder
    availableCopies?: SortOrder
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

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type IssuedBookOrderByRelevanceInput = {
    fields: IssuedBookOrderByRelevanceFieldEnum | IssuedBookOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IssuedBookCountOrderByAggregateInput = {
    id?: SortOrder
    issueDate?: SortOrder
    memberId?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuedBookMaxOrderByAggregateInput = {
    id?: SortOrder
    issueDate?: SortOrder
    memberId?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuedBookMinOrderByAggregateInput = {
    id?: SortOrder
    issueDate?: SortOrder
    memberId?: SortOrder
    entityId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type IssuedBookScalarRelationFilter = {
    is?: IssuedBookWhereInput
    isNot?: IssuedBookWhereInput
  }

  export type IssuedBookItemOrderByRelevanceInput = {
    fields: IssuedBookItemOrderByRelevanceFieldEnum | IssuedBookItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IssuedBookItemCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    issuedBookId?: SortOrder
    collected?: SortOrder
    collectedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuedBookItemMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    issuedBookId?: SortOrder
    collected?: SortOrder
    collectedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuedBookItemMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    issuedBookId?: SortOrder
    collected?: SortOrder
    collectedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PasswordResetOrderByRelevanceInput = {
    fields: PasswordResetOrderByRelevanceFieldEnum | PasswordResetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PasswordResetCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type PasswordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type PasswordResetMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookCreateNestedManyWithoutEntityInput = {
    create?: XOR<BookCreateWithoutEntityInput, BookUncheckedCreateWithoutEntityInput> | BookCreateWithoutEntityInput[] | BookUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: BookCreateOrConnectWithoutEntityInput | BookCreateOrConnectWithoutEntityInput[]
    createMany?: BookCreateManyEntityInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookCategoryCreateNestedManyWithoutEntityInput = {
    create?: XOR<BookCategoryCreateWithoutEntityInput, BookCategoryUncheckedCreateWithoutEntityInput> | BookCategoryCreateWithoutEntityInput[] | BookCategoryUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutEntityInput | BookCategoryCreateOrConnectWithoutEntityInput[]
    createMany?: BookCategoryCreateManyEntityInputEnvelope
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
  }

  export type ContactPersonCreateNestedOneWithoutEntityInput = {
    create?: XOR<ContactPersonCreateWithoutEntityInput, ContactPersonUncheckedCreateWithoutEntityInput>
    connectOrCreate?: ContactPersonCreateOrConnectWithoutEntityInput
    connect?: ContactPersonWhereUniqueInput
  }

  export type HeadPersonCreateNestedOneWithoutEntityInput = {
    create?: XOR<HeadPersonCreateWithoutEntityInput, HeadPersonUncheckedCreateWithoutEntityInput>
    connectOrCreate?: HeadPersonCreateOrConnectWithoutEntityInput
    connect?: HeadPersonWhereUniqueInput
  }

  export type IssuedBookCreateNestedManyWithoutEntityInput = {
    create?: XOR<IssuedBookCreateWithoutEntityInput, IssuedBookUncheckedCreateWithoutEntityInput> | IssuedBookCreateWithoutEntityInput[] | IssuedBookUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutEntityInput | IssuedBookCreateOrConnectWithoutEntityInput[]
    createMany?: IssuedBookCreateManyEntityInputEnvelope
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
  }

  export type StaffCreateNestedManyWithoutEntityInput = {
    create?: XOR<StaffCreateWithoutEntityInput, StaffUncheckedCreateWithoutEntityInput> | StaffCreateWithoutEntityInput[] | StaffUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutEntityInput | StaffCreateOrConnectWithoutEntityInput[]
    createMany?: StaffCreateManyEntityInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type MemberCreateNestedManyWithoutEntityInput = {
    create?: XOR<MemberCreateWithoutEntityInput, MemberUncheckedCreateWithoutEntityInput> | MemberCreateWithoutEntityInput[] | MemberUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutEntityInput | MemberCreateOrConnectWithoutEntityInput[]
    createMany?: MemberCreateManyEntityInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<BookCreateWithoutEntityInput, BookUncheckedCreateWithoutEntityInput> | BookCreateWithoutEntityInput[] | BookUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: BookCreateOrConnectWithoutEntityInput | BookCreateOrConnectWithoutEntityInput[]
    createMany?: BookCreateManyEntityInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookCategoryUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<BookCategoryCreateWithoutEntityInput, BookCategoryUncheckedCreateWithoutEntityInput> | BookCategoryCreateWithoutEntityInput[] | BookCategoryUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutEntityInput | BookCategoryCreateOrConnectWithoutEntityInput[]
    createMany?: BookCategoryCreateManyEntityInputEnvelope
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
  }

  export type ContactPersonUncheckedCreateNestedOneWithoutEntityInput = {
    create?: XOR<ContactPersonCreateWithoutEntityInput, ContactPersonUncheckedCreateWithoutEntityInput>
    connectOrCreate?: ContactPersonCreateOrConnectWithoutEntityInput
    connect?: ContactPersonWhereUniqueInput
  }

  export type HeadPersonUncheckedCreateNestedOneWithoutEntityInput = {
    create?: XOR<HeadPersonCreateWithoutEntityInput, HeadPersonUncheckedCreateWithoutEntityInput>
    connectOrCreate?: HeadPersonCreateOrConnectWithoutEntityInput
    connect?: HeadPersonWhereUniqueInput
  }

  export type IssuedBookUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<IssuedBookCreateWithoutEntityInput, IssuedBookUncheckedCreateWithoutEntityInput> | IssuedBookCreateWithoutEntityInput[] | IssuedBookUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutEntityInput | IssuedBookCreateOrConnectWithoutEntityInput[]
    createMany?: IssuedBookCreateManyEntityInputEnvelope
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<StaffCreateWithoutEntityInput, StaffUncheckedCreateWithoutEntityInput> | StaffCreateWithoutEntityInput[] | StaffUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutEntityInput | StaffCreateOrConnectWithoutEntityInput[]
    createMany?: StaffCreateManyEntityInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<MemberCreateWithoutEntityInput, MemberUncheckedCreateWithoutEntityInput> | MemberCreateWithoutEntityInput[] | MemberUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutEntityInput | MemberCreateOrConnectWithoutEntityInput[]
    createMany?: MemberCreateManyEntityInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookUpdateManyWithoutEntityNestedInput = {
    create?: XOR<BookCreateWithoutEntityInput, BookUncheckedCreateWithoutEntityInput> | BookCreateWithoutEntityInput[] | BookUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: BookCreateOrConnectWithoutEntityInput | BookCreateOrConnectWithoutEntityInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutEntityInput | BookUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: BookCreateManyEntityInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutEntityInput | BookUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: BookUpdateManyWithWhereWithoutEntityInput | BookUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookCategoryUpdateManyWithoutEntityNestedInput = {
    create?: XOR<BookCategoryCreateWithoutEntityInput, BookCategoryUncheckedCreateWithoutEntityInput> | BookCategoryCreateWithoutEntityInput[] | BookCategoryUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutEntityInput | BookCategoryCreateOrConnectWithoutEntityInput[]
    upsert?: BookCategoryUpsertWithWhereUniqueWithoutEntityInput | BookCategoryUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: BookCategoryCreateManyEntityInputEnvelope
    set?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    disconnect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    delete?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    update?: BookCategoryUpdateWithWhereUniqueWithoutEntityInput | BookCategoryUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: BookCategoryUpdateManyWithWhereWithoutEntityInput | BookCategoryUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[]
  }

  export type ContactPersonUpdateOneWithoutEntityNestedInput = {
    create?: XOR<ContactPersonCreateWithoutEntityInput, ContactPersonUncheckedCreateWithoutEntityInput>
    connectOrCreate?: ContactPersonCreateOrConnectWithoutEntityInput
    upsert?: ContactPersonUpsertWithoutEntityInput
    disconnect?: ContactPersonWhereInput | boolean
    delete?: ContactPersonWhereInput | boolean
    connect?: ContactPersonWhereUniqueInput
    update?: XOR<XOR<ContactPersonUpdateToOneWithWhereWithoutEntityInput, ContactPersonUpdateWithoutEntityInput>, ContactPersonUncheckedUpdateWithoutEntityInput>
  }

  export type HeadPersonUpdateOneWithoutEntityNestedInput = {
    create?: XOR<HeadPersonCreateWithoutEntityInput, HeadPersonUncheckedCreateWithoutEntityInput>
    connectOrCreate?: HeadPersonCreateOrConnectWithoutEntityInput
    upsert?: HeadPersonUpsertWithoutEntityInput
    disconnect?: HeadPersonWhereInput | boolean
    delete?: HeadPersonWhereInput | boolean
    connect?: HeadPersonWhereUniqueInput
    update?: XOR<XOR<HeadPersonUpdateToOneWithWhereWithoutEntityInput, HeadPersonUpdateWithoutEntityInput>, HeadPersonUncheckedUpdateWithoutEntityInput>
  }

  export type IssuedBookUpdateManyWithoutEntityNestedInput = {
    create?: XOR<IssuedBookCreateWithoutEntityInput, IssuedBookUncheckedCreateWithoutEntityInput> | IssuedBookCreateWithoutEntityInput[] | IssuedBookUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutEntityInput | IssuedBookCreateOrConnectWithoutEntityInput[]
    upsert?: IssuedBookUpsertWithWhereUniqueWithoutEntityInput | IssuedBookUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: IssuedBookCreateManyEntityInputEnvelope
    set?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    disconnect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    delete?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    update?: IssuedBookUpdateWithWhereUniqueWithoutEntityInput | IssuedBookUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: IssuedBookUpdateManyWithWhereWithoutEntityInput | IssuedBookUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: IssuedBookScalarWhereInput | IssuedBookScalarWhereInput[]
  }

  export type StaffUpdateManyWithoutEntityNestedInput = {
    create?: XOR<StaffCreateWithoutEntityInput, StaffUncheckedCreateWithoutEntityInput> | StaffCreateWithoutEntityInput[] | StaffUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutEntityInput | StaffCreateOrConnectWithoutEntityInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutEntityInput | StaffUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: StaffCreateManyEntityInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutEntityInput | StaffUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutEntityInput | StaffUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type MemberUpdateManyWithoutEntityNestedInput = {
    create?: XOR<MemberCreateWithoutEntityInput, MemberUncheckedCreateWithoutEntityInput> | MemberCreateWithoutEntityInput[] | MemberUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutEntityInput | MemberCreateOrConnectWithoutEntityInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutEntityInput | MemberUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: MemberCreateManyEntityInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutEntityInput | MemberUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutEntityInput | MemberUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<BookCreateWithoutEntityInput, BookUncheckedCreateWithoutEntityInput> | BookCreateWithoutEntityInput[] | BookUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: BookCreateOrConnectWithoutEntityInput | BookCreateOrConnectWithoutEntityInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutEntityInput | BookUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: BookCreateManyEntityInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutEntityInput | BookUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: BookUpdateManyWithWhereWithoutEntityInput | BookUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookCategoryUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<BookCategoryCreateWithoutEntityInput, BookCategoryUncheckedCreateWithoutEntityInput> | BookCategoryCreateWithoutEntityInput[] | BookCategoryUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutEntityInput | BookCategoryCreateOrConnectWithoutEntityInput[]
    upsert?: BookCategoryUpsertWithWhereUniqueWithoutEntityInput | BookCategoryUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: BookCategoryCreateManyEntityInputEnvelope
    set?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    disconnect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    delete?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    update?: BookCategoryUpdateWithWhereUniqueWithoutEntityInput | BookCategoryUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: BookCategoryUpdateManyWithWhereWithoutEntityInput | BookCategoryUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[]
  }

  export type ContactPersonUncheckedUpdateOneWithoutEntityNestedInput = {
    create?: XOR<ContactPersonCreateWithoutEntityInput, ContactPersonUncheckedCreateWithoutEntityInput>
    connectOrCreate?: ContactPersonCreateOrConnectWithoutEntityInput
    upsert?: ContactPersonUpsertWithoutEntityInput
    disconnect?: ContactPersonWhereInput | boolean
    delete?: ContactPersonWhereInput | boolean
    connect?: ContactPersonWhereUniqueInput
    update?: XOR<XOR<ContactPersonUpdateToOneWithWhereWithoutEntityInput, ContactPersonUpdateWithoutEntityInput>, ContactPersonUncheckedUpdateWithoutEntityInput>
  }

  export type HeadPersonUncheckedUpdateOneWithoutEntityNestedInput = {
    create?: XOR<HeadPersonCreateWithoutEntityInput, HeadPersonUncheckedCreateWithoutEntityInput>
    connectOrCreate?: HeadPersonCreateOrConnectWithoutEntityInput
    upsert?: HeadPersonUpsertWithoutEntityInput
    disconnect?: HeadPersonWhereInput | boolean
    delete?: HeadPersonWhereInput | boolean
    connect?: HeadPersonWhereUniqueInput
    update?: XOR<XOR<HeadPersonUpdateToOneWithWhereWithoutEntityInput, HeadPersonUpdateWithoutEntityInput>, HeadPersonUncheckedUpdateWithoutEntityInput>
  }

  export type IssuedBookUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<IssuedBookCreateWithoutEntityInput, IssuedBookUncheckedCreateWithoutEntityInput> | IssuedBookCreateWithoutEntityInput[] | IssuedBookUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutEntityInput | IssuedBookCreateOrConnectWithoutEntityInput[]
    upsert?: IssuedBookUpsertWithWhereUniqueWithoutEntityInput | IssuedBookUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: IssuedBookCreateManyEntityInputEnvelope
    set?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    disconnect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    delete?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    update?: IssuedBookUpdateWithWhereUniqueWithoutEntityInput | IssuedBookUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: IssuedBookUpdateManyWithWhereWithoutEntityInput | IssuedBookUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: IssuedBookScalarWhereInput | IssuedBookScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<StaffCreateWithoutEntityInput, StaffUncheckedCreateWithoutEntityInput> | StaffCreateWithoutEntityInput[] | StaffUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutEntityInput | StaffCreateOrConnectWithoutEntityInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutEntityInput | StaffUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: StaffCreateManyEntityInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutEntityInput | StaffUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutEntityInput | StaffUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<MemberCreateWithoutEntityInput, MemberUncheckedCreateWithoutEntityInput> | MemberCreateWithoutEntityInput[] | MemberUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutEntityInput | MemberCreateOrConnectWithoutEntityInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutEntityInput | MemberUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: MemberCreateManyEntityInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutEntityInput | MemberUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutEntityInput | MemberUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type EntityCreateNestedOneWithoutHeadPersonInput = {
    create?: XOR<EntityCreateWithoutHeadPersonInput, EntityUncheckedCreateWithoutHeadPersonInput>
    connectOrCreate?: EntityCreateOrConnectWithoutHeadPersonInput
    connect?: EntityWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EntityUpdateOneRequiredWithoutHeadPersonNestedInput = {
    create?: XOR<EntityCreateWithoutHeadPersonInput, EntityUncheckedCreateWithoutHeadPersonInput>
    connectOrCreate?: EntityCreateOrConnectWithoutHeadPersonInput
    upsert?: EntityUpsertWithoutHeadPersonInput
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutHeadPersonInput, EntityUpdateWithoutHeadPersonInput>, EntityUncheckedUpdateWithoutHeadPersonInput>
  }

  export type EntityCreateNestedOneWithoutContactPersonInput = {
    create?: XOR<EntityCreateWithoutContactPersonInput, EntityUncheckedCreateWithoutContactPersonInput>
    connectOrCreate?: EntityCreateOrConnectWithoutContactPersonInput
    connect?: EntityWhereUniqueInput
  }

  export type EntityUpdateOneRequiredWithoutContactPersonNestedInput = {
    create?: XOR<EntityCreateWithoutContactPersonInput, EntityUncheckedCreateWithoutContactPersonInput>
    connectOrCreate?: EntityCreateOrConnectWithoutContactPersonInput
    upsert?: EntityUpsertWithoutContactPersonInput
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutContactPersonInput, EntityUpdateWithoutContactPersonInput>, EntityUncheckedUpdateWithoutContactPersonInput>
  }

  export type EntityCreateNestedOneWithoutStaffInput = {
    create?: XOR<EntityCreateWithoutStaffInput, EntityUncheckedCreateWithoutStaffInput>
    connectOrCreate?: EntityCreateOrConnectWithoutStaffInput
    connect?: EntityWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput> | MemberCreateWithoutCreatorInput[] | MemberUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCreatorInput | MemberCreateOrConnectWithoutCreatorInput[]
    createMany?: MemberCreateManyCreatorInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type BookCategoryCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BookCategoryCreateWithoutCreatorInput, BookCategoryUncheckedCreateWithoutCreatorInput> | BookCategoryCreateWithoutCreatorInput[] | BookCategoryUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutCreatorInput | BookCategoryCreateOrConnectWithoutCreatorInput[]
    createMany?: BookCategoryCreateManyCreatorInputEnvelope
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
  }

  export type BookCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput> | BookCreateWithoutCreatorInput[] | BookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatorInput | BookCreateOrConnectWithoutCreatorInput[]
    createMany?: BookCreateManyCreatorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type IssuedBookCreateNestedManyWithoutCreatorInput = {
    create?: XOR<IssuedBookCreateWithoutCreatorInput, IssuedBookUncheckedCreateWithoutCreatorInput> | IssuedBookCreateWithoutCreatorInput[] | IssuedBookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutCreatorInput | IssuedBookCreateOrConnectWithoutCreatorInput[]
    createMany?: IssuedBookCreateManyCreatorInputEnvelope
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
  }

  export type IssuedBookItemCreateNestedManyWithoutCollectorInput = {
    create?: XOR<IssuedBookItemCreateWithoutCollectorInput, IssuedBookItemUncheckedCreateWithoutCollectorInput> | IssuedBookItemCreateWithoutCollectorInput[] | IssuedBookItemUncheckedCreateWithoutCollectorInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutCollectorInput | IssuedBookItemCreateOrConnectWithoutCollectorInput[]
    createMany?: IssuedBookItemCreateManyCollectorInputEnvelope
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
  }

  export type MemberCreateNestedManyWithoutLastEditorInput = {
    create?: XOR<MemberCreateWithoutLastEditorInput, MemberUncheckedCreateWithoutLastEditorInput> | MemberCreateWithoutLastEditorInput[] | MemberUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutLastEditorInput | MemberCreateOrConnectWithoutLastEditorInput[]
    createMany?: MemberCreateManyLastEditorInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type BookCreateNestedManyWithoutLastEditorInput = {
    create?: XOR<BookCreateWithoutLastEditorInput, BookUncheckedCreateWithoutLastEditorInput> | BookCreateWithoutLastEditorInput[] | BookUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutLastEditorInput | BookCreateOrConnectWithoutLastEditorInput[]
    createMany?: BookCreateManyLastEditorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookCategoryCreateNestedManyWithoutLastEditorInput = {
    create?: XOR<BookCategoryCreateWithoutLastEditorInput, BookCategoryUncheckedCreateWithoutLastEditorInput> | BookCategoryCreateWithoutLastEditorInput[] | BookCategoryUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutLastEditorInput | BookCategoryCreateOrConnectWithoutLastEditorInput[]
    createMany?: BookCategoryCreateManyLastEditorInputEnvelope
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput> | MemberCreateWithoutCreatorInput[] | MemberUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCreatorInput | MemberCreateOrConnectWithoutCreatorInput[]
    createMany?: MemberCreateManyCreatorInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type BookCategoryUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BookCategoryCreateWithoutCreatorInput, BookCategoryUncheckedCreateWithoutCreatorInput> | BookCategoryCreateWithoutCreatorInput[] | BookCategoryUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutCreatorInput | BookCategoryCreateOrConnectWithoutCreatorInput[]
    createMany?: BookCategoryCreateManyCreatorInputEnvelope
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput> | BookCreateWithoutCreatorInput[] | BookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatorInput | BookCreateOrConnectWithoutCreatorInput[]
    createMany?: BookCreateManyCreatorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type IssuedBookUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<IssuedBookCreateWithoutCreatorInput, IssuedBookUncheckedCreateWithoutCreatorInput> | IssuedBookCreateWithoutCreatorInput[] | IssuedBookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutCreatorInput | IssuedBookCreateOrConnectWithoutCreatorInput[]
    createMany?: IssuedBookCreateManyCreatorInputEnvelope
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
  }

  export type IssuedBookItemUncheckedCreateNestedManyWithoutCollectorInput = {
    create?: XOR<IssuedBookItemCreateWithoutCollectorInput, IssuedBookItemUncheckedCreateWithoutCollectorInput> | IssuedBookItemCreateWithoutCollectorInput[] | IssuedBookItemUncheckedCreateWithoutCollectorInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutCollectorInput | IssuedBookItemCreateOrConnectWithoutCollectorInput[]
    createMany?: IssuedBookItemCreateManyCollectorInputEnvelope
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutLastEditorInput = {
    create?: XOR<MemberCreateWithoutLastEditorInput, MemberUncheckedCreateWithoutLastEditorInput> | MemberCreateWithoutLastEditorInput[] | MemberUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutLastEditorInput | MemberCreateOrConnectWithoutLastEditorInput[]
    createMany?: MemberCreateManyLastEditorInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutLastEditorInput = {
    create?: XOR<BookCreateWithoutLastEditorInput, BookUncheckedCreateWithoutLastEditorInput> | BookCreateWithoutLastEditorInput[] | BookUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutLastEditorInput | BookCreateOrConnectWithoutLastEditorInput[]
    createMany?: BookCreateManyLastEditorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookCategoryUncheckedCreateNestedManyWithoutLastEditorInput = {
    create?: XOR<BookCategoryCreateWithoutLastEditorInput, BookCategoryUncheckedCreateWithoutLastEditorInput> | BookCategoryCreateWithoutLastEditorInput[] | BookCategoryUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutLastEditorInput | BookCategoryCreateOrConnectWithoutLastEditorInput[]
    createMany?: BookCategoryCreateManyLastEditorInputEnvelope
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
  }

  export type EntityUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<EntityCreateWithoutStaffInput, EntityUncheckedCreateWithoutStaffInput>
    connectOrCreate?: EntityCreateOrConnectWithoutStaffInput
    upsert?: EntityUpsertWithoutStaffInput
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutStaffInput, EntityUpdateWithoutStaffInput>, EntityUncheckedUpdateWithoutStaffInput>
  }

  export type MemberUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput> | MemberCreateWithoutCreatorInput[] | MemberUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCreatorInput | MemberCreateOrConnectWithoutCreatorInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutCreatorInput | MemberUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MemberCreateManyCreatorInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutCreatorInput | MemberUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutCreatorInput | MemberUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type BookCategoryUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BookCategoryCreateWithoutCreatorInput, BookCategoryUncheckedCreateWithoutCreatorInput> | BookCategoryCreateWithoutCreatorInput[] | BookCategoryUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutCreatorInput | BookCategoryCreateOrConnectWithoutCreatorInput[]
    upsert?: BookCategoryUpsertWithWhereUniqueWithoutCreatorInput | BookCategoryUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BookCategoryCreateManyCreatorInputEnvelope
    set?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    disconnect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    delete?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    update?: BookCategoryUpdateWithWhereUniqueWithoutCreatorInput | BookCategoryUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BookCategoryUpdateManyWithWhereWithoutCreatorInput | BookCategoryUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[]
  }

  export type BookUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput> | BookCreateWithoutCreatorInput[] | BookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatorInput | BookCreateOrConnectWithoutCreatorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCreatorInput | BookUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BookCreateManyCreatorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCreatorInput | BookUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCreatorInput | BookUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type IssuedBookUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<IssuedBookCreateWithoutCreatorInput, IssuedBookUncheckedCreateWithoutCreatorInput> | IssuedBookCreateWithoutCreatorInput[] | IssuedBookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutCreatorInput | IssuedBookCreateOrConnectWithoutCreatorInput[]
    upsert?: IssuedBookUpsertWithWhereUniqueWithoutCreatorInput | IssuedBookUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: IssuedBookCreateManyCreatorInputEnvelope
    set?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    disconnect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    delete?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    update?: IssuedBookUpdateWithWhereUniqueWithoutCreatorInput | IssuedBookUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: IssuedBookUpdateManyWithWhereWithoutCreatorInput | IssuedBookUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: IssuedBookScalarWhereInput | IssuedBookScalarWhereInput[]
  }

  export type IssuedBookItemUpdateManyWithoutCollectorNestedInput = {
    create?: XOR<IssuedBookItemCreateWithoutCollectorInput, IssuedBookItemUncheckedCreateWithoutCollectorInput> | IssuedBookItemCreateWithoutCollectorInput[] | IssuedBookItemUncheckedCreateWithoutCollectorInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutCollectorInput | IssuedBookItemCreateOrConnectWithoutCollectorInput[]
    upsert?: IssuedBookItemUpsertWithWhereUniqueWithoutCollectorInput | IssuedBookItemUpsertWithWhereUniqueWithoutCollectorInput[]
    createMany?: IssuedBookItemCreateManyCollectorInputEnvelope
    set?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    disconnect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    delete?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    update?: IssuedBookItemUpdateWithWhereUniqueWithoutCollectorInput | IssuedBookItemUpdateWithWhereUniqueWithoutCollectorInput[]
    updateMany?: IssuedBookItemUpdateManyWithWhereWithoutCollectorInput | IssuedBookItemUpdateManyWithWhereWithoutCollectorInput[]
    deleteMany?: IssuedBookItemScalarWhereInput | IssuedBookItemScalarWhereInput[]
  }

  export type MemberUpdateManyWithoutLastEditorNestedInput = {
    create?: XOR<MemberCreateWithoutLastEditorInput, MemberUncheckedCreateWithoutLastEditorInput> | MemberCreateWithoutLastEditorInput[] | MemberUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutLastEditorInput | MemberCreateOrConnectWithoutLastEditorInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutLastEditorInput | MemberUpsertWithWhereUniqueWithoutLastEditorInput[]
    createMany?: MemberCreateManyLastEditorInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutLastEditorInput | MemberUpdateWithWhereUniqueWithoutLastEditorInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutLastEditorInput | MemberUpdateManyWithWhereWithoutLastEditorInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type BookUpdateManyWithoutLastEditorNestedInput = {
    create?: XOR<BookCreateWithoutLastEditorInput, BookUncheckedCreateWithoutLastEditorInput> | BookCreateWithoutLastEditorInput[] | BookUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutLastEditorInput | BookCreateOrConnectWithoutLastEditorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutLastEditorInput | BookUpsertWithWhereUniqueWithoutLastEditorInput[]
    createMany?: BookCreateManyLastEditorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutLastEditorInput | BookUpdateWithWhereUniqueWithoutLastEditorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutLastEditorInput | BookUpdateManyWithWhereWithoutLastEditorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookCategoryUpdateManyWithoutLastEditorNestedInput = {
    create?: XOR<BookCategoryCreateWithoutLastEditorInput, BookCategoryUncheckedCreateWithoutLastEditorInput> | BookCategoryCreateWithoutLastEditorInput[] | BookCategoryUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutLastEditorInput | BookCategoryCreateOrConnectWithoutLastEditorInput[]
    upsert?: BookCategoryUpsertWithWhereUniqueWithoutLastEditorInput | BookCategoryUpsertWithWhereUniqueWithoutLastEditorInput[]
    createMany?: BookCategoryCreateManyLastEditorInputEnvelope
    set?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    disconnect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    delete?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    update?: BookCategoryUpdateWithWhereUniqueWithoutLastEditorInput | BookCategoryUpdateWithWhereUniqueWithoutLastEditorInput[]
    updateMany?: BookCategoryUpdateManyWithWhereWithoutLastEditorInput | BookCategoryUpdateManyWithWhereWithoutLastEditorInput[]
    deleteMany?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput> | MemberCreateWithoutCreatorInput[] | MemberUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCreatorInput | MemberCreateOrConnectWithoutCreatorInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutCreatorInput | MemberUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MemberCreateManyCreatorInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutCreatorInput | MemberUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutCreatorInput | MemberUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type BookCategoryUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BookCategoryCreateWithoutCreatorInput, BookCategoryUncheckedCreateWithoutCreatorInput> | BookCategoryCreateWithoutCreatorInput[] | BookCategoryUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutCreatorInput | BookCategoryCreateOrConnectWithoutCreatorInput[]
    upsert?: BookCategoryUpsertWithWhereUniqueWithoutCreatorInput | BookCategoryUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BookCategoryCreateManyCreatorInputEnvelope
    set?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    disconnect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    delete?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    update?: BookCategoryUpdateWithWhereUniqueWithoutCreatorInput | BookCategoryUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BookCategoryUpdateManyWithWhereWithoutCreatorInput | BookCategoryUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput> | BookCreateWithoutCreatorInput[] | BookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatorInput | BookCreateOrConnectWithoutCreatorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCreatorInput | BookUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BookCreateManyCreatorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCreatorInput | BookUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCreatorInput | BookUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type IssuedBookUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<IssuedBookCreateWithoutCreatorInput, IssuedBookUncheckedCreateWithoutCreatorInput> | IssuedBookCreateWithoutCreatorInput[] | IssuedBookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutCreatorInput | IssuedBookCreateOrConnectWithoutCreatorInput[]
    upsert?: IssuedBookUpsertWithWhereUniqueWithoutCreatorInput | IssuedBookUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: IssuedBookCreateManyCreatorInputEnvelope
    set?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    disconnect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    delete?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    update?: IssuedBookUpdateWithWhereUniqueWithoutCreatorInput | IssuedBookUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: IssuedBookUpdateManyWithWhereWithoutCreatorInput | IssuedBookUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: IssuedBookScalarWhereInput | IssuedBookScalarWhereInput[]
  }

  export type IssuedBookItemUncheckedUpdateManyWithoutCollectorNestedInput = {
    create?: XOR<IssuedBookItemCreateWithoutCollectorInput, IssuedBookItemUncheckedCreateWithoutCollectorInput> | IssuedBookItemCreateWithoutCollectorInput[] | IssuedBookItemUncheckedCreateWithoutCollectorInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutCollectorInput | IssuedBookItemCreateOrConnectWithoutCollectorInput[]
    upsert?: IssuedBookItemUpsertWithWhereUniqueWithoutCollectorInput | IssuedBookItemUpsertWithWhereUniqueWithoutCollectorInput[]
    createMany?: IssuedBookItemCreateManyCollectorInputEnvelope
    set?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    disconnect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    delete?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    update?: IssuedBookItemUpdateWithWhereUniqueWithoutCollectorInput | IssuedBookItemUpdateWithWhereUniqueWithoutCollectorInput[]
    updateMany?: IssuedBookItemUpdateManyWithWhereWithoutCollectorInput | IssuedBookItemUpdateManyWithWhereWithoutCollectorInput[]
    deleteMany?: IssuedBookItemScalarWhereInput | IssuedBookItemScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutLastEditorNestedInput = {
    create?: XOR<MemberCreateWithoutLastEditorInput, MemberUncheckedCreateWithoutLastEditorInput> | MemberCreateWithoutLastEditorInput[] | MemberUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutLastEditorInput | MemberCreateOrConnectWithoutLastEditorInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutLastEditorInput | MemberUpsertWithWhereUniqueWithoutLastEditorInput[]
    createMany?: MemberCreateManyLastEditorInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutLastEditorInput | MemberUpdateWithWhereUniqueWithoutLastEditorInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutLastEditorInput | MemberUpdateManyWithWhereWithoutLastEditorInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutLastEditorNestedInput = {
    create?: XOR<BookCreateWithoutLastEditorInput, BookUncheckedCreateWithoutLastEditorInput> | BookCreateWithoutLastEditorInput[] | BookUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutLastEditorInput | BookCreateOrConnectWithoutLastEditorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutLastEditorInput | BookUpsertWithWhereUniqueWithoutLastEditorInput[]
    createMany?: BookCreateManyLastEditorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutLastEditorInput | BookUpdateWithWhereUniqueWithoutLastEditorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutLastEditorInput | BookUpdateManyWithWhereWithoutLastEditorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookCategoryUncheckedUpdateManyWithoutLastEditorNestedInput = {
    create?: XOR<BookCategoryCreateWithoutLastEditorInput, BookCategoryUncheckedCreateWithoutLastEditorInput> | BookCategoryCreateWithoutLastEditorInput[] | BookCategoryUncheckedCreateWithoutLastEditorInput[]
    connectOrCreate?: BookCategoryCreateOrConnectWithoutLastEditorInput | BookCategoryCreateOrConnectWithoutLastEditorInput[]
    upsert?: BookCategoryUpsertWithWhereUniqueWithoutLastEditorInput | BookCategoryUpsertWithWhereUniqueWithoutLastEditorInput[]
    createMany?: BookCategoryCreateManyLastEditorInputEnvelope
    set?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    disconnect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    delete?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[]
    update?: BookCategoryUpdateWithWhereUniqueWithoutLastEditorInput | BookCategoryUpdateWithWhereUniqueWithoutLastEditorInput[]
    updateMany?: BookCategoryUpdateManyWithWhereWithoutLastEditorInput | BookCategoryUpdateManyWithWhereWithoutLastEditorInput[]
    deleteMany?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[]
  }

  export type EntityCreateNestedOneWithoutMembersInput = {
    create?: XOR<EntityCreateWithoutMembersInput, EntityUncheckedCreateWithoutMembersInput>
    connectOrCreate?: EntityCreateOrConnectWithoutMembersInput
    connect?: EntityWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutCreatedMembersInput = {
    create?: XOR<StaffCreateWithoutCreatedMembersInput, StaffUncheckedCreateWithoutCreatedMembersInput>
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedMembersInput
    connect?: StaffWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutLastEditedMembersInput = {
    create?: XOR<StaffCreateWithoutLastEditedMembersInput, StaffUncheckedCreateWithoutLastEditedMembersInput>
    connectOrCreate?: StaffCreateOrConnectWithoutLastEditedMembersInput
    connect?: StaffWhereUniqueInput
  }

  export type IssuedBookCreateNestedManyWithoutMemberInput = {
    create?: XOR<IssuedBookCreateWithoutMemberInput, IssuedBookUncheckedCreateWithoutMemberInput> | IssuedBookCreateWithoutMemberInput[] | IssuedBookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutMemberInput | IssuedBookCreateOrConnectWithoutMemberInput[]
    createMany?: IssuedBookCreateManyMemberInputEnvelope
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
  }

  export type IssuedBookUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<IssuedBookCreateWithoutMemberInput, IssuedBookUncheckedCreateWithoutMemberInput> | IssuedBookCreateWithoutMemberInput[] | IssuedBookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutMemberInput | IssuedBookCreateOrConnectWithoutMemberInput[]
    createMany?: IssuedBookCreateManyMemberInputEnvelope
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
  }

  export type EnumMemberTypeFieldUpdateOperationsInput = {
    set?: $Enums.MemberType
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EntityUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<EntityCreateWithoutMembersInput, EntityUncheckedCreateWithoutMembersInput>
    connectOrCreate?: EntityCreateOrConnectWithoutMembersInput
    upsert?: EntityUpsertWithoutMembersInput
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutMembersInput, EntityUpdateWithoutMembersInput>, EntityUncheckedUpdateWithoutMembersInput>
  }

  export type StaffUpdateOneRequiredWithoutCreatedMembersNestedInput = {
    create?: XOR<StaffCreateWithoutCreatedMembersInput, StaffUncheckedCreateWithoutCreatedMembersInput>
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedMembersInput
    upsert?: StaffUpsertWithoutCreatedMembersInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutCreatedMembersInput, StaffUpdateWithoutCreatedMembersInput>, StaffUncheckedUpdateWithoutCreatedMembersInput>
  }

  export type StaffUpdateOneWithoutLastEditedMembersNestedInput = {
    create?: XOR<StaffCreateWithoutLastEditedMembersInput, StaffUncheckedCreateWithoutLastEditedMembersInput>
    connectOrCreate?: StaffCreateOrConnectWithoutLastEditedMembersInput
    upsert?: StaffUpsertWithoutLastEditedMembersInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutLastEditedMembersInput, StaffUpdateWithoutLastEditedMembersInput>, StaffUncheckedUpdateWithoutLastEditedMembersInput>
  }

  export type IssuedBookUpdateManyWithoutMemberNestedInput = {
    create?: XOR<IssuedBookCreateWithoutMemberInput, IssuedBookUncheckedCreateWithoutMemberInput> | IssuedBookCreateWithoutMemberInput[] | IssuedBookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutMemberInput | IssuedBookCreateOrConnectWithoutMemberInput[]
    upsert?: IssuedBookUpsertWithWhereUniqueWithoutMemberInput | IssuedBookUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: IssuedBookCreateManyMemberInputEnvelope
    set?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    disconnect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    delete?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    update?: IssuedBookUpdateWithWhereUniqueWithoutMemberInput | IssuedBookUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: IssuedBookUpdateManyWithWhereWithoutMemberInput | IssuedBookUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: IssuedBookScalarWhereInput | IssuedBookScalarWhereInput[]
  }

  export type IssuedBookUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<IssuedBookCreateWithoutMemberInput, IssuedBookUncheckedCreateWithoutMemberInput> | IssuedBookCreateWithoutMemberInput[] | IssuedBookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: IssuedBookCreateOrConnectWithoutMemberInput | IssuedBookCreateOrConnectWithoutMemberInput[]
    upsert?: IssuedBookUpsertWithWhereUniqueWithoutMemberInput | IssuedBookUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: IssuedBookCreateManyMemberInputEnvelope
    set?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    disconnect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    delete?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    connect?: IssuedBookWhereUniqueInput | IssuedBookWhereUniqueInput[]
    update?: IssuedBookUpdateWithWhereUniqueWithoutMemberInput | IssuedBookUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: IssuedBookUpdateManyWithWhereWithoutMemberInput | IssuedBookUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: IssuedBookScalarWhereInput | IssuedBookScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput> | BookCreateWithoutCategoryInput[] | BookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCategoryInput | BookCreateOrConnectWithoutCategoryInput[]
    createMany?: BookCreateManyCategoryInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type EntityCreateNestedOneWithoutBookCategoriesInput = {
    create?: XOR<EntityCreateWithoutBookCategoriesInput, EntityUncheckedCreateWithoutBookCategoriesInput>
    connectOrCreate?: EntityCreateOrConnectWithoutBookCategoriesInput
    connect?: EntityWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutCreatedCategoriesInput = {
    create?: XOR<StaffCreateWithoutCreatedCategoriesInput, StaffUncheckedCreateWithoutCreatedCategoriesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedCategoriesInput
    connect?: StaffWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutLastEditedCategoriesInput = {
    create?: XOR<StaffCreateWithoutLastEditedCategoriesInput, StaffUncheckedCreateWithoutLastEditedCategoriesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutLastEditedCategoriesInput
    connect?: StaffWhereUniqueInput
  }

  export type BookUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput> | BookCreateWithoutCategoryInput[] | BookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCategoryInput | BookCreateOrConnectWithoutCategoryInput[]
    createMany?: BookCreateManyCategoryInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput> | BookCreateWithoutCategoryInput[] | BookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCategoryInput | BookCreateOrConnectWithoutCategoryInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCategoryInput | BookUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BookCreateManyCategoryInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCategoryInput | BookUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCategoryInput | BookUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type EntityUpdateOneRequiredWithoutBookCategoriesNestedInput = {
    create?: XOR<EntityCreateWithoutBookCategoriesInput, EntityUncheckedCreateWithoutBookCategoriesInput>
    connectOrCreate?: EntityCreateOrConnectWithoutBookCategoriesInput
    upsert?: EntityUpsertWithoutBookCategoriesInput
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutBookCategoriesInput, EntityUpdateWithoutBookCategoriesInput>, EntityUncheckedUpdateWithoutBookCategoriesInput>
  }

  export type StaffUpdateOneRequiredWithoutCreatedCategoriesNestedInput = {
    create?: XOR<StaffCreateWithoutCreatedCategoriesInput, StaffUncheckedCreateWithoutCreatedCategoriesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedCategoriesInput
    upsert?: StaffUpsertWithoutCreatedCategoriesInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutCreatedCategoriesInput, StaffUpdateWithoutCreatedCategoriesInput>, StaffUncheckedUpdateWithoutCreatedCategoriesInput>
  }

  export type StaffUpdateOneWithoutLastEditedCategoriesNestedInput = {
    create?: XOR<StaffCreateWithoutLastEditedCategoriesInput, StaffUncheckedCreateWithoutLastEditedCategoriesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutLastEditedCategoriesInput
    upsert?: StaffUpsertWithoutLastEditedCategoriesInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutLastEditedCategoriesInput, StaffUpdateWithoutLastEditedCategoriesInput>, StaffUncheckedUpdateWithoutLastEditedCategoriesInput>
  }

  export type BookUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput> | BookCreateWithoutCategoryInput[] | BookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCategoryInput | BookCreateOrConnectWithoutCategoryInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCategoryInput | BookUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BookCreateManyCategoryInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCategoryInput | BookUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCategoryInput | BookUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookCategoryCreateNestedOneWithoutBooksInput = {
    create?: XOR<BookCategoryCreateWithoutBooksInput, BookCategoryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: BookCategoryCreateOrConnectWithoutBooksInput
    connect?: BookCategoryWhereUniqueInput
  }

  export type EntityCreateNestedOneWithoutBooksInput = {
    create?: XOR<EntityCreateWithoutBooksInput, EntityUncheckedCreateWithoutBooksInput>
    connectOrCreate?: EntityCreateOrConnectWithoutBooksInput
    connect?: EntityWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutCreatedBooksInput = {
    create?: XOR<StaffCreateWithoutCreatedBooksInput, StaffUncheckedCreateWithoutCreatedBooksInput>
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedBooksInput
    connect?: StaffWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutLastEditedBooksInput = {
    create?: XOR<StaffCreateWithoutLastEditedBooksInput, StaffUncheckedCreateWithoutLastEditedBooksInput>
    connectOrCreate?: StaffCreateOrConnectWithoutLastEditedBooksInput
    connect?: StaffWhereUniqueInput
  }

  export type IssuedBookItemCreateNestedManyWithoutBookInput = {
    create?: XOR<IssuedBookItemCreateWithoutBookInput, IssuedBookItemUncheckedCreateWithoutBookInput> | IssuedBookItemCreateWithoutBookInput[] | IssuedBookItemUncheckedCreateWithoutBookInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutBookInput | IssuedBookItemCreateOrConnectWithoutBookInput[]
    createMany?: IssuedBookItemCreateManyBookInputEnvelope
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
  }

  export type IssuedBookItemUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<IssuedBookItemCreateWithoutBookInput, IssuedBookItemUncheckedCreateWithoutBookInput> | IssuedBookItemCreateWithoutBookInput[] | IssuedBookItemUncheckedCreateWithoutBookInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutBookInput | IssuedBookItemCreateOrConnectWithoutBookInput[]
    createMany?: IssuedBookItemCreateManyBookInputEnvelope
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookCategoryUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<BookCategoryCreateWithoutBooksInput, BookCategoryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: BookCategoryCreateOrConnectWithoutBooksInput
    upsert?: BookCategoryUpsertWithoutBooksInput
    connect?: BookCategoryWhereUniqueInput
    update?: XOR<XOR<BookCategoryUpdateToOneWithWhereWithoutBooksInput, BookCategoryUpdateWithoutBooksInput>, BookCategoryUncheckedUpdateWithoutBooksInput>
  }

  export type EntityUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<EntityCreateWithoutBooksInput, EntityUncheckedCreateWithoutBooksInput>
    connectOrCreate?: EntityCreateOrConnectWithoutBooksInput
    upsert?: EntityUpsertWithoutBooksInput
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutBooksInput, EntityUpdateWithoutBooksInput>, EntityUncheckedUpdateWithoutBooksInput>
  }

  export type StaffUpdateOneRequiredWithoutCreatedBooksNestedInput = {
    create?: XOR<StaffCreateWithoutCreatedBooksInput, StaffUncheckedCreateWithoutCreatedBooksInput>
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedBooksInput
    upsert?: StaffUpsertWithoutCreatedBooksInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutCreatedBooksInput, StaffUpdateWithoutCreatedBooksInput>, StaffUncheckedUpdateWithoutCreatedBooksInput>
  }

  export type StaffUpdateOneWithoutLastEditedBooksNestedInput = {
    create?: XOR<StaffCreateWithoutLastEditedBooksInput, StaffUncheckedCreateWithoutLastEditedBooksInput>
    connectOrCreate?: StaffCreateOrConnectWithoutLastEditedBooksInput
    upsert?: StaffUpsertWithoutLastEditedBooksInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutLastEditedBooksInput, StaffUpdateWithoutLastEditedBooksInput>, StaffUncheckedUpdateWithoutLastEditedBooksInput>
  }

  export type IssuedBookItemUpdateManyWithoutBookNestedInput = {
    create?: XOR<IssuedBookItemCreateWithoutBookInput, IssuedBookItemUncheckedCreateWithoutBookInput> | IssuedBookItemCreateWithoutBookInput[] | IssuedBookItemUncheckedCreateWithoutBookInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutBookInput | IssuedBookItemCreateOrConnectWithoutBookInput[]
    upsert?: IssuedBookItemUpsertWithWhereUniqueWithoutBookInput | IssuedBookItemUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: IssuedBookItemCreateManyBookInputEnvelope
    set?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    disconnect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    delete?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    update?: IssuedBookItemUpdateWithWhereUniqueWithoutBookInput | IssuedBookItemUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: IssuedBookItemUpdateManyWithWhereWithoutBookInput | IssuedBookItemUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: IssuedBookItemScalarWhereInput | IssuedBookItemScalarWhereInput[]
  }

  export type IssuedBookItemUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<IssuedBookItemCreateWithoutBookInput, IssuedBookItemUncheckedCreateWithoutBookInput> | IssuedBookItemCreateWithoutBookInput[] | IssuedBookItemUncheckedCreateWithoutBookInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutBookInput | IssuedBookItemCreateOrConnectWithoutBookInput[]
    upsert?: IssuedBookItemUpsertWithWhereUniqueWithoutBookInput | IssuedBookItemUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: IssuedBookItemCreateManyBookInputEnvelope
    set?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    disconnect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    delete?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    update?: IssuedBookItemUpdateWithWhereUniqueWithoutBookInput | IssuedBookItemUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: IssuedBookItemUpdateManyWithWhereWithoutBookInput | IssuedBookItemUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: IssuedBookItemScalarWhereInput | IssuedBookItemScalarWhereInput[]
  }

  export type EntityCreateNestedOneWithoutIssuedBooksInput = {
    create?: XOR<EntityCreateWithoutIssuedBooksInput, EntityUncheckedCreateWithoutIssuedBooksInput>
    connectOrCreate?: EntityCreateOrConnectWithoutIssuedBooksInput
    connect?: EntityWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutIssuedBooksInput = {
    create?: XOR<MemberCreateWithoutIssuedBooksInput, MemberUncheckedCreateWithoutIssuedBooksInput>
    connectOrCreate?: MemberCreateOrConnectWithoutIssuedBooksInput
    connect?: MemberWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutCreatedIssuedBooksInput = {
    create?: XOR<StaffCreateWithoutCreatedIssuedBooksInput, StaffUncheckedCreateWithoutCreatedIssuedBooksInput>
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedIssuedBooksInput
    connect?: StaffWhereUniqueInput
  }

  export type IssuedBookItemCreateNestedManyWithoutIssuedBookInput = {
    create?: XOR<IssuedBookItemCreateWithoutIssuedBookInput, IssuedBookItemUncheckedCreateWithoutIssuedBookInput> | IssuedBookItemCreateWithoutIssuedBookInput[] | IssuedBookItemUncheckedCreateWithoutIssuedBookInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutIssuedBookInput | IssuedBookItemCreateOrConnectWithoutIssuedBookInput[]
    createMany?: IssuedBookItemCreateManyIssuedBookInputEnvelope
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
  }

  export type IssuedBookItemUncheckedCreateNestedManyWithoutIssuedBookInput = {
    create?: XOR<IssuedBookItemCreateWithoutIssuedBookInput, IssuedBookItemUncheckedCreateWithoutIssuedBookInput> | IssuedBookItemCreateWithoutIssuedBookInput[] | IssuedBookItemUncheckedCreateWithoutIssuedBookInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutIssuedBookInput | IssuedBookItemCreateOrConnectWithoutIssuedBookInput[]
    createMany?: IssuedBookItemCreateManyIssuedBookInputEnvelope
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
  }

  export type EntityUpdateOneRequiredWithoutIssuedBooksNestedInput = {
    create?: XOR<EntityCreateWithoutIssuedBooksInput, EntityUncheckedCreateWithoutIssuedBooksInput>
    connectOrCreate?: EntityCreateOrConnectWithoutIssuedBooksInput
    upsert?: EntityUpsertWithoutIssuedBooksInput
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutIssuedBooksInput, EntityUpdateWithoutIssuedBooksInput>, EntityUncheckedUpdateWithoutIssuedBooksInput>
  }

  export type MemberUpdateOneRequiredWithoutIssuedBooksNestedInput = {
    create?: XOR<MemberCreateWithoutIssuedBooksInput, MemberUncheckedCreateWithoutIssuedBooksInput>
    connectOrCreate?: MemberCreateOrConnectWithoutIssuedBooksInput
    upsert?: MemberUpsertWithoutIssuedBooksInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutIssuedBooksInput, MemberUpdateWithoutIssuedBooksInput>, MemberUncheckedUpdateWithoutIssuedBooksInput>
  }

  export type StaffUpdateOneRequiredWithoutCreatedIssuedBooksNestedInput = {
    create?: XOR<StaffCreateWithoutCreatedIssuedBooksInput, StaffUncheckedCreateWithoutCreatedIssuedBooksInput>
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedIssuedBooksInput
    upsert?: StaffUpsertWithoutCreatedIssuedBooksInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutCreatedIssuedBooksInput, StaffUpdateWithoutCreatedIssuedBooksInput>, StaffUncheckedUpdateWithoutCreatedIssuedBooksInput>
  }

  export type IssuedBookItemUpdateManyWithoutIssuedBookNestedInput = {
    create?: XOR<IssuedBookItemCreateWithoutIssuedBookInput, IssuedBookItemUncheckedCreateWithoutIssuedBookInput> | IssuedBookItemCreateWithoutIssuedBookInput[] | IssuedBookItemUncheckedCreateWithoutIssuedBookInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutIssuedBookInput | IssuedBookItemCreateOrConnectWithoutIssuedBookInput[]
    upsert?: IssuedBookItemUpsertWithWhereUniqueWithoutIssuedBookInput | IssuedBookItemUpsertWithWhereUniqueWithoutIssuedBookInput[]
    createMany?: IssuedBookItemCreateManyIssuedBookInputEnvelope
    set?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    disconnect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    delete?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    update?: IssuedBookItemUpdateWithWhereUniqueWithoutIssuedBookInput | IssuedBookItemUpdateWithWhereUniqueWithoutIssuedBookInput[]
    updateMany?: IssuedBookItemUpdateManyWithWhereWithoutIssuedBookInput | IssuedBookItemUpdateManyWithWhereWithoutIssuedBookInput[]
    deleteMany?: IssuedBookItemScalarWhereInput | IssuedBookItemScalarWhereInput[]
  }

  export type IssuedBookItemUncheckedUpdateManyWithoutIssuedBookNestedInput = {
    create?: XOR<IssuedBookItemCreateWithoutIssuedBookInput, IssuedBookItemUncheckedCreateWithoutIssuedBookInput> | IssuedBookItemCreateWithoutIssuedBookInput[] | IssuedBookItemUncheckedCreateWithoutIssuedBookInput[]
    connectOrCreate?: IssuedBookItemCreateOrConnectWithoutIssuedBookInput | IssuedBookItemCreateOrConnectWithoutIssuedBookInput[]
    upsert?: IssuedBookItemUpsertWithWhereUniqueWithoutIssuedBookInput | IssuedBookItemUpsertWithWhereUniqueWithoutIssuedBookInput[]
    createMany?: IssuedBookItemCreateManyIssuedBookInputEnvelope
    set?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    disconnect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    delete?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    connect?: IssuedBookItemWhereUniqueInput | IssuedBookItemWhereUniqueInput[]
    update?: IssuedBookItemUpdateWithWhereUniqueWithoutIssuedBookInput | IssuedBookItemUpdateWithWhereUniqueWithoutIssuedBookInput[]
    updateMany?: IssuedBookItemUpdateManyWithWhereWithoutIssuedBookInput | IssuedBookItemUpdateManyWithWhereWithoutIssuedBookInput[]
    deleteMany?: IssuedBookItemScalarWhereInput | IssuedBookItemScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutIssuedBookItemsInput = {
    create?: XOR<BookCreateWithoutIssuedBookItemsInput, BookUncheckedCreateWithoutIssuedBookItemsInput>
    connectOrCreate?: BookCreateOrConnectWithoutIssuedBookItemsInput
    connect?: BookWhereUniqueInput
  }

  export type IssuedBookCreateNestedOneWithoutItemsInput = {
    create?: XOR<IssuedBookCreateWithoutItemsInput, IssuedBookUncheckedCreateWithoutItemsInput>
    connectOrCreate?: IssuedBookCreateOrConnectWithoutItemsInput
    connect?: IssuedBookWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutCollectedItemsInput = {
    create?: XOR<StaffCreateWithoutCollectedItemsInput, StaffUncheckedCreateWithoutCollectedItemsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutCollectedItemsInput
    connect?: StaffWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookUpdateOneRequiredWithoutIssuedBookItemsNestedInput = {
    create?: XOR<BookCreateWithoutIssuedBookItemsInput, BookUncheckedCreateWithoutIssuedBookItemsInput>
    connectOrCreate?: BookCreateOrConnectWithoutIssuedBookItemsInput
    upsert?: BookUpsertWithoutIssuedBookItemsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutIssuedBookItemsInput, BookUpdateWithoutIssuedBookItemsInput>, BookUncheckedUpdateWithoutIssuedBookItemsInput>
  }

  export type IssuedBookUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<IssuedBookCreateWithoutItemsInput, IssuedBookUncheckedCreateWithoutItemsInput>
    connectOrCreate?: IssuedBookCreateOrConnectWithoutItemsInput
    upsert?: IssuedBookUpsertWithoutItemsInput
    connect?: IssuedBookWhereUniqueInput
    update?: XOR<XOR<IssuedBookUpdateToOneWithWhereWithoutItemsInput, IssuedBookUpdateWithoutItemsInput>, IssuedBookUncheckedUpdateWithoutItemsInput>
  }

  export type StaffUpdateOneWithoutCollectedItemsNestedInput = {
    create?: XOR<StaffCreateWithoutCollectedItemsInput, StaffUncheckedCreateWithoutCollectedItemsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutCollectedItemsInput
    upsert?: StaffUpsertWithoutCollectedItemsInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutCollectedItemsInput, StaffUpdateWithoutCollectedItemsInput>, StaffUncheckedUpdateWithoutCollectedItemsInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumMemberTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberType | EnumMemberTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberType[]
    notIn?: $Enums.MemberType[]
    not?: NestedEnumMemberTypeFilter<$PrismaModel> | $Enums.MemberType
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumMemberTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberType | EnumMemberTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberType[]
    notIn?: $Enums.MemberType[]
    not?: NestedEnumMemberTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemberType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberTypeFilter<$PrismaModel>
    _max?: NestedEnumMemberTypeFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BookCreateWithoutEntityInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BookCategoryCreateNestedOneWithoutBooksInput
    creator: StaffCreateNestedOneWithoutCreatedBooksInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedBooksInput
    issuedBookItems?: IssuedBookItemCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutEntityInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    categoryId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedBookItems?: IssuedBookItemUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutEntityInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutEntityInput, BookUncheckedCreateWithoutEntityInput>
  }

  export type BookCreateManyEntityInputEnvelope = {
    data: BookCreateManyEntityInput | BookCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type BookCategoryCreateWithoutEntityInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutCategoryInput
    creator: StaffCreateNestedOneWithoutCreatedCategoriesInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedCategoriesInput
  }

  export type BookCategoryUncheckedCreateWithoutEntityInput = {
    id?: string
    name: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BookCategoryCreateOrConnectWithoutEntityInput = {
    where: BookCategoryWhereUniqueInput
    create: XOR<BookCategoryCreateWithoutEntityInput, BookCategoryUncheckedCreateWithoutEntityInput>
  }

  export type BookCategoryCreateManyEntityInputEnvelope = {
    data: BookCategoryCreateManyEntityInput | BookCategoryCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type ContactPersonCreateWithoutEntityInput = {
    id?: string
    name: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPersonUncheckedCreateWithoutEntityInput = {
    id?: string
    name: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPersonCreateOrConnectWithoutEntityInput = {
    where: ContactPersonWhereUniqueInput
    create: XOR<ContactPersonCreateWithoutEntityInput, ContactPersonUncheckedCreateWithoutEntityInput>
  }

  export type HeadPersonCreateWithoutEntityInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadPersonUncheckedCreateWithoutEntityInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadPersonCreateOrConnectWithoutEntityInput = {
    where: HeadPersonWhereUniqueInput
    create: XOR<HeadPersonCreateWithoutEntityInput, HeadPersonUncheckedCreateWithoutEntityInput>
  }

  export type IssuedBookCreateWithoutEntityInput = {
    id?: string
    issueDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutIssuedBooksInput
    creator: StaffCreateNestedOneWithoutCreatedIssuedBooksInput
    items?: IssuedBookItemCreateNestedManyWithoutIssuedBookInput
  }

  export type IssuedBookUncheckedCreateWithoutEntityInput = {
    id?: string
    issueDate?: Date | string
    memberId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: IssuedBookItemUncheckedCreateNestedManyWithoutIssuedBookInput
  }

  export type IssuedBookCreateOrConnectWithoutEntityInput = {
    where: IssuedBookWhereUniqueInput
    create: XOR<IssuedBookCreateWithoutEntityInput, IssuedBookUncheckedCreateWithoutEntityInput>
  }

  export type IssuedBookCreateManyEntityInputEnvelope = {
    data: IssuedBookCreateManyEntityInput | IssuedBookCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type StaffCreateWithoutEntityInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdMembers?: MemberCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryCreateNestedManyWithoutCreatorInput
    createdBooks?: BookCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUncheckedCreateWithoutEntityInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdMembers?: MemberUncheckedCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryUncheckedCreateNestedManyWithoutCreatorInput
    createdBooks?: BookUncheckedCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemUncheckedCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryUncheckedCreateNestedManyWithoutLastEditorInput
  }

  export type StaffCreateOrConnectWithoutEntityInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutEntityInput, StaffUncheckedCreateWithoutEntityInput>
  }

  export type StaffCreateManyEntityInputEnvelope = {
    data: StaffCreateManyEntityInput | StaffCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type MemberCreateWithoutEntityInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: StaffCreateNestedOneWithoutCreatedMembersInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedMembersInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutEntityInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutEntityInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutEntityInput, MemberUncheckedCreateWithoutEntityInput>
  }

  export type MemberCreateManyEntityInputEnvelope = {
    data: MemberCreateManyEntityInput | MemberCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutEntityInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutEntityInput, BookUncheckedUpdateWithoutEntityInput>
    create: XOR<BookCreateWithoutEntityInput, BookUncheckedCreateWithoutEntityInput>
  }

  export type BookUpdateWithWhereUniqueWithoutEntityInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutEntityInput, BookUncheckedUpdateWithoutEntityInput>
  }

  export type BookUpdateManyWithWhereWithoutEntityInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutEntityInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    copies?: IntFilter<"Book"> | number
    availableCopies?: IntFilter<"Book"> | number
    categoryId?: StringFilter<"Book"> | string
    entityId?: StringFilter<"Book"> | string
    createdBy?: StringFilter<"Book"> | string
    lastEditedBy?: StringNullableFilter<"Book"> | string | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
  }

  export type BookCategoryUpsertWithWhereUniqueWithoutEntityInput = {
    where: BookCategoryWhereUniqueInput
    update: XOR<BookCategoryUpdateWithoutEntityInput, BookCategoryUncheckedUpdateWithoutEntityInput>
    create: XOR<BookCategoryCreateWithoutEntityInput, BookCategoryUncheckedCreateWithoutEntityInput>
  }

  export type BookCategoryUpdateWithWhereUniqueWithoutEntityInput = {
    where: BookCategoryWhereUniqueInput
    data: XOR<BookCategoryUpdateWithoutEntityInput, BookCategoryUncheckedUpdateWithoutEntityInput>
  }

  export type BookCategoryUpdateManyWithWhereWithoutEntityInput = {
    where: BookCategoryScalarWhereInput
    data: XOR<BookCategoryUpdateManyMutationInput, BookCategoryUncheckedUpdateManyWithoutEntityInput>
  }

  export type BookCategoryScalarWhereInput = {
    AND?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[]
    OR?: BookCategoryScalarWhereInput[]
    NOT?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[]
    id?: StringFilter<"BookCategory"> | string
    name?: StringFilter<"BookCategory"> | string
    entityId?: StringFilter<"BookCategory"> | string
    createdBy?: StringFilter<"BookCategory"> | string
    lastEditedBy?: StringNullableFilter<"BookCategory"> | string | null
    createdAt?: DateTimeFilter<"BookCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BookCategory"> | Date | string
  }

  export type ContactPersonUpsertWithoutEntityInput = {
    update: XOR<ContactPersonUpdateWithoutEntityInput, ContactPersonUncheckedUpdateWithoutEntityInput>
    create: XOR<ContactPersonCreateWithoutEntityInput, ContactPersonUncheckedCreateWithoutEntityInput>
    where?: ContactPersonWhereInput
  }

  export type ContactPersonUpdateToOneWithWhereWithoutEntityInput = {
    where?: ContactPersonWhereInput
    data: XOR<ContactPersonUpdateWithoutEntityInput, ContactPersonUncheckedUpdateWithoutEntityInput>
  }

  export type ContactPersonUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPersonUncheckedUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadPersonUpsertWithoutEntityInput = {
    update: XOR<HeadPersonUpdateWithoutEntityInput, HeadPersonUncheckedUpdateWithoutEntityInput>
    create: XOR<HeadPersonCreateWithoutEntityInput, HeadPersonUncheckedCreateWithoutEntityInput>
    where?: HeadPersonWhereInput
  }

  export type HeadPersonUpdateToOneWithWhereWithoutEntityInput = {
    where?: HeadPersonWhereInput
    data: XOR<HeadPersonUpdateWithoutEntityInput, HeadPersonUncheckedUpdateWithoutEntityInput>
  }

  export type HeadPersonUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadPersonUncheckedUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookUpsertWithWhereUniqueWithoutEntityInput = {
    where: IssuedBookWhereUniqueInput
    update: XOR<IssuedBookUpdateWithoutEntityInput, IssuedBookUncheckedUpdateWithoutEntityInput>
    create: XOR<IssuedBookCreateWithoutEntityInput, IssuedBookUncheckedCreateWithoutEntityInput>
  }

  export type IssuedBookUpdateWithWhereUniqueWithoutEntityInput = {
    where: IssuedBookWhereUniqueInput
    data: XOR<IssuedBookUpdateWithoutEntityInput, IssuedBookUncheckedUpdateWithoutEntityInput>
  }

  export type IssuedBookUpdateManyWithWhereWithoutEntityInput = {
    where: IssuedBookScalarWhereInput
    data: XOR<IssuedBookUpdateManyMutationInput, IssuedBookUncheckedUpdateManyWithoutEntityInput>
  }

  export type IssuedBookScalarWhereInput = {
    AND?: IssuedBookScalarWhereInput | IssuedBookScalarWhereInput[]
    OR?: IssuedBookScalarWhereInput[]
    NOT?: IssuedBookScalarWhereInput | IssuedBookScalarWhereInput[]
    id?: StringFilter<"IssuedBook"> | string
    issueDate?: DateTimeFilter<"IssuedBook"> | Date | string
    memberId?: StringFilter<"IssuedBook"> | string
    entityId?: StringFilter<"IssuedBook"> | string
    createdBy?: StringFilter<"IssuedBook"> | string
    createdAt?: DateTimeFilter<"IssuedBook"> | Date | string
    updatedAt?: DateTimeFilter<"IssuedBook"> | Date | string
  }

  export type StaffUpsertWithWhereUniqueWithoutEntityInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutEntityInput, StaffUncheckedUpdateWithoutEntityInput>
    create: XOR<StaffCreateWithoutEntityInput, StaffUncheckedCreateWithoutEntityInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutEntityInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutEntityInput, StaffUncheckedUpdateWithoutEntityInput>
  }

  export type StaffUpdateManyWithWhereWithoutEntityInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutEntityInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    gender?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    address?: StringFilter<"Staff"> | string
    entityId?: StringFilter<"Staff"> | string
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    pasword?: StringNullableFilter<"Staff"> | string | null
  }

  export type MemberUpsertWithWhereUniqueWithoutEntityInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutEntityInput, MemberUncheckedUpdateWithoutEntityInput>
    create: XOR<MemberCreateWithoutEntityInput, MemberUncheckedCreateWithoutEntityInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutEntityInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutEntityInput, MemberUncheckedUpdateWithoutEntityInput>
  }

  export type MemberUpdateManyWithWhereWithoutEntityInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutEntityInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    profileImage?: StringNullableFilter<"Member"> | string | null
    memberType?: EnumMemberTypeFilter<"Member"> | $Enums.MemberType
    gender?: EnumGenderFilter<"Member"> | $Enums.Gender
    phoneNumber?: StringFilter<"Member"> | string
    address?: StringFilter<"Member"> | string
    class?: StringNullableFilter<"Member"> | string | null
    division?: StringNullableFilter<"Member"> | string | null
    entityId?: StringFilter<"Member"> | string
    createdBy?: StringFilter<"Member"> | string
    lastEditedBy?: StringNullableFilter<"Member"> | string | null
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type EntityCreateWithoutHeadPersonInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutEntityInput
    staff?: StaffCreateNestedManyWithoutEntityInput
    members?: MemberCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutHeadPersonInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryUncheckedCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonUncheckedCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutEntityInput
    staff?: StaffUncheckedCreateNestedManyWithoutEntityInput
    members?: MemberUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutHeadPersonInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutHeadPersonInput, EntityUncheckedCreateWithoutHeadPersonInput>
  }

  export type EntityUpsertWithoutHeadPersonInput = {
    update: XOR<EntityUpdateWithoutHeadPersonInput, EntityUncheckedUpdateWithoutHeadPersonInput>
    create: XOR<EntityCreateWithoutHeadPersonInput, EntityUncheckedCreateWithoutHeadPersonInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutHeadPersonInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutHeadPersonInput, EntityUncheckedUpdateWithoutHeadPersonInput>
  }

  export type EntityUpdateWithoutHeadPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutEntityNestedInput
    staff?: StaffUpdateManyWithoutEntityNestedInput
    members?: MemberUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutHeadPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUncheckedUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUncheckedUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutEntityNestedInput
    staff?: StaffUncheckedUpdateManyWithoutEntityNestedInput
    members?: MemberUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type EntityCreateWithoutContactPersonInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryCreateNestedManyWithoutEntityInput
    headPerson?: HeadPersonCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutEntityInput
    staff?: StaffCreateNestedManyWithoutEntityInput
    members?: MemberCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutContactPersonInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryUncheckedCreateNestedManyWithoutEntityInput
    headPerson?: HeadPersonUncheckedCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutEntityInput
    staff?: StaffUncheckedCreateNestedManyWithoutEntityInput
    members?: MemberUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutContactPersonInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutContactPersonInput, EntityUncheckedCreateWithoutContactPersonInput>
  }

  export type EntityUpsertWithoutContactPersonInput = {
    update: XOR<EntityUpdateWithoutContactPersonInput, EntityUncheckedUpdateWithoutContactPersonInput>
    create: XOR<EntityCreateWithoutContactPersonInput, EntityUncheckedCreateWithoutContactPersonInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutContactPersonInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutContactPersonInput, EntityUncheckedUpdateWithoutContactPersonInput>
  }

  export type EntityUpdateWithoutContactPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUpdateManyWithoutEntityNestedInput
    headPerson?: HeadPersonUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutEntityNestedInput
    staff?: StaffUpdateManyWithoutEntityNestedInput
    members?: MemberUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutContactPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUncheckedUpdateManyWithoutEntityNestedInput
    headPerson?: HeadPersonUncheckedUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutEntityNestedInput
    staff?: StaffUncheckedUpdateManyWithoutEntityNestedInput
    members?: MemberUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type EntityCreateWithoutStaffInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutEntityInput
    members?: MemberCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryUncheckedCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonUncheckedCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonUncheckedCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutEntityInput
    members?: MemberUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutStaffInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutStaffInput, EntityUncheckedCreateWithoutStaffInput>
  }

  export type MemberCreateWithoutCreatorInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutMembersInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedMembersInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutCreatorInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    entityId: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutCreatorInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput>
  }

  export type MemberCreateManyCreatorInputEnvelope = {
    data: MemberCreateManyCreatorInput | MemberCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type BookCategoryCreateWithoutCreatorInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutCategoryInput
    entity: EntityCreateNestedOneWithoutBookCategoriesInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedCategoriesInput
  }

  export type BookCategoryUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    entityId: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BookCategoryCreateOrConnectWithoutCreatorInput = {
    where: BookCategoryWhereUniqueInput
    create: XOR<BookCategoryCreateWithoutCreatorInput, BookCategoryUncheckedCreateWithoutCreatorInput>
  }

  export type BookCategoryCreateManyCreatorInputEnvelope = {
    data: BookCategoryCreateManyCreatorInput | BookCategoryCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutCreatorInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BookCategoryCreateNestedOneWithoutBooksInput
    entity: EntityCreateNestedOneWithoutBooksInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedBooksInput
    issuedBookItems?: IssuedBookItemCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCreatorInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    categoryId: string
    entityId: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedBookItems?: IssuedBookItemUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCreatorInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput>
  }

  export type BookCreateManyCreatorInputEnvelope = {
    data: BookCreateManyCreatorInput | BookCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type IssuedBookCreateWithoutCreatorInput = {
    id?: string
    issueDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutIssuedBooksInput
    member: MemberCreateNestedOneWithoutIssuedBooksInput
    items?: IssuedBookItemCreateNestedManyWithoutIssuedBookInput
  }

  export type IssuedBookUncheckedCreateWithoutCreatorInput = {
    id?: string
    issueDate?: Date | string
    memberId: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: IssuedBookItemUncheckedCreateNestedManyWithoutIssuedBookInput
  }

  export type IssuedBookCreateOrConnectWithoutCreatorInput = {
    where: IssuedBookWhereUniqueInput
    create: XOR<IssuedBookCreateWithoutCreatorInput, IssuedBookUncheckedCreateWithoutCreatorInput>
  }

  export type IssuedBookCreateManyCreatorInputEnvelope = {
    data: IssuedBookCreateManyCreatorInput | IssuedBookCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type IssuedBookItemCreateWithoutCollectorInput = {
    id?: string
    collected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutIssuedBookItemsInput
    issuedBook: IssuedBookCreateNestedOneWithoutItemsInput
  }

  export type IssuedBookItemUncheckedCreateWithoutCollectorInput = {
    id?: string
    bookId: string
    issuedBookId: string
    collected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookItemCreateOrConnectWithoutCollectorInput = {
    where: IssuedBookItemWhereUniqueInput
    create: XOR<IssuedBookItemCreateWithoutCollectorInput, IssuedBookItemUncheckedCreateWithoutCollectorInput>
  }

  export type IssuedBookItemCreateManyCollectorInputEnvelope = {
    data: IssuedBookItemCreateManyCollectorInput | IssuedBookItemCreateManyCollectorInput[]
    skipDuplicates?: boolean
  }

  export type MemberCreateWithoutLastEditorInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutMembersInput
    creator: StaffCreateNestedOneWithoutCreatedMembersInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutLastEditorInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutLastEditorInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutLastEditorInput, MemberUncheckedCreateWithoutLastEditorInput>
  }

  export type MemberCreateManyLastEditorInputEnvelope = {
    data: MemberCreateManyLastEditorInput | MemberCreateManyLastEditorInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutLastEditorInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BookCategoryCreateNestedOneWithoutBooksInput
    entity: EntityCreateNestedOneWithoutBooksInput
    creator: StaffCreateNestedOneWithoutCreatedBooksInput
    issuedBookItems?: IssuedBookItemCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutLastEditorInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    categoryId: string
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedBookItems?: IssuedBookItemUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutLastEditorInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutLastEditorInput, BookUncheckedCreateWithoutLastEditorInput>
  }

  export type BookCreateManyLastEditorInputEnvelope = {
    data: BookCreateManyLastEditorInput | BookCreateManyLastEditorInput[]
    skipDuplicates?: boolean
  }

  export type BookCategoryCreateWithoutLastEditorInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutCategoryInput
    entity: EntityCreateNestedOneWithoutBookCategoriesInput
    creator: StaffCreateNestedOneWithoutCreatedCategoriesInput
  }

  export type BookCategoryUncheckedCreateWithoutLastEditorInput = {
    id?: string
    name: string
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BookCategoryCreateOrConnectWithoutLastEditorInput = {
    where: BookCategoryWhereUniqueInput
    create: XOR<BookCategoryCreateWithoutLastEditorInput, BookCategoryUncheckedCreateWithoutLastEditorInput>
  }

  export type BookCategoryCreateManyLastEditorInputEnvelope = {
    data: BookCategoryCreateManyLastEditorInput | BookCategoryCreateManyLastEditorInput[]
    skipDuplicates?: boolean
  }

  export type EntityUpsertWithoutStaffInput = {
    update: XOR<EntityUpdateWithoutStaffInput, EntityUncheckedUpdateWithoutStaffInput>
    create: XOR<EntityCreateWithoutStaffInput, EntityUncheckedCreateWithoutStaffInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutStaffInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutStaffInput, EntityUncheckedUpdateWithoutStaffInput>
  }

  export type EntityUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutEntityNestedInput
    members?: MemberUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUncheckedUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUncheckedUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUncheckedUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutEntityNestedInput
    members?: MemberUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutCreatorInput, MemberUncheckedUpdateWithoutCreatorInput>
    create: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutCreatorInput, MemberUncheckedUpdateWithoutCreatorInput>
  }

  export type MemberUpdateManyWithWhereWithoutCreatorInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutCreatorInput>
  }

  export type BookCategoryUpsertWithWhereUniqueWithoutCreatorInput = {
    where: BookCategoryWhereUniqueInput
    update: XOR<BookCategoryUpdateWithoutCreatorInput, BookCategoryUncheckedUpdateWithoutCreatorInput>
    create: XOR<BookCategoryCreateWithoutCreatorInput, BookCategoryUncheckedCreateWithoutCreatorInput>
  }

  export type BookCategoryUpdateWithWhereUniqueWithoutCreatorInput = {
    where: BookCategoryWhereUniqueInput
    data: XOR<BookCategoryUpdateWithoutCreatorInput, BookCategoryUncheckedUpdateWithoutCreatorInput>
  }

  export type BookCategoryUpdateManyWithWhereWithoutCreatorInput = {
    where: BookCategoryScalarWhereInput
    data: XOR<BookCategoryUpdateManyMutationInput, BookCategoryUncheckedUpdateManyWithoutCreatorInput>
  }

  export type BookUpsertWithWhereUniqueWithoutCreatorInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutCreatorInput, BookUncheckedUpdateWithoutCreatorInput>
    create: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput>
  }

  export type BookUpdateWithWhereUniqueWithoutCreatorInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutCreatorInput, BookUncheckedUpdateWithoutCreatorInput>
  }

  export type BookUpdateManyWithWhereWithoutCreatorInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutCreatorInput>
  }

  export type IssuedBookUpsertWithWhereUniqueWithoutCreatorInput = {
    where: IssuedBookWhereUniqueInput
    update: XOR<IssuedBookUpdateWithoutCreatorInput, IssuedBookUncheckedUpdateWithoutCreatorInput>
    create: XOR<IssuedBookCreateWithoutCreatorInput, IssuedBookUncheckedCreateWithoutCreatorInput>
  }

  export type IssuedBookUpdateWithWhereUniqueWithoutCreatorInput = {
    where: IssuedBookWhereUniqueInput
    data: XOR<IssuedBookUpdateWithoutCreatorInput, IssuedBookUncheckedUpdateWithoutCreatorInput>
  }

  export type IssuedBookUpdateManyWithWhereWithoutCreatorInput = {
    where: IssuedBookScalarWhereInput
    data: XOR<IssuedBookUpdateManyMutationInput, IssuedBookUncheckedUpdateManyWithoutCreatorInput>
  }

  export type IssuedBookItemUpsertWithWhereUniqueWithoutCollectorInput = {
    where: IssuedBookItemWhereUniqueInput
    update: XOR<IssuedBookItemUpdateWithoutCollectorInput, IssuedBookItemUncheckedUpdateWithoutCollectorInput>
    create: XOR<IssuedBookItemCreateWithoutCollectorInput, IssuedBookItemUncheckedCreateWithoutCollectorInput>
  }

  export type IssuedBookItemUpdateWithWhereUniqueWithoutCollectorInput = {
    where: IssuedBookItemWhereUniqueInput
    data: XOR<IssuedBookItemUpdateWithoutCollectorInput, IssuedBookItemUncheckedUpdateWithoutCollectorInput>
  }

  export type IssuedBookItemUpdateManyWithWhereWithoutCollectorInput = {
    where: IssuedBookItemScalarWhereInput
    data: XOR<IssuedBookItemUpdateManyMutationInput, IssuedBookItemUncheckedUpdateManyWithoutCollectorInput>
  }

  export type IssuedBookItemScalarWhereInput = {
    AND?: IssuedBookItemScalarWhereInput | IssuedBookItemScalarWhereInput[]
    OR?: IssuedBookItemScalarWhereInput[]
    NOT?: IssuedBookItemScalarWhereInput | IssuedBookItemScalarWhereInput[]
    id?: StringFilter<"IssuedBookItem"> | string
    bookId?: StringFilter<"IssuedBookItem"> | string
    issuedBookId?: StringFilter<"IssuedBookItem"> | string
    collected?: BoolFilter<"IssuedBookItem"> | boolean
    collectedBy?: StringNullableFilter<"IssuedBookItem"> | string | null
    createdAt?: DateTimeFilter<"IssuedBookItem"> | Date | string
    updatedAt?: DateTimeFilter<"IssuedBookItem"> | Date | string
  }

  export type MemberUpsertWithWhereUniqueWithoutLastEditorInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutLastEditorInput, MemberUncheckedUpdateWithoutLastEditorInput>
    create: XOR<MemberCreateWithoutLastEditorInput, MemberUncheckedCreateWithoutLastEditorInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutLastEditorInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutLastEditorInput, MemberUncheckedUpdateWithoutLastEditorInput>
  }

  export type MemberUpdateManyWithWhereWithoutLastEditorInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutLastEditorInput>
  }

  export type BookUpsertWithWhereUniqueWithoutLastEditorInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutLastEditorInput, BookUncheckedUpdateWithoutLastEditorInput>
    create: XOR<BookCreateWithoutLastEditorInput, BookUncheckedCreateWithoutLastEditorInput>
  }

  export type BookUpdateWithWhereUniqueWithoutLastEditorInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutLastEditorInput, BookUncheckedUpdateWithoutLastEditorInput>
  }

  export type BookUpdateManyWithWhereWithoutLastEditorInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutLastEditorInput>
  }

  export type BookCategoryUpsertWithWhereUniqueWithoutLastEditorInput = {
    where: BookCategoryWhereUniqueInput
    update: XOR<BookCategoryUpdateWithoutLastEditorInput, BookCategoryUncheckedUpdateWithoutLastEditorInput>
    create: XOR<BookCategoryCreateWithoutLastEditorInput, BookCategoryUncheckedCreateWithoutLastEditorInput>
  }

  export type BookCategoryUpdateWithWhereUniqueWithoutLastEditorInput = {
    where: BookCategoryWhereUniqueInput
    data: XOR<BookCategoryUpdateWithoutLastEditorInput, BookCategoryUncheckedUpdateWithoutLastEditorInput>
  }

  export type BookCategoryUpdateManyWithWhereWithoutLastEditorInput = {
    where: BookCategoryScalarWhereInput
    data: XOR<BookCategoryUpdateManyMutationInput, BookCategoryUncheckedUpdateManyWithoutLastEditorInput>
  }

  export type EntityCreateWithoutMembersInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutEntityInput
    staff?: StaffCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryUncheckedCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonUncheckedCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonUncheckedCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutEntityInput
    staff?: StaffUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutMembersInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutMembersInput, EntityUncheckedCreateWithoutMembersInput>
  }

  export type StaffCreateWithoutCreatedMembersInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    entity: EntityCreateNestedOneWithoutStaffInput
    createdCategories?: BookCategoryCreateNestedManyWithoutCreatorInput
    createdBooks?: BookCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUncheckedCreateWithoutCreatedMembersInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdCategories?: BookCategoryUncheckedCreateNestedManyWithoutCreatorInput
    createdBooks?: BookUncheckedCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemUncheckedCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryUncheckedCreateNestedManyWithoutLastEditorInput
  }

  export type StaffCreateOrConnectWithoutCreatedMembersInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutCreatedMembersInput, StaffUncheckedCreateWithoutCreatedMembersInput>
  }

  export type StaffCreateWithoutLastEditedMembersInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    entity: EntityCreateNestedOneWithoutStaffInput
    createdMembers?: MemberCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryCreateNestedManyWithoutCreatorInput
    createdBooks?: BookCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemCreateNestedManyWithoutCollectorInput
    lastEditedBooks?: BookCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUncheckedCreateWithoutLastEditedMembersInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdMembers?: MemberUncheckedCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryUncheckedCreateNestedManyWithoutCreatorInput
    createdBooks?: BookUncheckedCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemUncheckedCreateNestedManyWithoutCollectorInput
    lastEditedBooks?: BookUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryUncheckedCreateNestedManyWithoutLastEditorInput
  }

  export type StaffCreateOrConnectWithoutLastEditedMembersInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutLastEditedMembersInput, StaffUncheckedCreateWithoutLastEditedMembersInput>
  }

  export type IssuedBookCreateWithoutMemberInput = {
    id?: string
    issueDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutIssuedBooksInput
    creator: StaffCreateNestedOneWithoutCreatedIssuedBooksInput
    items?: IssuedBookItemCreateNestedManyWithoutIssuedBookInput
  }

  export type IssuedBookUncheckedCreateWithoutMemberInput = {
    id?: string
    issueDate?: Date | string
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: IssuedBookItemUncheckedCreateNestedManyWithoutIssuedBookInput
  }

  export type IssuedBookCreateOrConnectWithoutMemberInput = {
    where: IssuedBookWhereUniqueInput
    create: XOR<IssuedBookCreateWithoutMemberInput, IssuedBookUncheckedCreateWithoutMemberInput>
  }

  export type IssuedBookCreateManyMemberInputEnvelope = {
    data: IssuedBookCreateManyMemberInput | IssuedBookCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type EntityUpsertWithoutMembersInput = {
    update: XOR<EntityUpdateWithoutMembersInput, EntityUncheckedUpdateWithoutMembersInput>
    create: XOR<EntityCreateWithoutMembersInput, EntityUncheckedCreateWithoutMembersInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutMembersInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutMembersInput, EntityUncheckedUpdateWithoutMembersInput>
  }

  export type EntityUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutEntityNestedInput
    staff?: StaffUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUncheckedUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUncheckedUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUncheckedUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutEntityNestedInput
    staff?: StaffUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type StaffUpsertWithoutCreatedMembersInput = {
    update: XOR<StaffUpdateWithoutCreatedMembersInput, StaffUncheckedUpdateWithoutCreatedMembersInput>
    create: XOR<StaffCreateWithoutCreatedMembersInput, StaffUncheckedCreateWithoutCreatedMembersInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutCreatedMembersInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutCreatedMembersInput, StaffUncheckedUpdateWithoutCreatedMembersInput>
  }

  export type StaffUpdateWithoutCreatedMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: EntityUpdateOneRequiredWithoutStaffNestedInput
    createdCategories?: BookCategoryUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateWithoutCreatedMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdCategories?: BookCategoryUncheckedUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUncheckedUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUncheckedUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUncheckedUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUncheckedUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUpsertWithoutLastEditedMembersInput = {
    update: XOR<StaffUpdateWithoutLastEditedMembersInput, StaffUncheckedUpdateWithoutLastEditedMembersInput>
    create: XOR<StaffCreateWithoutLastEditedMembersInput, StaffUncheckedCreateWithoutLastEditedMembersInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutLastEditedMembersInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutLastEditedMembersInput, StaffUncheckedUpdateWithoutLastEditedMembersInput>
  }

  export type StaffUpdateWithoutLastEditedMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: EntityUpdateOneRequiredWithoutStaffNestedInput
    createdMembers?: MemberUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUpdateManyWithoutCollectorNestedInput
    lastEditedBooks?: BookUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateWithoutLastEditedMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdMembers?: MemberUncheckedUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUncheckedUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUncheckedUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUncheckedUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUncheckedUpdateManyWithoutCollectorNestedInput
    lastEditedBooks?: BookUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUncheckedUpdateManyWithoutLastEditorNestedInput
  }

  export type IssuedBookUpsertWithWhereUniqueWithoutMemberInput = {
    where: IssuedBookWhereUniqueInput
    update: XOR<IssuedBookUpdateWithoutMemberInput, IssuedBookUncheckedUpdateWithoutMemberInput>
    create: XOR<IssuedBookCreateWithoutMemberInput, IssuedBookUncheckedCreateWithoutMemberInput>
  }

  export type IssuedBookUpdateWithWhereUniqueWithoutMemberInput = {
    where: IssuedBookWhereUniqueInput
    data: XOR<IssuedBookUpdateWithoutMemberInput, IssuedBookUncheckedUpdateWithoutMemberInput>
  }

  export type IssuedBookUpdateManyWithWhereWithoutMemberInput = {
    where: IssuedBookScalarWhereInput
    data: XOR<IssuedBookUpdateManyMutationInput, IssuedBookUncheckedUpdateManyWithoutMemberInput>
  }

  export type BookCreateWithoutCategoryInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutBooksInput
    creator: StaffCreateNestedOneWithoutCreatedBooksInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedBooksInput
    issuedBookItems?: IssuedBookItemCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCategoryInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedBookItems?: IssuedBookItemUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCategoryInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput>
  }

  export type BookCreateManyCategoryInputEnvelope = {
    data: BookCreateManyCategoryInput | BookCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EntityCreateWithoutBookCategoriesInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutEntityInput
    staff?: StaffCreateNestedManyWithoutEntityInput
    members?: MemberCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutBookCategoriesInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonUncheckedCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonUncheckedCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutEntityInput
    staff?: StaffUncheckedCreateNestedManyWithoutEntityInput
    members?: MemberUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutBookCategoriesInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutBookCategoriesInput, EntityUncheckedCreateWithoutBookCategoriesInput>
  }

  export type StaffCreateWithoutCreatedCategoriesInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    entity: EntityCreateNestedOneWithoutStaffInput
    createdMembers?: MemberCreateNestedManyWithoutCreatorInput
    createdBooks?: BookCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUncheckedCreateWithoutCreatedCategoriesInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdMembers?: MemberUncheckedCreateNestedManyWithoutCreatorInput
    createdBooks?: BookUncheckedCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemUncheckedCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryUncheckedCreateNestedManyWithoutLastEditorInput
  }

  export type StaffCreateOrConnectWithoutCreatedCategoriesInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutCreatedCategoriesInput, StaffUncheckedCreateWithoutCreatedCategoriesInput>
  }

  export type StaffCreateWithoutLastEditedCategoriesInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    entity: EntityCreateNestedOneWithoutStaffInput
    createdMembers?: MemberCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryCreateNestedManyWithoutCreatorInput
    createdBooks?: BookCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUncheckedCreateWithoutLastEditedCategoriesInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdMembers?: MemberUncheckedCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryUncheckedCreateNestedManyWithoutCreatorInput
    createdBooks?: BookUncheckedCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemUncheckedCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookUncheckedCreateNestedManyWithoutLastEditorInput
  }

  export type StaffCreateOrConnectWithoutLastEditedCategoriesInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutLastEditedCategoriesInput, StaffUncheckedCreateWithoutLastEditedCategoriesInput>
  }

  export type BookUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutCategoryInput, BookUncheckedUpdateWithoutCategoryInput>
    create: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput>
  }

  export type BookUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutCategoryInput, BookUncheckedUpdateWithoutCategoryInput>
  }

  export type BookUpdateManyWithWhereWithoutCategoryInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutCategoryInput>
  }

  export type EntityUpsertWithoutBookCategoriesInput = {
    update: XOR<EntityUpdateWithoutBookCategoriesInput, EntityUncheckedUpdateWithoutBookCategoriesInput>
    create: XOR<EntityCreateWithoutBookCategoriesInput, EntityUncheckedCreateWithoutBookCategoriesInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutBookCategoriesInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutBookCategoriesInput, EntityUncheckedUpdateWithoutBookCategoriesInput>
  }

  export type EntityUpdateWithoutBookCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutEntityNestedInput
    staff?: StaffUpdateManyWithoutEntityNestedInput
    members?: MemberUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutBookCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUncheckedUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUncheckedUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutEntityNestedInput
    staff?: StaffUncheckedUpdateManyWithoutEntityNestedInput
    members?: MemberUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type StaffUpsertWithoutCreatedCategoriesInput = {
    update: XOR<StaffUpdateWithoutCreatedCategoriesInput, StaffUncheckedUpdateWithoutCreatedCategoriesInput>
    create: XOR<StaffCreateWithoutCreatedCategoriesInput, StaffUncheckedCreateWithoutCreatedCategoriesInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutCreatedCategoriesInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutCreatedCategoriesInput, StaffUncheckedUpdateWithoutCreatedCategoriesInput>
  }

  export type StaffUpdateWithoutCreatedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: EntityUpdateOneRequiredWithoutStaffNestedInput
    createdMembers?: MemberUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateWithoutCreatedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdMembers?: MemberUncheckedUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUncheckedUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUncheckedUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUncheckedUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUncheckedUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUpsertWithoutLastEditedCategoriesInput = {
    update: XOR<StaffUpdateWithoutLastEditedCategoriesInput, StaffUncheckedUpdateWithoutLastEditedCategoriesInput>
    create: XOR<StaffCreateWithoutLastEditedCategoriesInput, StaffUncheckedCreateWithoutLastEditedCategoriesInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutLastEditedCategoriesInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutLastEditedCategoriesInput, StaffUncheckedUpdateWithoutLastEditedCategoriesInput>
  }

  export type StaffUpdateWithoutLastEditedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: EntityUpdateOneRequiredWithoutStaffNestedInput
    createdMembers?: MemberUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateWithoutLastEditedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdMembers?: MemberUncheckedUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUncheckedUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUncheckedUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUncheckedUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUncheckedUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUncheckedUpdateManyWithoutLastEditorNestedInput
  }

  export type BookCategoryCreateWithoutBooksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutBookCategoriesInput
    creator: StaffCreateNestedOneWithoutCreatedCategoriesInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedCategoriesInput
  }

  export type BookCategoryUncheckedCreateWithoutBooksInput = {
    id?: string
    name: string
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCategoryCreateOrConnectWithoutBooksInput = {
    where: BookCategoryWhereUniqueInput
    create: XOR<BookCategoryCreateWithoutBooksInput, BookCategoryUncheckedCreateWithoutBooksInput>
  }

  export type EntityCreateWithoutBooksInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookCategories?: BookCategoryCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookCreateNestedManyWithoutEntityInput
    staff?: StaffCreateNestedManyWithoutEntityInput
    members?: MemberCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutBooksInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookCategories?: BookCategoryUncheckedCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonUncheckedCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonUncheckedCreateNestedOneWithoutEntityInput
    issuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutEntityInput
    staff?: StaffUncheckedCreateNestedManyWithoutEntityInput
    members?: MemberUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutBooksInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutBooksInput, EntityUncheckedCreateWithoutBooksInput>
  }

  export type StaffCreateWithoutCreatedBooksInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    entity: EntityCreateNestedOneWithoutStaffInput
    createdMembers?: MemberCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUncheckedCreateWithoutCreatedBooksInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdMembers?: MemberUncheckedCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryUncheckedCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemUncheckedCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryUncheckedCreateNestedManyWithoutLastEditorInput
  }

  export type StaffCreateOrConnectWithoutCreatedBooksInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutCreatedBooksInput, StaffUncheckedCreateWithoutCreatedBooksInput>
  }

  export type StaffCreateWithoutLastEditedBooksInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    entity: EntityCreateNestedOneWithoutStaffInput
    createdMembers?: MemberCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryCreateNestedManyWithoutCreatorInput
    createdBooks?: BookCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUncheckedCreateWithoutLastEditedBooksInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdMembers?: MemberUncheckedCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryUncheckedCreateNestedManyWithoutCreatorInput
    createdBooks?: BookUncheckedCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemUncheckedCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryUncheckedCreateNestedManyWithoutLastEditorInput
  }

  export type StaffCreateOrConnectWithoutLastEditedBooksInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutLastEditedBooksInput, StaffUncheckedCreateWithoutLastEditedBooksInput>
  }

  export type IssuedBookItemCreateWithoutBookInput = {
    id?: string
    collected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    issuedBook: IssuedBookCreateNestedOneWithoutItemsInput
    collector?: StaffCreateNestedOneWithoutCollectedItemsInput
  }

  export type IssuedBookItemUncheckedCreateWithoutBookInput = {
    id?: string
    issuedBookId: string
    collected?: boolean
    collectedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookItemCreateOrConnectWithoutBookInput = {
    where: IssuedBookItemWhereUniqueInput
    create: XOR<IssuedBookItemCreateWithoutBookInput, IssuedBookItemUncheckedCreateWithoutBookInput>
  }

  export type IssuedBookItemCreateManyBookInputEnvelope = {
    data: IssuedBookItemCreateManyBookInput | IssuedBookItemCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookCategoryUpsertWithoutBooksInput = {
    update: XOR<BookCategoryUpdateWithoutBooksInput, BookCategoryUncheckedUpdateWithoutBooksInput>
    create: XOR<BookCategoryCreateWithoutBooksInput, BookCategoryUncheckedCreateWithoutBooksInput>
    where?: BookCategoryWhereInput
  }

  export type BookCategoryUpdateToOneWithWhereWithoutBooksInput = {
    where?: BookCategoryWhereInput
    data: XOR<BookCategoryUpdateWithoutBooksInput, BookCategoryUncheckedUpdateWithoutBooksInput>
  }

  export type BookCategoryUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutBookCategoriesNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedCategoriesNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedCategoriesNestedInput
  }

  export type BookCategoryUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUpsertWithoutBooksInput = {
    update: XOR<EntityUpdateWithoutBooksInput, EntityUncheckedUpdateWithoutBooksInput>
    create: XOR<EntityCreateWithoutBooksInput, EntityUncheckedCreateWithoutBooksInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutBooksInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutBooksInput, EntityUncheckedUpdateWithoutBooksInput>
  }

  export type EntityUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookCategories?: BookCategoryUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutEntityNestedInput
    staff?: StaffUpdateManyWithoutEntityNestedInput
    members?: MemberUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookCategories?: BookCategoryUncheckedUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUncheckedUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUncheckedUpdateOneWithoutEntityNestedInput
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutEntityNestedInput
    staff?: StaffUncheckedUpdateManyWithoutEntityNestedInput
    members?: MemberUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type StaffUpsertWithoutCreatedBooksInput = {
    update: XOR<StaffUpdateWithoutCreatedBooksInput, StaffUncheckedUpdateWithoutCreatedBooksInput>
    create: XOR<StaffCreateWithoutCreatedBooksInput, StaffUncheckedCreateWithoutCreatedBooksInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutCreatedBooksInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutCreatedBooksInput, StaffUncheckedUpdateWithoutCreatedBooksInput>
  }

  export type StaffUpdateWithoutCreatedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: EntityUpdateOneRequiredWithoutStaffNestedInput
    createdMembers?: MemberUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateWithoutCreatedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdMembers?: MemberUncheckedUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUncheckedUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUncheckedUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUncheckedUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUncheckedUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUpsertWithoutLastEditedBooksInput = {
    update: XOR<StaffUpdateWithoutLastEditedBooksInput, StaffUncheckedUpdateWithoutLastEditedBooksInput>
    create: XOR<StaffCreateWithoutLastEditedBooksInput, StaffUncheckedCreateWithoutLastEditedBooksInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutLastEditedBooksInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutLastEditedBooksInput, StaffUncheckedUpdateWithoutLastEditedBooksInput>
  }

  export type StaffUpdateWithoutLastEditedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: EntityUpdateOneRequiredWithoutStaffNestedInput
    createdMembers?: MemberUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateWithoutLastEditedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdMembers?: MemberUncheckedUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUncheckedUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUncheckedUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUncheckedUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUncheckedUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUncheckedUpdateManyWithoutLastEditorNestedInput
  }

  export type IssuedBookItemUpsertWithWhereUniqueWithoutBookInput = {
    where: IssuedBookItemWhereUniqueInput
    update: XOR<IssuedBookItemUpdateWithoutBookInput, IssuedBookItemUncheckedUpdateWithoutBookInput>
    create: XOR<IssuedBookItemCreateWithoutBookInput, IssuedBookItemUncheckedCreateWithoutBookInput>
  }

  export type IssuedBookItemUpdateWithWhereUniqueWithoutBookInput = {
    where: IssuedBookItemWhereUniqueInput
    data: XOR<IssuedBookItemUpdateWithoutBookInput, IssuedBookItemUncheckedUpdateWithoutBookInput>
  }

  export type IssuedBookItemUpdateManyWithWhereWithoutBookInput = {
    where: IssuedBookItemScalarWhereInput
    data: XOR<IssuedBookItemUpdateManyMutationInput, IssuedBookItemUncheckedUpdateManyWithoutBookInput>
  }

  export type EntityCreateWithoutIssuedBooksInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonCreateNestedOneWithoutEntityInput
    staff?: StaffCreateNestedManyWithoutEntityInput
    members?: MemberCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutIssuedBooksInput = {
    id?: string
    name: string
    address: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutEntityInput
    bookCategories?: BookCategoryUncheckedCreateNestedManyWithoutEntityInput
    contactPerson?: ContactPersonUncheckedCreateNestedOneWithoutEntityInput
    headPerson?: HeadPersonUncheckedCreateNestedOneWithoutEntityInput
    staff?: StaffUncheckedCreateNestedManyWithoutEntityInput
    members?: MemberUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutIssuedBooksInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutIssuedBooksInput, EntityUncheckedCreateWithoutIssuedBooksInput>
  }

  export type MemberCreateWithoutIssuedBooksInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutMembersInput
    creator: StaffCreateNestedOneWithoutCreatedMembersInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedMembersInput
  }

  export type MemberUncheckedCreateWithoutIssuedBooksInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberCreateOrConnectWithoutIssuedBooksInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutIssuedBooksInput, MemberUncheckedCreateWithoutIssuedBooksInput>
  }

  export type StaffCreateWithoutCreatedIssuedBooksInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    entity: EntityCreateNestedOneWithoutStaffInput
    createdMembers?: MemberCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryCreateNestedManyWithoutCreatorInput
    createdBooks?: BookCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUncheckedCreateWithoutCreatedIssuedBooksInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdMembers?: MemberUncheckedCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryUncheckedCreateNestedManyWithoutCreatorInput
    createdBooks?: BookUncheckedCreateNestedManyWithoutCreatorInput
    collectedItems?: IssuedBookItemUncheckedCreateNestedManyWithoutCollectorInput
    lastEditedMembers?: MemberUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryUncheckedCreateNestedManyWithoutLastEditorInput
  }

  export type StaffCreateOrConnectWithoutCreatedIssuedBooksInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutCreatedIssuedBooksInput, StaffUncheckedCreateWithoutCreatedIssuedBooksInput>
  }

  export type IssuedBookItemCreateWithoutIssuedBookInput = {
    id?: string
    collected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutIssuedBookItemsInput
    collector?: StaffCreateNestedOneWithoutCollectedItemsInput
  }

  export type IssuedBookItemUncheckedCreateWithoutIssuedBookInput = {
    id?: string
    bookId: string
    collected?: boolean
    collectedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookItemCreateOrConnectWithoutIssuedBookInput = {
    where: IssuedBookItemWhereUniqueInput
    create: XOR<IssuedBookItemCreateWithoutIssuedBookInput, IssuedBookItemUncheckedCreateWithoutIssuedBookInput>
  }

  export type IssuedBookItemCreateManyIssuedBookInputEnvelope = {
    data: IssuedBookItemCreateManyIssuedBookInput | IssuedBookItemCreateManyIssuedBookInput[]
    skipDuplicates?: boolean
  }

  export type EntityUpsertWithoutIssuedBooksInput = {
    update: XOR<EntityUpdateWithoutIssuedBooksInput, EntityUncheckedUpdateWithoutIssuedBooksInput>
    create: XOR<EntityCreateWithoutIssuedBooksInput, EntityUncheckedCreateWithoutIssuedBooksInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutIssuedBooksInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutIssuedBooksInput, EntityUncheckedUpdateWithoutIssuedBooksInput>
  }

  export type EntityUpdateWithoutIssuedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUpdateOneWithoutEntityNestedInput
    staff?: StaffUpdateManyWithoutEntityNestedInput
    members?: MemberUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutIssuedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutEntityNestedInput
    bookCategories?: BookCategoryUncheckedUpdateManyWithoutEntityNestedInput
    contactPerson?: ContactPersonUncheckedUpdateOneWithoutEntityNestedInput
    headPerson?: HeadPersonUncheckedUpdateOneWithoutEntityNestedInput
    staff?: StaffUncheckedUpdateManyWithoutEntityNestedInput
    members?: MemberUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type MemberUpsertWithoutIssuedBooksInput = {
    update: XOR<MemberUpdateWithoutIssuedBooksInput, MemberUncheckedUpdateWithoutIssuedBooksInput>
    create: XOR<MemberCreateWithoutIssuedBooksInput, MemberUncheckedCreateWithoutIssuedBooksInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutIssuedBooksInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutIssuedBooksInput, MemberUncheckedUpdateWithoutIssuedBooksInput>
  }

  export type MemberUpdateWithoutIssuedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutMembersNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedMembersNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedMembersNestedInput
  }

  export type MemberUncheckedUpdateWithoutIssuedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpsertWithoutCreatedIssuedBooksInput = {
    update: XOR<StaffUpdateWithoutCreatedIssuedBooksInput, StaffUncheckedUpdateWithoutCreatedIssuedBooksInput>
    create: XOR<StaffCreateWithoutCreatedIssuedBooksInput, StaffUncheckedCreateWithoutCreatedIssuedBooksInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutCreatedIssuedBooksInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutCreatedIssuedBooksInput, StaffUncheckedUpdateWithoutCreatedIssuedBooksInput>
  }

  export type StaffUpdateWithoutCreatedIssuedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: EntityUpdateOneRequiredWithoutStaffNestedInput
    createdMembers?: MemberUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateWithoutCreatedIssuedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdMembers?: MemberUncheckedUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUncheckedUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUncheckedUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUncheckedUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUncheckedUpdateManyWithoutLastEditorNestedInput
  }

  export type IssuedBookItemUpsertWithWhereUniqueWithoutIssuedBookInput = {
    where: IssuedBookItemWhereUniqueInput
    update: XOR<IssuedBookItemUpdateWithoutIssuedBookInput, IssuedBookItemUncheckedUpdateWithoutIssuedBookInput>
    create: XOR<IssuedBookItemCreateWithoutIssuedBookInput, IssuedBookItemUncheckedCreateWithoutIssuedBookInput>
  }

  export type IssuedBookItemUpdateWithWhereUniqueWithoutIssuedBookInput = {
    where: IssuedBookItemWhereUniqueInput
    data: XOR<IssuedBookItemUpdateWithoutIssuedBookInput, IssuedBookItemUncheckedUpdateWithoutIssuedBookInput>
  }

  export type IssuedBookItemUpdateManyWithWhereWithoutIssuedBookInput = {
    where: IssuedBookItemScalarWhereInput
    data: XOR<IssuedBookItemUpdateManyMutationInput, IssuedBookItemUncheckedUpdateManyWithoutIssuedBookInput>
  }

  export type BookCreateWithoutIssuedBookItemsInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BookCategoryCreateNestedOneWithoutBooksInput
    entity: EntityCreateNestedOneWithoutBooksInput
    creator: StaffCreateNestedOneWithoutCreatedBooksInput
    lastEditor?: StaffCreateNestedOneWithoutLastEditedBooksInput
  }

  export type BookUncheckedCreateWithoutIssuedBookItemsInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    categoryId: string
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCreateOrConnectWithoutIssuedBookItemsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutIssuedBookItemsInput, BookUncheckedCreateWithoutIssuedBookItemsInput>
  }

  export type IssuedBookCreateWithoutItemsInput = {
    id?: string
    issueDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    entity: EntityCreateNestedOneWithoutIssuedBooksInput
    member: MemberCreateNestedOneWithoutIssuedBooksInput
    creator: StaffCreateNestedOneWithoutCreatedIssuedBooksInput
  }

  export type IssuedBookUncheckedCreateWithoutItemsInput = {
    id?: string
    issueDate?: Date | string
    memberId: string
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookCreateOrConnectWithoutItemsInput = {
    where: IssuedBookWhereUniqueInput
    create: XOR<IssuedBookCreateWithoutItemsInput, IssuedBookUncheckedCreateWithoutItemsInput>
  }

  export type StaffCreateWithoutCollectedItemsInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    entity: EntityCreateNestedOneWithoutStaffInput
    createdMembers?: MemberCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryCreateNestedManyWithoutCreatorInput
    createdBooks?: BookCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookCreateNestedManyWithoutCreatorInput
    lastEditedMembers?: MemberCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryCreateNestedManyWithoutLastEditorInput
  }

  export type StaffUncheckedCreateWithoutCollectedItemsInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
    createdMembers?: MemberUncheckedCreateNestedManyWithoutCreatorInput
    createdCategories?: BookCategoryUncheckedCreateNestedManyWithoutCreatorInput
    createdBooks?: BookUncheckedCreateNestedManyWithoutCreatorInput
    createdIssuedBooks?: IssuedBookUncheckedCreateNestedManyWithoutCreatorInput
    lastEditedMembers?: MemberUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedBooks?: BookUncheckedCreateNestedManyWithoutLastEditorInput
    lastEditedCategories?: BookCategoryUncheckedCreateNestedManyWithoutLastEditorInput
  }

  export type StaffCreateOrConnectWithoutCollectedItemsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutCollectedItemsInput, StaffUncheckedCreateWithoutCollectedItemsInput>
  }

  export type BookUpsertWithoutIssuedBookItemsInput = {
    update: XOR<BookUpdateWithoutIssuedBookItemsInput, BookUncheckedUpdateWithoutIssuedBookItemsInput>
    create: XOR<BookCreateWithoutIssuedBookItemsInput, BookUncheckedCreateWithoutIssuedBookItemsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutIssuedBookItemsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutIssuedBookItemsInput, BookUncheckedUpdateWithoutIssuedBookItemsInput>
  }

  export type BookUpdateWithoutIssuedBookItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BookCategoryUpdateOneRequiredWithoutBooksNestedInput
    entity?: EntityUpdateOneRequiredWithoutBooksNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedBooksNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedBooksNestedInput
  }

  export type BookUncheckedUpdateWithoutIssuedBookItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookUpsertWithoutItemsInput = {
    update: XOR<IssuedBookUpdateWithoutItemsInput, IssuedBookUncheckedUpdateWithoutItemsInput>
    create: XOR<IssuedBookCreateWithoutItemsInput, IssuedBookUncheckedCreateWithoutItemsInput>
    where?: IssuedBookWhereInput
  }

  export type IssuedBookUpdateToOneWithWhereWithoutItemsInput = {
    where?: IssuedBookWhereInput
    data: XOR<IssuedBookUpdateWithoutItemsInput, IssuedBookUncheckedUpdateWithoutItemsInput>
  }

  export type IssuedBookUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutIssuedBooksNestedInput
    member?: MemberUpdateOneRequiredWithoutIssuedBooksNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedIssuedBooksNestedInput
  }

  export type IssuedBookUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpsertWithoutCollectedItemsInput = {
    update: XOR<StaffUpdateWithoutCollectedItemsInput, StaffUncheckedUpdateWithoutCollectedItemsInput>
    create: XOR<StaffCreateWithoutCollectedItemsInput, StaffUncheckedCreateWithoutCollectedItemsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutCollectedItemsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutCollectedItemsInput, StaffUncheckedUpdateWithoutCollectedItemsInput>
  }

  export type StaffUpdateWithoutCollectedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    entity?: EntityUpdateOneRequiredWithoutStaffNestedInput
    createdMembers?: MemberUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUpdateManyWithoutCreatorNestedInput
    lastEditedMembers?: MemberUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateWithoutCollectedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdMembers?: MemberUncheckedUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUncheckedUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUncheckedUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUncheckedUpdateManyWithoutCreatorNestedInput
    lastEditedMembers?: MemberUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUncheckedUpdateManyWithoutLastEditorNestedInput
  }

  export type BookCreateManyEntityInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    categoryId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCategoryCreateManyEntityInput = {
    id?: string
    name: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookCreateManyEntityInput = {
    id?: string
    issueDate?: Date | string
    memberId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateManyEntityInput = {
    id?: string
    name: string
    gender: string
    phone: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pasword?: string | null
  }

  export type MemberCreateManyEntityInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BookCategoryUpdateOneRequiredWithoutBooksNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedBooksNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedBooksNestedInput
    issuedBookItems?: IssuedBookItemUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBookItems?: IssuedBookItemUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCategoryUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutCategoryNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedCategoriesNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedCategoriesNestedInput
  }

  export type BookCategoryUncheckedUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BookCategoryUncheckedUpdateManyWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutIssuedBooksNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedIssuedBooksNestedInput
    items?: IssuedBookItemUpdateManyWithoutIssuedBookNestedInput
  }

  export type IssuedBookUncheckedUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: IssuedBookItemUncheckedUpdateManyWithoutIssuedBookNestedInput
  }

  export type IssuedBookUncheckedUpdateManyWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdMembers?: MemberUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
    createdMembers?: MemberUncheckedUpdateManyWithoutCreatorNestedInput
    createdCategories?: BookCategoryUncheckedUpdateManyWithoutCreatorNestedInput
    createdBooks?: BookUncheckedUpdateManyWithoutCreatorNestedInput
    createdIssuedBooks?: IssuedBookUncheckedUpdateManyWithoutCreatorNestedInput
    collectedItems?: IssuedBookItemUncheckedUpdateManyWithoutCollectorNestedInput
    lastEditedMembers?: MemberUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedBooks?: BookUncheckedUpdateManyWithoutLastEditorNestedInput
    lastEditedCategories?: BookCategoryUncheckedUpdateManyWithoutLastEditorNestedInput
  }

  export type StaffUncheckedUpdateManyWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pasword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: StaffUpdateOneRequiredWithoutCreatedMembersNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedMembersNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyCreatorInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    entityId: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCategoryCreateManyCreatorInput = {
    id?: string
    name: string
    entityId: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCreateManyCreatorInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    categoryId: string
    entityId: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookCreateManyCreatorInput = {
    id?: string
    issueDate?: Date | string
    memberId: string
    entityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookItemCreateManyCollectorInput = {
    id?: string
    bookId: string
    issuedBookId: string
    collected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberCreateManyLastEditorInput = {
    id: string
    name: string
    profileImage?: string | null
    memberType: $Enums.MemberType
    gender: $Enums.Gender
    phoneNumber: string
    address: string
    class?: string | null
    division?: string | null
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCreateManyLastEditorInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    categoryId: string
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCategoryCreateManyLastEditorInput = {
    id?: string
    name: string
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutMembersNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedMembersNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCategoryUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutCategoryNestedInput
    entity?: EntityUpdateOneRequiredWithoutBookCategoriesNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedCategoriesNestedInput
  }

  export type BookCategoryUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BookCategoryUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BookCategoryUpdateOneRequiredWithoutBooksNestedInput
    entity?: EntityUpdateOneRequiredWithoutBooksNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedBooksNestedInput
    issuedBookItems?: IssuedBookItemUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBookItems?: IssuedBookItemUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutIssuedBooksNestedInput
    member?: MemberUpdateOneRequiredWithoutIssuedBooksNestedInput
    items?: IssuedBookItemUpdateManyWithoutIssuedBookNestedInput
  }

  export type IssuedBookUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: IssuedBookItemUncheckedUpdateManyWithoutIssuedBookNestedInput
  }

  export type IssuedBookUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookItemUpdateWithoutCollectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutIssuedBookItemsNestedInput
    issuedBook?: IssuedBookUpdateOneRequiredWithoutItemsNestedInput
  }

  export type IssuedBookItemUncheckedUpdateWithoutCollectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    issuedBookId?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookItemUncheckedUpdateManyWithoutCollectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    issuedBookId?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUpdateWithoutLastEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutMembersNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedMembersNestedInput
    issuedBooks?: IssuedBookUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutLastEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBooks?: IssuedBookUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutLastEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    memberType?: EnumMemberTypeFieldUpdateOperationsInput | $Enums.MemberType
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpdateWithoutLastEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BookCategoryUpdateOneRequiredWithoutBooksNestedInput
    entity?: EntityUpdateOneRequiredWithoutBooksNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedBooksNestedInput
    issuedBookItems?: IssuedBookItemUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutLastEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBookItems?: IssuedBookItemUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutLastEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCategoryUpdateWithoutLastEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutCategoryNestedInput
    entity?: EntityUpdateOneRequiredWithoutBookCategoriesNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedCategoriesNestedInput
  }

  export type BookCategoryUncheckedUpdateWithoutLastEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BookCategoryUncheckedUpdateManyWithoutLastEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookCreateManyMemberInput = {
    id?: string
    issueDate?: Date | string
    entityId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutIssuedBooksNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedIssuedBooksNestedInput
    items?: IssuedBookItemUpdateManyWithoutIssuedBookNestedInput
  }

  export type IssuedBookUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: IssuedBookItemUncheckedUpdateManyWithoutIssuedBookNestedInput
  }

  export type IssuedBookUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateManyCategoryInput = {
    id: string
    title: string
    author: string
    copies: number
    availableCopies: number
    entityId: string
    createdBy: string
    lastEditedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneRequiredWithoutBooksNestedInput
    creator?: StaffUpdateOneRequiredWithoutCreatedBooksNestedInput
    lastEditor?: StaffUpdateOneWithoutLastEditedBooksNestedInput
    issuedBookItems?: IssuedBookItemUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBookItems?: IssuedBookItemUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    entityId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookItemCreateManyBookInput = {
    id?: string
    issuedBookId: string
    collected?: boolean
    collectedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookItemUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedBook?: IssuedBookUpdateOneRequiredWithoutItemsNestedInput
    collector?: StaffUpdateOneWithoutCollectedItemsNestedInput
  }

  export type IssuedBookItemUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    issuedBookId?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookItemUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    issuedBookId?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookItemCreateManyIssuedBookInput = {
    id?: string
    bookId: string
    collected?: boolean
    collectedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuedBookItemUpdateWithoutIssuedBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutIssuedBookItemsNestedInput
    collector?: StaffUpdateOneWithoutCollectedItemsNestedInput
  }

  export type IssuedBookItemUncheckedUpdateWithoutIssuedBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuedBookItemUncheckedUpdateManyWithoutIssuedBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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