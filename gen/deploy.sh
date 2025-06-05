rm -fr ./dist
mkdir dist

cd dist
cp ../types.ts .
tar -xf ../out.tar
cd ..

rm -fr ../src/instance/types/gen/defaults
rm ../src/instance/types/gen/*.ts
mv ./dist/defaults ../src/instance/types/gen/defaults
mv ./dist/*.ts ../src/instance/types/gen/.
