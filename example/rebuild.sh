pushd ../../godot-scene-reader/
npm run build
popd
rm -fr ./node_modules/.vite
rm -fr ./node_modules/\@phoenixillusion/godot-scene-reader
npm install --install-links
npm run dev
