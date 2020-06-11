## Let There Be Light

This project uses a Raspberry Pi, Google Home, and IFTTT, as well as handmade hardware, to automate the opening and closing of curtains/blinds as a smart home application.

### Cloning the repository and running the software

1. Ensure you have installed node.js on your device. It is available from https://nodejs.org/en/download/
2. Fork or clone this repository onto your device. 
3. In the console, run `npm install` to install the required components.
4. In app.js, change `PASS = ` to your chosen password
5. Run `npm start` or `node app.js` to launch the server

When you make a GET or POST request to the server, use the structure: 
`http://ipaddress/api/<command>?password=<yourpassword>`

where `<command>` = `open` or `close`

### IFTTT Integration

This project can be operated by making GET requests in a web browser to the server, for example if a Google Home device is not available. However, the project works much better as a smart home application using a Google Home device and IFTTT.

To set up IFTTT triggers:

1. Go to IFTTT.com and create an account if you don't have one
2. Go to IFTTT.com/create
3. Click the <b>+This</b> in <b>If +This Then That</b>
4. Search for and select <b>Google Assistant</b>. You will be required to connect your Google account if you haven't before
5. Select <b>Say a simple phrase</b>
6. Fill in the fields as follows, adjusting as you see desire:
    * What do you want to say = Open the curtains
    * What do you want the Assistant to say in response? = Okay. Opening the curtains
7. Click <b>Create Trigger</b>, then click the <b>+That</b> in <b>If This Then +That</b>
8. Search for and select <b>Webhooks</b>, and then <b>Make a web request</b>
9. Fill in the fields as follows, adjusting as you see desire:
    * URL = `http://ipaddress/api/open?password=<yourpassword>`
    * Method = <b>GET</b> or <b>POST</b>
    * Content Type = <b>text/plain</b>
10. Click <b>Create Action</b>, then <b>Finish</b>
11. Repeat the same process from step 2 with the following adjustments:
    * In step 6 change <b>open</b> to <b>close</b> and <b>opening</b> to <b>closing</b>
    * In step 9, set the URL = `http://ipaddress/api/close?password=<yourpassword>`

You should now be able to issue voice commands to a Google Home/Google Assistant device and web requests will be made automatically to your server.

### Hardware Dependencies

This project uses:

* A Google Home
* A Raspberry Pi (I used a Pi Zero W running Raspbian, any RPi with WiFi capability should work)
* Prototyping Breadboard
* 6V DC Motor
* L293D H-Bridge Motor Driver
* Jumper wires
* 4xAA battery pack
* Handmade motor wheel
* Curtains/blinds with bobbly pull cord

### Online Resources

* This project is inspired by and based on `krpeacock`'s `google_home_starter` project
    * The instructable for his project can be found at `https://www.instructables.com/id/Google-Home-Raspberry-Pi-Power-Strip/`
    * The GitHub page for his project can be found at `https://github.com/krpeacock/google_home_starter`
    * Credit to Kyle Peacock for the IFTTT integration and original Software design
* Circuit design for RPi motor control based on tutorial at `https://business.tutsplus.com/tutorials/controlling-dc-motors-using-python-with-a-raspberry-pi--cms-20051`
* Datasheet I used for the L293D Motor Driver can be found at `https://static.rapidonline.com/pdf/82-0192.pdf`
* Node.js can be downloaded from `nodejs.org/en/download` and documentation can be found at `nodejs.org/en/docs`
* IFTTT website at `IFTTT.com`
* Raspberry Pi Zero GPIO Diagram:
![RPi GPIO Diagram]()

### Hardware Build

This project depends on handmade hardware to perform the physical action of opening curtains/blinds.

The hardware is shown below, with jumper wires from the Raspberry Pi's GPIO pins to the L293D on the prototyping breadboard, and wires from the L293D to the motor.

![Circuit Overview]()
![RPi GPIO Connections]()
![Breadboard Circuit]()
![Motor Connections]()
![Handmade Motor Wheel]()

Circuit Connections:

* Pi 3.3V to L293D pin X ()
* Pi GND to L293D pin X ()

* PI GPIO to L293D pin X ()
* PI GPIO to L293D pin X ()
* PI GPIO to L293D pin X ()

* Battery pack + wire to breadboard + power rail (Power)
* Battery pack - wire to breadboard - power rail (Ground)

* Breadboard + power rail (Power) to L293D pin X ()
* Breadboard - power rail (Ground) to L293D pin X ()
* L293D pins W, X, Y, Z to breadboard - power rail (Ground)
* L293D pin X () to motor
* L293D pin X () to motor
