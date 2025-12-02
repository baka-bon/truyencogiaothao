find . -type f -name "*.html" -mindepth 2 -maxdepth 2 -exec perl -0777 -i -pe 's/https:\/\/truyencogiaothao\.top\/wp-includes\/(.+?)\.js\?ver=([\w.]+)/wp-includes\/$1_ver=$2.js/mg' {} \;
find . -type f -name "*.html" -mindepth 3 -maxdepth 3 -exec perl -0777 -i -pe 's/https:\/\/truyencogiaothao\.top\/wp-includes\/(.+?)\.js\?ver=([\w.]+)/..\/wp-includes\/$1_ver=$2.js/mg' {} \;
find . -type f -name "*.html" -mindepth 4 -maxdepth 4 -exec perl -0777 -i -pe 's/https:\/\/truyencogiaothao\.top\/wp-includes\/(.+?)\.js\?ver=([\w.]+)/..\/..\/wp-includes\/$1_ver=$2.js/mg' {} \;
find . -type f -name "*.html" -mindepth 5 -maxdepth 5 -exec perl -0777 -i -pe 's/https:\/\/truyencogiaothao\.top\/wp-includes\/(.+?)\.js\?ver=([\w.]+)/..\/..\/..\/wp-includes\/$1_ver=$2.js/mg' {} \;
find . -type f -name "*.html" -mindepth 6 -maxdepth 6 -exec perl -0777 -i -pe 's/https:\/\/truyencogiaothao\.top\/wp-includes\/(.+?)\.js\?ver=([\w.]+)/..\/..\/..\/..\/wp-includes\/$1_ver=$2.js/mg' {} \;
