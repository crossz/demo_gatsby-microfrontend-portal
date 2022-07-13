# Microfrontend with Gatsby

**Yarn Workspace** will be used to organize these packages.


## Directory Structure
In packages:
1. site - main entry
2. profile - a micro frontend, which is extracted from same auth0 demo with `site`. See ref 2.
3. theme1 - from gatsby.js v2 microfrontend demo, but got upgraded to v4, with some old gatsby.js plugins obsoleted and removed.
4. theme2 - original gatsby.js v2 microfrontend demo, but not used in current demo.


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

To run django background, see ref 3.
```
python manage.py runserver 0.0.0.0:6060
```

## TODO

- [x] external-api page 的 reload 后保持登录状态
- [ ] theme1 page 的 reload 后保持登录状态



## Reference:
1. Gatsby.js Micro Frontend
https://www.youtube.com/watch?v=0Ta-awtLZTs&list=FLkbjUaRW6A-Z38GRUW3eg-w&index=7

2. Auth0's demo
前端:
https://auth0.com/developers/hub/code-samples/spa/react-typescript/basic-authentication

后端: 
https://auth0.com/developers/hub/code-samples/api/django-python/basic-authorization

3. Backend repo of Auth0's demo
https://github.com/crossz/demo_gatsby-microfrontend-django-backend