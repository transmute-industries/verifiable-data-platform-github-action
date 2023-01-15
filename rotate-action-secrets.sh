source $1

gh secret set ORGANIZATION_DID_WEB --body "$ORGANIZATION_DID_WEB"
gh secret set TOKEN_AUDIENCE --body "$TOKEN_AUDIENCE"
gh secret set TOKEN_ENDPOINT --body "$TOKEN_ENDPOINT"
gh secret set API_BASE_URL --body "$API_BASE_URL"
gh secret set CLIENT_ID --body "$CLIENT_ID"
gh secret set CLIENT_SECRET --body "$CLIENT_SECRET"