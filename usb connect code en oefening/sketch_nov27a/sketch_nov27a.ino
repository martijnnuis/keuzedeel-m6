void setup() {
  Serial.begin(115200);
pinMode(13, OUTPUT);
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

  if(readString.indexOf("test") >= 0){
    digitalWrite(13,HIGH);
    delay(200);
    digitalWrite(13,LOW);
  }

  Serial.println("Arduino received " + readString);
  readString = "";
 }

}
