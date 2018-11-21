## Pull the mysql:8.0 image
#RUN "rm $(docker ps -a -q) --force"
#RUN "rmi $(docker images -q) --force"

FROM mysql:8.0 as mysqlbuilder

#install mysql jakis kurwa error jest
#run mysql
#run -d -p 3306:3306 mysql
#ENV MYSQL_DATABASE travel
RUN ["sed", "-i", "s/exec \"$@\"/echo \"not running $@\"/", "/usr/local/bin/docker-entrypoint.sh"]
ENV MYSQL_ROOT_PASSWORD=wjotek123
COPY setup.sql /docker-entrypoint-initdb.d/

FROM mysql:8.0 
#as msqlbuilder
#COPY --from=mysqlbuilder /initialized-db /var/lib/mysql

#RUN "mysql -uroot -p 3306:3306 --password="wjotek123""
#EXPOSE 3060