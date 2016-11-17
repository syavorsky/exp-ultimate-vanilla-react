#!/bin/bash

DEST=${1:-dist}
mkdir -p $DEST
rm $DEST/*.{js,gz}

cat vendor/{react,react-dom}.min.js > $DEST/vendor.js
find app -name '*.js' | xargs cat > $DEST/app.js

gzip -k dist/*.js

echo Saved to $DEST/
