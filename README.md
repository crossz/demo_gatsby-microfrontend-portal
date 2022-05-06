# Microfrontend with Gatsby

**Yarn Workspace** will be used to organize these packages.

## Yarn Add for packages

To install 'gatsby-theme-1' and others under 'site'
```
yarn workspace site add gatsby-theme-1@^1

# 'site' add dependencies
yarn workspace site add gatsby react react-dom

# 'theme-1' andd PEER dependencies
yarn workspace gatsby-theme-1 add -P react react-dom gatsby
```


To run 'yarn develop' for 'site' package
```
yarn workspace site develop
```

To get the info about current Workspace
```
yarn workspaces info
```

## Reference:
https://www.youtube.com/watch?v=0Ta-awtLZTs&list=FLkbjUaRW6A-Z38GRUW3eg-w&index=7
