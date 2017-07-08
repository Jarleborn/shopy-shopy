cd client
gnome-terminal -e "npm start"
cd ../dashboard
gnome-terminal -e "npm start && y"
cd ../server
gnome-terminal -e "npm run dev"
cd ../
atom .
