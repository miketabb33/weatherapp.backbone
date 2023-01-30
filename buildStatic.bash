echo "building..."
! test -d "dist" && mkdir dist

echo "dist directory exists. copying html and css"

ts-node buildIndex.ts
cp "public/styles.css" "dist"

echo "html and css successfully copied."