# Create vulnereable image (CVE-2016-3714)
# source: https://snyk.io/blog/hacking-docker-containers-by-exploiting-base-image-vulnerabilities/
FROM node:6.1.0-wheezy 

RUN mkdir /usr/src/goof
COPY . /usr/src/goof
WORKDIR /usr/src/goof

RUN npm update
RUN npm install
CMD ["npm", "start"]
