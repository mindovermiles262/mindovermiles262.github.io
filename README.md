# Building Docker Container

Build an image of the repo:
`docker build -t <TAG> .` 
The `<TAG>` will be the name of the image you build. For example, `-t mindovermiles:latest`

Once built, start the container:
`docker run --name <Container Name> -p <HostPort>:<ContaierPort> -d <Image>` like
`docker run --name website -p 8080:80 -d mindovermiles:latest`

the above will start the container and run it and can be accessed at http://localhost:8080

