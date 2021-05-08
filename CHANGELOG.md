## Update 08/05/2021
- Updated to **Angular 11.0.0**

## Update 07/02/2020
- Updated to **Angular 9.0.0**

## Update 30/05/2019
- Updated to **Angular 8.0.0**

## Update 12/05/2019
- Updated to **Angular 7.2.15**
- Updated to `@angular/material@7.3.7`

## Update 11/09/2017
- Updated to **Angular 5.0**

## Update 03/24/2017
- Updated to **Angular 4.0**
- Updated to `@angular/cli@1.0.0`

## Update 02/23/2017
- Updated to `typescript@2.2.1`

## Update 02/16/2017
- Updated to `@angular/cli@1.0.0-beta.32`
- Added CHANGELOG.md 

Please check the following link for any breaking changes
https://github.com/angular/angular-cli/blob/master/CHANGELOG.md#100-beta32-2017-02-17


## Update 02/16/2017
It seems `@angular/material@2.0.0-beta.2` introduced some code breaking updates, I updated the code to reflect changes. One of most important change was introduction of `<md-input-container>` which replaced `<md-input>` as a wrapper. Please see the example below.

    <md-input-container>
    <input mdInput #nickname placeholder="Nickname" maxlength="50" />
    <md-hint align="end">
        {{nickname.value.length}} / 50
    </md-hint>
    </md-input-container>

**Note**: Although the examples on https://material.angular.io/components/component/input uses `md-input` directive, `mdInput` was the correct one, possibly a documentation error.

## Update 02/14/2017
Updated to `@angular/cli@1.0.0-beta.31`

NOTE: Please don't forget to update your global angular cli installation, too. If you get `You have to be inside an angular-cli project in order to use the serve command.` error or somehow can't upgrade to the latest global package you can use the local ng bin as;

    ./node_modules/\@angular/cli/bin/ng serve