import { issueCredential } from "../credentials/issueCredential";
import { resolve } from './resolve';
import { updateCredentialStatus } from "./updateCredentialStatus";
import { deriveCredential } from "./deriveCredential";
import { verifyOrganizationCredential } from "./verifyOrganizationCredential";
import { notifyPresentationAvailable } from "../presentations/notifyPresentationAvailable";
import { provePresentation } from "../presentations/provePresentation";
import { storePresentation } from "../presentations/storePresentation";
import { verifyPresentation } from "../presentations/verifyPresentation";
import { submitPresentationWithOAuth2Security } from "../presentations/submitPresentationWithOAuth2Security";
export default {
    issueCredential,
    resolve,
    updateCredentialStatus,
    deriveCredential,
    verifyOrganizationCredential,
    notifyPresentationAvailable,
    provePresentation,
    storePresentation,
    verifyPresentation,
    submitPresentationWithOAuth2Security
}