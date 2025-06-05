pushd ..
npm run build
popd
rm -fr ./node_modules/.vite
rm -fr ./node_modules/\@phoenixillusion/godot-scene-loader
npm install --install-links ..
npm run dev
