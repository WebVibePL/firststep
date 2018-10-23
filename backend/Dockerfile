# fetch java image
FROM maven:3.3.9-jdk-8

# application placed into /opt/app
RUN mkdir -p /opt/app
WORKDIR /opt/app

# copy app pom and sources
COPY pom.xml /opt/app/
COPY src /opt/app/src
COPY .mvn /opt/app/.mvn
COPY mvnw /opt/app/

RUN ls -la /opt/app/src
RUN ls -la /opt/app/.mvn
RUN ls -la /opt/app/mvnw

RUN mvn clean install

RUN rm -R src
RUN rm pom.xml

# local application port
EXPOSE 8080

# run app
CMD ["java", "-jar", "target/firststep-0.0.1-SNAPSHOT.jar"]