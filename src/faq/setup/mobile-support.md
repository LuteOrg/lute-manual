# Can I run Lute on my phone or pad?

Lute doesn't have a dedicated mobile offline client.  It needs a server to run the backend python code.

You can still use Lute on your iPhone/iPad/whatever, though.

One option is to set up a [web server](./web-server.md) somewhere in the cloud, and access that.  (That might be tricky, I won't be able to help with that.)

If your computer is running Lute, and it's on a Wifi network, you should be able to access it if your phone is on that same network:

* start Lute.  It will say something like `Lute is running.  Open a web browser, and go to: http://localhost:5000`.  The last 4 digits are the port number.
* make a note of your computer's IP address (somewhere in your computer settings ... it might be something like `192.168.1.10`, or `10.0.0.126`.
* in your phone/tablet/whatever, connect to the same Wifi network, start up the browser, and go to `http://<the-ip-address>:<port-number>`.  E.g., on my phone, it was `http://10.0.0.126:9876`, because I run my Lute on port 9876.

Note that your computer has to be running (not asleep), and Lute has to be running!  :-P