# Create vulnereable image (CVE-2016-3714)
# source: https://snyk.io/blog/hacking-docker-containers-by-exploiting-base-image-vulnerabilities/
FROM node:6.1.0-wheezy 

RUN mkdir /usr/src/goof
COPY . /usr/src/goof
WORKDIR /usr/src/goof

RUN npm install
# RUN npm i multer@2.0.0-alpha.5 --save

EXPOSE 80
CMD ["node", "."]
