#include <Servo.h>
//rood
 int servoPin = 2;
 int servoPin2 = 3;
 //geel
 int servoPin3 = 4;
 int servoPin4 = 5;
 //groen
 int servoPin5 = 6;
 int servoPin6 = 7;

 //rood
 Servo Servo1;
 Servo Servo2;
 //geel
 Servo Servo3;
 Servo Servo4;
 //groen
 Servo Servo5;
 Servo Servo6;

 
 
void setup() {
 Serial.begin(115200);
 //rood
  Servo1.attach(servoPin);
  Servo2.attach(servoPin2);
  //geel
  Servo3.attach(servoPin3);
  Servo4.attach(servoPin4);
  //groen
  Servo5.attach(servoPin5);
  Servo6.attach(servoPin6);
}

void loop() {
  static String readString = "";
  while(Serial.available()){
    delay(3);
    if(Serial.available() > 0) {
    char c = Serial.read();
    readString += c;
    }
  }
  

  
  if (readString.length() > 0){
   readString.trim();

   if(readString.indexOf("rood") >= 0){
    Servo2.write(0);
    delay(250);
    Servo2.write(90);
    delay(2000);
    Servo1.write(90);
    delay(155);
    Servo1.write(0);
   }
 


  if(readString.indexOf("geel") >= 0){
    Serial.println("uno: geel");
    Servo3.write(90);
    Servo4.write(0);
    delay(2000);
    Servo3.write(0);
    Servo4.write(90);;
  }
 

  if(readString.indexOf("groen") >= 0){
    Servo5.write(90);
    Servo6.write(0);
    delay(2000);
    Servo5.write(0);
    Servo6.write(90);
  }

  Serial.println("Arduino received " + readString);
  readString = "";

 

   }
}
