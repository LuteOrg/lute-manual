# Can I make Lute secure?

Lute doesn't come with authentication, so if you want to add security, the easiest way to do that is with a server that acts as a gatekeeper to the app (a reverse proxy).  The easiest way to do this is with Docker compose.

> Below is a working example using an nginx reverse proxy that may be useful as a starting point.  One caveat which I haven't bothered investigating further: the session doesn't expire (quickly?), so once you log in, anyone using your same browser will have access.

## docker-compose.yml

```
version: '3.9'
services:
  lute:
    image: jzohrab/lute3:latest
    volumes:
      - ./data:/lute_data
      - ./backups:/lute_backup

  nginx-proxy:
    image: nginx
    ports:
      - "5000:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - .htpasswd:/etc/nginx/.htpasswd
    depends_on:
      - lute
```

Notes:

* This uses the same `lute3` image, but doesn't expose the port
* The `nginx.conf` and `.htpasswd` files will exist in the same folder as this compose file; they're created below
* This maps host port 5000 to the nginx port 80, so the message `http://localhost:5000` when you run `docker compose up` is still valid :-P

## nginx.conf

Content:

```
user  nginx;
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # Allow large audio files.  Increase this if your files are large.
    client_max_body_size 100M;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;

        location / {
            # This nginx server is running in a docker compose environment,
            # so the name "lute" is resolved using compose's dns resolution.
            proxy_pass http://lute:5000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Basic Authentication
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
    }
}
```

## .htpasswd

Use the `htpasswd` command to generate a new `.htpasswd` file.  With username = "username" and password = "password":

```
htpasswd -c ./.htpasswd username
```

generates the following `.htpasswd` file

```
username:$apr1$MNsKt1Ie$vuho4oeZV78PSLApjZ3vm.
```

# Start it up

With the three files in place in the same directory (and the data and backup folders created), you can start it up:

```
docker compose up
```

nginx will ask for username/password authentication, and then everything works as before.