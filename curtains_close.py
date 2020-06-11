import RPi.GPIO as GPIO
from time import sleep

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

motorInput1 = 16
motorInput2 = 18
motorEnable = 22

GPIO.setup(motorInput1, GPIO.OUT)
GPIO.setup(motorInput2, GPIO.OUT)
GPIO.setup(motorEnable, GPIO.OUT)

GPIO.output(motorInput1, GPIO.HIGH)
GPIO.output(motorInput2, GPIO.LOW)
GPIO.output(motorEnable, GPIO.HIGH)

sleep(1.7)

GPIO.output(motorEnable, GPIO.LOW)

GPIO.cleanup()
