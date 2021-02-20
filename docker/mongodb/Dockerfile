FROM mongo

COPY ./seed/init.json /init.json
CMD mongoimport --host mongodb --db makestuff --collection articles --type json --file /init.json --jsonArray