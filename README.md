# Testlio frontend linting configuration

*Code is your best documentation*

## Usage
Refer to orignal eslint documentation:  
http://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config

Name of the config: `@testlio/eslint-config-testlio-frontend`  

## Known Issues
With the latest version of eslint `indent` rule is a bit broken for JSX.  
See the following issue: [#8832](https://github.com/eslint/eslint/issues/8832)  
In the future there will also be a chance to disable the rule entirely for jsx and rely on `react/jsx-indent` instead: [#8594](https://github.com/eslint/eslint/issues/8594)
