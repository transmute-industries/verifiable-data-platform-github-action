/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Organization activities
 * Recent activities in an organization
 * @example {"vbc":{"name":"steel-inc","website":"https://brand.example","country":"US","number":"xx-xxxxxxx","date":"2022-04-07T16:47:40.602Z","logo":"https://brand.example/image.png"},"member":{"count":1,"limit":1,"accountAdmin":"John Smith"},"credential":{"count":2,"limit":2},"did":{"count":2,"limit":2,"mostUsed":{"method":"key"}},"template":{"count":1,"limit":1,"mostUsed":"Verifiable Business Card"},"recentActivity":[{"createdAt":"2022-04-12T15:49:56.184Z","id":"4354b988-b3b3-4c1f-aa2e-1291824f70f5","type":"presentation"},{"createdAt":"2022-04-12T15:37:34.576Z","id":"58c2473c-ddb3-4f96-bf4d-69ceba61e97e","type":"presentation"},{"createdAt":"2022-04-11T21:58:45.275Z","id":"506b939d-10f5-4935-ad55-5afc59211abb","type":"presentation"},{"method":"key","createdAt":"2022-04-11T19:46:34.992Z","id":"87951ac6-dff2-4591-864a-7f716d50ad80","type":"did"}],"sentPresentationHistory":[{"name":"30","timestamp":1649446753155,"count":3}],"receivedPresentationHistory":[{"name":"30","timestamp":1649446753155,"count":3}]}
 */
export interface Activities {
  augmentedVerifiableBusinessCard?: AugmentedVerifiableCredentialWrapper | boolean;
  member?: {
    count?: number;
    limit?: number;
    accountAdmin?: string;
  };
  credential?: {
    count?: number;
    limit?: number;
  };
  did?: {
    count?: number;
    limit?: number;
    mostUsed?: {
      method?: string;
      network?: string;
    };
  };
  template?: {
    count?: number;
    limit?: number;
    mostUsed?: null | string;
  };
  recentActivity?: {
    /** Universally Unique IDentifier according to http://tools.ietf.org/html/rfc4122 */
    id?: UUID;
    createdAt?: object | Date | (object & Date);
    type?: string;
    method?: string;
    network?: string;
    name?: string;
  }[];
  sentPresentationHistory?: {
    name?: string;
    timestamp?: number;
    count?: number;
  }[];
  receivedPresentationHistory?: {
    name?: string;
    timestamp?: number;
    count?: number;
  }[];
}

export interface FindInvitation {
  /**
   * Invitation identifier
   * @example "uinv_3BK2YbKEApyQLsB8"
   */
  id?: string;
  /**
   * Organization identifier
   * @example "org_J7wE2D6fnj52yG0C"
   */
  organizationId?: string;
  /** Inviter */
  inviter?: {
    /**
     * Inviter Name
     * @example "Alice Smith"
     */
    name?: string;
  };
  /** Invitee */
  invitee?: {
    /**
     * Invitee Email
     * @example "bob@example.com"
     */
    email?: string;
  };
  /**
   * Invitation URL
   * The invitation url to be send to the invitee.
   * @example "https://staging.transmute.industries/login?invitation=ftS0284gczLI1CqTurD9nhIAb6m49bQn&organization=org_J7wE2D6fnj52yG0C&organization_name=ben-local-desktop"
   */
  invitationUrl?: string;
  /**
   * Created timestamp
   * @example "2021-09-22T15:50:14.706Z"
   */
  createdAt?: string;
  /**
   * Expiration timestamp
   * @example "2021-09-29T15:50:14.706Z"
   */
  expiresAt?: string;
  /**
   * Auth0 client ID. Used to resolve the application's login initiation endpoint.
   * @example "Eqx2OEkVD99jM1uWjvBfWlE83fkYS8sT"
   */
  clientId?: string;
  /**
   * Roles
   * List of roles IDs to associated with the user.
   */
  roles?: string[];
  /**
   * Ticket id
   * The id of the invitation ticket.
   * @example "ftS0284gczLI1CqTurD9nhIAb6m49bQn"
   */
  ticketId?: string;
}

/** Accept member invitation */
export interface AcceptMemberInvitation {
  /**
   * Organization Id
   * Id of the Oganization invitation being accepted
   * @example "org_EEEEEEEEEtYQAFH7E"
   */
  organizationId: string;
  /**
   * Ticket Id
   * Id of the Ticket being accepted
   * @example "avaCEskrgUkFyd6U6PAjS9n2CM18tOWI"
   */
  ticketId: string;
}

/**
 * Billing Address
 * Organization Billing Address
 */
export interface BillingAddress {
  city?: string;
  country?: string;
  addressLine1?: string;
  addressLine2?: string;
  postalCode?: string;
  state?: string;
}

/** Response to Accept member invitation */
export interface MemberInvitationResponse {
  /**
   * Response Status
   * A status code included in JSON body response
   * @example 200
   */
  status?: number;
  /**
   * Message
   * A text message included in JSON body for debug purposes
   * @example "success"
   */
  message?: string;
}

/** Member invitation response object */
export type MemberInvitation = CreateMemberInvitation & {
  /**
   * Invitation status
   * The status of the invitation.
   * @example "pending"
   */
  status?: "pending" | "accepted" | "rejected";
};

/** Member invitation */
export interface CreateMemberInvitation {
  /**
   * Inviter name
   * Name of the user making the invitation.
   * @example "Alice Smith"
   */
  inviterName: string;
  /**
   * Invitee email
   * Email of the user to be invited.
   * @example "bob@example.com"
   */
  inviteeEmail: string;
}

/**
 * Organization Members List
 * A list of organization members
 */
export interface OrganizationMembersList {
  /** A member of an organization */
  items: OrganizationMember;
  /** @example 1 */
  count?: number;
}

/**
 * Organization Member
 * A member of an organization
 * @example {"id":"61e99ffd364b1d006aff27b3","email":"alice@example.com","roles":[{"id":"rol_mZfNHlIqKiq1nrew","name":"Organization Admin","description":"Administrator of an organization"}]}
 */
export interface OrganizationMember {
  id: string;
  email: string;
  image?: string;
  roles: {
    name?: string;
    description?: string;
  }[];
}

/**
 * Organization
 * An Organization.
 */
export interface Organization {
  /** @example "org_EEEEEEEEEtYQAFH7E" */
  id: string;
  /** @example "steel-inc" */
  name: string;
  /** @example "Steel Inc" */
  displayName?: string;
  /** @example {"logoUrl":"https://brand.example/image.png"} */
  branding?: {
    logoUrl?: string;
    colors?: object;
  };
  /** @example "https://brand.example" */
  website?: string;
  /** @example "John Smith" */
  accountAdministrator?: string;
  /** @example "Steel Inc." */
  legalName?: string;
  /** @example "Steel Inc." */
  operatingName?: string;
  /** @example "xx-xxxxxxx" */
  nationalCompanyRegistrationNumber?: string;
  /** @example "US" */
  country?: string;
  /** @example false */
  isPublic?: boolean;
  /** @example ["steel"] */
  industries?: string[];
  /** @example ["seller"] */
  industryRoles?: string[];
  /** Organization Billing Address */
  address?: BillingAddress;
  assertionMethod?: {
    /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
    id?: DID;
  };
  authentication?: {
    /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
    id?: DID;
  };
  verifiableBusinessCardId?: string | boolean;
  roles?: {
    id?: string;
    name?: string;
    description?: string;
  }[];
  /** A user or application */
  createdBy?: EventActor;
  /** A user or application */
  updatedBy?: EventActor;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Organizations
 * A list of organizations
 */
export interface Organizations {
  items: Organization[];
  /**
   * The total number of items
   * @example 1
   */
  count: number;
}

/** Create Organization */
export interface CreateOrganization {
  /** @example "steel-inc" */
  name: string;
  /** @example "Steel Inc" */
  displayName?: string;
  /** @example {"logoUrl":"https://brand.example/image.png"} */
  branding?: {
    logoUrl?: string;
    colors?: object;
  };
  /** @example "https://brand.example" */
  website?: string;
  accountAdministrator?: string;
  legalName: string;
  operatingName: string;
  nationalCompanyRegistrationNumber: string;
  country: string;
  isPublic?: boolean;
  industries?: string[];
  industryRoles?: string[];
  /** Organization Billing Address */
  address?: BillingAddress;
}

/** Update Organization */
export interface UpdateOrganization {
  /** @example "steel-inc" */
  name?: string;
  /** @example "Steel Inc" */
  displayName?: string;
  /** @example {"logoUrl":"https://brand.example/image.png"} */
  branding?: {
    logoUrl?: string;
    colors?: object;
  };
  /** @example "https://brand.example" */
  website?: string;
  /** @example "John Smith" */
  accountAdministrator?: string;
  /** @example "Steel Inc." */
  legalName?: string;
  /** @example "Steel Inc." */
  operatingName?: string;
  /** @example "xx-xxxxxxx" */
  nationalCompanyRegistrationNumber?: string;
  /** @example "US" */
  country?: string;
  /** @example false */
  isPublic?: boolean;
  /** @example ["steel"] */
  industries?: string[];
  /** @example ["seller"] */
  industryRoles?: string[];
  /** Organization Billing Address */
  address?: BillingAddress;
}

/** Create Application */
export interface CreateApplication {
  /** @example "Steel Inc Integration" */
  name: string;
  /** @example "The client entity for the steel application for the steel org as admin" */
  description?: string;
  /** All the current scopes */
  scopes: Scopes;
}

/**
 * Application
 * An application
 */
export interface Application {
  /** @example "EEEEEE3EQD6nK9USP3zYoZSAOsKl3@clients" */
  id: string;
  /** @example "Steel Inc Integration" */
  name: string;
  /** @example "The client entity for the steel application for the steel org as admin" */
  description?: string;
  /** @example "bpnGUDlfInUvnuN651h12xsbaCM2R9g4" */
  clientId: string;
  /** @example "AoLPDYXD8F0VaR62FU9CGqgRi189S1iXDdhFLcj8axAERp5koh8O3bb4B4ZoeEe1" */
  clientSecret: string;
  /** @example "org_AYE06RPg2qGSW6Di" */
  organizationId?: string;
  /** @example "did:web:example.com:organizations:org_AYE06RPg2qGSW6Di" */
  did?: string;
  /** @example "https://example.com" */
  apiRoot?: string;
  /** @example "https://example.com" */
  audience?: string;
  /** @example "https://example.com/oauth/token" */
  tokenEndpoint?: string;
  /** All the current scopes */
  scopes?: Scopes;
}

/**
 * Applications
 * A list of applications
 */
export type Applications = ListResponse & {
  items: Application[];
};

/** Update Application */
export interface UpdateApplication {
  /** @example "Steel Inc Integration" */
  name?: string;
  /** @example "The client entity for the steel application for the steel org as admin" */
  description?: string;
}

/**
 * User
 * A user
 */
export interface User {
  /** @example "auth0|602ae9e944e02f006964d9ea" */
  id: string;
  /** @example "test@example.com" */
  email?: string;
  /** @example "Stacy" */
  name: string;
  /** @format date-time */
  updatedAt?: string;
  updatedBy?: {
    /** @example "auth0|602ae9e944e02f006964d9ea" */
    id?: string;
  };
  /** @format date-time */
  createdAt?: string;
  createdBy?: {
    /** @example "auth0|602ae9e944e02f006964d9ea" */
    id?: string;
  };
}

/**
 * EventActor
 * A user or application
 */
export interface EventActor {
  /** @example "auth0|61e99ffd364b1d006aff27b3" */
  id: string;
  /** @example "authenticated_user" */
  type: string;
  /** @example "organization_admin" */
  role?: string;
  /** @example "org_EEEEEEEEEtYQAFH7E" */
  organizationId?: string;
  /** @example [{"id":"did:key:z6...G6#z6...Tb"}] */
  assertionMethod?: {
    id?: string;
  }[];
  /** @example [{"id":"did:key:z6...G6#z6...Tb"}] */
  authentication?: {
    id?: string;
  }[];
}

/**
 * ModelView
 * Common properties of platform resources
 */
export interface ModelView {
  /** @example "123" */
  id?: string;
  /** A user or application */
  createdBy?: EventActor;
  /** A user or application */
  updatedBy?: EventActor;
  createdAt?: object | Date | (object & Date);
  updatedAt?: object | Date | (object & Date);
}

/**
 * OrganizationControlledResource
 * A resource controlled by an organization
 */
export type OrganizationControlledResource = ModelView & {
  /** @example "123" */
  organizationId?: string;
};

/**
 * CredentialsContext
 * The context for a credential
 * @example ["https://www.w3.org/2018/credentials/v1","https://w3id.org/security/suites/jws-2020/v1"]
 */
export type CredentialsContext = string | (string | object)[] | object;

/**
 * CredentialIssuer
 * The issuer of a credential
 * @example "did:example:123"
 */
export type CredentialIssuer = DID | object;

/**
 * CreateVerifiableCredential
 * Argument for the create verifiable credential command.
 */
export interface CreateVerifiableCredential {
  /** A Verifiable Credential without proof */
  credential: Credential;
  options: object;
  [key: string]: any;
}

/**
 * Credential
 * A Verifiable Credential without proof
 * @example {"@context":["https://www.w3.org/2018/credentials/v1","https://www.w3.org/2018/credentials/examples/v1"],"type":["VerifiableCredential","UniversityDegreeCredential"],"issuer":"did:web:vc.transmute.world","issuanceDate":"2020-03-10T04:24:12.164Z","credentialSubject":{"id":"did:example:ebfeb1f712ebc6f1c276e12ec21","degree":{"type":"BachelorDegree","name":"Bachelor of Science and Arts"}}}
 */
export interface Credential {
  "@context": LdContext;
  id?: string;
  type: string[];
  issuanceDate: Date;
  issuer: VerifiableCredentialIssuer;
  /** Credential subject */
  credentialSubject: CredentialSubject;
  [key: string]: any;
}

/**
 * VerifiableCredential
 * A Verifiable Credential
 */
export type VerifiableCredential =
  | string
  | {
      "@context": LdContext;
      /** @example "http://platform.transmute.industries/credentials/aaa4a2d7-8778-4cae-9320-07a61f1844e7" */
      id?: string;
      type: string[];
      issuer?: VerifiableCredentialIssuer;
      credentialSubject: CredentialSubject;
      /** @example "2010-01-01T19:23:24Z" */
      issuanceDate: string;
      /** @example "2010-01-01T19:23:24Z" */
      expirationDate?: string;
      /** @example [{"type":"LinkRole","target":"http://platform.transmute.industries/organizations/org_EEEEEEEEEtYQAFH7E/presentations/available","linkRelationship":"OrganizationSecureShareEndpoint"}] */
      relatedLink?: {
        type?: string | string[];
        /** Uniform Resource Identifier https://datatracker.ietf.org/doc/html/rfc3986 */
        target?: URI;
        linkRelationship?: string;
      }[];
      /** A JSON-LD Linked Data proof. */
      proof: LinkedDataProof;
      [key: string]: any;
    };

export interface VerifiableCredentialWrapper {
  /** Verifiable Data Platform Credential id */
  id: PlatformCredentialId;
  /** Universally Unique IDentifier according to http://tools.ietf.org/html/rfc4122 */
  batchId?: UUID;
  organizationId?: string;
  verifiableCredential: VerifiableCredential | Credential | (VerifiableCredential & Credential);
  /** @example "private" */
  visibility?: "private" | "public";
  createdAt?: object | Date | (object & Date);
  [key: string]: any;
}

export type AugmentedVerifiableCredentialWrapper = VerifiableCredentialWrapper & {
  verified?: boolean;
  revoked?: boolean;
  verification?: {
    status?: string;
    title?: string;
    description?: string;
  }[];
};

/**
 * Template
 * A template helps users create one or more verifiable credentials.
 */
export type Template = OrganizationControlledResource & {
  /** @example "University Credential v0" */
  name?: string;
  /** @example "University Credential Template" */
  description?: string;
  /** @minItems 1 */
  credentials?: Credential[];
};

/**
 * Templates
 * A list of templates
 */
export interface Templates {
  items: Template[];
}

/**
 * UpdateTemplate
 * Updates to apply to a template
 */
export interface UpdateTemplate {
  /** @example "University Credential v0" */
  name?: string;
  /** @example "University Credential Template" */
  description?: string;
}

/**
 * DeleteTemplate
 * Template to delete
 */
export interface DeleteTemplate {
  id: string;
}

/**
 * Update Contact
 * A new contact to be created
 */
export interface UpdateContact {
  /** @example "c10a886d-afcd-44c2-ba1e-687843cf18a5" */
  id: string;
  /** @example "Bob Corp." */
  name?: string;
  /** @example "support@bob.example.com" */
  email?: string;
  /** @example "555-555-5555" */
  phone?: string;
  /** @example "did:example:123" */
  did?: string;
  /** @maxItems 1 */
  exchange?: object[];
}

/**
 * Contacts
 * A list of contacts
 */
export interface Contacts {
  /**
   * The total number of items
   * @example 1
   */
  count: number;
  items: Contact[];
  /**
   * The curren page of the query
   * @example 1
   */
  page?: number;
}

/**
 * Create Contact
 * A new contact to be created
 */
export interface CreateContact {
  /** @example "Bob Corp." */
  name: string;
  /** @example "support@bob.example.com" */
  email: string;
  /** @example "555-555-5555" */
  phone?: string;
  /** @example "did:example:123" */
  did?: string;
  /**
   * @maxItems 1
   * @example [{"type":"DIDAuth","endpoint":"https://example.com/presentations/available"}]
   */
  exchange: object[];
}

/**
 * DeleteContact
 * Contact to delete
 */
export interface DeleteContact {
  id: string;
}

/**
 * Contact
 * A contact helps users send and receive verifiable credentials.
 */
export type Contact = OrganizationControlledResource & {
  /** @example "Bob Corp." */
  name?: string;
  /** @example "support@bob.example.com" */
  email?: string;
  /** @example "555-555-5555" */
  phone?: string;
  /** @example "did:example:123" */
  did?: string;
  /** @maxItems 1 */
  exchange?: object[];
};

/**
 * ContactPoint
 * Contact information for entities.
 */
export interface ContactPoint {
  /**
   * Name
   * Name of the entity.
   */
  name?: string;
  /** The location at which a particular organization or user may be found or reached. */
  address?: PostalAddress;
  /**
   * Email Address
   * Contact email address.
   */
  email?: string;
  /**
   * Phone Number
   * Contact phone number.
   */
  phoneNumber?: string;
}

/**
 * PostalAddress
 * The location at which a particular organization or user may be found or reached.
 */
export interface PostalAddress {
  /**
   * Organization Name
   * The name of the organization expressed in text.
   */
  organizationName?: string;
  /**
   * Street Address
   * The street address expressed as free form text. The street address is printed on paper as the first lines below the name. For example, the name of the street and the number in the street or the name of a building.
   */
  streetAddress?: string;
  /**
   * Address Locality
   * Text specifying the name of the locality; for example, a city.
   */
  addressLocality?: string;
  /**
   * Address Region
   * Text specifying a province or state in abbreviated format; for example, NJ.
   */
  addressRegion?: string;
  /**
   * Address Country
   * Code specifying the country (and country subdivision) for the address using ISO 3166-1.
   */
  addressCountry?: string;
  /**
   * Cross Street
   * A street intersecting a main street (usually at right angles) and continuing on both sides of it.
   */
  crossStreet?: string;
  /**
   * County Code
   * A code that identifies a county. A county is a territorial division in some countries, forming the chief unit of local administration. In the US, a county is a political and administrative division of a state.
   */
  countyCode?: string;
  /**
   * Postal Code
   * Text specifying the postal code for an address.
   */
  postalCode?: string;
  /**
   * Post Office Box Number
   * The number that identifies a PO box. A PO box is a box in a post office or other postal service location assigned to an organization where postal items may be kept.
   */
  postOfficeBoxNumber?: string;
}

/**
 * NotifyPresentationAvailableRequest
 * @example {"query":[{"type":"QueryByExample","credentialQuery":[{"type":["VerifiableCredential"],"reason":"We want to present credentials."}]}]}
 */
export interface NotifyPresentationAvailableRequest {
  /** See https://w3c-ccg.github.io/vp-request-spec/#format */
  query?: {
    /** The type of query the server should reply with. */
    type?: string;
    /** Details of the client's available presentation */
    credentialQuery?: object[];
  }[];
}

/**
 * NotifyPresentationAvailableResponse
 * @example {"query":[{"type":"QueryByExample","credentialQuery":[{"type":["VerifiableCredential"],"reason":"We want to present credentials."}]}],"domain":"http://localhost:8080","challenge":"8690c2a3-dfb5-47d8-b256-a2a4c6f65965"}
 */
export interface NotifyPresentationAvailableResponse {
  /** See https://w3c-ccg.github.io/vp-request-spec/#format */
  query?: object[];
  /** See https://w3id.org/security#domain */
  domain?: string;
  /** See https://w3id.org/security#challenge */
  challenge?: string;
}

/**
 * PlatformBatchId
 * Verifiable Data Platform Batch id
 * @format uri
 * @example "https://example.com/batch/40d46c4a-8a4c-4ae1-a49a-c41213f707a9"
 */
export type PlatformBatchId = string;

/**
 * CredentialSubject
 * Credential subject
 */
export type CredentialSubject =
  | {
      /** Internationalized Resource Identifier https://datatracker.ietf.org/doc/html/rfc3987 */
      id?: IRI;
      type?: string[] | string;
      [key: string]: any;
    }
  | {
      /** Internationalized Resource Identifier https://datatracker.ietf.org/doc/html/rfc3987 */
      id?: IRI;
      type?: string[] | string;
      [key: string]: any;
    }[]
  | ({
      /** Internationalized Resource Identifier https://datatracker.ietf.org/doc/html/rfc3987 */
      id?: IRI;
      type?: string[] | string;
      [key: string]: any;
    } & {
      /** Internationalized Resource Identifier https://datatracker.ietf.org/doc/html/rfc3987 */
      id?: IRI;
      type?: string[] | string;
      [key: string]: any;
    }[]);

/**
 * CredentialTemplate
 * A Verifiable Credential without proof
 * @example {"@context":["https://www.w3.org/2018/credentials/v1","https://www.w3.org/2018/credentials/examples/v1"],"type":["VerifiableCredential","UniversityDegreeCredential"],"issuer":"did:web:vc.transmute.world","issuanceDate":"2020-03-10T04:24:12.164Z","credentialSubject":{"id":"did:example:ebfeb1f712ebc6f1c276e12ec21","degree":{"type":"BachelorDegree","name":"Bachelor of Science and Arts"}}}
 */
export type CredentialTemplate = any & {
  /** The context for a credential */
  "@context": CredentialsContext;
  id?: string;
  type: string | string[];
  /**
   * CredentialIssuer
   * The issuer of a credential
   * @example "did:example:123"
   */
  issuer?: DID | object;
  credentialSubject: DID | object;
  /** @example "2010-01-01T19:23:24Z" */
  issuanceDate?: string;
  /** @example "2010-01-01T19:23:24Z" */
  expirationDate?: string;
  [key: string]: any;
};

/**
 * VerifiableCredentials
 * A list of Verifiable Credentials
 */
export interface VerifiableCredentials {
  items: VerifiableCredential[];
}

/**
 * IssueCredentialOptions
 * Options for specifying how the LinkedDataProof is created.
 * @example {"type":"Ed25519Signature2018","created":"2020-04-02T18:48:36Z","credentialStatus":{"type":"RevocationList2020Status"}}
 */
export interface IssueCredentialOptions {
  type: "Ed25519Signature2018" | "JsonWebSignature2020" | "jwt_vc";
  created?: Date;
  credentialStatus?: {
    type: "RevocationList2020Status";
  };
}

/** IssueCredentialRequest */
export interface IssueCredentialRequest {
  /** A Verifiable Credential without proof */
  credential: Credential;
  /** Options for specifying how the LinkedDataProof is created. */
  options: IssueCredentialOptions;
}

/** BatchIssueCredentialRequest */
export interface BatchIssueCredentialRequest {
  /** Verifiable Data Platform Template id */
  templateId?: PlatformTemplateId;
  credentials?: Credential[];
}

/**
 * VerificationResult
 * Verification result  for a Verifiable Credential or Verifiable Presentation
 */
export interface VerificationResult {
  verified?: boolean;
  /** @example ["proof"] */
  checks?: string[];
  /** @example [] */
  warnings?: string[];
  /** @example [] */
  errors?: string[];
}

/**
 * Transmute Verification Check
 * Verification result for a Verifiable Credential including Transmute Integrity Check
 */
export interface TransmuteVerificationResult {
  verified?: boolean;
  verifications?: {
    /** @example "good" */
    status?: "good" | "bad";
    /** @example "Activation" */
    title?: "Activation" | "Expired" | "Proof" | "Revocation" | "Transmute Integrity Check";
    /** @example "This credential activated a month ago" */
    description?: string;
  }[];
}

/**
 * Presentation
 * A JSON-LD Verifiable Presentation without a proof.
 */
export interface Presentation {
  "@context": LdContext;
  type?: VerifiablePresentationType;
  /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
  holder?: DID;
  /** The Verifiable Credentials */
  verifiableCredential?: VerifiableCredential[];
}

/**
 * VerifiablePresentation
 * A JSON-LD Verifiable Presentation with a proof, implementing the W3C data model (https://www.w3.org/TR/vc-data-model)
 */
export type VerifiablePresentation = Presentation & {
  /** A JSON-LD Linked Data proof. */
  proof?: LinkedDataPresentationProof;
};

/**
 * VerifiablePresentationNoProof
 * A JSON-LD Verifiable Presentation with a proof, implementing the W3C data model (https://www.w3.org/TR/vc-data-model)
 * @example {"@context":["https://www.w3.org/2018/credentials/v1"],"type":"VerifiablePresentation","verifiableCredential":[{"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/traceability/v1"],"type":["VerifiableCredential","CertificateOfOriginCertificate"],"issuer":{"id":"did:key:z6MkkQ4Ft22W2Dp2SjWRSiUTbpFPJ2LAsyaFmvnCyyaGjL8X","name":"Transmute"},"credentialSubject":{"items":[{"type":"TradeLineItem","name":"Espresso Italiano","description":"Premium Prosumer Espresso Makers - Model Dolce","commodity":{"type":"Commodity","commodityCode":"851671","commodityCodeType":"HS"}}]},"name":"Certification of Origin","description":"Certification of Origin","issuanceDate":"2022-05-25T18:50:31.607Z","proof":{"type":"Ed25519Signature2018","created":"2022-05-25T18:50:34Z","verificationMethod":"did:key:z6MkkQ4Ft22W2Dp2SjWRSiUTbpFPJ2LAsyaFmvnCyyaGjL8X#z6MkkQ4Ft22W2Dp2SjWRSiUTbpFPJ2LAsyaFmvnCyyaGjL8X","proofPurpose":"assertionMethod","jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Fd6o6fKyf20EIwHSkVrKL1iyYO5AHi-Iuv9o9YSR5ETw9OllvqmF-XyMEuEHF5sV8gdVXWngd6Usaw7Mi_YYDA"}}],"holder":"did:key:z6MkkQ4Ft22W2Dp2SjWRSiUTbpFPJ2LAsyaFmvnCyyaGjL8X"}
 */
export type VerifiablePresentationNoProof = Presentation & object;

/**
 * PresentationSubmissionBindingModel
 * A wrapper around a verifiable presentation, to be replaced by PlatformWrappedVerifiablePresentation.
 */
export interface PresentationSubmissionBindingModel {
  sender?: {
    /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
    did?: DID;
  };
  receiver?: {
    /** @example "org_EEEEEEEEEtYQAFH7E" */
    organizationId?: string;
  };
  /** A JSON-LD Verifiable Presentation with a proof, implementing the W3C data model (https://www.w3.org/TR/vc-data-model) */
  verifiablePresentation: VerifiablePresentation;
}

/** PresentationSubmission */
export type PresentationSubmission = PresentationSubmissionBindingModel & {
  /** Universally Unique IDentifier according to http://tools.ietf.org/html/rfc4122 */
  id?: UUID;
  /** @example "pending" */
  status?: "pending" | "accepted" | "rejected";
  platformCredentialIds?: PlatformCredentialId[];
  /** Universally Unique IDentifier according to http://tools.ietf.org/html/rfc4122 */
  challenge?: UUID;
};

/**
 * VerifyPresentationOptions
 * Options for specifying how the LinkedDataProof is created.
 */
export interface VerifyPresentationOptions {
  /**
   * A challenge provided by the requesting party of the proof.
   * @example "6e62f66e-67de-11eb-b490-ef3eeefa55f2"
   */
  challenge: string;
  /**
   * The intended domain of validity for the proof.
   * @example "website.example"
   */
  domain?: string;
  /**
   * The types of checks to be performed.
   * @example ["proof","credentialStatus"]
   */
  checks?: string[];
}

/** VerifyPresentationRequest */
export interface VerifyPresentationRequest {
  /** A JSON-LD Verifiable Presentation with a proof, implementing the W3C data model (https://www.w3.org/TR/vc-data-model) */
  verifiablePresentation?: VerifiablePresentation;
  /** Options for specifying how the LinkedDataProof is created. */
  options?: VerifyPresentationOptions;
}

/**
 * Verify Presentation Response
 * Verification result  for a Verifiable Credential or Verifiable Presentation
 */
export interface VerifyPresentationResponse {
  /** @example ["proof"] */
  checks?: string[];
  /** @example [] */
  warnings?: string[];
  /** @example [] */
  errors?: string[];
  /** @example true */
  verified?: boolean;
  credentials?: {
    /** @example true */
    verified?: boolean;
    results?: {
      /** @example "http://platform.transmute.industries/credentials/aaa4a2d7-8778-4cae-9320-07a61f1844e7" */
      credentialId?: string;
      /** @example true */
      verified?: boolean;
      results?: {
        /** A JSON-LD Linked Data proof. */
        proof?: LinkedDataProof;
        /** @example true */
        verified?: boolean;
        purposeResult?: {
          /** @example true */
          valid?: boolean;
        };
      }[];
    }[];
  };
  presentation?: {
    /** @example true */
    verified?: boolean;
    results?: {
      /** A JSON-LD Linked Data proof. */
      proof?: LinkedDataPresentationProof;
      /** @example true */
      verified?: boolean;
      purposeResult?: {
        /** @example true */
        valid?: boolean;
        /** A DID Document. */
        controller?: DIDDocument;
      };
    }[];
  };
}

/**
 * Options for specifying how the LinkedDataProof is created.
 * @example {"verificationMethod":"did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN","proofPurpose":"authentication","created":"2020-04-02T18:48:36Z","domain":"example.com","challenge":"d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"}
 */
export interface PresentCredentialOptions {
  /** The URI of the verificationMethod used for the proof. Default authentication URI. */
  verificationMethod?: DIDURL;
  /** The purpose of the proof. Default 'authentication'. */
  proofPurpose?: "authentication";
  /** The date and time of the proof (with a maximum accuracy in seconds). Default current system time. */
  created?: string;
  /** A challenge provided by the requesting party of the proof. For example 6e62f66e-67de-11eb-b490-ef3eeefa55f2 */
  challenge?: UUID;
  /** The intended domain of validity for the proof. For example website.example */
  domain?: URI;
}

/** @example {"presentation":{"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/security/suites/ed25519-2018/v1"],"type":"VerifiablePresentation","holder":"did:key:z6MkshFkMdYi2XXfcrB77PkNVLioBFDr6QjvthyYBbn7JNKG","verifiableCredential":[{"@context":["https://www.w3.org/2018/credentials/v1",{"@vocab":"https://vocabulary.transmute.industries/ns/dynamic#"}],"type":["VerifiableCredential","UniversityDegreeCredential"],"issuer":"did:key:z6MksxZyvYaPPVTxYtr855Zy6Pi1kcjuSyFU2WcNC1vZz7h5","issuanceDate":"2020-03-10T04:24:12.164Z","credentialSubject":{"id":"did:example:ebfeb1f712ebc6f1c276e12ec21","degree":{"type":"BachelorDegree","name":"Bachelor of Science and Arts"}},"proof":{"type":"Ed25519Signature2018","created":"2023-01-11T21:16:10Z","verificationMethod":"did:key:z6MksxZyvYaPPVTxYtr855Zy6Pi1kcjuSyFU2WcNC1vZz7h5#z6MksxZyvYaPPVTxYtr855Zy6Pi1kcjuSyFU2WcNC1vZz7h5","proofPurpose":"assertionMethod","jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..7VRno1LDB4m_a1KZJmtto2UerowPoZ7ZauVofnKfxzrAI8TVbw-8Cy9dFoTUEvBBL_8pPvWREvx8oxjnveArCg"}}]},"options":{"verificationMethod":"did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN","proofPurpose":"authentication","created":"2020-04-02T18:48:36Z","domain":"example.com","challenge":"d436f0c8-fbd9-4e48-bbb2-55fc5d0920a8"}} */
export interface ProvePresentationRequest {
  /** A JSON-LD Verifiable Presentation without a proof. */
  presentation?: Presentation;
  /** Options for specifying how the LinkedDataProof is created. */
  options?: PresentCredentialOptions;
}

export type LdContext = string[];

/**
 * Type
 * The JSON-LD type
 */
export type VerifiableCredentialType = string | string[];

export type VerifiablePresentationType = string[];

/**
 * Internationalized Resource Identifier
 * Internationalized Resource Identifier https://datatracker.ietf.org/doc/html/rfc3987
 * @example "https://example.com/resource/123"
 */
export type IRI = URN | DID | (URN & DID);

/**
 * Uniform Resource Identifier
 * Uniform Resource Identifier https://datatracker.ietf.org/doc/html/rfc3986
 * @example "http://platform.transmute.industries/credentials/aaa4a2d7-8778-4cae-9320-07a61f1844e7"
 */
export type URI = string;

/**
 * URN
 * @pattern ^urn:[a-z0-9][a-z0-9-]{0,31}:([a-z0-9()+,\-.:=@;$_!*']|%[0-9a-f]{2})+$
 * @example "urn:uuid:0da152f5-58eb-4352-ab0e-f247700182ef"
 */
export type URN = string;

export type VerifiableCredentialIssuer =
  | DID
  | URN
  | {
      id?: DID | URN | (DID & URN);
      [key: string]: any;
    }
  | (DID &
      URN & {
        id?: DID | URN | (DID & URN);
        [key: string]: any;
      });

/**
 * A JSON-LD Linked Data proof.
 * @example {"type":"Ed25519Signature2018","created":"2020-04-02T18:28:08Z","verificationMethod":"did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN","proofPurpose":"assertionMethod","jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"}
 */
export interface LinkedDataProof {
  /** Linked Data Signature Suite used to produce proof. */
  type?: string;
  /** The date and time of the proof (with a maximum accuracy in seconds). */
  created?: string;
  /** Verification Method used to verify proof. */
  verificationMethod?: DIDURL;
  /** The purpose of the proof to be used with verificationMethod. */
  proofPurpose?: "assertionMethod";
  /** Detached JSON Web Signature */
  jws?: string;
}

/**
 * A JSON-LD Linked Data proof.
 * @example {"type":"Ed25519Signature2018","created":"2022-02-28T19:57:49Z","verificationMethod":"did:key:z6MktRSPH8y8abtqoDVfjq3WUN9G1TSuHaH9G6uNNNqS4Hww#z6MktRSPH8y8abtqoDVfjq3WUN9G1TSuHaH9G6uNNNqS4Hww","proofPurpose":"authentication","challenge":"60f1258c-6622-4db2-9503-57c1e81ce009","domain":"https://platform.transmute.industries","jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..N4u3hA_LRfl4RAsEmKj94PaiuFYDC43skoM0C5_dbBpY1dKZeza973nXhjz55wBscr6AD6eiUL6HiCjj9jSJCw"}
 */
export interface LinkedDataPresentationProof {
  /** Linked Data Signature Suite used to produce proof. */
  type?: string;
  /** The date and time of the proof (with a maximum accuracy in seconds). */
  created?: string;
  /** Verification Method used to verify proof. */
  verificationMethod?: DIDURL;
  /** The purpose of the proof to be used with verificationMethod. */
  proofPurpose?: "authentication";
  /** Universally Unique IDentifier according to http://tools.ietf.org/html/rfc4122 */
  challenge?: UUID;
  /** Uniform Resource Identifier https://datatracker.ietf.org/doc/html/rfc3986 */
  domain?: URI;
  /** Detached JSON Web Signature */
  jws?: string;
}

/**
 * DID Document
 * A DID Document.
 * @example {"@context":["https://www.w3.org/ns/did/v1","https://w3id.org/security/suites/jws-2020/v1"],"id":"did:key:z6...G6","verificationMethod":[{"id":"did:key:z6...G6#z6...G6","type":"JsonWebKey2020","controller":"did:key:z6...G6","publicKeyJwk":{"kty":"OKP","crv":"Ed25519","x":"fQh...2c"}},{"id":"did:key:z6...G6#z6...Tb","type":"JsonWebKey2020","controller":"did:key:z6...G6","publicKeyJwk":{"kty":"OKP","crv":"X25519","x":"Zx...iI"}}],"assertionMethod":["did:key:z6...G6#z6...G6"],"authentication":["did:key:z6...G6#z6...G6"],"capabilityInvocation":["did:key:z6...G6#z6...G6"],"capabilityDelegation":["did:key:z6...G6#z6...G6"],"keyAgreement":["did:key:z6...G6#z6...Tb"]}
 */
export interface DIDDocument {
  /** @example ["https://www.w3.org/ns/did/v1",{"@vocab":"https://www.w3.org/ns/did/#"}] */
  "@context"?: object[];
  /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
  id: DID;
  /** @example ["did:example:456"] */
  alsoKnownAs?: DID[];
  /** @example [{"id":"did:example:123#linked-domain","type":"LinkedDomains","serviceEndpoint":"https://bar.example.com"}] */
  service?: {
    /** DID URL https://www.w3.org/TR/did-core/#dfn-did-urls */
    id?: DIDURL;
    type?: string;
    serviceEndpoint?: object | URI[] | URI;
  }[];
}

/**
 * Verifiable Data Platform Template id
 * @format uri
 * @example "https://platform.transmute.industries/templates/eb351949-5298-442f-b00a-717342c93c27"
 */
export type PlatformTemplateId = string;

/**
 * Verifiable Data Platform Credential id
 * @example "https://platform.transmute.industries/credentials/eb351949-5298-442f-b00a-717342c93c27"
 */
export type PlatformCredentialId = string;

/**
 * Create Credential Response
 * The credential that got stored in the database collection
 */
export interface CreateCredentialResponse {
  /** @example "https://example.com/credentials/123" */
  id?: string;
  /** A Verifiable Credential */
  verifiableCredential?: VerifiableCredential;
}

/**
 * Update Credential
 * Updates a Credential
 */
export interface UpdateCredential {
  /** A Verifiable Credential */
  verifiableCredential: VerifiableCredential;
}

/** A batch of Verifiable Credentials, issued on the platform but not (yet) stored and assigned Platform Ids. */
export type BatchIssueCredentialResponse = VerifiableCredentials & {
  /** Verifiable Data Platform Batch id */
  batchId?: PlatformBatchId;
};

/**
 * Update Credential status
 * Revoke or un-revoke a credential
 */
export interface UpdateCredentialStatus {
  revoked: boolean;
}

/**
 * Update Verifable Credential Status
 * Updates the Status of a Verifiable Credential
 * @example {"credentialId":"urn:uuid:45a44711-e457-4fa8-9b89-69fe0287c86a","credentialStatus":[{"type":"RevocationList2020Status","status":"0"}]}
 */
export interface UpdateVerifiableCredentialStatus {
  credentialId: string;
  /** @minItems 1 */
  credentialStatus: {
    type: "RevocationList2020Status";
    status: "0" | "1";
  }[];
}

/**
 * Batch
 * A batch
 * @example {"id":"c10a886d-afcd-44c2-ba1e-687843cf18a5","verifiableCredentials":[{"id":"http://platform.transmute.industries/credentials/c10a886d-afcd-44c2-ba1e-687843cf18a5","verifiableCredential":{"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/security/suites/ed25519-2018/v1"],"id":"http://platform.transmute.industries/credentials/aaa4a2d7-8778-4cae-9320-07a61f1844e7","type":["VerifiableCredential","VerifiableBusinessCard"],"issuer":"did:example:123","credentialSubject":"did:example:123","issuanceDate":"2010-01-01T19:23:24Z","expirationDate":"2010-01-01T19:23:24Z","proof":{"type":"Ed25519Signature2018","created":"2020-04-02T18:28:08Z","verificationMethod":"did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN","proofPurpose":"assertionMethod","jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA"}},"visibility":"private","createdAt":"2022-02-28T19:41:51.498Z"}]}
 */
export interface Batch {
  /** Universally Unique IDentifier according to http://tools.ietf.org/html/rfc4122 */
  id: UUID;
  verifiableCredentials: VerifiableCredentialWrapper[];
}

/**
 * Batches
 * A list of batches
 */
export interface Batches {
  items: Batch[];
  count?: number;
  page?: number;
}

/**
 * Batch Create
 * @example {"options":{"revocable":false},"credentials":[{"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/traceability/v1"],"type":["VerifiableCredential","UniversityDegreeCredential"],"issuer":"did:key:ni5kpyphiiLM1HRMe5gbugvUJxqTs9UkjLtmkKt7nHFQiYyN","issuanceDate":"2020-03-10T04:24:12.164Z","credentialSubject":{"id":"did:example:ebfeb1f712ebc6f1c276e12ec21","degree":{"type":"BachelorDegree","name":"Bachelor of Science and Arts"}}}]}
 */
export interface BatchCreate {
  options: {
    revocable?: boolean;
  };
  credentials: Credential[];
}

/**
 * PresentationSubmissions
 * A list of presentation submissions, used by received and sent.
 */
export type PresentationSubmissions = PresentationSubmission[];

export interface GenericResponse {
  success?: boolean;
}

export interface VisibilityObject {
  visibility?: string;
}

/** DeriveCredentialRequest */
export interface DeriveCredentialRequest {
  verifiableCredential?: VerifiableCredential & object;
  /** @example {"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/citizenship/v1","https://w3id.org/security/bbs/v1"],"type":["VerifiableCredential","PermanentResidentCard"],"credentialSubject":{"@explicit":true,"type":["PermanentResident","Person"],"givenName":{},"familyName":{}}} */
  frame?: object;
  /** @example {"nonce":"lEixQKDQvRecCifKl789TQj+Ii6YWDLSwn3AxR0VpPJ1QV5htod/0VCchVf1zVM0y2E="} */
  options?: {
    nonce?: string;
  };
}

/**
 * VerifyCredentialRequest
 * @example {"verifiableCredential":{"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/traceability/v1"],"id":"did:key:z6MkmbqKc6KncFZUbVJwUppttTkiMAtnVJ5wzC5oVBWci3pc","type":["VerifiableCredential","HouseBillOfLadingCertificate"],"name":"House Bill Of Lading","issuanceDate":"2022-03-04T13:40:00Z","issuer":{"type":"Organization","id":"did:key:z6MkfCfZ9Xwsfr8UKZiz4ZrwaHG3HyxEHgNBaTjwomyfHR3y","name":"World Forward, Inc.","address":{"type":"PostalAddress","organizationName":"MCL Multi Container Line LTD.","streetAddress":"Well Fung Ind Centre","addressLocality":"Kwai Chung","addressRegion":"Hong Kong","addressCountry":"Hong Kong"}},"credentialSubject":{"type":"HouseBillOfLading","billOfLadingNumber":"FF873363210A","bookingNumber":["FF873363210"],"shipper":{"type":"Organization","name":"Espresso Italiano Co.","address":{"type":"PostalAddress","streetAddress":"Via Vico Ferrovia 5","addressLocality":"Goro","addressRegion":"Ferrara","postalCode":"44020","addressCountry":"IT"},"email":"sales@espresso-italiano.example.com","phoneNumber":"+39 0351 9067195"},"consignee":{"type":"Organization","name":"Prosumer Coffee Supplies, Ltd.","description":"Coffee Machine Imports","address":{"type":"PostalAddress","streetAddress":"3934 Spinnaker Lane","addressLocality":"Joliet","addressRegion":"Illinois","postalCode":"60432","addressCountry":"US"}},"notifyParty":[{"type":"Organization","name":"Prosumer Coffee Supplies, Ltd.","description":"Coffee Machine Imports","address":{"type":"PostalAddress","streetAddress":"3934 Spinnaker Lane","addressLocality":"Joliet","addressRegion":"Illinois","postalCode":"60432","addressCountry":"US"}}],"carrier":{"type":"Organization","id":"did:key:z6MktHQo3fRRohk44dsbE76CuiTpBmyMWq2VVjvV6aBSeE3U","name":"World Forward, Inc.","address":{"type":"PostalAddress","organizationName":"MCL Multi Container Line LTD.","streetAddress":"Well Fung Ind Centre","addressLocality":"Kwai Chung","addressRegion":"Hong Kong","addressCountry":"Hong Kong"}},"mainCarriageTransportMovement":{"type":"Transport","vesselNumber":"MS Seven Seas","voyageNumber":"Atl-W0425"},"portOfLoading":{"type":"Place","unLocode":"ITMIL"},"portOfDischarge":{"type":"Place","unLocode":"USLGB"},"totalNumberOfPackages":2200,"transportEquipmentQuantity":2,"includedConsignmentItems":[{"marksAndNumbers":"Espresso Italiano","commodity":{"type":"Commodity","commodityCode":"851671","commodityCodeType":"HS"},"packageQuantity":220,"netWeight":{"type":"QuantitativeValue","unitCode":"kg","value":"1460"},"grossWeight":{"type":"QuantitativeValue","unitCode":"kg","value":"1590"},"grossVolume":{"type":"QuantitativeValue","value":"85","unitCode":"cmb"}}],"freightAndCharges":{"type":"ServiceCharge","chargeCode":"basicFreight","paymentTerm":"collect","chargeText":"Negotiated ocean freight","rate":{"type":"PriceSpecification","price":225,"priceCurrency":"USD"},"calculationBasis":"Per container","appliedAmount":{"type":"PriceSpecification","price":450,"priceCurrency":"USD"}},"declaredValue":{"type":"PriceSpecification","price":24000,"priceCurrency":"USD"},"termsAndConditions":"https://terms-of-shipment.freightforwarder.example.com"},"proof":{"type":"Ed25519Signature2018","created":"2022-06-07T21:03:18Z","verificationMethod":"did:key:z6MkfCfZ9Xwsfr8UKZiz4ZrwaHG3HyxEHgNBaTjwomyfHR3y#z6MkfCfZ9Xwsfr8UKZiz4ZrwaHG3HyxEHgNBaTjwomyfHR3y","proofPurpose":"assertionMethod","jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..9odndfjNtepu_AMQYRv8TA6o24YN4R-i9WcyOw0kCHsGrIaUI39gvS7AldlrZhpvVHgv3jPzsRtBU8cvCmrhDw"}}}
 */
export interface VerifyCredentialRequest {
  verifiableCredential: Credential;
  options?: object;
}

/**
 * @format date-time
 * @example "2021-09-22T15:50:14.706Z"
 */
export type Date = string;

/**
 * ListResponse
 * The response object sent for lists
 */
export interface ListResponse {
  /**
   * The total number of items
   * @example 1
   */
  count: number;
}

/**
 * Universally Unique IDentifier
 * Universally Unique IDentifier according to http://tools.ietf.org/html/rfc4122
 * @format uuid
 * @example "c10a886d-afcd-44c2-ba1e-687843cf18a5"
 */
export type UUID = string;

/**
 * Decentralized identifier
 * Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers
 * @pattern ^(?=^did:(?<method_name>[a-z0-9]+):(?<method_specific_id>([a-zA-Z0-9.\-_]|%[0-9a-fA-F]{2}|:)+$))(?=^(?!.*[:]$)).*$
 * @example "did:key:z6MkshFkMdYi2XXfcrB77PkNVLioBFDr6QjvthyYBbn7JNKG"
 */
export type DID = string;

/**
 * DID URL
 * DID URL https://www.w3.org/TR/did-core/#dfn-did-urls
 * @example "did:example:123#linked-domain"
 */
export type DIDURL = string;

/**
 * Template
 * A template for rendering schemas for example with JSON Schema Forms.
 * @example {"id":"d35f9540-7390-4130-904d-3dfb560cf1d9","industryTags":["E-Commerce","Steel"],"industryRoleTags":["Freight Forwarder","Carrier"],"tags":["common"],"schema":{},"formData":{"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/traceability/v1"],"id":"https://example.com/credential/123","type":["VerifiableCredential","BillOfLadingCertificate"],"name":"Bill Of Lading Certificate","description":"This document includes recommended bill of lading fields.","relatedLink":[{"type":["LinkRole"],"target":"did:example:789","linkRelationship":"commercialInvoiceLink"},{"type":["LinkRole"],"target":"https://www.example.com/template/123","linkRelationship":"millTestReportLink"}],"issuanceDate":"2019-12-11T03:50:55Z","issuer":{"id":"did:key:z6MktHQo3fRRohk44dsbE76CuiTpBmyMWq2VVjvV6aBSeE3U","type":"Organization","name":"Hauck Group","description":"Focused secondary synergy","address":{"type":"PostalAddress","streetAddress":"3198 O'Kon Wall","addressLocality":"North Adolphchester","addressRegion":"Nevada","postalCode":"50788","addressCountry":"Cote d'Ivoire"},"email":"Bernita.Quitzon98@example.com","phoneNumber":"555-171-4411","faxNumber":"555-758-9761"},"credentialSubject":{"type":["BillOfLading"],"billOfLadingNumber":"991205182A","bookingNumber":"991205182","relatedDocuments":[{"type":["Purchase"],"customer":{"type":["Person"],"email":"Deangelo56@example.org","phoneNumber":"555-208-5866"}}],"scac":"NISC","carrier":{"type":["Organization"],"email":"Adaline29@example.com","phoneNumber":"+1 555-234-9983"},"consignor":{"type":["Organization"],"email":"Idella60@example.org","phoneNumber":"555-953-9479"},"consignee":{"type":["Organization"],"email":"Victoria.Hane74@example.org","phoneNumber":"555-455-9053"},"notify":{"type":["Organization"],"email":"Florida91@example.net","phoneNumber":"555-104-1126"},"freight":{"type":["ParcelDelivery"],"deliveryAddress":{"type":["PostalAddress"],"organizationName":"Goyette Inc","streetAddress":"3685 Hessel Field","addressLocality":"North Alexannemouth","addressRegion":"Kansas","postalCode":"67998","addressCountry":"Denmark"},"originAddress":{"type":["PostalAddress"],"organizationName":"Schaefer, Beer and O'Reilly","streetAddress":"269 Aaliyah Trafficway","addressLocality":"Caylaland","addressRegion":"Maryland","postalCode":"34283","addressCountry":"Malta"},"deliveryMethod":"Truck transport","trackingNumber":"128857427430"},"portOfLoading":{"unLocode":"USMOB"},"portOfDischarge":{"unLocode":"MXATM"}}},"organization":{"id":"https://w3c-ccg.github.io/traceability-vocab/","type":"Organization","name":"Traceability Vocab"},"created":"2022-04-21T10:00:00.000Z","updated":"2022-04-21T10:00:00.000Z"}
 */
export interface MarketplaceTemplate {
  "@context"?: LdContext;
  id: string;
  /**
   * Industry Tags
   * Industry vertical applicability.
   */
  industryTags: string[];
  /**
   * Industry Role Tags
   * Industry role applicability.
   */
  industryRoleTags: string[];
  /**
   * Tags
   * Tags applicable to the template.
   */
  tags: string[];
  /**
   * Schema
   * The JSON Schema.
   */
  schema: object;
  /**
   * UI Schema
   * Layout definitions
   */
  uiSchema?: object;
  /**
   * XHR Schema
   * XHR definitions
   */
  xhrSchema?: object;
  /**
   * Form Data
   * Placeholder example data.
   */
  formData: object;
  image?: string;
  organization: {
    type?: string;
    name?: string;
    id?: string;
  };
  created?: object | Date | (object & Date);
  updated?: object | Date | (object & Date);
}

/**
 * Templates
 * Templates for rendering schemas for example with JSON Schema Forms.
 * @example {"count":1,"items":[{"id":"d35f9540-7390-4130-904d-3dfb560cf1d9"},{"industryTags":["E-Commerce","Steel"]},{"industryRoleTags":["Freight Forwarder","Carrier"]},{"tags":["common"]},{"schema":{}},{"formData":{"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/traceability/v1"],"id":"https://example.com/credential/123","type":["VerifiableCredential","BillOfLadingCertificate"],"name":"Bill Of Lading Certificate","description":"This document includes recommended bill of lading fields.","relatedLink":[{"type":["LinkRole"],"target":"did:example:789","linkRelationship":"commercialInvoiceLink"},{"type":["LinkRole"],"target":"https://www.example.com/template/123","linkRelationship":"millTestReportLink"}],"issuanceDate":"2019-12-11T03:50:55Z","issuer":{"id":"did:key:z6MktHQo3fRRohk44dsbE76CuiTpBmyMWq2VVjvV6aBSeE3U","type":"Organization","name":"Hauck Group","description":"Focused secondary synergy","address":{"type":"PostalAddress","streetAddress":"3198 O'Kon Wall","addressLocality":"North Adolphchester","addressRegion":"Nevada","postalCode":"50788","addressCountry":"Cote d'Ivoire"},"email":"Bernita.Quitzon98@example.com","phoneNumber":"555-171-4411","faxNumber":"555-758-9761"},"credentialSubject":{"type":["BillOfLading"],"billOfLadingNumber":"991205182A","bookingNumber":"991205182","relatedDocuments":[{"type":["Purchase"],"customer":{"type":["Person"],"email":"Deangelo56@example.org","phoneNumber":"555-208-5866"}}],"scac":"NISC","carrier":{"type":["Organization"],"email":"Adaline29@example.com","phoneNumber":"+1 555-234-9983"},"consignor":{"type":["Organization"],"email":"Idella60@example.org","phoneNumber":"555-953-9479"},"consignee":{"type":["Organization"],"email":"Victoria.Hane74@example.org","phoneNumber":"555-455-9053"},"notify":{"type":["Organization"],"email":"Florida91@example.net","phoneNumber":"555-104-1126"},"freight":{"type":["ParcelDelivery"],"deliveryAddress":{"type":["PostalAddress"],"organizationName":"Goyette Inc","streetAddress":"3685 Hessel Field","addressLocality":"North Alexannemouth","addressRegion":"Kansas","postalCode":"67998","addressCountry":"Denmark"},"originAddress":{"type":["PostalAddress"],"organizationName":"Schaefer, Beer and O'Reilly","streetAddress":"269 Aaliyah Trafficway","addressLocality":"Caylaland","addressRegion":"Maryland","postalCode":"34283","addressCountry":"Malta"},"deliveryMethod":"Truck transport","trackingNumber":"128857427430"},"portOfLoading":{"unLocode":"USMOB"},"portOfDischarge":{"unLocode":"MXATM"}}}},{"organization":{"id":"https://w3c-ccg.github.io/traceability-vocab/","type":"Organization","name":"Traceability Vocab"}},{"created":"2022-04-21T10:00:00.000Z"},{"updated":"2022-04-21T10:00:00.000Z"}]}
 */
export interface MarketplaceTemplates {
  /** @example 1 */
  count?: number;
  items?: MarketplaceTemplate[];
}

/**
 * Create Mnemonic
 * A new mnemonic to be created
 * @example {"name":"mnemonic1","description":"mnemonic 1","hdPath":"m/44'/1'/0'/0/0","keyType":"Ed25519"}
 */
export interface CreateMnemonic {
  name: string;
  description: string;
  hdPath: string;
  keyType: "Ed25519" | "X25519" | "secp256k1";
  /** 12 word phrase to derive randomness */
  mnemonic?: string;
}

/**
 * Mnemonic
 * A mnemonic is used to create keys n
 * @example {"name":"mnemonic1","description":"mnemonic 1","organizationId":"org_Y5Iw5xKg9MFueSon","keyType":"Ed25519","nextHdPathAvailable":"m/44'/1'/0'/0/0","sha256OfMnemonic":"b1c8eed5a59918177f6eb4ceb0cdf8b2d9ec5de1f471acc42b632ce71082d2e7","lastUsed":"2022-07-27T20:45:34.419Z","createdBy":{"type":"authenticated_application","role":"organization_admin","id":"16lYkpbdXxpEJnXwWEEtjGgU78yLV4Lw@clients","organizationId":"org_Y5Iw5xKg9MFueSon"},"createdAt":"2022-07-27T20:07:19.591Z","updatedBy":{"type":"authenticated_application","role":"organization_admin","id":"16lYkpbdXxpEJnXwWEEtjGgU78yLV4Lw@clients","organizationId":"org_Y5Iw5xKg9MFueSon"},"updatedAt":"2022-07-27T20:07:19.591Z","id":"8b7e3c06-26a2-4711-875c-4fe06839a480"}
 */
export type Mnemonic = OrganizationControlledResource & {
  name?: string;
  description?: string;
  nextHdPathAvailable?: string;
  sha256OfMnemonic?: string;
  lastUsed?: object | Date | (object & Date);
};

/**
 * Mnemonics
 * A list of mnemonics
 * @example {"count":1,"page":0,"pageSize":10,"items":[{"name":"mnemonic1","description":"mnemonic 1","organizationId":"org_Y5Iw5xKg9MFueSon","keyType":"Ed25519","nextHdPathAvailable":"m/44'/1'/0'/0/0","sha256OfMnemonic":"b1c8eed5a59918177f6eb4ceb0cdf8b2d9ec5de1f471acc42b632ce71082d2e7","lastUsed":"2022-07-27T20:45:34.419Z","createdBy":{"type":"authenticated_application","role":"organization_admin","id":"16lYkpbdXxpEJnXwWEEtjGgU78yLV4Lw@clients","organizationId":"org_Y5Iw5xKg9MFueSon"},"createdAt":"2022-07-27T20:07:19.591Z","updatedBy":{"type":"authenticated_application","role":"organization_admin","id":"16lYkpbdXxpEJnXwWEEtjGgU78yLV4Lw@clients","organizationId":"org_Y5Iw5xKg9MFueSon"},"updatedAt":"2022-07-27T20:07:19.591Z","id":"8b7e3c06-26a2-4711-875c-4fe06839a480"}]}
 */
export interface Mnemonics {
  /** The total number of items */
  count: number;
  page: number;
  pageSize: number;
  items: Mnemonic[];
}

/**
 * UpdateMnemonic
 * Updates to apply to a mnemonic
 * @example {"name":"new name","description":"new mnemonic description"}
 */
export interface UpdateMnemonic {
  name?: string;
  description?: string;
}

/**
 * Key Pair
 * A public/private key pair.
 * @example {"id":"did:key:z6MkthgT25cEiKAnmoPVE7swx4T5EQHzTyzTeNCf9VvYdxtF#z6MkthgT25cEiKAnmoPVE7swx4T5EQHzTyzTeNCf9VvYdxtF","type":"JsonWebKey2020","controller":"did:key:z6MkthgT25cEiKAnmoPVE7swx4T5EQHzTyzTeNCf9VvYdxtF","mnemonic":"divorce anger jewel remind goddess favorite stadium barely weather neck similar dirt","path":"m/44'/1'/0'/0/0","publicKeyJwk":{"kty":"OKP","crv":"Ed25519","x":"07VXh4xzRwGmcb62tsTri88kDTtDMKBreD87si4BPgg"},"privateKeyJwk":{"kty":"OKP","crv":"Ed25519","x":"07VXh4xzRwGmcb62tsTri88kDTtDMKBreD87si4BPgg","d":"21_-h-BnCfNShqZYKMPg2UMaCA9eTpGb4DbXgnjORrE"}}
 */
export interface KeyPair {
  id?: string;
  type?: string;
  controller?: string;
  mnemonic?: string;
  path?: string;
  /** A public key. */
  publicKeyJwk?: PublicKeyJwk;
  /** A private key. */
  privateKeyJwk?: PrivateKeyJwk;
}

/**
 * PublicKeyJwk
 * A public key.
 * @example {"kty":"OKP","crv":"Ed25519","x":"07VXh4xzRwGmcb62tsTri88kDTtDMKBreD87si4BPgg"}
 */
export interface PublicKeyJwk {
  kty?: string;
  crv?: string;
  x?: string;
}

/**
 * PublicKeyJwk
 * A private key.
 * @example {"kty":"OKP","crv":"Ed25519","x":"07VXh4xzRwGmcb62tsTri88kDTtDMKBreD87si4BPgg","d":"21_-h-BnCfNShqZYKMPg2UMaCA9eTpGb4DbXgnjORrE"}
 */
export interface PrivateKeyJwk {
  kty?: string;
  crv?: string;
  x?: string;
  d?: string;
}

/**
 * Private Key
 * An organizations private key.
 */
export interface PrivateKey {
  /** UUID of private key. */
  id?: string;
  /** Name of private key. */
  name?: string;
  /** Description of private key. */
  description?: string;
  /** Private key tags. */
  tags?: string[];
  mnemonicId?: any;
  keyPairId?: string;
  keyPairType?: string;
  /** A public key. */
  publicKeyJwk?: PublicKeyJwk;
  /** HD Path used to create key. */
  path?: string;
  /** ID of organization that created the key. */
  organizationId?: string;
  createdAt?: object | Date | (object & Date);
  lastUsed?: object | Date | (object & Date);
}

/**
 * Private Keys
 * A list of private keys.
 */
export interface PrivateKeys {
  /** The total number of items */
  count: number;
  items: PrivateKey[];
  page: number;
}

/**
 * Update Private Key Meta Data
 * Updates to apply to a private key's meta data
 * @example {"name":"New Private Key name","description":"New Description","tags":["New","Tags"]}
 */
export interface UpdatePrivateKey {
  name?: string;
  description?: string;
  tags?: string[];
}

/**
 * Derive Private key
 * Derive a private key
 * @example {"mnemonicId":"1234abcd-ef6a-4dbc-abd5-577b3fecb785","name":"Private Key Name","description":"Private Key Description","tags":["tags"]}
 */
export interface DerivePrivateKey {
  mnemonicId?: string;
  name?: string;
  description?: string;
  tags?: string[];
}

/**
 * Generate Private key
 * Generate a private key
 * @example {"hdPath":"m/44'/1'/0'/0/0","keyType":"Ed25519","name":"Private Key Name","description":"Private Key Description","tags":["tags"]}
 */
export interface GeneratePrivateKey {
  hdPath?: string;
  keyType?: string;
  name?: string;
  description?: string;
  tags?: string[];
}

/**
 * Recover Private key
 * recover a private key
 * @example {"mnemonicId":"1234abcd-ef6a-4dbc-abd5-577b3fecb785","hdPath":"m/44'/1'/0'/0/0","name":"Private Key Name","description":"Private Key Description","tags":["tags"]}
 */
export interface RecoverPrivateKey {
  mnemonicId?: string;
  hdPath?: string;
  name?: string;
  description?: string;
  tags?: string[];
}

/**
 * Import Private key
 * Import a private key
 * @example {"name":"Private Key Name","description":"Private Key Description","tags":["tags"],"keyPair":{"id":"did:key:z6MkthgT25cEiKAnmoPVE7swx4T5EQHzTyzTeNCf9VvYdxtF#z6MkthgT25cEiKAnmoPVE7swx4T5EQHzTyzTeNCf9VvYdxtF","type":"JsonWebKey2020","controller":"did:key:z6MkthgT25cEiKAnmoPVE7swx4T5EQHzTyzTeNCf9VvYdxtF","mnemonic":"divorce anger jewel remind goddess favorite stadium barely weather neck similar dirt","path":"m/44'/1'/0'/0/0","publicKeyJwk":{"kty":"OKP","crv":"Ed25519","x":"07VXh4xzRwGmcb62tsTri88kDTtDMKBreD87si4BPgg"},"privateKeyJwk":{"kty":"OKP","crv":"Ed25519","x":"07VXh4xzRwGmcb62tsTri88kDTtDMKBreD87si4BPgg","d":"21_-h-BnCfNShqZYKMPg2UMaCA9eTpGb4DbXgnjORrE"}}}
 */
export interface ImportPrivateKey {
  name?: string;
  description?: string;
  tags?: string[];
  keyPair?: object;
}

/**
 * Create Workflow Instance
 * A new workflow instance to be created
 * @example {"name":"Import SS Rolls, Maxi Acero, lot#30021","description":"Stainless Steel Rolls, Maxi Acero, lot number 30021, contact point: Marco","workflowInstance":"urn:uuid:45173n15-22fe-479d-b82f-23b458073f9b","tags":["my-tag","your-tag"]}
 */
export interface CreateWorkflowInstance {
  name: string;
  /** Internationalized Resource Identifier https://datatracker.ietf.org/doc/html/rfc3987 */
  workflowInstance: IRI;
  description?: string;
  tags?: string[];
}

/**
 * Workflow Instance
 * A workflow definition
 * @example {"id":"a478e3d4-3249-40ff-875e-3f9368387n15","workflowInstance":"urn:uuid:45173n15-22fe-479d-b82f-23b458073f9b","name":"SS Rolls, Maxi Acero, lot#30021","description":"Stainless Steel Rolls, Maxi Acero, lot number 30021, contact point: Marco","tags":["acero","rolls"],"firstPresentationDate":"2022-03-04T13:40:00Z","lastPresentationDate":"2022-03-04T13:40:00Z"}
 */
export interface WorkflowInstance {
  /** @example "123" */
  id: string;
  name: string;
  /** Internationalized Resource Identifier https://datatracker.ietf.org/doc/html/rfc3987 */
  workflowInstance: IRI;
  description?: string;
  tags?: string[];
  firstPresentationDate?: object | Date | (object & Date);
  lastPresentationDate?: object | Date | (object & Date);
}

/**
 * Workflow Instances
 * A list of workflow instances
 * @example {"count":1,"page":0,"pageSize":10,"items":[{"id":"a478e3d4-3249-40ff-875e-3f9368387n15","workflowInstance":"urn:uuid:45173n15-22fe-479d-b82f-23b458073f9b","name":"SS Rolls, Maxi Acero, lot#30021","description":"Stainless Steel Rolls, Maxi Acero, lot number 30021, contact point: Marco","tags":["acero","rolls"],"firstPresentationDate":"2022-03-04T13:40:00Z","lastPresentationDate":"2022-03-04T13:40:00Z"}]}
 */
export interface WorkflowInstances {
  /** The total number of items */
  count: number;
  page: number;
  pageSize: number;
  items: WorkflowInstance[];
}

/**
 * Update Workflow Definition
 * Updates to apply to a workflow definition
 * @example {"name":"SS Rolls, Maxi Acero, lot#30021","description":"Stainless Steel Rolls, Maxi Acero, lot number 30021, contact point: Marco","tags":["acero","stainless","rolls"]}
 */
export interface UpdateWorkflowInstance {
  name?: string;
  description?: string;
  tags?: string[];
}

/**
 * Create Workflow Definition
 * A new workflow definition to be created
 * @example {"workflowDefinition":"https://w3id.org/traceability#sima-steel-license","name":"CBP Steel Import with SIMA License","description":"CBP requires this workflow def for all Steel-related importing based on SIMA License","tags":["CBP","SIMA","Steel"]}
 */
export interface CreateWorkflowDefinition {
  name: string;
  /** Internationalized Resource Identifier https://datatracker.ietf.org/doc/html/rfc3987 */
  workflowDefinition: IRI;
  description?: string;
  tags?: string[];
}

/**
 * Workflow Definition
 * A workflow definition
 * @example {"id":"54d7f816-3c2a-48e7-a631-27d5ec059cd1","workflowDefinition":"https://w3id.org/traceability#sima-steel-license","name":"CBP Steel Import with SIMA License","description":"CBP requires this workflow def for all Steel-related importing based on SIMA License","tags":["CBP","SIMA","Steel"]}
 */
export interface WorkflowDefinition {
  /** @example "123" */
  id: string;
  name: string;
  /** Internationalized Resource Identifier https://datatracker.ietf.org/doc/html/rfc3987 */
  workflowDefinition: IRI;
  description?: string;
  tags?: string[];
}

/**
 * Workflow Definitions
 * A list of workflow definitions
 * @example {"count":1,"page":0,"pageSize":10,"items":[{"id":"54d7f816-3c2a-48e7-a631-27d5ec059cd1","workflowDefinition":"https://w3id.org/traceability#sima-steel-license","name":"CBP Steel Import with SIMA License","description":"CBP requires this workflow def for all Steel-related importing based on SIMA License","tags":["CBP","SIMA","Steel"]}]}
 */
export interface WorkflowDefinitions {
  /** The total number of items */
  count: number;
  page: number;
  pageSize: number;
  items: WorkflowDefinition[];
}

/**
 * Update Workflow Definition
 * Updates to apply to a workflow definition
 * @example {"name":"CBP Steel Import with SIMA License","description":"CBP requires this workflow def for all Steel-related importing based on SIMA License","tags":["CBP","SIMA","Steel"]}
 */
export interface UpdateWorkflowDefinition {
  name?: string;
  description?: string;
  tags?: string[];
}

/**
 * DID Auth Presentation Request
 * @example {"presentation":{"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/traceability/v1"],"type":["VerifiablePresentation","TraceablePresentation"],"workflow":{"instance":["urn:uuid:f5fb6ce4-b0b1-41b8-89b0-331ni58b7ee0"],"definition":["https://w3id.org/traceability/#sima-steel-license"]},"holder":"did:key:z6MkkQ4Ft22W2Dp2SjWRSiUTbpFPJ2LAsyaFmvnCyyaGjL8X","verifiableCredential":[{"@context":["https://www.w3.org/2018/credentials/v1","https://w3id.org/traceability/v1"],"type":["VerifiableCredential","CertificateOfOriginCertificate"],"issuer":{"id":"did:key:z6MkkQ4Ft22W2Dp2SjWRSiUTbpFPJ2LAsyaFmvnCyyaGjL8X","name":"Transmute"},"credentialSubject":{"items":[{"type":"TradeLineItem","name":"Espresso Italiano","description":"Premium Prosumer Espresso Makers - Model Dolce","commodity":{"type":"Commodity","commodityCode":"851671","commodityCodeType":"HS"}}]},"name":"Certification of Origin","description":"Certification of Origin","issuanceDate":"2022-05-25T18:50:31.607Z","proof":{"type":"Ed25519Signature2018","created":"2022-05-25T18:50:34Z","verificationMethod":"did:key:z6MkkQ4Ft22W2Dp2SjWRSiUTbpFPJ2LAsyaFmvnCyyaGjL8X#z6MkkQ4Ft22W2Dp2SjWRSiUTbpFPJ2LAsyaFmvnCyyaGjL8X","proofPurpose":"assertionMethod","jws":"eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Fd6o6fKyf20EIwHSkVrKL1iyYO5AHi-Iuv9o9YSR5ETw9OllvqmF-XyMEuEHF5sV8gdVXWngd6Usaw7Mi_YYDA"}}]},"contactId":"95b46c34-8165-45f6-9e25-00c6289aa99"}
 */
export interface SendDidAuthPresentation {
  /** A JSON-LD Verifiable Presentation without a proof. */
  presentation?: Presentation;
  /** @example "95b46c34-8165-45f6-9e25-00c6289aa99" */
  contactId?: string;
}

/**
 * Scopes
 * All the current scopes
 * @example ["read:members"]
 */
export type Scopes = (
  | "read:activities"
  | "create:applications"
  | "read:applications"
  | "update:applications"
  | "delete:applications"
  | "read:contacts"
  | "create:contacts"
  | "update:contacts"
  | "delete:contacts"
  | "create:credentials"
  | "issue:credentials"
  | "derive:credentials"
  | "verify:credentials"
  | "read:credentials"
  | "update:credentials"
  | "revoke:credentials"
  | "delete:credentials"
  | "read:dids"
  | "resolve:dids"
  | "create:dids"
  | "update:dids"
  | "deactivate:dids"
  | "prove:presentations"
  | "verify:presentations"
  | "submit:presentations"
  | "update:presentations"
  | "read:presentations"
  | "delete:presentations"
  | "create:organizations"
  | "read:organizations"
  | "update:organizations"
  | "delete:organizations"
  | "read:members"
  | "update:members"
  | "invite:members"
  | "remove:members"
  | "read:mnemonics"
  | "create:mnemonics"
  | "update:mnemonics"
  | "delete:mnemonics"
  | "read:keys"
  | "derive:keys"
  | "update:keys"
  | "delete:keys"
  | "create:keys"
  | "create:workflow_instances"
  | "read:workflow_instances"
  | "update:workflow_instances"
  | "delete:workflow_instances"
  | "create:workflow_definitions"
  | "read:workflow_definitions"
  | "update:workflow_definitions"
  | "delete:workflow_definitions"
)[];

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Verifiable Data Platform
 * @version 1.0.
 * @contact <support@transmute.industries>
 *
 * API Documentation
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  oauth = {
    /**
     * @description This is the OAuth 2.0 grant that server processes use to access an API.  Use this endpoint to directly request an Access Token by using the Client's credentials (a Client ID and a Client Secret).
     *
     * @tags Oauth
     * @name TokenCreate
     * @summary Client Credentials Flow
     * @request POST:/oauth/token
     */
    tokenCreate: (
      data: {
        /**
         * Denotes the flow you are using. For Client Credentials use `client_credentials`.
         * @example "client_credentials"
         */
        grant_type: string;
        /**
         * Your application's Client ID.
         * @example "YOUR_CLIENT_ID"
         */
        client_id: string;
        /**
         * Your application's Client Secret.
         * @example "YOUR_CLIENT_SECRET"
         */
        client_secret: string;
        /**
         * The unique identifier of the target API you want to access.
         * @example "https://platform.transmute.industries"
         */
        audience: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * JSON Web Token.
           * @example "eyJz93a...k4laUWw"
           */
          access_token?: string;
          /**
           * Type of access token used.
           * @example "Bearer"
           */
          token_type?: string;
          /**
           * The remaining time since created until the token expires in seconds.
           * @example 86400
           */
          expires_in?: number;
        },
        any
      >({
        path: `/oauth/token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  did = {
    /**
     * @description Gets DIDs.
     *
     * @tags Identifiers
     * @name GetDids
     * @summary Gets DIDs
     * @request GET:/did/identifiers
     * @secure
     */
    getDids: (params: RequestParams = {}) =>
      this.request<
        ListResponse & {
          items?: {
            /** Universally Unique IDentifier according to http://tools.ietf.org/html/rfc4122 */
            id?: UUID;
            /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
            did?: DID;
            tags?: "Default"[];
            /** @example [{"id":"e9aa5a52-0748-4765-a45c-09753355142e","content":"mnemonic","createdBy":{"id":"621d2e03df8dad1e4d5636f7","type":"authenticated_user","role":"organization_admin"},"updatedBy":{"id":"621d2e03df8dad1e4d5636f8","type":"authenticated_user","role":"organization_admin"},"createdAt":"2022-02-28T19:41:50.967Z","updatedAt":"2022-02-28T19:41:50.967Z","value":{}},{"id":"8dc75982-c13d-4670-abb8-9fb4f96db42a","content":"private_key","createdBy":{"id":"621d2e03df8dad1e4d5636f9","type":"authenticated_user","role":"organization_admin"},"updatedBy":{"id":"621d2e03df8dad1e4d5636fa","type":"authenticated_user","role":"organization_admin"},"createdAt":"2022-02-28T19:41:51.498Z","updatedAt":"2022-02-28T19:41:51.498Z","value":{}}] */
            secrets?: object[];
          }[];
        },
        any
      >({
        path: `/did/identifiers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Makes a DID the organization's default DID.
     *
     * @tags Identifiers
     * @name MakeDidDefault
     * @summary Set DID as default
     * @request PUT:/did/{DIDId}/make-default
     * @secure
     */
    makeDidDefault: (didId: UUID, params: RequestParams = {}) =>
      this.request<
        GenericResponse,
        | Record<string, any>
        | {
            /**
             * Error message
             * @example "Internal error"
             */
            message?: string;
          }
      >({
        path: `/did/${didId}/make-default`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create, Update, Resolve or Deactivate a decentralized identifier. See [DID Core Method Operations.](https://www.w3.org/TR/did-core/#method-operations)
     *
     * @tags Identifiers
     * @name DidMethodOperations
     * @summary DID Method Operations
     * @request POST:/did/method/operations
     * @secure
     */
    didMethodOperations: (
      data:
        | {
            type?: "create";
            method?: "key";
            parameters?: {
              crv?: string;
              path?: string;
            };
          }
        | {
            type?: "resolve";
            method?: "key";
            parameters?: {
              /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
              did?: DID;
            };
          }
        | {
            type?: "update";
            method?: "key";
            parameters?: {
              /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
              did?: DID;
              [key: string]: any;
            };
          }
        | {
            type?: "deactivate";
            method?: "key";
            parameters?: {
              /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
              id?: DID;
            };
          }
        | ({
            type?: "create";
            method?: "key";
            parameters?: {
              crv?: string;
              path?: string;
            };
          } & {
            type?: "resolve";
            method?: "key";
            parameters?: {
              /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
              did?: DID;
            };
          } & {
            type?: "update";
            method?: "key";
            parameters?: {
              /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
              did?: DID;
              [key: string]: any;
            };
          } & {
            type?: "deactivate";
            method?: "key";
            parameters?: {
              /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
              id?: DID;
            };
          }),
      params: RequestParams = {},
    ) =>
      this.request<DIDDocument, Record<string, any>>({
        path: `/did/method/operations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  identifiers = {
    /**
     * @description Get a DID's latest keys, services and capabilities
     *
     * @tags Interoperability
     * @name Resolve
     * @summary Resolve
     * @request GET:/identifiers/{did}
     * @secure
     */
    resolve: (did: DID, params: RequestParams = {}) =>
      this.request<
        {
          /** A DID Document. */
          didDocument?: DIDDocument;
        },
        {
          /**
           * Error message
           * @example "Internal error"
           */
          message?: string;
        }
      >({
        path: `/identifiers/${did}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  contacts = {
    /**
     * @description Create a contact
     *
     * @tags Contacts
     * @name CreateContact
     * @summary Create a contact
     * @request POST:/contacts
     * @secure
     */
    createContact: (
      data: {
        /** A new contact to be created */
        contact?: CreateContact;
      },
      params: RequestParams = {},
    ) =>
      this.request<Contact, any>({
        path: `/contacts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get contacts.
     *
     * @tags Contacts
     * @name GetContacts
     * @summary Get contacts
     * @request GET:/contacts
     * @secure
     */
    getContacts: (params: RequestParams = {}) =>
      this.request<Contacts, Record<string, any>>({
        path: `/contacts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a contact
     *
     * @tags Contacts
     * @name UpdateContact
     * @summary Update a contact
     * @request PUT:/contacts/{contactId}
     * @secure
     */
    updateContact: (
      contactId: string,
      data: {
        /** A new contact to be created */
        contact?: UpdateContact;
      },
      params: RequestParams = {},
    ) =>
      this.request<Contact, any>({
        path: `/contacts/${contactId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a Contact
     *
     * @tags Contacts
     * @name DeleteContact
     * @summary Remove a contact
     * @request DELETE:/contacts/{contactId}
     * @secure
     */
    deleteContact: (contactId: string, params: RequestParams = {}) =>
      this.request<
        {
          success?: boolean;
        },
        Record<string, any>
      >({
        path: `/contacts/${contactId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  credentials = {
    /**
     * @description This endpoint is compliant with https://w3c-ccg.github.io/vc-api/issuer.html#operation/issueCredential.
     *
     * @tags Interoperability
     * @name IssueCredential
     * @summary Issue a credential
     * @request POST:/credentials/issue
     * @secure
     */
    issueCredential: (data: IssueCredentialRequest, params: RequestParams = {}) =>
      this.request<VerifiableCredential, void>({
        path: `/credentials/issue`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the status of an issued credential. This endpoint is compliant with https://w3c-ccg.github.io/vc-api/issuer.html#operation/updateCredentialStatus.
     *
     * @tags Interoperability
     * @name UpdateCredentialStatus
     * @summary Updates the status of an issued credential
     * @request POST:/credentials/status
     * @secure
     */
    updateCredentialStatus: (
      data: {
        credentialId?: string;
        credentialStatus?: {
          type?: string;
          status?: "0" | "1";
        }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          revoked?: boolean;
        },
        void
      >({
        path: `/credentials/status`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description To support selective disclosure of statements.  This endpoint is compliant with https://w3c-ccg.github.io/vc-api/holder.html#operation/deriveCredential.  This endpoint is experimental, does not store the credential, does not use request input `options.nonce`,  and only supports signature https://w3id.org/security/suites/bls12381-2020.
     *
     * @tags Interoperability
     * @name DeriveCredential
     * @summary Derive a Verifiable Credential
     * @request POST:/credentials/derive
     * @secure
     */
    deriveCredential: (data: DeriveCredentialRequest, params: RequestParams = {}) =>
      this.request<VerifiableCredential & object, any>({
        path: `/credentials/derive`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint is compliant with https://w3c-ccg.github.io/vc-api/verifier.html#operation/verifyCredential.  This endpoint does not verify the "Transmute Integrity Check" or use request input `options`.
     *
     * @tags Interoperability
     * @name VerifyOrganizationCredential
     * @summary Verify a Verifiable Credential
     * @request POST:/credentials/verify
     * @secure
     */
    verifyOrganizationCredential: (data: VerifyCredentialRequest, params: RequestParams = {}) =>
      this.request<VerificationResult, any>({
        path: `/credentials/verify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Takes a verifiable credential and stores it.
     *
     * @tags Credentials
     * @name CreateCredential
     * @summary Create a Credential
     * @request POST:/credentials
     * @secure
     */
    createCredential: (data: VerifiableCredential, params: RequestParams = {}) =>
      this.request<AugmentedVerifiableCredentialWrapper, any>({
        path: `/credentials`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get Verifiable Credentials.
     *
     * @tags Credentials
     * @name GetCredentials
     * @summary Get Credentials
     * @request GET:/credentials
     * @secure
     */
    getCredentials: (params: RequestParams = {}) =>
      this.request<
        {
          /** Internationalized Resource Identifier https://datatracker.ietf.org/doc/html/rfc3987 */
          id?: IRI;
          /** A Verifiable Credential */
          verifiableCredential?: VerifiableCredential;
          /** @example "private" */
          visibility?: "private" | "public'";
          createdAt?: Date;
        }[],
        any
      >({
        path: `/credentials`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a Verifiable Credential by the id that is in the database collection.   This is also for a publicly shared credential.
     *
     * @tags Credentials
     * @name GetCredential
     * @summary Get a Credential
     * @request GET:/credentials/{credentialId}
     * @secure
     */
    getCredential: (credentialId: string, params: RequestParams = {}) =>
      this.request<AugmentedVerifiableCredentialWrapper, any>({
        path: `/credentials/${credentialId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a credential.
     *
     * @tags Credentials
     * @name DeleteCredential
     * @summary Deletes a credential
     * @request DELETE:/credentials/{credentialId}
     * @secure
     */
    deleteCredential: (credentialId: string, params: RequestParams = {}) =>
      this.request<
        {
          success?: boolean;
        },
        Record<string, any>
      >({
        path: `/credentials/${credentialId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Performs a list of checks on a Verifiable Credential: Activation, Expiration, Signature,  Revocation, and Transmute Integrity Check. This is also for a publicly shared credential.
     *
     * @tags Credentials
     * @name VerifyCredential
     * @summary Performs a list of checks on a verifiable credential
     * @request GET:/credentials/{credentialId}/verify
     * @secure
     */
    verifyCredential: (credentialId: string, params: RequestParams = {}) =>
      this.request<TransmuteVerificationResult, any>({
        path: `/credentials/${credentialId}/verify`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Revokes or unrevokes a credential's status.  There will be a specific revocation list credential in the database collection  for each organization. The credential if revocable will have an attribute credentialStatus with a revocationListIndex pointing  to whether that credential is currently revoked or not.
     *
     * @tags Credentials
     * @name UpdateCredentialStatus2
     * @summary Revoke/Unrevoke credential
     * @request PATCH:/credentials/{credentialId}/status
     * @originalName updateCredentialStatus
     * @duplicate
     * @secure
     */
    updateCredentialStatus2: (credentialId: string, data: UpdateCredentialStatus, params: RequestParams = {}) =>
      this.request<
        UpdateCredentialStatus,
        | Record<string, any>
        | {
            /**
             * Error message
             * @example "Internal error"
             */
            message?: string;
          }
      >({
        path: `/credentials/${credentialId}/status`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets the visibility of a Verifiable Credential which will be public, or private.
     *
     * @tags Credentials
     * @name GetCredentialVisibility
     * @summary Gets the visibility of a Verifiable Credential
     * @request GET:/credentials/{credentialId}/visibility
     * @secure
     */
    getCredentialVisibility: (credentialId: string, params: RequestParams = {}) =>
      this.request<
        any,
        | Record<string, any>
        | {
            /**
             * Error message
             * @example "Internal error"
             */
            message?: string;
          }
      >({
        path: `/credentials/${credentialId}/visibility`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Changes the visibility of a Verifiable Credential to public, or private. Anyone with the link can access a public credential.
     *
     * @tags Credentials
     * @name ChangeCredentialVisibility
     * @summary Changes the visibility of a Verifiable Credential
     * @request PATCH:/credentials/{credentialId}/visibility
     * @secure
     */
    changeCredentialVisibility: (
      credentialId: string,
      data: {
        visibility: "public" | "private";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        any,
        | Record<string, any>
        | {
            /**
             * Error message
             * @example "Internal error"
             */
            message?: string;
          }
      >({
        path: `/credentials/${credentialId}/visibility`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  organizations = {
    /**
     * @description Begin a Verifiable Presentation. W3C Traceability Interop compliant endpoint.
     *
     * @tags Interoperability
     * @name NotifyPresentationAvailable
     * @summary Initiate a presentation
     * @request POST:/organizations/{organizationId}/presentations/available
     */
    notifyPresentationAvailable: (
      organizationId: string,
      data: NotifyPresentationAvailableRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        NotifyPresentationAvailableResponse,
        | Record<string, any>
        | {
            /**
             * Error message
             * @example "Internal error"
             */
            message?: string;
          }
      >({
        path: `/organizations/${organizationId}/presentations/available`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Complete a Verifiable Presentation. Present from a client holder to a server holder, for the purpose of verification and storage. W3C Traceability Interop compliant endpoint.
     *
     * @tags Interoperability
     * @name StorePresentation
     * @summary Complete a presentation
     * @request POST:/organizations/{organizationId}/presentations/submissions
     */
    storePresentation: (organizationId: string, data: any, params: RequestParams = {}) =>
      this.request<
        object,
        | Record<string, any>
        | void
        | {
            /**
             * Error message
             * @example "Internal error"
             */
            message?: string;
          }
      >({
        path: `/organizations/${organizationId}/presentations/submissions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Submit a Presentation with OAuth authentication. W3C Traceability Interop compliant endpoint.
     *
     * @tags Interoperability
     * @name SubmitPresentationWithOAuth2Security
     * @summary Submit a presentation
     * @request POST:/organizations/{organizationId}/presentations
     * @secure
     */
    submitPresentationWithOAuth2Security: (
      organizationId: string,
      data: {
        "@context": LdContext;
        /** @example ["VerifiablePresentation","TraceablePresentation"] */
        type?: string[];
        /** Provides a definition and instance for a given workflow */
        workflow?: {
          /** @example ["urn:uuid:f5fb6ce4-b0b1-41b8-89b0-331ni58b7ee0"] */
          instance?: string[];
          /** @example ["https://w3id.org/traceability/#sima-steel-license"] */
          definition?: string[];
        };
        /** Decentralized identifier https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers */
        holder?: DID;
        /** The Verifiable Credentials */
        verifiableCredential?: VerifiableCredential[];
        /** The signed proof for the presentation */
        proof?: LinkedDataProof;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example true */
          submitted?: string;
        },
        | Record<string, any>
        | object
        | void
        | {
            /**
             * Error message
             * @example "Internal error"
             */
            message?: string;
          }
      >({
        path: `/organizations/${organizationId}/presentations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get Organizations
     *
     * @tags Organizations
     * @name GetOrganizations
     * @summary Get Organizations
     * @request GET:/organizations
     * @secure
     */
    getOrganizations: (params: RequestParams = {}) =>
      this.request<Organizations, any>({
        path: `/organizations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get an Organization
     *
     * @tags Organizations
     * @name GetOrganization
     * @summary Get Organization
     * @request GET:/organizations/{organizationId}
     * @secure
     */
    getOrganization: (organizationId: string, params: RequestParams = {}) =>
      this.request<Organization, Record<string, any>>({
        path: `/organizations/${organizationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get organization did:web DID Document
     *
     * @tags Identifiers
     * @name GetOrganizationDidWeb
     * @summary Get Organization's did:web
     * @request GET:/organizations/{organizationId}/did.json
     * @secure
     */
    getOrganizationDidWeb: (organizationId: string, params: RequestParams = {}) =>
      this.request<DIDDocument, any>({
        path: `/organizations/${organizationId}/did.json`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  presentations = {
    /**
     * @description This endpoint is compliant with https://w3c-ccg.github.io/vc-api/verifier.html#operation/verifyPresentation. Proves a presentation and returns it in the response body.
     *
     * @tags Interoperability
     * @name ProvePresentation
     * @summary Prove a presentation
     * @request POST:/presentations/prove
     * @secure
     */
    provePresentation: (data: ProvePresentationRequest, params: RequestParams = {}) =>
      this.request<
        VerifiablePresentation,
        | Record<string, any>
        | {
            /**
             * Error message
             * @example "Internal error"
             */
            message?: string;
          }
      >({
        path: `/presentations/prove`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint is compliant with https://w3c-ccg.github.io/vc-api/verifier.html#operation/verifyPresentation.   Note that this endpoint requires knowledge of the domain and challenge provisioned by the verifier to the presenter.  The platform always makes this check automatically when handling "presentation/submissions", keeping track of all authenticated domain and challenge pairs.
     *
     * @tags Interoperability
     * @name VerifyPresentation
     * @summary Verify a presentation
     * @request POST:/presentations/verify
     * @secure
     */
    verifyPresentation: (data: VerifyPresentationRequest, params: RequestParams = {}) =>
      this.request<VerifyPresentationResponse, Record<string, any>>({
        path: `/presentations/verify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Send a presentation to a contact using a VDP internal contact ID.
     *
     * @tags Presentations
     * @name SendDidAuthPresentation
     * @summary Send a DID Auth Presentation
     * @request POST:/presentations/send-did-auth-presentation
     */
    sendDidAuthPresentation: (data: SendDidAuthPresentation, params: RequestParams = {}) =>
      this.request<
        object,
        | Record<string, any>
        | void
        | {
            /**
             * Error message
             * @example "Internal error"
             */
            message?: string;
          }
      >({
        path: `/presentations/send-did-auth-presentation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets verifiable presentation submissions this organization has received.
     *
     * @tags Presentations
     * @name GetPresentationsSharedWithMe
     * @summary Get presentations received
     * @request GET:/presentations/received
     * @secure
     */
    getPresentationsSharedWithMe: (params: RequestParams = {}) =>
      this.request<
        {
          /** A list of presentation submissions, used by received and sent. */
          acceptedPresentations?: PresentationSubmissions;
          /** A list of presentation submissions, used by received and sent. */
          pendingPresentations?: PresentationSubmissions;
          /** A list of presentation submissions, used by received and sent. */
          rejectedPresentations?: PresentationSubmissions;
        },
        Record<string, any>
      >({
        path: `/presentations/received`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets presentations this organization has sent.
     *
     * @tags Presentations
     * @name GetPresentationsSharedWithOthers
     * @summary Get presentations sent
     * @request GET:/presentations/sent
     * @secure
     */
    getPresentationsSharedWithOthers: (params: RequestParams = {}) =>
      this.request<PresentationSubmissions, Record<string, any>>({
        path: `/presentations/sent`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a submission by the id belonging to that organization.
     *
     * @tags Presentations
     * @name DeleteSubmission
     * @summary Delete a submission
     * @request DELETE:/presentations/{submissionId}
     * @secure
     */
    deleteSubmission: (submissionId: string, params: RequestParams = {}) =>
      this.request<void, Record<string, any>>({
        path: `/presentations/${submissionId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  applications = {
    /**
     * @description Gets Applications.
     *
     * @tags Applications
     * @name GetApplications
     * @summary Gets Applications
     * @request GET:/applications
     * @secure
     */
    getApplications: (params: RequestParams = {}) =>
      this.request<Applications, any>({
        path: `/applications`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get an Application by id.
     *
     * @tags Applications
     * @name GetApplication
     * @summary Get an Application
     * @request GET:/applications/{applicationId}
     * @secure
     */
    getApplication: (applicationId: string, params: RequestParams = {}) =>
      this.request<Application, any>({
        path: `/applications/${applicationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update application only by the non authentication fields currently just name and description.
     *
     * @tags Applications
     * @name UpdateApplication
     * @summary Update application attributes
     * @request PUT:/applications/{applicationId}
     * @secure
     */
    updateApplication: (applicationId: string, data: UpdateApplication, params: RequestParams = {}) =>
      this.request<Application, Record<string, any>>({
        path: `/applications/${applicationId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  activities = {
    /**
     * @description Get organization activities
     *
     * @tags Activities
     * @name ActivitiesList
     * @summary Get Organization's Activities
     * @request GET:/activities
     * @secure
     */
    activitiesList: (params: RequestParams = {}) =>
      this.request<Activities, any>({
        path: `/activities`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  batches = {
    /**
     * @description Extension of the W3C VC HTTP API issuance endpoint, allowing for batch issuance of multiple verifiable credentials.
     *
     * @tags Batches
     * @name CreateBatch
     * @summary Issue Batch
     * @request POST:/batches
     * @secure
     */
    createBatch: (data: BatchCreate, params: RequestParams = {}) =>
      this.request<Batch, any>({
        path: `/batches`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets all batches.
     *
     * @tags Batches
     * @name GetBatches
     * @summary Get Batches
     * @request GET:/batches
     * @secure
     */
    getBatches: (params: RequestParams = {}) =>
      this.request<Batches, Record<string, any>>({
        path: `/batches`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Validates a batch of credentials without issuing and storing them.
     *
     * @tags Batches
     * @name ValidateBatch
     * @summary Validate Batch
     * @request POST:/batches/validate
     * @secure
     */
    validateBatch: (data: BatchCreate, params: RequestParams = {}) =>
      this.request<Batch, any>({
        path: `/batches/validate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all credentials that have the same batch id.
     *
     * @tags Batches
     * @name GetBatch
     * @summary Get Batch
     * @request GET:/batches/{batchId}
     * @secure
     */
    getBatch: (batchId: string, params: RequestParams = {}) =>
      this.request<Batch, Record<string, any>>({
        path: `/batches/${batchId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  marketplace = {
    /**
     * @description Get marketplace templates.
     *
     * @tags Marketplace
     * @name GetMarketplaceTemplates
     * @summary Get marketplace templates
     * @request GET:/marketplace/templates
     * @secure
     */
    getMarketplaceTemplates: (params: RequestParams = {}) =>
      this.request<MarketplaceTemplates, Record<string, any>>({
        path: `/marketplace/templates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a marketplace template.
     *
     * @tags Marketplace
     * @name GetMarketplaceTemplate
     * @summary Get a marketplace template
     * @request GET:/marketplace/templates/{templateId}
     * @secure
     */
    getMarketplaceTemplate: (templateId: string, params: RequestParams = {}) =>
      this.request<MarketplaceTemplate, Record<string, any>>({
        path: `/marketplace/templates/${templateId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  mnemonics = {
    /**
     * @description Gets the list of non-encrypted attributes for mnemonics for an organization
     *
     * @tags Mnemonics
     * @name GetMnemonics
     * @summary Get mnemonics
     * @request GET:/mnemonics
     * @secure
     */
    getMnemonics: (params: RequestParams = {}) =>
      this.request<Mnemonics, Record<string, any>>({
        path: `/mnemonics`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stores a provided mnemonic for an organization
     *
     * @tags Mnemonics
     * @name CreateMnemonic
     * @summary Store a mnemonic
     * @request POST:/mnemonics
     * @secure
     */
    createMnemonic: (data: CreateMnemonic, params: RequestParams = {}) =>
      this.request<Mnemonic, any>({
        path: `/mnemonics`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a mnemonic.
     *
     * @tags Mnemonics
     * @name GetMnemonic
     * @summary Get a mnemonic
     * @request GET:/mnemonics/{mnemonicId}
     * @secure
     */
    getMnemonic: (mnemonicId: UUID, params: RequestParams = {}) =>
      this.request<Mnemonic, Record<string, any>>({
        path: `/mnemonics/${mnemonicId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a mnemonic.
     *
     * @tags Mnemonics
     * @name UpdateMnemonic
     * @summary Update a mnemonic
     * @request PUT:/mnemonics/{mnemonicId}
     * @secure
     */
    updateMnemonic: (mnemonicId: string, data: UpdateMnemonic, params: RequestParams = {}) =>
      this.request<Mnemonic, Record<string, any>>({
        path: `/mnemonics/${mnemonicId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a mnemonic.
     *
     * @tags Mnemonics
     * @name DeleteMnemonic
     * @summary Delete a mnemonic
     * @request DELETE:/mnemonics/{mnemonicId}
     * @secure
     */
    deleteMnemonic: (mnemonicId: string, params: RequestParams = {}) =>
      this.request<object, Record<string, any>>({
        path: `/mnemonics/${mnemonicId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets the list of non-encrypted attributes for private keys for an organization and mnemonic
     *
     * @tags Private Key
     * @name GetPrivateKeysForMnemonic
     * @summary Get private keys for mnemonic
     * @request GET:/mnemonics/{mnemonicId}/keys
     * @secure
     */
    getPrivateKeysForMnemonic: (mnemonicId: string, params: RequestParams = {}) =>
      this.request<PrivateKeys, Record<string, any>>({
        path: `/mnemonics/${mnemonicId}/keys`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  keys = {
    /**
     * @description Gets the list of non-encrypted attributes for private keys for an organization
     *
     * @tags Private Key
     * @name GetPrivateKeys
     * @summary Get private keys
     * @request GET:/keys
     * @secure
     */
    getPrivateKeys: (params: RequestParams = {}) =>
      this.request<PrivateKeys, Record<string, any>>({
        path: `/keys`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a private key's name, description or tags.
     *
     * @tags Private Key
     * @name UpdatePrivateKey
     * @summary Updates a private key
     * @request PATCH:/keys/{privateKeyId}
     * @secure
     */
    updatePrivateKey: (privateKeyId: string, data: UpdatePrivateKey, params: RequestParams = {}) =>
      this.request<PrivateKey, any>({
        path: `/keys/${privateKeyId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a private key.
     *
     * @tags Private Key
     * @name DeletePrivateKey
     * @summary Deletes a private key
     * @request DELETE:/keys/{privateKeyId}
     * @secure
     */
    deletePrivateKey: (privateKeyId: string, params: RequestParams = {}) =>
      this.request<object, Record<string, any>>({
        path: `/keys/${privateKeyId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Derive a private key.
     *
     * @tags Private Key
     * @name DerivePrivateKey
     * @summary Derive a private key
     * @request POST:/keys/derive
     * @secure
     */
    derivePrivateKey: (data: DerivePrivateKey, params: RequestParams = {}) =>
      this.request<PrivateKey, any>({
        path: `/keys/derive`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate a private key.
     *
     * @tags Private Key
     * @name GeneratePrivateKey
     * @summary Generate a private key
     * @request POST:/keys/generate
     * @secure
     */
    generatePrivateKey: (data: GeneratePrivateKey, params: RequestParams = {}) =>
      this.request<PrivateKey, any>({
        path: `/keys/generate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Recover a private key.
     *
     * @tags Private Key
     * @name RecoverPrivateKey
     * @summary Recover a private key
     * @request POST:/keys/recover
     * @secure
     */
    recoverPrivateKey: (data: RecoverPrivateKey, params: RequestParams = {}) =>
      this.request<PrivateKey, any>({
        path: `/keys/recover`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Import a private key.
     *
     * @tags Private Key
     * @name ImportPrivateKey
     * @summary Import a private key
     * @request POST:/keys/import
     * @secure
     */
    importPrivateKey: (data: ImportPrivateKey, params: RequestParams = {}) =>
      this.request<PrivateKey, any>({
        path: `/keys/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  workflows = {
    /**
     * @description Creates a workflow instance for an organization.
     *
     * @tags Workflow Instances
     * @name CreateWorkflowInstance
     * @summary Create Workflow Instance
     * @request POST:/workflows/instances
     * @secure
     */
    createWorkflowInstance: (data: CreateWorkflowInstance, params: RequestParams = {}) =>
      this.request<WorkflowInstance, any>({
        path: `/workflows/instances`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets the list of workflow instances for an organization
     *
     * @tags Workflow Instances
     * @name GetWorkflowInstances
     * @summary Get workflow instances
     * @request GET:/workflows/instances
     * @secure
     */
    getWorkflowInstances: (params: RequestParams = {}) =>
      this.request<WorkflowInstances, Record<string, any>>({
        path: `/workflows/instances`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a workflow instance
     *
     * @tags Workflow Instances
     * @name GetWorkflowInstance
     * @summary Get a workflow instance
     * @request GET:/workflows/instances/{workflowInstanceId}
     * @secure
     */
    getWorkflowInstance: (workflowInstanceId: UUID, params: RequestParams = {}) =>
      this.request<WorkflowInstance, Record<string, any>>({
        path: `/workflows/instances/${workflowInstanceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a workflow instance.
     *
     * @tags Workflow Instances
     * @name UpdateWorkflowInstance
     * @summary Update a workflow instance
     * @request PUT:/workflows/instances/{workflowInstanceId}
     * @secure
     */
    updateWorkflowInstance: (workflowInstanceId: string, data: UpdateWorkflowInstance, params: RequestParams = {}) =>
      this.request<WorkflowInstance, Record<string, any>>({
        path: `/workflows/instances/${workflowInstanceId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a workflow instances.
     *
     * @tags Workflow Instances
     * @name DeleteWorkflowInstance
     * @summary Delete a workflow instance
     * @request DELETE:/workflows/instances/{workflowInstanceId}
     * @secure
     */
    deleteWorkflowInstance: (workflowInstanceId: string, params: RequestParams = {}) =>
      this.request<object, Record<string, any>>({
        path: `/workflows/instances/${workflowInstanceId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a workflow definition for an organization.
     *
     * @tags Workflow Definitions
     * @name CreateWorkflowDefinition
     * @summary Create Workflow Definition
     * @request POST:/workflows/definitions
     * @secure
     */
    createWorkflowDefinition: (data: CreateWorkflowDefinition, params: RequestParams = {}) =>
      this.request<WorkflowDefinition, any>({
        path: `/workflows/definitions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets the list of workflow definitions for an organization
     *
     * @tags Workflow Definitions
     * @name GetWorkflowDefinitions
     * @summary Get workflow definitions
     * @request GET:/workflows/definitions
     * @secure
     */
    getWorkflowDefinitions: (params: RequestParams = {}) =>
      this.request<WorkflowDefinitions, Record<string, any>>({
        path: `/workflows/definitions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a workflow definition
     *
     * @tags Workflow Definitions
     * @name GetWorkflowDefinition
     * @summary Get a workflow defintion
     * @request GET:/workflows/definitions/{workflowDefinitionId}
     * @secure
     */
    getWorkflowDefinition: (workflowDefinitionId: UUID, params: RequestParams = {}) =>
      this.request<WorkflowDefinition, Record<string, any>>({
        path: `/workflows/definitions/${workflowDefinitionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a workflow definition.
     *
     * @tags Workflow Definitions
     * @name UpdateWorkflowDefinition
     * @summary Update a workflow definition
     * @request PUT:/workflows/definitions/{workflowDefinitionId}
     * @secure
     */
    updateWorkflowDefinition: (
      workflowDefinitionId: string,
      data: UpdateWorkflowDefinition,
      params: RequestParams = {},
    ) =>
      this.request<WorkflowDefinition, Record<string, any>>({
        path: `/workflows/definitions/${workflowDefinitionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a workflow definitions.
     *
     * @tags Workflow Definitions
     * @name DeleteWorkflowDefinition
     * @summary Delete a workflow definition
     * @request DELETE:/workflows/definitions/{workflowDefinitionId}
     * @secure
     */
    deleteWorkflowDefinition: (workflowDefinitionId: string, params: RequestParams = {}) =>
      this.request<object, Record<string, any>>({
        path: `/workflows/definitions/${workflowDefinitionId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
