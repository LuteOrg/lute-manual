# Starting and stopping

These scripts are on a Mac; Linux will be the same, Windows slightly different.  They're rough guides only, your system may vary.

* [Python/pip](#if-using-pip)
* [Docker](#if-using-docker)
* [Source](#if-you-installed-from-source)

You can usually [write a script](#startup-scripts) to make your life easier.

## If using pip

Assuming you're using venv:

```
cd ~/my_lute

# Activate the virtual environment
source myenv/bin/activate

# Start
python -m lute.main

# ... Open your web browser to http://localhost:5000.

# Leave the terminal window open while you're using Lute!

# When done, hit Ctl-C to stop

deactivate
```

### Custom config.yml

By default, Lute stores your data in the appropriate "user data" directory, as determined by the [PlatformDirs](https://pypi.org/project/platformdirs/) library.

If you want to change that or a few other basic settings, you can create a custom `config.yml` file and store it in the same folder where you run `lute.main`:

* Copy the
[config.yml.example](https://raw.githubusercontent.com/luteorg/lute-v3/master/lute/config/config.yml.example)
to a new file named `config.yml` in your Lute folder
* edit and save it

Lute will automatically use that `config.yml` file when you run `python -m lute.main`.

### Python/pip startup options

The python `lute.main` defaults for Lute startup should be fine for most people, but some things can be customized.

```
$ python -m lute.main --help
usage: main.py [-h] [--port PORT] [--config CONFIG]

Start lute.

optional arguments:
  -h, --help       show this help message and exit
  --port PORT      Port number (default: 5000)
  --config CONFIG  Custom path to override config file, if it's not named config.yml
```

e.g.

```
python -m lute.main --port 9876 --config ./my_personal_config.yml
```


## If using Docker

Assuming you have your docker compose set up:

```
cd ~/my_lute_docker

# Run it:
docker compose up

# ... Open your web browser to http://localhost:5000.
# When done, hit Ctl-C to stop
```

You can also run it as a background job:

```
docker compose up -d
# ... use Lute, then to stop it:
docker compose down
```

## If you installed from source

```
cd ~/my_lute_source
source .venv/bin/activate
inv start   # or "python -m lute.main"
# ... etc.
# Ctl-C when done.
deactivate
```

# Startup scripts

Scripting is for everyone!  Well, sort of.  But for tedious commands like the above, it's perfect.  Some ideas below:

## On a Mac, with pip:

I start Lute with a small `start.sh` bash script containing the following:

```
#!/bin/bash

# Start venv, pull a version from pypi if specified, and start lute with this config.

source .venv/bin/activate

VERSION="$1"
if [[ -z "$VERSION" ]]; then
    echo "Using existing install."
else
    echo "Pulling version $VERSION"
    pip install --upgrade lute3==${VERSION}
fi

open http://localhost:9876
python -m lute.main --port 9876
```

With this, I just `cd ~/lute; ./start.sh 3.0.0`.  The script fetches that version from Pypi, installs it, and starts a browser.  Magic.

## On Windows, with pip:

Open Notepad, and paste the following into a new file:

```
@echo
:: edit the file path below!!
cd **LUTE-FOLDER-FILE-PATH**
call myenv\Scripts\activate

:: Start a new Command Prompt instance with the activated virtual environment
start cmd /k python -m lute.main
```

Save that file as, say, `lute.bat`.  Create a shortcut to this .bat file, and put it anywhere, pin it, etc as needed.  Then you can start Lute with by double-clicking this file.