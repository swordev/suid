# Contributing

## Git flow

1. [Fork](https://github.com/swordev/suid/fork) this repository and clone it.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and create the changeset file: `pnpm changeset`.
4. Add your changes: `git add .`
5. Commit your changes: `git commit -m '<commit_message>'`.
6. Push to the original branch: `git push origin <branch_name>`.
7. Create the pull request.

## Adding MUI components

```sh
pnpm scripts sync-material-source
pnpm codemod mui2suid -h
```
