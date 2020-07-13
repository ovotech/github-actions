# Commepnt PR action

This action allows commenting PR, optionally removing previous version of comment


## Inputs

### `body`

Comment body to publish. Literal `\n` will be replaced with newline.

### `dedupe_token`

If set, deletes existing comments containing `dedupe_token`

## Outputs

None

## Example usage

uses: ovotech/github-actions/comment-pr@master
with:
  body: Publish this comment
