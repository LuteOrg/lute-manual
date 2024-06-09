# Command line jobs

While Lute is almost solely a web app, it has some jobs that are run from the terminal, outside of the browser.

* `hello`: Proof-of-concept command
* `book_term_export`: Export a data file for all terms in a given book.
* `language_export`: Export a data file of all terms in a language.

## How to run the jobs

**These jobs are (currently) only runnable through the command line for pip installs.**

Lute does not need to be running when you're running a command!  Open a terminal, change directory to your Lute folder, and enter the following commands:

```
source .venv/bin/activate    # Activate your virtual environment.
flask --app lute.app_factory cli <command_name> [arg1] [arg2...]
```

The `--app lute.app_factory` part is **required**[^these-calls-are-ugly].  You might be able to [export environment variables](https://flask.palletsprojects.com/en/2.3.x/cli/#environment-variables-from-dotenv) to simplify your calls.

## Sample calls

### `book_term_export`

```
# Usage: flask --app lute.app_factory cli book_term_export [OPTIONS] BOOKID OUTPUT_PATH
# 
#   Get all terms for the given book, and write a data file of term frequencies
#   and children.

flask --app lute.app_factory cli book_term_export 443 my_book.csv
```

### `language_export`

```
# Usage: flask cli language_export [OPTIONS] LANGUAGE OUTPUT_PATH
# 
#   Get all terms from all books in the language, and write a data file of term
#   frequencies and children.

flask --app lute.app_factory cli language_export Spanish sp_terms.csv
```

### List all jobs

```
flask --app lute.app_factory cli --help
```

### See help about a job

```
flask --app lute.app_factory cli <command_name> --help
```


## config.yml file

If you have a [custom config.yml](./starting-and-stopping.md#custom-configyml), Lute jobs will use those settings; otherwise, it uses the built-in defaults.

## Why aren't these built into the UI?

Good question, here are some reasons:

* **Unsure how to add to UI.** Lute is primarily for reading, and I've tried to keep the UI clean and focused on that.  Some things are _related_ to Lute but don't necessarily fall within its main purpose.
* **Long-running jobs.** Some jobs might take a _long_ time to complete.  While there are ways to have the server communicate back to a browser client (WebSockets), I have no experience with these things.
* **"Good enough" is better than perfect.** Shipping something working is better than trying to perfect it.  Sometimes jobs are a hacky but effective way to get things out the door.

## Docker users

You have a few ways to run command-line jobs, if your Lute runs in Docker.  Both are a bit janky, so pick your poison.  My preference would be the first one, just because you don't have to install anything new.

### 1. ssh into the running Docker instance

If your container is running, you can jump into it and run commands.  For example:

```
$ docker ps

CONTAINER ID   IMAGE                           COMMAND            CREATED          STATUS          PORTS                    NAMES
4a01240e5678   jzohrab/lute3:latest            "/lute/start.sh"   52 seconds ago   Up 52 seconds   0.0.0.0:5000->5000/tcp   lute_test_docker-lute-1

# Connect to the running container
$ docker exec -it lute_test_docker-lute-1 /bin/bash

# Run the export.  Put the file in the lute_data folder so it's available back on the host.
root@4a01240e5678:/# flask --app lute.app_factory cli language_export English ./lute_data/MY_DATA.csv
Loading data for book Tutorial ...
... etc ...

# Leave the container
root@4a01240e5678:/# exit

# Back on the host system!
$ ls data
README.md	MY_DATA.csv	lute.db		userimages
```

### 2. With pip

* Install Lute into a virtual environment using pip
* Create a config.yml file with the data folder pointing to where your lute.db is stored
* Run the commands as above.


---

[^these-calls-are-ugly]: _Note from the dev (me!):_ I recognize how ugly the "--app lute.app_factory" portion of the command is, but it is not trivial to get rid of.  The commands are built on part of the framework that Lute uses, and there is no easy way to avoid the "--app" flag, as far as I know.  I tried other design options, but they all had drawbacks.  In future, these jobs may be incorporated into Lute's UI.  For now, this is good enough.
