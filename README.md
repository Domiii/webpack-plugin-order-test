Run `npm start` to reproduce the problem:

1. It builds the same input file (`src/index.js`) in two different versions: (i) one modded with the custom `@dbux/babel-plugin`, (ii) one the original.
1. You see that if the babel plugin modifies the code, `webpack.DefinePlugin` fails to make the replacements.
1. Also note that it builds it once each for webpack versions v4 and v5. They have the same issue.

The final output (or a manual inspection of the output files in `dist`) indicate that replacement worked if no modification took place. It looks something like this:

> app-5.js: good
> 
> app-5-modded.js: bad
> 
> app-4.js: good
> 
> app-4-modded.js: bad
