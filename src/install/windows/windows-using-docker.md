# Windows using Docker

These are step-by-step instructions for installing Lute using Docker.

> Note: this assumes that you have Docker already.  If not, install [Docker for Windows](https://docs.docker.com/desktop/install/windows-install/).  If your system doesn't support Docker, you can't use it!

## 1. Start Docker Desktop.

This starts the service that will actually run the Lute Docker container.

## 2. Create the necessary folders.

* Go to any folder, for example, your "My Documents" folder.

* Create a folder called `my_lute`, however you'd like (e.g., right-click on a blank space in the folder location, select "New" then "Folder", and rename the folder `my_lute`)

* Double-click on the `my_lute` folder to enter it.

* Within that folder, create two more folders, `data` and `backups`.

## 3. Create `docker-compose.yml`

* Open Notepad, and create a new file with the following content:

```
version: '3.9'
services:
  lute:
    image: jzohrab/lute3:latest
    ports:
      - 5001:5001
    volumes:
      - ./data:/lute_data
      - ./backups:/lute_backup
```

* Save this file into the `my_lute` folder you created above.

## 4. Open a command prompt, and go to the `my_lute` folder

> Your system may vary on how to find the command prompt ... Google can help!

* Open the "Start" menu and type "cmd". Click "Command Prompt".

* In the command prompt, go to your `my_lute` directory by using the `cd` command:

```
cd "C:\My Documents\my_lute"
```

* To confirm you're in the right spot, at the command prompt type `dir`.  You should get _something_ like this:

```
dir
Volume in drive C has no label.
Volume Serial Number is B86A-EF32

Directory of C:\My Documents\my_lute

11/30/2023  01:40 PM <DIR>  .
11/30/2023  01:40 PM <DIR> ..
11/30/2023  11:05 AM <DIR> data
11/30/2023  11:05 AM <DIR> backups
11/30/2023  01:16 PM docker-compose.yml
```

I'm totally paraphrasing here ... The important thing is that your directory contains the `data`, `backups`, and `docker-compose.yml` file!

## 5. Run it!

If everything is set up, and your Docker Desktop is running, then in that same command prompt, type this:

```
docker compose up
```

This should kick off the docker image download.  Your terminal will show a bunch of messages showing progress, and Lute will start.

## Troubleshooting

Running `docker compose up` may give some errors.  Unfortunately, every system is different, and here Google is your friend.

* The error "error during connect: this error may indicate that the docker daemon is not running" is most commonly caused by the Docker daemon (the service) not running.  So be sure you've started your Docker Desktop.
* Per the StackOverflow post ["Docker cannot start on Windows"](https://stackoverflow.com/questions/40459280/docker-cannot-start-on-windows), you may need to relaunch your command prompt as "administrator"