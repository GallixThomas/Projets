FROM debian
RUN apt-get update -yq && apt-get upgrade -yq
RUN apt-get install nodejs -yq
RUN apt-get install npm  -yq
RUN npm init -yq
RUN npm install express cors body-parser
ADD . .
