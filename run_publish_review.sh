cd ..
ROOT_DIR=$(pwd)
GAME_NAME=myviettel-sieuvutru
cd $GAME_NAME

/Applications/CocosCreator/Creator/2.4.4/CocosCreator.app/Contents/MacOS/CocosCreator --path . --build "platform=web-mobile"
# C:/Users/SQ/AppData/Local/Programs/CocosDashboard_1.0.6/resources/.editors/Creator/2.4.4/CocosCreator.exe --path . --build "platform=web-mobile"
cd $ROOT_DIR/$GAME_NAME-review
git reset --hard
git pull
rm -rf *
cp -R $ROOT_DIR/$GAME_NAME/build/web-mobile/* .
git add .
git commit -m "- Update $GAME_NAME"
git push
cd $ROOT_DIR/$GAME_NAME
