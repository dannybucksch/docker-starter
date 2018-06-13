npm run build

if [ "$NODE_ENV" == "prod" ] ; then
  npm run start
else
  npm run dev
fi
