echo "building..."
! test -d "dist" && mkdir dist

echo "dist directory exists. copying html and css"

cp "index.html" "dist"
cp "styles.css" "dist"
echo "html and css successfully copied."