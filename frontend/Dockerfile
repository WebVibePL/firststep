# Specify full version of NODE
FROM node:10.1.0


# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn


# Install an HTTP server
RUN npm install -g serve

# Run serve when the image is run.
CMD serve -s build

# Let Docker know about the port that serve runs on.
EXPOSE 5000


# Install all dependencies of the current project.
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install

# Copy project files into the image.
COPY . .

# Build
RUN npm run build --production




##############
## COMMANDS ##

# docker build -t react-docker .
# docker run -it --rm -p 5000:5000--name react-demo react-docker