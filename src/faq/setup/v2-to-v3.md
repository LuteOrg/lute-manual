# Migrating from v2 to v3

## Database and images

If you're already using Lute v2 (written in PHP), and want to migrate to v3, it's pretty straightforward: you just have to move some files around.

Step 1. [install Lute v3](../install/install.md), and start it up.  Then:

### For non-Docker users

2. In the top right corner of the home screen, click About > Version and software info
3. The "Data path" folder is where you should put your database and images, replacing the files that Lute v3 automatically put there.
4. **Stop Lute v3**
5. Replace the files that Lute created in the "Data path" folder with your files.
6. Start Lute up again.

### For Docker users

It's even easier: when you started Lute v3, you had to mount some directories to the container.

2. Shut down Lute v3!
3. Put your database and image folder in the folder that you mounted to the `/lute_data` directory, replacing the files that Lute created there.
6. Start Lute up again.

## Backup settings

Lute v2 has backup settings stored in the `.env` file.  v3 uses a Settings screen. The mapping of values from the `.env` file is obvious.

## Custom styles

Lute v2 uses a "custom_styles.css" file in the data folder.  v3 uses a Setting text box, so copy any content from your custom_styles.css file into Lute v3 Settings.