# Installation

There are currently three different methods to install Lute v3 on your system, with different system requirements:

* [Python package install using `pip`](install.md#using-pip)
* [Docker](install.md#using-docker)
* [From source](install.md#from-source)

I can't recommend any particular installation method: they all have trade offs.  My personal preference is to install using pip.  If you're studying Japanese and your system supports Docker, I'd recommend using Docker as it the lute3 image includes some other needed dependencies.

---

**Windows users:** The instructions below are for Unix/Mac users.  Windows installations are _similar_, but have some challenges, so see [Installing on Windows](./windows/index.md).

---

## Using pip

System requirements:

* Python 3.8+ and pip.  Run `python3 --version` from the terminal to check.
* Japanese learners will also need to [install MeCab](./mecab.md)

Lute can be installed from [https://pypi.org/project/lute3/](https://pypi.org/project/lute3/).  Here's a summary of the instructions from that page for Linux and Mac, Windows will be similar.  All of these commands are run from the Terminal.

<!-- Tab links -->
<div class="tab">
  <button class="tablinks active" onclick="openTab(event, 'piptab', 'PipSteps')">Steps</button>
  <button class="tablinks" onclick="openTab(event, 'piptab', 'PipScriptNix')">Steps as a copy-paste script</button>
</div>

<!-- Tab content -->
<div id="PipSteps" class="tabcontent piptab">

Create a Lute folder.  This can be anywhere on your system.

```
mkdir -p ~/my_lute
cd ~/my_lute
```

Set up the virtual environment.  If this gives an error, check your Python installation (see "system requirements").

```
python3 -m venv myenv
source myenv/bin/activate
```

Install Lute.

```
pip install --upgrade lute3
```

Start Lute.

```
python -m lute.main
```
</div>

<!-- Tab content -->
<div id="PipScriptNix" class="tabcontent piptab">

```
# Create a Lute folder
mkdir -p ~/my_lute
cd ~/my_lute

# Set up virtual environment.  If this line gives an error, see "system reqs" above.
python3 -m venv myenv
source myenv/bin/activate

# Install
pip install --upgrade lute3

# Start
python -m lute.main
```
</div>

Now open your web browser to `http://localhost:5001`.  **Leave the terminal window open while you're using Lute.** When you're done, hit `Ctl-C` to stop Lute.

You can start lute on a different port if needed:

```
python -m lute.main --port 9876
```


## Using Docker

System requirements: Docker[^what-is-docker]

Lute has a pre-built docker image at [https://hub.docker.com/r/jzohrab/lute3](https://hub.docker.com/r/jzohrab/lute3).  There are notes on that page about the image.

Using a `docker-compose.yml` file:

<!-- Tab links -->
<div class="tab">
  <button class="tablinks active" onclick="openTab(event, 'dockertab', 'DockerSteps')">Steps</button>
  <button class="tablinks" onclick="openTab(event, 'dockertab', 'DockerScriptNix')">Steps as copy-paste script</button>
</div>

<!-- Tab content -->
<div id="DockerSteps" class="tabcontent dockertab">

Create a Lute folder.  This can be anywhere on your system.

```
mkdir -p ~/my_lute_docker
cd ~/my_lute_docker
```

Create some subfolders (These subfolders will be mounted to the container)

```
mkdir data
mkdir backups
```

Create a file named `docker-compose.yml` in the `my_lute` folder with the following content:

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

Run it:

```
docker compose up
```
</div>

<!-- Tab content -->
<div id="DockerScriptNix" class="tabcontent dockertab">

```
# Create Lute folders
mkdir -p ~/my_lute_docker
cd ~/my_lute_docker
# (These subfolders will be mounted to the container)
mkdir data
mkdir backups

# Docker-compose.yml:
cat > docker-compose.yml <<EOF
version: '3.9'
services:
  lute:
    image: jzohrab/lute3:latest
    ports:
      - 5001:5001
    volumes:
      - ./data:/lute_data
      - ./backups:/lute_backup
EOF

# Run it:
docker compose up
```
</div>

As with the `pip` installation, you can change the port if your machine is already using port 5001, e.g.:


```
...
    ports:
      - 9876:5001
...
```

## From source

Developers and gearheads can install Lute from source: see the [Lute repository](https://github.com/luteorg/lute-v3/wiki/Development).

If you want to develop Lute, you'll also need to [install MeCab](./mecab.md).

If you install from source and tinker with the code, make sure you can update later!  See [Keeping up-to-date when installing from source](../usage/updating.md#keeping-up-to-date-when-installing-from-source).

---

[^what-is-docker]: Docker is a containerization platform that allows you to run applications in a sandboxed environment (ref the [Docker documentation](https://docs.docker.com/)).  **Docker is not available or is problematic on some systems, particularly Windows.**



<script>
function openTab(evt, tabclass, tabName) {
  // Hide all tabs.
  var tabcontent = document.getElementsByClassName(tabclass);
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the specified tab.
  document.getElementById(tabName).style.display = "block";

  if (evt == null) {
    // First time running this, there is no
    // "clicked link", so leave all styles as-is.
    return;
  }
  
  // Remove "active" from all tablinks.
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Add "active" to clicked tab.
  evt.currentTarget.className += " active";
}

openTab(null, 'piptab', 'PipSteps');
openTab(null, 'dockertab', 'DockerSteps');
</script>
