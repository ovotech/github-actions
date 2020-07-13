# Commepnt PR action

This action allows commenting PR, optionally removing previous version of comment


## Inputs

### `body`

Comment body to publish.

### `dedupe_token`

If set, deletes existing comments containing `dedupe_token`

## Outputs

None

## Example usage

uses: ovotech/github-actions/comment-pr@master
with:
  body: |
    Comment header
    Publish this comment
  dedupe_token: Comment header
  
