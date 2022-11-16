# Contributing

## Git flow

1. [Fork](https://github.com/swordev/suid/fork) this repository with all branches.
2. Clone the `develop` branch: `git clone https://github.com/your_name/suid -b develop`.
3. Create a branch: `git checkout -b <branch_name>`.
4. Make your changes and create the changeset file: `pnpm changeset`.
5. Add your changes: `git add .`
6. Commit your changes: `git commit -m '<commit_message>'`.
7. Push to the original branch: `git push origin <branch_name>`.
8. Create the pull request.

## Adding MUI components

```sh
pnpm scripts sync-material-source
pnpm codemod mui2suid -h
```
