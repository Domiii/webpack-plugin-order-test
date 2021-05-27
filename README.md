Run `npm start` to reproduce the problem:

1. It builds the same input file (`src/index.js`) in two different versions: (i) one modded with the custom `@dbux/babel-plugin`, (ii) one the original.
1. You see that if the babel plugin modifies the code, `webpack.DefinePlugin` fails to make the replacements.
1. Also note that v4 and v5 have the same issue.

The final output indicates that replacement worked if no modification took place. It looks something like this:

> app-5.js: good
> 
> app-5-modded.js: bad
> 
> app-4.js: good
> 
> app-4-modded.js: bad
