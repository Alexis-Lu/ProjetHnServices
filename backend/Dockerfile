FROM openjdk:17
EXPOSE 8086
ADD target/backend.jar backend.jar
ENTRYPOINT [ "java", "-jar", "/backend.jar" ]