FROM mongo

COPY ./seed/articles.json /articles.json
COPY ./seed/tags.json /tags.json

ADD bin/mongodb.sh bin/mongodb.sh

RUN chmod +x bin/mongodb.sh

CMD bin/mongodb.sh