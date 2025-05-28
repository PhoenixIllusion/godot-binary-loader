rm -fr ./dist
mkdir dist

cd dist
cp ../types.ts .
tar -xf ../out.tar
cd ..

rm -fr ../src/loader/instance/types/gen/defaults
rm ../src/loader/instance/types/gen/*.ts
mv ./dist/defaults ../src/loader/instance/types/gen/defaults
mv ./dist/*.ts ../src/loader/instance/types/gen/.
