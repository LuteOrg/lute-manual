# Updating Lute

First, you **must [stop Lute](./starting-and-stopping.md)**.

(Lute or Python may lock certain files while running, shutting down ensures that things will update safely.)

Then:

## ... if using pip

```
cd /path/to/your/lute         # change this line. :-)
source myenv/bin/activate     # Activate your virtual environment. See below for Windows
pip install --upgrade lute3
```

For Windows, instead of `source myenv/bin/activate`, do

```
.\myenv\Scripts\activate.bat
```

## ... if using Docker

This assumes you're using a `docker-compose.yml` file.

```
cd /path/to/your/lute    # change this line. :-)
docker compose pull
docker compose up -d --remove-orphans
```

(Note: if you're using Lute v2, you'll first have to [migrate to v3](../faq/v2-to-v3.md).)

## ... if using source

I assume you already know what you're doing, but here's a rough outline anyway:

Stop Lute.

```
git remote add upstream git@github.com:luteorg/lute-v3.git
git fetch upstream
git merge upstream/master
```

There are other ways to do this, like PR master into your own fork, etc.

### Keeping up-to-date when installing from source

All Lute development happens on the `develop` branch in the main repo, and when launched that code is merged into `master`.

If you install from source and make any modifications to Lute -- which _of course_ you're welcome to do -- then you may want to periodically check the `develop` branch in the main Lute repo to ensure that you can merge in `master` when it is released.  Here's roughly what you'd do:

```
# Commit your local changes
git add [your files]
git commit -m "[changes]"

git remote add upstream git@github.com:luteorg/lute-v3.git
git fetch upstream

# Check commits, if you want
git log HEAD..upstream/develop --oneline

git merge upstream/develop
```

Lute source code could change at any time, and I **almost certainly will not** be able to help you resolve code conflicts.  With that said, I'm certainly interested in any changes that would be beneficial to the health/clarity of the code or would be useful for others, so if you make changes that you think would be good, let me know!