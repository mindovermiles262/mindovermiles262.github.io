#!/usr/bin/env bash
printf "[*] Shell: "
echo $0

printf "[*] OS: "
uname -a 

printf "[*] Ruby Version: "
ruby -v

printf "[*] Which Ruby: "
which ruby

printf "[*] Rbenv Version: "
rbenv -v

printf "[*] Installed Ruby (rbenv) Versions: \n"
rbenv versions | sed -e $'s/^/\t/'

echo "[*] Bash Profile:"
tail -n 10 ~/.bash_profile | sed -e $'s/^/\t/'

echo "[*] BashRC:"
tail -n 10 ~/.bashrc | sed -e $'s/^/\t/'
