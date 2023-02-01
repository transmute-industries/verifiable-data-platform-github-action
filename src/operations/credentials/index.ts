import { getCredentials } from "./getCredentials";
import { createCredential } from "./createCredential";
import { issueCredential } from "./issueCredential";
import { deleteCredential } from './deleteCredential';
import { verifyCredential } from './verifyCredential';
import { getCredentialVisibility } from './getCredentialVisibility';
import { changeCredentialVisibility } from './changeCredentialVisibility';
import { getCredential } from './getCredential';
import { updateCredentialStatus } from './updateCredentialStatus';
export default {
    getCredentials,
    getCredential,
    createCredential,
    issueCredential,
    verifyCredential,
    deleteCredential,
    changeCredentialVisibility,
    updateCredentialStatus,
    getCredentialVisibility
}